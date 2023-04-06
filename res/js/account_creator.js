var fD = function (a) {
    this.AJ(a)
};
fD.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("AccountCreator", "Hive Account Creator").aI();
    b = new fD(b);
    a.aN(c + "Hive Account Creator");
    a.ak(function () {
        fD.iX();
        Pa([
            [D.C, "AG"],
            [D.C, "Mv"],
            [D.S, "NU"],
            [D.S, "hQ"]
        ], function () {
            d(function () {})
        })
    });
    a.al();
    return b
};
fD.prototype.AJ = function (a) {
    Fs.lY(a, "#createNewAccountMasterKey{width:78%}#createNewAccountName{width:224px}#claimNewAccount,#createNewAccount{margin-top:3px}");
    var b = function (a, b, c) {
        Zo.QE(b) && (b = Fs.Rf().append(b).html());
        return Fs.Aq([a, b], c)
    },
            c = function (a, b) {
                return Fs.Aq([{
                        html: a,
                        attr: {
                            colspan: "2"
                        }
                    }], b)
            },
            d = function (a, b) {
                return c([Fs.ds(a, {
                        "class": "bigText headerText"
                    }), "<hr>", Fs.Rf("toolInfoBox", "", b), "<hr>"])
            },
            e = Fs.lg("", "claimNewAccountPaymentMethod", [{
                    value: "rc",
                    text: "RC (Resource Credits)"
                },
                {
                    value: "hive",
                    text: "3 HIVE"
                }
            ]).css("width", "223px"),
            f = Fs.Ri("", "claimNewAccount", fN("ac_claim_account_btn"));
    e = Fs.a9("dataTable fullWidth smallSize mbBig", "", [d(fN("ac_claim_account_title"), fN("ac_claim_account_text")), b(fN("payment_method"), e), c(f)]);
    f = Fs.ds("0", {
        id: "claimedAccounts"
    });
    var g = Fs.GB("input", {
        id: "createNewAccountName",
        "class": "inputAccountName",
        type: "text",
        maxlength: "16",
        "data-id-key": "#createNewAccountMasterKey"
    }),
            h = Fs.Ri("importPublicKeysButton", "createNewAccountImportPublicKeys",
                    fN("ac_import_keys_btn")),
            k = Fs.lg("selectKeyGenerationMethod", "createNewAccountKeyMethod", [{
                    value: "master_key",
                    text: fN("ac_use_master_key_option")
                }, {
                    value: "public_keys",
                    text: fN("ac_use_existing_keys_option")
                }]).css("width", "223px"),
            l = Fs.GB("input", {
                id: "createNewAccountMasterKey",
                "class": "inputMasterKey",
                type: "text",
                autocomplete: "off"
            }),
            m = Fs.Ri("buttonGenerateMasterKey", "createNewAccountGenerateMasterKey",
                    fN("ac_generate_key_btn")).attr("data-id-name", "#createNewAccountName").attr("data-id-key", "#createNewAccountMasterKey"),
            n = Fs.a9("dataTable simple oneColor", "createNewAccountKeyPreview", [Fs.Ar(["Type", "Private Key", "Public Key"], {
                    "class": "headerRow mediumText"
                })]),
            p = function (a) {
                return Fs.GB("input", {
                    type: "text",
                    "data-role": a
                }).css("width", "100%")
            };
    p = Fs.a9("mediumText", "createNewAccountPublicKeys", [b("Owner", p("owner")), b("Active", p("active")), b("Posting", p("posting")), b("Memo", p("memo"))]).css("width", "100%");
    p.find("tr td:nth-child(1)").css("width", "15%");
    p.find("tr td:nth-child(2)").css("width", "85%");
    var q = Fs.Ri("",
            "createNewAccount", fN("ac_create_account_btn"));
    b = Fs.a9("dataTable smallSize", "", [d(fN("ac_create_account_title"), fN("ac_create_account_text", [f])),
        b("Account Name", [g, Th.Kx(2), Fs.dw("mediumText", "createNewAccountNameStatus")]),
        b("Key Generation", [h, k]),
        b("Master Password", [l, Th.Kx(), m], {
            "data-key-method": "master_key"
        }), c(n, {
            "data-key-method": "master_key"
        }), b("Public Keys", [Fs.Rf("warningText", "", fN("ac_use_existing_keys_warning")), "<hr>", p], {
            "data-key-method": "public_keys"
        }), c(q)], {
        "data-source": "account_creator"
    });
    a.append(e, b);
    this.fU(a)
};
fD.prototype.fU = function (a) {
    var b = this;
    console.log(b);
    a.find("#createNewAccountKeyPreview").hide();
    a.find("#createNewAccountName").on("change", function () {
        var a = $(this).val().toLowerCase().trim();
        D.f.OF(a)
    });
    a.find("#claimNewAccount").button().on("click", function () {
        return b.Mc()
    });
    a.find("#createNewAccount").button().on("click", function () {
        return b.Md()
    });
    gL.gQ(a.find("#claimNewAccountPaymentMethod"), {
        width: "224px"
    });
    fD.f5(a)
};
fD.iX = function () {
    $("#claimedAccounts").text(D.p.N0)
};
fD.prototype.Mc = function (a) {
    var b = this;
    if (D.t.am(!0)) {
        a = Tf(a, !0);
        var c = ga("#claimNewAccountPaymentMethod").bO(),
                d = "hive" === c ? D.V.MT : "0.000 HIVE",
                e = function (a, b) {
                    a && (D6.EA((b ? b + " Accounts" : "Account") + " claimed!"), D.s.JX(!0))
                };
        if (a && "rc" === c) {
            var f = D.S.Mc(ju, D.l, d),
                    g = D.p.hh();
            console.log(f);
            a = D.p.hi();
            let aux = D.S.hX([f]);
            console.log(aux);
            var h = aux.hu,
                    k = Math.floor(a / h);
            g = Math.floor(g / h);
            if (!k) {
                let have = document.createElement("output");
                let need = document.createElement("output");
                have.title = Bm(a) + " RC";
                have.innerHTML = Bm(a).slice(0,-12);
                need.title = Bm(h) + " RC";
                need.innerHTML = Bm(h).slice(0,-12);
                
                c = "You currently have " + have.outerHTML + " MRC available, but you need " + need.outerHTML + " MRC to claim an account.";
                g > k && (c += "<br><br>You can claim up to " + g + " accounts when your RC Status reaches 100%.");
                D6.EB(c, "Insufficient Resource Credits", {
                    width: 470,
                    height: 240,
                    paddingX: 15,
                    paddingY: 15
                });
                return;
            }
            if (1 < k) {
                var l = function () {
                    D6.AX({
                        title: "How many to claim?",
                        a3: k
                    }, function (a) {
                        isNaN(a) && (a = 0);
                        a = parseInt(a);
                        if (1 > a || a > k)
                            D6.EA("Please enter a number between 1 and " + k + "!"), l();
                        else {
                            for (var b = [], c = 0; c < a; c++)
                                b.push(f);
                            var d = function () {
                                return e(!0, a)
                            };
                            D.t.DO(F1, !1, !0, function (a) {
                                return D.S.hj(a, b, d)
                            })
                        }
                    })
                };
                D6.EC("Claim Multiple?", "You currently have " + Bm(a) + " RC available, therefore you can claim up to " + Bm(k) +
                        " accounts with RC.<br><br>Do you want to claim multiple at once?", l,
                        function () {
                            return b.Mc(!1)
                        });
                return
            }
        }
        var m = function (a) {
            return D.S.Mc(a, D.l, d, e)
        };
        a = function () {
            return D.t.DO(F1, !1, !1, m)
        };
        "hive" === c ? D.p.VQ(Up) < AQ(d) ? D6.EA("You need " + d + " to claim a new account!") : D6.EC("Confirm Payment", "Do you really want to pay " + d + " to claim a new account?", a) : a()
    }
};
fD.prototype.Md = function () {
    D.t.am(!0) && ($("#createNewAccountName").val().toLowerCase().trim() ? D.f.OG("account_creator", function (a, b, c, d) {
        var e = function (a) {
            a && (D6.EA("Account created!"), $("#createNewAccountName").val(""), D.s.JX(!0))
        },
                f = function (a) {
                    D.S.Md(a, D.l, b, d.ownerPubkey, d.activePubkey, d.postingPubkey, d.memoPubkey, e)
                };
        D6.EC("Confirm Account Creation", "master_key" === a ? "Did you write down the Master Password for the new account?" : "Do you really want to create the account with the defined Public Keys?",
                function () {
                    return D.t.DO(F1, !1, !1, f)
                })
    }) : D6.EA("Please enter a valid account name!"))
};
fD.N9 = function (a) {
    if ("key_generator" === a) {
        var b = "#keyGenResult";
        var c = "#keyGenAccountName";
        var d = "#keyGenMasterKey"
    } else
        "change_masterkey" === a ? (b = "#toolChangeMasterKeyPreview", c = "#toolChangeMasterKeyAccountName", d = "#toolChangeMasterKeyNewKey") : "account_creator" === a && (b = "#createNewAccountKeyPreview", c = "#createNewAccountName", d = "#createNewAccountMasterKey");
    b = $(b);
    c = $(c).val().trim().toLowerCase();
    d = $(d).val().trim();
    Fs.fv(b);
    if (c && d)
        for (b.show(), "key_generator" === a && $("#keyGenExportPublicKeys").button("enable"),
                a = ["owner", "active", "posting", "memo"], d = D.S.N7(c, d, a), c = 0; c < a.length; c++)
            b.append(Fs.Aq([{
                    attr: {
                        "class": "mediumText"
                    },
                    html: Th.DT(a[c])
                }, {
                    attr: {
                        "class": "smallText notBold"
                    },
                    html: d[a[c]]
                }, {
                    attr: {
                        "class": "smallText notBold"
                    },
                    html: d[a[c] + "Pubkey"]
                }]));
    else
        "key_generator" === a ? $("#keyGenExportPublicKeys").button("disable") : b.hide()
};
fD.f5 = function (a) {
    a.find(".inputMasterKey").val("");
    a.find(".buttonGenerateMasterKey").button().on("click", function () {
        var a = $(this),
                c = a.parents("table").data("source"),
                d = $(a.data("id-name"));
        a = $(a.data("id-key"));
        (d = d.val().toLowerCase().trim()) ? (a.val(D.S.OB(d)), fD.N9(c)) : D6.EA("Please enter a valid account name!")
    });
    a.find(".inputMasterKey").on("input change", function () {
        var a = $(this).parents("table").data("source");
        a && fD.N9(a)
    });
    a.find(".inputAccountName").on("input change", function () {
        var b = $(this),
                c = b.parents("table").data("source");
        "account_creator" === c && D.f.by("", !1);
        a.find(b.data("id-key")).val("");
        fD.N9(c)
    });
    a.find(".importPublicKeysButton").button().on("click", function () {
        var a = $(this).parents("table").data("source");
        D.f.FQ(a)
    });
    a.find(".selectKeyGenerationMethod").each(function () {
        var b = $(this),
                c = b.parents("table"),
                d = c.data("source");
        gL.gQ(b, {
            dj: function (b) {
                var e;
                "account_creator" === d ? e = "#createNewAccountImportPublicKeys" : "change_masterkey" === d && (e = "#toolChangeMasterKeyImportPublicKeys");
                a.find(e)["master_key" === b ? "hide" : "show"]();
                c.find("tr").each(function () {
                    var a = $(this).data("key-method");
                    $(this)[a && a != b ? "hide" : "show"]()
                })
            }
        }).gc()
    })
};