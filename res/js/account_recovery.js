var O1 = "HiveTasks Public Keys Export";
D.f = {
    by: function (a, b) {
        $("#createNewAccountNameStatus").text(a).removeClass(b ? "numPositive" : "numNegative").addClass(b ? "numNegative" : "numPositive")
    },
    FQ: function (a) {
        D6.P8("Load Public Keys From File", function (b) {
            var c = new FileReader;
            c.onload = function (b) {
                var c = "";
                if ("account_creator" == a) {
                    var d = $("#createNewAccountPublicKeys");
                    var g = $("#createNewAccountName").val()
                } else
                    "change_masterkey" == a && (d = $("#toolChangeMasterKeyPublicKeys"), g = D.l);
                try {
                    c = Th.DW(b.target.result)
                } catch (k) {
                    console.log(k)
                }
                if (c && c.account &&
                        c.keys && c.id == O1) {
                    if (c.account != g)
                        if ("account_creator" == a)
                            $("#createNewAccountName").val(c.account), D6.EA("The name of the new account has been updated!");
                        else if ("change_masterkey" == a) {
                            D6.EA("The account name in the file does not match the name of your account!");
                            $("#selectFileDialog").remove();
                            return
                        }
                    for (var h in c.keys)
                        d.find("input[data-role='" + h + "']").val(c.keys[h]);
                    $("#selectFileDialog").remove()
                } else
                    D6.EA("The selected file is incompatible!")
            };
            c.readAsText(b)
        })
    },
    OF: function (a, b) {
        if (a) {
            var c =
                    M9.validateAccountName(a);
            c ? D.f.by("[ ! ] " + c, !0) : (D.f.by("Checking account name...", !1), D.b.Z4(a, !1, function () {
                return D.f.by("[ ! ] Account already exists.", !0)
            }, function () {
                D.f.by("[ OK ]", !1);
                AB(b)
            }))
        } else
            D.f.by("", !1)
    },
    OG: function (a, b) {
        var c = function (a, c, d, h) {
            if (a) {
                var e = "";
                if ("master_key" === c) {
                    e = d.val().trim();
                    if (!e || 52 != e.length || !e.startsWith("P5")) {
                        D6.EA("Please enter a valid Master Password!");
                        return
                    }
                    d = D.S.N7(a, e, ["owner", "active", "posting", "memo"])
                } else
                    d = {
                        ownerPubkey: h.find("input[data-role='owner']").val(),
                        activePubkey: h.find("input[data-role='active']").val(),
                        postingPubkey: h.find("input[data-role='posting']").val(),
                        memoPubkey: h.find("input[data-role='memo']").val()
                    };
                for (var f in d)
                    if (f.endsWith("Pubkey") && !D.S.L1(d[f])) {
                        D6.EA("Please define all Public Keys! (" + f + " is invalid)");
                        return
                    }
                b(c, a, e, d)
            } else
                D6.EA("Please enter a valid account name!")
        };
        if ("account_creator" === a) {
            var d = $("#createNewAccountName").val().toLowerCase().trim();
            D.f.OF(d, function () {
                Lu() || D.p.N0 ? c(d, ga("#createNewAccountKeyMethod").bO(),
                        $("#createNewAccountMasterKey"), $("#createNewAccountPublicKeys")) : D6.EA("You need a pending claimed account to continue!")
            })
        } else
            "change_masterkey" === a && (a = $("#toolChangeMasterKeyAccountName").val().toLowerCase().trim(), c(a, ga("#toolChangeMasterKeyKeyMethod").bO(), $("#toolChangeMasterKeyNewKey"), $("#toolChangeMasterKeyPublicKeys")))
    }
};
var fV = function (a) {
    this.AJ(a)
};
fV.ct = function (a, b, c, d) {
    a.bA(bD);
    a.J9(50, "Loading Recovery Requests...");
    b = a.d1("Recovery", "Hive Account Recovery").aI();
    b = new fV(b);
    a.aN(c + "Hive Account Recovery");
    a.ak(function () {
        d(function () {
            fV.EQ()
        })
    });
    a.al();
    return b
};
fV.prototype.AJ = function (a) {
    var b = this;
    Fs.lY(a, "#toolAccountRecoveryNewPublicOwnerKey,#toolAccountRecoveryIncomingRequestNewPublicOwnerKey,#toolAccountRecoveryIncomingRequestRecentPublicOwnerKey{width:78%}#toolAccountRecoveryAccountToRecover,#toolAccountRecoveryIncomingRequestAccountName{width:224px}");
    a.append('<table class="dataTable smallSize mbBig"><tr><td colspan="2"><strong class="bigText headerText">Request Account Recovery</strong><hr><div class="toolInfoBox"> Here you (the Recovery Account) can initiate an Account Recovery Request for all accounts, in which your account was defined as Recovery Account. <br><br> In case you want your own account to be recovered, you need to contact the owner of your Recovery Account and send him your new Public Owner Key (which you can create with the <a class="runPage" href="https://hivetasks.com/key-generator">Key Generator Tool</a>). <br><br> The account that should be recovered will receive the request as an incoming account operation and can start the recovery process within 24 hours by confirming the request in the \'Incoming Recovery Request\' section below. </div><hr></td></tr><tr><td> Account To Recover </td><td><input id="toolAccountRecoveryAccountToRecover" type="text" maxlength="16"></td></tr><tr><td> New Public Owner Key </td><td class="mediumText"><input id="toolAccountRecoveryNewPublicOwnerKey" type="text" maxlength="53"></td></tr><tr><td colspan="2"><button id="toolAccountRecoveryExec">Request Recovery</button></td></tr></table><table id="toolAccountRecoveryIncomingRequest" class="dataTable smallSize"><tr class="headerRow"><td colspan="2"><strong class="bigText headerText">Incoming Recovery Request</strong><hr><div class="toolInfoBox"> After confirming an Account Recovery Request you need to change the Master Password of your account (can be done with the <a class="runPage" href="https://hivetasks.com/change-password">Change Password Tool</a> on HiveTasks). <br><br> For security reasons you need to wait for one hour after the account recovery took place to be able to change your password. </div><hr></td></tr><tr><td> Account To Recover </td><td><input id="toolAccountRecoveryIncomingRequestAccountName" class="inputAccountName" type="text" maxlength="16">&nbsp; <button id="buttonIncomingRequestRefresh">Load Recovery Request</button></td></tr><tr data-result="0"><td colspan="2"></td></tr><tr data-result="0"><td colspan="2" class="notBold"> No active request found. </td></tr><tr data-result="1"><td> Expiration Time </td><td id="toolAccountRecoveryIncomingRequestExpirationTime"></td></tr><tr data-result="1"><td> New Public Owner Key </td><td class="mediumText"><input id="toolAccountRecoveryIncomingRequestNewPublicOwnerKey" type="text" maxlength="53" disabled></td></tr><tr data-result="1"><td> Recent Public Owner Key </td><td class="mediumText"><input id="toolAccountRecoveryIncomingRequestRecentPublicOwnerKey" type="text" maxlength="53"></td></tr><tr data-result="1"><td colspan="2"><button id="tabToolAccountRecoveryConfirmRequest">Recover Account</button></td></tr></table> ');
    a.find(".runPage").on("click", function (a) {
        a.preventDefault();
        D.s.DS($(this).attr("href"), !0)
    });
    a.find("#toolAccountRecoveryExec").button().on("click", function () {
        return b.Fz()
    });
    a.find("#tabToolAccountRecoveryConfirmRequest").button().on("click", function () {
        return b.Cl()
    });
    fV.il().button().on("click", function () {
        return fV.EQ()
    })
};
fV.prototype.Fz = function () {
    if (D.t.am(!0)) {
        var a = $("#toolAccountRecoveryAccountToRecover").val().toLowerCase().trim(),
                b = $("#toolAccountRecoveryNewPublicOwnerKey").val();
        if (a)
            if (D.S.L1(b)) {
                var c = function () {
                    return D6.EA("Account recovery request started!")
                },
                        d = function (d) {
                            return D.S.Fz(d, D.l, a, b, c)
                        },
                        e = function () {
                            D6.EC("Confirm Account Recovery Request", "Do you really want to start an account recovery request for '" + a + "'?", function () {
                                return D.t.DO(F1, !1, !1, d)
                            })
                        };
                D.b.Z4(a, !1, function (b) {
                    b.recovery_account !=
                            D.l ? D6.EB(fN("request_account_recovery_hint", [b.recovery_account, a])) : e()
                })
            } else
                D6.EA("The new public owner key is invalid!");
        else
            D6.EA("Please enter the name of the account that you want to recover!")
    }
};
fV.prototype.Cl = function () {
    var a = fV.ik().val();
    if (a) {
        var b = $("#toolAccountRecoveryIncomingRequestNewPublicOwnerKey").val(),
                c = $("#toolAccountRecoveryIncomingRequestRecentPublicOwnerKey").val(),
                d = [];
        if (D.S.L1(b))
            if (D.S.L1(c)) {
                var e = D.l,
                        f = function (a) {
                            D.l = e;
                            a && (D6.EA("Account recovered!"), fV.EQ())
                        },
                        g = function () {
                            D.S.Cl(d, a, b, c, f)
                        },
                        h = function (a) {
                            d.push(a);
                            g()
                        };
                D.l = a;
                D.t.DO(Pf, !0, !0, function (a) {
                    d.push(a);
                    D.S.NL(a) ? g() : D.t.DO(Pe, !0, !0, h)
                }, function () {
                    D.l = e
                })
            } else
                D6.EA("The recent public owner key is invalid!");
        else
            D6.EA("The new public owner key is invalid!")
    }
};
fV.ik = function () {
    return $("#toolAccountRecoveryIncomingRequestAccountName")
};
fV.il = function () {
    return $("#buttonIncomingRequestRefresh")
};
fV.PY = function () {
    var a = function (a) {
        a && (D.C.Fr(), D6.EA("Recovery Account changed!"))
    };
    D6.AX({
        title: "New Recovery Account:"
    }, function (b) {
        D.t.DO(OQ, !0, !1, function (c) {
            return D.S.PY(c, D.l, b, a)
        })
    })
};
fV.EQ = function () {
    var a = $("#toolAccountRecoveryIncomingRequest"),
            b = fV.ik();
    a.find("tr[data-result='0']").hide();
    a.find("tr[data-result='1']").hide();
    if (!b.val())
        if (D.l)
            b.val(D.l);
        else
            return;
    D.S.Dy(b.val(), function (b) {
        b ? ($("#toolAccountRecoveryIncomingRequestExpirationTime").html(D.B.DH(moment.utc(b.expires).local(), !1, !1, !0)), $("#toolAccountRecoveryIncomingRequestNewPublicOwnerKey").val(b.new_owner_authority.key_auths[0][0]), a.find("tr[data-result='1']").show()) : a.find("tr[data-result='0']").show()
    })
};
