var fW = function (a) {
    this.AJ(a)
};
fW.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("ChangePassword", "Change Hive Master Password").aI();
    b = new fW(b);
    a.aN(c + "Change Hive Master Password");
    a.ak(function () {
        d(function () {})
    });
    a.al();
    return b
};
fW.prototype.AJ = function (a) {
    var b = this;
    a.append('<table class="dataTable smallSize" data-source="change_masterkey"><tr><td colspan="3"><div class="toolInfoBox"> Here you can change the Master Password of your Hive account. This will change all Private and Public Keys as well, so please make sure to store the new password in a safe place before proceeding. <br><br> In case you have recovered your account recently, you need to wait at least for one hour after the recovery process took place to be able to change your password with this tool. </div><hr></td></tr><tr><td> Account Name </td><td><input id="toolChangeMasterKeyAccountName" class="inputAccountName userFromDblClick" type="text" maxlength="16" data-id-key="#toolChangeMasterKeyNewKey"></td><td></td></tr><tr><td> Key Generation </td><td><button id="toolChangeMasterKeyImportPublicKeys" class="importPublicKeysButton">Import Keys...</button><select id="toolChangeMasterKeyKeyMethod" class="selectKeyGenerationMethod" disabled><option value="master_key">Use Master Password</option><option value="public_keys">Use Existing Public Keys</option></select></td><td></td></tr><tr data-key-method="master_key"><td> New Master Password </td><td><input id="toolChangeMasterKeyNewKey" class="inputMasterKey mediumText" type="text" autocomplete="off"></td><td><button id="toolChangeMasterKeyGenerateKey" class="buttonGenerateMasterKey" data-id-name="#toolChangeMasterKeyAccountName" data-id-key="#toolChangeMasterKeyNewKey">Generate&nbsp;Key</button></td></tr><tr data-key-method="master_key"></tr><tr data-key-method="master_key"><td colspan="3"><table id="toolChangeMasterKeyPreview" class="dataTable simple oneColor smallSize"><tr class="headerRow mediumText"><th>Type</th><th>Private Key</th><th>Public Key</th></tr></table></td></tr><tr data-key-method="public_keys"><td> Public Keys </td><td colspan="2"><table id="toolChangeMasterKeyPublicKeys" class="mediumText"><tr><td> Owner </td><td><input type="text" data-role="owner"></td></tr><tr><td> Active </td><td><input type="text" data-role="active"></td></tr><tr><td> Posting </td><td><input type="text" data-role="posting"></td></tr><tr><td> Memo </td><td><input type="text" data-role="memo"></td></tr></table></td></tr><tr class="odd"><td colspan="3"><button id="toolChangeMasterKeyExec">Change Password</button></td></tr></table> ');
    D.l &&
            a.find("#toolChangeMasterKeyAccountName").val(D.l);
    a.find("#toolChangeMasterKeyExec").button().on("click", function () {
        return b.L2()
    });
    fD.f5(a)
};
fW.prototype.L2 = function () {
    D.f.OG("change_masterkey", function (a, b, c, d) {
        D.b.Z4(b, !1, function (c) {
            if (c.name === b) {
                var e = D.l,
                        g = function (a) {
                            D.S.Kz(a, b, D.S.FR(d.ownerPubkey), D.S.FR(d.activePubkey), D.S.FR(d.postingPubkey), d.memoPubkey, c.posting_json_metadata, function (a) {
                                D.l = e;
                                a && (D6.EA("Password changed!"), D.s.JX(!0))
                            })
                        },
                        h = function () {
                            D.l = e
                        };
                D6.EC("Confirm Password Change", "master_key" === a ? "Did you write down the new Master Password for your account?" : "Do you really want to set the defined Public Keys for your account?",
                        function () {
                            D.l = b;
                            D.t.DO(OQ, !0, !1, g, h)
                        })
            }
        })
    })
};
