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
    a.append('<table class="dataTable"><tr><td colspan="2"><div class="toolInfoBox"> </div></td></tr><tr></tr><tr><td colspan="2"><strong class="bigText headerText">Search Criteria</strong><hr></td></tr><tr><td>Content Type</td><td><span id="cotacoesType" /></td></tr><tr><td>Number Of Posts To Check</td><td><input id="cotacoesNumberOfPosts" type="text" value="1000"></td></tr><tr><td>Total Payout Threshold (STU)</td><td><input id="cotacoesPayoutThreshold" type="text" value="25"></td></tr><tr><td></td><td><button id="btnCotacoesFindPosts">Find Abusers</button></td></tr></table><br><table class="dataTable"><tr><td colspan="2"><strong class="bigText headerText">Downvote Options</strong><hr></td></tr></table></table> ');

};
