var fY = function (a) {
    this.AJ(a)
};
fY.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("KeyGenerator", "Hive Key Generator").aI();
    b = new fY(b);
    a.aN(c + "Hive Key Generator");
    a.ak(function () {
        d(function () {})
    });
    a.al();
    return b
};
fY.prototype.AJ = function (a) {
    var b = this;
    a.append('<table class="dataTable smallSize mbBig" data-source="key_generator"><tr><td colspan="3"><div class="toolInfoBox"> Here you can create Master Passwords for new accounts and for Account Recovery Requests or see the (derived) Private and Public Keys for your current Master Password. <br><br> In case you want someone else to create your account without handing him your Master Password, you can generate one with this tool (do not forget to store it in a safe place!) and just export the derived Public Keys by clicking on the \'Export Public Keys\' button below. <br><br> The creator of your account can then import the exported file with the <a class="runPage" href="https://hivetasks.com/account-creator">Account Creator Tool</a> and create your account without knowing any of your Private Keys. </div><hr></td></tr><tr><td>Account Name</td><td><input id="keyGenAccountName" class="inputAccountName userFromDblClick" type="text" maxlength="16" data-id-key="#keyGenMasterKey" data-source="key_generator"></td><td></td></tr><tr><td>Master Password</td><td><input id="keyGenMasterKey" class="inputMasterKey mediumText" type="text" autocomplete="off" data-source="key_generator"></td><td><button id="keyGenGenerateRandomKey" class="buttonGenerateMasterKey" data-source="key_generator" data-id-name="#keyGenAccountName" data-id-key="#keyGenMasterKey">Generate&nbsp;Random </button></td></tr></table><table id="keyGenResult" class="dataTable smallSize mbBig"><tr class="headerRow"><th>Type</th><th>Private Key</th><th>Public Key</th></tr></table><button id="keyGenExportPublicKeys" class="mbBig">Export Public Keys...</button> ');
    a.find("#keyGenExportPublicKeys").button().button("disable").on("click",
            function () {
                return b.FP()
            });
    a.find(".runPage").on("click", function (a) {
        a.preventDefault();
        D.s.DS($(this).attr("href"), !0)
    });
    fD.f5(a)
};
fY.prototype.FP = function () {
    var a = Th.Fa(9),
            b = Th.Fa(13) + Th.Fa(10),
            c = ["owner", "active", "posting", "memo"],
            d = $("#keyGenAccountName").val().toLowerCase().trim(),
            e = $("#keyGenMasterKey").val().trim(),
            f = "HT-Public-Keys-" + d + ".json";
    if (d && e && (e = D.S.N7(d, e, c))) {
        d = "{" + Th.Fa(10) + a + '"id": "' + O1 + '",' + b + a + '"account": "' + d + '",' + b + a + '"keys":' + b + a + "{" + b;
        for (var g, h = 0; h < c.length; h++) {
            g = e[c[h] + "Pubkey"];
            if (!g)
                return;
            d += a + a + ('"' + c[h] + '"').padEnd(10) + ': "' + g + '"' + (h < c.length - 1 ? "," : "") + b
        }
        Zn.Hz(f, d + (a + "}" + b + "}"))
    }
};
