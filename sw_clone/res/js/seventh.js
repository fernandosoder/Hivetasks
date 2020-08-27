
dT.prototype.UO = function () {
    $(".panelAccountPosts").each(function () {
        var a = $(this),
                b = a.data("posts_panel_handle");
        a = a.data("overview_handle");
        b ? b.reset() : a && a.reset();
    });
};
dT.prototype.reset = function () {
    this.UO();
    $(".accountPosts .recentPost").remove();
    $(".panelAccountPosts").removeData("overview_handle");
    D.q.reset();
    this.Ll = [];
    this.Jd = !1;
    g8("#tabsAccountPosts").fS(0);
};
dT.prototype.T0 = function (a, b) {
    for (var c, d = 0; d < this.Tr.length; d++)
        if (((c = this.Tr[d]), c.permlink == b && c.author == a))
            return c;
    return null;
};
dT.prototype.Ts = function (a, b) {
    if ((a = this.T0(a, b)))
        if (a.parent_author) {
            if (a.body)
                return a.body;
        } else
            return a.title;
    return "";
};
dT.prototype.Tt = function (a, b, c, d, e, f) {
    this.T0(a, b) || this.Tr.push({author: a, permlink: b, parent_author: c, parent_permlink: d, body: e, title: f});
};
dT.prototype.OB = function () {
    return $(".accountPosts[aria-hidden='false']").data("type");
};
dT.prototype.Lg = function (a, b) {
    var c = this;
    D.q.YA(
            D.l,
            a,
            function (c) {
                var d;
                $(".recentPost[data-permlink='" + a + "']").each(function () {
                    d = $(this);
                    d.find(".uName.invalid").each(function () {
                        var a = $(this).data("name");
                        aI.Le(D.L.updated, a);
                        aI.Le(D.L.queue, a);
                    });
                    g8(d).YA(c, !0);
                });
                void 0 !== b && b();
            },
            function (d) {
                return setTimeout(function () {
                    return c.Lg(a, b);
                }, 5e3);
            }
    );
};
dT.prototype.LS = function () {
    var a = this,
            b = function () {
                a.fe.fV(0).text("Active (" + D.q.ZJ(D.l, !0) + ")");
            };
    if (D.C.I9())
        setTimeout(function () {
            return a.LS();
        }, 5e3);
    else if (this.Ll.length) {
        var c = this.Ll[0];
        this.Lg(c, function () {
            aI.Le(a.Ll, c);
            a.LV(!a.Ll.length);
            a.Ll.length
                    ? setTimeout(function () {
                        return a.LS();
                    }, 250)
                    : b();
        });
    } else
        b();
};
dT.prototype.refresh = function (a) {
    !this.Jd && this.aA && 3 <= moment().diff(this.aA, "minutes") && (this.Jd = !0);
    if (this.Jd) {
        this.Jd = !1;
        this.aA = moment();
        for (var b = D.q.Xb(D.l, !0), c, d = 0; d < b.length; d++)
            (c = b[d]), c.YY() && aI.Lm(this.Ll, c.G0());
        this.LS();
    } else
        this.LV(!1);
    a();
};
var dU = function () {
    this.Na = null;
    aH.mB(
            "styleBlockExplorer",
            "\n #blockExplorerFilter {\n display: flex;\n flex-flow: row nowrap;\n }\n #blockExplorerFilter span {\n padding-top: 7px;\n }\n #blockExplorerFilterTransactionId {\n margin-left: 10px;\n }\n #blockExplorerFilterTransactionIndex {\n width: 175px;\n margin-left: 5px;\n }\n #blockExplorerFilterVirtualOp {\n width: 115px;\n margin-left: 5px;\n }\n #blockExplorerFilterData {\n margin-left: 5px;\n }\n .blockExplorerOperationHeader {\n float: left;\n display: inline-block;\n width: 25%;\n padding: 2px 0 4px 0;\n font-weight: bold;\n font-size: 14px;\n border-bottom: 1px dashed var(--border-lighter);\n }\n .blockExplorerOperationContent {\n float: left;\n display: inline-block;\n width: 75%;\n }\n .blockExplorerOperationContent > .dataTable {\n margin-bottom: 15px;\n }\n .blockExplorerTransactionHeader {\n padding: 5px 7px;\n margin-bottom: 8px;\n font-weight: bold;\n font-size: 12px;\n background: var(--panel-header-bg);\n color: var(--panel-header-text);\n border-radius: var(--border-radius-medium);\n }\n .blockExplorerTransactionContent {\n padding-left: 21px;\n }\n #blockExplorerExport {\n margin-top: 15px;\n }\n #blockExplorerExport .ui-button {\n margin-right: 10px;\n }\n .blockExplorerShowTransactionDetails {\n width: 22px;\n height: 22px;\n float: right;\n padding: 0 2px;\n margin: -3px -5px;\n }\n "
            );
};
dU.mn = function (a, b, c, d) {
    return MG()
            ? D.s.DP() + "?module=" + Nd + "&block_num=" + a + (b ? "&trx_id=" + b : "") + (c ? "&trx_index=" + c : "") + (d ? "&virtual_op=" + d : "")
            : "/block/" + a + (b ? "/" + b : "") + (c ? "/virtual/" + c : "") + (d ? "/" + d : "");
};
dU.dN = function (a, b, c, d) {
    a.bf(bh);
    a.KV(50, "Waiting For User Input...");
    var e = function (e) {
        a.KV(75, "Loading Block...");
        var g = b.trx_id,
                k = b.trx_index,
                l = b.virtual_op,
                m = "Hive Block Explorer / Block: " + e,
                n = a.eZ("BlockExplorer", m).am(),
                p = new dU();
        a.ar(c + m);
        Py([[D.C, "AF"]], function () {
            p.NX(
                    e,
                    g,
                    k,
                    l,
                    n,
                    function () {
                        return d();
                    },
                    f
                    );
        });
    };
    var f = function () {
        D4.AX(
                {title: "Block Number:", bY: 1, bW: "number", mp: 1},
                function (a) {
                    aI.Df(a) ? ((a = parseInt(a)), e(a)) : (D4.D9("Please enter a valid block number!"), f());
                },
                function () {
                    a.dO(i0);
                }
        );
    };
    b.block_num && aI.Df(b.block_num) ? e(b.block_num) : f();
};
dU.prototype.AI = function (a, b, c, d) {
    var e = Ft.R4("textBox", "blockExplorerFilter"),
            f = function (a, b, c) {
                return Ft.GB("input", {id: a, type: "text", placeholder: b, value: c});
            };
    e.append(
            Ft.eU("", "", "Filter:"),
            f("blockExplorerFilterTransactionId", "[ Transaction ID ]", b),
            f("blockExplorerFilterTransactionIndex", "[ Transaction Index ]", c),
            f("blockExplorerFilterVirtualOp", "[ Virtual Op ]", d),
            f("blockExplorerFilterData", "[ Data ]", "")
            );
    a.empty().append(e);
    this.fe = ak
            .gi({id: "tabsBlockExplorer"})
            .gj([
                {id: "tabBlockExplorerHead", title: "Block Details", cls: "textBox"},
                {id: "tabBlockExplorerTransactions", title: "Transactions", cls: "textBox", gn: "190px"},
                {id: "tabBlockExplorerVirtualOps", title: "Virtual Operations", cls: "textBox", gn: "190px"},
            ])
            .appendTo(a);
};
dU.prototype.NX = function (a, b, c, d, e, f, g) {
    var h = this;
    e.html(Ft.R4("textBox", "", "Loading Block..."));
    var k = function (g, k) {
        h.AI(e, b, c, d);
        var l = {timestamp: D.B.DE(moment.utc(g.timestamp).local(), !1, !1, !0)};
        aI.cG(g, l, ["block_id", ["previous", "previous_id"], "signing_key", "witness", "witness_signature", "transaction_merkle_root", "extensions"]);
        e.data("block", g).data("virtual_ops", k);
        var m = $("#blockExplorerFilter"),
                n = $("#tabBlockExplorerHead");
        m.find("input")
                .on("change", function () {
                    return h.NW(g, k);
                })
                .on("input", function () {
                    h.Na && clearTimeout(h.Na);
                    h.Na = setTimeout(function () {
                        return h.NW(g, k);
                    }, 750);
                });
        1 < a && (l.previous_id = Ft.R5(dU.mn(a - 1), l.previous_id)[0].outerHTML);
        n.html(ak.AN(l, "simple fixed"));
        h.fe.fS(b ? 1 : c ? 2 : 0);
        h.NW(g, k);
        l = Ft.GB("button", {}, "Export Block...");
        l.button().on("click", function () {
            var b = JSON.stringify(e.data("block"));
            aH.IL("steem-block-" + a + ".json", b);
        });
        m = Ft.GB("button", {}, "Export Virtual Ops...");
        m.button().on("click", function () {
            var b = JSON.stringify(e.data("virtual_ops"));
            aH.IL("steem-block-" + a + "-virtual-ops.json", b);
        });
        var t = Ft.GB("div", {id: "blockExplorerExport"});
        t.append(l, m);
        n.append(t);
        void 0 !== f && f();
    },
            l = function (e) {
                e
                        ? (D.s.DP().includes(a) || D.s.mm(dU.mn(a, b, c, d)),
                                D.S.NY(a, !0, function (a) {
                                    return k(e, a);
                                }))
                        : (D4.D9("Block " + a + " could not be found!"), void 0 !== g && g());
            };
    a && D.S.Yl(a, l);
};
dU.prototype.Nb = function (a, b) {
    a = $.extend(!0, {}, a);
    D.O.AO(a[0]) && a[1].body && (a[1].body = aJ.GT(a[1].body, 250));
    var c = Ft.GB("div", {class: "blockExplorerOperation clearfix"}),
            d = Ft.GB("div", {class: "blockExplorerOperationHeader"}, a[0]);
    a = Ft.GB("div", {class: "blockExplorerOperationContent"}, ak.AN(a[1], "fixed", !1, !0));
    c.append(d, a);
    b.append(c);
};
dU.prototype.NW = function (a, b) {
    var c = $("#tabBlockExplorerTransactions"),
            d = $("#tabBlockExplorerVirtualOps"),
            e = $("#blockExplorerFilterTransactionId").val(),
            f = $("#blockExplorerFilterTransactionIndex").val(),
            g = $("#blockExplorerFilterVirtualOp").val(),
            h = $("#blockExplorerFilterData").val().toLowerCase();
    c.empty();
    d.empty();
    for (var k, l, m, n = {}, p = 0; p < a.transactions.length; n = { $jscomp$loop$prop$transDetails$370: n.$jscomp$loop$prop$transDetails$370 }, p++)
        if (
                ((k = a.transactions[p]),
                        (n.$jscomp$loop$prop$transDetails$370 = {
                            transaction_id: k.transaction_id,
                            expiration_time: D.B.DE(moment.utc(k.expiration).local(), !1, !1, !0),
                            ref_block_num: k.ref_block_num,
                            ref_block_prefix: k.ref_block_prefix,
                            signatures: k.signatures,
                            extensions: k.extensions,
                        }),
                        (l = Ft.kc(
                                "blockExplorerShowTransactionDetails",
                                "",
                                L8("res/img/info.png"),
                                "Show Transaction Details...",
                                (function (a) {
                                    return function () {
                                        D4.EA(ak.AN(a.$jscomp$loop$prop$transDetails$370, "autoWidthCols"), "Transaction Details", {width: aH.eA(0.8)});
                                    };
                                })(n)
                                )),
                        !e || k.transaction_id.startsWith(e))
                ) {
            var q = Ft.R4("blockExplorerTransaction"),
                    r = Ft.R4("blockExplorerTransactionHeader smallLineHeight", "", [k.transaction_id, l]),
                    t = Ft.R4("blockExplorerTransactionContent"),
                    u = Ft.R4("blockExplorerOperations");
            Ft.R4("blockExplorerOperationsContent");
            Ft.R4("blockExplorerOperationsHeader", "", "Operations (" + k.operations.length + ")");
            m = !1;
            for (var x = 0; x < k.operations.length; x++)
                (l = k.operations[x]), (h && -1 == JSON.stringify(l[1]).toLowerCase().indexOf(h)) || ((m = !0), this.Nb(l, u));
            if (!h || m)
                t.append(u), q.append(r, t), c.append(q);
        }
    for (c = 0; c < b.length; c++)
        (l = b[c].op), (g && b[c].virtual_op != g) || (f && b[c].trx_in_block != f) || (h && -1 == JSON.stringify(l[1]).toLowerCase().indexOf(h)) || this.Nb(l, d);
    this.fe.fV(1).text("Transactions (" + a.transactions.length + ")");
    this.fe.fV(2).text("Virtual Operations (" + b.length + ")");
};
var gs = function (a) {
    this.AI(a);
};
gs.dN = function (a, b, c, d) {
    a.bf(bi);
    a.KV(50, "Loading Page...");
    b = a.eZ("Donate", "Donate").am();
    b.addClass("text").css("padding", "25px 40px");
    new gs(b);
    a.ar(c + "Donate");
    Py([[D.C, "AF"]], d);
};
gs.prototype.AI = function (a) {
    Ft.mB(a, "\n #donationAmount {\n margin-right: 3px;\n }\n #donationAmount,\n #donationType,\n #donationType-button {\n width: 100px;\n }\n #donationExec {\n float: right;\n }\n ");
    a.append(
            '\n <div id="contentDonate">\n My daily mission is to bring you the best Hive experience you can get,\n but I\'m currently very limited, because of the huge price drops in the crypto markets.\n <br><br>\n If you want to help extending the limits and bringing HiveTasks to the next level,\n please consider to make a donation of your choice.\n <br><br>\n In short: More money = more HiveTasks.\n <br><br>\n <strong>Thank you!</strong>\n <br><br><hr>\n <input id="donationAmount" type="text">\n <select id="donationType">\n <option>HIVE</option>\n <option>HBD</option>\n </select>\n <button id="donationExec">Donate</button>\n </div>\n '
            );
    var b = function () {
        if (D.t.bH(!0)) {
            var b = D.l,
                    d = AQ(a.find("#donationAmount").val().trim()),
                    e = g8(a.find("#donationType")).bt();
            if (!d || isNaN(d) || 0.001 > parseFloat(d))
                D4.D9("Please enter an amount >= 0.001!");
            else if ("HIVE" == e && d > D.p.Vt(VI))
                D4.D9("You don't have enough HIVE available for this donation!");
            else if ("HBD" == e && d > D.p.Vt(IQ))
                D4.D9("You don't have enough HBD available for this donation!");
            else {
                var f = d.toFixed(3) + " " + e,
                        g = function (b) {
                            b && (D4.D9("Thank you for your donation!"), D.C.Fs(), D4.M5(a));
                        },
                        h = function (a) {
                            D.S.FT(a, b, "steemworld.org", f, "HiveTasks Donation", g);
                        };
                d = {from: b, to: ak.ET("steemworld.org"), amount: f, memo: "HiveTasks Donation"};
                d = ak.AN(d, "", !1, !1, !1);
                D4.Mg("Confirm Transfer", d, function () {
                    D.t.DL(F1, !1, !1, h);
                });
            }
        }
    };
    a.find("#donationExec")
            .button()
            .on("click", function () {
                return b();
            });
    gt.gy(a.find("#donationType"));
};
gs.k2 = function () {
    var a = Ft.R4();
    new gs(a);
    D4.JO(a, {title: "Donate", resizable: !1, width: 550, height: "auto", paddingX: 10, paddingY: 12, buttons: {}});
};
var MY = function (a, b) {
    this.el = a;
    this.options = b;
    bV(b, "width", a.width());
    bV(b, "height", a.height());
    bV(b, "ck", null);
    bV(b, "cl", null);
    bV(b, "cm", null);
    bV(b, "cn", null);
    this.data = {bids: [], asks: [], orders: []};
    this.cv = 0;
    this.cy = this.cx = this.cw = -1;
    this.cz = "";
    this.c0 = this.cu = this.ct = this.cs = this.cr = this.cq = this.cp = 0;
    this.dF = 12;
    this.dG = 22;
    this.eV();
    this.AI();
    this.co();
    this.resize();
    this.refresh();
};
MY.prototype.eV = function () {
    this.c1 = T7.Mb("#00000000");
    this.c2 = aH.IH("--orderbook-bg");
    this.c3 = aH.IH("--orderbook-horizontal-bar");
    this.c4 = aH.IH("--orderbook-border");
    this.c5 = "#ffffff";
    this.c6 = "#666666";
    this.c7 = aH.IH("--orderbook-bids-line");
    this.c8 = aH.IH("--orderbook-asks-line");
    this.c9 = aH.IH("--orderbook-bids-bg");
    this.dA = aH.IH("--orderbook-asks-bg");
    this.dB = aH.IH("--text-lighter");
    this.dC = aH.IH("--text-lighter");
    this.dD = "#ffffff";
    this.dE = aH.IH("--shadow-lighter");
};
MY.prototype.AI = function () {
    var a = this,
            b = this.el.find("canvas");
    b.length || ((b = Ft.GB("canvas")), this.el.append(b));
    this.dK = b;
    var c = function (b) {
        var c = a.dK.offset();
        a.cr = b.pageX - c.left;
        a.cs = b.pageY - c.top;
        a.ct = a.MU(a.cr);
        a.cu = a.Me(a.cs);
        0 > a.cu && (a.cu = 0);
        a.cp && (a.c0 = a.ct);
        a.co();
        a.Ly();
    };
    this.dK
            .on("mousemove", c)
            .on("mouseleave", function (b) {
                a.cp = 0;
                a.cq = 0;
                a.cr = 0;
                a.cs = 0;
                a.ct = 0;
                a.cu = 0;
                a.co();
                a.Ly();
            })
            .on("mousedown", function (b) {
                var c = a.dK.offset();
                a.cp = b.pageX - c.left;
                a.cq = b.pageY - c.top;
            })
            .on("mouseup", function (b) {
                if (a.cp) {
                    a.cp = 0;
                    var c = a.dK.offset();
                    b = a.MU(b.pageX - c.left);
                    a.c0 = b;
                    a.Ly();
                    a.options.ck && a.options.ck(b);
                }
            })
            .on("mousewheel DOMMouseScroll", function (b) {
                b.preventDefault();
                var d = (0 < (b.wheelDelta || (b.originalEvent && b.originalEvent.wheelDelta) || -b.detail) ? 0.2 : -0.2) * a.range.fullSize;
                if (0.02 <= a.range.fullSize || 0 > d)
                    a.cv += d;
                0 > a.cv && (a.cv = 0);
                a.co();
                c(b);
            })
            .css("cursor", "crosshair");
};
MY.prototype.co = function () {
    var a = this,
            b = this.data,
            c = parseFloat(b.asks.length ? b.asks[0].real_price : 0),
            d = parseFloat(b.asks.length ? b.asks[b.asks.length - 1].real_price : 0),
            e = parseFloat(b.bids.length ? b.bids[b.bids.length - 1].real_price : 0),
            f = parseFloat(b.bids.length ? b.bids[0].real_price : 0),
            g = c - f,
            h = c - g / 2;
    d = Math.min(h - e, d - h);
    d -= this.cv * d;
    0 >= DW(h - d, 1) && (d -= 0.0001);
    c && (this.cz = "Spread: " + ((g / c) * 100).toFixed(4) + " %");
    this.options.cn && g != this.cy && (this.options.cn(g), (this.cy = g));
    this.options.cm && c != this.cw && (this.options.cm(c), (this.cw = c));
    this.options.cl && f != this.cx && (this.options.cl(f), (this.cx = f));
    c = {mid: h, left: h - d, right: h + d, Ej: f, Ei: c, totalAsk: 0, totalBid: 0, maxAmount: 0, halfSize: d, fullSize: 2 * d, decimals: 2, hBar: [], vBar: []};
    for (f = 0; f < b.asks.length && !(b.asks[f].real_price > c.right); f++)
        c.totalAsk += b.asks[f].steem / 1e3;
    for (f = 0; f < b.bids.length && !(b.bids[f].real_price < c.left); f++)
        c.totalBid += b.bids[f].steem / 1e3;
    c.maxAmount = c.totalAsk > c.totalBid ? c.totalAsk : c.totalBid;
    c.decimals = 0.06 <= c.fullSize ? 2 : 3;
    if (0 < c.fullSize) {
        f = 2 == c.decimals ? 100 : 1e3;
        b = DW(c.mid, c.decimals);
        f = Math.max(DW(Math.ceil(c.halfSize * f) / f / 4, c.decimals), 0.01);
        var k = f / 2;
        g = function (b) {
            return b <= a.ct - k || b >= a.ct + k;
        };
        g(c.left) && c.hBar.push(c.left);
        for (h = b; h >= c.left + k; )
            g(h) && c.hBar.push(h), (h -= f);
        for (h = b + f; h <= c.right - k; )
            g(h) && c.hBar.push(h), (h += f);
        g(c.right) && c.hBar.push(c.right);
        f = (1e3 * Math.ceil(c.maxAmount / 1e3)) / 4;
        for (h = f / 1.2; h <= c.maxAmount - k; )
            c.vBar.push(h), (h += f);
    }
    this.range = c;
};
MY.prototype.resize = function () {
    var a = this.el.width(),
            b = this.el.height();
    a && (this.dK.attr("width", a), this.dK.attr("height", b));
    this.leftX = 0;
    this.rightX = this.dK[0].width;
    this.topY = 0;
    this.bottomY = this.dK[0].height;
    this.panelWidth = this.rightX - this.leftX;
    this.panelHeight = this.bottomY - this.topY - this.dG;
    this.midX = this.leftX + this.panelWidth / 2;
    this.hBarY = this.topY + this.panelHeight + this.dF + 4;
    this.vBarX = this.leftX + 5;
    this.dJ = this.dK[0].getContext("2d");
};
MY.prototype.Yc = function (a) {
    this.c0 = a;
    this.Ly();
};
MY.prototype.MV = function (a, b) {
    return {x: this.leftX + (((100 / this.range.halfSize) * (a - this.range.left)) / 100) * this.midX, y: this.topY + this.panelHeight - (((100 / this.range.maxAmount) * b) / 100) * this.panelHeight};
};
MY.prototype.MU = function (a) {
    return (((100 / this.panelWidth) * (a - this.leftX)) / 100) * this.range.fullSize + this.range.left;
};
MY.prototype.Me = function (a) {
    return this.range.maxAmount - (((100 / this.panelHeight) * (a - this.topY)) / 100) * this.range.maxAmount;
};
MY.prototype.MT = function (a) {
    for (var b = this.data, c = 0; c < b.asks.length; c++)
        if (b.asks[c].real_price == a)
            return this.MV(a, b.asks[c].steem / 1e3);
    for (c = 0; c < b.bids.length; c++)
        if (b.bids[c].real_price == a)
            return this.MV(a, b.bids[c].steem / 1e3);
    return this.MV(a, 0);
};
MY.prototype.dH = function (a, b, c, d, e) {
    var f = this.dJ;
    f.beginPath();
    f.lineWidth = d;
    f.strokeStyle = c;
    f.setLineDash(e);
    f.moveTo(a, this.topY);
    f.lineTo(a, b);
    f.stroke();
    f.closePath();
    f.setLineDash([]);
};
MY.prototype.dI = function () {
    for (var a, b = 0; b < this.data.orders.length; b++)
        (a = this.data.orders[b]), (a = this.MT(a.real_price)), a.x && a.y && this.dH(a.x, this.topY + a.y, this.dD, 2, [2, 2]);
};
MY.prototype.MS = function () {
    var a = this.dJ,
            b = this.data,
            c,
            d,
            e;
    a.beginPath();
    a.lineWidth = 2;
    a.strokeStyle = this.c7;
    a.fillStyle = this.dA;
    for (var f = (e = d = c = 0); f < b.bids.length - 1 && !(b.bids[f].real_price < this.range.left); f++) {
        c += b.bids[f].steem / 1e3;
        var g = this.MV(b.bids[f].real_price, c);
        f == b.bids.length - 1 ? a.moveTo(g.x, this.topY + this.panelHeight) : 0 < f && d != g.x && a.lineTo(g.x, e);
        a.lineTo(g.x, g.y);
        d = g.x;
        e = g.y;
    }
    g && ((a.shadowColor = this.dE), a.lineTo(this.leftX, g.y), a.stroke(), a.lineTo(this.leftX, this.topY + this.panelHeight), (g = this.MV(this.cx, 0)), a.lineTo(g.x, this.topY + this.panelHeight), a.fill(), (a.shadowColor = this.c1));
    a.closePath();
    a.beginPath();
    a.lineWidth = 2;
    a.strokeStyle = this.c8;
    a.fillStyle = this.c9;
    d = c = 0;
    e = this.topY + this.panelHeight;
    for (f = 0; f < b.asks.length - 1 && !(b.asks[f].real_price > this.range.right); f++)
        (c += b.asks[f].steem / 1e3), (g = this.MV(b.asks[f].real_price, c)), 0 == f ? a.moveTo(g.x, e) : d != g.x && a.lineTo(g.x, e), a.lineTo(g.x, g.y), (d = g.x), (e = g.y);
    g && ((a.shadowColor = this.dE), a.lineTo(this.rightX, g.y), a.stroke(), a.lineTo(this.rightX, this.topY + this.panelHeight), a.lineTo(this.midX, this.topY + this.panelHeight), a.fill(), (a.shadowColor = this.c1));
    a.closePath();
};
MY.prototype.MQ = function () {
    var a = this.range,
            b = this.dJ;
    var c = this.MV(a.Ei, 0);
    this.dH(c.x, this.topY + this.panelHeight, this.c8, 1, [1, 5]);
    b.fillStyle = this.dC;
    b.fillText(this.cz, c.x + 8, this.topY + 15);
    c = this.MV(a.Ej, 0);
    this.dH(c.x, this.topY + this.panelHeight, this.c7, 1, [1, 5]);
    b.font = this.dF + "px OpenSans";
    b.fillStyle = this.c5;
    b.strokeStyle = this.c5;
    for (var d = 0; d < a.hBar.length; d++) {
        var e = a.hBar[d].toFixed(a.decimals);
        if (a.hBar[d] == a.left) {
            b.textAlign = "left";
            c = this.MV(a.hBar[d], 0);
            var f = 5;
        } else
            a.hBar[d] == a.right ? ((b.textAlign = "right"), (c = this.MV(a.hBar[d], 0)), (f = -5)) : ((b.textAlign = "center"), (c = this.MV(e, 0)), (f = 0));
        b.fillText(e, c.x + f, this.hBarY);
        b.beginPath();
        b.moveTo(c.x, this.hBarY - 13);
        b.lineTo(c.x, this.hBarY - 17);
        b.stroke();
        b.closePath();
    }
    this.ct &&
            ((b.textAlign = "center"),
                    (b.fillStyle = "#ffff00"),
                    (b.strokeStyle = "#ffff00"),
                    (c = this.MV(this.ct, 0)),
                    b.fillText(this.ct.toFixed(4), c.x + f, this.hBarY),
                    b.beginPath(),
                    b.moveTo(c.x, this.hBarY - 13),
                    b.lineTo(c.x, this.hBarY - 17),
                    b.stroke(),
                    b.closePath());
    b.beginPath();
    b.lineWidth = 1;
    b.strokeStyle = "#ffffff";
    b.moveTo(this.leftX, this.hBarY - 16);
    b.lineTo(this.rightX, this.hBarY - 16);
    b.stroke();
    b.closePath();
    b.beginPath();
    b.lineWidth = 1;
    b.strokeStyle = "#aaaaaa";
    b.moveTo(this.leftX, this.options.height);
    b.lineTo(this.rightX, this.options.height);
    b.stroke();
    b.closePath();
    b.shadowColor = this.c1;
    b.textAlign = "left";
    b.fillStyle = this.c6;
    b.strokeStyle = this.c6;
    b.textBaseline = "middle";
    for (f = 0; f < a.vBar.length; f++)
        (c = this.MV(0, a.vBar[f])), b.fillText((a.vBar[f] / 1e3).toFixed(1) + " k", this.vBarX, c.y + 1), b.beginPath(), b.moveTo(this.leftX, c.y), b.lineTo(this.vBarX - 2, c.y), b.stroke();
};
MY.prototype.MR = function () {
    var a = this.c0;
    if (a && a != this.range.Ei.toFixed(6) && a != this.range.Ej.toFixed(6)) {
        var b = this.dJ;
        a = this.MV(a, 0);
        b.beginPath();
        b.lineWidth = 2;
        b.strokeStyle = this.dD;
        b.setLineDash([2, 2]);
        b.moveTo(a.x, 0);
        b.lineTo(a.x, this.topY + this.panelHeight);
        b.stroke();
        b.closePath();
    }
};
MY.prototype.MP = function () {
    if (0 < this.cr || 0 < this.cs) {
        var a = this.dJ;
        a.beginPath();
        a.lineWidth = 1;
        a.strokeStyle = this.dB;
        a.setLineDash([1, 5]);
        a.moveTo(this.cr, 0);
        a.lineTo(this.cr, this.topY + this.panelHeight);
        a.stroke();
        a.closePath();
        a.beginPath();
        a.moveTo(0, this.cs);
        a.setLineDash([1, 5]);
        a.lineTo(this.leftX + this.panelWidth, this.cs);
        a.stroke();
        a.setLineDash([]);
        a.closePath();
    }
};
MY.prototype.Ly = function () {
    var a = this.dJ;
    a.clearRect(0, 0, this.dK[0].width, this.dK[0].height);
    a.lineWidth = 1;
    a.textBaseline = "alphabetic";
    a.shadowBlur = 10;
    a.shadowOffsetX = 0;
    a.shadowOffsetY = 0;
    a.beginPath();
    a.fillStyle = this.c2;
    a.strokeStyle = this.c4;
    a.rect(this.leftX, this.topY, this.panelWidth, this.panelHeight);
    a.fill();
    a.beginPath();
    a.fillStyle = this.c3;
    a.strokeStyle = this.c4;
    a.rect(this.leftX, this.topY + this.panelHeight, this.panelWidth, this.dG);
    a.fill();
    a.stroke();
    this.MQ();
    this.MS();
    this.MR();
    this.MP();
};
MY.prototype.refresh = function (a) {
    void 0 !== a && (this.data = a);
    this.co();
    this.Ly();
};
var dS = function () {
    aH.mB(
            "styleMarket",
            "\n #orderbookViewContainer {\n padding: 3px 4px;\n }\n #orderbookView {\n width: 100%;\n height: 276px;\n }\n #orderbookView,\n #orderbookView canvas {\n border-radius: var(--border-radius-small);\n }\n .orderbookForm.textBox {\n margin-bottom: 9px;\n }\n .orderbookForm table tr td:nth-child(1) {\n padding-right: 11px;\n width: 115px;\n }\n .orderbookForm table tr td:nth-child(2) {\n width: 150px;\n }\n .orderbookForm table tr td:nth-child(2) input {\n text-align: right;\n }\n .orderbookForm table tr td:nth-child(4) {\n padding-left: 5px;\n width: 230px;\n }\n .orderbookForm table tr td:nth-child(4) button {\n width: 195px;\n text-align: left;\n }\n .orderbookForm table tr td:nth-child(5) {\n text-align: right;\n }\n .orderbookForm table tr td:nth-child(5) button {\n width: 135px;\n }\n "
            );
    this.Fo = !1;
    this.MZ = this.HD = null;
    this.Mc = 500;
};
dS.dN = function (a, b, c, d) {
    a.bf(bi);
    a.KV(50, "Loading Market...");
    b = a.eZ("Market", "Internal Market").am();
    D.c.AI(b);
    a.ar(c + "Internal Market");
    a.bF(function () {
        var a = function () {
            D.c.MX();
        };
        Py(
                [
                    [D.c, "Oi"],
                    [D.c, "Yd"],
                ],
                function () {
                    d(a);
                }
        );
    });
    a.bG();
};
dS.prototype.NO = function (a) {
    var b = this;
    a = ak
            .gi({id: "tabsOrders"})
            .gj([
                {id: "tabOrderbook", title: "Orderbook"},
                {id: "tabOpenOrders", title: "Open Orders"},
                {id: "tabConversionRequests", title: "Conversions"},
                {id: "tabSavingsWithdrawals", title: "Withdrawals"},
            ])
            .appendTo(a);
    D.s.Nf(MODULE_MARKET) && a.an().css("min-height", "542px");
    var c = a.fX(0),
            d = a.fX(1),
            e = a.fX(2),
            f = a.fX(3),
            g = ak.gi({id: "tabsOrderbookForm"}).gj([
        {id: "buySteem", title: "Buy HIVE", cls: "orderbookForm textBox"},
        {id: "sellSteem", title: "Sell HIVE", cls: "orderbookForm textBox"},
    ]),
            h = g.fX(0),
            k = g.fX(1),
            l = function (a) {
                return Ft.db("unitBox", "", a, !0);
            },
            m = function (a) {
                D.t.ga(function () {
                    return b.ML(a);
                });
            },
            n = Ft.R7("", "orderbookBuy", "Buy HIVE", "", function () {
                return m(!0);
            }),
            p = Ft.R7("", "orderbookSell", "Sell HIVE", "", function () {
                return m(!1);
            }),
            q = Ft.R7("", "orderbookUseLowestAsk", "&lt;&lt;&nbsp;&nbsp;Lowest Ask", "", function () {
                $("#orderbookBuyPrice").val($("#orderbookLowestAsk").val()).change();
            }),
            r = Ft.R7("", "orderbookUseHighestBid", "&lt;&lt;&nbsp;&nbsp;Highest Bid", "", function () {
                $("#orderbookSellPrice").val($("#orderbookHighestBid").val()).change();
            }),
            t = Ft.R7("", "orderbookAvailableHBD", "&lt;&lt;&nbsp;&nbsp;Available HBD", "", function () {
                $("#orderbookHBDAmount")
                        .val(Or(D.p.Vt(IQ), 3))
                        .change();
            }),
            u = Ft.R7("", "orderbookAvailableHIVE", "&lt;&lt;&nbsp;&nbsp;Available HIVE", "", function () {
                $("#orderbookHIVEAmount")
                        .val(Or(D.p.Vt(VI), 3))
                        .change();
            });
    h.append(
            Ft.be("fullWidth formTable", "", [
                Ft.Fj("td", ["Lowest Ask", Ft.db("", "orderbookLowestAsk", "", !0), l("HBD"), {html: "", attr: {colspan: "2"}}]),
                Ft.Fj("td", ["Buy Price", Ft.db("", "orderbookBuyPrice"), l("HBD"), q, ""]),
                Ft.Fj("td", ["Sell Amount", Ft.db("", "orderbookHBDAmount"), l("HBD"), t, ""]),
                Ft.Fj("td", ["Buy Amount", Ft.db("", "orderbookBuyAmount"), l("HIVE"), "", n]),
            ])
            );
    k.append(
            Ft.be("fullWidth formTable", "", [
                Ft.Fj("td", ["Highest Bid", Ft.db("", "orderbookHighestBid", "", !0), l("HBD"), {html: "", attr: {colspan: "2"}}]),
                Ft.Fj("td", ["Sell Price", Ft.db("", "orderbookSellPrice"), l("HBD"), r, ""]),
                Ft.Fj("td", ["Buy Amount", Ft.db("", "orderbookSellAmount"), l("HBD"), {html: "", attr: {colspan: "2"}}]),
                Ft.Fj("td", ["Sell Amount", Ft.db("", "orderbookHIVEAmount"), l("HIVE"), u, p]),
            ])
            );
    c.append(Ft.R4("textBox withMarginBottom", "orderbookViewContainer", Ft.R4("", "orderbookView")), g.an());
    new b7({
        id: "tableOpenOrders",
        class: "dataTable autoWidthCols notBold",
        headers: "Created;Price;Buy;Type;Sell;Type;Order ID".split(";"),
        aligns: "LRRLRLR".split(""),
        sortCols: "created price buy-amount buy-unit sell-amount sell-unit order-id".split(" "),
        sortDirs: "DAAAAAA".split(""),
    }).appendTo(d);
    new b7({
        id: "tableConversionRequests",
        class: "dataTable autoWidthCols notBold",
        headers: ["Conversion", "Amount", "ID", "Request ID", ""],
        aligns: ["L", "R", "R", "R", ""],
        widths: ["20%", "20%", "15%", "18%", ""],
        sortCols: ["date", "amount", "id", "request-id", ""],
        sortDirs: ["A", "A", "A", "A", ""],
    }).appendTo(e);
    new b7({
        id: "tableSavingsWithdrawals",
        class: "dataTable autoWidthCols notBold",
        headers: "Completion;Amount;Type;From;To;ID;Request ID;".split(";"),
        aligns: "L R L L L R R ".split(" "),
        sortCols: "date amount unit from to id request-id ".split(" "),
        sortDirs: "A A A A A A A ".split(" "),
    }).appendTo(f);
    this.fe = a;
    this.ff = g;
};
dS.prototype.AI = function (a) {
    var b = this;
    this.NO(a);
    $("#orderbookBuyPrice").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($("#orderbookHBDAmount").val());
            $("#orderbookBuyAmount").val(b.MW(!0, a, 0));
            b.Yc(parseFloat($(this).val()));
        }
    });
    $("#orderbookSellPrice").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($("#orderbookHIVEAmount").val());
            $("#orderbookSellAmount").val(b.MW(!1, 0, a));
            b.Yc(parseFloat($(this).val()));
        }
    });
    $("#orderbookBuyAmount").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($(this).val());
            $("#orderbookHBDAmount").val(b.MW(!0, 0, a));
        }
    });
    $("#orderbookSellAmount").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($(this).val());
            $("#orderbookHIVEAmount").val(b.MW(!1, a, 0));
        }
    });
    $("#orderbookHBDAmount").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($(this).val());
            $("#orderbookBuyAmount").val(b.MW(!0, a, 0));
        }
    });
    $("#orderbookHIVEAmount").on("change", function () {
        if (b.Ma($(this))) {
            var a = parseFloat($(this).val());
            $("#orderbookSellAmount").val(b.MW(!1, 0, a));
        }
    });
};
dS.prototype.Ma = function (a) {
    var b = parseFloat(a.val());
    return isNaN(b) || 0 >= b ? (a.val(""), !1) : !0;
};
dS.prototype.MW = function (a, b, c) {
    a = parseFloat(a ? $("#orderbookBuyPrice").val() : $("#orderbookSellPrice").val());
    if (isNaN(a) || 0 >= a)
        return "";
    b = parseFloat(b);
    return isNaN(b) || isNaN(c) || (0 >= b && 0 >= c) ? "" : Or(0 < b ? b / a : c * a, 3);
};
dS.prototype.eW = function () {
    return this.MZ ? (this.MZ.eV(), !0) : !1;
};
dS.prototype.MF = function () {
    var a = this;
    if (!this.eW()) {
        var b = $("#orderbookView");
        return (this.MZ = b = new MY(b, {
            ck: function (b) {
                var c = a.ff.fh();
                $(0 == c ? "#orderbookBuyPrice" : "#orderbookSellPrice")
                        .val(Or(b, 6))
                        .change();
            },
            cm: function (a) {
                $("#orderbookLowestAsk").val(Or(a, 6));
            },
            cl: function (a) {
                $("#orderbookHighestBid").val(Or(a, 6));
            },
        }));
    }
};
dS.prototype.MX = function (a) {
    var b = this;
    if (!this.Fo) {
        var c = this.MZ ? this.MZ : this.MF(),
                d,
                e = function (e) {
                    d.orders = e;
                    c.refresh(d);
                    b.Fo = !1;
                    void 0 !== a && a();
                };
        this.Fo = !0;
        D.S.MA(
                this.Mc,
                function (a) {
                    d = a;
                    b.MJ(e);
                },
                function (a) {
                    b.Fo = !1;
                }
        );
        this.HD ||
                (this.HD = setInterval(function () {
                    D.s.Nf(MODULE_MARKET) || "tabAccountOrders" == D.A.gk() ? b.MX() : (clearInterval(b.HD), (b.HD = null));
                }, 15e3));
    }
};
dS.prototype.Yc = function (a) {
    var b = $("#orderbookView").data("orderbook_control");
    b && b.Yc(a);
};
dS.prototype.MJ = function (a) {
    var b = this;
    D.S.L9(
            D.l,
            function (c) {
                var d = $("#tableOpenOrders");
                Ft.gT(d);
                for (var e, f, g, h, k, l = 0; l < c.length; l++)
                    (e = c[l]),
                            (k = e.sell_price.base.split(" ")),
                            (g = e.sell_price.quote.split(" ")),
                            (f = AQ(g[0])),
                            (g = g[1]),
                            (h = AQ(k[0])),
                            (k = k[1]),
                            AQ(e.real_price) || (e.real_price = "HBD" == g ? f / h : h / f),
                            d.append(
                                    Ft.Fj("td", [D.B.DE(D.B.CG(e.created), !0, !0, !0), Or(e.real_price, 6), Bl(f, 3), g, Bl(h, 3), k, e.orderid, Ft.Fh("button", {class: "cancelOrder", title: "Cancel order"}, "X")], {
                                        "data-order-id": e.orderid,
                                        "data-created": e.created,
                                        "data-price": e.real_price,
                                        "data-buy-amount": f,
                                        "data-buy-unit": g,
                                        "data-sell-amount": h,
                                        "data-sell-unit": k,
                                    })
                                    );
                d.find(".cancelOrder")
                        .button()
                        .on("click", function () {
                            var a = $(this).parents("tr").data("order-id");
                            b.MM(a);
                        });
                b.fe.gZ("tabOpenOrders", "Open Orders (" + c.length + ")");
                b7.LA(d, "created");
                a(c);
            },
            function (a) {}
    );
};
dS.prototype.ML = function (a) {
    var b = this,
            c = moment.utc().unix(),
            d = moment.utc().add(27, "days").format(KR),
            e = $(a ? "#orderbookHBDAmount" : "#orderbookHIVEAmount"),
            f = $(a ? "#orderbookBuyAmount" : "#orderbookSellAmount"),
            g = AQ(e.val()),
            h = AQ(f.val());
    if (isNaN(g) || 0 >= g)
        D4.D9("Please enter a valid sell amount!");
    else if (isNaN(h) || 0 >= h)
        D4.D9("Please enter a valid amount!");
    else {
        g = Or(g, 3) + (a ? " HBD" : " HIVE");
        h = Or(h, 3) + (a ? " HIVE" : " HBD");
        var k = function (a) {
            a && (b.MX(), D.C.Fs(5e3), D4.D9("Order " + c + " successfully created!"), e.val(""), f.val(""));
        };
        D.t.DL(F1, !1, !1, function (a) {
            D.S.ML(a, D.l, c, g, h, !1, d, k);
        });
    }
};
dS.prototype.MM = function (a) {
    var b = this,
            c = function (a) {
                a && (D4.D9("Order cancelled!"), b.MX(), D.C.Fs(5e3));
            },
            d = function (b) {
                D.S.MM(b, D.l, parseInt(a), c);
            };
    D4.EB("Cancel Order?", "Do you really want to cancel the order " + a + "?", function () {
        return D.t.DL(F1, !1, !1, d);
    });
};
dS.prototype.O6 = function (a) {
    var b = this,
            c = function (a) {
                a && (D4.D9("Withdrawal cancelled!"), b.Yd(), D.C.Fs(5e3));
            },
            d = function (b) {
                D.S.O6(b, D.l, parseInt(a), c);
            };
    D4.EB("Cancel Withdrawal?", "Do you really want to cancel the savings withdrawal " + a + "?", function () {
        return D.t.DL(F1, !1, !1, d);
    });
};
dS.prototype.Oi = function (a) {
    var b = this;
    D.l
            ? D.S.Oh(
                    D.l,
                    function (c) {
                        var d = $("#tableConversionRequests");
                        Ft.gT(d);
                        b.fe.gZ("tabConversionRequests", "Conversions (" + c.length + ")");
                        for (var e, f = 0; f < c.length; f++)
                            (e = c[f]),
                                    d.append(
                                            Ft.Fj("td", [D.B.DE(moment.utc(e.conversion_date).local(), !0, !0), e.amount, e.id, e.requestid, ""], {
                                                "data-id": e.id,
                                                "data-request-id": e.requestid,
                                                "data-amount": AQ(e.amount),
                                                "data-date": e.conversion_date,
                                            })
                                            );
                        b7.LA(d, "date");
                        a();
                    },
                    function () {}
            )
            : a();
};
dS.prototype.Yd = function (a) {
    var b = this;
    D.l
            ? D.S.Ox(
                    D.l,
                    function (c) {
                        var d = $("#tableSavingsWithdrawals");
                        Ft.gT(d);
                        b.fe.gZ("tabSavingsWithdrawals", "Withdrawals (" + c.length + ")");
                        for (var e, f, g, h = 0; h < c.length; h++)
                            (e = c[h]),
                                    (f = AQ(e.amount)),
                                    (g = e.amount.split(" ")[1]),
                                    d.append(
                                            Ft.Fj("td", [D.B.DE(moment.utc(e.complete).local(), !0, !0), f, g, e.from, e.to, e.id, e.request_id, Ft.Fh("button", {class: "cancelSavingsWithdraw", title: "Cancel Withdrawal"}, "X")], {
                                                title: e.memo ? "Remarks: " + aJ.GT(e.memo) : "",
                                                "data-date": e.complete,
                                                "data-id": e.id,
                                                "data-request-id": e.request_id,
                                                "data-amount": AQ(e.amount),
                                                "data-unit": e.amount.split(" ")[1],
                                                "data-from": e.from,
                                                "data-to": e.to,
                                            })
                                            );
                        d.find(".cancelSavingsWithdraw")
                                .button()
                                .on("click", function () {
                                    var a = $(this).parents("tr").data("request-id");
                                    b.O6(a);
                                });
                        b7.LA(d, "date");
                        a();
                    },
                    function (a) {}
            )
            : a();
};
dS.prototype.onPageResized = function (a) {
    if ((a = this.MZ))
        a.resize(), a.refresh();
};
var LZ = 1024,
        HC = function (a, b) {
            var c = this;
            this.mC();
            var d = a.gD,
                    e = a.Iq,
                    f = T5(a.tag, ""),
                    g = T5(a.author, ""),
                    h = T5(a.permlink, ""),
                    k = T5(a.hh, !1);
            T5(a.hg, !1);
            this.Rb = new Q5();
            this.Lt = "";
            this.startDepth = 0;
            var l = function (a) {
                k || D.s.KV(75, "Loading Post...");
                var f = e.find(".postContentBody:first");
                if (a) {
                    var l = (l = void 0 === a.body) ? a.content[g + "/" + h] : a;
                    var m = c.Qd(l);
                    var n = c.mG(l);
                    c.Sf(f, l);
                    Pn("LOAD POST", l);
                    m.data("div_content", f).insertBefore(e.find(".postContentReplies"));
                    d.text(l.title.trim());
                } else
                    (n = ""), (l = null);
                e.data("title_div", d);
                f.html(n);
                if (a && void 0 !== a.accounts)
                    for (var u in a.accounts)
                        D.L.set(u, a.accounts[u].reputation, moment.utc().add(1, "days").unix());
                a && void 0 !== a.content
                        ? setTimeout(function () {
                            c.Pc(a, g, h, e.find(".postContentReplies"));
                            ak.Qn();
                        }, 1e3)
                        : ak.Qn();
                void 0 !== b && b();
            },
                    m = function (a) {
                        D.S.LB(a, function (a) {
                            return l(a);
                        });
                    };
            h
                    ? k || !f
                    ? D.S.N8(
                            g,
                            h,
                            function (a) {
                                k ? l(a) : m("/" + a.category + "/@" + g + "/" + h);
                            },
                            function (a) {}
                    )
                    : m("/" + f + "/@" + g + "/" + h)
                    : l(null);
        };
HC.dN = function (a, b, c, d) {
    a.bf(bi);
    var e = b.author,
            f = b.permlink;
    if (-1 < f.indexOf("/")) {
        b = f.split("/");
        var g = b[0];
        f = b[1];
    }
    b = a.eZ("PostView", f);
    var h = b.ee(),
            k = b.am(),
            l = Ft.R4("postContent"),
            m = function () {
                a.ar(h.text() + " \u2014 HiveTasks");
                d(function () {});
            };
    Py(
            [
                [D.C, "AF"],
                [D.C, "AE"],
                [D.C, "Br"],
            ],
            function () {
                D.s.KV(50, "Loading Post...");
                l.append(HC.hi(), Ft.R4("postContentReplies"));
                k.append(l);
                a.ar(f + " \u2014 HiveTasks");
                new HC({author: e, permlink: f, tag: g, hh: !1, hg: !0, gD: h, Iq: l}, m);
            }
    );
};
HC.hi = function (a) {
    var b = Ft.R4("postContentInner", "");
    a && b.append(a);
    return b.append(Ft.R4("postContentBody"));
};
HC.hq = function (a) {
    var b = a.find(".postContentBody:first");
    b.length || (b = a.parent().find(".postContentBody:first"));
    return b;
};
HC.prototype.Sf = function (a, b) {
    b && a.data("post_row", b).attr("data-author", b.author).attr("data-permlink", b.permlink).attr("data-created", b.created).attr("data-updated", b.last_update).attr("data-votes", b.active_votes.length);
};
HC.prototype.Qd = function (a) {
    var b = this,
            c = Ft.R4("postContentFooterInner"),
            d = Ft.R4("postContentFooter", "", c);
    if (a) {
        var e = Ft.R7("btnUpvotePost", "", "", "Upvote Post..."),
                f = Ft.R7("btnDownvotePost", "", "", "Downvote Post..."),
                g = Ft.eU("totalUpvotes"),
                h = Ft.eU("totalDownvotes"),
                k = Ft.eU("totalPostPayout"),
                l = Ft.GB("span", {class: "btnShowVotes", title: "Show Votes..."}).on("click", function () {
            return Wj.B6(a.author, a.permlink);
        }),
                m = Ft.R7("btnEditPost right", "", "Edit...", "Edit " + (a.parent_author ? "Comment" : "Post") + "...").on("click", function () {
            var a = d.data("div_content");
            b.Ls(a);
        }),
                n = Ft.R7("btnReplyPost right", "", "Reply...", "Reply to this " + (a.parent_author ? "Comment" : "Post") + "...").on("click", function () {
            var a = d.data("div_content");
            b.Ls(a, !0);
        });
        c.append(e, g, f, h, k, l);
        "steemchiller" == D.l && c.append(n, m);
        HC.hl(d, a);
    }
    return d;
};
HC.hl = function (a, b) {
    if (b) {
        var c = b.active_votes,
                d = AQ(b.pending_payout_value);
        b = AQ(b.total_payout_value) + AQ(b.curator_payout_value);
        !b && d && (b = d);
        var e = a.find(".btnShowVotes");
        d = a.find(".btnUpvotePost");
        var f = a.find(".btnDownvotePost");
        a.find(".btnEditPost");
        var g = a.find(".totalUpvotes"),
                h = a.find(".totalDownvotes");
        g.text(XI.E0(c, !0));
        h.text(XI.E0(c, !1));
        e.text(c.length ? "( " + c.length + " Votes )" : "");
        (e = XI.E1(c, D.l)) ? (0 < e.percent ? d.addClass("voted") : 0 > e.percent && f.addClass("voted")) : (d.removeClass("voted"), f.removeClass("voted"));
        a.data("payout", b)
                .data("rshares", XI.EY(c))
                .find(".totalPostPayout")
                .text("$ " + Bl(b, 2));
    }
};
HC.prototype.Pv = function (a, b, c) {
    var d = b.data("post_row"),
            e = a ? a.author : D.l,
            f = a ? "#@" + e + "/" + a.permlink : "reply-" + d.author + "-" + d.permlink,
            g = Ft.R4("postContentBody", "", a ? this.mG(a) : ""),
            h = Ft.R4("postContentHeader").append(ak.ET(e, !1, !1, !1, !0));
    a && h.append(Ft.R5(ak.hs(a), ak.Qo(a.created), {class: "postContentHeaderDate"}));
    var k = Ft.GB("div", {class: "postContentAvatar", style: "background-image: url('https://steemitimages.com/u/" + e + "/avatar')", alt: e + "'s avatar"});
    e = this.Qd(a);
    g = Ft.R4("postContentReplyInner", "", [k, h, g, e]);
    c = Ft.GB("div", {id: f, class: "postContentReply", "data-depth": c, "data-children": 0, "data-payout": e.data("payout"), "data-rshares": e.data("rshares")}, g);
    this.Sf(c, a);
    e.data("div_content", c);
    b.attr("data-children", parseInt(b.attr("data-children")) + 1).append(c);
    a || (d.parent_author ? ((a = b.find(".postContentReply:first")), a.length && c.insertBefore(a)) : ((a = $(".postContentReplies")), (b = a.find(".postContentReply:first")), b.length ? c.insertBefore(b) : c.appendTo(a)));
    return c;
};
HC.prototype.mG = function (a) {
    var b = X2.PZ(a);
    a = this.Rb.PA(a.body);
    return X2.Pa(b) && 1 != D.G.get(PV) ? Ft.GB("div", {class: "textBox nsfwContent"}, [fv("show_nsfw_hint"), "<hr>", Ft.R5("#", fv("show_content_btn"), {onClick: "return X2.Pb()"})]).attr("data-content", a)[0].outerHTML : a;
};
HC.prototype.Pc = function (a, b, c, d) {
    delete a.content[b + "/" + c];
    b = 0;
    for (var e in a.content)
        if (((c = a.content[e]), !b || c.depth < b))
            b = c.depth;
    e = this.startDepth = b;
    for (var f = !0; f; ) {
        f = !1;
        for (var g in a.content)
            (c = a.content[g]), c.depth == e && ((f = e == b ? d : d.find(".postContentReply[data-permlink='" + c.parent_permlink + "']")), this.Pv(c, f, e), (f = !0));
        e++;
    }
    this.Po("rshares", !1);
};
HC.prototype.Po = function (a, b) {
    var c = function (c, d) {
        var e, f, g;
        d.sort(function (c, d) {
            e = $(c).data(a);
            f = $(d).data(a);
            "created" != a && e == f ? ((e = $(c).data("created")), (f = $(d).data("created")), (g = !0)) : (g = b);
            return e > f ? (g ? 1 : -1) : e < f ? (g ? -1 : 1) : 0;
        }).appendTo(c);
    },
            d = $(".postContentReplies"),
            e = d.find(".postContentReply").toArray();
    c(d, d.find(".postContentReply[data-depth='" + this.startDepth + "']"));
    for (var f, g = 0; g < e.length; g++)
        (d = $(e[g])), (f = d.data("depth")), c(d, d.find(".postContentReply[data-depth='" + (f + 1) + "']"));
};
HC.prototype.Ls = function (a, b) {
    var c = a.data("post_row"),
            d = b ? c.author : c.parent_author;
    c = b ? c.permlink : c.parent_permlink;
    b && ((b = a.data("depth") + 1), (a = this.Pv(null, a, b)));
    new Rp(this.Rb, a, d, c);
};
HC.prototype.mC = function () {
    aH.mB(
            "stylePostViewer",
            "\n .postContent,\n #panelContentPostView {\n background: var(--post-viewer-bg);\n }\n .postContent {\n border-bottom-left-radius: var(--border-radius-panel);\n border-bottom-right-radius: var(--border-radius-panel);\n }\n .postContent a,\n .postContentBody a {\n color: var(--link-text);\n }\n .postContentReplies {\n margin: 40px auto 0 auto;\n border-bottom-left-radius: var(--border-radius-panel);\n border-bottom-right-radius: var(--border-radius-panel);\n }\n\n .postContentBody,\n .postContentFooterInner {\n width: var(--post-viewer-body-width);\n }\n .postContentBody {\n overflow: hidden;\n overflow-wrap: break-word;\n word-wrap: break-word;\n word-break: break-word;\n -webkit-hyphens: none;\n -ms-hyphens: none;\n hyphens: none;\n }\n .postContentBody.editorAttached {\n min-height: 42px;\n }\n .postContentBody,\n .postContentBody * {\n font-size: var(--post-viewer-font-size);\n line-height: var(--post-viewer-line-height);\n }\n .postContentTop,\n .postContentBottom,\n .postContentBody {\n margin: 25px auto;\n }\n\n .postContentBody p {\n margin: 0 0 18px 0;\n }\n .postContentBody li p {\n margin: 0 0 7px 0;\n }\n .postContentBody center p {\n text-align: center;\n }\n .postContentBody img {\n width: auto;\n height: auto;\n max-width: 100%;\n display: inline-block;\n vertical-align: middle;\n }\n .postContentReply .postContentBody img {\n max-width: 400px;\n max-height: 400px;\n }\n\n .postContentBody sub,\n .postContentBody sup {\n margin-top: 5px;\n display: inline-block;\n font-size: 75% !important;\n }\n .postContentBody sub a,\n .postContentBody sub a *,\n .postContentBody sup a,\n .postContentBody sup a * {\n font-size: 100%;\n }\n\n .postContentBody hr {\n clear: both;\n margin: 15px 0;\n }\n .postContentBody h1,\n .postContentBody h1 * {\n font-size: var(--font-size-h1);\n line-height: var(--line-height-h1);\n }\n .postContentBody h1 {\n margin: 40px 0 10px 0;\n }\n .postContentBody h2,\n .postContentBody h2 * {\n font-size: var(--font-size-h2);\n line-height: var(--line-height-h2);\n }\n .postContentBody h2 {\n margin: 36px 0 8px 0;\n }\n .postContentBody h3,\n .postContentBody h3 * {\n font-size: var(--font-size-h3);\n line-height: var(--line-height-h3);\n }\n .postContentBody h3 {\n margin: 32px 0 6px 0;\n }\n .postContentBody h4,\n .postContentBody h4 * {\n font-size: var(--font-size-h4);\n line-height: var(--line-height-h4);\n }\n .postContentBody h4 {\n margin: 28px 0 4px 0;\n }\n .postContentBody h5,\n .postContentBody h5 * {\n font-size: var(--font-size-h5);\n line-height: var(--line-height-h5);\n }\n .postContentBody h5 {\n margin: 24px 0 2px 0;\n }\n .postContentBody h6,\n .postContentBody h6 * {\n font-size: var(--font-size-h6);\n line-height: var(--line-height-h6);\n }\n .postContentBody h6 {\n margin: 20px 0 1px 0;\n }\n .postContentBody td {\n padding: 8px 10px;\n vertical-align: top;\n word-break: normal;\n }\n .postContentBody ul {\n list-style-type: disc;\n }\n .postContentBody ul,\n .postContentBody ol {\n margin-left: 1px;\n margin-bottom: 18px;\n }\n .postContentBody table {\n width: 100%;\n margin-bottom: 18px;\n }\n .postContentBody tbody {\n background: var(--post-viewer-table-row-bg1);\n }\n .postContentBody thead,\n .postContentBody tbody tr:nth-child(2n) {\n background: var(--post-viewer-table-row-bg2);\n }\n .postContentBody th {\n text-align: left;\n }\n .postContentBody td {\n word-break: normal;\n }\n .postContentBody td,\n .postContentBody th {\n padding: 6px 15px;\n }\n\n .postContentBody .phishy {\n display: inline;\n color: var(--text-red-light);\n }\n .postContentBody div.pull-left {\n float: left;\n margin-right: 22px;\n max-width: 46%;\n }\n .postContentBody div.pull-right {\n float: right;\n margin-left: 22px;\n max-width: 46%;\n }\n .postContentBody div.text-center {\n text-align: center;\n }\n .postContentBody div.text-justify {\n text-align: justify;\n }\n .postContentBody div.text-right {\n text-align: right;\n }\n .postContentBody div.text-rtl {\n direction: rtl;\n }\n\n .postContentBody li {\n padding-left: 2px;\n margin-left: 32px;\n display: list-item;\n list-style-position: outside;\n }\n .postContentBody blockquote {\n border-left: 1px solid #788187;\n margin: 0 0 22px;\n padding: 8px 0 0 19px;\n }\n .postContentBody blockquote,\n .postContentBody blockquote p {\n line-height: 25.6px;\n color: #8a8a8a;\n }\n .postContentBody code,\n .postContentBody code * {\n padding: 2px 5px;\n overflow: scroll;\n border-radius: var(--border-radius-small);\n border: none;\n font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n font-size: var(--font-size-medium1);\n background-color: var(--post-viewer-code-bg);\n }\n .postContentBody code * {\n padding: 2px 1px;\n }\n .postContentBody pre code {\n display: block;\n padding: 6px 8px 4px 8px;\n overflow: auto;\n background-color: var(--post-viewer-pre-code-bg);\n }\n .postContentBody pre {\n margin-bottom: 15px;\n border: 1px solid var(--border);\n border-radius: var(--border-radius-small);\n }\n\n .postContentHeader {\n height: 25px;\n margin-bottom: 5px;\n }\n .postContentHeader .accOpen span {\n float: right;\n margin-top: 0;\n margin-left: 0;\n margin-right: 9px;\n }\n .postContentHeader .uRep {\n margin-top: -3px;\n margin-left: 4px;\n }\n .postContentHeaderDate {\n float: right;\n margin-right: 15px;\n }\n .postContentHeaderDate,\n .postContentHeaderDate span {\n color: #b3b3b3 !important;\n font-size: 14px !important;\n }\n\n .postContentReply {\n padding-top: 7px;\n margin-bottom: var(--margin-big);\n box-shadow: 1px -2px 16px var(--post-viewer-reply-shadow);\n border-top-left-radius: 28px;\n border: 1px solid var(--post-viewer-reply-border);\n }\n .postContentReplies .postContentReply[data-depth='1']:last-child {\n margin-bottom: 0;\n }\n .postContentReplies .postContentReply[data-depth='1']:last-child,\n .postContentReplies .postContentReply[data-depth='1']:last-child .postContentFooter\n {\n border-bottom-left-radius: var(--border-radius-panel);\n border-bottom-right-radius: var(--border-radius-panel);\n }\n\n .postContentReply .postContentReply {\n padding-top: 0;\n margin-left: 52px;\n border: 0;\n box-shadow: none;\n border-radius: 0;\n }\n\n .postContentReply .postContentReply .postContentReplyInner {\n padding-top: 16px;\n border-left: 1px dashed var(--post-viewer-reply-border);\n }\n\n .postContentReply .postContentBody {\n width: 66%;\n margin: 0;\n }\n .postContentReply .postContentReply .postContentBody {\n width: 68%;\n }\n .postContentReply .postContentReply .postContentReply .postContentBody {\n width: 71%;\n }\n .postContentReply .postContentReply .postContentReply .postContentReply .postContentBody {\n width: 75%;\n }\n .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentBody {\n width: 77%;\n }\n .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentBody {\n width: 76%;\n }\n .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentReply .postContentBody {\n width: 75%;\n }\n\n .postContentAvatar {\n float: left;\n width: 48px;\n height: 48px;\n margin-left: 8px;\n margin-right: 12px;\n display: inline-block;\n background-size: cover;\n background-repeat: no-repeat;\n background-position: 50% 50%;\n border-radius: 50%;\n box-shadow: 1px 1px 0px #8D8D8D;\n }\n .postContentReply .postContentReply .postContentAvatar {\n margin-left: 14px;\n }\n\n .postContentTitle {\n display: none;\n }\n .postContentFooter {\n height: 34px;\n padding: 4px 0 0 0;\n background: var(--post-viewer-footer-bg);\n border-top: 1px solid var(--post-viewer-reply-border);\n border-bottom: 1px solid var(--post-viewer-reply-border);\n }\n .postContentFooter,\n .postContentFooter * {\n font-size: 14px;\n }\n .postContentReply .postContentReply .postContentFooter,\n .postContentReply .postContentReply .postContentReplyInner {\n border-bottom-left-radius: 26px;\n border-bottom-right-radius: 0;\n }\n\n .postContentFooterInner {\n margin: 0 auto;\n }\n .postContentReply .postContentFooterInner {\n width: auto;\n margin: 0;\n padding-left: 67px;\n }\n .postContentReply .postContentReply .postContentFooterInner {\n padding-left: 73px;\n }\n\n .postContentFooter .totalPostPayout {\n margin: 0 10px\n }\n .postContentFooter .totalUpvotes,\n .postContentFooter .totalDownvotes {\n margin-right: 12px;\n }\n\n .postContentFooter .btnShowVotes,\n .postContentFooter .downvoteCount {\n margin-right: 3px;\n color: var(--link-text);\n cursor: pointer;\n }\n .postContentFooter .btnShowVotes:hover,\n .postContentFooter .downvoteCount:hover {\n text-decoration: underline;\n }\n .postContentFooter button {\n width: auto;\n padding: 0px 12px;\n height: 28px;\n margin-top: -2px;\n margin-right: 2px;\n background-size: cover !important;\n background-repeat: no-repeat !important;\n background-position: 50% 50% !important;\n }\n .postContentFooter .btnUpvotePost,\n .postContentFooter .btnDownvotePost {\n width: 28px;\n margin-right: 5px;\n }\n .postContentFooter .btnUpvotePost {\n background-image: var(--img-upvote-post-off);\n }\n .postContentFooter .btnUpvotePost.voted {\n background-image: var(--img-upvote-post-on);\n }\n .postContentFooter .btnDownvotePost {\n background-image: var(--img-downvote-post-off);\n }\n .postContentFooter .btnDownvotePost.voted {\n background-image: var(--img-downvote-post-on);\n }\n "
            );
};
var ge = function (a) {
    var b = a.author,
            c = a.permlink,
            d = a.title,
            e = T5(a.onlyBody, !0),
            f = Ft.R4(),
            g = Ft.R4("postContentTitle");
    f.append(HC.hi(g));
    D4.JO(f, {
        title: d,
        width: "800px",
        minHeight: 0,
        padding: "4px 5px 8px 5px",
        resizable: !0,
        centered: !1,
        buttons: [],
        open: function () {
            Ft.mI();
            f.parents(".ui-dialog").focus();
            new HC({author: b, permlink: c, hh: e, hg: !1, gD: g, Iq: f});
        },
        close: function () {
            Ft.Zv();
        },
    });
},
        RU = function () {
            this.clear();
        };
RU.prototype.clear = function () {
    this.images = [];
};
RU.prototype.get = function (a) {
    for (var b, c = 0; c < this.images.length; c++)
        if (((b = this.images[c]), b.src == a))
            return b;
    return null;
};
RU.prototype.getImageData = function (a) {
    return (a = this.get(a)) ? a.data : null;
};
RU.prototype.set = function (a, b) {
    var c = this.get(a);
    c ? (c.data = b) : this.images.push({src: a, data: b});
};
var Pm = T7.Fa(10),
        PJ = /\s+(\w+[\-]*[\w]*)=\s*"(.[^"]*)*?"/g,
        PO = /\s+(\w+[\-]*[\w]*)=\s*'(.[^']*)*?'/g,
        Pe = /\n*<\/*html(?:.*)>\n*/gi,
        Pu = [
            /\n+(<(?:div|table|thead|tbody|tr|th|td])(?: [^>]*)?>)/gi,
            /(<(?:div|table|thead|tbody|tr|th|td|b|blockquote|ul|ol|p|hr|h[1-6])(?: [^>]*)?>)\s+/gi,
            /\s+(<\/(?:table|thead|tbody|tr|th|td|b|blockquote|h[1-6])>)/gi,
            /(<\/(?:div|table|thead|tbody|tr|th|td|blockquote|p|h[1-6]|ul|ol|li|pre)>)\n+/gi,
        ],
        Qz = /\r\n|\r/g,
        Q0 = /\t/g,
        RG = /> *\n( {0,3}#+ +)/g,
        Pd = [/<br[ \/]*>/gi, "<br>"],
        UV = [/<br>\n/gi, "<br>"],
        Zl = [/\n<br>/gi, "\n\n"],
        iD = /[a-z]/i,
        Pf = /\\"/g,
        Pg = /\\'/g,
        Ph = [/\n[ ]+/g, "\n"],
        SR = [/\n[ ]*&nbsp;[ ]*\n/gi, "<br>\n"],
        X1 = [/(<h[1-6]>)[ ]*(<\/h[1-6]>)/gi, "$1&nbsp;$2"],
        is = [/(<\/h[1-6]>[ ]*)\n/gi, "$1<br>"],
        SS = [/<center>[ ]*\n/gi, "<center><br>"],
        ST = [/\n[ ]*<\/center>/gi, "<br></center>"],
        SU = [/<\/center>[ ]*/gi, "</center><p></p>"],
        SV = [/<p><\/p>[ ]*<br>/gi, "<p></p>"],
        a0 = [/<li><p>\s*<br>\s*<\/p>/gi, "<li>"],
        RH = /^[ ]*&nbsp;/gm,
        RI = /\u00a7nbsp;/g,
        RQ = /^[ ]*<br[ \/]?>/gm,
        RR = /\u00a7br;/g,
        Pk = /([\s\(\)\[\]<>*_+\-'"]*[^\/])@([a-z\d\-\.]+)/gi,
        Pl = /(^|\W)#([a-z][a-z\d]*[\w-]{0,1}[a-z\d]*)/gi,
        e2 = / {0,3}(?:-{3,}[ -]*|_{3,}[ _]*|\*{3,}[ \*]*)$/gm,
        k5 = /\n+ *(<hr>)/gi,
        e3 = /([^\*])(\*{1,3})([^\n\*]+)\*{1,3}([^\*])/g,
        e4 = /([^_])(_{1,3})([^\n_]+)_{1,3}([^_])/g,
        Pp = /!\[([^\[\]\n]*)\]\([ ]*([^\s<>\)]+)[ ]*\)/g,
        Pq = /([^"'\/]|^)(http[s]?:\/{2}[^\s<>]+\.(?:png|jpg|jpeg|bmp|gif|tif|tiff|tga)(?:[\?][^\s<>]*)?)/gi,
        Ps = /\[([^\[\]\n]*)\]\([ ]*([^\s<>\)]*)[ ]*\)/g,
        Pt = /([^"'\/=])(https?:\/{2}[^\s<>,;\*!\(\)\[\]\\]+)/gi,
        Og = /(<pre[^>]*>\s*<code[^>]*>)([\s\S]*?)(<\/code>\s*<\/pre>)/gi,
        L7 = /^http[s]?:\/{2}/i,
        Q5 = function () {
            var a = this;
            this.md = null;
            this.PD = [];
            this.Ki = new C4();
            var b = D.G.Y2();
            this.PK = "a b blockquote br center code del div em h1 h2 h3 h4 h5 h6 hr i iframe img li ol p pre q s strike strong sub sup table tbody td th thead tr ul".split(" ");
            this.PL = {div: "phishy pull-left pull-right text-justify text-rtl text-center text-right videoWrapper".split(" "), a: ["mentionedAccount"]};
            this.PM = {iframe: ["src"], div: ["class", "title"], td: ["style"], img: ["alt", "src"], a: ["class", "href", "rel", "title"], ol: ["start"]};
            this.Qw = {td: [{name: "text-align", values: ["right"]}]};
            this.PC = {
                MENTIONS: function (c) {
                    return (c = c.replace(Pk, function (c, e, f) {
                        for (c = ""; f.endsWith("."); )
                            (f = f.substring(0, f.length - 1)), (c = "." + c);
                        for (; f.endsWith("-"); )
                            (f = f.substring(0, f.length - 1)), (c = "-" + c);
                        f = a.PE([
                            ["tag", '<a class="mentionedAccount" href="' + b + "/@" + f + '">'],
                            ["text", "@" + f],
                            ["tag", "</a>"],
                        ]);
                        return e + f + c;
                    }));
                },
                TAGS: function (c) {
                    return (c = c.replace(Pl, function (c, e, f) {
                        c = a.PE([
                            ["tag", '<a href="' + b + "/trending/" + f.toLowerCase() + '">'],
                            ["text", "#" + f],
                            ["tag", "</a>"],
                        ]);
                        return e + c;
                    }));
                },
                LF: function (a) {
                    a = a.replace(SR[0], SR[1]).replace(is[0], is[1]);
                    for (var b = 0; b < Pu.length; b++)
                        a = a.replace(Pu[b], "$1");
                    return (a = a
                            .replace(/<li>/gi, "<li><p>")
                            .replace(/<\/li>/gi, "</p></li>")
                            .replace(/\n/g, "<br>")
                            .replace(/<br>[ ]*<p>/g, "<p></p><p>"));
                },
            };
        };
Q5.prototype.RS = function () {
    return window.markdownit({
        html: !0,
        xhtmlOut: !1,
        breaks: !1,
        langPrefix: "language-",
        linkify: !1,
        typographer: !1,
        quotes: "\u201c\u201d\u2018\u2019",
        highlight: function () {
            return "";
        },
    });
};
Q5.prototype.gU = function (a) {
    var b = this;
    a = a.replace(Pp, function (a, d, e) {
        return b.PH("tag", '<img src="' + e + '" alt="' + d + '">');
    });
    a = a.replace(Pq, function (a, d, e) {
        return d + b.PH("tag", '<img src="' + e + '" alt="">');
    });
    a = a.replace(OO, function (a, d, e) {
        return d + b.PH("tag", '<img src="' + e + '" alt="">');
    });
    a = a.replace(Ps, function (a, d, e) {
        e.startsWith("/") && (e = D.G.Y2() + e);
        d = d.replace(/\*+/g, "");
        return b.YL(e, d);
    });
    a = a.replace(Pt, function (a, d, e) {
        return d + b.YL(e, "");
    });
    return (a = a.replace(e3, function (a, b, e, f, g) {
        e = e.length;
        a = 1 < e;
        e = 1 == e || 3 == e;
        return b + ((a ? "<strong>" : "") + (e ? "<em>" : "")) + f + ((e ? "</em>" : "") + (a ? "</strong>" : "")) + g;
    }));
};
Q5.prototype.RM = function () {
    MG() && console.log(arguments);
};
Q5.prototype.Q2 = function (a) {
    return -1 < this.PK.indexOf(a);
};
Q5.prototype.Q3 = function (a, b) {
    return void 0 !== this.PM[a] && -1 < this.PM[a].indexOf(b);
};
Q5.prototype.Q4 = function (a, b) {
    if (void 0 === this.Qw[a])
        return !1;
    a = this.Qw[a];
    var c = b.split(":");
    if (2 > c.length)
        return !1;
    b = c[0].trim();
    c.splice(0, 1);
    c = c.join(":").trim();
    for (var d = 0; d < a.length; d++)
        if (a[d].name == b && -1 < a[d].values.indexOf(c))
            return !0;
    return !1;
};
Q5.prototype.PH = function (a, b, c) {
    c && (b = this.PF(b));
    c = "::D.CACHE:" + (this.PD.length + 1) + "::";
    this.PD.push({id: c, type: a, content: b});
    return c;
};
Q5.prototype.PE = function (a) {
    for (var b = "", c = 0; c < a.length; c++) {
        var d = a[c];
        b += this.PH(d[0], d[1], "text" == d[0]);
    }
    return b;
};
Q5.prototype.ma = function (a, b) {
    for (var c, d = this.PD.length - 1; 0 <= d; d--)
        (c = this.PD[d]), -1 < b.indexOf(c.type) && ((a = a.replace(c.id, c.content)), this.PD.splice(d, 1));
    return a;
};
Q5.prototype.YL = function (a, b) {
    var c = T7.YK(a);
    c && (b = this.PH("tag", '<img src="' + c + '" alt="' + (b ? b : "") + '">'));
    return this.PE([
        ["tag", '<a href="' + a + '">'],
        ["text", b ? b : a],
        ["tag", "</a>"],
    ]);
};
Q5.prototype.PF = function (a) {
    for (
            var b = [],
            c = "",
            d = "",
            e = "",
            f = "",
            g = !1,
            h = !1,
            k = !1,
            l = !1,
            m = !1,
            n = !1,
            p = function (a) {
                m || (d += a);
            },
            q,
            r,
            t,
            u = 0;
            u < a.length;
            u++
            ) {
        q = a.substr(u, 1);
        r = u < a.length - 1 ? a.substr(u + 1, 1) : "";
        if (k) {
            if (">" == q)
                n || (!g && !h)
                        ? (n && ((e += '"'), (n = g = !1)),
                                (k = !1),
                                (e += ">"),
                                p(this.PH("tag", e)),
                                f && p('<div class="phishy">' + f + "</div>"),
                                l ? ((t = u + 1), (l = !1), (m = !0)) : m && "</a>" == a.substr(u - 3, 4).toLowerCase() && ((m = !1), p(this.PH("text", a.substring(t, u - 3), !0) + this.PH("tag", "</a>"))))
                        : "\\" != c && (Pn("[!]", e), b.push("unescaped '>' in attribute found"), (f = "unescaped '>' in attribute found"));
            else if ('"' == q)
                h || "\\" == c || (g = !g);
            else if ("'" == q)
                g || "\\" == c || (h = !h);
            else if ("<" == q && !g && !h && "\\" != c)
                e += "\\";
            else if ("=" != q || g || h)
                " " == q && n && ((e += '"'), (g = n = !1));
            else if (r && '"' != r && "'" != r) {
                e += '="';
                n = g = !0;
                continue;
            }
            e += q;
        } else
            "\\" != c && (("<" == q && iD.test(a.substr(u + 1, 1))) || "</" == q + r) ? ((e = "<"), (k = !0), (n = h = g = !1), (f = ""), "<a " == a.substr(u, 3).toLowerCase() && ((l = !0), (m = !1))) : p(q);
        c = q;
    }
    k && (b.push("unclosed tag found: " + e), Pn("[!]", e, a));
    for (a = 0; a < b.length; a++)
        this.RM(b[a]);
    return d;
};
Q5.prototype.PG = function () {
    for (var a, b, c, d, e, f, g, h = this.PD.length - 1; 0 <= h; h--)
        if (((b = this.PD[h]), (c = b.content), "tag" == b.type && c.startsWith("<") && c.endsWith(">"))) {
            c = " " + c.substring(1, c.length - 1);
            /="/.test(c) ? ((f = PJ), (c = c.replace(Pf, "'"))) : ((f = PO), (c = c.replace(Pg, '"')));
            (a = /\s*(\w+)\s*/.exec(c)) && a[1] ? (d = a[1].toLowerCase()) : ((d = c), Pn("[!] m null", c));
            for (e = []; (a = f.exec(c)); )
                e.push({name: a[1].toLowerCase(), value: a[2]});
            if (!this.Q2(d))
                this.RM("tag not allowed", d), (b.content = "");
            else if ("</iframe>" == b.content)
                b.content = "";
            else if (e.length) {
                c = d;
                for (a = 0; a < e.length; a++)
                    if (((f = e[a]), this.Q3(d, f.name))) {
                        if (void 0 === f.value)
                            "alt" != f.name && this.RM("attribute is not defined", d, f, c), (f.value = "");
                        else if ("class" == f.name && (void 0 === this.PL[d] || -1 == this.PL[d].indexOf(f.value)))
                            this.RM("class not allowed", d, f, c), (f.value = "");
                        else if ("src" == f.name)
                            if ("iframe" == d)
                                if (((c = "img"), (g = T7.YK(f.value)))) {
                                    c = 'a target="_blank" href="' + f.value + '"><img src="' + g + '" alt="Video"></a';
                                    break;
                                } else
                                    this.RM("invalid content in 'src'", f, c), (f.value = L8("res/img/warnings/invalid-image-source.png"));
                            else
                                L7.test(f.value) ? (f.value = C4.Ns(f.value, LZ, 0, !0)) : (this.RM("invalid content in 'src'", f, c), (f.value = L8("res/img/warnings/invalid-image-source.png")));
                        else if ("href" == f.name)
                            f.value.startsWith("//") ? (f.value = "https:" + f.value) : f.value.startsWith("/") && (f.value = D.G.Y2() + f.value),
                                    /^https?:\/\//i.test(f.value) || (this.RM("invalid content in 'href'", f, c), (f.value = "#"));
                        else if ("style" == f.name && !this.Q4(d, f.value)) {
                            this.RM("style not allowed", d, f);
                            continue;
                        }
                        c += " " + f.name + '="' + f.value + '"';
                    } else
                        this.RM("attribute not allowed", d, f, c);
                b.content = "<" + c + ">";
            }
        }
};
Q5.prototype.YJ = function (a) {
    return a
            .replace(RH, "\u00a7nbsp;")
            .replace(RQ, "\u00a7br;")
            .replace(/<center>/g, "\u00a7center\u00a7")
            .replace(/<\/center>/g, "\u00a7/center\u00a7")
            .replace(/<sup>/g, "\u00a7sup\u00a7")
            .replace(/<\/sup>/g, "\u00a7/sup\u00a7");
};
Q5.prototype.YI = function (a) {
    return a
            .replace(RI, "&nbsp;")
            .replace(RR, "<br>")
            .replace(/\u00a7center\u00a7/g, "<center>")
            .replace(/\u00a7\/center\u00a7/g, "</center>")
            .replace(/\u00a7sup\u00a7/g, "<sup>")
            .replace(/\u00a7\/sup\u00a7/g, "</sup>");
};
Q5.prototype.Fl = function (a) {
    a = a.replace(Qz, Pm).replace(Q0, " ").replace(Zl[0], Zl[1]).replace(RG, ">\n\n$1").replace(e2, "<hr>\n").replace(k5, "<hr>").replace(Pd[0], Pd[1]).replace(UV[0], UV[1]).replace(Pe, "");
    return this.YJ(a);
};
Q5.prototype.SD = function (a) {
    var b = {};
    a = this.md.parse(a, b);
    b = this.YI(this.Q7(this.md.renderer.render(a, this.md.options, b)))
            .replace(SS[0], SS[1])
            .replace(ST[0], ST[1])
            .replace(SU[0], SU[1])
            .replace(SV[0], SV[1])
            .replace(X1[0], X1[1]);
    b.trim() && !b.endsWith("</p>") && (b += "<p></p>");
    return Ft.GB("div", {class: "postEditorSyntaxBlock"}, b);
};
Q5.prototype.Q7 = function (a) {
    var b = this;
    a = a.replace(Og, function (a, c, d, h) {
        return c + b.PH("text", d.replace(/ /g, "&nbsp;"), !0) + h;
    });
    a = this.gU(a);
    a = this.PF(a);
    a = a.replace(Ph[0], Ph[1]);
    for (var c = ["MENTIONS", "TAGS"], d = 0; d < c.length; d++)
        a = this.PC[c[d]](a);
    a = this.PF(a);
    this.PG();
    a = this.ma(a, ["tag", "text"]);
    a = this.PC.LF(a);
    return C4.RF(a);
};
Q5.prototype.PA = function (a) {
    this.md || (this.md = this.RS());
    this.PD = [];
    return this.SD(this.YI(this.Fl(a)))
            .html()
            .replace(a0[0], a0[1]);
};
var j8 = function (a) {
    this.editor = a;
};
j8.FW = function (a, b) {
    var c = new diff_match_patch(),
            d = c.diff_main(a, b),
            e = T7.HP(b).length;
    c.diff_cleanupSemantic(d);
    a = c.patch_make(a, d);
    return (c = c.patch_toText(a)) && c.length < e ? c : b;
};
j8.prototype.Ip = function (a, b, c) {
    var d = function (d, f) {
        d = NV.getImageUploadSignature(d, f);
        d = Ym + D.l + "/" + d;
        f = new FormData();
        f.append("file", a);
        var e = new XMLHttpRequest();
        e.open("POST", d);
        e.onload = function () {
            var a = JSON.parse(e.responseText);
            if (a.error)
                return c(a.error);
            b(a.url);
        };
        e.onerror = function (a) {
            console.error(a);
            c(a);
        };
        e.upload.onprogress = function (a) {
            a.lengthComputable && D4.D9("Uploading image... ( " + Math.round((a.loaded / a.total) * 100) + " % )", 2e3, !0);
        };
        e.send(f);
    };
    D.t.DL(
            F2,
            !0,
            !0,
            function (b) {
                var c = new FileReader();
                c.addEventListener("load", function () {
                    return d(c.result, b);
                });
                c.readAsBinaryString(a);
            },
            function () {
                console.log("action cancelled");
            }
    );
};
j8.prototype.Yn = function (a, b, c, d, e, f) {
    console.log("create pm", a, b, c, d);
    var g = function (a) {
        return a
                .toLowerCase()
                .replace(/[ ]+/g, "-")
                .replace(/[^a-z0-9\-]+/g, "")
                .replace(/\-{2,}/g, "-");
    },
            h = function (a) {
                255 < a.length && (a = a.substring(a.length - 255, a.length));
                return a;
            };
    if (c) {
        b = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, "");
        d = d.replace(/(-\d{8}t\d{9}z)/g, "");
        var k = "re-" + c + "-" + d + "-" + b;
    } else
        k = g(b);
    var l = k,
            m = function (b) {
                k = l;
                if (b) {
                    b = "";
                    for (var c = 0; 3 >= c; c++)
                        b += T7.FZ();
                    k += "-" + b.toLowerCase();
                }
                k = h(k);
                console.log("test link", k);
                D.S.N8(
                        a,
                        k,
                        function (a) {
                            console.log("test result", a);
                            a && a.permlink ? m(!0) : ((a = k), (a = h(g(a))), e(a));
                        },
                        f
                        );
            };
    m(!1);
};
j8.prototype.Sc = function () {
    var a = [];
    this.editor.gC.find("a:not(.mentionedAccount)").each(function () {
        var b = $(this).attr("href");
        /^(?:http|www|\/)/.test(b) && ("https://steemit.com" != b && (b = b.replace("https://steemit.com", "")), -1 == a.indexOf(b) && a.push(b));
    });
    return a;
};
j8.prototype.Sd = function () {
    var a = [];
    this.editor.gC.find("img").each(function () {
        var b = $(this);
        b = b.data("org_src") ? b.data("org_src") : b.attr("src");
        /^(?:http|www|\/)/.test(b) && ((b = C4.SW(b)), -1 == a.indexOf(b) && a.push(b));
    });
    return a;
};
j8.prototype.Lu = function (a, b, c, d) {
    var e = D.l,
            f = this.editor,
            g = f.mM,
            h = this.Sc(),
            k = this.Sd(),
            l = f.Iv == QS,
            m = f.SH().trim();
    if (m) {
        f.editForm.Sb(!1);
        var n,
                p = function () {
                    r.tags = b;
                    r.image = k;
                    r.links = h;
                    var c = [["comment", {author: e, title: a, body: m, parent_author: f.mN, parent_permlink: f.mN ? f.mO : b[0], permlink: u, json_metadata: JSON.stringify(r)}]];
                    n && c.push(["comment_options", n]);
                    console.log("pm", u);
                    console.log("save", c);
                    var d = function () {
                        D4.D9("Your " + (l ? "post was" : "changes were") + " successfully broadcast!");
                        console.log("broadcast ok", l);
                        f.Iq.attr("data-author", e).attr("data-permlink", u).attr("data-payout", 0).attr("data-children", 0);
                        var b = f.Iq.data("title_div");
                        b && b.text(a);
                        f.OQ(f.gC);
                    },
                            g = function (a) {
                                console.log(a);
                                D4.EA(a.message, a.name);
                                f.editForm.Sb(!0);
                            };
                    D.t.DL(F2, !0, !0, function (a) {
                        D.S.iI(a, c, d, g);
                    });
                },
                q = function () {
                    return {app: "steemworld/" + R9, format: "markdown"};
                };
        if (l) {
            var r = q();
            f.mN || (f.mO = b[0]);
            var t = 0 == c;
            this.Yn(
                    e,
                    a,
                    f.mN,
                    f.mO,
                    function (a) {
                        u = a;
                        n = {
                            author: e,
                            permlink: u,
                            max_accepted_payout: t ? "0.000 HBD" : "1000000.000 HBD",
                            percent_steem_dollars: 100 == c ? 0 : 1e4,
                            allow_votes: !t,
                            allow_curation_rewards: !t,
                            extensions: t ? [] : [[0, {beneficiaries: d}]],
                        };
                        p();
                    },
                    function (a) {
                        D4.D9(a);
                        f.editForm.Sb(!0);
                    }
            );
        } else {
            m = j8.FW(g.body, m);
            var u = g.permlink;
            if (g.json_metadata)
                try {
                    r = JSON.parse(g.json_metadata);
                } catch (x) {
                    console.log(x), (r = q());
                }
            else
                r = q();
            p();
        }
    } else
        D4.D9("There is no content in your post!");
};
var RE = /^\s*([\s\S]*)\s*$/g,
        Ym = "https://steemitimages.com/",
        NG = /^https:\/\/steemitimages.com\/([\d]+)x([\d]+)\//i,
        C4 = function () {};
C4.RF = function (a) {
    return a.replace(RE, "$1");
};
C4.RN = function (a) {
    return a.replace(/^ +/, "");
};
C4.RO = function (a) {
    return a.replace(/ +$/, "");
};
C4.SW = function (a) {
    return a.replace(NG, "");
};
C4.Ns = function (a, b, c, d, e) {
    if (!a)
        return "";
    if ((void 0 !== e && !e && a.startsWith(Ym)) || (void 0 !== d && d && a.toLowerCase().endsWith(".gif") && !a.startsWith("http:")))
        return a;
    a = a.replace(NG, function (a, d, e) {
        b && d && d < b && (b = d);
        c && e && e < c && (c = e);
    });
    return Ym + b + "x" + c + "/" + a;
};
var RW = function (a) {
    this.editor = a;
    this.Ir = a.Ir;
    this.Rb = a.Rb;
    this.Yh = 0;
};
RW.prototype.init = function () {
    var a = this,
            b = this.RY();
    this.ht = this.QY();
    this.hu = this.QZ();
    b = Ft.GB("div", {class: "postEditorSourceBox clearfix"}, [this.ht, b, this.hu]);
    this.Ir.prepend(b);
    b.resizable({
        minWidth: 125,
        minHeight: 62,
        handles: "all",
        start: D4.QO,
        stop: D4.QO,
        resize: function (b, d) {
            D4.QO(b, d);
            a.Ye(!1);
        },
    }).draggable({
        containment: "window",
        stop: function (b, d) {
            return a.Ye(!1);
        },
    });
    this.Io = b;
    D.U.DV();
    this.Cd(D.G.get(RC), !1);
    this.Yf();
    this.Ce(!0);
};
RW.prototype.RY = function () {
    var a = this,
            b = Ft.GB("textarea", {class: "postEditorSourceInput scrollY", spellcheck: D.G.get(RB) ? "true" : "false"})
            .on("input change cut paste", function () {
                var b = a.SH();
                b != a.SK() && (a.SJ(b), a.editor.hj(b));
            })
            .on("dragover", function (a) {
                a.preventDefault();
                a.stopPropagation();
            })
            .on("dragenter", function (a) {
                a.preventDefault();
                a.stopPropagation();
            })
            .on("drop", function (b) {
                b.originalEvent.dataTransfer &&
                        b.originalEvent.dataTransfer.files.length &&
                        (b.preventDefault(),
                                b.stopPropagation(),
                                (b = b.originalEvent.dataTransfer.files[0]),
                                /^image\//.test(b.type)
                                ? a.editor.Ip(
                                        b,
                                        function (b) {
                                            return a.YH(b);
                                        },
                                        function (a) {
                                            return D4.D9(a);
                                        }
                                )
                                : D4.D9("Unsupported file type!"));
            }),
            c = Ft.R4("postEditorSourceInputContainer", "", b);
    this.RZ = b;
    return (this.hv = c);
};
RW.prototype.Yg = function () {
    return this.Io.is(".minimized");
};
RW.prototype.QY = function () {
    var a = this,
            b = Ft.R4("postEditorSourceBoxToolbar");
    this.editor.RA(b, "postEditorSourceButtonQuote", "Toggle Format: Quotation", "tb_quote.png", function () {});
    this.editor.RA(b, "postEditorSourceButtonImage", "Insert Image...", "tb_image.png", function () {});
    this.editor.RA(b, "postEditorSourceButtonLink", "Insert Link...", "tb_link.png", function () {
        a.mZ();
    });
    this.editor
            .RA(b, "postEditorSourceButtonCustomElem", "Insert Custom Element...", "tb_element.png", function () {})
            .on("click", function () {
                return a.mK();
            });
    return b;
};
RW.prototype.QZ = function () {
    var a = this,
            b = Ft.R4("postEditorSourceBoxToolbar");
    this.editor.RA(b, "postEditorSourceHideButton", "Show/Hide Syntax Editor", "", function () {
        return a.Ce(!a.RZ.is(":visible"));
    });
    this.editor.RA(b, "postEditorSourceSwitchAlignButton", "Change Syntax Editor alignment", "", function () {
        var b = OR.indexOf(a.Ir.attr("data-align")) + 1;
        b >= OR.length && (b = 0);
        a.Cd(OR[b], !0);
        D.G.set(RC, OR[b], !0);
    });
    this.editor.RA(b, "postEditorSourceImportTemplate", "Import syntax from template file...", "tb_import.png", function () {
        return a.YF();
    });
    this.editor.RA(b, "postEditorSourceExportTemplate", "Export syntax to template file...", "tb_export.png", function () {
        return a.YG();
    });
    return b;
};
RW.prototype.Q8 = function (a) {
    this.RZ[0].selectionStart = a;
    this.RZ[0].selectionEnd = a;
};
RW.prototype.Cj = function (a, b) {
    var c = this.RZ[0];
    c.focus();
    var d = c.value;
    c.value = d.substring(0, b);
    var e = c.scrollHeight;
    c.value = d;
    d = e;
    e = c.clientHeight;
    c.scrollTop = d > e ? d - e / 2 : 0;
    c.setSelectionRange(a, b);
};
RW.prototype.YH = function (a) {
    var b = this.RZ,
            c = b.val(),
            d = b[0].selectionStart,
            e = b[0].selectionEnd;
    b.val(c.substr(0, d) + a + c.substr(e));
    b[0].selectionStart = d + a.length;
    b[0].selectionEnd = b[0].selectionStart;
    b.trigger("change").focus();
};
RW.prototype.SH = function () {
    return this.RZ.val();
};
RW.prototype.SI = function (a, b) {
    this.RZ.val(a);
    b && this.RZ.focus();
};
RW.prototype.SK = function () {
    return this.RZ.data("old_value");
};
RW.prototype.SJ = function (a) {
    this.RZ.data("old_value", a);
};
RW.prototype.hk = function () {
    var a = this.RZ[0];
    return a.value.substring(a.selectionStart, a.selectionEnd);
};
RW.prototype.hj = function () {
    this.editor.hj(this.SH());
};
RW.prototype.mK = function () {
    var a = this;
    $("#postEditorAddCustomElem").remove();
    var b = Ft.GB("ul", {id: "postEditorAddCustomElem"}),
            c = function (a, c) {
                b.append(Ft.GB("li", {"data-type": a}, Ft.GB("div").text(c)));
            };
    c("<br>", "Line Break | <br>");
    c("<hr>", "Horizontal Ruler | <hr>");
    c("&nbsp;", "Non-Breaking Space | &nbsp;");
    c = btn.width() + 17;
    this.Io.append(b);
    b.css({position: "absolute", top: "7px", left: c + "px", width: 250, "box-shadow": "3px 3px 16px var(--shadow)", border: "1px solid var(--border)"}).menu();
    $(document)
            .off("mouseup.addCustomElem")
            .on("mouseup.addCustomElem", function (b) {
                b = $(b.target);
                b.parents("#postEditorAddCustomElem").length && a.YH(b.parents("li").data("type"));
                $("#postEditorAddCustomElem").remove();
                $(document).off("mouseup.addCustomElem");
            });
};
RW.prototype.mZ = function () {
    var a = this,
            b,
            c = {title: "Link URL:"},
            d = function (c) {
                a.YH(c ? "[" + c + "](" + b + ")" : url);
            };
    D4.AX(c, function (e) {
        e.toLowerCase().startsWith("http") || (e = "https://" + e);
        b = e;
        e = a.hk();
        1 < e.length ? d(e) : ((c.title = "Link Text (optional):"), (c.allowEmpty = !0), D4.AX(c, d));
    });
};
RW.prototype.YG = function () {
    var a = this.hk();
    if (a) {
        var b =
                "D-Template-" +
                "Test Template"
                .replace(/\s/g, "-")
                .replace(/[^\w\-]/g, "")
                .replace(/\-{2,}/g, "-") +
                ".json";
        aH.IL(b, JSON.stringify({id: SC, version: R9, name: "Test Template", syntax: a}));
    } else
        D4.D9("No selected text found!");
};
RW.prototype.YF = function () {
    var a = this,
            b = function (b, d) {
                var c = function () {
                    D4.D9("The selected file is incompatible!");
                };
                try {
                    var f = JSON.parse(b);
                    if (f.id != SC)
                        return c();
                    a.YH(f.syntax);
                    d();
                } catch (g) {
                    console.log(g), c();
                }
            };
    D4.QW("Load Template From File", function (a) {
        var c = new FileReader();
        c.onload = function (a) {
            b(a.target.result, function () {
                return $("#selectFileDialog").remove();
            });
        };
        c.readAsText(a);
    });
};
RW.prototype.Ce = function (a) {
    var b = this.Io;
    a || b.data("org_width", b.outerWidth() + "px");
    b.find(".postEditorImageButton:not(.postEditorSourceHideButton)").button(a ? "enable" : "disable");
    b[a ? "removeClass" : "addClass"]("minimized")
            .css({"min-height": a ? "0" : b.outerHeight() + "px", width: a ? b.data("org_width") : "40px"})
            .find(".postEditorSourceHideButton img")
            .attr("src", L8("res/img/editor/tb_" + (a ? "hide" : "show") + ".png"));
    this.hv[a ? "show" : "hide"]();
    this.ht[a ? "show" : "hide"]();
    b.resizable(a ? "enable" : "disable");
    b.draggable(a ? "enable" : "disable");
    a && this.hm();
};
RW.prototype.Cd = function (a, b) {
    this.hn = a;
    var c = this.Io,
            d = this.Ir,
            e = d.parents(".postContent"),
            f = aH.eA(),
            g = aH.eB();
    b && this.Ye(!0);
    d.attr("data-align", a)
            .find(".postEditorSourceSwitchAlignButton img")
            .attr("src", L8("res/img/editor/tb_pos_" + a + ".png"));
    b = function () {
        return c.css("left", parseInt(f / 2 - h / 2) + "px");
    };
    if ("bottom" == a || "top" == a) {
        var h = e.innerWidth();
        a = parseInt(0.25 * g);
        b();
        h -= 8;
    } else
        "left" == a || "right" == a ? ((h = parseInt(0.3 * f)), (a = parseInt(0.75 * g))) : ((h = parseInt(0.3 * f)), (a = parseInt(0.3 * g)), b()), c.css("top", parseInt(g / 2 - a / 2) + "px");
    this.g6(h);
    this.g7(a);
};
RW.prototype.hm = function () {
    var a = this.Io,
            b = a.position(),
            c = aH.eA(),
            d = aH.eB(),
            e = b.left;
    b = b.top;
    var f = a.outerWidth(),
            g = a.outerHeight(),
            h = !1,
            k = !1;
    0 > e && (e = 0);
    0 > b && (b = 0);
    e + f > c && ((h = !0), (e = c / 2 - f / 2), e + f > c && ((e = 0), (f = c)));
    b + g > d && ((k = !0), (b = d / 2 - g / 2), b + g > d && ((b = 0), (g = d)));
    h && (a.css("left", parseInt(e) + "px"), this.g6(f));
    k && (a.css("top", parseInt(b) + "px"), this.g7(g));
};
RW.prototype.Ye = function (a) {
    var b = this;
    b.Yh && clearTimeout(b.Yh);
    var c = this.Io;
    this.Yh = setTimeout(
            function () {
                var d = c.position(),
                        e = a ? 0 : d.left;
                d = a ? 0 : d.top;
                var f = a ? 0 : c.outerWidth(),
                        g = a ? 0 : c.outerHeight(),
                        h = b.Yg();
                Pn("save pos", f, g);
                h ? b.Ye(a) : (D.G.set(Re, e, !0), D.G.set(Rf, d, !0), D.G.set(Rg, f, !0), D.G.set(Rh, g, !0));
            },
            a ? 0 : 1e3
            );
};
RW.prototype.g6 = function (a) {
    this.Io.css("width", a + "px");
};
RW.prototype.g7 = function (a) {
    this.Io.css("height", a + "px");
};
RW.prototype.Yf = function () {
    var a = this.Io,
            b = D.G.get(Re, 0),
            c = D.G.get(Rf, 0),
            d = D.G.get(Rg, 0),
            e = D.G.get(Rh, 0);
    Pn("load pos", d, e);
    a.css("left", b + "px");
    a.css("top", c + "px");
    d && this.g6(d);
    e && this.g7(e);
    this.hm();
};
RW.prototype.ho = function () {
    this.hm();
};
var Rk = function (a) {
    this.editor = a;
    this.Ir = a.Ir;
    this.Rl();
    this.mY(a.Iv);
};
Rk.prototype.Rl = function () {
    var a = this,
            b = Ft.R4("postEditorForm clearfix");
    this.fe = ak.gi({id: "tabsEditPost", minHeight: "364px"}).appendTo(b);
    this.fe.gj([
        {
            id: "tabPostEditorFormTabGeneral",
            title: "General",
            gn: "auto",
            content: function () {
                return a.R3();
            },
        },
        {
            id: "tabPostEditorFormTabBeneficiaries",
            title: "Beneficiaries",
            gn: "auto",
            content: function () {
                return a.Ry();
            },
        },
        {
            id: "tabPostEditorFormTabTools",
            title: "Tools",
            gn: "auto",
            content: function () {
                return a.R6();
            },
        },
    ]);
    this.editor.mN && b.hide();
    this.Ir.append(b);
};
Rk.prototype.R3 = function () {
    var a = this,
            b = this.editor.mM,
            c = this.editor.Pz(),
            d = Ft.R4(),
            e = D.X.get(c + ".title", "[null]");
    "[null]" == e && (e = b ? b.title : "");
    var f = D.X.get(c + ".tags", "[null]");
    "[null]" == f && (f = b ? X2.PZ(b).join(" ") : "");
    c = D.X.get(c + ".payout_type", "[null]");
    "[null]" == c && (c = b ? (AQ(b.max_accepted_payout) ? 100 - (b.percent_steem_dollars / 1e4) * 50 : 0) : 50);
    this.Rr = Ft.R4("numNegative");
    this.Yi = Ft.GB("input", {class: "postEditorFormInputTitle", type: "text", value: e}).on("change", function () {
        a.YE();
        D.X.set(a.editor.Pz() + ".title", a.Yi.val());
    });
    this.Yj = Ft.GB("input", {class: "postEditorFormInputTags", type: "text", value: f}).on("change", function () {
        a.YE();
        D.X.set(a.editor.Pz() + ".tags", a.Yj.val());
    });
    this.mX = new gt({
        class: "postEditorFormSelectPayoutType",
        items: [
            {value: "100", text: "100% HP"},
            {value: "50", text: "50% HP / 50% HBD"},
            {value: "0", text: "Decline Payout"},
        ],
        value: c,
        eI: function (b) {
            D.X.set(a.editor.Pz() + ".payout_type", b);
        },
    });
    this.btnSave = Ft.R7("postEditorFormButtonSave", "", "Save Post", "", function () {
        a.YE() && a.editor.Lu(a.Yi.val(), a.Yj.val().split(" "), parseInt(a.mX.bt()), a.R1());
    });
    MG() || this.btnSave.button("disable");
    d.append("<br>Title<br>", this.Yi, "<br>", "Tags<br>", this.Yj, "<br><br>Payout Type<br>", this.mX.an(), "<br><br><hr>", this.Rr, this.btnSave, "<br>");
    return d;
};
Rk.prototype.Ry = function () {
    var a = this,
            b = this.editor.mM,
            c = D.X.get(this.editor.Pz() + ".benef", "[null]");
    b = "[null]" == c ? (b ? [] : [{account: SE, weight: SF}]) : JSON.parse(c);
    this.Rx = c = Ft.be("tablePostEditorFormBeneficiaries dataTable simple");
    this.Yk = Ft.R7("btnPostEditorFormAddBeneficiary", "", "Add Beneficiary...", "", function () {
        return a.R2();
    });
    this.R0(b, !1);
    return Ft.R4().append(c, "<br><hr>", this.Yk);
};
Rk.prototype.R6 = function () {
    var a = this,
            b = Ft.R4(),
            c = function (a, b, c, d) {
                c = Ft.R7("", "", "<span>" + c + "</span>", "", d);
                c.prepend(Ft.GB("img", {src: L8("res/img/editor/" + a), alt: b}));
                return c;
            },
            d = c("tb_new.png", "New Post", "Create New Post...", function () {
                D4.EB("Confirm", "Do you really want to create a new post? This will reset the current post data.", function () {
                    a.editor.SQ();
                    a.Yi.val("").trigger("change");
                    a.Yj.val("").trigger("change");
                });
            }),
            e = c("tb_import.png", "Import Post", "Import Post From File...", function () {
                var b = function (b, c) {
                    var d = function () {
                        D4.D9("The selected file is incompatible!");
                    };
                    try {
                        var e = JSON.parse(b);
                        if (e.id != R8)
                            return d();
                        a.Yi.val(e.title).trigger("change");
                        a.Yj.val(e.tags).trigger("change");
                        a.mX.aM(e.payout_type);
                        a.R0(e.beneficiaries, !0);
                        a.editor.SA(e.syntax);
                        a.editor.Qf();
                        c();
                    } catch (m) {
                        console.log(m), d();
                    }
                };
                D4.QW("Load Post From File", function (a) {
                    var c = Ft.Fh("div", {class: "confirmDialog"}, "Do you really want to import the file '" + a.name + "'? This will replace your current post with the data from the file.");
                    D4.Mg("Confirm Import", c, function () {
                        var c = new FileReader();
                        c.onload = function (a) {
                            b(a.target.result, function () {
                                $("#selectFileDialog").remove();
                            });
                        };
                        c.readAsText(a);
                    });
                });
            });
    c = c("tb_export.png", "Export Post", "Export Post To File...", function () {
        var b = a.Yi.val(),
                c =
                "D-Post-" +
                b
                .replace(/\s/g, "-")
                .replace(/[^\w\-]/g, "")
                .replace(/\-{2,}/g, "-") +
                ".json";
        b = {id: R8, version: R9, title: b, tags: a.Yj.val(), payout_type: a.mX.bt(), beneficiaries: a.R1(), syntax: a.editor.SH()};
        aH.IL(c, JSON.stringify(b));
    });
    b.append(d, e, c);
    return b;
};
Rk.prototype.mY = function (a) {
    a = a != QS;
    this.btnSave.text((a ? "Update" : "Create") + " Post");
    this.mX.e8(!a);
    this.Yk.button(a ? "disable" : "enable");
    this.Rx.find("button").button(a ? "disable" : "enable");
};
Rk.prototype.Sb = function (a) {
    this.btnSave.button(a ? "enable" : "disable");
};
Rk.prototype.Rq = function (a) {
    this.Rs() || this.Rr.append("<hr>");
    this.Rr.prepend(a + "<br><br>");
};
Rk.prototype.Rs = function () {
    return this.Rr.html().length;
};
Rk.prototype.Rj = function () {
    var a =
            " " +
            this.Yj.val()
            .toLowerCase()
            .replace(/[#\t\n\r]/g, "")
            .replace(/,/g, " ")
            .replace(/ {2,}/g, " ")
            .replace(/ \-+/g, " ")
            .replace(/(?:^\s+|\s+$)/g, ""),
            b,
            c = [],
            d = this.editor.mM,
            e = a.split(" ");
    a = "";
    for (var f = 0; f < Math.max(e.length, 5); f++)
        if ((b = e[f]))
            / [ ^ 0 - 9a - z\ - ] / .test(b) && (b = ""), /^\d/.test(b) && (b = ""), 2 < b.split("-").length && (b = ""), b || c.push(e[f]), (a += (a ? " " : "") + b);
    a = a
            .replace(/ {2,}/g, " ")
            .replace(/(?:^\s+|\s+$)/g, "")
            .trim();
    c.length && this.Rq("Following invalid tags were removed:<br>" + c.join(", "));
    a || this.Rq("At least one tag is required to save the post.");
    e = a.split(" ");
    d && e[0] != d.category && (this.Rq("The first tag must equal the post's category '" + d.category + "'"), e.splice(0, 0, d.category));
    this.Yj.val(aI.Rz(e).join(" "));
    return !this.Rs();
};
Rk.prototype.Rm = function () {
    var a = this.Yi.val().trim();
    a || this.Rq("A title for the post is required.");
    255 < a.length && this.Rq("The title exceeds the maximum length of 255 characters.");
    return !this.Rs();
};
Rk.prototype.Ro = function () {
    var a = this.mX.bt();
    -1 == [0, 50, 100].indexOf(a) && this.Rq("Please choose a valid payout type.");
    return !this.Rs();
};
Rk.prototype.YE = function () {
    this.Rr.html("");
    if (!this.Rj() || !this.Rm() || !this.Ro())
        return !1;
    if (this.editor.Iv == QS) {
        for (var a = !1, b = this.R1(), c = 0; c < b.length; c++)
            if (b[c].account == SE && b[c].weight == SF) {
                a = !0;
                break;
            }
        if (!a)
            return this.Rq("The account '" + SE + "' has not been added as beneficiary!"), !1;
    }
    return !0;
};
Rk.prototype.R1 = function () {
    var a = [];
    this.Rx.find("tr").each(function () {
        var b = $(this);
        a.push({account: b.data("account"), weight: b.data("weight")});
    });
    return a;
};
Rk.prototype.R0 = function (a, b) {
    var c = this,
            d = 1e4,
            e = this.Rx;
    e.find("tr").remove();
    for (var f = {}, g = 0; g < a.length; f = {$jscomp$loop$prop$benef$373: f.$jscomp$loop$prop$benef$373}, g++) {
        f.$jscomp$loop$prop$benef$373 = a[g];
        d -= f.$jscomp$loop$prop$benef$373.weight;
        var h = Ft.R7(
                "",
                "",
                "Edit...",
                "Edit Beneficiary...",
                (function (a) {
                    return function () {
                        c.R2(a.$jscomp$loop$prop$benef$373);
                    };
                })(f)
                );
        var k = Ft.R7(
                "",
                "",
                "X",
                "Remove Beneficiary",
                (function (a) {
                    return function () {
                        e.find("tr[data-account='" + a.$jscomp$loop$prop$benef$373.account + "']").remove();
                        c.R0(c.R1(), !0);
                    };
                })(f)
                );
        0 == g && (h.css("visibility", "hidden"), k.css("visibility", "hidden"));
        e.append(Ft.Fj("td", [f.$jscomp$loop$prop$benef$373.weight / 100 + " %", f.$jscomp$loop$prop$benef$373.account, h, k], {"data-account": f.$jscomp$loop$prop$benef$373.account, "data-weight": f.$jscomp$loop$prop$benef$373.weight}));
    }
    this.Yk.button(d ? "enable" : "disable");
    this.fe.gZ("tabPostEditorFormTabBeneficiaries", "Beneficiaries (" + a.length + ")");
    b && D.X.set(this.editor.Pz() + ".benef", JSON.stringify(a));
};
Rk.prototype.R2 = function (a) {
    for (var b = this, c = !a, d = 1e4, e = this.R1(), f = 0; f < e.length; f++)
        (a && a.account == e[f].account) || (d -= e[f].weight), a && a.account == e[f].account && (a = e[f]);
    d /= 100;
    var g = Ft.GB("input", {class: "editBenefAccount", type: "text", value: a ? a.account : ""});
    a && g.prop("disabled", !0);
    f = Ft.GB("table", {class: "dataTable"});
    f.append(Ft.Fj("td", ["Account", g]), Ft.Fj("td", ["Percentage", D.U.ZB()]));
    var h = Ft.GB("div", {class: "dialogForm"}, f),
            k = h.find(".percentageSlider");
    D4.JO(h, {
        title: (a ? "Edit" : "Add") + " Beneficiary",
        resizable: !1,
        width: 408,
        minHeight: 0,
        buttons: {
            Cancel: function () {
                D4.M5(h);
            },
            Ok: function () {
                var d = k.slider("value"),
                        f = g.val().trim().toLowerCase();
                if (1 > d)
                    D4.D9("Percentage must be at least 1%!");
                else if (f) {
                    if (c)
                        for (var n = 0; n < e.length; n++)
                            if (e[n].account == f) {
                                D4.D9("The account '" + f + "' is already set as beneficiary!");
                                return;
                            }
                    D.S.aY(
                            f,
                            function () {
                                a || ((a = {account: f}), e.push(a));
                                a.weight = 100 * d;
                                b.R0(e, !0);
                                D4.M5(h);
                            },
                            function () {
                                D4.D9("The account '" + f + "' could not be found!");
                            }
                    );
                } else
                    D4.D9("Please choose a target account!");
            },
        },
    });
    D.U.Kl(h, "", 0.01, d, a ? 0.01 * a.weight : 1, 2);
};
var OR = ["free", "left", "right", "top", "bottom"],
        R9 = "0.1",
        SE = "steemworld.org",
        SF = 1e3,
        R8 = "HiveTasks Post",
        SC = "HiveTasks Post Template",
        QS = "create",
        QT = "update",
        Rp = function (a, b, c, d) {
            var e = this;
            this.mQ = new j8(this);
            this.Rb = a;
            this.Iq = b;
            this.mN = c;
            this.mO = d;
            var f = this;
            a = b.data("post_row");
            b = HC.hq(b);
            $(".postContentBody").each(function () {
                var a = $(this);
                f.OQ(a);
            });
            this.Ir = Ft.R4("postEditor").data("handle", this);
            Ft.mB(
                    this.Ir,
                    "\n .postEditorForm {\n width: var(--post-viewer-body-width);\n margin: 25px auto 50px auto;\n }\n .postEditorForm .textBox {\n min-height: 324px;\n }\n .postEditorForm input[type='text'],\n .postEditorForm .qSelect {\n margin: 7px 0 12px 0;\n width: 100%;\n }\n .postEditorForm .qSelect {\n margin-bottom: 3px;\n }\n .postEditorForm button {\n margin: 5px 0 0 0;\n }\n .postEditorForm button:nth-child(1) {\n margin-top: 12px;\n }\n .tablePostEditorFormBeneficiaries tr td:nth-child(1) {\n text-align: right;\n width: 24%;\n }\n .tablePostEditorFormBeneficiaries tr td:nth-child(2) {\n width: 76%;\n }\n #tabPostEditorFormTabTools button {\n width: 100%;\n height: 40px;\n text-align: left;\n }\n #tabPostEditorFormTabTools button img {\n position: absolute;\n width: 29px;\n height: 29px;\n margin: -7px 0 0 -15px;\n opacity: 0.4;\n }\n #tabPostEditorFormTabTools button:hover img {\n opacity: 0.5;\n }\n #tabsEditPost .qTabsContent {\n padding: 10px 5px;\n }\n #tabPostEditorFormTabTools button span {\n margin-left: 25px;\n }\n .postEditorSourceImportTemplate {\n margin-top: 10px;\n }\n .postEditorFormTabsNav li {\n width: 168px !important;\n }\n\n .postEditorImageButton {\n float: left;\n width: 30px !important;\n height: 30px !important;\n padding: 2px;\n border-radius: var(--border-radius-medium);\n }\n .postEditorImageButton img {\n width: 24px;\n height: 24px;\n }\n\n .postEditorSourceBox {\n display: flex;\n flex-direction: row;\n position: fixed;\n padding: 5px;\n background: #ddd;\n border-radius: var(--border-radius-medium);\n z-index: 10;\n cursor: move;\n overflow: hidden;\n box-shadow: 1px 1px 10px var(--shadow-darker);\n }\n .postEditor[data-align='top'] .postEditorSourceBox {\n top: 0 !important;\n bottom: inherit !important;\n box-shadow: 0px -3px 25px var(--shadow-darker);\n }\n .postEditor[data-align='bottom'] .postEditorSourceBox {\n top: inherit !important;\n bottom: 5px !important;\n box-shadow: 0px 18px 55px var(--shadow-darker);\n }\n .postEditor[data-align='left'] .postEditorSourceBox {\n left: 0 !important;\n right: inherit !important;\n }\n .postEditor[data-align='right'] .postEditorSourceBox {\n left: inherit !important;\n right: 0 !important;\n }\n .postEditorSourceBox.minimized {\n left: 0 !important;\n }\n .postEditorSourceBox .ui-resizable-e,\n .postEditorSourceBox .ui-resizable-w {\n width: 12px;\n }\n .postEditorSourceBox .ui-resizable-n,\n .postEditorSourceBox .ui-resizable-s {\n height: 12px;\n }\n .postEditorSourceBox .ui-resizable-ne,\n .postEditorSourceBox .ui-resizable-nw,\n .postEditorSourceBox .ui-resizable-se,\n .postEditorSourceBox .ui-resizable-sw {\n width: 12px;\n height: 12px;\n }\n\n .postEditorSourceBoxToolbar {\n width: 30px;\n float: none;\n }\n .postEditorSourceBoxToolbar .postEditorImageButton {\n margin-bottom: 2px;\n }\n .postEditorSourceBoxToolbar .postEditorImageButton:last-child {\n margin-bottom: 0;\n }\n\n .postEditorSourceInputContainer {\n width: 100%;\n margin: 0 4px;\n }\n .postEditorSourceInput {\n width: 100%;\n height: 100%;\n padding: 8px 14px;\n font-family: var(--post-editor-font-name) !important;\n font-size: var(--post-editor-font-size) !important;\n line-height: var(--post-editor-line-height) !important;\n }\n .postEditorSourceInput,\n .postEditorSourceInput:focus {\n background: var(--post-viewer-bg);\n }\n\n .postEditorSourceBoxToolbar button {\n opacity: 0.3;\n }\n .postEditorSourceBoxToolbar button:hover {\n opacity: 0.6;\n }\n .postEditorSourceBoxToolbar button.ui-state-disabled {\n opacity: 0.15;\n }\n "
                    );
            this.gC = b;
            this.Iv = (this.mM = a) ? QT : QS;
            this.editForm = new Rk(this);
            this.hp = new RW(this);
            this.RX = new RU();
            this.Ru = 0;
            this.Rv = "";
            b.data("editor_div", this.Ir).addClass("editorAttached").parent().prepend(this.Ir);
            this.AI();
            b = (b = D.X.get(this.Pz(), "")) ? b : a ? a.body : "";
            Pn("syntax", {syntax: b});
            $(window)
                    .off("resize.editor")
                    .on("resize.editor", function () {
                        return e.ho();
                    });
            this.hp.SI(b, !0);
            this.SA(b);
        };
Rp.prototype.OQ = function (a) {
    var b = a.data("editor_div");
    if (b && b.length) {
        var c = b.data("handle"),
                d = c.mM;
        a.removeData("editor_div").removeClass("editorAttached");
        d && a.html(this.Rb.PA(d.body));
        d || c.Iq.remove();
        b.remove();
    }
};
Rp.prototype.AI = function (a) {
    this.gC
            .off("click.editor")
            .on("click.editor", function (a) {
                var b = a.target;
                if (!a.ctrlKey && b) {
                    var d = $(b);
                    b = "A" == b.nodeName ? d : d.parents("a");
                    b.length && (a.preventDefault(), a.stopPropagation(), aH.DQ(b.attr("href"), !0));
                }
            })
            .off("dblclick.editor")
            .on("dblclick.editor", function (a) {});
    this.hp.init();
};
Rp.prototype.SQ = function () {
    this.Iv = QS;
    this.SA("");
    this.mM = null;
    this.mO = this.mN = "";
    this.Qf();
};
Rp.prototype.Pz = function () {
    var a;
    this.Iv == QS ? (a = this.mN ? this.mN + "_" + this.mO + "_reply" : "new_post") : this.Iv == QT && (a = this.mM.author + "_" + this.mM.permlink);
    return "edit_post_" + a;
};
Rp.prototype.Q9 = function () {
    return this.hp.RZ;
};
Rp.prototype.RA = function (a, b, c, d, e) {
    b = Ft.GB("button", {class: "postEditorImageButton " + b, title: c}, '<img src="' + L8("res/img/editor/" + d) + '" alt="' + c + '">')
            .button()
            .on("click", function (a) {
                e(a);
            });
    a.append(b);
    return b;
};
Rp.prototype.SH = function () {
    var a = this.hp.SH();
    return C4.RF(a);
};
Rp.prototype.SA = function (a) {
    a = this.Rb.PA(a);
    this.gC.empty().append(a);
};
Rp.prototype.hj = function (a) {
    this.SA(a);
    this.Qf();
};
Rp.prototype.Se = function () {
    var a = this.Pz();
    D.X.remove(a);
    D.X.remove(a + ".title");
    D.X.remove(a + ".tags");
};
Rp.prototype.Ip = function (a, b, c) {
    this.mQ.Ip(a, b, c);
};
Rp.prototype.Lu = function (a, b, c, d) {
    this.mQ.Lu(a, b, c, d);
};
Rp.prototype.Qf = function () {
    var a = this,
            b = this.Pz(),
            c = this.SH();
    this.mL && clearTimeout(this.mL);
    this.mL = setTimeout(function () {
        a.mL = null;
        D.X.set(b, c);
    }, 3e3);
};
Rp.prototype.ho = function () {
    var a = this;
    this.mP && clearTimeout(this.mP);
    this.mP = setTimeout(function () {
        return a.hp.ho();
    }, 250);
};
var H1 = "HiveTasks Settings",
        H2 = "1.0",
        Gn = "cfg.",
        Jk = "account",
        bR = "platform_account",
        bQ = "platform_accounts",
        D8 = "post_last_tab",
        GK = "image_zoom_factor",
        Yz = "simulated_vote_payout",
        fs = "lang_iso",
        EK = "steem_platform",
        GU = "steem_node",
        l3 = "use_steemengine",
        BS = "refresh_interval",
        Gb = "desktop_notifications",
        GR = "coin_site",
        JC = "post_finder",
        Nu = "recent_posts_view",
        N1 = "recent_posts_limit",
        Nw = "custom_op_filters",
        PV = "show_nsfw",
        D6 = "date_format",
        GC = "valuta",
        KI = "decimal_places",
        F3 = "page_scroll_lists",
        JP = "reputation_in_name",
        Jc = "account_tooltips",
        D5 = "account_tooltips_delay",
        MB = "show_amounts_outgoing_votes",
        BU = "visible_operations",
        gW = "maximize_multiple_ops",
        IF = "theme",
        P7 = "colorize_op_titles",
        KF = "show_row_gradients",
        KG = "show_title_gradients",
        KD = "show_box_shadows",
        KH = "show_animations",
        Oy = "use_keychain",
        Ni = "use_steemconnect",
        Tl = "cache_lower_keys",
        i4 = "auth_in_new_tab",
        Kq = "show_insecure_images",
        TO = "ignored_accounts",
        RC = "post_editor_syntax_box_pos",
        Re = "post_editor_syntax_box_pos_x",
        Rf = "post_editor_syntax_box_pos_y",
        Rg = "post_editor_syntax_box_width",
        Rh = "post_editor_syntax_box_height",
        RB = "post_editor_spell_check",
        RJ = "post_editor_follow_focus",
        b5 = function () {
            this.items = {};
            this.types = {bool: [], int: [], float: []};
            this.hx = [];
        };