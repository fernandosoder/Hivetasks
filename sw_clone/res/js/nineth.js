f8.prototype.AI = function (a) {
    var b = this,
            c = Ft.R4("textBox withMarginBottom qNoWrap", "transferSearchFilter"),
            d = Ft.R4("", "", Ft.be("dataTable autoWidthCols notBold", "transferSearchResult", Ft.Fj("th", "Date From To Amount Unit Memo".split(" "), {class: "headerRow"}))).css("overflow-x", "hidden");
    a.append(c, d);
    var e = Ft.dc("text", "userFromDblClick", "editTransferSearchFrom"),
            f = Ft.dc("text", "userFromDblClick", "editTransferSearchTo"),
            g = Ft.dc("text", "", "editTransferSearchAmount"),
            h = Ft.dc("text", "", "editTransferSearchRequestId"),
            k = Ft.dc("text", "", "editTransferSearchMemo"),
            l = Ft.dc("text", "", "editTransferSearchDateFrom"),
            m = Ft.dc("text", "", "editTransferSearchDateTo"),
            n = new gt({
                items: [
                    {value: "0", text: "Normal Transfer"},
                    {value: "1", text: "Transfer To Vesting"},
                    {value: "2", text: "Transfer To Savings"},
                    {value: "3", text: "Transfer From Savings"},
                    {value: "4", text: "Cancel Transfer From Savings"},
                    {value: "7", text: "Withdraw Vesting"},
                ],
            }),
            p = new gt({width: "55px", items: [{text: "="}, {text: ">"}, {text: ">="}, {text: "<"}, {text: "<="}]}),
            q = new gt({
                width: "90px",
                items: [
                    {value: "0", text: "HIVE"},
                    {value: "1", text: "HBD"},
                    {value: "2", text: "VESTS"},
                    {value: "3", text: "HP"},
                ],
            }),
            r = new gt({
                items: [
                    {value: "transfer_day", text: "Date"},
                    {value: "transfer_amount", text: "Amount"},
                    {value: "transfer_from", text: "From"},
                    {value: "transfer_to", text: "To"},
                ],
            }),
            t = new gt({
                items: [
                    {value: "DESC", text: "Desc."},
                    {value: "ASC", text: "Asc."},
                ],
            });
    a = Ft.R7("", "transferSearchRefresh", "Search", "", function () {
        var a = l.val().trim(),
                c = m.val().trim();
        a = a ? D.B.HN(a) : 0;
        c = c ? D.B.HN(c) : 0;
        var d = g.val().trim(),
                u = q.bt();
        d && "HP" == H7[u] && ((d = D.o.FN(d, 6)), (u = H7.indexOf("VESTS")));
        b.Eq(n.bt(), e.val().trim(), f.val().trim(), d, p.bt(), u, a, c, k.val().trim(), h.val().trim(), r.bt(), t.bt(), 0);
    }).css("margin-top", "7px");
    d = ie.ib([{html: l, grow: 1}, ie.ic("-", "auto", "7px 8px"), {html: m, grow: 1}]);
    var u = ie.ib([{html: r.an(), grow: 1}, ie.ic("", "10px", "7px 0"), {html: t.an(), grow: 1}]),
            x = ie.ib([{html: p.an(), grow: 0}, ie.ic("", "10px", "7px 0"), {html: g, grow: 1}, ie.ic("", "8px", "7px 0"), {html: q.an(), grow: 0}]),
            v = {margin: "0 0 10px 0"};
    c.append(
            ie.ib([ie.id("From", e, 1, 15), ie.id("To", f, 1, 0)], v),
            ie.ib([ie.id("Type", n.an(), 1, 15), ie.id("Amount", x, 1, 0)], v),
            ie.ib([ie.id("Request Id", h, 1, 15), ie.id("Memo", k, 1, 0)], v),
            ie.ib([ie.id("Date Range", d, 1, 15), ie.id("Order By", u, 1, 0)], v),
            a
            );
    $([l, m]).each(function () {
        $(this).datepicker({changeMonth: !0, changeYear: !0});
    });
};
f8.prototype.Eq = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
    var q = this;
    aH.NE($("#transferSearchRefresh"), !1);
    var r = $("#transferSearchResult");
    0 == p && Ft.gT(r);
    D.Z.Eq(
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            k,
            l,
            m,
            n,
            p,
            function (t) {
                aH.NE($("#transferSearchRefresh"), !0);
                r.find("#transferSearchShowMore,.exportTable").remove();
                for (var u, x, v, y, A, E, B, C = 0; C < t.length; C++)
                    (u = t[C]),
                            (x = u[0]),
                            (v = u[1]),
                            (y = H7[u[2]]),
                            (A = u[3]),
                            (B = moment.unix(Number(u[4]) + HM).local()),
                            (E = u[5] ? aJ.GT(u[5]) : ""),
                            u[6] && aJ.GT(u[6]),
                            !E.startsWith("#") || (v != D.l && x != D.l) || (E = '<a href="#" class="encryptedMemo" title="Click to decrypt" data-memo="' + E + '" data-incoming="' + (v == D.l ? "1" : "0") + '">[ encrypted message ]</a>'),
                            "VESTS" == y && ((y = "HP"), (A = D.o.AL(A, 3))),
                            r.append(
                                    Ft.Fj("td", [D.B.DE(B, !1), ak.EU(x, !0), v ? ak.EU(v, !0) : "-", Bl(A, 3), y, Ft.Fh("span", {class: "transferSearchMemo", title: E + "\n\n(Click to view full memo)"}, E)], {
                                        "data-amount": parseFloat(A),
                                        "data-unit": y,
                                    })
                                    );
                $(".transferSearchMemo")
                        .off("click")
                        .on("click", function () {
                            $(this).find(".encryptedMemo").length || D4.EA($(this).text(), "Memo", {paddingX: 10, paddingY: 10});
                        });
                D.U.Oe();
                if (t.length) {
                    u = "";
                    var F = {HIVE: 0, HBD: 0, HP: 0};
                    r.find("tr:not(.headerRow):not(.footerRow)").each(function () {
                        var a = $(this);
                        A = a.data("amount");
                        y = a.data("unit");
                        F[y] += A;
                    });
                    for (y in F)
                        F[y] && (u += (u ? Lf : "") + Bl(F[y], 3) + " " + y);
                    r.append(Ft.Fj("td", [T7.LJ(13) + "Totals:", {attr: {colspan: 5}, html: u}], {class: "footerRow noExport"}));
                    r.append(
                            Ft.Fj(
                                    "td",
                                    [
                                        {html: '<button id="transferSearchShowMore">Show more...</button>', attr: {colspan: 1}},
                                        {html: '<button class="exportTable">Export to file...</button>', attr: {colspan: 5}},
                                    ],
                                    {class: "noExport"}
                            )
                            );
                    var G = r.find("#transferSearchShowMore");
                    G.button().on("click", function () {
                        aH.NE(G, !1);
                        q.Eq(a, b, c, d, e, f, g, h, k, l, m, n, p + 250);
                    });
                    250 > t.length && aH.NE(G, !1);
                    r.find(".exportTable")
                            .button()
                            .on("click", function () {
                                aH.KT("steemworld-export-transfers.csv", $(this).parents("table"));
                            });
                }
            },
            function () {
                aH.NE($("#transferSearchRefresh"), !0);
            }
    );
};
var f9 = function (a) {
    this.AI(a);
};
f9.prototype.AI = function (a) {
    Ft.mB(
            a,
            "\n #accountVotesResult .accOpen span {\n margin-right: 0;\n }\n #accountVotesResult .ui-button {\n padding: 0 12px;\n }\n #tabToolVotesOverview input[type='text'],\n #tabToolVotesOverview .qSelect,\n #tabToolVotesOverview button {\n width: 99%;\n }\n #accountVotesResult tr th:nth-child(1),\n #accountVotesResult tr td:nth-child(1),\n #accountVotesResult tr th:nth-child(2),\n #accountVotesResult tr td:nth-child(2),\n #accountVotesResult tr th:nth-child(3),\n #accountVotesResult tr td:nth-child(3) {\n text-align: right;\n }\n #accountVotesFilter td {\n padding: 1px 10px 3px 5px;\n }\n "
            );
    a.append(
            '\n <div id="accountVotesFilter" class="textBox withMarginBottom">\n <table class="fullWidth">\n <tr>\n <td>Voter</td>\n <td>\n <input id="editAccountVotesVoter" class="userFromDblClick" type="text">\n </td>\n <td>Author</td>\n <td>\n <input id="editAccountVotesAuthor" class="userFromDblClick" type="text">\n </td>\n <td></td>\n <td>\n <button id="accountVotesRefresh" class="right">Refresh</button>\n </td>\n </tr>\n <tr>\n <td>View</td>\n <td>\n <select id="selectAccountVotesView" disabled>\n <option value="grouped">Grouped List</option>\n <option value="chart">Pie Chart</option>\n </select>\n </td>\n <td>Group</td>\n <td>\n <select id="selectAccountVotesViewGroup">\n <option value="voter,author">Voter, Author</option>\n <option value="voter,author,weight">Voter, Author, Weight</option>\n </select>\n </td>\n <td>Period</td>\n <td>\n <select id="selectAccountVotesPeriod" disabled>\n <option value="7">7 Days</option>\n <option value="14">15 Days</option>\n <option value="30">30 Days</option>\n </select>\n </td>\n </tr>\n </table>\n </div>\n <div>\n <table id="accountVotesResult" class="dataTable fixed"></table>\n </div>\n '
            );
    this.ew = gt.gy(a.find("#selectAccountVotesView"));
    this.ex = gt.gy(a.find("#selectAccountVotesViewGroup"));
    this.ey = gt.gy(a.find("#selectAccountVotesPeriod"));
    this.f2(a);
};
f9.prototype.f2 = function (a) {
    var b = this;
    a.find("#accountVotesRefresh")
            .button()
            .on("click", function () {
                var a = [],
                        d = $("#accountVotesResult"),
                        e = b.ew.bt(),
                        f = b.ex.bt().split(","),
                        g = [],
                        h = [],
                        k = D.O.getItems({op: [Ay], incoming: !0, outgoing: !0, sort: "ts", sort_desc: !0, max_items: 1e6}),
                        l,
                        m;
                (l = $("#editAccountVotesVoter").val()) && h.push({name: "voter", value: l});
                (l = $("#editAccountVotesAuthor").val()) && h.push({name: "author", value: l});
                if (h.length)
                    for (l = k.length - 1; 0 <= l; l--)
                        for (m = 0; m < h.length; m++)
                            if (k[l].data[h[m].name] != h[m].value) {
                                k.splice(l, 1);
                                break;
                            }
                for (h = 0; h < k.length; h++)
                    a.push(jQuery.extend(!0, {}, k[h])), (a[h].data.weight = parseFloat(a[h].data.weight / 100).toFixed(2) + " %");
                k = function (a, b, c) {
                    for (var d, e = 0; e < a.length; e++) {
                        d = !0;
                        for (var f = 0; f < c.length; f++)
                            if (b[c[f]] != a[e][c[f]]) {
                                d = !1;
                                break;
                            }
                        if (d)
                            return a[e];
                    }
                    return null;
                };
                d.empty().append("<tbody/>");
                if ("grouped" == e) {
                    h = [{html: "", width: 85}, {html: "Count", width: 75}, {html: "Amount", width: 95}, {html: "", width: 35}, {html: "Voter", width: 185}, {html: "", width: 35}, "Author"];
                    e = [];
                    for (l = 0; l < f.length; l++)
                        "voter" != f[l] && "author" != f[l] && (h.push(T7.DR(f[l])), e.push(f[l]));
                    d.append(Ft.Fj("th", h, {class: "headerRow"}));
                    for (l = 0; l < a.length; l++)
                        if (((h = a[l]), (m = k(g, h.data, f))))
                            m.count++, m.permlinks.push(h.data.permlink);
                        else {
                            m = {count: 1, permlinks: [h.data.permlink]};
                            for (var n = 0; n < f.length; n++)
                                m[f[n]] = h.data[f[n]];
                            g.push(m);
                        }
                    aI.Bu(g, "count", !0);
                    for (f = 0; f < g.length; f++) {
                        k = g[f];
                        h = [
                            Bl((100 / a.length) * k.count, 2) + " %",
                            k.count,
                            '<button class="accountVotesRefreshAmount">Load</button>',
                            ak.DF(k.voter, "left", !0),
                            ak.ET(k.voter, !0, !0),
                            ak.DF(k.author, "left", !0),
                            ak.ET(k.author, !0, !0),
                        ];
                        for (l = 0; l < e.length; l++)
                            h.push(String(k[e[l]]));
                        h = Ft.Fj("td", h);
                        h.data("author", k.author);
                        h.data("voter", k.voter);
                        h.data("links", k.permlinks);
                        d.append(h);
                    }
                }
                d.find(".accountVotesRefreshAmount")
                        .button()
                        .on("click", function () {
                            var a = [],
                                    b = $(this),
                                    c = b.parent(),
                                    d = b.parents("tr");
                            b = d.data("author");
                            var e = d.data("voter");
                            d = d.data("links");
                            c.text("Loading...");
                            for (var f = 0; f < d.length; f++)
                                a.push({author: b, permlink: d[f]});
                            D.S.Gt(a, !0, function (a) {
                                for (var b = 0, d = 0; d < a.length; d++)
                                    b += parseFloat(D.J.B4(a[d].votes.items, e));
                                c.text(D.B.EQ(b) + " $");
                            });
                        });
            });
};
var gA = function (a) {
    Ft.mB(
            a,
            "\n #tableWitnesses tr th:nth-child(1),\n #tableWitnesses tr td:nth-child(1),\n #tableWitnesses tr th:nth-child(7),\n #tableWitnesses tr th:nth-child(11),\n #tableWitnesses tr td:nth-child(11),\n #tableWitnesses tr th:nth-child(12),\n #tableWitnesses tr td:nth-child(12) {\n text-align: center;\n }\n #tableWitnesses tr th:nth-child(3),\n #tableWitnesses tr td:nth-child(3),\n #tableWitnesses tr th:nth-child(7),\n #tableWitnesses tr td:nth-child(7),\n #tableWitnesses tr th:nth-child(8),\n #tableWitnesses tr td:nth-child(8),\n #tableWitnesses tr th:nth-child(9),\n #tableWitnesses tr td:nth-child(9),\n #tableWitnesses tr th:nth-child(10),\n #tableWitnesses tr td:nth-child(10) {\n text-align: right;\n }\n #tableWitnesses tr[data-active='0'] .uName {\n text-decoration: line-through;\n color: #aaa;\n }\n #tableWitnesses .qCheckbox {\n display: inline-block;\n }\n #tableWitnessVotes th,\n #tableWitnessVotes td {\n width: 25%;\n text-align: right;\n }\n #tableWitnessVotes tr th:nth-child(1),\n #tableWitnessVotes tr td:nth-child(1) {\n min-width: 195px;\n text-align: left;\n }\n #tableWitnessVotes tr th:nth-child(4),\n #tableWitnessVotes tr td:nth-child(4) {\n width: 20%;\n }\n "
            );
    this.AI(a);
};
gA.dN = function (a, b, c, d) {
    a.bf(bh);
    b = a.eZ("WitnessOverview", "Hive Witness Overview").am();
    var e = new gA(b);
    a.ar(c + "Hive Witness Overview");
    a.bF(function () {
        var a = function () {
            return e.Fg();
        };
        Py([[D.C, "AF"]], function () {
            return d(a);
        });
    });
    a.bG();
};
gA.prototype.AI = function (a) {
    a.append(
            '\n <table id="tableWitnesses" class="dataTable autoWidthCols qNoWrap">\n <tr class="headerRow">\n <th>#</th>\n <th>Witness</th>\n <th>Votes&nbsp;(MV)</th>\n <th></th>\n <th>Version</th>\n <th>Price Feed</th>\n <th>APR</th>\n <th>Produced</th>\n <th>Missed</th>\n <th>Missed %</th>\n <th>Url</th>\n <th>Vote</th>\n </tr>\n </table>\n '
            );
};
gA.prototype.Fg = function () {
    var a = this,
            b = $("#tableWitnesses");
    Ft.gT(b);
    b.append(Ft.Fj("td", [{html: "Loading...", attr: {colspan: "12"}}]));
    var c = function (c) {
        D.S.Ff(
                "",
                250,
                function (d) {
                    b.find("tr:not(.headerRow)").remove();
                    for (var e = [], g = {}, h = 0; h < d.length; g = {$jscomp$loop$prop$witness$375: g.$jscomp$loop$prop$witness$375, $jscomp$loop$prop$checkbox$376: g.$jscomp$loop$prop$checkbox$376}, h++) {
                        var k = d[h];
                        g.$jscomp$loop$prop$witness$375 = k.owner;
                        var l = k.total_missed,
                                m = AQ(k.sbd_exchange_rate.base),
                                n = AQ(k.sbd_exchange_rate.quote),
                                p = D.B.DE(moment.utc(k.last_sbd_exchange_update).local(), !0, !0),
                                q = k.signing_key != Mh ? 1 : 0,
                                r = "?",
                                t = "?",
                                u = Bl(m, 3) + T7.LJ() + "/" + T7.LJ() + Bl(n, 3);
                        if (10 < m || 10 < n)
                            u = '<span title="' + u + '">( invalid )</span>';
                        for (m = 0; m < c.length; m++)
                            if (c[m][0] == g.$jscomp$loop$prop$witness$375) {
                                r = parseInt(c[m][1]);
                                t = Bl(0 < r + l ? (100 / (r + l)) * l : 0, 2) + " %";
                                break;
                            }
                        m = Ft.kc(
                                "showVotesChart",
                                "",
                                "",
                                "Show Votes...",
                                (function (b) {
                                    return function () {
                                        return a.k8(b.$jscomp$loop$prop$witness$375);
                                    };
                                })(g)
                                );
                        g.$jscomp$loop$prop$checkbox$376 = new eL({
                            width: "32px",
                            padding: "5px 0",
                            checked: D.W.Fx(g.$jscomp$loop$prop$witness$375),
                            eI: (function (a) {
                                return function () {
                                    if (D.t.bH(!0)) {
                                        var b = a.$jscomp$loop$prop$checkbox$376.an().data("witness"),
                                                c = !D.W.Fx(b);
                                        D.W[c ? "Ou" : "Fy"](b, function (c) {
                                            a.$jscomp$loop$prop$checkbox$376.fA(D.W.Fx(b), !1);
                                        });
                                    } else
                                        a.$jscomp$loop$prop$checkbox$376.fA(!1, !1);
                                };
                            })(g),
                            "data-witness": g.$jscomp$loop$prop$witness$375,
                        });
                        e.push(
                                Ft.Fj(
                                        "td",
                                        [
                                            h + 1,
                                            ak.EU(g.$jscomp$loop$prop$witness$375),
                                            Bl(k.votes / 1e12, 3),
                                            m,
                                            k.running_version,
                                            '<span title="Updated: ' + p + '">' + u + "</span>",
                                            Bl(k.props.sbd_interest_rate / 100, 2) + T7.LJ() + "%",
                                            r,
                                            l,
                                            t,
                                            '<button class="btnOpenWitnessUrl">' + k.url + "</button>",
                                            g.$jscomp$loop$prop$checkbox$376.an(),
                                        ],
                                        {"data-active": q}
                                )
                                );
                    }
                    b.append(e)
                            .find(".btnOpenWitnessUrl")
                            .each(function () {
                                var a = $(this);
                                a.data("url", a.html())
                                        .text(">>")
                                        .button()
                                        .on("click", function () {
                                            return aH.DQ(a.data("url"), !0);
                                        });
                            });
                },
                function (a) {}
        );
    };
    D.Z.He(
            IA,
            {},
            function (a) {
                return c(a.rows);
            },
            function () {
                return c([]);
            }
    );
};
gA.prototype.lL = function (a) {
    var b = Ft.be(
            "dataTable notBold qNoWrap",
            "tableWitnessVotes",
            Ft.Fj("th", [
                {html: "Voter", attr: {"data-sort-col": "voter", "data-sort-asc": "0"}},
                {html: "Own (MV)", attr: {"data-sort-col": "own-vests", "data-sort-asc": "0"}},
                {html: "Proxied (MV)", attr: {"data-sort-col": "proxied-vests", "data-sort-asc": "0"}},
                {html: "Influence", attr: {"data-sort-col": "influence", "data-sort-asc": "0"}},
            ])
            ),
            c = 0;
    for (e in a) {
        var d = a[e];
        c += d.mU + d.mT;
    }
    var e = [];
    for (var f in a) {
        var g = a[f];
        d = g.mU;
        g = g.mT;
        var h = (100 / c) * (d + g),
                k = Bl(h, 2) + " %",
                l = Bl(d / 1e6, 3),
                m = Bl(g / 1e6, 3);
        e.push(
                Ft.Fj("td", [ak.ET(f, !1, !0, !0), {html: l, attr: {class: "alignRight"}}, {html: m, attr: {class: "alignRight"}}, {html: k, attr: {class: "alignRight"}}], {
                    "data-voter": f,
                    "data-own-vests": d,
                    "data-proxied-vests": g,
                    "data-influence": h,
                })
                );
    }
    b.append(e);
    b7.LA(b, "influence");
    return b;
};
gA.prototype.lK = function (a) {
    a = "Witness Votes | " + a;
    var b = Ft.R4();
    D4.JO(b, {
        title: a,
        width: Math.min(750, aH.eA(0.9)),
        height: D.s.ce(),
        padding: "4px 0",
        buttons: [],
        open: function () {
            return b.parents(".ui-dialog").focus();
        },
    });
    return b.html(Ft.R4("textBoxPanel").html("Loading votes..."));
};
gA.prototype.k8 = function (a) {
    var b = this,
            c = this.lK(a);
    D.S.mF(a, function (a) {
        c.html(b.lL(a));
    });
};
var k7 = function (a) {
    Ft.mB(a, "\n .activeWitnessRow,\n .activeBlockRow {\n color: var(--text-header);\n }\n .activeWitnessRow {\n font-weight: bold;\n }\n ");
    this.I9 = !1;
    this.Tv = this.ld = 0;
    this.Ty = "";
    this.lh = [];
    this.lj = 0;
    this.AI(a);
};
k7.dN = function (a, b, c, d) {
    a.bf(bg);
    b = a.eZ("WitnessSchedule", "Hive Witness Schedule").am();
    var e = new k7(b);
    a.ar(c + "Hive Witness Schedule");
    a.bF(function () {
        d(function () {
            return e.lA();
        });
    });
    a.bG();
};
k7.prototype.AI = function (a) {
    this.lZ = Ft.R4().css("width", "70%");
    this.la = Ft.R4().css({width: "30%", "padding-left": "20px"});
    var b = Ft.ib("row nowrap", "", "divSchedule", [this.lZ, this.la]);
    a.append(b);
    this.RV = a;
};
k7.prototype.lY = function (a) {
    this.I9 = a;
};
k7.prototype.lc = function (a) {
    return Ft.R4("bigText headerText bold qNoWrap", "", a).css("padding", "14px 14px 4px 14px");
};
k7.prototype.lb = function (a, b, c) {
    for (var d = Ft.R4().css("margin-bottom", "10px"), e = {}, f = 0; f < c.length; f++) {
        var g = c[f];
        e[g] = b[g];
        delete b[g];
    }
    d.append(this.lc(a), "<hr>", ak.AN(e));
    return d;
};
k7.prototype.li = function (a) {
    a.next_shuffle_block_num = Bl(a.next_shuffle_block_num);
};
k7.prototype.lg = function () {
    var a = this;
    this.Ty &&
            this.lf.find("tr:not(.headerRow)").each(function () {
        var b = $(this),
                c = 0 < b.find("td:contains('" + a.Ty + "')").length;
        b[c ? "addClass" : "removeClass"]("activeWitnessRow");
    });
    this.lZ.find("td:contains('Current Head Block Num')").next("td").text(Bl(this.Tv)).parent("tr").addClass("activeBlockRow");
};
k7.prototype.le = function () {
    var a = this;
    D.S.He("get_dynamic_global_properties", !0, [], function (b) {
        a.Tv = b.head_block_number;
        a.Ty = b.current_witness;
        b = a.lh.indexOf(a.Ty);
        -1 < b && (a.lj = b);
        a.lg();
        setTimeout(function () {
            return a.lA();
        }, 2e3);
    });
};
k7.prototype.lA = function () {
    var a = this;
    (this.ld && this.Tv < this.ld) ||
            this.I9 ||
            (this.lY(!0),
                    this.HD ||
                    ((this.HD = setInterval(function () {
                        return a.le();
                    }, 3e3)),
                            D.s.lM(this.HD)),
                    D.S.k6(function (b) {
                        a.lY(!1);
                        a.lj = 20 > a.lj ? a.lj + 1 : 0;
                        a.ld = b.next_shuffle_block_num;
                        a.lh = b.current_shuffled_witnesses;
                        var c = a.lh.length ? a.lh[a.lj] : "";
                        a.li(b);
                        a.lf = $(ak.AN(b.current_shuffled_witnesses));
                        delete b.id;
                        a.la.empty().append(a.lc("Shuffled Witnesses"), "<hr>", a.lf);
                        delete b.current_shuffled_witnesses;
                        a.lZ
                                .empty()
                                .append(
                                        a.lb(
                                                "General Data",
                                                b,
                                                "majority_version current_head_block_num next_shuffle_block_num num_scheduled_witnesses max_voted_witnesses max_miner_witnesses max_runner_witnesses hardfork_required_witnesses elected_weight timeshare_weight miner_weight witness_pay_normalization_factor current_virtual_time".split(
                                                        " "
                                                        )
                                                ),
                                        a.lb("Median Props", b.median_props, ["account_creation_fee", "maximum_block_size", "sbd_interest_rate", "account_subsidy_budget", "account_subsidy_decay"]),
                                        a.lb("Account Subsidy Rd", b.account_subsidy_rd, ["resource_unit", "budget_per_time_unit", "pool_eq", "max_pool_size", "decay_params"]),
                                        a.lb("Account Subsidy Witness Rd", b.account_subsidy_witness_rd, ["resource_unit", "budget_per_time_unit", "pool_eq", "max_pool_size", "decay_params"])
                                        );
                        a.Ty = c;
                        a.lg();
                        a.Tv || a.le();
                    }));
};
var gb = function (a) {
    this.AI(a);
};
gb.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("ProxyInfo", "Hive Witness Proxy Info").am();
    new gb(b);
    a.ar(c + "Hive Witness Proxy Info");
    a.bF(function () {
        Py(
                [
                    [D.C, "AF"],
                    [D.C, "AE"],
                    [D.C, "Br"],
                ],
                function () {
                    d(function () {});
                }
        );
    });
    a.bG();
};
gb.prototype.AI = function (a) {
    var b = this;
    a.append(
            '\n <table class="dataTable smallSize">\n <tr>\n <td>\n Account\n </td>\n <td>\n <input class="userFromDblClick" id="toolProxyInfoAccountName" type="text" maxlength="16">\n </td>\n </tr>\n <tr>\n <td>\n Search Mode\n </td>\n <td>\n <select id="toolProxyInfoDir">\n <option value="in">Incoming (proxied by)</option>\n <option value="out">Outgoing (proxied to)</option>\n </select>\n </td>\n </td>\n <tr>\n <td></td>\n <td>\n <button id="toolProxyInfoExec">Refresh</button>\n </td>\n </tr>\n </table>\n <div id="toolProxyInfoResult" class="textBox"></div>\n '
            );
    var c = a.find("#toolProxyInfoAccountName").css("width", "40%"),
            d = gt.gy(a.find("#toolProxyInfoDir")).g6("40%"),
            e = a.find("#toolProxyInfoResult").hide();
    this.hE = a
            .find("#toolProxyInfoExec")
            .button()
            .on("click", function () {
                var a = c.val(),
                        g = d.bt();
                a ? b.kG(a, g, e) : D4.D9(fv("fill_required_fields_hint"));
            });
    this.gc = e;
};
gb.prototype.Sb = function (a) {
    aH.NE(this.hE, a);
    this.hE.text(a ? "Refresh" : "Loading... (may take a while)");
    this.gc[a ? "show" : "hide"]();
};
gb.prototype.kG = function (a, b, c) {
    var d = this;
    this.Sb(!1);
    var e = 0,
            f = [a],
            g = function (a) {
                c.append("<br>", Ft.R4("clearfix bold", "", ak.ET(a)), "<hr>");
            },
            h = function (a, b, d, e) {
                c.append(Ft.R4("clearfix", "", [Ft.eU("left", "", [T7.LJ(d), e, T7.LJ(5)]), ak.ET(a, !1, !0), Ft.eU("left", "", b).css("margin-left", "10px")]), "<br>");
            },
            k = function (b) {
                d.Sb(!0);
                g(a);
                for (var c = 1; c < b.length; c++)
                    h(b[c], "", 5 * c, "&gt;&gt;");
            },
            l = function (a) {
                d.Sb(!0);
                for (var b = !0, c, k, l; b; ) {
                    b = !1;
                    k = f[e];
                    g(k);
                    for (var m in a)
                        if (((l = a[m]), (c = l.proxy)))
                            c == k ? h(m, "( " + Bl(D.o.AL(l.vests), 2) + " HP )", 5, "&lt;&lt;") : -1 == f.indexOf(c) && (f.push(c), (b = !0));
                    e < f.length - 1 && (e++, (b = !0));
                }
            },
            m = function () {
                d.Sb(!0);
            };
    c.empty();
    "out" == b ? D.S.Z2(a, k, m) : D.S.Z0(a, l, m);
};
var jP = function (a) {
    this.AI(a);
};
jP.dN = function (a, b, c, d) {
    a.bf(bg);
    b = a.eZ("CopyVotes", "Copy Votes From Other Curators").am();
    var e = new jP(b);
    a.ar(c + "Copy Votes From Other Curators");
    a.bF(function () {
        Py(
                [
                    [D.C, "AF"],
                    [D.C, "AE"],
                    [D.C, "Br"],
                ],
                function () {
                    d(function () {
                        return e.kB();
                    });
                }
        );
    });
    a.bG();
};
jP.prototype.AI = function (a) {
    var b = this;
    Ft.mB(
            a,
            "\n #inputCopyVotesMinWeight,\n #inputCopyVotesMaxWeight,\n #inputCopyVotesMinPayout,\n #inputCopyVotesMaxPayout {\n width: 88px;\n margin: 0 5px;\n }\n #tableCopyVotesPosts tr th:nth-child(1),\n #tableCopyVotesPosts tr td:nth-child(1) {\n min-width: 210px;\n }\n #tableCopyVotesPosts tr th:nth-child(2),\n #tableCopyVotesPosts tr td:nth-child(2) {\n min-width: 210px;\n }\n #tableCopyVotesPosts tr th:nth-child(3),\n #tableCopyVotesPosts tr td:nth-child(3) {\n text-align: right;\n }\n #tableCopyVotesPosts tr th:nth-child(4),\n #tableCopyVotesPosts tr td:nth-child(4) {\n text-align: center;\n }\n #tableCopyVotesPosts .checkmark {\n margin-left: 5px;\n }\n\n #inputCopyVotesCurator,\n #inputCopyVotesUsedWeight {\n width: 261px;\n }\n #btnCopyVotesFindPosts,\n #btnCopyVotesVotePosts,\n #tableCopyVotesOptions .qCheckbox,\n #tableCopyVotesCriteria .qSelect {\n width: 260px !important;\n }\n #tableCopyVotesOptions .qCheckbox {\n margin-top: 4px;\n padding : 5px 0;\n }\n #tableCopyVotesCriteria tr td:nth-child(1) {\n width: 22%;\n }\n #tableCopyVotesOptions tr td:nth-child(1) {\n width: 21%;\n }\n "
            );
    a.append(
            '\n <table id="tableCopyVotesCriteria" class="dataTable mainTable smallSize">\n <tr>\n <td colspan="2">\n <div class="toolInfoBox">\n In a hurry and no time for manually curating content?\n With this tool you can easily copy the votes on posts made by other Hive curators.\n Just define your desired search criteria, select the found posts that you want to vote and\n execute the batch process with a click.\n </div>\n </td>\n </tr>\n <tr></tr>\n <tr>\n <td colspan="2">\n <strong class="bigText headerText">Search Criteria</strong>\n <hr>\n </td>\n </tr>\n <tr>\n <td>Curator (Voted By)</td>\n <td>\n <input type="text" id="inputCopyVotesCurator" class="inputAccountName">\n </td>\n </tr>\n <tr>\n <td>Content Type</td>\n <td>\n <select id="selectCopyVotesType">\n <option value="both">Comments &amp; Root Posts</option>\n <option value="root" selected>Only Root Posts</option>\n <option value="comment">Only Comments</option>\n </select>\n </td>\n </tr>\n <tr>\n <td>Voted Time</td>\n <td>\n <select id="selectCopyVotesPeriod">\n <option value="12">Last 12 Hours</option>\n <option value="24">Last 24 Hours</option>\n <option value="48">Last 2 Days</option>\n <option value="72">Last 3 Days</option>\n <option value="96">Last 4 Days</option>\n <option value="120">Last 5 Days</option>\n <option value="144">Last 6 Days</option>\n <option value="168">Last 7 Days</option>\n </select>\n </td>\n </tr>\n <tr>\n <td>Voted Weight (%)</td>\n <td>\n From <input id="inputCopyVotesMinWeight" type="text" value="0">\n To <input id="inputCopyVotesMaxWeight" type="text" value="100">\n </td>\n </tr>\n <tr>\n <td>Payout Amount (STU)</td>\n <td>\n From <input id="inputCopyVotesMinPayout" type="text" value="0">\n To <input id="inputCopyVotesMaxPayout" type="text" value="1000">\n </td>\n </tr>\n </table>\n <br>\n <table id="tableCopyVotesOptions" class="dataTable">\n <tr>\n <td colspan="2">\n <strong class="bigText headerText">Vote Options</strong>\n <hr>\n </td>\n </tr>\n <tr>\n <td>Options</td>\n <td id="copyVotesOptions"></td>\n </tr>\n <tr>\n <td>Fixed Vote Weight (%)</td>\n <td>\n <input id="inputCopyVotesUsedWeight" type="text" value="100" disabled>\n </td>\n </tr>\n <tr>\n <td></td>\n <td>\n <button id="btnCopyVotesFindPosts">Find Posts</button>\n </td>\n </tr>\n </table>\n <br>\n <table class="dataTable mainTable smallSize">\n <tr>\n <td>\n <strong id="copyVotesStatus" class="bigText headerText"></strong>\n <button id="btnCopyVotesVotePosts" class="right">Vote Selected Posts</button>\n <hr>\n </td>\n </tr>\n </table>\n <table id="tableCopyVotesPosts" class="dataTable mainTable smallSize notBold">\n <tr class="headerRow">\n <th>Author</th>\n <th>Link</th>\n <th>Payout (STU)</th>\n <th>Votes</th>\n <th></th>\n </tr>\n </table>\n '
            );
    this.RV = a;
    this.j3 = gt.gy(a.find("#selectCopyVotesType")).aM("root");
    this.ey = gt.gy(a.find("#selectCopyVotesPeriod")).aM("24");
    this.jQ = a.find("#inputCopyVotesCurator").focus();
    this.jV = a.find("#inputCopyVotesMinWeight");
    this.jW = a.find("#inputCopyVotesMaxWeight");
    this.je = a.find("#inputCopyVotesMinPayout");
    this.jf = a.find("#inputCopyVotesMaxPayout");
    this.kT = a.find("#inputCopyVotesUsedWeight");
    this.jZ = a
            .find("#btnCopyVotesFindPosts")
            .button()
            .on("click", function () {
                return b.jT();
            });
    this.ja = a
            .find("#btnCopyVotesVotePosts")
            .button()
            .on("click", function () {
                return b.jb();
            })
            .hide();
    this.jX = a.find("#tableCopyVotesPosts").hide();
    this.jY = a.find("#copyVotesStatus");
    a = a.find("#copyVotesOptions");
    this.jg = new eL({id: "checkCopyVotesIgnoreSelfVotes", text: "Ignore Self-Votes", checked: !0}, a);
    this.jh = new eL(
            {
                id: "checkCopyVotesCopyWeight",
                text: "Copy Voted Weight",
                checked: !0,
                eI: function () {
                    b.jh.e9() ? b.kT.attr("disabled", "") : b.kT.removeAttr("disabled");
                },
            },
            a
            );
};
jP.prototype.KV = function (a) {
    this.jY.text(a);
};
jP.prototype.kB = function () {
    D.t.bH(!1) && D.G.kB(D.l + ".form_copy_votes", this.RV);
};
jP.prototype.kA = function () {
    D.G.kA(D.l + ".form_copy_votes", this.RV);
};
jP.prototype.jT = function () {
    var a = this;
    if (D.t.bH(!0)) {
        var b = this.j3.bt(),
                c = parseInt(this.ey.bt()),
                d = 100 * parseInt(this.jV.val()),
                e = 100 * parseInt(this.jW.val()),
                f = parseFloat(this.je.val()),
                g = parseFloat(this.jf.val()),
                h = this.jg.e9(),
                k = this.jQ.val().trim();
        if (!k || d > e)
            D4.D9(fv("fill_required_fields_hint"));
        else {
            this.kA();
            aH.NE(this.jZ, !1);
            this.ja.hide();
            this.jX.hide();
            this.KV("Searching for votes...");
            var l = function (c) {
                D.S.Gt(c, !0, function (d) {
                    for (var e = [], h, k, l, m, n = 0; n < d.length; n++)
                        if (((h = d[n]), (l = h.aw()), (m = h.G0()), !(("root" == b && h.ka()) || ("comment" == b && !h.ka()) || !h.YY() || h.votes.E1(D.l) || h.Et < f || h.Et > g))) {
                            for (var v = 0; v < c.length; v++)
                                if (((k = c[v]), k.author == l && k.permlink == m)) {
                                    h.Gd = k.weight;
                                    break;
                                }
                            e.push(h);
                        }
                    a.jU(e);
                });
            };
            D.S.Bv(k, -1, 2500, moment.utc().subtract(c, "hours"), moment.utc(), [Ay], !1, function (b) {
                a.KV("Filtering posts...");
                for (var c = [], f = [], g, m, t = 0; t < b.length; t++)
                    (g = b[t].data), (m = g.author + "/" + g.permlink), g.voter == k && g.weight && g.weight >= d && g.weight <= e && (!h || g.voter != g.author) && -1 == f.indexOf(m) && (c.push(g), f.push(m));
                l(c);
            });
        }
    }
};
jP.prototype.jU = function (a) {
    var b = a.length,
            c = this.jX;
    Ft.gT(c);
    a.reverse();
    for (var d = 0; d < b; d++) {
        var e = a[d],
                f = aJ.GT(e.G0(), 70),
                g = new eL({width: "32px", padding: "6px 0", checked: !0});
        c.append(Ft.Fj("td", [ak.ET(e.aw(), !1, !0, !0), ak.bs(e.aw(), e.G0(), f, !0), Bl(e.Et, 3), ak.ju(e), g.an()]).data("post", e));
    }
    this.KV("Found Posts (" + b + ")");
    this.ja.show();
    b && c.show();
    aH.NE(this.ja, 0 < b);
    aH.NE(this.jZ, !0);
};
jP.prototype.jb = function () {
    var a = this;
    if (D.t.bH(!0)) {
        var b = this.jh.e9(),
                c = 100 * parseFloat(this.kT.val());
        if (-1e4 > c || 1e4 < c)
            D4.D9(fv("fill_required_fields_hint"));
        else {
            this.kA();
            var d = [],
                    e = [];
            this.jX.find("tr:not(.headerRow)").each(function () {
                var a = $(this),
                        f = a.find(".qCheckbox");
                if (f.length) {
                    var g = a.data("post"),
                            h = b ? g.Gd : c;
                    g && g8(f).e9() && (e.push(a), d.push(D.S.FV(kU, D.l, g.aw(), g.G0(), h)));
                    g8(f).e8(!1);
                }
            });
            if (d.length) {
                var f = function () {
                    aH.NE(a.jZ, !0);
                    D4.D9("Done!");
                },
                        g = function () {
                            aH.NE(a.jZ, !0);
                        },
                        h = function (a) {
                            e[a]
                                    .find(".qCheckbox")
                                    .parents("td")
                                    .empty()
                                    .append(Ft.Fi("img", "checkmark", "", "", {src: L8("res/img/checkmark.png"), width: "27", height: "27"}));
                        };
                D.t.DL(F2, !1, !0, function (b) {
                    aH.NE(a.jZ, !1);
                    aH.NE(a.ja, !1);
                    D.r.jd();
                    D.S.jc(b, d, 3e3, h, f, g);
                });
            }
        }
    }
};
var js = function (a) {
    this.AI(a);
};
js.dN = function (a, b, c, d) {
    a.bf(bg);
    a.KV(50, "Loading Page...");
    b = a.eZ("AbuseFinder", "Hive Abuse Finder").am();
    var e = new js(b);
    a.ar(c + "Hive Abuse Finder");
    a.bF(function () {
        Py(
                [
                    [D.C, "AF"],
                    [D.C, "AE"],
                    [D.C, "Br"],
                ],
                function () {
                    d(function () {
                        e.gl();
                    });
                }
        );
    });
    a.bG();
};
js.prototype.AI = function (a) {
    var b = this;
    Ft.mB(
            a,
            "\n #tableAbuseFinderPosts tr th:nth-child(3),\n #tableAbuseFinderPosts tr td:nth-child(3),\n #tableAbuseFinderPosts tr th:nth-child(5),\n #tableAbuseFinderPosts tr td:nth-child(5),\n #tableAbuseFinderAbusers tr th:nth-child(2),\n #tableAbuseFinderAbusers tr td:nth-child(2),\n #tableAbuseFinderAbusers tr th:nth-child(3),\n #tableAbuseFinderAbusers tr td:nth-child(3),\n #tableAbuseFinderAbusers tr th:nth-child(4),\n #tableAbuseFinderAbusers tr td:nth-child(4),\n #tableAbuseFinderAbusers tr th:nth-child(5),\n #tableAbuseFinderAbusers tr td:nth-child(5)\n {\n text-align: right;\n }\n #tableAbuseFinderPosts tr th:nth-child(4),\n #tableAbuseFinderPosts tr td:nth-child(4),\n #tableAbuseFinderPosts tr th:nth-child(5),\n #tableAbuseFinderPosts tr td:nth-child(5) {\n text-align: center;\n }\n #tableAbuseFinderPosts tr th:nth-child(1),\n #tableAbuseFinderPosts tr td:nth-child(1) {\n min-width: 210px;\n }\n "
            );
    a.append(
            '\n <table class="dataTable">\n <tr>\n <td colspan="2">\n <div class="toolInfoBox">\n This tool can help to find potential Hive abusers.\n </div>\n </td>\n </tr>\n <tr></tr>\n <tr>\n <td colspan="2">\n <strong class="bigText headerText">Search Criteria</strong>\n <hr>\n </td>\n </tr>\n <tr>\n <td>Content Type</td>\n <td>\n <span id="abuseFinderType" />\n </td>\n </tr>\n <tr>\n <td>Number Of Posts To Check</td>\n <td>\n <input id="abuseFinderNumberOfPosts" type="text" value="1000">\n </td>\n </tr>\n <tr>\n <td>Total Payout Threshold (STU)</td>\n <td>\n <input id="abuseFinderPayoutThreshold" type="text" value="25">\n </td>\n </tr>\n <tr>\n <td></td>\n <td>\n <button id="btnAbuseFinderFindPosts">Find Abusers</button>\n </td>\n </tr>\n </table>\n <br>\n <table class="dataTable">\n <tr>\n <td colspan="2">\n <strong class="bigText headerText">Downvote Options</strong>\n <hr>\n </td>\n </tr>\n <tr>\n <td>Current Downvote Power</td>\n <td>\n <input id="abuseFinderVPDownvote" type="text" value="" disabled>\n </td>\n </tr>\n <tr>\n <td>Current Upvote Power</td>\n <td>\n <input id="abuseFinderVPUpvote" type="text" value="" disabled>\n </td>\n </tr>\n <tr>\n <td>Use Smart Downvoting</td>\n <td>\n <span id="abuseFinderUseSmartDownvotes" />\n </td>\n </tr>\n <tr>\n <td>Fixed Downvote Weight (%)</td>\n <td>\n <input id="abuseFinderDownvoteWeight" type="text" value="-100" disabled>\n </td>\n </tr>\n </table>\n <br>\n <table class="dataTable notBold">\n <tr>\n <td>\n <strong class="bigText headerText">Potential Abusers</strong>\n <hr>\n </td>\n </tr>\n </table>\n <table id="tableAbuseFinderAbusers" class="dataTable autoWidthCols notBold">\n <tr class="headerRow">\n <th>Author</th>\n <th>Pending HP</th>\n <th>Pending HIVE</th>\n <th>Pending HBD</th>\n <th>Pending STU</th>\n </tr>\n </table>\n <br>\n <table class="dataTable notBold">\n <tr>\n <td>\n <strong id="abuseFinderStatus" class="bigText headerText">Top Posts By Payout</strong>\n <button id="btnAbuseFinderVotePosts" class="right">Downvote Selected Posts</button>\n <hr>\n </td>\n </tr>\n </table>\n <table id="tableAbuseFinderPosts" class="dataTable autoWidthCols notBold">\n <tr class="headerRow">\n <th>Author</th>\n <th>Link</th>\n <th>Pending STU</th>\n <th>Votes</th>\n <th></th>\n </tr>\n </table>\n '
            );
    this.jY = a.find("#abuseFinderStatus");
    this.jv = a.find("#tableAbuseFinderAbusers");
    this.jX = a.find("#tableAbuseFinderPosts");
    this.jw = a.find("#abuseFinderNumberOfPosts");
    this.jy = a.find("#abuseFinderPayoutThreshold");
    this.j1 = a.find("#abuseFinderVPDownvote");
    this.j2 = a.find("#abuseFinderVPUpvote");
    this.jx = a.find("#abuseFinderDownvoteWeight");
    this.j3 = new eH({
        buttons: [
            {value: "comments", text: "Comments", id: "", title: ""},
            {value: "root_posts", text: "Root Posts", id: "", title: ""},
        ],
        eI: function (a) {
            b.jy.val("comments" == a ? 25 : 300);
        },
    });
    a.find("#abuseFinderType").replaceWith(this.j3.an());
    this.j7 = new eH().e8(!1);
    a.find("#abuseFinderUseSmartDownvotes").replaceWith(this.j7.an());
    this.ja = a
            .find("#btnAbuseFinderVotePosts")
            .button()
            .on("click", function () {
                return b.jb();
            });
    this.jZ = a
            .find("#btnAbuseFinderFindPosts")
            .button()
            .on("click", function () {
                return b.mW();
            });
};
js.prototype.gl = function () {
    Ft.gT(this.jX);
    Ft.gT(this.jv);
    aH.NE(this.ja, !1);
    if (D.l) {
        D.p.Yw(25);
        var a = D.p.Vm("Downvote"),
                b = D.p.Vm("Upvote");
        this.j1.val(a + " % ( " + Bl(D.p.j0(), 3) + " STU with a 100 % vote )");
        this.j2.val(b + " % ( will be used when Downvote Power reaches 0 % )");
    } else
        this.j1.val(""), this.j2.val("");
};
js.prototype.KV = function (a) {
    this.jY.text(a);
};
js.prototype.mW = function () {
    var a = this;
    if (D.t.bH(!0)) {
        var b = "comments" == this.j3.bt() ? "jq" : "j6",
                c = parseInt(this.jw.val());
        !c || 100 > c ? (D4.D9("Using minimum number of posts (100)"), (c = 100)) : 1e4 < c && (D4.D9("Using maximum number of posts (10000)"), (c = 1e4));
        this.KV("Searching for posts...");
        this.gl();
        aH.NE(this.jZ, !1);
        D.S[b](
                c,
                function (b) {
                    a.jU(b);
                },
                function () {
                    aH.NE(a.jZ, !0);
                }
        );
    }
};
js.prototype.jz = function (a) {
    var b = parseFloat(this.jy.val());
    if (!b || 0 > b)
        D4.D9("Using minimum payout threshold (10)"), (b = 10);
    for (
            var c = [],
            d = [],
            e = function (a) {
                for (var b = null, d = 0; d < c.length; d++)
                    if (c[d].name == a.aw()) {
                        b = c[d];
                        break;
                    }
                b || ((b = {name: a.aw(), kW: 0, mV: 0, kX: 0, kV: 0}), c.push(b));
                b.kW += a.Mm;
                b.mV += a.Mo;
                b.kX += a.Mn;
                b.kV += a.Et;
            },
            f = 0;
            f < a.length;
            f++
            )
        e(a[f]);
    c.sort(function (a, b) {
        return a.kV < b.kV ? 1 : b.kV > b.kV ? -1 : 0;
    });
    for (e = 0; e < c.length; e++)
        (a = c[e]), a.kV <= b || d.push(Ft.Fj("td", [ak.ET(a.name, !1, !0, !0), Bl(a.kW, 3), Bl(a.mV, 3), Bl(a.kX, 3), Bl(a.kV, 3)]));
    this.jv.append(d);
};
js.prototype.jU = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
                e = aJ.GT(d.G0(), 50),
                f = new eL({width: "32px", padding: "6px 0", checked: !1});
        f.e8(!1);
        b.push(Ft.Fj("td", [ak.ET(d.aw(), !1, !0, !0), ak.bs(d.aw(), d.G0(), e, !0), Bl(d.Et, 3), ak.ju(d), f.an()]).data("post", d));
    }
    this.jX.append(b).show();
    this.jz(a);
    b = "comments" == this.j3.bt() ? "Comments" : "Root Posts";
    this.KV("Top " + a.length + " " + b + " By Payout");
    this.ja.show();
    aH.NE(this.ja, !1);
    aH.NE(this.jZ, !0);
};
js.prototype.jb = function () {
    var a = this;
    if (D.t.bH(!0)) {
        var b = 100 * parseFloat(this.jx.val());
        if (!b || -1e4 > b || 0 < b)
            D4.D9("Invalid downvote weight!");
        else {
            var c = [],
                    d = [];
            this.jX.find("tr:not(.headerRow)").each(function () {
                var a = $(this),
                        b = a.data("post"),
                        g = g8(a.find(".qCheckbox")).e9();
                b && g && (d.push(a), c.push(D.S.FV(kU, D.l, b.aw(), b.G0(), -1e4)));
            });
            c.length &&
                    D.t.DL(F2, !1, !1, function (b) {
                        aH.NE(a.jZ, !1);
                        aH.NE(a.ja, !1);
                        Pn("vote", c);
                        aH.NE(a.jZ, !0);
                        aH.NE(a.ja, !0);
                        D4.D9("Done!");
                        for (b = 0; b < d.length; b++)
                            g8(d[b].find(".qCheckbox")).e8(!1);
                    });
        }
    }
};
var lQ = function (a) {
    Ft.mB(
            a,
            "\n #divSeedCheckTitle {\n padding: 14px;\n }\n #btnCheck {\n margin: -8px -6px 0 0;\n }\n #divSeeds {\n min-height: 600px;\n margin-top: 10px;\n }\n #inputSeeds {\n width: 50%;\n padding: 15px;\n white-space: pre;\n }\n #tableNodeStatus {\n float: right;\n width: 50%;\n }\n #tableNodeStatus tr th:nth-child(2),\n #tableNodeStatus tr td:nth-child(2) {\n text-align: right\n }\n "
            );
    this.RV = a;
    this.AI(a);
};
lQ.dN = function (a, b, c, d) {
    a.bf(bg);
    b = a.eZ("SeedNodesCheck", "Hive Seed Nodes Check").am();
    new lQ(b);
    a.ar(c + "Hive Seed Nodes Check");
    a.bF(function () {
        d(function () {});
    });
    a.bG();
};
lQ.prototype.AI = function (a) {
    var b = this,
            c = "\np2p-seed-node = anyx.io:2001\np2p-seed-node = hive-seed.arcange.eu:2001\np2p-seed-node = hive-seed.lukestokes.info:2001\np2p-seed-node = hived.splinterlands.com:2001\np2p-seed-node = hiveseed-se.privex.io:2001\np2p-seed-node = node.mahdiyari.info:2001\np2p-seed-node = rpc.ausbit.dev:2001\np2p-seed-node = seed.buildteam.io:2001\np2p-seed-node = seed.chitty.me:2001\np2p-seed-node = seed.hivekings.com:2001\np2p-seed-node = seed.liondani.com:2016\np2p-seed-node = seed.openhive.network:2001\np2p-seed-node = seed.roelandp.nl:2001\n "
            .replace(/\n */g, "\n")
            .replace(/\n+/g, "\n")
            .trim();
    this.lS = Ft.Fi("textarea", "", "inputSeeds").val(c);
    this.lU = Ft.R7("right", "btnCheck", "Check Nodes", "", function () {
        return b.lT();
    });
    c = Ft.R4("textBox textBoxPanel", "divSeedCheckTitle", "Here you can test the availability and latency of Hive Seed Nodes.").append(this.lU);
    this.lX = Ft.be("dataTable notBold", "tableNodeStatus", Ft.Fj("th", ["Seed Node", "Status"], {class: "headerRow"}));
    var d = Ft.ib("row nowrap", "", "divSeeds", [this.lS, this.lX]);
    a.append(c, d);
};
lQ.prototype.lT = function () {
    var a = this;
    aH.NE(this.lU, !1);
    Ft.gT(this.lX);
    for (
            var b = this.lS
            .val()
            .trim()
            .replace(/p2p-seed-node *= */g, "")
            .replace(/seed-node *= */g, "")
            .replace(/\r/g, "\n")
            .replace(/\n[ \t]*/g, "\n")
            .replace(/\n+/g, "\n")
            .split("\n"),
            c = ["127.0.0.1", "localhost", "0.0.0.0", "0.0.0.1"],
            d = b.length - 1;
            0 <= d;
            d--
            ) {
        var e = b[d].trim();
        !e.length || e.startsWith("#") ? b.splice(d, 1) : (b[d] = e);
    }
    var f = aI.Rz(b),
            g = function () {
                if (f.length) {
                    var b = f[0].split(":");
                    if (2 != b.length)
                        f.splice(0, 1), g();
                    else {
                        var d = b[0];
                        b = b[1];
                        c.includes(d) ? (f.splice(0, 1), g()) : D.Z.lV(d, b, h);
                    }
                } else
                    aH.NE(a.lU, !0);
            };
    var h = function (b) {
        b = b.status;
        var c = f[0],
                d = 1 == b.code ? Bl(1e3 * b.info, 1) + " ms" : b.info;
        c = Ft.Fj("td", [c, d]);
        1 != b.code && c.addClass("numNegative");
        a.lX.append(c);
        f.splice(0, 1);
        g();
    };
    g();
};
var Zj = function (a) {
    Ft.mB(
            a,
            "\n #tableProposals tr td:nth-child(3) {\n font-weight: bold;\n }\n #tableProposals tr th:nth-child(3),\n #tableProposals tr td:nth-child(3),\n #tableProposals tr th:nth-child(7),\n #tableProposals tr td:nth-child(7)\n {\n text-align: right;\n }\n #tableProposals tr th:nth-child(1),\n #tableProposals tr td:nth-child(1),\n #tableProposals tr th:nth-child(2),\n #tableProposals tr td:nth-child(2)\n {\n width: 50px;\n padding: 7px;\n text-align: center;\n padding-left: 0;\n padding-right: 0;\n }\n #tableProposals tr th:nth-child(3),\n #tableProposals tr td:nth-child(3) {\n width: 120px;\n font-weight: bold;\n }\n #tableProposals tr th:nth-child(4),\n #tableProposals tr td:nth-child(4) {\n width: auto;\n }\n #tableProposals tr th:nth-child(5),\n #tableProposals tr td:nth-child(5) {\n width: 185px;\n vertical-align: middle;\n }\n #tableProposals tr th:nth-child(6),\n #tableProposals tr td:nth-child(6) {\n width: 155px;\n }\n #tableProposals tr th:nth-child(7),\n #tableProposals tr td:nth-child(7) {\n width: 165px;\n }\n #tableProposals img {\n width: 32px;\n height: 32px;\n margin-top: 4px;\n }\n #tableProposals tr:not(.headerRow) {\n cursor: pointer;\n }\n .buttonVoteProposal {\n width: 32px;\n height: 32px;\n padding: 16px;\n background-position: center !important;\n background-size: cover !important;\n }\n #tableProposals tr[data-checked='0'] .buttonVoteProposal {\n visibility: hidden;\n }\n "
            );
    this.AI(a);
};
Zj.dN = function (a, b, c, d) {
    a.bf(bh);
    a.KV(50, "Loading Proposals...");
    b = a.eZ("Proposals");
    var e = b.ee();
    b = b.am();
    var f = new Zj(b);
    a.ar(c + "Worker Proposals");
    a.bF(function () {
        var a = D.o.U3,
                b = function (a) {
                    f.Zk(a);
                    d();
                },
                c = function () {};
        Py(
                [
                    [D.C, "AF"],
                    function (b) {
                        D.S.aY(
                                Zo,
                                function (c) {
                                    a.Zm(c.sbd_balance);
                                    b();
                                },
                                c
                                );
                    },
                ],
                function () {
                    var d = Bl(a.Zn, a.da()) + " HBD",
                            f = Bl(a.Zn / 100, a.da()) + " HBD";
                    e.empty().append("Worker Proposals", Ft.GB("span", {class: "right"}, "Total HPS Fund: " + d + " / Currently Available: " + f));
                    D.S.Zf([-1], 1e3, "by_total_votes", "descending", "votable", b, c);
                }
        );
    });
    a.bG();
};
Zj.prototype.AI = function (a) {
    this.RV = a;
    this.gz = this.Z5();
    a.append(this.gz);
};
Zj.prototype.Z5 = function () {
    return Ft.be("dataTable notBold", "tableProposals").append(Ft.Fj("th", ";;Votes (HP);Subject;Creator / Receiver;Begin / End;Daily / Total Pay".split(";"), {class: "headerRow"}));
};
Zj.Zr = function () {
    return Ft.be(
            "dataTable fixed notBold",
            "",
            Ft.Fj("th", [
                {html: "Voter", attr: {"data-sort-col": "voter", "data-sort-asc": "0"}},
                {html: "Own HP", attr: {class: "alignRight", "data-sort-col": "own-vests", "data-sort-asc": "0"}},
                {html: "Proxied HP", attr: {class: "alignRight", "data-sort-col": "proxied-vests", "data-sort-asc": "0"}},
                {html: "Influence", attr: {class: "alignRight", "data-sort-col": "influence", "data-sort-asc": "0"}},
            ])
            );
};
Zj.prototype.Zk = function (a) {
    var b,
            c = moment(),
            d = this.gz;
    Ft.gT(d);
    for (var e = (b = 0); e < a.length; e++) {
        var f = a[e];
        if (0 === f.proposal_id) {
            b = D.o.U3.U1(f.total_votes / 1e6);
            break;
        }
    }
    for (e = 0; e < a.length; e++) {
        f = a[e];
        var g = aJ.GT(f.subject);
        var h = D.B.CG(f.start_date);
        var k = D.B.CG(f.end_date);
        var l = k.diff(h, "days");
        var m = Bl(AQ(f.daily_pay), 3) + " HBD";
        l = Bl(AQ(f.daily_pay) * l, 3) + " HBD";
        var n = D.o.U3.U1(f.total_votes / 1e6);
        var p = Ft.GB("a", {class: "linkShowProposalVotes", title: "Show votes of this proposal"}, Bl(n / 1e6, 3) + " M");
        g = $(ak.bs(f.creator, f.permlink, g)).attr("title", "Open post on " + D.G.Zy());
        n = c >= h && c <= k ? (n >= b ? "green" : "yellow") : "red";
        n = Ft.GB("img", {class: "imageProposalStatus", src: L8("res/img/status-" + n + ".png")});
        var q = Ft.GB("button", {class: "buttonVoteProposal", title: "Vote/Unvote Proposal"});
        f = Ft.Fj("td", [n, q, p, g, ak.ET(f.creator, !0, !0, !0) + (f.creator != f.receiver ? "<br>" + ak.ET(f.receiver, !0, !0, !0) : ""), D.B.DE(h) + "<br>" + D.B.DE(k), 0 < f.proposal_id ? m + "<br>" + l : "-"], {
            "data-row-index": e,
            "data-checked": 0,
            "data-voted": 0,
            title: "Show the content of this proposal",
        });
        d.append(f);
    }
    d.find("tr:not(.headerRow)").on("click", function () {
        var b = $(this).data("row-index");
        b = a[b];
        var c = aJ.GT(b.subject);
        new ge({author: b.creator, permlink: b.permlink, title: c});
    });
    d.find("a, button").on("click", function (a) {
        a.stopPropagation();
    });
    d.find(".buttonVoteProposal")
            .button()
            .on("click", function (b) {
                if (D.t.bH(!0)) {
                    var c = $(this).parents("tr");
                    b = c.data("row-index");
                    var d = 1 == c.attr("data-voted"),
                            e = a[b],
                            f = function (a) {
                                a && (D4.D9("Done!"), c.attr("data-voted", d ? 0 : 1));
                                Pn("result", a);
                            };
                    D.t.DL(F1, !1, !1, function (a) {
                        D.S.Zc(a, D.l, [e.proposal_id], !d, f);
                    });
                }
            });
    d.find(".linkShowProposalVotes").on("click", function (b) {
        b.stopPropagation();
        b = $(this).parents("tr").data("row-index");
        Zj.Zu(a[b]);
    });
    this.et(d, a);
};
Zj.prototype.et = function (a, b) {
    var c = this,
            d = a.find("tr[data-checked='0']");
    if (d.length) {
        var e = $(d.toArray()[0]);
        d = e.data("row-index");
        d = b[d];
        var f = function (d) {
            e.attr("data-checked", "1");
            d && e.attr("data-voted", "1");
            c.et(a, b);
        };
        D.l
                ? D.S.bv(d.proposal_id, D.l, f, function () {
                    setTimeout(function () {
                        c.et(a, b);
                    }, 5e3);
                })
                : f(!1);
    }
};
Zj.Zw = function (a) {
    var b = 0,
            c;
    for (c in a) {
        var d = a[c];
        d = "" != d.proxy ? 0 : d.mU + d.mT;
        b += d;
    }
    return b;
};
Zj.Zs = function (a, b, c) {
    b = Ft.R4("textBox");
    var d = Zj.Zr(),
            e = Zj.Zw(c),
            f = 0,
            g = 0,
            h = Object.keys(c).length,
            k = 0,
            l;
    for (l in c) {
        var m = c[l];
        var n = m.mU;
        var p = m.mT;
        var q = m.hasProxy;
        var r = m.hasProxyVoted;
        var t = q ? 0 : n + p;
        var u = (100 / e) * (n + p);
        var x = Bl(u, 2) + " %";
        var v = Bl(D.o.U3.U1(n), 3) + " HP";
        var y = Bl(D.o.U3.U1(p), 3) + " HP";
        g += n + p;
        f += t;
        q && (r ? ((x = "( " + x + " )"), (v = "( " + v + " )"), (y = "( " + y + " )")) : k++);
        t = Ft.GB(q && !r ? "del" : "span", {}, v);
        y = Ft.GB(q && !r ? "del" : "span", {}, y);
        x = Ft.GB(q && !r ? "del" : "span", {}, x);
        if (q) {
            q = "Vote proxied:";
            for (v = 0; v < m.proxies.length; v++)
                q += "\n=> " + m.proxies[v] + (r || v != m.proxies.length - 1 ? "" : " (who didn't vote)");
            t.attr("title", q);
            y.attr("title", q);
        }
        d.append(
                Ft.Fj("td", [ak.ET(l, !0, !0, !0), {html: t, attr: {class: "alignRight"}}, {html: y, attr: {class: "alignRight"}}, {html: x, attr: {class: "alignRight"}}], {
                    "data-voter": l,
                    "data-own-vests": n,
                    "data-proxied-vests": p,
                    "data-influence": u,
                })
                );
    }
    c = Bl(D.o.U3.U1(f / 1e6), 3);
    f = Bl(D.o.U3.U1((g - f) / 1e6), 3);
    h = "This proposal received " + h + " direct votes with an effective amount of <strong>" + c + " M HP</strong>.";
    k && (h += "<br>" + k + " vote" + (1 < k ? "s" : "") + " ( <strong>" + f + " M HP</strong> ) " + (1 < k ? "have" : "has") + " no effect, because the voter" + (1 < k ? "s" : "'s") + " witness proxy didn't vote.");
    b.html(h);
    a.empty().append(b, d);
    b7.LA(d, "influence");
};
Zj.Zb = function (a) {
    a = "Proposal Votes | " + aJ.GT(a.subject);
    var b = Ft.R4();
    D4.JO(b, {
        title: a,
        width: 700,
        minHeight: 0,
        padding: "4px 0",
        resizable: !1,
        centered: !1,
        buttons: [],
        open: function () {
            Ft.mI();
            b.parents(".ui-dialog").focus();
        },
        close: function () {
            Ft.Zv();
        },
    });
    return b;
};
Zj.Zu = function (a) {
    var b = Zj.Zb(a);
    b.html("&nbsp;&nbsp;Loading Votes...");
    D.S.lH(a.proposal_id, function (c) {
        return Zj.Zs(b, a, c);
    });
};
$(function () {
    D.s = new au();
    D.s.dP();
});
