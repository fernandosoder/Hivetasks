var f3 = function (a) {
    this.AJ(a)
};
f3.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("ProxyInfo", "Hive Witness Proxy Info").aI();
    b = new f3(b);
    a.aN(c + "Hive Witness Proxy Info");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {})
        })
    });
    a.al();
    return b
};
f3.prototype.AJ = function (a) {
    var b = this;
    a.append('<table class="dataTable smallSize"><tr><td> Account </td><td><input class="userFromDblClick" id="toolProxyInfoAccountName" type="text" maxlength="16"></td></tr><tr><td> Search Mode </td><td><select id="toolProxyInfoDir"><option value="in">Incoming (proxied by)</option><option value="out">Outgoing (proxied to)</option></select></td></td><tr><td></td><td><button id="toolProxyInfoExec">Refresh</button></td></tr></table><div id="toolProxyInfoResult" class="textBox"></div> ');
    var c = a.find("#toolProxyInfoAccountName").css("width", "40%"),
            d = gL.gQ(a.find("#toolProxyInfoDir")).gY("40%"),
            e = a.find("#toolProxyInfoResult").hide();
    this.gg = a.find("#toolProxyInfoExec").button().on("click", function () {
        var a = c.val(),
                g = d.bO();
        a ? b.jg(a, g, e) : D6.EA(fN("fill_required_fields_hint"))
    });
    this.f4 = e
};
f3.prototype.SC = function (a) {
    Zn.Ms(this.gg, a);
    this.gg.text(a ? "Refresh" : "Loading... (may take a while)");
    this.f4[a ? "show" : "hide"]()
};
f3.prototype.jg = function (a, b, c) {
    var d = this;
    this.SC(!1);
    var e = 0,
            f = [a],
            g = function (a) {
                c.append("<br>", Fs.Rf("clearfix bold", "", aG.EU(a)), "<hr>")
            },
            h = function (a, b, d, e) {
                c.append(Fs.Rf("clearfix", "", [Fs.dw("left", "", [Th.Kx(d), e, Th.Kx(5)]), aG.EU(a, !1, !0), Fs.dw("left", "", b).css("margin-left", "10px")]), "<br>")
            },
            k = function (b) {
                d.SC(!0);
                g(a);
                for (var c = 1; c < b.length; c++)
                    h(b[c], "", 5 * c, "&gt;&gt;")
            },
            l = function (a) {
                d.SC(!0);
                for (var b = !0, c, k, l; b; ) {
                    b = !1;
                    k = f[e];
                    g(k);
                    for (var m in a)
                        if (l = a[m], c = l.proxy)
                            c == k ? h(m, "( " + Bm(D.o.AM(l.vests),
                                    2) + " HP )", 5, "&lt;&lt;") : f.includes(c) || (f.push(c), b = !0);
                    e < f.length - 1 && (e++, b = !0)
                }
            },
            m = function () {
                d.SC(!0)
            };
    c.empty();
    "out" == b ? D.b.ZY(a, k, m) : D.b.ZW(a, l, m)
};
