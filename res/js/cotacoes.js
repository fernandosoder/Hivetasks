var t_rates = function (a) {
    this.AJ(a)
};
t_rates.ct = function (a, b, c, d) {
    a.bA(bB);
    a.J9(50, "Loading Page...");
    b = a.d1("AbuseFinder", "Hive Abuse Finder").aI();
    var e = new t_rates(b);
    a.aN(c + "Hive Abuse Finder");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {
                e.gD()
            })
        })
    });
    a.al();
    return e
};
t_rates.prototype.AJ = function (a) {
    var b = this;
    Fs.lY(a, "#tableAbuseFinderPosts tr th:nth-child(3),#tableAbuseFinderPosts tr td:nth-child(3),#tableAbuseFinderPosts tr th:nth-child(5),#tableAbuseFinderPosts tr td:nth-child(5),#tableAbuseFinderAbusers tr th:nth-child(2),#tableAbuseFinderAbusers tr td:nth-child(2),#tableAbuseFinderAbusers tr th:nth-child(3),#tableAbuseFinderAbusers tr td:nth-child(3),#tableAbuseFinderAbusers tr th:nth-child(4),#tableAbuseFinderAbusers tr td:nth-child(4),#tableAbuseFinderAbusers tr th:nth-child(5),#tableAbuseFinderAbusers tr td:nth-child(5){text-align:right}#tableAbuseFinderPosts tr th:nth-child(4),#tableAbuseFinderPosts tr td:nth-child(4),#tableAbuseFinderPosts tr th:nth-child(5),#tableAbuseFinderPosts tr td:nth-child(5){text-align:center}#tableAbuseFinderPosts tr th:nth-child(1),#tableAbuseFinderPosts tr td:nth-child(1){min-width:210px}");
    a.append('<table class="dataTable"><tr><td colspan="2"><div class="toolInfoBox"> This tool can help to find potential Hive abusers. </div></td></tr><tr></tr><tr><td colspan="2"><strong class="bigText headerText">Search Criteria</strong><hr></td></tr><tr><td>Content Type</td><td><span id="abuseFinderType" /></td></tr><tr><td>Number Of Posts To Check</td><td><input id="abuseFinderNumberOfPosts" type="text" value="1000"></td></tr><tr><td>Total Payout Threshold (STU)</td><td><input id="abuseFinderPayoutThreshold" type="text" value="25"></td></tr><tr><td></td><td><button id="btnAbuseFinderFindPosts">Find Abusers</button></td></tr></table><br><table class="dataTable"><tr><td colspan="2"><strong class="bigText headerText">Downvote Options</strong><hr></td></tr><tr><td>Current Downvote Power</td><td><input id="abuseFinderVPDownvote" type="text" value="" disabled></td></tr><tr><td>Current Upvote Power</td><td><input id="abuseFinderVPUpvote" type="text" value="" disabled></td></tr><tr><td>Use Smart Downvoting</td><td><span id="abuseFinderUseSmartDownvotes" /></td></tr><tr><td>Fixed Downvote Weight (%)</td><td><input id="abuseFinderDownvoteWeight" type="text" value="-100" disabled></td></tr></table><br><table class="dataTable notBold"><tr><td><strong class="bigText headerText">Potential Abusers</strong><hr></td></tr></table><table id="tableAbuseFinderAbusers" class="dataTable autoWidthCols notBold"><tr class="headerRow"><th>Author</th><th>Pending HP</th><th>Pending HIVE</th><th>Pending HBD</th><th>Pending STU</th></tr></table><br><table class="dataTable notBold"><tr><td><strong id="abuseFinderStatus" class="bigText headerText">Top Posts By Payout</strong><button id="btnAbuseFinderVotePosts" class="right">Downvote Selected Posts</button><hr></td></tr></table><table id="tableAbuseFinderPosts" class="dataTable autoWidthCols notBold"><tr class="headerRow"><th>Author</th><th>Link</th><th>Pending STU</th><th>Votes</th><th></th></tr></table> ');
    this.iy = a.find("#abuseFinderStatus");
    this.jL = a.find("#tableAbuseFinderAbusers");
    this.ix = a.find("#tableAbuseFinderPosts");
    this.jM = a.find("#abuseFinderNumberOfPosts");
    this.jO = a.find("#abuseFinderPayoutThreshold");
    this.jR = a.find("#abuseFinderVPDownvote");
    this.jS = a.find("#abuseFinderVPUpvote");
    this.jN = a.find("#abuseFinderDownvoteWeight");
    this.jT = new di({
        buttons: [{
                value: "comments",
                text: "Comments",
                id: "",
                title: ""
            }, {
                value: "root_posts",
                text: "Root Posts",
                id: "",
                title: ""
            }],
        dj: function (a) {
            b.jO.val("comments" ==
                    a ? 25 : 300)
        }
    });
    a.find("#abuseFinderType").replaceWith(this.jT.aJ());
    this.jX = (new di).ea(!1);
    a.find("#abuseFinderUseSmartDownvotes").replaceWith(this.jX.aJ());
    this.i0 = a.find("#btnAbuseFinderVotePosts").button().on("click", function () {
        return b.i1()
    });
    this.iz = a.find("#btnAbuseFinderFindPosts").button().on("click", function () {
        return b.lt()
    })
};
t_rates.prototype.gD = function () {
    Fs.fv(this.ix);
    Fs.fv(this.jL);
    Zn.Ms(this.i0, !1);
    if (D.l) {
        D.p.YU(25);
        var a = D.p.VJ("Downvote"),
                b = D.p.VJ("Upvote");
        this.jR.val(a + " % ( " + Bm(D.p.jQ(), 3) + " STU with a 100 % vote )");
        this.jS.val(b + " % ( will be used when Downvote Power reaches 0 % )")
    } else
        this.jR.val(""), this.jS.val("")
};
t_rates.prototype.J9 = function (a) {
    this.iy.text(a)
};
t_rates.prototype.lt = function () {
    var a = this;
    if (D.t.am(!0)) {
        var b = "comments" == this.jT.bO() ? "jG" : "jW",
                c = parseInt(this.jM.val());
        !c || 100 > c ? (D6.EA("Using minimum number of posts (100)"), c = 100) : 1E4 < c && (D6.EA("Using maximum number of posts (10000)"), c = 1E4);
        this.J9("Searching for posts...");
        this.gD();
        Zn.Ms(this.iz, !1);
        D.S[b](c, function (b) {
            a.iu(b)
        }, function () {
            Zn.Ms(a.iz, !0)
        })
    }
};
t_rates.prototype.jP = function (a) {
    var b = parseFloat(this.jO.val());
    if (!b || 0 > b)
        D6.EA("Using minimum payout threshold (10)"), b = 10;
    for (var c = [], d = [], e = function (a) {
        for (var b = null, d = 0; d < c.length; d++)
            if (c[d].name == a.aS()) {
                b = c[d];
                break
            }
        b || (b = {
            name: a.aS(),
            jw: 0,
            ls: 0,
            jx: 0,
            jv: 0
        }, c.push(b));
        b.jw += a.MQ;
        b.ls += a.MS;
        b.jx += a.MR;
        b.jv += a.Es
    }, f = 0; f < a.length; f++)
        e(a[f]);
    c.sort(function (a, b) {
        return a.jv < b.jv ? 1 : b.jv > b.jv ? -1 : 0
    });
    for (e = 0; e < c.length; e++)
        a = c[e], a.jv <= b || d.push(Fs.Aq([aG.EU(a.name, !1, !0, !0), Bm(a.jw, 3), Bm(a.ls, 3), Bm(a.jx,
                    3), Bm(a.jv, 3)]));
    this.jL.append(d)
};
t_rates.prototype.iu = function (a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
                e = Zp.GT(d.G0(), 50),
                f = new dm({
                    width: "32px",
                    padding: "6px 0",
                    checked: !1
                });
        f.ea(!1);
        b.push(Fs.Aq([aG.EU(d.aS(), !1, !0, !0), aG.bN(d.aS(), d.G0(), e, !0), Bm(d.Es, 3), aG.jK(d), f.aJ()]).data("post", d))
    }
    this.ix.append(b).show();
    this.jP(a);
    b = "comments" == this.jT.bO() ? "Comments" : "Root Posts";
    this.J9("Top " + a.length + " " + b + " By Payout");
    this.i0.show();
    Zn.Ms(this.i0, !1);
    Zn.Ms(this.iz, !0)
};
t_rates.prototype.i1 = function () {
    var a = this;
    if (D.t.am(!0)) {
        var b = -tX,
                c = 100 * parseFloat(this.jN.val());
        if (!c || c < -tX || 0 < c)
            D6.EA("Invalid downvote weight!");
        else {
            var d = [],
                    e = [];
            this.ix.find("tr:not(.headerRow)").each(function () {
                var a = $(this),
                        c = a.data("post"),
                        h = ga(a.find(".qCheckbox")).eb();
                c && h && (e.push(a), d.push(D.S.FV(ju, D.l, c.aS(), c.G0(), b)))
            });
            d.length && D.t.DO(F2, !1, !1, function (b) {
                Zn.Ms(a.iz, !1);
                Zn.Ms(a.i0, !1);
                PP("vote", d);
                Zn.Ms(a.iz, !0);
                Zn.Ms(a.i0, !0);
                D6.EA("Done!");
                for (b = 0; b < e.length; b++)
                    ga(e[b].find(".qCheckbox")).ea(!1)
            })
        }
    }
};
