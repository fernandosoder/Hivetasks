var Oa = "use_keychain",
        NM = "use_hiveconnect",
        TM = "cache_lower_keys",
        iS = "auth_in_new_tab",
        KU = "show_insecure_images",
        Sz = "ignored_accounts",
        Qo = "post_editor_syntax_box_pos",
        RF = "post_editor_syntax_box_pos_x",
        RG = "post_editor_syntax_box_pos_y",
        RH = "post_editor_syntax_box_width",
        RI = "post_editor_syntax_box_height",
        Qn = "post_editor_spell_check",
        Qv = "post_editor_follow_focus",
        ba = function () {
            this.items = {};
            this.types = {
                bool: [],
                int: [],
                float: [],
                json: []
            }
        };
ba.prototype.AJ = function () {
    bZ.AJ()
};
ba.prototype.get = function (a, b) {
    if (void 0 !== b && b) {
        b = D.X.get(Gn + a, this.get(a, !1));
        a != EL || isNaN(b) || (b = EK[b].url, this.set(a, b, !0));
        var c = this.types;
        return c.bool.includes(a) ? 1 == b ? 1 : 0 : c.int.includes(a) ? parseInt(b) : c.float.includes(a) ? parseFloat(b) : c.json.includes(a) && Zo.Df(b) ? JSON.parse(b) : b
    }
    return this.items[a]
};
ba.prototype.set = function (a, b, c) {
    var d = this.types;
    d.bool.includes(a) ? b = 1 == b ? 1 : 0 : d.int.includes(a) ? b = parseInt(b) : d.float.includes(a) && (b = parseFloat(b));
    this.items[a] = b;
    void 0 !== c && c && (d.json.includes(a) && (b = JSON.stringify(b)), D.X.set(Gn + a, b))
};
ba.prototype.Fo = function () {
    this.set(aw, "");
    this.set(av, "[]");
    this.set(fK, "us");
    this.set(EL, "https://hive.blog");
    this.set(D8, 0);
    this.set(BT, 60);
    this.set(ni, 3600);
    this.set(nj, 14400);
    this.set(GU, D.d.items[0].url);
    this.set(mK, "https://sds.hivetasks.com");
    this.set(Gb, "all");
    this.set(Ht, "default");
    this.set(GR, "coincap");
    this.set(GC, "USD");
    this.set(GK, .35);
    this.set(F3, "allow");
    this.set(I2, 1);
    this.set(JF, 1);
    this.set(D7, 1250);
    this.set(Jt, 1);
    this.set(Ju, 1);
    this.set(Jr, 1);
    this.set(Jv, 1);
    this.set(Jw, 2);
    this.set(BV,
            100);
    this.set(KU, 0);
    this.set(Lp, 0);
    this.set(NY, "default");
    this.set(Nf, 5);
    this.set(Na, "[]");
    this.set(Oa, 1);
    this.set(NM, 0);
    this.set(TM, 1);
    this.set(iS, 0);
    this.set(O7, 0);
    this.set(Pj, 1);
    this.set(Sz, "");
    this.set(YX, 0);
    this.set(fy, 0);
    this.set(Qo, "bottom");
    this.set(RF, 0);
    this.set(RG, 0);
    this.set(RH, 0);
    this.set(RI, 0);
    this.set(Qn, 0);
    this.set(Qv, 1);
    this.set(nq, [nz])
};
ba.prototype.lp = function () {
    var a = this.types;
    a.bool = [I2, Jt, Ju, Jr, Jv, KU, Lp, Oa, NM, TM, iS, O7, Pj, Qn, Qv, fy];
    a.int = [D8, BT, ni, nj, JF, D7, Jw, BV, Nf, RF, RG, RH, RI];
    a.float = [GK, YX];
    a.json = [nq]
};
ba.prototype.load = function (a) {
    this.lp();
    this.Fo();
    var b = D.s.Tc,
            c = b.account;
    b = b.theme;
    c = c ? c : D.X.get(JN, "");
    b && D.s.dY.qf(b) && this.set(Ht, b, !0);
    D.X.set(JN, c);
    D.s.DK(c);
    D.s.jq() && (D.l = c);
    this.GD(this.get(GC, !0), !1);
    this.CJ(this.get(D8, !0), !1);
    c = [aw, av, fK, EL, GR, Ht, GU, mK, BT, ni, nj, F3, GK, Gb, I2, JF, D7, Jt, Ju, Jr, Jv, Jw, BV, KU, Lp, NY, Nf, Oa, NM, TM, iS, O7, Pj, Sz, YX, Qo, Qn, Qv, RF, RG, RH, RI, fy, nq];
    for (b = 0; b < c.length; b++)
        this.set(c[b], this.get(c[b], !0));
    this.J4(a)
};
ba.prototype.ns = function (a) {
    var b = nr[a];
    return b.parent && !this.ns(b.parent) ? !1 : !this.get(nq).includes(a)
};
ba.prototype.nv = function (a, b) {
    var c = this.get(nq),
            d = c.indexOf(a);
    b && -1 < d ? c.splice(d, 1) : b || -1 !== d || c.push(a);
    this.set(nq, c, !0);
    bZ.nw(a, b)
};
ba.prototype.CJ = function (a, b) {
    this.set(D8, a, b);
    D.V.E6 = Zm.Dd(a, 0);
    D.V.E5 = Zm.Dd(a, 1);
    D.V.Fe = Zm.Dd(a, -1);
    $(".hasDatepicker").datepicker("option", "dateFormat", D.B.Hy());
    b && (D.D && (D.D.Am(), D.D.filter()), D.R && D.R.su())
};
ba.prototype.Jo = function (a) {
    for (var b = 0; b < EK.length; b++)
        if (EK[b].url == a)
            return b;
    return this.Jo("https://hive.blog")
};
ba.prototype.EM = function () {
    return EK[this.Jo(this.get(EL))]
};
ba.prototype.Ya = function () {
    return this.EM().url
};
ba.prototype.ZU = function () {
    return this.EM().title
};
ba.prototype.GD = function (a, b) {
    this.set(GC, a, b);
    D.R && (bY.ph(), D.R.su())
};
ba.prototype.Hu = function (a, b, c) {
    this.set(Ht, a, b);
    D.s.Hu(a);
    AB(c)
};
ba.prototype.FG = function () {
    var a = encodeURIComponent(btoa(this.FF()));
    return (Lu() ? D.s.DR() + "?account=" + D.l + "&cfg=" : FE + "/@" + D.l + "?cfg=") + a
};
ba.prototype.FF = function () {
    return JSON.stringify({
        id: Hj,
        version: Hk,
        values: this.items
    })
};
ba.prototype.FH = function (a, b) {
    var c = "";
    try {
        c = Th.DW(a, !0)
    } catch (e) {
        console.log(e)
    }
    if (c && c.values && c.id == Hj) {
        a = c.values;
        for (var d in a)
            c = $("#tabSettings").find(".qControl[data-key='" + d + "']"), c.length && ga(c).Zs(a[d]), this.set(d, a[d], !0);
        this.J4(b)
    } else
        D6.EA("The selected file is incompatible!")
};
ba.prototype.Hg = function () {
    var a = $.datepicker.formatDate("yy-mm-dd", new Date);
    Zn.Hz("HiveWorld-Settings-" + a + ".json", this.FF())
};
ba.prototype.Hh = function () {
    var a = this,
            b, c = function () {
                $("#selectFileDialog").remove();
                D6.EA("Settings successfully loaded!")
            },
            d = function () {
                var d = new FileReader;
                d.onload = function (b) {
                    a.FH(b.target.result, c)
                };
                d.readAsText(b)
            };
    D6.P8("Load Settings From File", function (a) {
        b = a;
        a = Fs.Fh("div", {
            "class": "confirmDialog"
        }, "Do you want to import the file '" + a.name + "'?");
        D6.MK("Confirm Import", a, d)
    })
};
ba.prototype.Js = function () {
    var a = this,
            b = function (b) {
                return 1 == a.get(b) ? "removeClass" : "addClass"
            },
            c = Zn.Wd();
    c[b(Jt)]("noRowGradients");
    c[b(Ju)]("noTitleGradients");
    c[b(Jr)]("noBoxShadows");
    c[b(Pj)]("noColorizedOpTitles")
};
ba.prototype.ja = function (a, b) {
    var c = {};
    b.find("*").each(function () {
        var a = $(this),
                b = a.attr("id"),
                f = a.prop("tagName");
        b && f && (a = a.hasClass("qControl") ? ga(a).bO() : a.val(), void 0 !== a && String(a).length && (c[b] = a))
    });
    this.set(a, JSON.stringify(c), !0)
};
ba.prototype.jb = function (a, b) {
    if (a = this.get(a, !0)) {
        var c = Th.DW(a);
        c && b.find("*").each(function () {
            var a = $(this),
                    b = a.attr("id"),
                    f = a.prop("tagName"),
                    g = c[b];
            b && f && void 0 !== g && (a.hasClass("qControl") ? (b = ga(a)) ? b.Zs(g) : PP("handle null", a) : a.val(g))
        })
    }
};
ba.prototype.S0 = function (a) {
    var b = D.p;
    b.S1 = a.toLowerCase().replace(/\r|\n|\t|,|@/g, " ").replace(/ {2,}/g, " ").trim().split(" ");
    a = b.S1;
    for (b = a.length - 1; 0 <= b; b--)
        a[b].trim() || a.splice(b, 1)
};
ba.prototype.J4 = function (a) {
    D.V.Ky = !0;
    D.V.K4 = "prevent" === this.get(F3);
    D.Z && D.Z.tF(this.get(mK));
    if (D.s.jq()) {
        D.D && D.D.pT(parseInt(this.get(BV)));
        D.p && D.p.YU(this.get(YX));
        var b = $("#tabActivePosts .panelAccountPosts").data("posts_panel_handle");
        b && (b.X9(this.get(NY)), b.Um(this.get(Nf), !1))
    }
    this.Js();
    b = this.get(Ht, !0);
    D.s.dY.qf(b) || (b = "default");
    PP("settings loaded");
    this.Hu(b, !1, a)
};
ba.prototype.Lv = function (a) {
    var b = this;
    if (this.get(GU) != a) {
        var c = function (a, c) {
            var d = D.d.get(a);
            a = D.d.bR(d);
            D6.EA("Connecting to node: " + a);
            D.d.CU(d, !0, function (a) {
                a ? (D.C.Fr(), c(!0)) : (D6.EA("Connection error! Trying other node..."), b.set(GU, "", !1), setTimeout(function () {
                    return D.d.CT(!0)
                }, 1E3), c(!1))
            })
        };
        if ("custom" === a) {
            var d = ga("#selectSteemNode");
            D6.AX({
                title: "Custom Node Url:"
            }, function (a) {
                D.d.Fp(a) || (a = D.d.aB(a), c(a, function () {
                    bZ.g6();
                    d.Zs(a, !1)
                }))
            }, function () {
                return d.Zs(D.d.lo.url, !1)
            })
        } else
            c(a,
                    function () {})
    }
};
var bZ = function () {};
bZ.init = function () {
    var a = D.G,
            b = $("#tabSettings");
    Zn.lY("styleSettings", ".settingsRightBtn{position:relative;width:182px;margin:0 0 7px 0}#tabSettingsGeneral .dataTable tr td:nth-child(2),#tabSettingsLayout .dataTable tr td:nth-child(3){width:50%}#tabSettingsGeneral .dataTable tr td:nth-child(3),#tabSettingsLayout .dataTable tr td:nth-child(3){width:25%;vertical-align:top;text-align:right;padding-left:20px;border-left:1px solid var(--border)}");
    var c = bZ.lg,
            d = bZ.nu,
            e = function (a, b, c) {
                return Fs.Ri("settingsRightBtn",
                        a, b, "", c)
            },
            f = aG.gA({
                id: "tabsSettings"
            }).gB([{
            id: "tabSettingsGeneral",
            title: "General"
        }, {
            id: "tabSettingsView",
            title: "View"
        }, {
            id: "tabSettingsLayout",
            title: "Layout"
        }, {
            id: "tabSettingsModules",
            title: "Modules"
        }, {
            id: "tabSettingsSecurity",
            title: "Security"
        }]).appendTo(b),
            g = f.ez(0),
            h = f.ez(1);
    b = f.ez(2);
    f.ez(3);
    f = f.ez(4);
    for (var k = e("btnCreateSettingsLink", "Create Link...", bZ.dd), l = e("btnLoadSettingsFromFile", "Load From File...", bZ.de), m = e("btnSaveSettingsToFile", "Save To File...", bZ.df), n = e("btnShowNodeConfig",
            "Node Config...", bZ.lb), p = [], q = 0; q < EK.length; q++)
        p.push([EK[q].url]);
    (q = a.get(GU)) && (D.d.iZ(q) ? a.set(GU, "api.steemit.com", !0) : D.d.Fp(q) || D.d.aB(q));
    q = [];
    for (var r = 0; r < GW.length; r++) {
        var t = GW[r].name;
        q.push([t.toLowerCase(), t])
    }
    r = [];
    for (t = 0; t < Bb.length; t++)
        r.push([t, Bb[t]]);
    g.append(bZ.a9(Fs.pM([
        ["Language", c("selectLanguage", fK, [
                ["us", "English (US)"]
            ]), {
                attr: {
                    rowspan: 10
                },
                html: [k, l, m, "<br><br>", n]
            }],
        ["Hive Site", c("selectSteemSite", EL, p, function () {
                D.R.Jj && D6.EC("Confirm Page Refresh", "This change requires the page to be reloaded.<br>Do you want to reload the page now?",
                        function () {
                            return window.location.reload(!0)
                        })
            })],
        ["Hive Node", c("selectSteemNode", GU, bZ.g7(), function (b) {
                return a.Lv(b)
            }, !0)],
        ["SDS Node", c("selectSDSNode", mK, [{
                    value: "https://sds.hivetasks.com",
                    text: "sds.hivetasks.com"
                }], function (a) {
                return D.Z.tF(a)
            }, !0)],
        ["Refresh Interval", c("selectRefreshInterval", BT, [
                ["30", "30 Seconds"],
                ["60", "60 Seconds"],
                ["180", "3 Minutes"],
                ["300", "5 Minutes"],
                ["900", "15 Minutes"],
                ["1800", "30 Minutes"],
                ["3600", "60 Minutes"]
            ], function (a) {
                return D.C.CO(a)
            }, !0)],
        ["Ticker Refresh Interval",
            c("selectTickerRefreshInterval", ni, [
                ["300", "5 Minutes"],
                ["900", "15 Minutes"],
                ["1800", "30 Minutes"],
                ["3600", "60 Minutes"],
                ["14400", "4 Hours"],
                ["28800", "8 Hours"],
                ["86400", "24 Hours"]
            ], function (a) {
                return D.Sp.nk(a)
            })
        ],
        ["Rates Refresh Interval", c("selectRatesRefreshInterval", nj, [
                ["300", "5 Minutes"],
                ["900", "15 Minutes"],
                ["1800", "30 Minutes"],
                ["3600", "60 Minutes"],
                ["14400", "4 Hours"],
                ["28800", "8 Hours"],
                ["86400", "24 Hours"]
            ], function (a) {
                return D.Sp.nl(a)
            })],
        ["Coin Site", c("selectCoinSite", GR, q, function (a) {
                D.V.Ky = !0;
                D.A.su()
            })],
        ["Desktop Notifications", c("selectEnableDesktopNotifications", Gb, [
                ["all", "Show All"],
                ["mentions", "Only Mentions"],
                ["followers", "Only Followers"],
                ["none", "Disabled"]
            ])],
        ["NSFW Content", d("selectShowNSFWContent", O7, [
                [0, "Hide"],
                [1, "Show"]
            ], function (a) {
                return Te.O8()
            })]
    ])));
    h.append(bZ.a9(Fs.pM([
        ["Date Format", c("selectDateFormat", D8, r, function (b) {
                return a.CJ(b, !0)
            }, !0)],
        ["Preview Currency", c("selectPreviewValuta", GC, [
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
                ["USD",
                    "USD (United States Dollar)"
                ],
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
                ["HIVE", "HIVE"]
            ], function (b) {
                return a.GD(b, !0)
            }, !0)],
        ["Decimal Places", d("selectDecimalPlaces", Jw, [
                [1, "1"],
                [2, "2"],
                [3, "3"],
                [4, "4"],
                [5, "5"]
            ], function (a) {
                D.A.Ay();
                D.A.su();
                D.R.su();
                $(".recentPost").remove();
                D.P.K9(!0)
            })],
        ["Show Names With Reputation",
            d("selectReputationInName", I2, [
                [1, "Yes"],
                [0, "No"]
            ], function (a) {
                1 == a ? ($(".uRep").show(), $(".uName").each(function () {
                    var a = $(this);
                    if (!a.find(".uRep").length) {
                        var b = a.data("name"),
                                c = D.L.QL(b);
                        !1 !== c ? D.L.I6(a, b, c) : D.L.gI(b)
                    }
                })) : $(".uRep").hide()
            })
        ],
        ["Show Account Info On Hover", d("selectAccountTooltips", JF, [
                [1, "Yes"],
                [0, "No"]
            ])],
        ["Show Amounts For Outgoing Votes", d("selectAmountsOutgoingVotes", Lp, [
                [1, "Yes"],
                [0, "No"]
            ], function (a) {
                return D.D.filter()
            })],
        ["Maximize Multiple Operations", d("selectMaximizeMultipleOperations",
                    fy, [
                        [1, "Yes"],
                        [0, "No"]
                    ],
                    function (a) {
                        $(".opItem").each(function () {
                            var b = ga($(this));
                            b && (b.Yr = a)
                        })
                    })],
        ["Page Scroll Over Lists", d("selectPageScrollOverLists", F3, [
                ["allow", "Allow"],
                ["prevent", "Prevent"]
            ], function (a) {
                D.V.K4 = "prevent" === a
            })],
        ["Account Info On Hover Delay", c("selectAccountTooltipsDelay", D7, [
                ["250", "250 ms"],
                ["500", "500 ms"],
                ["1000", "1000 ms"],
                ["1250", "1250 ms"],
                ["1500", "1500 ms"],
                ["2000", "2000 ms"],
                ["2500", "2500 ms"],
                ["3000", "3000 ms"]
            ], function (a) {
                return D.i.AJ()
            })],
        ["Visible Operations Limit",
            c("selectVisibleOperations", BV, [
                ["25", "25"],
                ["50", "50"],
                ["100", "100"],
                ["250", "250"],
                ["500", "500"],
                ["1000", "1000"]
            ], function (a) {
                return D.D.pT(parseInt(a))
            })
        ]
    ])));
    g = e("btnCreateTheme", "Create Theme...", bZ.dg).button("disable");
    e = e("btnEditTheme", "Edit Theme...", bZ.dh).button(Lu() ? "enable" : "disable");
    b.append(bZ.a9(Fs.pM([
        ["Theme", c("qh", Ht, [
                ["default", "Default"],
                ["dark", "Dark"]
            ], function (b) {
                return a.Hu(b, !0)
            }), {
                attr: {
                    rowspan: "6"
                },
                html: [g, e]
            }],
        ["Colorize Operation Titles", d("selectColorizeOperationTitles",
                    Pj, [
                        [1, "Yes"],
                        [0, "No"]
                    ],
                    function (b) {
                        return a.Js()
                    })],
        ["Show Animations", d("selectShowAnimations", Jv, [
                [1, "Yes"],
                [0, "No"]
            ])],
        ["Show Row Gradients", d("selectShowRowGradients", Jt, [
                [1, "Yes"],
                [0, "No"]
            ], function (b) {
                return a.Js()
            })],
        ["Show Title Gradients", d("selectShowTitleGradients", Ju, [
                [1, "Yes"],
                [0, "No"]
            ], function (b) {
                return a.Js()
            })],
        ["Show Box Shadows", d("selectShowBoxShadows", Jr, [
                [1, "Yes"],
                [0, "No"]
            ], function (b) {
                return a.Js()
            })]
    ])));
    c = Zn.jf() ? "https://addons.mozilla.org/en-US/firefox/addon/hive-keychain" :
            "https://chrome.google.com/webstore/detail/hive-keychain/lkcjlnjfpbikmcmbachjpdbijejflpcm?hl=en";
    f.append(bZ.a9(Fs.pM([
        ['Use <a href="' + c + '" target="_blank">Hive KeyChain</a> For Signing', d("selectUseKeyChain", Oa, [
                [1, "Yes"],
                [0, "No"]
            ])],
        ['Use <a href="https://hivelogin.com" target="_blank">HiveLogin</a> For Signing', d("selectUseSteemConnect", NM, [
                [1, "Yes"],
                [0, "No"]
            ])],
        ["Cache Posting &amp; Memo Keys", d("selectCacheLowerKeys", TM, [
                [1, "Yes"],
                [0, "No"]
            ], function (a) {
                parseInt(a) || D.t.TL()
            })],
        ["Authentication In New Tab",
            d("selectAuthInNewTab", iS, [
                [1, "Yes"],
                [0, "No"]
            ])
        ],
        ["Show Images From Insecure Sources", d("selectShowInsecureImages", KU, [
                [1, "Yes"],
                [0, "No"]
            ])],
        [{
                attr: {
                    style: "vertical-align: top; padding-top: 8px"
                },
                html: "Ignored Accounts"
            }, Fs.GB("textarea", {
                id: "editIgnoredAccounts",
                spellcheck: "false",
                "data-key": Sz
            }).css({
                width: "75%",
                height: "153px",
                overflow: "scroll"
            })]
    ])));
    bZ.nx()
};
bZ.a9 = function (a) {
    return Fs.a9("dataTable withMarginBottom", "", a)
};
bZ.nt = function (a) {
    var b = [];
    if (!a)
        return b;
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (Zo.QE(d) && !d.text) {
            var e = d[0];
            b.push({
                value: e,
                text: 1 < d.length ? d[1] : e
            })
        } else
            b.push(d)
    }
    return b
};
bZ.lg = function (a, b, c, d, e) {
    c = bZ.nt(c);
    c = new gL({
        id: a,
        items: c,
        value: D.G.get(b),
        width: "75%",
        dj: function (a) {
            e || D.G.set(b, a, !0);
            d && d(a)
        },
        "data-key": b
    });
    "selectSDSNode" === a && c.ea(!1);
    return c.aJ()
};
bZ.nu = function (a, b, c, d, e) {
    var f = bZ.nt(c);
    a = (new di({
        id: a,
        buttons: f,
        width: "75%",
        dj: function (a) {
            b && !e && D.G.set(b, a, !0);
            d && d(a)
        },
        value: b ? D.G.get(b) : c[0][0]
    })).aJ();
    b && a.attr("data-key", b);
    return a
};
bZ.AJ = function () {
    bZ.init();
    var a = D.G;
    $("#editIgnoredAccounts").val(a.get(Sz)).on("change paste", function () {
        var b = $(this).val();
        a.set(Sz, b, !0);
        a.S0(b)
    }).trigger("change")
};
bZ.nx = function () {
    var a = this,
            b = [],
            c = {},
            d;
    for (d in nr) {
        c.$jscomp$loop$prop$moduleId$439 = d;
        var e = nr[c.$jscomp$loop$prop$moduleId$439],
                f = e.parent ? Th.Kx(3) + "-" + Th.Kx(2) + e.title : "<strong>" + e.title + "</strong>",
                g = ga(bZ.nu("selectActiveModule" + c.$jscomp$loop$prop$moduleId$439, "", [
                    [1, "On"],
                    [0, "Off"]
                ], function (b) {
                    return function (c) {
                        D.G.nv(b.$jscomp$loop$prop$moduleId$439, 1 === c);
                        a.nx()
                    }
                }(c), !0));
        b.push(Fs.Aq([f, g.aJ()]));
        g.Zs(D.G.ns(c.$jscomp$loop$prop$moduleId$439) ? 1 : 0, !1);
        e.parent && !D.G.ns(e.parent) && g.ea(!1);
        c = {
            $jscomp$loop$prop$moduleId$439: c.$jscomp$loop$prop$moduleId$439
        }
    }
    $("#tabSettingsModules").empty().append(bZ.a9(b))
};
bZ.g7 = function () {
    for (var a = [], b = 0; b < D.d.items.length; b++) {
        var c = D.d.items[b];
        a.push({
            value: c.url,
            text: c.url + (c.by ? " (" + c.by + ")" : "")
        })
    }
    a.push({
        value: "custom",
        text: "Add custom node..."
    });
    return a
};
bZ.g6 = function () {
    ga("#selectSteemNode").gW(bZ.g7())
};
bZ.dd = function () {
    var a = D.G.FG();
    D6.EB('<textarea id="settingsLink" class="mediumText">' + a + "</textarea>", "Settings Link", {
        customButtons: [{
                id: "btnDialogLeft1",
                text: "Copy To Clipboard",
                click: function (a) {
                    $("#settingsLink").select();
                    document.execCommand("copy");
                    D6.EA("Link copied to clipboard!")
                }
            }, {
                id: "btnDialogLeft2",
                text: "Create Bookmark",
                click: function (a) {},
                disabled: !0
            }]
    })
};
bZ.de = function () {
    D.G.Hh()
};
bZ.df = function () {
    D.G.Hg()
};
bZ.lb = function () {
    var a = $(aG.AN(D.S.jF, "mediumText"));
    a.find("td").each(function () {
        var a = $(this).parents("tr");
        a.parents("td").length || (a = a.find("td:first"), a.text(a.text().toUpperCase().replace(/ /g, "_")))
    });
    D6.EB(a, "Current Node Configuration", {
        width: Zn.db(.9),
        height: D.s.cA()
    })
};
bZ.dg = function () {
    D.s.dZ()
};
bZ.dh = function () {
    D.s.da()
};
bZ.nw = function (a, b) {
    PP("nw", a, b);
    if (a === nz) {
        var c = function () {
            if (D.A) {
                var a = D.A.fA;
                "tabAccountBalancesTokens" === a.pd().gC() && a.tI().Wk()
            }
        };
        b ? bh.np(function () {
            return D.C.Zr(c)
        }) : (D.j.U9 = !1, D.j.Xf = !1, D.p.lR(Uo), D.o.lR(Uo), D.A && D.A.Us(), c());
        D.A && bZ.nx()
    }
};
