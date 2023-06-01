var t_rates = function (a) {
    this.AJ(a)
};
t_rates.ct = function (a, b, c, d) {
    a.bA(bB);
    a.J9(50, "Loading Page...");
    b = a.d1("Cotacoes", "Cotações Hive/BRL").aI();
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
    Fs.lY(a, "#tableCotacoesPosts tr th:nth-child(3),#tableCotacoesPosts tr td:nth-child(3),#tableCotacoesPosts tr th:nth-child(5),#tableCotacoesPosts tr td:nth-child(5),#tableCotacoesAbusers tr th:nth-child(2),#tableCotacoesAbusers tr td:nth-child(2),#tableCotacoesAbusers tr th:nth-child(3),#tableCotacoesAbusers tr td:nth-child(3),#tableCotacoesAbusers tr th:nth-child(4),#tableCotacoesAbusers tr td:nth-child(4),#tableCotacoesAbusers tr th:nth-child(5),#tableCotacoesAbusers tr td:nth-child(5){text-align:right}#tableCotacoesPosts tr th:nth-child(4),#tableCotacoesPosts tr td:nth-child(4),#tableCotacoesPosts tr th:nth-child(5),#tableCotacoesPosts tr td:nth-child(5){text-align:center}#tableCotacoesPosts tr th:nth-child(1),#tableCotacoesPosts tr td:nth-child(1){min-width:210px}");
    a.append('<table class="dataTable"><tr><td colspan="2"><div class="toolInfoBox"> This tool can help to find potential Hive abusers. </div></td></tr><tr></tr><tr><td colspan="2"><strong class="bigText headerText">Search Criteria</strong><hr></td></tr><tr><td>Content Type</td><td><span id="cotacoesType" /></td></tr><tr><td>Number Of Posts To Check</td><td><input id="cotacoesNumberOfPosts" type="text" value="1000"></td></tr><tr><td>Total Payout Threshold (STU)</td><td><input id="cotacoesPayoutThreshold" type="text" value="25"></td></tr><tr><td></td><td><button id="btnCotacoesFindPosts">Find Abusers</button></td></tr></table><br><table class="dataTable"><tr><td colspan="2"><strong class="bigText headerText">Downvote Options</strong><hr></td></tr><tr><td>Current Downvote Power</td><td><input id="cotacoesVPDownvote" type="text" value="" disabled></td></tr><tr><td>Current Upvote Power</td><td><input id="cotacoesVPUpvote" type="text" value="" disabled></td></tr><tr><td>Use Smart Downvoting</td><td><span id="cotacoesUseSmartDownvotes" /></td></tr><tr><td>Fixed Downvote Weight (%)</td><td><input id="cotacoesDownvoteWeight" type="text" value="-100" disabled></td></tr></table><br><table class="dataTable notBold"><tr><td><strong class="bigText headerText">Potential Abusers</strong><hr></td></tr></table><table id="tableCotacoesAbusers" class="dataTable autoWidthCols notBold"><tr class="headerRow"><th>Author</th><th>Pending HP</th><th>Pending HIVE</th><th>Pending HBD</th><th>Pending STU</th></tr></table><br><table class="dataTable notBold"><tr><td><strong id="cotacoesStatus" class="bigText headerText">Top Posts By Payout</strong><button id="btnCotacoesVotePosts" class="right">Downvote Selected Posts</button><hr></td></tr></table><table id="tableCotacoesPosts" class="dataTable autoWidthCols notBold"><tr class="headerRow"><th>Author</th><th>Link</th><th>Pending STU</th><th>Votes</th><th></th></tr></table> ');
    this.iy = a.find("#cotacoesStatus");
    this.jL = a.find("#tableCotacoesAbusers");
    this.ix = a.find("#tableCotacoesPosts");
    this.jM = a.find("#cotacoesNumberOfPosts");
    this.jO = a.find("#cotacoesPayoutThreshold");
    this.jR = a.find("#cotacoesVPDownvote");
    this.jS = a.find("#cotacoesVPUpvote");
    this.jN = a.find("#cotacoesDownvoteWeight");
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
    a.find("#cotacoesType").replaceWith(this.jT.aJ());
    this.jX = (new di).ea(!1);
    a.find("#cotacoesUseSmartDownvotes").replaceWith(this.jX.aJ());
    this.i0 = a.find("#btnCotacoesVotePosts").button().on("click", function () {
        return b.i1()
    });
    this.iz = a.find("#btnCotacoesFindPosts").button().on("click", function () {
        return b.lt()
    })
};
