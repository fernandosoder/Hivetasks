var fb = function (a) {
    this.AJ(a)
};
fb.prototype.AJ = function (a) {
    Fs.lY(a, "#accountVotesResult .accOpen span{margin-right:0}#accountVotesResult .ui-button{padding:0 12px}#tabToolVotesOverview input[type='text'],#tabToolVotesOverview .qSelect,#tabToolVotesOverview button{width:99%}#accountVotesResult tr th:nth-child(1),#accountVotesResult tr td:nth-child(1),#accountVotesResult tr th:nth-child(2),#accountVotesResult tr td:nth-child(2),#accountVotesResult tr th:nth-child(3),#accountVotesResult tr td:nth-child(3){text-align:right}#accountVotesFilter td{padding:1px 10px 3px 5px}");
    a.append('<div id="accountVotesFilter" class="textBox withMarginBottom"><table class="fullWidth"><tr><td>Voter</td><td><input id="editAccountVotesVoter" class="userFromDblClick" type="text"></td><td>Author</td><td><input id="editAccountVotesAuthor" class="userFromDblClick" type="text"></td><td></td><td><button id="accountVotesRefresh" class="right">Refresh</button></td></tr><tr><td>View</td><td><select id="selectAccountVotesView" disabled><option value="grouped">Grouped List</option><option value="chart">Pie Chart</option></select></td><td>Group</td><td><select id="selectAccountVotesViewGroup"><option value="voter,author">Voter, Author</option><option value="voter,author,weight">Voter, Author, Weight</option></select></td><td>Period</td><td><select id="selectAccountVotesPeriod" disabled><option value="7">7 Days</option><option value="14">15 Days</option><option value="30">30 Days</option></select></td></tr></table></div><div><table id="accountVotesResult" class="dataTable fixed"></table></div> ');
    this.eO = gL.gQ(a.find("#selectAccountVotesView"));
    this.eP = gL.gQ(a.find("#selectAccountVotesViewGroup"));
    this.eQ = gL.gQ(a.find("#selectAccountVotesPeriod"));
    this.fU(a)
};
fb.prototype.fU = function (a) {
    var b = this;
    a.find("#accountVotesRefresh").button().on("click", function () {
        var a = [],
                d = $("#accountVotesResult"),
                e = b.eO.bO(),
                f = b.eP.bO().split(","),
                g = [],
                h = [],
                k = D.O.nL({
                    op: [Az],
                    incoming: !0,
                    outgoing: !0,
                    sort: "ts",
                    sort_desc: !0,
                    max_items: 1E6
                }),
                l, m;
        (l = $("#editAccountVotesVoter").val()) && h.push({
            name: "voter",
            value: l
        });
        (l = $("#editAccountVotesAuthor").val()) && h.push({
            name: "author",
            value: l
        });
        if (h.length)
            for (l = k.length - 1; 0 <= l; l--)
                for (m = 0; m < h.length; m++)
                    if (k[l].pR[h[m].name] !== h[m].value) {
                        k.splice(l,
                                1);
                        break
                    }
        for (h = 0; h < k.length; h++)
            a.push(jQuery.extend(!0, {}, k[h])), a[h].pR.weight = parseFloat(a[h].pR.weight / 100).toFixed(2) + " %";
        k = function (a, b, c) {
            for (var d, e = 0; e < a.length; e++) {
                d = !0;
                for (var f = 0; f < c.length; f++)
                    if (b[c[f]] != a[e][c[f]]) {
                        d = !1;
                        break
                    }
                if (d)
                    return a[e]
            }
            return null
        };
        d.empty().append("<tbody/>");
        if ("grouped" == e) {
            h = [{
                    html: "",
                    width: 85
                }, {
                    html: "Count",
                    width: 75
                }, {
                    html: "Amount",
                    width: 95
                }, {
                    html: "",
                    width: 35
                }, {
                    html: "Voter",
                    width: 185
                }, {
                    html: "",
                    width: 35
                }, "Author"];
            e = [];
            for (l = 0; l < f.length; l++)
                "voter" != f[l] &&
                        "author" != f[l] && (h.push(Th.DT(f[l])), e.push(f[l]));
            d.append(Fs.Ar(h, {
                "class": "headerRow"
            }));
            for (l = 0; l < a.length; l++)
                if (h = a[l], m = k(g, h.pR, f))
                    m.count++, m.permlinks.push(h.pR.permlink);
                else {
                    m = {
                        count: 1,
                        permlinks: [h.pR.permlink]
                    };
                    for (var n = 0; n < f.length; n++)
                        m[f[n]] = h.pR[f[n]];
                    g.push(m)
                }
            Zo.Bx(g, "count", !0);
            for (f = 0; f < g.length; f++) {
                k = g[f];
                h = [Bm(100 / a.length * k.count, 2) + " %", k.count, '<button class="accountVotesRefreshAmount">Load</button>', aG.DI(k.voter, "left", !0), aG.EU(k.voter, !0, !0), aG.DI(k.author, "left", !0),
                    aG.EU(k.author, !0, !0)
                ];
                for (l = 0; l < e.length; l++)
                    h.push(String(k[e[l]]));
                h = Fs.Aq(h);
                h.data("author", k.author);
                h.data("voter", k.voter);
                h.data("links", k.permlinks);
                d.append(h)
            }
        }
        d.find(".accountVotesRefreshAmount").button().on("click", function () {
            var a = [],
                    b = $(this),
                    c = b.parent(),
                    d = b.parents("tr");
            b = d.data("author");
            var e = d.data("voter");
            d = d.data("links");
            c.text("Loading...");
            for (var f = 0; f < d.length; f++)
                a.push({
                    author: b,
                    permlink: d[f]
                });
            D.S.Gt(a, !0, function (a) {
                for (var b = 0, d = 0; d < a.length; d++)
                    b += parseFloat(D.J.B8(a[d].votes.items,
                            e));
                c.text(D.B.ER(b) + " $")
            })
        })
    })
};
