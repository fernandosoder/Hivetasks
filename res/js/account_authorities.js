var bw = "account_name",
        lP = function () {};
lP.ct = function (a, b, c, d) {
    a.bA(bD);
    a.d1("KeyInput", "Authentication Required").aI();
    a.aN(c + "Authentication Required");
    a.ak(function () {
        if (window.iT) {
            var a = window.iT;
            window.iT = null;
            a.io !== D.s.im() ? D6.EA("Invalid origin!") : D6.DP(a.options, a.onDone, a.onCancel)
        }
    });
    a.al();
    return null
};
lP.az = function (a, b, c, d, e, f) {
    a && (D.l = "");
    var g = b.replace(/ /g, "_").toLowerCase(),
            h = a ? D.t.ax() : [];
    h = [{
            a1: "text",
            a2: bw,
            a3: D.l,
            a4: h,
            a5: "[ Hive Account Name ]",
            isDisabled: !a,
            dj: function (a, b) {
                b = b.val().trim().toLowerCase();
                var c = a.find("input[name='" + g + "']");
                D.t.CZ(b, F2, function (a) {
                    return c.val(a)
                }, function () {
                    return c.val("")
                })
            }
        }, {
            a1: "password",
            a2: g,
            a5: "[ Private " + Th.DT(b) + " ]",
            isMainInput: !0
        }];
    c = a ? {
        id: "btnUseKeyChain",
        text: "Hive KeyChain",
        value: bs,
        disable: c
    } : {
        id: "btnUseHiveConnect",
        text: "HiveLogin",
        value: bt,
        disable: d
    };
    a = {
        id: a ? "dialogSignIn" : "dialogEnterKey",
        title: a ? "Sign In" : "Authentication Required",
        width: "400px",
        inputs: h,
        fixed: !0,
        newTab: !aO.bv(b),
        autoFillButton: c,
        a7: bw,
        a8: "Please fill in the name of your Hive account!"
    };
    if (a.newTab && D.G.get(iS)) {
        var k = D.s.DS(FE + "/" + iR, !0);
        k.iT = {
            options: a,
            io: D.s.im(),
            onDone: function (a, b, c) {
                D6.EA("Signing transaction...");
                k.close();
                e && e(a, b, c)
            },
            onCancel: function () {
                D6.EA("Authentication cancelled.");
                k.close();
                f && f()
            }
        }
    } else
        D6.DP(a, e, f)
};
lP.DO = function (a, b, c, d, e) {
    var f = !D.l,
            g = aO.bv(a),
            h = function (b, h, k) {
                c || b != bt ? D.t.a6(b, a, f) ? g && k ? D.t.Ca(h, a, b, function () {
                    return d(b, h)
                }) : d(b, h) : a == Km || a == F2 ? m() : e && e() : d(bt, D.l)
            },
            k = function (a, b) {
                var c = function () {
                    D6.EA("The account '" + a + "' could not be found!");
                    m()
                };
                D.b.Z4(a, !1, function (d) {
                    D.p.Mh(d, !0, function () {
                        return h(b, a, !0)
                    }, c)
                }, c)
            },
            l = function (a, b) {
                f ? (b = b[bw].toLowerCase(), a == bs ? d(a, b) : k(b, a)) : h(a, D.l, !0)
            };
    var m = function () {
        lP.az(f, a, b, c, l, e)
    };
    var n = function () {
        c || 1 != D.G.get(NM) ? !f && g ? D.t.CZ(D.l, a,
                function (a) {
                    return h(a, D.l, !1)
                }, m) : m() : d(bt, D.l)
    },
            p = function () {
                a == F1 ? D6.EC("Use KeyChain?", "Do you want to use KeyChain for signing the transaction?", function () {
                    return d(a, D.l)
                }, n) : d(a, D.l)
            };
    f || b ? n() : D.S.Ob(p, n)
};
var k8 = function (a, b, c) {
    this.k9 = a;
    this.lA = b;
    this.lJ = c;
    this.ep = Fs.Rf("divAuthorityRole");
    this.AJ()
};
k8.prototype.aJ = function () {
    return this.ep
};
k8.prototype.lC = function (a, b) {
    var c = Fs.Rf("divAuthKey");
    a = Fs.c7("text", "inputAuthKey").val(a);
    b = Fs.c7("number", "inputAuthWeight").val(b);
    b = Fs.a9("dataTable").append(Fs.Aq(["Public Key", a, {
            html: Fs.j2("", "", Lm(s6 + "remove.png"), "Remove key", function () {
                return c.remove()
            }),
            attr: {
                rowspan: 2
            }
        }]), Fs.Aq(["Weight", b]));
    return c.append(b)
};
k8.prototype.lD = function (a, b) {
    var c = Fs.Rf("divAuthAccount"),
            d = Fs.c7("text", "inputAuthAccount").val(a).attr("placeholder", "[ Hive Account Name ]").on("change", function () {
        return d.val(d.val().trim().replace("@", "").toLowerCase())
    });
    a = Fs.c7("number", "inputAuthWeight").val(b);
    a = Fs.a9("dataTable").append(Fs.Aq(["Account", d, {
            html: Fs.j2("", "", Lm(s6 + "remove.png"), "Remove account", function () {
                return c.remove()
            }),
            attr: {
                rowspan: 2
            }
        }]), Fs.Aq(["Weight", a]));
    return c.append(a)
};
k8.prototype.lQ = function (a, b) {
    for (var c = a.weight_threshold, d = !0, e = 0; e < a.key_auths.length; e++)
        a.key_auths[e][1] >= c && (d = !1);
    for (e = 0; e < a.account_auths.length; e++)
        a.account_auths[e][1] >= c && (d = !1);
    d ? D6.EC("Confirm Role Settings", "\nAs no single Authority's weight reaches the Weight Threshold,\nthis Role will only be usable with Multisig (multiple signatures)\nand it won't be possible to use it for signing in to Hive platforms.\n<br><br>Do you want to continue?\n", b) : b()
};
k8.prototype.lF = function (a) {
    var b = [],
            c = a.weight_threshold;
    (!c || 1 > c) && b.push("- Weight Threshold must be >= 1");
    for (var d = [], e = 0, f = 0; f < a.key_auths.length; f++) {
        var g = a.key_auths[f],
                h = g[0];
        g = g[1];
        var k = "- Key " + (f + 1) + ": ";
        D.S.L1(h) ? d.includes(h) ? b.push(k + "Duplicate entry") : d.push(h) : b.push(k + "Invalid Public Key");
        !g || 1 > g ? b.push(k + "Weight must be >= 1") : g > c && b.push(k + "Weight must be <= Weight Threshold");
        e += g
    }
    d = [];
    for (h = f = 0; h < a.account_auths.length; h++) {
        k = a.account_auths[h];
        g = k[0];
        k = k[1];
        var l = "- Account " +
                (h + 1) + ": ";
        g ? d.includes(g) ? b.push(l + "Duplicate entry") : d.push(g) : b.push(l + "Invalid Account Name");
        !k || 1 > k ? b.push(l + "Weight must be >= 1") : k > c && b.push(l + "Weight must be <= Weight Threshold");
        f += k
    }
    e < c && f < c && b.push("- It would be impossible to sign a transaction, because the Total Weight is < Weight Threshold");
    b.length && D6.EB(b.join("<br>"), "Invalid " + Th.DT(this.k9) + " Role Settings", {
        paddingX: 15
    });
    return !b.length
};
k8.prototype.lE = function () {
    var a = this,
            b = this.k9;
    if ("posting" == b) {
        var c = "lG";
        var d = F1
    } else
        "active" == b ? (c = "lH", d = F1) : "owner" == b && (c = "lI", d = OQ);
    var e = {};
    e.weight_threshold = parseInt(this.lB.val());
    e.account_auths = [];
    e.key_auths = [];
    b = this.ep;
    b.find(".divAuthAccount").each(function () {
        var a = $(this),
                b = a.find(".inputAuthAccount").val().trim();
        a = parseInt(a.find(".inputAuthWeight").val().trim());
        e.account_auths.push([b, a])
    });
    b.find(".divAuthKey").each(function () {
        var a = $(this),
                b = a.find(".inputAuthKey").val().trim();
        a = parseInt(a.find(".inputAuthWeight").val().trim());
        e.key_auths.push([b, a])
    });
    this.lQ(e, function () {
        if (a.lF(e)) {
            var b = function (a) {
                a && D6.EA("Done!")
            };
            D.t.DO(d, !1, !1, function (d) {
                D.S[c](d, D.l, e, a.lJ, b)
            })
        }
    })
};
k8.prototype.AJ = function () {
    var a = this,
            b = this.ep,
            c = this.lA,
            d = c.weight_threshold;
    this.lB = Fs.c7("number").val(d);
    for (var e = Fs.Rf(), f = Fs.Ri("btnAddAuthorityRoleKey", "", "Add Public Key...", "", function () {
        var b = a.lC("", d);
        f.detach();
        e.append(b, f);
        b.find(".inputAuthKey").select()
    }), g = 0; g < c.key_auths.length; g++) {
        var h = c.key_auths[g];
        e.append(this.lC(h[0], h[1]))
    }
    e.append(f);
    var k = Fs.Rf(),
            l = Fs.Ri("btnAddAuthorityRoleAccount", "", "Add Account...", "", function () {
                var b = a.lD("", d);
                l.detach();
                k.append(b, l);
                b.find(".inputAuthAccount").select()
            });
    for (g = 0; g < c.account_auths.length; g++)
        h = c.account_auths[g], k.append(this.lD(h[0], h[1]));
    k.append(l);
    c = Fs.a9("dataTable simple").append(Fs.Aq(["Weight Threshold", this.lB]), Fs.Aq(["Key Auths", e]), Fs.Aq(["Account Auths", k]));
    g = Fs.Ri("btnSaveAuthorityRole", "", "Save Changes", "", function () {
        return a.lE()
    });
    "owner" == this.k9 && g.button("disable");
    b.append(c, "<hr>", g);
};
var mJ = function (a) {
    this.lJ = a;
    this.ep = Fs.Rf("divAuthorityRole");
    this.AJ()
};
mJ.prototype.aJ = function () {
    return this.ep
};
mJ.prototype.AJ = function () {
    var a = this,
            b = this.ep,
            c = Fs.Ri("btnSaveAuthorityRole", "", "Save Changes", "", function () {
                return a.lE()
            });
    this.mI = Fs.c7("text").val(this.lJ);
    var d = Fs.a9("dataTable simple").append(Fs.Aq(["Public Memo Key", this.mI]));
    b.append(d, "<hr>", c)
};
mJ.prototype.lE = function () {
    var a = this,
            b = this.mI.val().trim();
    if (b === this.lJ)
        D6.EA("The specified Memo Key equals your current one!");
    else if (D.S.L1(b)) {
        var c = function (c) {
            c && (a.lJ = b, D6.EA("Done!"))
        };
        D.t.DO(F1, !1, !1, function (a) {
            return D.S.mH(a, D.l, b, c)
        })
    } else
        D6.EA("Please enter a valid Public Key!")
};
var ka = function (a) {
    this.AJ(a)
};
ka.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("AccountAuthorities", "Hive Account Authorities").aI();
    var e = new ka(b);
    a.aN(c + "Hive Account Authorities");
    a.ak(function () {
        var a = function () {
            e.kb()
        };
        Pa([
            [D.C, "AG"]
        ], function () {
            return d(a)
        })
    });
    a.al();
    return e
};
ka.prototype.AJ = function (a) {
    Fs.lY(a, ".divAuthorityRole .dataTable tr td:nth-child(1){width:20%;vertical-align:top;padding-top:10px}.divAuthorityRole .dataTable tr td:nth-child(2){width:80%}.divAuthKey .dataTable tr td:nth-child(1),.divAuthAccount .dataTable tr td:nth-child(1){width:15%}.divAuthKey .dataTable tr td:nth-child(2),.divAuthAccount .dataTable tr td:nth-child(2){width:85%}.divAuthKey,.divAuthAccount{margin-bottom:5px}.btnAddAuthorityRoleKey,.btnAddAuthorityRoleAccount,.btnSaveAuthorityRole{width:190px;margin:5px 0}");
    a.append('<div class="textBox textBoxPanel lineHeightText"><p> Here you can manage the Account Authorities of your Hive account. The Hive blockchain offers three different Authority Roles (Posting, Active and Owner), which each can be individually configured as desired. Authorities can be based on Public Keys (Key Auths) and Hive account names (Account Auths). </p><p> Depending on the type of operation that an account wants to broadcast to the blockchain, the required Authority Role (permission level) changes. For example, for creating or voting a post the Posting Role will be used. For transferring funds from one account to another the Active Role will be used. For administrative account operations the Owner Role will be used. </p><p> The so called \'Weight Threshold\' of each Authority Role defines how much total weight is required to successfully sign and broadcast (complete) a related transaction. Each authorized Public Key / Hive account must be assigned a weight, which specifies how much influence that key / account has on making use of the related Authority Role. </p><p> Additionally to the three regular Authority Roles every account can have one Memo Key, which, as the name suggests, can be used to encrypt and decrypt memos in transfer operations. Transfer memos are being encrypted in such a way that both the sender and the receiver can decrypt it by combining the own Private and the other side\'s Public Memo Key. </p><hr><a href="https://hive.blog/faq.html#What_are_my_different_keys_for" target="_blank"> Click here to learn more about Account Authorities... </a></div> ')
};
ka.prototype.kc = function (a) {
    var b = Th.DT(a),
            c = Fs.Rf("textBox");
    a = D.t.am(!1) ? (new k8(a, D.p.Zx[a], D.p.Zx.memo_key)).aJ() : "Please sign in...";
    D.s.aM(!1, "AccountAuthorities" + b, b + " Authorities", c.append(a), !0)
};
ka.prototype.mG = function () {
    var a = Fs.Rf("textBox");
    var b = D.t.am(!1) ? (new mJ(D.p.Zx.memo_key)).aJ() : "Please sign in...";
    D.s.aM(!1, "AccountAuthoritiesMemoKey", "Memo Key", a.append(b), !0)
};
ka.prototype.kb = function () {
    this.kc("posting");
    this.kc("active");
    this.kc("owner");
    this.mG()
};