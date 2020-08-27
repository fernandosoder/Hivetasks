
b5.prototype.AI = function () {
    b4.AI();
};
b5.prototype.get = function (a, b) {
    return void 0 !== b && b
            ? ((b = D.X.get(Gn + a, this.get(a, !1))),
                    a != EK || isNaN(b) || ((b = EJ[b].url), this.set(a, b, !0)),
                    -1 < this.types.bool.indexOf(a) ? (1 == b ? 1 : 0) : -1 < this.types.int.indexOf(a) ? parseInt(b) : -1 < this.types.float.indexOf(a) ? parseFloat(b) : b)
            : this.items[a];
};
b5.prototype.set = function (a, b, c) {
    -1 < this.types.bool.indexOf(a) ? (b = 1 == b ? 1 : 0) : -1 < this.types.int.indexOf(a) ? (b = parseInt(b)) : -1 < this.types.float.indexOf(a) && (b = parseFloat(b));
    this.items[a] = b;
    void 0 !== c && c && D.X.set(Gn + a, b);
};
b5.prototype.Fp = function () {
    this.set(bR, "");
    this.set(bQ, "[]");
    this.set(fs, "us");
    this.set(EK, "https://steemit.com");
    this.set(D6, 0);
    this.set(BS, D7);
    this.set(GU, D.d.items[0].url);
    this.set(l3, 1);
    this.set(Gb, "all");
    this.set(IF, "default");
    this.set(GR, "coincap");
    this.set(GC, "USD");
    this.set(GK, 0.35);
    this.set(F3, "allow");
    this.set(JP, 1);
    this.set(Jc, 1);
    this.set(D5, 1250);
    this.set(KF, 1);
    this.set(KG, 1);
    this.set(KD, 1);
    this.set(KH, 1);
    this.set(KI, 2);
    this.set(BU, 100);
    this.set(Kq, 0);
    this.set(MB, 0);
    this.set(Nu, "default");
    this.set(N1, 5);
    this.set(Nw, "[]");
    this.set(Oy, 1);
    this.set(Ni, 0);
    this.set(Tl, 1);
    this.set(i4, 1);
    this.set(PV, 0);
    this.set(P7, 1);
    this.set(TO, "");
    this.set(Yz, 0);
    this.set(gW, 0);
    this.set(RC, "bottom");
    this.set(Re, 0);
    this.set(Rf, 0);
    this.set(Rg, 0);
    this.set(Rh, 0);
    this.set(RB, 0);
    this.set(RJ, 1);
};
b5.prototype.mS = function () {
    this.types.bool = [JP, KF, KG, KD, KH, Kq, MB, Oy, Ni, Tl, i4, PV, P7, RB, RJ, gW, l3];
    this.types.int = [D6, BS, Jc, D5, KI, BU, N1, Re, Rf, Rg, Rh];
    this.types.float = [GK, Yz];
};
b5.prototype.load = function (a) {
    this.mS();
    this.Fp();
    var b = D.s.T2,
            c = b.account;
    b = b.theme;
    c = c ? c : D.X.get(Jk, "");
    b && -1 < IM.indexOf(b) && this.set(IF, b, !0);
    D.X.set(Jk, c);
    D.s.DH(c);
    D.s.kQ() && (D.l = c);
    this.GD(this.get(GC, !0), !1);
    this.CF(this.get(D6, !0), !1);
    c = [bR, bQ, fs, EK, GR, IF, GU, l3, BS, F3, GK, Gb, JP, Jc, D5, KF, KG, KD, KH, KI, BU, Kq, MB, Nu, N1, Oy, Ni, Tl, i4, PV, P7, TO, Yz, RC, RB, RJ, Re, Rf, Rg, Rh, gW];
    for (b = 0; b < c.length; b++)
        this.set(c[b], this.get(c[b], !0));
    this.KQ(a);
};
b5.prototype.KQ = function (a) {
    D.V.LK = !0;
    D.V.LQ = "prevent" == this.get(F3);
    D.D && (D.D.J1 = parseInt(this.get(BU)));
    var b = $("#tabActivePosts .panelAccountPosts").data("posts_panel_handle");
    b && (b.Yb(this.get(Nu)), b.VF(this.get(N1), !1));
    this.KE();
    ((b = this.get(IF, !0)) && -1 != IM.indexOf(b)) || (b = "default");
    this.IG(b, !1, a);
    D.p.Yw(this.get(Yz));
};
b5.prototype.MH = function (a) {
    var b = this;
    if (this.get(GU) != a) {
        var c = function (a, c) {
            var d = D.d.get(a);
            a = D.d.bw(d);
            D4.D9("Connecting to node: " + a);
            D.d.CR(d, !0, function (a) {
                a
                        ? (D.C.Fs(), c(!0))
                        : (D4.D9("Connection error! Trying other node..."),
                                b.set(GU, "", !1),
                                setTimeout(function () {
                                    return D.d.CQ(!0);
                                }, 1e3),
                                c(!1));
            });
        };
        if ("custom" == a) {
            var d = g8("#selectSteemNode");
            D4.AX(
                    {title: "Custom Node Url:"},
                    function (a) {
                        D.d.Fq(a) ||
                                ((a = D.d.af(a)),
                                        c(a, function () {
                                            b4.he();
                                            d.aM(a, !1);
                                        }));
                    },
                    function () {
                        return d.aM(D.d.mR.url, !1);
                    }
            );
        } else
            c(a, function () {});
    }
};
b5.prototype.CF = function (a, b) {
    this.set(D6, a, b);
    D.V.E6 = aG.Db(a, 0);
    D.V.E5 = aG.Db(a, 1);
    D.V.Fe = aG.Db(a, -1);
    $(".hasDatepicker").datepicker("option", "dateFormat", D.B.IK());
    b && (D.D && D.D.filter(), D.R && D.R.refresh());
};
b5.prototype.KA = function (a) {
    for (var b = 0; b < EJ.length; b++)
        if (EJ[b].url == a)
            return b;
    return this.KA("https://hive.blog");
};
b5.prototype.EL = function () {
    return EJ[this.KA(this.get(EK))];
};
b5.prototype.Y2 = function () {
    return this.EL().url;
};
b5.prototype.Zy = function () {
    return this.EL().title;
};
b5.prototype.GD = function (a, b) {
    $("#tableRecentRewards,#tableAllTimeRewards")
            .find("th.colSum")
            .text("Total " + a);
    this.set(GC, a, b);
    D.R && D.R.refresh();
};
b5.prototype.hw = function () {
    if (!this.hx.length) {
        var a = MG() ? "../img/" : "res/img/",
                b = [],
                c = function (a, c) {
                    return b.push([a, c]);
                };
        c("--img-profile", "profile.png");
        c("--img-profile-hover", "profile-hover.png");
        c("--img-preview", "preview.png");
        c("--img-arrow-down", "arrow-down.png");
        c("--img-arrow-right", "arrow-right.png");
        c("--img-item-minimized", "item-minimized.png");
        c("--img-item-minimized-light", "item-minimized-light.png");
        c("--img-item-maximized", "item-maximized.png");
        c("--img-item-maximized-light", "item-maximized-light.png");
        c("--img-pie-chart", "pie-chart.png");
        c("--img-upvote-off", "upvote-off.png");
        c("--img-upvote-on", "upvote.png");
        c("--img-upvote-light", "upvote-light.png");
        c("--img-downvote-off", "downvote-off.png");
        c("--img-downvote-on", "downvote.png");
        c("--img-downvote-light", "downvote-light.png");
        c("--img-upvote-post-off", "upvote-post-off.png");
        c("--img-upvote-post-on", "upvote-post-on.png");
        c("--img-downvote-post-off", "downvote-post-off.png");
        c("--img-downvote-post-on", "downvote-post-on.png");
        c("--img-op-in", "operations/op-in.png");
        c("--img-op-out", "operations/op-out.png");
        c("--img-op-reward", "operations/op-reward.png");
        c("--img-op-in-transaction", "operations/op-in-transaction.png");
        c("--img-op-out-transaction", "operations/op-out-transaction.png");
        c("--img-op-in-comment", "operations/op-in-comment.png");
        c("--img-op-in-upvote", "operations/op-in-upvote.png");
        c("--img-op-in-downvote", "operations/op-in-downvote.png");
        c("--img-op-out-upvote", "operations/op-out-upvote.png");
        c("--img-op-out-downvote", "operations/op-out-downvote.png");
        for (var d = 0; d < b.length; d++) {
            c = b[d];
            var e = new Image();
            e.src = L8("res/img/" + c[1]);
            this.hx.push(e);
            aH.Kj(c[0], "url('" + L8(a + c[1]) + "')");
        }
    }
};
b5.prototype.IG = function (a, b, c) {
    this.set(IF, a, b);
    D.s.IG(a);
    this.hw();
    b = MG();
    var d = T3();
    a = "theme-" + a.toLowerCase() + (b && !d ? "" : ".min") + ".css";
    $("#themeFile").attr("href", (b ? "" : "/") + "res/css/themes/" + a);
    var e = setInterval(function () {
        1 == aH.IH("--ready") && (clearInterval(e), c());
    }, 250);
};
b5.prototype.FG = function () {
    var a = encodeURIComponent(btoa(this.FF()));
    return (MG() ? D.s.DP() + "?account=" + D.l + "&cfg=" : FE + "/@" + D.l + "?cfg=") + a;
};
b5.prototype.FF = function () {
    return JSON.stringify({id: H1, version: H2, values: this.items});
};
b5.prototype.FH = function (a, b) {
    var c = "";
    try {
        c = T7.DU(a, !0);
    } catch (e) {
        console.log(e);
    }
    if (c && c.values && c.id == H1) {
        a = c.values;
        for (var d in a)
            (c = $("#tabSettings").find(".qControl[data-key='" + d + "']")), c.length && g8(c).aM(a[d]), this.set(d, a[d], !0);
        this.KQ(b);
    } else
        D4.D9("The selected file is incompatible!");
};
b5.prototype.Hy = function () {
    var a = $.datepicker.formatDate("yy-mm-dd", new Date());
    aH.IL("HiveTasks-Settings-" + a + ".json", this.FF());
};
b5.prototype.Hz = function () {
    var a = this,
            b,
            c = function () {
                $("#selectFileDialog").remove();
                D4.D9("Settings successfully loaded!");
            },
            d = function () {
                var d = new FileReader();
                d.onload = function (b) {
                    a.FH(b.target.result, c);
                };
                d.readAsText(b);
            };
    D4.QW("Load Settings From File", function (a) {
        b = a;
        a = Ft.Fh("div", {class: "confirmDialog"}, "Do you want to import the file '" + a.name + "'?");
        D4.Mg("Confirm Import", a, d);
    });
};
b5.prototype.TP = function (a) {
    D.p.TQ = a
            .toLowerCase()
            .replace(/\r|\n|\t|,|@/g, " ")
            .replace(/ {2,}/g, " ")
            .trim()
            .split(" ");
    for (a = D.p.TQ.length - 1; 0 <= a; a--)
        D.p.TQ[a].trim() || D.p.TQ.splice(a, 1);
};
b5.prototype.KE = function () {
    var a = this,
            b = function (b) {
                return 1 == a.get(b) ? "removeClass" : "addClass";
            },
            c = aH.W5();
    c[b(KF)]("noRowGradients");
    c[b(KG)]("noTitleGradients");
    c[b(KD)]("noBoxShadows");
    c[b(P7)]("noColorizedOpTitles");
};
b5.prototype.kA = function (a, b) {
    var c = {};
    b.find("*").each(function () {
        var a = $(this),
                b = a.attr("id"),
                f = a.prop("tagName");
        b && f && ((a = a.hasClass("qControl") ? g8(a).bt() : a.val()), void 0 !== a && String(a).length && (c[b] = a));
    });
    this.set(a, JSON.stringify(c), !0);
};
b5.prototype.kB = function (a, b) {
    if ((a = this.get(a, !0))) {
        var c = T7.DU(a);
        c &&
                b.find("*").each(function () {
            var a = $(this),
                    b = a.attr("id"),
                    f = a.prop("tagName"),
                    g = c[b];
            b && f && void 0 !== g && (a.hasClass("qControl") ? ((b = g8(a)) ? b.aM(g) : Pn("handle null", a)) : a.val(g));
        });
    }
};
var b4 = function () {};
b4.init = function () {
    var a = D.G,
            b = $("#tabSettings");
    aH.mB(
            "styleSettings",
            "\n .settingsRightBtn {\n position: relative;\n width: 182px;\n margin: 0 0 7px 0;\n }\n #tabSettingsGeneral .dataTable tr td:nth-child(2),\n #tabSettingsLayout .dataTable tr td:nth-child(3) {\n width: 50%;\n }\n #tabSettingsGeneral .dataTable tr td:nth-child(3),\n #tabSettingsLayout .dataTable tr td:nth-child(3) {\n width: 25%;\n vertical-align: top;\n text-align: right;\n padding-left: 20px;\n border-left: 1px solid var(--border);\n }\n "
            );
    var c = function (a) {
        var b = [];
        if (a)
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (aI.Qc(d) && !d.text) {
                    var e = d[0];
                    b.push({value: e, text: 1 < d.length ? d[1] : e});
                } else
                    b.push(d);
            }
        return b;
    },
            d = function (b, d, e, f, g) {
                e = c(e);
                return new gt({
                    id: b,
                    "data-key": d,
                    items: e,
                    value: a.get(d),
                    width: "75%",
                    eI: function (b) {
                        g || a.set(d, b, !0);
                        f && f(b);
                    },
                }).an();
            },
            e = function (b, d, e, f, g) {
                e = c(e);
                return new eH({
                    id: b,
                    "data-key": d,
                    buttons: e,
                    value: a.get(d),
                    width: "75%",
                    eI: function (b) {
                        g || a.set(d, b, !0);
                        f && f(b);
                    },
                }).an();
            },
            f = function (a, b, c) {
                return Ft.R7("settingsRightBtn", a, b, "", c);
            },
            g = ak
            .gi({id: "tabsSettings"})
            .gj([
                {id: "tabSettingsGeneral", title: "General"},
                {id: "tabSettingsView", title: "View"},
                {id: "tabSettingsLayout", title: "Layout"},
                {id: "tabSettingsSecurity", title: "Security"},
            ])
            .appendTo(b),
            h = g.fX(0),
            k = g.fX(1);
    b = g.fX(2);
    g = g.fX(3);
    for (
            var l = f("btnCreateSettingsLink", "Create Link...", b4.eC),
            m = f("btnLoadSettingsFromFile", "Load From File...", b4.eD),
            n = f("btnSaveSettingsToFile", "Save To File...", b4.eE),
            p = f("btnShowNodeConfig", "Node Config...", b4.mE),
            q = [],
            r = 0;
            r < EJ.length;
            r++
            )
        q.push([EJ[r].url]);
    (r = a.get(GU)) && (D.d.jB(r) ? a.set(GU, "api.hive.blog", !0) : D.d.Fq(r) || D.d.af(r));
    r = [];
    for (var t = 0; t < GW.length; t++) {
        var u = GW[t].name;
        r.push([u.toLowerCase(), u]);
    }
    t = [];
    for (u = 0; u < Ba.length; u++)
        t.push([u, Ba[u]]);
    h.append(
            Ft.be("dataTable withMarginBottom", "", [
                Ft.Fj("td", ["Language", d("selectLanguage", fs, [["us", "English (US)"]]), {attr: {rowspan: 8}, html: [l, m, n, "<br><br>", p]}]),
                Ft.Fj("td", [
                    "Hive Site",
                    d("selectSteemSite", EK, q, function () {
                        D.R.J5 &&
                                D4.EB("Confirm Page Refresh", "This change requires a page refresh.<br>Do you want to reload the page now?", function () {
                                    return window.location.reload(!0);
                                });
                    }),
                ]),
                Ft.Fj("td", [
                    "Hive Node",
                    d(
                            "selectSteemNode",
                            GU,
                            b4.hf(),
                            function (b) {
                                return a.MH(b);
                            },
                            !0
                            ),
                ]),
                Ft.Fj("td", [
                    "Refresh Interval",
                    d(
                            "selectRefreshInterval",
                            BS,
                            [
                                ["30", "30 Seconds"],
                                ["60", "60 Seconds"],
                                ["180", "3 Minutes"],
                                ["300", "5 Minutes"],
                                ["900", "15 Minutes"],
                                ["1800", "30 Minutes"],
                            ],
                            function (a) {
                                return D.C.CL(a);
                            },
                            !0
                            ),
                ]),
                Ft.Fj("td", [
                    "Coin Site",
                    d("selectCoinSite", GR, r, function (a) {
                        D.V.LK = !0;
                        D.A.refresh();
                    }),
                ]),
                Ft.Fj("td", [
                    "Desktop Notifications",
                    d("selectEnableDesktopNotifications", Gb, [
                        ["all", "Show All"],
                        ["mentions", "Only Mentions"],
                        ["followers", "Only Followers"],
                        ["none", "Disabled"],
                    ]),
                ]),
                Ft.Fj("td", [
                    "NSFW Content",
                    e(
                            "selectShowNSFWContent",
                            PV,
                            [
                                [0, "Hide"],
                                [1, "Show"],
                            ],
                            function (a) {
                                return T4.PW();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Enable Hive-Engine",
                    e(
                            "selectEnableSteemEngine",
                            l3,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (a) {
                                D.A && D.A.VA();
                                WO.l5();
                                1 != a && ((D.j.Vc = !1), (D.j.X7 = !1));
                            }
                    ),
                ]),
            ])
            );
    k.append(
            Ft.be("dataTable withMarginBottom", "", [
                Ft.Fj("td", [
                    "Date Format",
                    d(
                            "selectDateFormat",
                            D6,
                            t,
                            function (b) {
                                return a.CF(b, !0);
                            },
                            !0
                            ),
                ]),
                Ft.Fj("td", [
                    "Preview Currency",
                    d(
                            "selectPreviewValuta",
                            GC,
                            [
                                ["AED", "AED (United Arab Emirates Dirham)"],
                                ["AFN", "AFN (Afghan Afghani)"],
                                ["AMD", "AMD (Armenian Dram)"],
                                ["ANG", "ANG (Netherlands Antillean Guilder)"],
                                ["AOA", "AOA (Angolan Kwanza)"],
                                ["ARS", "ARS (Argentine Peso)"],
                                ["AUD", "AUD (Australian Dollar)"],
                                ["AWG", "AWG (Aruban Florin)"],
                                ["AZN", "AZN (Azerbaijani Manat)"],
                                ["BAM", "BAM (Bosnia Herzegovina Convertible Mark)"],
                                ["BBD", "BBD (Barbadian Dollar)"],
                                ["BDT", "BDT (Bangladeshi Taka)"],
                                ["BGN", "BGN (Bulgarian Lev)"],
                                ["BHD", "BHD (Bahraini Dinar)"],
                                ["BIF", "BIF (Burundian Franc)"],
                                ["BMD", "BMD (Bermudan Dollar)"],
                                ["BND", "BND (Brunei Dollar)"],
                                ["BOB", "BOB (Bolivian Boliviano)"],
                                ["BRL", "BRL (Brazilian Real)"],
                                ["BTN", "BTN (Bhutanese Ngultrum)"],
                                ["BWP", "BWP (Botswanan Pula)"],
                                ["BYN", "BYN (Belarusian Ruble)"],
                                ["BZD", "BZD (Belize Dollar)"],
                                ["CAD", "CAD (Canadian Dollar)"],
                                ["CDF", "CDF (Congolese Franc)"],
                                ["CHF", "CHF (Swiss Franc)"],
                                ["CLF", "CLF (Chilean Unit Of Account)"],
                                ["CLP", "CLP (Chilean Peso)"],
                                ["CNH", "CNH (Chinese Yuan (offshore))"],
                                ["CNY", "CNY (Chinese Yuan Renminbi)"],
                                ["COP", "COP (Colombian Peso)"],
                                ["CRC", "CRC (Costa Rican Col\u00f3n)"],
                                ["CUC", "CUC (Cuban Convertible Peso)"],
                                ["CUP", "CUP (Cuban Peso)"],
                                ["CVE", "CVE (Cape Verdean Escudo)"],
                                ["CZK", "CZK (Czech Republic Koruna)"],
                                ["DJF", "DJF (Djiboutian Franc)"],
                                ["DKK", "DKK (Danish Krone)"],
                                ["DOP", "DOP (Dominican Peso)"],
                                ["DZD", "DZD (Algerian Dinar)"],
                                ["EGP", "EGP (Egyptian Pound)"],
                                ["ERN", "ERN (Eritrean Nakfa)"],
                                ["ETB", "ETB (Ethiopian Birr)"],
                                ["EUR", "EUR (Euro)"],
                                ["FJD", "FJD (Fijian Dollar)"],
                                ["FKP", "FKP (Falkland Islands Pound)"],
                                ["GBP", "GBP (British Pound Sterling)"],
                                ["GEL", "GEL (Georgian Lari)"],
                                ["GGP", "GGP (Guernsey Pound)"],
                                ["GHS", "GHS (Ghanaian Cedi)"],
                                ["GIP", "GIP (Gibraltar Pound)"],
                                ["GMD", "GMD (Gambian Dalasi)"],
                                ["GNF", "GNF (Guinean Franc)"],
                                ["GTQ", "GTQ (Guatemalan Quetzal)"],
                                ["GYD", "GYD (Guyanaese Dollar)"],
                                ["HKD", "HKD (Hong Kong Dollar)"],
                                ["HNL", "HNL (Honduran Lempira)"],
                                ["HRK", "HRK (Croatian Kuna)"],
                                ["HTG", "HTG (Haitian Gourde)"],
                                ["HUF", "HUF (Hungarian Forint)"],
                                ["IDR", "IDR (Indonesian Rupiah)"],
                                ["ILS", "ILS (Israeli New Sheqel)"],
                                ["IMP", "IMP (Manx Pound)"],
                                ["INR", "INR (Indian Rupee)"],
                                ["IQD", "IQD (Iraqi Dinar)"],
                                ["IRR", "IRR (Iranian Rial)"],
                                ["ISK", "ISK (Icelandic Kr\u00f3na)"],
                                ["JEP", "JEP (Jersey Pound)"],
                                ["JMD", "JMD (Jamaican Dollar)"],
                                ["JOD", "JOD (Jordanian Dinar)"],
                                ["JPY", "JPY (Japanese Yen)"],
                                ["KES", "KES (Kenyan Shilling)"],
                                ["KGS", "KGS (Kyrgystani Som)"],
                                ["KHR", "KHR (Cambodian Riel)"],
                                ["KMF", "KMF (Comorian Franc)"],
                                ["KPW", "KPW (North Korean Won)"],
                                ["KRW", "KRW (South Korean Won)"],
                                ["KWD", "KWD (Kuwaiti Dinar)"],
                                ["KYD", "KYD (Cayman Islands Dollar)"],
                                ["KZT", "KZT (Kazakhstani Tenge)"],
                                ["LAK", "LAK (Laotian Kip)"],
                                ["LBP", "LBP (Lebanese Pound)"],
                                ["LKR", "LKR (Sri Lankan Rupee)"],
                                ["LRD", "LRD (Liberian Dollar)"],
                                ["LSL", "LSL (Lesotho Loti)"],
                                ["LYD", "LYD (Libyan Dinar)"],
                                ["MAD", "MAD (Moroccan Dirham)"],
                                ["MDL", "MDL (Moldovan Leu)"],
                                ["MGA", "MGA (Malagasy Ariary)"],
                                ["MKD", "MKD (Macedonian Denar)"],
                                ["MMK", "MMK (Myanma Kyat)"],
                                ["MNT", "MNT (Mongolian Tugrik)"],
                                ["MOP", "MOP (Macanese Pataca)"],
                                ["MRU", "MRU (Mauritanian Ouguiya)"],
                                ["MUR", "MUR (Mauritian Rupee)"],
                                ["MVR", "MVR (Maldivian Rufiyaa)"],
                                ["MWK", "MWK (Malawian Kwacha)"],
                                ["MXN", "MXN (Mexican Peso)"],
                                ["MYR", "MYR (Malaysian Ringgit)"],
                                ["MZN", "MZN (Mozambican Metical)"],
                                ["NAD", "NAD (Namibian Dollar)"],
                                ["NGN", "NGN (Nigerian Naira)"],
                                ["NOK", "NOK (Norwegian Krone)"],
                                ["NPR", "NPR (Nepalese Rupee)"],
                                ["NZD", "NZD (New Zealand Dollar)"],
                                ["OMR", "OMR (Omani Rial)"],
                                ["PAB", "PAB (Panamanian Balboa)"],
                                ["PEN", "PEN (Peruvian Nuevo Sol)"],
                                ["PGK", "PGK (Papua New Guinean Kina)"],
                                ["PHP", "PHP (Philippine Peso)"],
                                ["PKR", "PKR (Pakistani Rupee)"],
                                ["PLN", "PLN (Polish Zloty)"],
                                ["PYG", "PYG (Paraguayan Guarani)"],
                                ["QAR", "QAR (Qatari Rial)"],
                                ["RON", "RON (Romanian Leu)"],
                                ["RSD", "RSD (Serbian Dinar)"],
                                ["RUB", "RUB (Russian Ruble)"],
                                ["RWF", "RWF (Rwandan Franc)"],
                                ["SAR", "SAR (Saudi Riyal)"],
                                ["SCR", "SCR (Seychellois Rupee)"],
                                ["SDG", "SDG (Sudanese Pound)"],
                                ["SEK", "SEK (Swedish Krona)"],
                                ["SGD", "SGD (Singapore Dollar)"],
                                ["SHP", "SHP (Saint Helena Pound)"],
                                ["SLL", "SLL (Sierra Leonean Leone)"],
                                ["SOS", "SOS (Somali Shilling)"],
                                ["SRD", "SRD (Surinamese Dollar)"],
                                ["SHP", "SHP (South Sudanese Pound)"],
                                ["STN", "STN (S\u00e3o Tom\u00e9 And Pr\u00edncipe Dobra)"],
                                ["SVC", "SVC (Salvadoran Col\u00f3n)"],
                                ["SYP", "SYP (Syrian Pound)"],
                                ["SZL", "SZL (Swazi Lilangeni)"],
                                ["THB", "THB (Thai Baht)"],
                                ["TJS", "TJS (Tajikistani Somoni)"],
                                ["TMT", "TMT (Turkmenistani Manat)"],
                                ["TND", "TND (Tunisian Dinar)"],
                                ["TRY", "TRY (Turkish Lira)"],
                                ["TTD", "TTD (Trinidad And Tobago Dollar)"],
                                ["TWD", "TWD (New Taiwan Dollar)"],
                                ["TZS", "TZS (Tanzanian Shilling)"],
                                ["UAH", "UAH (Ukrainian Hryvnia)"],
                                ["UGX", "UGX (Ugandan Shilling)"],
                                ["USD", "USD (United States Dollar)"],
                                ["UYU", "UYU (Uruguayan Peso)"],
                                ["UZS", "UZS (Uzbekistan Som)"],
                                ["VEF", "VEF (Venezuelan Bol\u00edvar Fuerte)"],
                                ["VES", "VES (Venezuelan Bol\u00edvar Soberano)"],
                                ["VND", "VND (Vietnamese Dong)"],
                                ["VUV", "VUV (Vanuatu Vatu)"],
                                ["WST", "WST (Samoan Tala)"],
                                ["XAF", "XAF (Cfa Franc Beac)"],
                                ["XAG", "XAG (Silver Ounce)"],
                                ["XAU", "XAU (Gold Ounce)"],
                                ["XCD", "XCD (East Caribbean Dollar)"],
                                ["XDR", "XDR (Special Drawing Rights)"],
                                ["XOF", "XOF (Cfa Franc Bceao)"],
                                ["XPD", "XPD (Palladium Ounce)"],
                                ["XPF", "XPF (Cfp Franc)"],
                                ["XPT", "XPT (Platinum Ounce)"],
                                ["YER", "YER (Yemeni Rial)"],
                                ["ZAR", "ZAR (South African Rand)"],
                                ["ZMW", "ZMW (Zambian Kwacha)"],
                                ["ZWL", "ZWL (Zimbabwean Dollar)"],
                                ["BTC", "BTC"],
                                ["mBTC", "mBTC (0.001 BTC)"],
                                ["Sat", "Satoshi (0.00000001 BTC)"],
                                ["HBD", "HBD"],
                                ["HIVE", "HIVE"],
                            ],
                            function (b) {
                                return a.GD(b, !0);
                            },
                            !0
                            ),
                ]),
                Ft.Fj("td", [
                    "Decimal Places",
                    e(
                            "selectDecimalPlaces",
                            KI,
                            [
                                [1, "1"],
                                [2, "2"],
                                [3, "3"],
                                [4, "4"],
                                [5, "5"],
                            ],
                            function (a) {
                                D.A.Ax();
                                D.A.refresh();
                                D.R.refresh();
                                $(".recentPost").remove();
                                D.P.LV(!0);
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Show Names With Reputation",
                    e(
                            "selectReputationInName",
                            JP,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (a) {
                                1 == a
                                        ? ($(".uRep").show(),
                                                $(".uName").each(function () {
                                            var a = $(this);
                                            if (!a.find(".uRep").length) {
                                                var b = a.data("name"),
                                                        c = D.L.Qj(b);
                                                !1 !== c ? D.L.JT(a, b, c) : D.L.gq(b);
                                            }
                                        }))
                                        : $(".uRep").hide();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Show Account Info On Hover",
                    e("selectAccountTooltips", Jc, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    "Show Amounts For Outgoing Votes",
                    e(
                            "selectAmountsOutgoingVotes",
                            MB,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (a) {
                                return D.D.filter();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Maximize Multiple Operations",
                    e(
                            "selectMaximizeMultipleOperations",
                            gW,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (a) {
                                $(".opItem").each(function () {
                                    var b = g8($(this));
                                    b && (b.ZL = a);
                                });
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Page Scroll Over Lists",
                    e(
                            "selectPageScrollOverLists",
                            F3,
                            [
                                ["allow", "Allow"],
                                ["prevent", "Prevent"],
                            ],
                            function (a) {
                                D.V.LQ = "prevent" == a;
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Account Info On Hover Delay",
                    d(
                            "selectAccountTooltipsDelay",
                            D5,
                            [
                                ["250", "250 ms"],
                                ["500", "500 ms"],
                                ["1000", "1000 ms"],
                                ["1250", "1250 ms"],
                                ["1500", "1500 ms"],
                                ["2000", "2000 ms"],
                                ["2500", "2500 ms"],
                                ["3000", "3000 ms"],
                            ],
                            function (a) {
                                return D.i.AI();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Visible Operations Limit",
                    d(
                            "selectVisibleOperations",
                            BU,
                            [
                                ["25", "25"],
                                ["50", "50"],
                                ["100", "100"],
                                ["250", "250"],
                                ["500", "500"],
                                ["1000", "1000"],
                            ],
                            function (a) {
                                D.D.J1 = parseInt(a);
                                D.D.filter();
                            }
                    ),
                ]),
            ])
            );
    h = f("btnCreateTheme", "Create Theme...", b4.eF).button("disable");
    f = f("btnEditTheme", "Edit Theme...", b4.eG).button("disable");
    b.append(
            Ft.be("dataTable withMarginBottom", "", [
                Ft.Fj("td", [
                    "Theme",
                    d(
                            "selectTheme",
                            IF,
                            [
                                ["default", "Default"],
                                ["dark", "Dark"],
                            ],
                            function (b) {
                                a.IG(b, !0, function () {
                                    D.A.II();
                                    D.c.eW();
                                    setTimeout(D.A.Ax, 2e3);
                                });
                            }
                    ),
                    {attr: {rowspan: "6"}, html: [h, f]},
                ]),
                Ft.Fj("td", [
                    "Colorize Operation Titles",
                    e(
                            "selectColorizeOperationTitles",
                            P7,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (b) {
                                return a.KE();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Show Animations",
                    e("selectShowAnimations", KH, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    "Show Row Gradients",
                    e(
                            "selectShowRowGradients",
                            KF,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (b) {
                                return a.KE();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Show Title Gradients",
                    e(
                            "selectShowTitleGradients",
                            KG,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (b) {
                                return a.KE();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Show Box Shadows",
                    e(
                            "selectShowBoxShadows",
                            KD,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (b) {
                                return a.KE();
                            }
                    ),
                ]),
            ])
            );
    d = aH.kF() ? "https://addons.mozilla.org/en-US/firefox/addon/steem-keychain" : "https://chrome.google.com/webstore/detail/steem-keychain/lkcjlnjfpbikmcmbachjpdbijejflpcm?hl=en";
    g.append(
            Ft.be("dataTable withMarginBottom", "", [
                Ft.Fj("td", [
                    'Use <a href="' + d + '" target="_blank">Hive KeyChain</a> For Signing',
                    e("selectUseKeyChain", Oy, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    'Use <a href="https://steemlogin.com" target="_blank">HiveLogin</a> For Signing',
                    e("selectUseSteemConnect", Ni, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    "Cache Posting &amp; Memo Keys",
                    e(
                            "selectCacheLowerKeys",
                            Tl,
                            [
                                [1, "Yes"],
                                [0, "No"],
                            ],
                            function (a) {
                                parseInt(a) || D.t.Tk();
                            }
                    ),
                ]),
                Ft.Fj("td", [
                    "Authentication In New Tab",
                    e("selectAuthInNewTab", i4, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    "Show Images From Insecure Sources",
                    e("selectShowInsecureImages", Kq, [
                        [1, "Yes"],
                        [0, "No"],
                    ]),
                ]),
                Ft.Fj("td", [
                    {attr: {style: "vertical-align: top; padding-top: 8px"}, html: "Ignored Accounts"},
                    Ft.GB("textarea", {id: "editIgnoredAccounts", spellcheck: "false", "data-key": TO}).css({width: "75%", height: "153px", overflow: "scroll"}),
                ]),
            ])
            );
};
b4.AI = function () {
    b4.init();
    var a = D.G,
            b = $("#editIgnoredAccounts");
    b.val(a.get(TO))
            .on("change paste", function () {
                a.set(TO, b.val(), !0);
                a.TP(b.val());
            })
            .trigger("change");
};
b4.hf = function () {
    for (var a = [], b = 0; b < D.d.items.length; b++) {
        var c = D.d.items[b];
        a.push({value: c.url, text: c.url + (c.by ? " (" + c.by + ")" : "")});
    }
    a.push({value: "custom", text: "Add custom node..."});
    return a;
};
b4.he = function () {
    g8("#selectSteemNode").g4(b4.hf());
};
b4.eC = function () {
    var a = D.G.FG();
    D4.EA('<textarea id="settingsLink" class="mediumText">' + a + "</textarea>", "Settings Link", {
        customButtons: [
            {
                id: "btnDialogLeft1",
                text: "Copy To Clipboard",
                click: function (a) {
                    $("#settingsLink").select();
                    document.execCommand("copy");
                    D4.D9("Link copied to clipboard!");
                },
            },
            {id: "btnDialogLeft2", text: "Create Bookmark", click: function (a) {}, disabled: !0},
        ],
    });
};
b4.eD = function () {
    D.G.Hz();
};
b4.eE = function () {
    D.G.Hy();
};
b4.mE = function () {
    var a = $(ak.AN(D.S.jp, "mediumText"));
    a.find("td").each(function () {
        var a = $(this).parents("tr");
        a.parents("td").length || ((a = a.find("td:first")), a.text(a.text().toUpperCase().replace(/ /g, "_")));
    });
    D4.EA(a, "Current Node Configuration", {width: aH.eA(0.9), height: D.s.ce()});
};
b4.eF = function () {
    D.s.d8();
};
b4.eG = function () {
    D.s.d9();
};
var cR = "account_name",
        l1 = function () {};
l1.dN = function (a, b, c, d) {
    a.bf(bi);
    a.eZ("KeyInput", "Authentication Required").am();
    a.ar(c + "Authentication Required");
    a.bF(function () {
        if (window.i5) {
            var a = window.i5;
            window.i5 = null;
            a.jO !== D.s.jN() ? D4.D9("Invalid origin!") : D4.DM(a.options, a.onDone, a.onCancel);
        }
    });
    a.bG();
};
l1.bU = function (a, b, c, d, e, f) {
    a && (D.l = "");
    var g = b.replace(/ /g, "_").toLowerCase(),
            h = a ? D.t.bS() : [];
    h = [
        {
            bW: "text",
            bX: cR,
            bY: D.l,
            bZ: h,
            ba: "[ Hive Account Name ]",
            isDisabled: !a,
            eI: function (a, b) {
                b = b.val().trim().toLowerCase();
                var c = a.find("input[name='" + g + "']");
                D.t.CW(
                        b,
                        F2,
                        function (a) {
                            return c.val(a);
                        },
                        function () {
                            return c.val("");
                        }
                );
            },
        },
        {bW: "password", bX: g, ba: "[ Private " + T7.DR(b) + " ]", isMainInput: !0},
    ];
    c = a ? {id: "btnUseKeyChain", text: "Hive KeyChain", value: cN, disable: c} : {id: "btnUseSteemConnect", text: "HiveLogin", value: cO, disable: d};
    a = {
        id: a ? "dialogSignIn" : "dialogEnterKey",
        title: a ? "Sign In" : "Authentication Required",
        width: "400px",
        inputs: h,
        fixed: !0,
        newTab: !as.cQ(b),
        autoFillButton: c,
        bc: cR,
        bd: "Please fill in the name of your Hive account!",
    };
    if (a.newTab && D.G.get(i4)) {
        var k = D.s.DQ(FE + "/" + i3, !0);
        k.i5 = {
            options: a,
            jO: D.s.jN(),
            onDone: function (a, b, c) {
                D4.D9("Signing transaction...");
                k.close();
                e && e(a, b, c);
            },
            onCancel: function () {
                D4.D9("Authentication cancelled.");
                k.close();
                f && f();
            },
        };
    } else
        D4.DM(a, e, f);
};
l1.DL = function (a, b, c, d, e) {
    var f = !D.l,
            g = as.cQ(a),
            h = function (b, h, k) {
                c || b != cO
                        ? D.t.bb(b, a, f)
                        ? g && k
                        ? D.t.CX(h, a, b, function () {
                            return d(b, h);
                        })
                        : d(b, h)
                        : a == K8 || a == F2
                        ? m()
                        : e && e()
                        : d(cO, D.l);
            },
            k = function (a, b) {
                var c = function () {
                    D4.D9("The account '" + a + "' could not be found!");
                    m();
                };
                D.S.aY(
                        a,
                        function (d) {
                            D.p.M3(
                                    d,
                                    function () {
                                        return h(b, a, !0);
                                    },
                                    c
                                    );
                        },
                        c
                        );
            },
            l = function (a, b) {
                f ? ((b = b[cR].toLowerCase()), a == cN ? d(a, b) : k(b, a)) : h(a, D.l, !0);
            };
    var m = function () {
        l1.bU(f, a, b, c, l, e);
    };
    var n = function () {
        c || 1 != D.G.get(Ni)
                ? !f && g
                ? D.t.CW(
                        D.l,
                        a,
                        function (a) {
                            return h(a, D.l, !1);
                        },
                        m
                        )
                : m()
                : d(cO, D.l);
    },
            p = function () {
                a == F1
                        ? D4.EB(
                                "Use KeyChain?",
                                "Do you want to use KeyChain for signing the transaction?",
                                function () {
                                    return d(a, D.l);
                                },
                                n
                                )
                        : d(a, D.l);
            };
    f || b ? n() : D.S.Oz(p, n);
};
var lk = function (a, b, c) {
    this.ll = a;
    this.lm = b;
    this.lv = c;
    this.fN = Ft.R4("divAuthorityRole");
    this.AI();
};
lk.prototype.an = function () {
    return this.fN;
};
lk.prototype.lo = function (a, b) {
    var c = Ft.R4("divAuthKey");
    a = Ft.dc("text", "inputAuthKey").val(a);
    b = Ft.dc("number", "inputAuthWeight").val(b);
    b = Ft.be("dataTable").append(
            Ft.Fj("td", [
                "Public Key",
                a,
                {
                    html: Ft.kc("", "", L8("res/img/remove.png"), "Remove key", function () {
                        return c.remove();
                    }),
                    attr: {rowspan: 2},
                },
            ]),
            Ft.Fj("td", ["Weight", b])
            );
    return c.append(b);
};
lk.prototype.lp = function (a, b) {
    var c = Ft.R4("divAuthAccount"),
            d = Ft.dc("text", "inputAuthAccount")
            .val(a)
            .attr("placeholder", "[ Hive Account Name ]")
            .on("change", function () {
                return d.val(d.val().trim().replace("@", "").toLowerCase());
            });
    a = Ft.dc("number", "inputAuthWeight").val(b);
    a = Ft.be("dataTable").append(
            Ft.Fj("td", [
                "Account",
                d,
                {
                    html: Ft.kc("", "", L8("res/img/remove.png"), "Remove account", function () {
                        return c.remove();
                    }),
                    attr: {rowspan: 2},
                },
            ]),
            Ft.Fj("td", ["Weight", a])
            );
    return c.append(a);
};
lk.prototype.l2 = function (a, b) {
    for (var c = a.weight_threshold, d = !0, e = 0; e < a.key_auths.length; e++)
        a.key_auths[e][1] >= c && (d = !1);
    for (e = 0; e < a.account_auths.length; e++)
        a.account_auths[e][1] >= c && (d = !1);
    d
            ? D4.EB(
                    "Confirm Role Settings",
                    "\n As no single Authority's weight reaches the Weight Threshold,\n this Role will only be usable with Multisig (multiple signatures)\n and it won't be possible to use it for signing in to Hive platforms.\n <br><br>Do you want to continue?\n ",
                    b
                    )
            : b();
};
lk.prototype.lr = function (a) {
    var b = [],
            c = a.weight_threshold;
    (!c || 1 > c) && b.push("- Weight Threshold must be >= 1");
    for (var d = [], e = 0, f = 0; f < a.key_auths.length; f++) {
        var g = a.key_auths[f],
                h = g[0];
        g = g[1];
        var k = "- Key " + (f + 1) + ": ";
        D.S.MN(h) ? (d.includes(h) ? b.push(k + "Duplicate entry") : d.push(h)) : b.push(k + "Invalid Public Key");
        !g || 1 > g ? b.push(k + "Weight must be >= 1") : g > c && b.push(k + "Weight must be <= Weight Threshold");
        e += g;
    }
    d = [];
    for (h = f = 0; h < a.account_auths.length; h++) {
        k = a.account_auths[h];
        g = k[0];
        k = k[1];
        var l = "- Account " + (h + 1) + ": ";
        g ? (d.includes(g) ? b.push(l + "Duplicate entry") : d.push(g)) : b.push(l + "Invalid Account Name");
        !k || 1 > k ? b.push(l + "Weight must be >= 1") : k > c && b.push(l + "Weight must be <= Weight Threshold");
        f += k;
    }
    e < c && f < c && b.push("- It would be impossible to sign a transaction, because the Total Weight is < Weight Threshold");
    b.length && D4.EA(b.join("<br>"), "Invalid " + T7.DR(this.ll) + " Role Settings", {paddingX: 15});
    return !b.length;
};
lk.prototype.lq = function () {
    var a = this,
            b = this.ll;
    if ("posting" == b) {
        var c = "ls";
        var d = F1;
    } else
        "active" == b ? ((c = "lt"), (d = F1)) : "owner" == b && ((c = "lu"), (d = Oo));
    var e = {};
    e.weight_threshold = parseInt(this.ln.val());
    e.account_auths = [];
    e.key_auths = [];
    b = this.fN;
    b.find(".divAuthAccount").each(function () {
        var a = $(this),
                b = a.find(".inputAuthAccount").val().trim();
        a = parseInt(a.find(".inputAuthWeight").val().trim());
        e.account_auths.push([b, a]);
    });
    b.find(".divAuthKey").each(function () {
        var a = $(this),
                b = a.find(".inputAuthKey").val().trim();
        a = parseInt(a.find(".inputAuthWeight").val().trim());
        e.key_auths.push([b, a]);
    });
    this.l2(e, function () {
        if (a.lr(e)) {
            var b = function (a) {
                a && D4.D9("Done!");
            };
            D.t.DL(d, !1, !1, function (d) {
                D.S[c](d, D.l, e, a.lv, b);
            });
        }
    });
};
lk.prototype.AI = function () {
    var a = this,
            b = this.fN,
            c = this.lm,
            d = c.weight_threshold;
    this.ln = Ft.dc("number").val(d);
    for (
            var e = Ft.R4(),
            f = Ft.R7("btnAddAuthorityRoleKey", "", "Add Public Key...", "", function () {
                var b = a.lo("", d);
                f.detach();
                e.append(b, f);
                b.find(".inputAuthKey").select();
            }),
            g = 0;
            g < c.key_auths.length;
            g++
            ) {
        var h = c.key_auths[g];
        e.append(this.lo(h[0], h[1]));
    }
    e.append(f);
    var k = Ft.R4(),
            l = Ft.R7("btnAddAuthorityRoleAccount", "", "Add Account...", "", function () {
                var b = a.lp("", d);
                l.detach();
                k.append(b, l);
                b.find(".inputAuthAccount").select();
            });
    for (g = 0; g < c.account_auths.length; g++)
        (h = c.account_auths[g]), k.append(this.lp(h[0], h[1]));
    k.append(l);
    c = Ft.be("dataTable simple").append(Ft.Fj("td", ["Weight Threshold", this.ln]), Ft.Fj("td", ["Key Auths", e]), Ft.Fj("td", ["Account Auths", k]));
    g = Ft.R7("btnSaveAuthorityRole", "", "Save Changes", "", function () {
        return a.lq();
    });
    "owner" == this.ll && g.button("disable");
    b.append(c, "<hr>", g);
};
var lB = function (a) {
    this.AI(a);
};
lB.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("AccountAuthorities", "Hive Account Authorities").am();
    var e = new lB(b);
    a.ar(c + "Hive Account Authorities");
    a.bF(function () {
        var a = function () {
            e.lC();
        };
        Py([[D.C, "AF"]], function () {
            return d(a);
        });
    });
    a.bG();
};
lB.prototype.AI = function (a) {
    Ft.mB(
            a,
            "\n .divAuthorityRole .dataTable tr td:nth-child(1) {\n width: 20%;\n vertical-align: top;\n padding-top: 10px;\n }\n .divAuthorityRole .dataTable tr td:nth-child(2) {\n width: 80%\n }\n .divAuthKey .dataTable tr td:nth-child(1),\n .divAuthAccount .dataTable tr td:nth-child(1) {\n width: 15%;\n }\n .divAuthKey .dataTable tr td:nth-child(2),\n .divAuthAccount .dataTable tr td:nth-child(2) {\n width: 85%;\n }\n .divAuthKey,\n .divAuthAccount {\n margin-bottom: 5px;\n }\n .btnAddAuthorityRoleKey,\n .btnAddAuthorityRoleAccount,\n .btnSaveAuthorityRole {\n width: 190px;\n margin: 5px 0;\n }\n "
            );
    a.append(
            '\n <div class="textBox textBoxPanel lineHeightText">\n Here you can manage the Account Authorities of your Hive account.\n The Hive blockchain offers three different Authority Roles\n (Posting, Active and Owner), which each can be individually configured\n as desired. Authorities can be based on Public Keys (Key Auths) and\n Hive account names (Account Auths).\n <br><br>\n Depending on the type of operation that an account wants to broadcast\n to the blockchain, the required Authority Role (permission level) changes.\n For example, for creating or voting a post the Posting Role will be used.\n For transferring funds from one account to another the Active Role will be used.\n For administrative account operations the Owner Role will be used.\n <br><br>\n The so called \'Weight Threshold\' of each Authority Role defines how much\n total weight is required to successfully sign and broadcast (complete) a\n related transaction. Each authorized Public Key / Hive account must be\n assigned a weight, which specifies how much influence that key / account\n has on making use of the related Authority Role.\n <hr>\n <a href="https://steemit.com/steem/@steemchiller/steem-help-account-authorities" target="_blank">\n Click here to learn more about Account Authorities...\n </a>\n </div>\n '
            );
};
lB.prototype.lD = function (a) {
    var b = T7.DR(a),
            c = Ft.R4("textBox");
    a = D.t.bH(!1) ? new lk(a, D.p.aR[a], D.p.aR.memo_key).an() : "Please sign in...";
    D.s.aq(!1, "AccountAuthorities" + b, b + " Authorities", c.append(a), !0);
};
lB.prototype.lC = function () {
    this.lD("posting");
    this.lD("active");
    this.lD("owner");
};
var PP = "HiveTasks Public Keys Export";
D.f = {
    cT: function (a, b) {
        $("#createNewAccountNameStatus")
                .text(a)
                .removeClass(b ? "numPositive" : "numNegative")
                .addClass(b ? "numNegative" : "numPositive");
    },
    FQ: function (a) {
        D4.QW("Load Public Keys From File", function (b) {
            var c = new FileReader();
            c.onload = function (b) {
                var c = "";
                if ("account_creator" == a) {
                    var d = $("#createNewAccountPublicKeys");
                    var g = $("#createNewAccountName").val();
                } else
                    "change_masterkey" == a && ((d = $("#toolChangeMasterKeyPublicKeys")), (g = D.l));
                try {
                    c = T7.DU(b.target.result);
                } catch (k) {
                    console.log(k);
                }
                if (c && c.account && c.keys && c.id == PP) {
                    if (c.account != g)
                        if ("account_creator" == a)
                            $("#createNewAccountName").val(c.account), D4.D9("The name for the new account has been updated!");
                        else if ("change_masterkey" == a) {
                            D4.D9("The account name in the file does not match the name of your account!");
                            $("#selectFileDialog").remove();
                            return;
                        }
                    for (var h in c.keys)
                        d.find("input[data-role='" + h + "']").val(c.keys[h]);
                    $("#selectFileDialog").remove();
                } else
                    D4.D9("The selected file is incompatible!");
            };
            c.readAsText(b);
        });
    },
    Oc: function (a, b) {
        if (a) {
            var c = NV.validateAccountName(a);
            c
                    ? D.f.cT("[ ! ] " + c, !0)
                    : (D.f.cT("Checking account name...", !1),
                            D.S.aY(
                                    a,
                                    function () {
                                        return D.f.cT("[ ! ] Account already exists.", !0);
                                    },
                                    function () {
                                        D.f.cT("[ OK ]", !1);
                                        void 0 !== b && b();
                                    }
                            ));
        } else
            D.f.cT("", !1);
    },
    Od: function (a, b) {
        var c = function (a, c, d, h) {
            var e = "";
            if ("master_key" == c) {
                e = d.val().trim();
                if (!e || 52 != e.length || !e.startsWith("P5")) {
                    D4.D9("Please enter a valid Master Password!");
                    return;
                }
                d = D.S.OT(a, e, ["owner", "active", "posting", "memo"]);
            } else
                d = {
                    ownerPubkey: h.find("input[data-role='owner']").val(),
                    activePubkey: h.find("input[data-role='active']").val(),
                    postingPubkey: h.find("input[data-role='posting']").val(),
                    memoPubkey: h.find("input[data-role='memo']").val(),
                };
            for (var f in d)
                if (f.endsWith("Pubkey") && !D.S.MN(d[f])) {
                    D4.D9("Please define all Public Keys! (" + f + " is invalid)");
                    return;
                }
            b(c, a, e, d);
        };
        if ("account_creator" == a) {
            var d = $("#createNewAccountName").val().toLowerCase().trim();
            D.f.Oc(d, function () {
                MG() || D.p.OM ? c(d, g8("#createNewAccountKeyMethod").bt(), $("#createNewAccountMasterKey"), $("#createNewAccountPublicKeys")) : D4.D9("You need a pending claimed account to continue!");
            });
        } else
            c(D.l, g8("#toolChangeMasterKeyKeyMethod").bt(), $("#toolChangeMasterKeyNewKey"), $("#toolChangeMasterKeyPublicKeys"));
    },
};
var fl = function (a) {
    this.AI(a);
};
fl.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("AccountCreator", "Hive Account Creator").am();
    new fl(b);
    a.ar(c + "Hive Account Creator");
    a.bF(function () {
        fl.i9();
        Py(
                [
                    [D.C, "AF"],
                    [D.C, "NH"],
                    [D.S, "Nq"],
                    [D.S, "hz"],
                ],
                function () {
                    d(function () {});
                }
        );
    });
    a.bG();
};
fl.prototype.AI = function (a) {
    Ft.mB(a, "\n #createNewAccountMasterKey {\n width: 78%;\n }\n #createNewAccountName {\n width: 224px;\n }\n #claimNewAccount,\n #createNewAccount {\n margin-top: 3px;\n }\n ");
    var b = function (a, b, c) {
        aI.Qc(b) && (b = Ft.R4().append(b).html());
        return Ft.Fj("td", [a, b], c);
    },
            c = function (a, b) {
                return Ft.Fj("td", [{html: a, attr: {colspan: "2"}}], b);
            },
            d = function (a, b) {
                return c([Ft.eQ(a, {class: "bigText headerText"}), "<hr>", Ft.R4("toolInfoBox", "", b), "<hr>"]);
            },
            e = Ft.mJ("", "claimNewAccountPaymentMethod", [
                {value: "rc", text: "RC (Resource Credits)"},
                {value: "steem", text: "3 HIVE"},
            ]).css("width", "223px"),
            f = Ft.R7("", "claimNewAccount", fv("ac_claim_account_btn"));
    e = Ft.be("dataTable fullWidth smallSize mbBig", "", [d(fv("ac_claim_account_title"), fv("ac_claim_account_text")), b(fv("payment_method"), e), c(f)]);
    f = Ft.eQ("0", {id: "claimedAccounts"});
    var g = Ft.GB("input", {id: "createNewAccountName", class: "inputAccountName", type: "text", maxlength: "16", "data-id-key": "#createNewAccountMasterKey"}),
            h = Ft.R7("importPublicKeysButton", "createNewAccountImportPublicKeys", fv("ac_import_keys_btn")),
            k = Ft.mJ("selectKeyGenerationMethod", "createNewAccountKeyMethod", [
                {value: "master_key", text: fv("ac_use_master_key_option")},
                {value: "public_keys", text: fv("ac_use_existing_keys_option")},
            ]).css("width", "223px"),
            l = Ft.GB("input", {id: "createNewAccountMasterKey", class: "inputMasterKey", type: "text", autocomplete: "off"}),
            m = Ft.R7("buttonGenerateMasterKey", "createNewAccountGenerateMasterKey", fv("ac_generate_key_btn")).attr("data-id-name", "#createNewAccountName").attr("data-id-key", "#createNewAccountMasterKey"),
            n = Ft.be("dataTable simple oneColor", "createNewAccountKeyPreview", [Ft.Fj("th", ["Type", "Private Key", "Public Key"], {class: "headerRow mediumText"})]),
            p = function (a) {
                return Ft.GB("input", {type: "text", "data-role": a}).css("width", "100%");
            };
    p = Ft.be("mediumText", "createNewAccountPublicKeys", [b("Owner", p("owner")), b("Active", p("active")), b("Posting", p("posting")), b("Memo", p("memo"))]).css("width", "100%");
    p.find("tr td:nth-child(1)").css("width", "15%");
    p.find("tr td:nth-child(2)").css("width", "85%");
    var q = Ft.R7("", "createNewAccount", fv("ac_create_account_btn"));
    b = Ft.be(
            "dataTable smallSize",
            "",
            [
                d(fv("ac_create_account_title"), fv("ac_create_account_text", [f])),
                b("Account Name", [g, T7.LJ(2), Ft.eU("mediumText", "createNewAccountNameStatus")]),
                b("Key Generation", [h, k]),
                b("Master Password", [l, T7.LJ(), m], {"data-key-method": "master_key"}),
                c(n, {"data-key-method": "master_key"}),
                b("Public Keys", [Ft.R4("warningText", "", fv("ac_use_existing_keys_warning")), "<hr>", p], {"data-key-method": "public_keys"}),
                c(q),
            ],
            {"data-source": "account_creator"}
    );
    a.append(e, b);
    this.f2(a);
};
fl.prototype.f2 = function (a) {
    var b = this;
    a.find("#createNewAccountKeyPreview").hide();
    a.find("#createNewAccountName").on("change", function () {
        var a = $(this).val().toLowerCase().trim();
        D.f.Oc(a);
    });
    a.find("#claimNewAccount")
            .button()
            .on("click", function () {
                return b.My();
            });
    a.find("#createNewAccount")
            .button()
            .on("click", function () {
                return b.Mz();
            });
    gt.gy(a.find("#claimNewAccountPaymentMethod"), {width: "224px"});
    fl.gd(a);
};
fl.i9 = function () {
    $("#claimedAccounts").text(D.p.OM);
};
fl.prototype.My = function (a) {
    var b = this;
    if (D.t.bH(!0)) {
        a = T5(a, !0);
        var c = g8("#claimNewAccountPaymentMethod").bt(),
                d = "steem" == c ? D.V.Mp : "0.000 HIVE",
                e = function (a, b) {
                    a && (D4.D9((b ? b + " Accounts" : "Account") + " claimed!"), D.C.Fs());
                };
        if (a && "rc" == c) {
            var f = D.S.My(kU, D.l, d),
                    g = D.p.iG();
            a = D.p.iH();
            var h = D.S.h6([f]).iT,
                    k = Math.floor(a / h);
            g = Math.floor(g / h);
            if (!k) {
                c = "You currently have " + Bl(a) + " RC available, but you need " + Bl(h) + " RC to claim an account.";
                g > k && (c += "<br><br>You can claim up to " + g + " accounts when your RC Status reaches 100%.");
                D4.EA(c, "Insufficient Resource Credits", {width: 470, height: 240, paddingX: 15, paddingY: 15});
                return;
            }
            if (1 < k) {
                var l = function () {
                    D4.AX({title: "How many to claim?", bY: k}, function (a) {
                        isNaN(a) && (a = 0);
                        a = parseInt(a);
                        if (1 > a || a > k)
                            D4.D9("Please enter a number between 1 and " + k + "!"), l();
                        else {
                            for (var b = [], c = 0; c < a; c++)
                                b.push(f);
                            var d = function () {
                                return e(!0, a);
                            };
                            D.t.DL(F1, !1, !0, function (a) {
                                return D.S.iI(a, b, d);
                            });
                        }
                    });
                };
                D4.EB("Claim Multiple?", "You currently have " + Bl(a) + " RC available, therefore you can claim up to " + Bl(k) + " accounts with RC.<br><br>Do you want to claim multiple at once?", l, function () {
                    return b.My(!1);
                });
                return;
            }
        }
        var m = function (a) {
            return D.S.My(a, D.l, d, e);
        };
        a = function () {
            return D.t.DL(F1, !1, !1, m);
        };
        "steem" == c ? (D.p.Vt(VI) < AQ(d) ? D4.D9("You need " + d + " to claim a new account!") : D4.EB("Confirm Payment", "Do you really want to pay " + d + " to claim a new account?", a)) : a();
    }
};
fl.prototype.Mz = function () {
    D.t.bH(!0) &&
            ($("#createNewAccountName").val().toLowerCase().trim()
                    ? D.f.Od("account_creator", function (a, b, c, d) {
                        var e = function (a) {
                            a && (D4.D9("Account created!"), $("#createNewAccountName").val(""), D.C.Fs());
                        },
                                f = function (a) {
                                    D.S.Mz(a, D.l, b, d.ownerPubkey, d.activePubkey, d.postingPubkey, d.memoPubkey, e);
                                };
                        D4.EB("Confirm Account Creation", "master_key" == a ? "Did you write down the Master Password for the new account?" : "Do you really want to create the account with the defined Public Keys?", function () {
                            return D.t.DL(F1, !1, !1, f);
                        });
                    })
                    : D4.D9("Please enter a valid account name!"));
};
fl.OV = function (a) {
    if ("key_generator" == a) {
        var b = $("#keyGenResult");
        var c = $("#keyGenAccountName").val();
        var d = $("#keyGenMasterKey").val();
    } else
        "change_masterkey" == a
                ? ((b = $("#toolChangeMasterKeyPreview")), (c = D.l), (d = $("#toolChangeMasterKeyNewKey").val()))
                : "account_creator" == a && ((b = $("#createNewAccountKeyPreview")), (c = $("#createNewAccountName").val()), (d = $("#createNewAccountMasterKey").val()));
    c = c.toLowerCase().trim();
    d = d.trim();
    Ft.gT(b);
    if (c && d)
        for (b.show(), "key_generator" == a && $("#keyGenExportPublicKeys").button("enable"), a = ["owner", "active", "posting", "memo"], c = D.S.OT(c, d, a), d = 0; d < a.length; d++)
            b.append(
                    Ft.Fj("td", [
                        {attr: {class: "mediumText"}, html: T7.DR(a[d])},
                        {attr: {class: "smallText notBold"}, html: c[a[d]]},
                        {attr: {class: "smallText notBold"}, html: c[a[d] + "Pubkey"]},
                    ])
                    );
    else
        "key_generator" == a ? $("#keyGenExportPublicKeys").button("disable") : b.hide();
};
fl.gd = function (a) {
    a.find(".inputMasterKey").val("");
    a.find(".buttonGenerateMasterKey")
            .button()
            .on("click", function () {
                var a = $(this),
                        c = a.parents("table").data("source"),
                        d = $(a.data("id-name"));
                a = $(a.data("id-key"));
                if ("change_masterkey" == c)
                    d = D.l;
                else if (((d = d.val().toLowerCase().trim()), !d)) {
                    D4.D9("Please enter a valid account name!");
                    return;
                }
                a.val(D.S.OX(d));
                fl.OV(c);
            });
    a.find(".inputMasterKey").on("input change", function () {
        var a = $(this).parents("table").data("source");
        a && fl.OV(a);
    });
    a.find(".inputAccountName").on("input change", function () {
        var b = $(this),
                c = b.parents("table").data("source");
        "account_creator" == c && D.f.cT("", !1);
        a.find(b.data("id-key")).val("");
        fl.OV(c);
    });
    a.find(".importPublicKeysButton")
            .button()
            .on("click", function () {
                var a = $(this).parents("table").data("source");
                D.f.FQ(a);
            });
    a.find(".selectKeyGenerationMethod").each(function () {
        var b = $(this),
                c = b.parents("table"),
                d = c.data("source");
        gt.gy(b, {
            eI: function (b) {
                var e;
                "account_creator" == d ? (e = "#createNewAccountImportPublicKeys") : "change_masterkey" == d && (e = "#toolChangeMasterKeyImportPublicKeys");
                a.find(e)["master_key" == b ? "hide" : "show"]();
                c.find("tr").each(function () {
                    var a = $(this).data("key-method");
                    $(this)[a && a != b ? "hide" : "show"]();
                });
            },
        }).hA();
    });
};
var f3 = function (a) {
    this.AI(a);
};
f3.dN = function (a, b, c, d) {
    a.bf(bi);
    a.KV(50, "Loading Recovery Requests...");
    b = a.eZ("Recovery", "Hive Account Recovery").am();
    new f3(b);
    a.ar(c + "Hive Account Recovery");
    a.bF(function () {
        d(function () {
            f3.EP();
        });
    });
    a.bG();
};
f3.prototype.AI = function (a) {
    var b = this;
    Ft.mB(
            a,
            "\n #toolAccountRecoveryNewPublicOwnerKey,\n #toolAccountRecoveryIncomingRequestNewPublicOwnerKey,\n #toolAccountRecoveryIncomingRequestRecentPublicOwnerKey {\n width: 78%;\n }\n #toolAccountRecoveryAccountToRecover,\n #toolAccountRecoveryIncomingRequestAccountName {\n width: 224px;\n }\n "
            );
    a.append(
            '\n <table class="dataTable smallSize mbBig">\n <tr>\n <td colspan="2">\n <strong class="bigText headerText">Request Account Recovery</strong><hr>\n <div class="toolInfoBox">\n Here you (the Recovery Account) can initiate an Account Recovery Request for all accounts,\n in which your account was defined as Recovery Account.\n <br><br>\n In case you want your own account to be recovered, you need to contact the owner of your Recovery Account and send him your new Public\n Owner Key (which you can create with the <a class="runPage" href="https://steemworld.org/key-generator">Key Generator Tool</a>).\n <br><br>\n The account that should be recovered will receive the request as an incoming account operation and can start\n the recovery process within 24 hours by confirming the request in the \'Incoming Recovery Request\' section below.\n </div><hr>\n </td>\n </tr>\n <tr>\n <td>\n Account To Recover\n </td>\n <td>\n <input id="toolAccountRecoveryAccountToRecover" type="text" maxlength="16">\n </td>\n </tr>\n <tr>\n <td>\n New Public Owner Key\n </td>\n <td class="mediumText">\n <input id="toolAccountRecoveryNewPublicOwnerKey" type="text" maxlength="53">\n </td>\n </tr>\n <tr>\n <td colspan="2">\n <button id="toolAccountRecoveryExec">Request Recovery</button>\n </td>\n </tr>\n </table>\n <table id="toolAccountRecoveryIncomingRequest" class="dataTable smallSize">\n <tr class="headerRow">\n <td colspan="2">\n <strong class="bigText headerText">Incoming Recovery Request</strong><hr>\n <div class="toolInfoBox">\n After confirming an Account Recovery Request you need to change the Master Password\n of your account (can be done with the <a class="runPage" href="https://steemworld.org/change-password">Change Password Tool</a> on HiveTasks).\n <br><br>\n For security reasons you need to wait for one hour after the account recovery took\n place to be able to change your password.\n </div><hr>\n </td>\n </tr>\n <tr>\n <td>\n Account To Recover\n </td>\n <td>\n <input id="toolAccountRecoveryIncomingRequestAccountName" class="inputAccountName" type="text" maxlength="16">&nbsp;\n <button id="buttonIncomingRequestRefresh">Load Recovery Request</button>\n </td>\n </tr>\n <tr data-result="0">\n <td colspan="2"></td>\n </tr>\n <tr data-result="0">\n <td colspan="2" class="notBold">\n No active request found.\n </td>\n </tr>\n <tr data-result="1">\n <td>\n Expiration Time\n </td>\n <td id="toolAccountRecoveryIncomingRequestExpirationTime">\n </td>\n </tr>\n <tr data-result="1">\n <td>\n New Public Owner Key\n </td>\n <td class="mediumText">\n <input id="toolAccountRecoveryIncomingRequestNewPublicOwnerKey" type="text" maxlength="53" disabled>\n </td>\n </tr>\n <tr data-result="1">\n <td>\n Recent Public Owner Key\n </td>\n <td class="mediumText">\n <input id="toolAccountRecoveryIncomingRequestRecentPublicOwnerKey" type="text" maxlength="53">\n </td>\n </tr>\n <tr data-result="1">\n <td colspan="2">\n <button id="tabToolAccountRecoveryConfirmRequest">Recover Account</button>\n </td>\n </tr>\n </table>\n '
            );
    a.find(".runPage").on("click", function (a) {
        a.preventDefault();
        D.s.DQ($(this).attr("href"), !0);
    });
    a.find("#toolAccountRecoveryExec")
            .button()
            .on("click", function () {
                return b.Fz();
            });
    a.find("#tabToolAccountRecoveryConfirmRequest")
            .button()
            .on("click", function () {
                return b.Ci();
            });
    f3.jM()
            .button()
            .on("click", function () {
                return f3.EP();
            });
};
f3.prototype.Fz = function () {
    if (D.t.bH(!0)) {
        var a = $("#toolAccountRecoveryAccountToRecover").val().toLowerCase().trim(),
                b = $("#toolAccountRecoveryNewPublicOwnerKey").val();
        if (a)
            if (D.S.MN(b)) {
                var c = function () {
                    return D4.D9("Account recovery request started!");
                },
                        d = function (d) {
                            return D.S.Fz(d, D.l, a, b, c);
                        },
                        e = function () {
                            D4.EB("Confirm Account Recovery Request", "Do you really want to start an account recovery request for '" + a + "'?", function () {
                                return D.t.DL(F1, !1, !1, d);
                            });
                        };
                D.S.aY(a, function (b) {
                    b.recovery_account != D.l ? D4.EA(fv("request_account_recovery_hint", [b.recovery_account, a])) : e();
                });
            } else
                D4.D9("The new public owner key is invalid!");
        else
            D4.D9("Please enter the name of the account that you want to recover!");
    }
};
f3.prototype.Ci = function () {
    var a = f3.jL().val();
    if (a) {
        var b = $("#toolAccountRecoveryIncomingRequestNewPublicOwnerKey").val(),
                c = $("#toolAccountRecoveryIncomingRequestRecentPublicOwnerKey").val(),
                d = [];
        if (D.S.MN(b))
            if (D.S.MN(c)) {
                var e = D.l,
                        f = function (a) {
                            D.l = e;
                            a && (D4.D9("Account recovered!"), f3.EP());
                        },
                        g = function () {
                            D.S.Ci(d, a, b, c, f);
                        },
                        h = function (a) {
                            d.push(a);
                            g();
                        };
                D.l = a;
                D.t.DL(
                        P3,
                        !0,
                        !0,
                        function (a) {
                            d.push(a);
                            D.S.Nh(a) ? g() : D.t.DL(P2, !0, !0, h);
                        },
                        function () {
                            D.l = e;
                        }
                );
            } else
                D4.D9("The recent public owner key is invalid!");
        else
            D4.D9("The new public owner key is invalid!");
    }
};
f3.jL = function () {
    return $("#toolAccountRecoveryIncomingRequestAccountName");
};
f3.jM = function () {
    return $("#buttonIncomingRequestRefresh");
};
f3.Pw = function () {
    var a = function (a) {
        a && (D.C.Fs(), D4.D9("Recovery Account changed!"));
    };
    D4.AX({title: "New Recovery Account:"}, function (b) {
        D.t.DL(Oo, !0, !1, function (c) {
            return D.S.Pw(c, D.l, b, a);
        });
    });
};
f3.EP = function () {
    var a = $("#toolAccountRecoveryIncomingRequest"),
            b = f3.jL();
    a.find("tr[data-result='0']").hide();
    a.find("tr[data-result='1']").hide();
    if (!b.val())
        if (D.l)
            b.val(D.l);
        else
            return;
    D.S.Dw(b.val(), function (b) {
        b
                ? ($("#toolAccountRecoveryIncomingRequestExpirationTime").html(D.B.DE(moment.utc(b.expires).local(), !1, !1, !0)),
                        $("#toolAccountRecoveryIncomingRequestNewPublicOwnerKey").val(b.new_owner_authority.key_auths[0][0]),
                        a.find("tr[data-result='1']").show())
                : a.find("tr[data-result='0']").show();
    });
};
var f4 = function (a) {
    this.AI(a);
};
f4.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("ChangePassword", "Change Hive Master Password").am();
    new f4(b);
    a.ar(c + "Change Hive Master Password");
    a.bF(function () {
        d(function () {});
    });
    a.bG();
};
f4.prototype.AI = function (a) {
    var b = this;
    a.append(
            '\n <table class="dataTable smallSize" data-source="change_masterkey">\n <tr>\n <td colspan="3">\n <div class="toolInfoBox">\n Here you can change the Master Password of your Hive account. This will change all Private and\n Public Keys as well, so please make sure to store the new password in a safe place before proceeding.\n <br><br>\n In case you have recovered your account recently, you need to wait at least for one hour after the recovery process\n took place to be able to change your password with this tool.\n </div><hr>\n </td>\n </tr>\n <tr>\n <td>\n Key Generation\n </td>\n <td colspan="2">\n <button id="toolChangeMasterKeyImportPublicKeys" class="importPublicKeysButton">Import Keys...</button>\n <select id="toolChangeMasterKeyKeyMethod" class="selectKeyGenerationMethod" disabled>\n <option value="master_key">Create Master Password</option>\n <option value="public_keys">Use Existing Public Keys</option>\n </select>\n </td>\n </tr>\n <tr data-key-method="master_key">\n <td>\n New Master Password\n </td>\n <td>\n <input id="toolChangeMasterKeyNewKey"\n class="inputMasterKey mediumText"\n type="text"\n autocomplete="off">\n </td>\n <td>\n <button id="toolChangeMasterKeyGenerateKey"\n class="buttonGenerateMasterKey"\n data-id-key="#toolChangeMasterKeyNewKey">Generate&nbsp;Key</button>\n </td>\n </tr>\n <tr data-key-method="master_key"></tr>\n <tr data-key-method="master_key">\n <td colspan="3">\n <table id="toolChangeMasterKeyPreview" class="dataTable simple oneColor smallSize">\n <tr class="headerRow mediumText">\n <th>Type</th>\n <th>Private Key</th>\n <th>Public Key</th>\n </tr>\n </table>\n </td>\n </tr>\n <tr data-key-method="public_keys">\n <td>\n Public Keys\n </td>\n <td colspan="2">\n <table id="toolChangeMasterKeyPublicKeys" class="mediumText">\n <tr>\n <td>\n Owner\n </td>\n <td>\n <input type="text" data-role="owner">\n </td>\n </tr>\n <tr>\n <td>\n Active\n </td>\n <td>\n <input type="text" data-role="active">\n </td>\n </tr>\n <tr>\n <td>\n Posting\n </td>\n <td>\n <input type="text" data-role="posting">\n </td>\n </tr>\n <tr>\n <td>\n Memo\n </td>\n <td>\n <input type="text" data-role="memo">\n </td>\n </tr>\n </table>\n </td>\n </tr>\n <tr>\n <td colspan="3">\n <button id="toolChangeMasterKeyExec">Change Password</button>\n </td>\n </tr>\n </table>\n '
            );
    a.find("#toolChangeMasterKeyExec")
            .button()
            .on("click", function () {
                return b.MO();
            });
    fl.gd(a);
};
f4.prototype.MO = function () {
    D.t.bH(!0) &&
            D.f.Od("change_masterkey", function (a, b, c, d) {
                D.S.aY(b, function (c) {
                    if (c.name == b) {
                        var e = function (a) {
                            D.S.LL(a, D.l, D.S.FR(d.ownerPubkey), D.S.FR(d.activePubkey), D.S.FR(d.postingPubkey), d.memoPubkey, c.json_metadata, function (a) {
                                a && (D4.D9("Password changed!"), D.C.Fs());
                            });
                        };
                        D4.EB("Confirm Password Change", "master_key" == a ? "Did you write down the new Master Password for your account?" : "Do you really want to set the defined Public Keys for your account?", function () {
                            return D.t.DL(Oo, !0, !1, e);
                        });
                    }
                });
            });
};
var f5 = function (a) {
    this.AI(a);
};
f5.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("DelegationHistory", "Hive Delegation History").am();
    new f5(b);
    a.ar(c + "Hive Delegation History");
    a.bF(function () {
        Py([[D.C, "AF"]], function () {
            d(function () {});
        });
    });
    a.bG();
};
f5.prototype.AI = function (a) {
    var b = Ft.dc("text", "userFromDblClick"),
            c = Ft.dc("text", "userFromDblClick"),
            d = Ft.dc("text"),
            e = Ft.dc("text"),
            f = ie.ib([{html: d, grow: 1}, ie.ic("-", "auto", "7px 8px"), {html: e, grow: 1}]),
            g = new gt({
                items: [
                    {value: "deleg_day", text: "Date"},
                    {value: "deleg_vests", text: "Amount"},
                    {value: "delegator", text: "Delegator"},
                    {value: "delegatee", text: "Delegatee"},
                ],
            }),
            h = new gt({
                items: [
                    {value: "DESC", text: "Desc."},
                    {value: "ASC", text: "Asc."},
                ],
            }),
            k = ie.ib([{html: g.an(), grow: 2}, ie.ic("", "8px", "7px 0"), {html: h.an(), grow: 1}]),
            l = Ft.R7("", "delegationHistoryRefresh", "Search", "", function () {
                var a = d.val().trim(),
                        f = e.val().trim();
                f5.H4(b.val().trim(), c.val().trim(), a ? D.B.HN(a) : 0, f ? D.B.HN(f) : 0, g.bt(), h.bt(), 0);
            }).css("margin-top", "7px"),
            m = Ft.R4("textBox withMarginBottom qNoWrap", "delegationHistoryFilter"),
            n = Ft.be("dataTable autoWidth notBold", "delegationHistoryResult", Ft.Fj("th", ["Date", "Delegator", "Delegatee", "Amount HP", "MVests"], {class: "headerRow"})),
            p = {margin: "0 0 10px 0"};
    m.append(ie.ib([ie.id("Delegator", b, 1, 15), ie.id("Delegatee", c, 1, 0)], p), ie.ib([ie.id("Date Range", f, 1, 15), ie.id("Order By", k, 1, 0)], p), l);
    Ft.mB(
            a,
            "\n #delegationHistoryResult {\n width: 100% !important;\n }\n #delegationHistoryResult tr th:nth-child(4),\n #delegationHistoryResult tr td:nth-child(4),\n #delegationHistoryResult tr th:nth-child(5),\n #delegationHistoryResult tr td:nth-child(5) {\n text-align: right;\n }\n #delegationHistoryResult tr td:nth-child(1) {\n width: 160px !important;\n }\n #delegationHistoryResult tr td:nth-child(5) {\n width: 130px;\n }\n "
            );
    a.append(m, n);
    $([d, e]).each(function () {
        $(this).datepicker({dateFormat: D.B.IK(), changeMonth: !0, changeYear: !0});
    });
};
f5.H4 = function (a, b, c, d, e, f, g) {
    var h = $("#delegationHistoryResult"),
            k = $("#delegationHistoryRefresh");
    aH.NE(k, !1);
    D.Z.H4(a, b, c, d, e, f, g, function (l) {
        aH.NE(k, !0);
        h.find("#delegationHistoryShowMore, .exportTable").remove();
        0 == g && Ft.gT(h);
        for (var m, n, p, q, r = 0; r < l.length; r++)
            (m = l[r]), (p = m[0]), (q = m[1]), (n = AQ(m[2])), (m = moment.unix(Number(m[3]) + HM).local()), h.append(Ft.Fj("td", [D.B.DE(m, !1), ak.EU(p, !0), ak.EU(q, !0), Bl(D.o.AL(n, 3), 3), Bl((n / 1e6).toFixed(3), 3)]));
        l.length &&
                (h.append(
                        Ft.Fj(
                                "td",
                                [
                                    {html: '<button id="delegationHistoryShowMore">Show more...</button>', attr: {colspan: 1}},
                                    {html: '<button class="exportTable">Export to file...</button>', attr: {colspan: 4}},
                                ],
                                {class: "noExport"}
                        )
                        ),
                        (n = h.find("#delegationHistoryShowMore")),
                        n.button().on("click", function () {
                    aH.NE($(this), !1);
                    f5.H4(a, b, c, d, e, f, g + 250);
                }),
                        250 > l.length && aH.NE(n, !1),
                        h
                        .find(".exportTable")
                        .button()
                        .on("click", function () {
                            aH.KT("steemworld-export-delegations.csv", $(this).parents("table"));
                        }));
    });
};
var f6 = function (a) {
    this.AI(a);
};
f6.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("KeyGenerator", "Hive Key Generator").am();
    new f6(b);
    a.ar(c + "Hive Key Generator");
    a.bF(function () {
        d(function () {});
    });
    a.bG();
};
f6.prototype.AI = function (a) {
    var b = this;
    a.append(
            '\n <table class="dataTable smallSize mbBig" data-source="key_generator">\n <tr>\n <td colspan="3">\n <div class="toolInfoBox">\n Here you can create Master Passwords for new accounts and for Account Recovery Requests or\n see the (derived) Private and Public Keys for your current Master Password.\n <br><br>\n In case you want someone else to create your account without handing him your Master Password,\n you can generate one with this tool (do not forget to store it in a safe place!) and\n just export the derived Public Keys by clicking on the \'Export Public Keys\' button below.\n <br><br>\n The creator of your account can then import the exported file with the\n <a class="runPage" href="https://steemworld.org/account-creator">Account Creator Tool</a>\n and create your account without knowing any of your Private Keys.\n </div><hr>\n </td>\n </tr>\n <tr>\n <td>Account Name</td>\n <td>\n <input id="keyGenAccountName"\n class="inputAccountName userFromDblClick"\n type="text"\n maxlength="16"\n data-id-key="#keyGenMasterKey"\n data-source="key_generator">\n </td>\n <td></td>\n </tr>\n <tr>\n <td>Master Password</td>\n <td>\n <input id="keyGenMasterKey"\n class="inputMasterKey mediumText"\n type="text"\n autocomplete="off"\n data-source="key_generator">\n </td>\n <td>\n <button id="keyGenGenerateRandomKey"\n class="buttonGenerateMasterKey"\n data-source="key_generator"\n data-id-name="#keyGenAccountName"\n data-id-key="#keyGenMasterKey">Generate&nbsp;Random\n </button>\n </td>\n </tr>\n </table>\n <table id="keyGenResult" class="dataTable smallSize mbBig">\n <tr class="headerRow">\n <th>Type</th>\n <th>Private Key</th>\n <th>Public Key</th>\n </tr>\n </table>\n <button id="keyGenExportPublicKeys" class="mbBig">Export Public Keys...</button>\n '
            );
    a.find("#keyGenExportPublicKeys")
            .button()
            .button("disable")
            .on("click", function () {
                return b.FP();
            });
    a.find(".runPage").on("click", function (a) {
        a.preventDefault();
        D.s.DQ($(this).attr("href"), !0);
    });
    fl.gd(a);
};
f6.prototype.FP = function () {
    var a = T7.Fa(9),
            b = T7.Fa(13) + T7.Fa(10),
            c = ["owner", "active", "posting", "memo"],
            d = $("#keyGenAccountName").val().toLowerCase().trim(),
            e = $("#keyGenMasterKey").val().trim(),
            f = "SW-Public-Keys-" + d + ".json";
    if (d && e && (e = D.S.OT(d, e, c))) {
        d = "{" + T7.Fa(10) + a + '"id": "' + PP + '",' + b + a + '"account": "' + d + '",' + b + a + '"keys":' + b + a + "{" + b;
        for (var g, h = 0; h < c.length; h++) {
            g = e[c[h] + "Pubkey"];
            if (!g)
                return;
            d += a + a + ('"' + c[h] + '"').padEnd(10) + ': "' + g + '"' + (h < c.length - 1 ? "," : "") + b;
        }
        aH.IL(f, d + (a + "}" + b + "}"));
    }
};
var f7 = function (a) {
    this.AI(a);
};
f7.dN = function (a, b, c, d) {
    a.bf(bi);
    b = a.eZ("ManualVote", "Manual Vote").am();
    var e = new f7(b);
    a.ar(c + "Manual Vote");
    a.bF(function () {
        Py(
                [
                    [D.C, "AF"],
                    [D.C, "AE"],
                    [D.C, "Br"],
                ],
                function () {
                    d(function () {
                        return e.AG();
                    });
                }
        );
    });
    a.bG();
};
f7.prototype.AI = function (a) {
    var b = this;
    Ft.mB(a, "\n #manualVoteAuthor,\n #manualVoteType {\n width: 42%;\n }\n #manualVoteExecute {\n width: 17%;\n }\n #manualVoteSlider {\n width: 252px;\n }\n ");
    a.append(
            '\n <table class="dataTable smallSize">\n <tr>\n <td>Post Link</td>\n <td>\n <input type="text" id="manualVoteLink">\n </td>\n </tr>\n <tr>\n <td>Author</td>\n <td>\n <input type="text" id="manualVoteAuthor" class="inputAccountName">\n </td>\n </tr>\n <tr>\n <td>Type</td>\n <td>\n <select id="manualVoteType">\n <option value="1" selected>Upvote</option>\n <option value="-1">Downvote (Flag)</option>\n </select>\n </td>\n </tr>\n <tr>\n <td>Weight</td>\n <td>\n <span id="manualVoteSliderValue" class="voteSliderValue" data-slider="manualVoteSlider">\n $ 0.00\n </span>\n <div id="manualVoteSlider" class="voteSlider"></div>\n </td>\n </tr>\n <tr>\n <td></td>\n <td>\n <button id="manualVoteExecute">Vote</button>\n </td>\n </tr>\n </table>\n '
            );
    this.j3 = gt.gy(a.find("#manualVoteType"), {
        eI: function () {
            b.AG();
        },
    });
    this.hE = a
            .find("#manualVoteExecute")
            .button()
            .on("click", function () {
                if (D.t.bH(!0)) {
                    b.hB = g8("#manualVoteSlider .hSlider");
                    var a = b.hC.val(),
                            d = b.hD.val(),
                            e = parseInt(b.j3.bt()),
                            f = 100 * Math.ceil(b.hB.bt()) * e;
                    if (a && d) {
                        var g = function (a) {
                            aH.NE(b.hE, !0);
                            a &&
                                    (D4.D9("Done!"),
                                            b.hD.val(""),
                                            D.C.Fs(void 0, function () {
                                                return b.AG();
                                            }));
                        };
                        D.t.DL(F2, !1, !1, function (c) {
                            aH.NE(b.hE, !1);
                            D.S.FV(c, D.l, a, d, f, g);
                        });
                    } else
                        D4.D9(fv("fill_required_fields_hint"));
                }
            });
    this.hC = a.find("#manualVoteAuthor");
    this.hD = a.find("#manualVoteLink").on("input", function () {
        var a = b.hD.val(),
                d = a.indexOf("@");
        if (-1 < d && ((a = a.substring(d, a.length)), (d = a.indexOf("/")), -1 < d)) {
            var e = a.substring(0, d);
            a = a.substring(d + 1, a.length);
            b.hC.val(e.replace("@", ""));
            b.hD.val(a);
        }
    });
};
f7.prototype.AG = function () {
    D.p.Yw(20);
    var a = D.p.Vm("Upvote");
    D.U.AG(".voteSlider", a);
};
var f8 = function (a) {
    Ft.mB(
            a,
            "\n #transferSearchResult * {\n font-size: 14px;\n }\n #transferSearchResult tr td:nth-child(2),\n #transferSearchResult tr td:nth-child(3) {\n min-width: 185px;\n }\n #transferSearchResult tr th:nth-child(4),\n #transferSearchResult tr td:nth-child(4) {\n text-align: right;\n }\n #transferSearchResult tr td:nth-child(6) {\n width: 224px;\n padding-top: 5px;\n padding-bottom: 0;\n }\n #transferSearchResult tr td:nth-child(6) * {\n font-size: 12px;\n }\n .transferSearchMemo {\n height: 22px;\n display: inline-block;\n overflow: hidden;\n }\n "
            );
    this.AI(a);
};
f8.dN = function (a, b, c, d) {
    a.bf(bh);
    b = a.eZ("TransferSearch", "Hive Transfer Search").am();
    new f8(b);
    a.ar(c + "Hive Transfer Search");
    a.bF(function () {
        Py([[D.C, "AF"]], function () {
            d(function () {});
        });
    });
    a.bG();
};
