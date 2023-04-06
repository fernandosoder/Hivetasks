var ip = function (a) {
    this.AJ(a)
};
ip.ct = function (a, b, c, d) {
    a.bA(bB);
    b = a.d1("CopyVotes", "Copy Votes From Other Curators").aI();
    var e = new ip(b);
    a.aN(c + "Copy Votes From Other Curators");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {
                return e.jb()
            })
        })
    });
    a.al();
    return e
};
ip.prototype.AJ = function (a) {
    var b = this;
    Fs.lY(a, "#inputCopyVotesMinWeight,#inputCopyVotesMaxWeight,#inputCopyVotesMinPayout,#inputCopyVotesMaxPayout{width:88px;margin:0 5px}#tableCopyVotesPosts tr th:nth-child(1),#tableCopyVotesPosts tr td:nth-child(1){min-width:210px}#tableCopyVotesPosts tr th:nth-child(2),#tableCopyVotesPosts tr td:nth-child(2){min-width:210px}#tableCopyVotesPosts tr th:nth-child(3),#tableCopyVotesPosts tr td:nth-child(3),#tableCopyVotesPosts tr th:nth-child(4),#tableCopyVotesPosts tr td:nth-child(4){text-align:right}#tableCopyVotesPosts tr th:nth-child(5),#tableCopyVotesPosts tr td:nth-child(5){text-align:center}#tableCopyVotesPosts .checkmark{margin-left:5px}#inputCopyVotesCurator,#inputCopyVotesUsedWeight{width:261px}#btnCopyVotesFindPosts,#btnCopyVotesVotePosts,#tableCopyVotesOptions .qCheckbox,#tableCopyVotesCriteria .qSelect{width:260px !important}#tableCopyVotesOptions .qCheckbox{margin-top:4px;padding:5px 0}#tableCopyVotesCriteria tr td:nth-child(1){width:22%}#tableCopyVotesOptions tr td:nth-child(1){width:21%}");
    a.append('<table id="tableCopyVotesCriteria" class="dataTable mainTable smallSize"><tr><td colspan="2"><div class="toolInfoBox"> In a hurry and no time for manually curating content? With this tool you can easily copy the votes on posts made by other Hive curators. Just define your desired search criteria, select the found posts that you want to vote and execute the batch process with a click. </div></td></tr><tr></tr><tr><td colspan="2"><strong class="bigText headerText">Search Criteria</strong><hr></td></tr><tr><td>Curator (Voted By)</td><td><input type="text" id="inputCopyVotesCurator" class="inputAccountName"></td></tr><tr><td>Content Type</td><td><select id="selectCopyVotesType"><option value="both">Comments &amp; Root Posts</option><option value="root" selected>Only Root Posts</option><option value="comment">Only Comments</option></select></td></tr><tr><td>Voted Time</td><td><select id="selectCopyVotesPeriod"><option value="12">Last 12 Hours</option><option value="24">Last 24 Hours</option><option value="48">Last 2 Days</option><option value="72">Last 3 Days</option><option value="96">Last 4 Days</option><option value="120">Last 5 Days</option><option value="144">Last 6 Days</option><option value="168">Last 7 Days</option></select></td></tr><tr><td>Voted Weight (%)</td><td> From <input id="inputCopyVotesMinWeight" type="text" value="0"> To <input id="inputCopyVotesMaxWeight" type="text" value="100"></td></tr><tr><td>Payout Amount (STU)</td><td> From <input id="inputCopyVotesMinPayout" type="text" value="0"> To <input id="inputCopyVotesMaxPayout" type="text" value="1000"></td></tr></table><br><table id="tableCopyVotesOptions" class="dataTable"><tr><td colspan="2"><strong class="bigText headerText">Vote Options</strong><hr></td></tr><tr><td>Options</td><td id="copyVotesOptions"></td></tr><tr><td>Fixed Vote Weight (%)</td><td><input id="inputCopyVotesUsedWeight" type="text" value="100" disabled></td></tr><tr><td></td><td><button id="btnCopyVotesFindPosts">Find Posts</button></td></tr></table><br><table class="dataTable mainTable smallSize"><tr><td><strong id="copyVotesStatus" class="bigText headerText"></strong><button id="btnCopyVotesVotePosts" class="right">Vote Selected Posts</button><hr></td></tr></table><table id="tableCopyVotesPosts" class="dataTable mainTable smallSize notBold"><tr class="headerRow"><th>Author</th><th>Link</th><th>Weight</th><th>Payout (STU)</th><th>Votes</th><th></th></tr></table> ');
    this.Q7 = a;
    this.jT = gL.gQ(a.find("#selectCopyVotesType")).Zs("root");
    this.eQ = gL.gQ(a.find("#selectCopyVotesPeriod")).Zs("24");
    this.iq = a.find("#inputCopyVotesCurator").focus();
    this.iv = a.find("#inputCopyVotesMinWeight");
    this.iw = a.find("#inputCopyVotesMaxWeight");
    this.i4 = a.find("#inputCopyVotesMinPayout");
    this.i5 = a.find("#inputCopyVotesMaxPayout");
    this.jt = a.find("#inputCopyVotesUsedWeight");
    this.iz = a.find("#btnCopyVotesFindPosts").button().on("click", function () {
        return b.it()
    });
    this.i0 = a.find("#btnCopyVotesVotePosts").button().on("click",
            function () {
                return b.i1()
            }).hide();
    this.ix = a.find("#tableCopyVotesPosts").hide();
    this.iy = a.find("#copyVotesStatus");
    a = a.find("#copyVotesOptions");
    this.i6 = new dm({
        id: "checkCopyVotesIgnoreSelfVotes",
        text: "Ignore Self-Votes",
        checked: !0
    }, a);
    this.i7 = new dm({
        id: "checkCopyVotesCopyWeight",
        text: "Copy Voted Weight",
        checked: !0,
        dj: function () {
            b.i7.eb() ? b.jt.attr("disabled", "") : b.jt.removeAttr("disabled")
        }
    }, a)
};
ip.prototype.J9 = function (a) {
    this.iy.text(a)
};
ip.prototype.jb = function () {
    D.t.am(!1) && D.G.jb(D.l + ".form_copy_votes", this.Q7)
};
ip.prototype.ja = function () {
    D.G.ja(D.l + ".form_copy_votes", this.Q7)
};
ip.prototype.it = function () {
    var a = this;
    if (D.t.am(!0)) {
        var b = this.jT.bO(),
                c = parseInt(this.eQ.bO()),
                d = 100 * parseInt(this.iv.val()),
                e = 100 * parseInt(this.iw.val()),
                f = parseFloat(this.i4.val()),
                g = parseFloat(this.i5.val()),
                h = this.i6.eb(),
                k = this.iq.val().trim();
        if (!k || d > e)
            D6.EA(fN("fill_required_fields_hint"));
        else {
            this.ja();
            Zn.Ms(this.iz, !1);
            this.i0.hide();
            this.ix.hide();
            this.J9("Searching for votes...");
            var l = function (c) {
                D.S.Gt(c, !0, function (d) {
                    for (var e = [], h, k, l, m, n = 0; n < d.length; n++)
                        if (h = d[n], l = h.aS(), m =
                                h.G0(), !("root" == b && h.j0() || "comment" == b && !h.j0() || !h.X6() || h.votes.E1(D.l) || h.Es < f || h.Es > g)) {
                            for (var w = 0; w < c.length; w++)
                                if (k = c[w], k.author == l && k.permlink == m) {
                                    h.Gd = k.weight;
                                    break
                                }
                            e.push(h)
                        }
                    a.iu(e)
                })
            };
            D.b.By(k, -1, 2500, moment.utc().subtract(c, "hours").unix(), moment.utc().unix(), [Az], !1, function (b) {
                a.J9("Filtering posts...");
                for (var c = [], f = [], g, m, t = 0; t < b.length; t++)
                    g = b[t].pR, m = g.author + "/" + g.permlink, g.voter == k && g.weight && g.weight >= d && g.weight <= e && (!h || g.voter != g.author && g.author != D.l) && !f.includes(m) &&
                            (c.push(g), f.push(m));
                l(c)
            })
        }
    }
};
ip.prototype.iu = function (a) {
    var b = a.length,
            c = this.ix;
    Fs.fv(c);
    a.reverse();
    for (var d = 0; d < b; d++) {
        var e = a[d],
                f = Zp.GT(e.G0(), 70),
                g = new dm({
                    width: "32px",
                    padding: "6px 0",
                    checked: !0
                });
        c.append(Fs.Aq([aG.EU(e.aS(), !1, !0, !0), aG.bN(e.aS(), e.G0(), f, !0), e.Gd / 100 + " %", Bm(e.Es, 3), aG.jK(e), g.aJ()]).data("post", e))
    }
    this.J9("Found Posts (" + b + ")");
    this.i0.show();
    b && c.show();
    Zn.Ms(this.i0, 0 < b);
    Zn.Ms(this.iz, !0)
};
ip.prototype.i1 = function () {
    var a = this;
    if (D.t.am(!0)) {
        var b = this.i7.eb(),
                c = 100 * parseFloat(this.jt.val());
        if (c < -tX || c > tX)
            D6.EA(fN("fill_required_fields_hint"));
        else {
            this.ja();
            var d = [],
                    e = [];
            this.ix.find("tr:not(.headerRow)").each(function () {
                var a = $(this),
                        f = a.find(".qCheckbox");
                if (f.length) {
                    var g = a.data("post"),
                            h = b ? g.Gd : c;
                    g && ga(f).eb() && (e.push(a), d.push(D.S.FV(ju, D.l, g.aS(), g.G0(), h)));
                    ga(f).ea(!1)
                }
            });
            if (d.length) {
                var f = function () {
                    Zn.Ms(a.iz, !0);
                    D6.EA("Done!")
                },
                        g = function () {
                            Zn.Ms(a.iz, !0)
                        },
                        h = function (a) {
                            e[a].find(".qCheckbox").parents("td").empty().append(Fs.Fi("img",
                                    "checkmark", "", "", {
                                        src: Lm(s6 + "checkmark.png"),
                                        width: "27",
                                        height: "27"
                                    }))
                        };
                D.t.DO(F2, !1, !0, function (b) {
                    Zn.Ms(a.iz, !1);
                    Zn.Ms(a.i0, !1);
                    D.r.i3();
                    D.S.i2(b, d, 3E3, h, f, g)
                })
            }
        }
    }
};
