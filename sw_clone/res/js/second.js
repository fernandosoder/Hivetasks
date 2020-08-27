ay.az = function () {
    return aH.W5().data("templates");
};
ay.get = function (a, b) {
    var c = ay.az().find("div[data-id='" + a + "']"),
            d = "";
    if (c.length && ((d = c.html().replace(/\{id\}/g, a)), void 0 !== b))
        for (var e in b)
            (a = new RegExp("{" + e + "}", "g")), (d = d.replace(a, b[e]));
    return d;
};
ay.set = function (a, b) {
    var c = ay.az(),
            d = c.find("div[data-id='" + a + "']");
    d.length ? d.empty() : ((d = Ft.GB("div", {"data-id": a})), c.append(d));
    d.append(b);
};
var fr = function () {
    this.fo = this.fn = "us";
    this.fp = {};
};
fr.prototype.fu = function (a, b, c) {
    void 0 === this.fp[b] && (this.fp[b] = {});
    this.fp[b][a] = c.trim();
};
fr.prototype.ft = function (a, b, c) {
    var d = this.fp[b];
    void 0 !== d && void 0 === d[a] && (a = fn);
    if (void 0 !== d && void 0 !== d[a])
        return (a = d[a]), void 0 !== c ? this.fx(a, c) : a;
    Pn("[!] No translation found", b);
    return "{?}";
};
fr.prototype.fx = function (a, b) {
    for (var c, d, e = 0; e < b.length; e++)
        if (((c = b[e]), (d = "{" + e + "}"), aI.Cf(c))) {
            a = a.split(d);
            d = Ft.eU();
            for (var f = 0; f < a.length; f++)
                d.append(a[f]), f < a.length - 1 && d.append(c);
            a = d;
        } else
            a = a.replace(d, c);
    return a;
};
var aI = function () {};
aI.Qc = function (a) {
    return "array" === typeof a || a instanceof Array;
};
aI.Cf = function (a) {
    return "object" === typeof a || a instanceof Object;
};
aI.Dd = function (a) {
    return "string" === typeof a || a instanceof String;
};
aI.Df = function (a) {
    return !isNaN(a) && !aI.De(a) && "" !== a;
};
aI.De = function (a) {
    return "true" == a || "false" == a;
};
aI.Lm = function (a, b) {
    -1 == a.indexOf(b) && a.push(b);
};
aI.Le = function (a, b) {
    b = a.indexOf(b);
    -1 < b && a.splice(b, 1);
};
aI.Bu = function (a, b, c) {
    var d,
            e,
            f = !c;
    a.sort(function (a, c) {
        d = void 0 !== a[b] ? a[b] : "";
        e = void 0 !== c[b] ? c[b] : "";
        return (f ? d < e : d > e) ? -1 : d != e ? 1 : 0;
    });
};
aI.Rz = function (a) {
    return a.filter(function (a, c, d) {
        return c === d.indexOf(a);
    });
};
aI.cG = function (a, b, c) {
    var d, e;
    c.forEach(function (c) {
        aI.Qc(c) ? ((d = c[0]), (e = c[1])) : (e = d = c);
        b[e] = a[d];
    });
};
function g8(a) {
    a instanceof jQuery || (a = $(a));
    return a.data("handle");
}
function g9(a, b) {
    a.data("handle", b);
}
var eN = function (a, b, c, d) {
    this.options = c;
    this.e6 = !0;
    b = ["qControl", b];
    c["class"] && b.push(c["class"]);
    b = Ft.Fi(a, b.join(" "), c.id);
    g9(b, this);
    this.Io = b;
    var e = T5(c.focusable, !0),
            f = 0;
    "div" == a ? c.width && (f = c.width) : (f = T5(c.width, "100%"));
    f && b.css("width", f);
    void 0 !== c.minWidth && b.css("min-width", c.minWidth);
    void 0 !== c.height && b.css("height", c.height);
    void 0 !== c.minHeight && b.css("min-height", c.minHeight);
    void 0 !== c.padding && b.css("padding", c.padding);
    c.title && b.attr("title", c.title);
    c.html && b.html(c.html);
    for (var g in c)
        g.startsWith("data-") && b.attr(g, c[g]);
    e && this.eM(!0);
    c.noBorder && b.addClass("qNoBorder");
    c.noBackground && b.addClass("qNoBackground");
    this.eJ = T5(c.eI, null);
    this.value = T5(c.value, null);
    d && d.append(b);
};
eN.prototype.an = function () {
    return this.Io;
};
eN.prototype.appendTo = function (a) {
    a.append(this.Io);
    return this;
};
eN.prototype.eM = function (a) {
    var b = this,
            c = this.Io;
    c.attr("tabindex", a ? "0" : "-1");
    c[a ? "addClass" : "removeClass"]("qFocusable");
    if (a)
        c.off("focus.qControl mousedown.qControl blur.qControl")
                .on("focus.qControl mousedown.qControl", function () {
                    b.e7() && c.addClass("qFocus");
                })
                .on("blur.qControl", function () {
                    c.removeClass("qFocus");
                });
    return this;
};
eN.prototype.g6 = function (a) {
    this.options.width = a;
    this.Io.css("width", a);
    return this;
};
eN.prototype.e7 = function () {
    return this.e6;
};
eN.prototype.e8 = function (a) {
    this.e6 = a;
    this.Io[a ? "removeClass" : "addClass"]("qDisabled");
    this.eM(a);
    return this;
};
eN.prototype.bt = function () {
    return this.value;
};
eN.prototype.aM = function (a, b) {
    b = T5(b, !0);
    if (a !== this.value)
        return (this.value = a), this.eI(a), b && (this.hU(a), this.eJ && this.eJ(a)), this;
};
eN.prototype.hc = function (a) {
    return this.value === a;
};
eN.prototype.hT = function () {
    var a = this.options,
            b = "qc_";
    a.id ? (b += a.id) : a.class && (b += a.class);
    return b;
};
eN.prototype.hU = function (a) {
    hS.set(this.hT(), a);
    return this;
};
eN.prototype.hV = function () {
    var a = hS.get(this.hT());
    null !== a && this.aM(a);
    return this;
};
eN.prototype.hA = function () {
    var a = this.value;
    this.value = null;
    this.aM(a);
};
eN.prototype.eI = function (a) {};
var gR = function (a, b) {
    a.focusable = !1;
    eN.call(this, "button", "qButton qNoSelect", a, b);
};
$jscomp.inherits(gR, eN);
var eL = function (a, b) {
    eN.call(this, "div", "qCheckbox qNoSelect", a, b);
    var c = this;
    b = this.Io;
    this.divImage = Ft.R4("qCheckboxImage");
    b.append(this.divImage);
    var d = T5(a.focusable, !0),
            e = T5(a.handleClick, !0);
    if (d) {
        if (e)
            b.on("click", function () {
                return c.fB();
            });
        b.on("keydown", function (a) {
            var b = a.which;
            if (b == gE.gJ || b == gE.gK)
                c.fB(), a.stopPropagation(), a.preventDefault();
        });
    }
    a.text && ((d = Ft.R4("qCheckboxLabel", "", a.text)), b.append(d));
    this.fA(!0 === a.checked, !1);
};
$jscomp.inherits(eL, eN);
eL.prototype.fB = function () {
    this.e7() && this.fA(!this.e9(), !0);
};
eL.prototype.e9 = function () {
    return 1 === this.bt();
};
eL.prototype.fA = function (a, b) {
    this.aM(a ? 1 : 0, b);
};
eL.prototype.e8 = function (a) {
    eN.prototype.e8.call(this, a);
};
eL.prototype.aM = function (a, b) {
    var c = 1 === a;
    this.Io[c ? "addClass" : "removeClass"]("qChecked");
    this.divImage.html(c ? "&#9745;" : "&#9744;");
    eN.prototype.aM.call(this, a, b);
};
var b7 = function (a) {
    this.cols = {};
    var b = T5(a.id, ""),
            c = T5(a.class, ""),
            d = T5(a.headers, []),
            e = T5(a.sortCols, []),
            f = T5(a.sortDirs, []),
            g = T5(a.widths, []);
    a = T5(a.aligns, []);
    for (var h, k, l, m, n, p, q = 0; q < d.length; q++) {
        h = d[q].trim();
        k = this.b8(h);
        l = e.length > q ? e[q] : "";
        m = f.length > q ? f[q] : "A";
        p = g.length > q ? g[q] : "";
        n = a.length > q ? a[q] : "L";
        for (k || (k = "unnamed_1"); void 0 !== this.cols[k]; ) {
            var r = k.split("_");
            if (2 > r.length || isNaN(r[1]))
                r = [k, "0"];
            k = r[0] + "_" + (parseInt(r[1]) + 1);
        }
        this.cols[k.trim()] = {index: q, title: h.trim(), width: p.trim(), sortCol: l.trim(), sortDir: m.trim(), align: n.trim(), padding: ""};
    }
    this.el = Ft.be("dynTable" + (c ? " " + c : ""), b);
    g9(this.el, this);
    c = [];
    for (var t in this.cols)
        (b = this.cols[t]), c.push({html: b.title, attr: {"data-col": t, "data-sort-col": b.sortCol, "data-sort-asc": "A" == b.sortDir ? 1 : 0, "data-align": b.align}});
    this.el.append(Ft.Fj("th", c, {class: "headerRow"}));
    this.cA();
};
b7.prototype.an = function () {
    return this.el;
};
b7.prototype.b8 = function (a) {
    return a.replace(/ +/g, "_").toLowerCase();
};
b7.prototype.cA = function () {
    var a = this.el.attr("id"),
            b = [];
    if (a) {
        var c;
        for (c in this.cols) {
            var d = this.cols[c];
            var e = "";
            var f = "#" + a + " tr td:nth-child(" + (d.index + 1) + "),#" + a + " tr th:nth-child(" + (d.index + 1) + ")";
            d.width && (e += "width:" + d.width + ";");
            d.padding && (e += "padding:" + d.padding + ";");
            "L" != d.align && (e += "text-align:" + ("R" == d.align ? "right" : "center") + ";");
            e && b.push(f + "{" + e + "}");
        }
        if (b.length)
            return aH.mB("styleT" + a.substr(1, a.length - 1), b.join("")), this;
    } else
        Pn("refresh requires id for table!");
};
b7.prototype.cD = function (a, b) {
    if ((a = this.cols[this.b8(a)]))
        (a.padding = b), this.cA();
    return this;
};
b7.prototype.cE = function (a, b) {
    a = Object.keys(this.cols)[a - 1];
    if ((a = this.cols[a]))
        (a.padding = b), this.cA();
    return this;
};
b7.prototype.appendTo = function (a) {
    this.el.appendTo(a);
    return this;
};
b7.prototype.cB = function (a) {
    Ft.gT(this.el);
    this.el.append(Ft.Fj("td", [{html: a, attr: {colspan: Object.keys(this.cols).length}}]));
    return this;
};
b7.prototype.b9 = function (a) {
    Ft.gT(this.el);
    for (var b, c, d, e, f = 0; f < a.length; f++) {
        b = a[f];
        c = b[0];
        b = 1 < b.length ? b[1] : [];
        e = {};
        for (var g in this.cols)
            (d = this.cols[g]), d.sortCol && b.length > d.index && void 0 === e["data-" + d.sortCol] && (e["data-" + d.sortCol] = b[d.index]);
        this.el.append(Ft.Fj("td", c, e));
    }
    return this;
};
b7.gV = function (a, b) {
    var c = function (b, c) {
        b.attr("title", "Sort by '" + (b.attr("title") ? b.attr("title") : b.text()) + "'").on("click", function () {
            var d = 1 == b.attr("data-sort-asc") ? 0 : 1;
            a.data("sort-col", c).find("th").removeClass("activeSort");
            b.attr("data-sort-asc", d).addClass("activeSort");
            aH.Da(a, d, c);
            aH.TW(a);
        });
    };
    a.find("th").each(function () {
        var a = $(this),
                b = a.data("sort-col");
        b && c(a, b);
    });
    a.addClass("sortable")
            .data("sort-col", b)
            .find("th[data-sort-col='" + b + "']")
            .addClass("activeSort");
};
b7.LA = function (a, b) {
    a.is(".sortable") || b7.gV(a, b);
    b = a.data("sort-col");
    var c = 1 == a.find("th[data-sort-col='" + b + "']").attr("data-sort-asc");
    a.hide();
    aH.Da(a, c, b);
    aH.TW(a);
    a.show();
    return this;
};
b7.TN = function (a) {
    var b = function (b) {
        var c = b.val().toLowerCase().trim(),
                e = b.parent().data("filter-cols").split(","),
                f = !1;
        a.find("tr:not(.headerRow)").each(function () {
            var a = $(this),
                    b = !c;
            if (c)
                for (var d = 0; d < e.length; d++) {
                    var l = a.data(e[d]).toLowerCase();
                    if (-1 != l.indexOf(c)) {
                        b = !0;
                        break;
                    }
                }
            b && (f = !f);
            a[b ? "removeClass" : "addClass"]("hidden");
            a[f ? "removeClass" : "addClass"]("odd");
        });
    };
    a.addClass("filterable")
            .find(".filterRow input")
            .on("input change", function () {
                var a = $(this);
                b(a);
            });
};
b7.Jw = function (a) {
    a.is(".filterable") || b7.TN(a);
    a.find(".filterRow input:first").trigger("change");
    return this;
};
var ZZ = function (a, b) {
    var c = this;
    this.RV = a;
    this.ZU = 0;
    this.Ue = this.ZV = null;
    this.width = T5(b.width, "100%");
    this.minValue = T5(b.minValue, 0);
    this.maxValue = T5(b.maxValue, 100);
    this.value = T5(b.value, 100);
    this.showLabel = T5(b.showLabel, !0);
    this.bu = T5(b.onSlide, null);
    var d = Ft.R4("hSlider ui-widget-content"),
            e = Ft.R4("hSliderHandle"),
            f = function () {
                var a = c.ZU;
                a = c.ZS() + a;
                a = Math.max(0, a);
                a = Math.min(100, a);
                c.ZX(a);
            },
            g = function () {
                c.ZV && clearInterval(c.ZV);
            };
    g9(d, this);
    d.on("mousedown", function (a) {
        var b = d.offset();
        c.aM(c.ZY(a.clientX - b.left - e.outerWidth(!0) / 2));
        b = new MouseEvent("mousedown", {screenX: a.screenX, screenY: a.screenY, clientX: a.clientX, clientY: a.clientY});
        e[0].dispatchEvent(b);
        a.stopPropagation();
        a.preventDefault();
    });
    e.attr("tabindex", 0)
            .on("keydown", function (a) {
                var b = a.which;
                if ((b = b == gE.gN || b == gE.gP ? -1 : b == gE.gO || b == gE.gQ ? 1 : 0))
                    (c.ZU = b),
                            g(),
                            f(),
                            (c.ZV = setInterval(function () {
                                return f();
                            }, 200)),
                            a.stopPropagation(),
                            a.preventDefault();
            })
            .on("keyup", function (a) {
                a = a.which;
                if (a == gE.gN || a == gE.gP || a == gE.gO || a == gE.gQ)
                    (c.ZU = 0), g();
            })
            .on("focus mousedown", function () {
                e.addClass("ui-state-focus");
                $(document).on("mouseup.ZZ", function (a) {
                    a.target != e[0] && e.blur();
                    $(document).off("mouseup.ZZ");
                });
            })
            .on("blur", function () {
                g();
                e.removeClass("ui-state-focus");
            });
    d.append(e);
    e.draggable({
        axis: "x",
        containment: d,
        drag: function (a, b) {
            c.Ue && clearTimeout(c.Ue);
            c.Ue = setTimeout(function () {
                var a = c.ZR();
                c.onSlide(a);
            }, 10);
        },
    });
    this.div = d;
    this.ZO = e;
    a.append(d);
    this.setSize(this.width);
    this.aM(this.value);
};
ZZ.prototype.ZP = function () {
    var a = this.div.innerWidth();
    a || (a = this.RV.innerWidth());
    return a - this.ZO.outerWidth();
};
ZZ.prototype.ZQ = function (a) {
    var b = this.ZP();
    return Math.floor((a / this.maxValue) * b);
};
ZZ.prototype.ZY = function (a) {
    var b = this.ZP();
    return this.Za((a / b) * this.maxValue);
};
ZZ.prototype.ZR = function () {
    return this.ZY(parseFloat(this.ZO.css("left")));
};
ZZ.prototype.bt = function () {
    return this.value;
};
ZZ.prototype.aM = function (a) {
    a = Math.min(this.maxValue, a);
    a = Math.max(0, a);
    this.ZO.css("left", this.ZQ(a) + "px");
    this.onSlide(a);
};
ZZ.prototype.setSize = function (a) {
    this.div.css("width", a);
    a = this.div.width();
    var b = Math.floor(a);
    0 != a - b && this.div.css("width", b + "px");
};
ZZ.prototype.resize = function () {
    this.setSize(this.width);
};
ZZ.prototype.ZS = function (a) {
    a = T5(a, this.value);
    a = Math.ceil((this.ZQ(a) / this.ZP()) * 100);
    return Math.min(100, a);
};
ZZ.prototype.ZX = function (a) {
    this.aM(0.01 * a * this.maxValue);
};
ZZ.prototype.ZT = function () {
    this.showLabel && this.ZO.text(this.ZS() + "%");
};
ZZ.prototype.Za = function (a) {
    a < this.minValue ? (a = this.minValue) : a > this.maxValue && (a = this.maxValue);
    return a;
};
ZZ.prototype.onSlide = function (a) {
    this.value = a;
    this.ZT();
    this.bu && this.bu(a);
};
var gt = function (a, b) {
    eN.call(this, "div", "qSelect qNoSelect", a, b);
    var c = this;
    b = this.Io;
    var d = "",
            e = moment();
    bV(a, "menuWidth", "parent");
    bV(a, "menuHeight", "308px");
    bV(a, "items", []);
    var f = [gE.gN, gE.gO, gE.gJ, gE.gK, gE.gI];
    b.on("click", function (a) {
        c.e7() && (a.stopPropagation(), c.gv());
    })
            .on("mousedown", function (a) {
                c.e7() ? a.stopPropagation() : a.preventDefault();
            })
            .on("blur.qSelect", function () {
                return c.gx();
            })
            .on("keydown", function (a) {
                c.e7() && -1 < f.indexOf(a.which) && (a.stopPropagation(), a.preventDefault());
            })
            .on("keyup", function (a) {
                if (c.e7()) {
                    a.stopPropagation();
                    a.preventDefault();
                    a = a.which;
                    var b = 0;
                    a == gE.gN ? (b = -1) : a == gE.gO ? (b = 1) : a == gE.gJ || a == gE.gK ? c.gv() : a == gE.gI && c.gx();
                    if (b)
                        c.g5(b);
                    else if (a == gE.gM)
                        c.g2("") && (c.gx(), c.aM(""));
                    else if (65 <= a && 91 >= a && ((b = moment()), 1 < b.diff(e, "seconds") && (d = ""), (d += T7.Fa(a)), (e = b), 1 < d.length))
                        for (a = 0; a < c.hL.length; a++)
                            if (c.hL[a].text.toUpperCase().startsWith(d)) {
                                c.aM(c.hL[a].value);
                                break;
                            }
                }
            });
    this.gu = Ft.Fi("ul", "qSelectMenu").on("blur.qSelectMenu", function () {
        return c.gx();
    });
    this.hH = Ft.eU("qSelectMenuText");
    b.append(this.hH, Ft.eU("qSelectMenuIcon", "", "&#9662;"));
    this.g4(a.items);
};
$jscomp.inherits(gt, eN);
gt.prototype.fu = function (a) {
    this.hH.html(a);
};
gt.prototype.g4 = function (a) {
    var b = this,
            c = [],
            d = null,
            e = -1,
            f = -1;
    this.gu.empty();
    for (var g = {}, h = 0; h < a.length; g = {$jscomp$loop$prop$isMenuItem$362: g.$jscomp$loop$prop$isMenuItem$362, $jscomp$loop$prop$item$363: g.$jscomp$loop$prop$item$363}, h++) {
        g.$jscomp$loop$prop$item$363 = a[h];
        g.$jscomp$loop$prop$isMenuItem$362 = !g.$jscomp$loop$prop$item$363.isGroup;
        void 0 === g.$jscomp$loop$prop$item$363.value && (g.$jscomp$loop$prop$item$363.value = g.$jscomp$loop$prop$item$363.text);
        g.$jscomp$loop$prop$isMenuItem$362 ? (e++, c.push(g.$jscomp$loop$prop$item$363), d || (d = g.$jscomp$loop$prop$item$363)) : f++;
        var k = Ft.SB(g.$jscomp$loop$prop$item$363.text, {
            class: g.$jscomp$loop$prop$isMenuItem$362 ? "qSelectMenuItem" : "qSelectMenuGroup",
            "data-value": void 0 !== g.$jscomp$loop$prop$item$363.value ? g.$jscomp$loop$prop$item$363.value : g.$jscomp$loop$prop$item$363.text,
            "data-index": g.$jscomp$loop$prop$isMenuItem$362 ? e : -1,
            "data-group": f,
        })
                .data("item", g.$jscomp$loop$prop$item$363)
                .on("mousedown", function (a) {
                    a.stopPropagation();
                    a.preventDefault();
                })
                .on(
                        "mouseup",
                        (function (a) {
                            return function (c) {
                                a.$jscomp$loop$prop$isMenuItem$362 && !b.g2(a.$jscomp$loop$prop$item$363.value).is(".qDisabled") && (b.aM(a.$jscomp$loop$prop$item$363.value), b.gx());
                            };
                        })(g)
                        );
        this.gu.append(k);
    }
    this.hL = c;
    a = null !== this.value ? this.value : d ? d.value : null;
    null !== a && (this.aM(a, !1), this.eI(a));
    return this;
};
gt.prototype.gv = function () {
    this[this.gu.is(":visible") ? "gx" : "gw"]();
    return this;
};
gt.prototype.gw = function () {
    var a = this.Io.offset(),
            b = a.left + "px";
    a = a.top + this.Io.outerHeight() + 1 + "px";
    var c = "parent" == this.options.menuWidth ? this.Io.outerWidth() : this.options.menuWidth;
    this.gu.detach().css({top: a, left: b, width: c, "max-height": this.options.menuHeight}).appendTo(aH.W5()).focus();
    this.eI(this.bt());
    return this;
};
gt.prototype.gx = function () {
    this.gu.detach();
    return this;
};
gt.prototype.g2 = function (a) {
    a = this.gu.find(".qSelectMenuItem[data-value='" + a + "']");
    return a.length ? a : null;
};
gt.prototype.hG = function (a) {
    return (a = this.g2(a)) ? a.data("item") : null;
};
gt.prototype.hd = function (a, b) {
    if ((a = this.g2(a)))
        a[b ? "removeClass" : "addClass"]("qDisabled");
    return this;
};
gt.prototype.g3 = function (a) {
    var b = this.gu;
    if (b[0].scrollHeight) {
        var c = b.scrollTop(),
                d = b.height(),
                e = a.position().top + c,
                f = a.outerHeight(),
                g = -1;
        e + f > c + d ? (g = e) : e < c && (g = e);
        -1 != g && b.scrollTop(g);
    }
    b.find(".qActive").removeClass("qActive");
    a.addClass("qActive");
    return this;
};
gt.prototype.g5 = function (a) {
    this.gu.is(":visible") || this.gw();
    var b = this.hL,
            c = this.gu.find(".qActive");
    c = c.length ? c.data("index") + a : 0;
    if (0 <= c && c < b.length) {
        b = b[c].value;
        c = this.g2(b);
        if (!c)
            return;
        c.is(".qDisabled") ? this.g5(0 < a ? a + 1 : a - 1) : this.aM(b);
    }
    return this;
};
gt.prototype.eI = function (a) {
    eN.prototype.eI.call(this, a);
    var b = this.g2(a);
    b ? (this.fu(b.html()), this.gu.is(":visible") && this.g3(b)) : (Pn("item not found", a, this), this.hL.length && this.aM(this.hL[0].value, !1));
};
gt.gy = function (a, b) {
    b = T5(b, {});
    b.items = [];
    b.id = a.attr("id");
    a.find("option").each(function () {
        var a = $(this),
                c = a.html();
        a = a.attr("value");
        b.items.push({text: c, value: a ? a : c});
    });
    a.outerWidth() && (b.width = a.outerWidth());
    var c = new gt(b);
    a.replaceWith(c.an());
    void 0 !== a.attr("disabled") && c.e8(!1);
    return c;
};
var fI = function (a, b) {
    eN.call(this, "div", "qTabs qHideFocus clearfix", a, b);
    var c = this;
    b = this.Io;
    var d = T5(a.type, "horizontal");
    b.addClass("q" + T7.DR(d));
    var e = Ft.R4("qTabsNav qNoSelect clearfix"),
            f = Ft.R4("qTabsContent");
    b.append(e, f).on("keydown", function (a) {
        if (a.target == c.Io[0]) {
            var b = a.which;
            if (b == gE.gN || b == gE.gP)
                var d = -1;
            else if (b == gE.gO || b == gE.gQ)
                d = 1;
            d && (0 < d ? c.gF(1) : c.gG(1), a.stopPropagation(), a.preventDefault());
        }
    });
    this.tabs = [];
    this.fH = d;
    this.fM = e;
    this.fN = f;
    this.activeTab = null;
    this.gH = !1;
    this.MI = T5(a.MI, null);
    this.fP = T5(a.fP, null);
};
$jscomp.inherits(fI, eN);
fI.prototype.fQ = function () {
    return this.fM;
};
fI.prototype.fJ = function () {
    return "vertical" == this.fH;
};
fI.prototype.getActiveTab = function () {
    return this.activeTab;
};
fI.prototype.gk = function () {
    var a = this.getActiveTab();
    return a ? this.fc(a) : "";
};
fI.prototype.fh = function () {
    var a = this.getActiveTab();
    return a ? this.fg(a) : -1;
};
fI.prototype.fb = function (a) {
    return a.data("tab_div");
};
fI.prototype.fa = function (a, b) {
    a.data("tab_div", b);
};
fI.prototype.fZ = function (a, b) {
    (a = this.fb(a)) && a.html(b);
    return this;
};
fI.prototype.fW = function (a, b) {
    (a = this.fO(a)) && this.fZ(a, b);
    return this;
};
fI.prototype.gZ = function (a, b) {
    (a = this.fO(a)) && a.text(b);
    return this;
};
fI.prototype.fc = function (a) {
    return a.data("tab_id");
};
fI.prototype.fd = function (a, b) {
    return a.data("tab_id", b);
};
fI.prototype.fg = function (a) {
    for (var b = 0; b < this.tabs.length; b++)
        if (this.fc(this.tabs[b]) == this.fc(a))
            return b;
    return -1;
};
fI.prototype.fO = function (a) {
    for (var b = 0; b < this.tabs.length; b++)
        if (this.fc(this.tabs[b]) == a)
            return this.tabs[b];
    return null;
};
fI.prototype.fV = function (a) {
    return a >= this.tabs.length ? null : this.tabs[a];
};
fI.prototype.fX = function (a) {
    return (a = this.fV(a)) ? this.fb(a) : null;
};
fI.prototype.fK = function (a, b) {
    var c = this;
    if (!a.is(".qActive") && !a.is(".qDisabled"))
        if (this.gH)
            this.gS && clearTimeout(this.gS),
                    (this.gS = setTimeout(function () {
                        return c.fK(a, b);
                    }, 800));
        else {
            var d = this.fM.children(".qTab.qActive"),
                    e = this.fb(a),
                    f = e.attr("id");
            this.activeTab = a;
            this.gH = !0;
            d.removeClass("qActive");
            a.addClass("qActive");
            if ((b = T5(b, !0))) {
                this.fP && this.fP(e, f);
                var g = a.data("on_before_select");
                g && g(e, f);
            }
            var h = function () {
                if (b) {
                    c.MI && c.MI(e, f);
                    var d = a.data("on_select");
                    d && d(e, f);
                }
                c.gH = !1;
            };
            g = function () {
                e.hide().fadeIn(400, h);
            };
            d.length ? ((d = this.fb(d)) ? d.fadeOut(200, g) : g()) : g();
        }
};
fI.prototype.fR = function (a, b) {
    (a = this.fO(a)) && this.fK(a, b);
};
fI.prototype.fS = function (a, b) {
    (a = this.fV(a)) && this.fK(a, b);
};
fI.prototype.gF = function (a) {
    var b = this.fh() + a;
    b > this.tabs.length - 1 || ((b = this.tabs[b]), b.is(".qDisabled") ? this.gF(a + 1) : this.fK(b));
};
fI.prototype.gG = function (a) {
    var b = this.fh() - a;
    0 > b || ((b = this.tabs[b]), b.is(".qDisabled") ? this.gG(a + 1) : this.fK(b));
};
fI.prototype.fL = function (a) {
    var b = this,
            c = Ft.R4("qTab", "", a.title),
            d = Ft.R4("qTabContent");
    a.id && d.attr("id", a.id);
    a.cls && d.addClass(a.cls);
    a.clsTab && c.addClass(a.clsTab);
    a.width && d.css("width", a.width);
    a.height && d.css("height", a.height);
    a.content && d.append(a.content);
    a.gn && c.css("width", a.gn);
    c.on("click", function () {
        return b.fK(c);
    });
    c.data("on_select", a.gp);
    c.data("on_before_select", a.go);
    this.fd(c, a.id);
    this.fa(c, d);
    this.tabs.push(c);
    this.fM.append(c);
    this.fN.append(d);
    d.hide();
    this.activeTab || this.fK(c, !1);
    return this;
};
fI.prototype.gj = function (a, b) {
    for (var c = 0; c < a.length; c++)
        b && (a[c].gp = b), this.fL(a[c]);
    return this;
};
var eH = function (a, b) {
    a = T5(a, {});
    a.focusable = !1;
    eN.call(this, "div", "qToggleButtons qNoSelect", a, b);
    var c = this;
    b = this.Io;
    var d = a.buttons
            ? a.buttons
            : [
                {value: 1, text: "Yes", id: "", title: ""},
                {value: 0, text: "No", id: "", title: ""},
            ];
    a = T5(a.value, d[0].value);
    for (var e = 100, f = e / d.length, g, h = {}, k = 0; k < d.length; h = { $jscomp$loop$prop$btn$30$365: h.$jscomp$loop$prop$btn$30$365 }, k++)
        (h.$jscomp$loop$prop$btn$30$365 = d[k]),
                (g = Math.min(e, h.$jscomp$loop$prop$btn$30$365.width ? h.$jscomp$loop$prop$btn$30$365.width : f)),
                (e -= g),
                (g = Ft.R7(
                        "qToggleButton",
                        h.$jscomp$loop$prop$btn$30$365.id,
                        h.$jscomp$loop$prop$btn$30$365.text,
                        h.$jscomp$loop$prop$btn$30$365.title,
                        (function (a) {
                            return function () {
                                return c.eK(a.$jscomp$loop$prop$btn$30$365);
                            };
                        })(h)
                        )
                        .attr("data-value", h.$jscomp$loop$prop$btn$30$365.value)
                        .css("width", k < d.length - 1 ? "calc(" + g + "% - 1px)" : g + "%")),
                b.append(g);
    this.buttons = d;
    this.aM(a);
};
$jscomp.inherits(eH, eN);
eH.prototype.eK = function (a) {
    this.e7() && this.aM(a.value);
};
eH.prototype.aM = function (a) {
    for (var b = null, c, d = 0; d < this.buttons.length; d++)
        if (((c = this.buttons[d]), c.value === a)) {
            b = c;
            break;
        }
    b ? (this.Io.find(".qToggleButton.qActive").removeClass("qActive"), this.Io.find(".qToggleButton[data-value='" + b.value + "']").addClass("qActive"), eN.prototype.aM.call(this, a)) : Pn("[!] value not found", a, this);
};
eH.prototype.e8 = function (a) {
    eN.prototype.e8.call(this, a);
    this.Io.find(".qToggleButton").each(function () {
        var b = $(this);
        aH.NE(b, a);
    });
    return this;
};
var dt = function (a, b) {
    this.de(a);
    this.ao(b);
    this.dl = [];
};
dt.prototype.dd = function () {
    return this.themeId;
};
dt.prototype.de = function (a) {
    this.themeId = a;
};
dt.prototype.Xx = function () {
    return this.themeTitle;
};
dt.prototype.ao = function (a) {
    this.themeTitle = a;
};
dt.prototype.getDefinition = function (a) {
    for (var b = this.dl, c = 0; c < b.length; c++)
        if (b[c].dd() == a)
            return b[c];
    return null;
};
dt.prototype.df = function (a) {
    if (a) {
        for (var b = [], c = this.dl, d = 0; d < c.length; d++)
            c[d].TI(!1) == a && b.push(c[d]);
        return b;
    }
    return this.dl;
};
dt.prototype.dg = function (a, b, c, d, e) {
    a = new ds(!0, b, c, d, e);
    if (aI.Dd(d)) {
        d = d.trim();
        d.startsWith("#") ? (d = T7.Mb(d, 1, !0)) : d.startsWith("rgb") ? (d = T7.d5(d)) : -1 < d.indexOf("px") && (d = parseInt(d.replace("px", "")));
        if (!d) {
            Pn("[!] invalid definition", a.dd(), a.bt());
            return;
        }
        a.aM(d);
    }
    this.dl.push(a);
};
dt.prototype.di = function (a, b, c, d) {
    this.dg(a, dw, b, c, d);
};
dt.prototype.dj = function (a, b, c, d) {
    this.dg(a, dy, b, c, d);
};
dt.prototype.dk = function (a, b, c, d) {
    this.dg(a, dx, b, c, d);
};
var dr = function () {};
dr.md = function (a, b, c) {
    var d = "";
    if (aI.Dd(c))
        if (c.startsWith(d1)) {
            d = c.replace(d1, "");
            a = a.getDefinition(d);
            if (!a)
                return Pn("[!] definition not found", c), "";
            d = "var(--" + a.dd() + ")";
        } else
            c.startsWith("var(") && (d = c);
    else if (b == dw)
        d = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")";
    else if (b == dy)
        d = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")";
    else if (b == dz)
        d = c + "px";
    else if (b == dx) {
        d = "linear-gradient(to " + c.dir + ",";
        b = c.stops;
        for (var e, f, g = 0; g < b.length; g++) {
            e = b[g];
            if (2 != e.length) {
                Pn("[!] invalid definition", def.dd(), c);
                return;
            }
            e = b[g][0];
            f = b[g][1];
            e.startsWith(d1) && (e = dr.md(a, "", e));
            d += e + " " + f + (g < b.length - 1 ? "," : "");
        }
        d += ")";
    }
    return d;
};
dr.du = function (a, b) {
    var c = b.TI(!1);
    a = dr.md(a, c, b.bt(!1));
    aH.Kj("--" + b.dd(), a);
};
dr.dv = function (a) {
    for (var b = 0; b < a.dl.length; b++)
        dr.du(a, a.dl[b]);
};
dr.Ls = function (a) {
    var b = function (b, c) {
        c = a.df(c);
        for (var d = 0; d < c.length; d++) {
            var e = b,
                    f = c[d],
                    l = Ft.R4("textBox").css({width: "100%", height: "50px", "margin-bottom": "2px"}).html(f.dd()),
                    m = dr.md(a, f.TI(!1), f.bt(!1));
            f = Ft.R4().css({float: "right", width: "50%", height: "100%"}).text(m);
            m = Ft.R4().css({float: "left", width: "28px", height: "28px", "margin-right": "15px", background: m});
            l.append(f, m);
            e.append(l);
        }
    },
            c = function (a) {
                var c = a.attr("id"),
                        d;
                "themeBuilderAllTypes" == c ? (d = null) : "themeBuilderGradients" == c ? (d = dx) : "themeBuilderBackgrounds" == c ? (d = dy) : "themeBuilderColors" == c && (d = dw);
                a.empty();
                b(a, d);
            },
            d = ak()
            .gi({id: "themeBuilderTabs", height: "100%"})
            .gj([
                {id: "themeBuilderAllTypes", title: "All Types", gp: c},
                {id: "themeBuilderGradients", title: "Gradients", gp: c},
                {id: "themeBuilderBackgrounds", title: "Backgrounds", gp: c},
                {id: "themeBuilderColors", title: "Colors", gp: c},
            ]);
    D4.JO(d.an(), {
        title: "Edit Theme: " + a.dd(),
        width: 960,
        height: aH.eB(0.8),
        resizable: !0,
        open: function (a) {
            b(d.find("#themeBuilderAllTypes"));
        },
        resize: function () {},
    });
};
dw = "c";
dx = "g";
dy = "b";
dz = "p";
d0 = "d";
d1 = ":";
var ds = function (a, b, c, d, e) {
    e = T5(e, c);
    this.setFixed(a);
    this.TJ(b);
    this.de(c);
    this.aM(d);
    this.ao(e);
};
ds.prototype.isFixed = function () {
    return this.dq;
};
ds.prototype.setFixed = function (a) {
    this.dq = a;
};
ds.prototype.TI = function (a) {
    if (a) {
        for (a = this; "def" == a.TI(); )
            a = a.bt();
        return a;
    }
    return this.dm;
};
ds.prototype.TJ = function (a) {
    this.dm = a;
};
ds.prototype.dd = function () {
    return this.dn;
};
ds.prototype.de = function (a) {
    this.dn = a;
};
ds.prototype.Xx = function () {
    return this.dp;
};
ds.prototype.ao = function (a) {
    this.dp = a;
};
ds.prototype.bt = function (a) {
    var b = this.dm;
    return a && "def" == b ? this.defValue.bt(!0) : this.defValue;
};
ds.prototype.aM = function (a) {
    this.defValue = a;
};
var D = {l: ""};
D.r = new aF();
D.X = new Im(D.r);
D.m = new If();
D.T = new fr();
var fv = function (a, b) {
    return D.T.ft("us", a, b);
},
        Qi = "uc.",
        at = function () {};
at.set = function (a, b, c) {
    D.X.set(Qi + a + "." + b, c);
    at.Qk(a);
};
at.Qk = function (a) {
    D.X.set(Qi + a + ".last_change", moment.utc().unix());
};
at.get = function (a, b, c) {
    return D.X.get(Qi + a + "." + b, c);
};
at.SL = function (a, b, c) {
    return parseInt(at.get(a, b, c));
};
at.SM = function (a, b, c) {
    return parseFloat(at.get(a, b, c));
};
at.Jp = function (a, b, c) {
    return D.X.Jp(Qi + a + "." + b, c);
};
at.Qg = function () {
    for (var a, b, c = [], d = D.X.Jo(), e = 0; e < d.length; e++)
        ((a = d[e]), !a.startsWith(Qi) || ((a = a.split(".")), 2 > a.length || ((a = a[1]), -1 < c.indexOf(a) || !(b = at.SL(a, "last_change", 0))))) ||
                (7 < moment.utc().diff(moment.unix(b).utc(), "days") && D.X.Qh(Qi + a + "."), c.push(a));
};
var Qb = "ua.";
D.L = {
    updated: [],
    queue: [],
    invalid: [],
    Fo: !1,
    aA: null,
    Jd: function (a) {
        return (a = D.L.get(a, "ut", 0)) ? moment.utc() >= moment.unix(a).utc() : !0;
    },
    get: function (a, b, c) {
        return D.X.get(Qb + a + "." + b, c);
    },
    Qj: function (a) {
        return D.L.get(a, "rep", !1);
    },
    set: function (a, b, c) {
        b = parseInt(String(D.Q.Ah(b)).split(".")[0]);
        D.X.set(Qb + a + ".rep", b);
        D.X.set(Qb + a + ".ut", c);
        return b;
    },
    Jg: function (a) {
        var b = moment.utc(),
                c = moment.utc(a.last_root_post);
        a = moment.utc(a.last_post);
        a = a > c ? a : c;
        c = !a || 1970 >= a.year();
        a = b.diff(a, "days");
        return b.add(c || 90 < a ? 7 : 7 < a ? 3 : 1, "days").unix();
    },
    gq: function (a) {
        a = a.toLowerCase();
        -1 == D.L.updated.indexOf(a) && -1 == D.L.queue.indexOf(a) && (D.L.Jd(a) ? (D.L.queue.push(a), D.L.queue.length && (!D.L.aA || 3 <= moment().diff(D.L.aA, "seconds")) && D.L.refresh()) : D.L.updated.push(a));
    },
    JT: function (a, b, c) {
        -1 == D.L.invalid.indexOf(b)
                ? (a.find(".uNameText").text() != b && a.find(".uNameText").text(b),
                        a.is(".noRep") || (a.addClass("updated"), a.find(".uRep").length ? a.find(".uRep").data("rep", c).text(String(c)) : a.append(Ft.GB("span", {class: "uRep", "data-rep": c}, String(c)))))
                : D.L.NZ(a);
    },
    NZ: function (a) {
        a.addClass("updated").addClass("invalid").css("color", "#f00").attr("title", "Invalid account");
        a = a.parents(".recentPost");
        a.length && g8(a).YB("data").Lk();
    },
    JU: function (a, b) {
        -1 == D.L.updated.indexOf(a) && D.L.updated.push(a);
        var c,
                d = -1 < D.L.invalid.indexOf(a);
        d || (c = D.L.set(a, b.reputation, D.L.Jg(b)));
        aI.Le(D.L.queue, a);
        a != D.l &&
                $(".uName[data-name='" + a + "']:not(.updated)").each(function () {
            var b = $(this);
            d ? D.L.NZ(b) : D.L.JT(b, a, c);
        });
    },
    Ld: function (a) {
        aI.Lm(D.L.invalid, a);
        aI.Lm(D.L.updated, a);
        aI.Le(D.L.queue, a);
        D.L.JU(a);
        $(".uName[data-name='" + a + "']:not(.updated)").each(function () {
            var a = $(this);
            D.L.NZ(a);
        });
    },
    Qg: function () {
        for (var a, b, c = D.X.Jo(), d = 0; d < c.length; d++)
            (b = c[d]), b.startsWith(Qb) && ((a = b.split(".")), 3 == a.length && ((a = a[1]), D.L.Jd(a) && D.X.remove(b)));
        D.L.refresh();
    },
    refresh: function () {
        if (!D.L.Fo && 1 == D.G.get(JP)) {
            var a = Math.min(250, D.L.queue.length);
            if (a) {
                D.L.Fo = !0;
                D.L.aA = moment();
                for (var b = [], c = [], d, e = 0; e < a; e++)
                    (d = D.L.queue[e]), -1 == D.L.invalid.indexOf(d) ? b.push(d) : c.push(d);
                for (a = 0; a < c.length; a++)
                    D.L.Ld(c[a]);
                b.length
                        ? D.S.Cq(
                                b,
                                function (a) {
                                    for (var b = 0; b < a.length; b++)
                                        D.L.JU(a[b].name, a[b]);
                                    D.L.Fo = !1;
                                    D.L.queue.length &&
                                            setTimeout(function () {
                                                return D.L.refresh();
                                            }, 3e3);
                                },
                                function (a) {
                                    if (a && aI.Qc(a) && a.length)
                                        for (var b = 0; b < a.length; b++)
                                            D.L.Ld(a[b]);
                                    D.L.Fo = !1;
                                    setTimeout(function () {
                                        return D.L.refresh();
                                    }, 3e3);
                                }
                        )
                        : (D.L.Fo = !1);
            }
        }
    },
};
var cL = "p",
        cM = "pa",
        cN = "[keychain]",
        cO = "[steemconnect]",
        as = function () {};
as.cQ = function (a) {
    var b = [F2, K8];
    return 1 == D.G.get(Tl) && -1 < b.indexOf(a);
};
as.cK = function (a) {
    return a.substr(0, 1).toLowerCase();
};
as.prototype.a1 = function () {
    return D.G.get(bR, !0);
};
as.prototype.a2 = function (a) {
    D.G.set(bR, a, !0);
    (D.l = a) && this.bT(a);
};
as.prototype.bH = function (a) {
    var b = "" != (D.s.kQ() ? D.l : this.a1());
    a && !b && D4.D9("Please sign in to use this feature!");
    return b;
};
as.prototype.ga = function (a, b) {
    this.bH(!0) ? a() : b && b();
};
as.prototype.i8 = function () {
    var a = D.G.get(bR, !1),
            b = D.G.get(bR, !0);
    return a != b;
};
as.prototype.bS = function () {
    var a = D.G.get(bQ, !0);
    return a ? JSON.parse(a) : [];
};
as.prototype.bT = function (a) {
    var b = this.bS();
    -1 < b.indexOf(a) || (b.push(a), b.sort(), D.G.set(bQ, JSON.stringify(b), !0));
};
as.prototype.CW = function (a, b, c, d) {
    var e = as.cK(b);
    b = at.get(a, cL + e, "");
    a = at.get(a, cM + e, "");
    if (b && a)
        if ((b = T7.DU(D.m.Qm(b), !0)) && b.keyStr && b.ivStr) {
            var f = D.m.Cc(a),
                    g = D.m.Cc(b.ivStr);
            D.m.CZ(b.keyStr, function (a) {
                return D.m.QQ(f, a, g, c);
            });
        } else
            d();
    else
        d();
};
as.prototype.cJ = function (a, b, c, d, e, f) {
    D.m.QP(c, d, e, function (c) {
        at.set(a, cM + b, D.m.Cb(new Uint8Array(c)));
        f();
    });
};
as.prototype.QR = function (a, b, c, d) {
    var e = this;
    D.m.QR(function (f) {
        var g = f[0],
                h = f[1];
        D.m.CY(g, function (f) {
            f = {keyStr: f, ivStr: D.m.Cb(h)};
            at.set(a, cL + b, D.m.Ql(JSON.stringify(f)));
            e.cJ(a, b, c, g, h, d);
        });
    });
};
as.prototype.CX = function (a, b, c, d) {
    var e = this,
            f = as.cK(b);
    if ((b = at.get(a, cL + f, ""))) {
        if ((b = T7.DU(D.m.Qm(b), !0)) && b.keyStr && b.ivStr) {
            var g = D.m.Cc(b.ivStr);
            g
                    ? D.m.CZ(b.keyStr, function (b) {
                        e.cJ(a, f, c, b, g, d);
                    })
                    : e.QR(a, f, c, d);
        }
    } else
        e.QR(a, f, c, d);
};
as.prototype.Tk = function () {
    for (var a = [F2, K8], b, c = 0; c < a.length; c++)
        (b = as.cK(a[c])), D.X.Tm("." + cL + b), D.X.Tm("." + cM + b);
};
as.prototype.bb = function (a, b, c) {
    return a.startsWith("P5")
            ? (D4.EA(fv("master_pwd_hint"), "Warning", {paddingX: 10, paddingY: 10}), !1)
            : a.startsWith("STM")
            ? (D4.D9("Your Public Keys won't work here. You need to enter your Private Key!"), !1)
            : c
            ? ((c = D.p.getPublicKeys()), (a = b == F2 ? D.S.Th(a, c, !0) : b == K8 ? D.S.Ti(a, c) : b == F1 ? D.S.Tj(a, c, !1) : !0) || D4.D9("The given Private Key seems to be incorrect!"), a)
            : !0;
};
as.prototype.DL = function (a, b, c, d, e) {
    l1.DL(a, b, c, d, e);
};
as.prototype.bI = function (a) {
    var b = this,
            c = function (a) {
                b.a2(a);
                D.s.bJ(!0);
            },
            d = function () {
                D4.D9("Unable to login with KeyChain!");
                b.a2("");
                b.bI(a);
            },
            e = function (a, b) {
                a == cN ? b && D.S.bL(b, c, d) : c(b);
            };
    D.S.Oz(
            function () {
                return b.DL(F2, !1, !0, e);
            },
            function () {
                return b.DL(F2, !0, !0, e);
            }
    );
};
var ak = function () {};
ak.a5 = function () {
    var a = Ft.R4("", "divProfileImage"),
            b = Ft.R4("", "divProfileName"),
            c = Ft.R4("", "pageHeaderSignIn"),
            d = Ft.R7("", "btnSignIn", "Sign In...", "", function () {
                return D.t.bI();
            }),
            e = Ft.R7("", "btnSignOut", "Sign Out", "", function () {
                D.t.a2("");
                D.s.bJ(!1);
            });
    c.append(d, e, b, a);
    return (D.s.a4 = c);
};
ak.ai = function (a) {
    D.s.elemHeader && D.s.elemHeader.remove();
    var b = D.G.get(IF),
            c = Ft.Fi("header", "pagePanel qNoSelect", "pageHeader");
    c.append(
            Ft.GB("img", {id: "pageBanner", src: L8("res/img/steemworld-banner" + ("dark" == b ? "-dark" : "") + ".png"), alt: "HiveTasks Banner"}).on("click", function (a) {
        D.s.dO(i0, a.ctrlKey);
    }),
            ak.a5()
            )
            .hide()
            .insertBefore(D.s.cW);
    D.s.elemHeader = c;
    D.s.a3(a);
    c.fadeIn(500);
};
ak.b6 = function () {
    var a = Ft.R4("", "pageFooterTop"),
            b = Ft.R4("", "pageFooterContent"),
            c = function (a) {
                return Ft.GB("img", {class: a, src: L8("res/img/hive-logo-small.png"), alt: "Hive Logo"});
            };
    a.append(
            c("smallLogo right"),
            c("smallLogo left"),
            Ft.GB("span", {class: "left"}, "&copy; 2020 HiveTasks.com"),
            Ft.GB("span"),
            //Ft.GB("span", {class: "right"}, 'Built with &hearts; by <a id="creatorLink" href="https://steemit.com/@steemchiller" target="_blank">@steemchiller</a>')
            );
    b.append(Ft.GB("img", {id: "pageFooterContentImage", src: L8("res/img/other/feel-free.png"), alt: "Footer Image"}), fv("page_footer_text"));
    a = Ft.GB("footer", {id: "pageFooter", class: "mainPanel text clearfix"}).append(a, "<hr>", b);
    aH.W5().append(a);
    D.s.elemFooter = a;
};
ak.jk = function (a) {
    a = {
        onReady: a,
        "border-color": aH.IH("--loading-status-border"),
        "image-src":
                "data:image/png;base64,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",
    };
    D.s.jl = new cV($("#pageIntro"), a);
};
ak.Dc = function (a) {
    a = T7.DR(a.replace(/_/g, " "));
    -1 < a.indexOf("Lf ")
            ? (a = "")
            : ((a = a.replace("Sbd", "HBD")),
                    (a = a.replace("Steem", "HIVE")),
                    (a = a.replace("Mvests", "MVests")),
                    (a = a.replace("Csi", "CSI")),
                    (a = a.replace("Vp At 100", "VP ~> 100 %")),
                    (a = a.replace("Hf Info", "Current / Next HF")),
                    (a = a.replace("Rc", "RC")),
                    (a = a.replace("Json", "JSON")),
                    (a = a.replace("Sps", "HPS")),
                    (a = a.replace("Contractname", "contractName")),
                    (a = a.replace("Contractaction", "contractAction")),
                    (a = a.replace("Contractpayload", "contractPayload")));
    return a;
};
ak.DF = function (a, b, c) {
    b = T5(b, "");
    if ((c = T5(c, !1)) && D.l == a)
        return "";
    a = (MG() ? D.s.DP() + "?account=" : FE + "/@") + a;
    return Ft.Fh("a", {class: "accOpen" + (b ? " " + b : ""), href: a, target: "_blank", title: "Visit on HiveTasks"}, "<span/>");
};
ak.ju = function (a) {
    return Ft.Fi("button", "imageButton showVotesChart", "", Ft.eU(), {title: fv("show_votes_btn")})
            .button()
            .on("click", function (b) {
                b.preventDefault();
                Wj.B7(a.aw(), a.G0(), a);
            });
};
ak.ET = function (a, b, c, d, e) {
    if (!a)
        return "-";
    d = T5(d, !1);
    e = T5(e, !1);
    c = T5(c, !1);
    for (b = T5(b, !1); a.endsWith("."); )
        a = a.substring(0, a.length - 1);
    a = aJ.QD(a);
    d = Ft.Fh("a", {class: "accLink" + (b ? " simple" : ""), href: D.G.Y2() + "/@" + a, target: "_blank", title: "Visit on " + D.G.Zy()}, ak.Cz(a, d));
    b || (!e && a == D.l) || (d = c ? ak.DF(a, "left") + d : d + ak.DF(a));
    return d;
};
ak.CM = function (a) {
    var b = Ft.be("dataTable tableAccLinks");
    aJ.QE(a);
    for (var c = 0; c < a.length; c++)
        b.append(Ft.Fj("td", [ak.DF(a[c]), ak.ET(a[c], !0)]));
    return Ft.Fk(b);
};
ak.EU = function (a, b) {
    b = void 0 !== b && b;
    return ak.DF(a, "tab") + ak.ET(a, !0, !1, b);
};
ak.QM = function (a, b) {
    for (var c = Ft.be("dataTable simple autoWidth smallPad notBold noColor noPadding"), d, e, f = 0, g = 0; g < a.length; g++)
        0 == f && ((d = Ft.GB("tr")), c.append(d)), (e = Ft.GB("td")), e.append(a[g], T7.LJ(6)), d.append(e), f++, f >= b && (f = 0);
    return c[0].outerHTML;
};
ak.DY = function (a, b) {
    a.sort();
    aJ.QE(a);
    for (var c = [], d = 0; d < a.length; d++)
        c.push(ak.ET(a[d], !0, !1, !0));
    return ak.QM(c, b);
};
ak.Np = function (a, b) {
    aI.Qc(a) || (a = [a]);
    aJ.QE(a);
    b = [];
    for (var c = D.G.Y2() + "/trending/", d, e = 0; e < a.length; e++)
        (d = a[e]), b.push(Ft.R5(c + d, "#" + d, {target: "_blank"}));
    return ak.QM(b, 6);
};
ak.CN = function (a) {
    for (var b = [], c, d = 0; d < a.length; d++)
        (c = aJ.Ck(a[d])), c.startsWith("/") && (c = D.G.Y2() + c), b.push(Ft.R5(c, D.B.Jn(c), {target: "_blank"}));
    return ak.Bk(b, "simple autoWidth notBold noColor smallPad");
};
ak.hs = function (a) {
    a = MG() ? "?module=" + PB + "&author=" + a.author + "&permlink=" + a.category + "/" + a.permlink : a.url;
    return D.s.DP() + a;
};
ak.bs = function (a, b, c, d) {
    a = aJ.QD(a);
    b = aJ.QD(b);
    return '<a href="' + D.G.Y2() + "/@" + a + "/" + b + '" target="_blank"' + (void 0 !== d && d ? ' title="' + b + '"' : "") + ">" + (void 0 !== c ? c : b) + "</a>";
};
ak.IJ = function (a, b, c) {
    var d = D.P.Ts(a, b);
    d || (d = b);
    d = aJ.GT(d.replace(T1, " "), c);
    return ak.bs(a, b, d);
};
ak.Cz = function (a, b) {
    b = T5(b, !1);
    var c = D.L.Qj(a),
            d = Ft.GB("span", {class: "uName" + (b ? " noRep" : ""), "data-name": a}),
            e = "";
    b || !1 === c ? b || D.L.gq(a) : a != D.l && 1 == D.G.get(JP) && (e += Ft.Fh("span", {class: "uRep", "data-rep": c}, String(c)));
    d.html('<span class="uNameText">' + a + "</span>" + e);
    -1 < D.L.invalid.indexOf(a) && D.L.NZ(d);
    return d[0].outerHTML;
};
ak.Qo = function (a, b) {
    a = moment.utc(a);
    var c = Ft.GB("span", {class: "timeAgo", title: D.B.DE(a.clone().local())}, "time ago");
    c.data("time", a);
    void 0 !== b && c.addClass(b);
    return c;
};
ak.Qn = function () {
    var a = moment.utc(),
            b,
            c;
    $(".timeAgo").each(function () {
        b = $(this);
        (c = b.data("time")) && b.text(aG.DT(a, c, !0) + " ago");
    });
};
ak.Bk = function (a, b) {
    b = T5(b, "");
    b = Ft.be("dataTable" + (b ? " " + b : ""));
    for (var c = 0; c < a.length; c++)
        b.append(Ft.Fj("td", [a[c]]));
    return Ft.Fk(b);
};
ak.AN = function (a, b, c, d, e) {
    void 0 === c && (c = !1);
    void 0 === d && (d = !1);
    void 0 === b && (b = "");
    void 0 === e && (e = !0);
    var f,
            g,
            h = "";
    for (f in a) {
        var k = a[f];
        null != k
                ? e &&
                (b0.AP(f) && aI.Dd(k)
                        ? (k = ak.ET(k, !1, !1, d))
                        : "permlink" == f
                        ? (g = a.author ? a.author : a.creator) && (k = Ft.Fh("span", {class: "permlinkPreview", "data-author": g, "data-permlink": k}, ak.bs(g, k)))
                        : "parent_permlink" == f && a.parent_author
                        ? (k = ak.bs(a.parent_author, k))
                        : "comment_permlink" == f && a.comment_author
                        ? (k = ak.bs(a.comment_author, k))
                        : "tags" == f
                        ? (k = ak.Np(k, 6))
                        : "links" == f || "image" == f
                        ? (k = ak.CN(k.toString().split(",")))
                        : "users" == f
                        ? (k = ak.DY(k.toString().toLowerCase().split(","), 5))
                        : -1 < QH.indexOf(f)
                        ? (k = '<a href="' + aJ.Ck(k) + '" target="_blank">' + aJ.Ck(k) + "</a>")
                        : "weight" == f
                        ? (k = '<span class="voteWeight">' + k + "</span>")
                        : "post_payout" == f
                        ? (k = '<span class="votePayout">' + k + "</span>")
                        : "pending_curation" == f
                        ? (k = '<span class="voteCuration">' + k + "</span>")
                        : -1 < f.indexOf("url")
                        ? k && (k = '<a href="' + aJ.Ck(k) + '" target="_blank">' + aJ.Ck(k) + "</a>")
                        : -1 < CE.indexOf(f) && aI.Dd(k) && 19 == k.length && (k = D.B.DE(D.B.CG(k))),
                        aI.Qc(k) && !k.length ? (k = "[]") : (g = T7.DU(k)) && (k = ak.AN(g, "autoWidth simple", !1, d)))
                : (k = "");
        c && (k = '<div style="max-height: ' + c + 'px; overflow-x: hidden; overflow-y: auto">' + k + "</div>");
        h += "<tr><td>" + ak.Dc(f) + "</td><td>" + k + "</td></tr>";
    }
    return '<table class="dataTable' + (b ? " " + b : "") + '"><tbody>' + h + "</tbody></table>";
};
ak.gi = function (a) {
    a.type = "horizontal";
    a.eu = 1 == D.G.get(KH);
    return new fI(a);
};
ak.gh = function (a) {
    a.type = "vertical";
    a.eu = 1 == D.G.get(KH);
    return new fI(a);
};
var dM = function () {};
dM.ah = function (a) {
    for (var b = a.T2, c = "module theme account cfg login author permlink block_num trx_id trx_index virtual_op proposal_creator proposal_id".split(" "), d = 0; d < c.length; d++)
        b[c[d]] = "";
    if (MG()) {
        c = a.kR(window.location.href);
        for (var e in c)
            b[e] = c[e];
    } else
        for (e = a.cW, d = 0; d < c.length; d++) {
            var f = c[d],
                    g = e.data(f);
            g && g != "{" + f + "}" && (b[f] = g);
            e.removeAttr("data-" + f);
        }
    (c = MG() && !T3() ? (b.module ? b.module : A1) : b.module) || (c = i0);
    b.account && (c = Nc);
    a.Ng(c);
};
dM.l0 = function () {
    var a = function (a, c) {
        ly[a] = {lz: c};
    };
    a(Nc, cC);
    a(i3, l1);
    a(jt, js);
    a(lE, lB);
    a(ix, fl);
    a(iv, f3);
    a(Nd, dU);
    a(i7, f4);
    a(jR, jP);
    a(iz, f5);
    a(i0, UI_Home);
    a(iy, f6);
    a(kH, f7);
    a(MODULE_MARKET, dS);
    a(Zh, Zj);
    a(kI, gb);
    a(MODULE_DONATE, gs);
    a(lR, lQ);
    a(iw, f8);
    a(jE, gA);
    a(k9, k7);
    D.G = new b5();
    fw.init();
    D.Z = new N3(D.X);
    D.TC = new Sn();
    D.TB = new Sm();
    D.TE = new TD(D.TC, D.TB);
    D.d = new ad();
    D.S = new UI();
    D.o = new Uf();
    D.Q = new k4();
    D.t = new as();
    D.q = new XW(D.S);
    D.j = new UY(D.S, D.o);
    D.H = new Ub(D.S, D.o);
    D.p = new by(D.S, D.o);
    D.O = new bx();
    D.n.CJ();
    D.C = new Wk();
};
dM.dN = function (a, b) {
    b && dM.l0();
    -1 < [Nc].indexOf(a) && ((D.A = new cC(D.p)), (D.F = new bl()), (D.g = new fC()), (D.M = new bz()), (D.N = new ei()), (D.R = new b3()), (D.u = new eR()), (D.D = new b0()), (D.P = new dT()));
    -1 < [Nc, MODULE_MARKET].indexOf(a) && (D.c = new dS());
    -1 < [Nc, MODULE_DELEGATIONS].indexOf(a) && (D.E = new XF(D.p));
};
dM.dO = function (a) {
    Pn("start module", a);
    D.i.AI();
    var b = a.Ne,
            c = a.T2,
            d = !0;
    ly[b] || (b = i0);
    ly[b].lz.dN(a, c, "HiveTasks ~ ", function (b) {
        D.s.KV(100, "<h3>Welcome to HiveTasks!</h3>", b);
        d && ((d = !1), a.ir());
    });
};
var aj = function (a, b, c, d) {
    var e = Ft.ai("panelHeader qNoSelect", "panelHeader" + b),
            f = a ? Ft.GB("h1").html(c) : e;
    e.html(a ? f : c);
    this.Iq = Ft.ea("panelContent clearfix", "panelContent" + b, void 0 !== d ? d : "");
    this.div = Ft[a ? "eb" : "ea"]("pagePanel");
    this.div.append(e, this.Iq);
    this.XX = e;
    this.ed = f;
};
aj.prototype.an = function () {
    return this.div;
};
aj.prototype.al = function () {
    return this.XX;
};
aj.prototype.ee = function () {
    return this.ed;
};
aj.prototype.am = function () {
    return this.Iq;
};
aj.prototype.ao = function (a) {
    this.ed.html(a);
};
aj.prototype.ap = function (a) {
    this.Iq.html(a);
};
var d2 = function () {
    this.d3();
};
d2.prototype.d3 = function () {
    this.themes = [this.d4("default", "Default Theme"), this.d4("dark", "Default Dark Theme")];
};
d2.prototype.d4 = function (a, b) {
    var c = new dt(a, b);
    b = function (a, b, d) {
        return c.di(!0, a, b, d);
    };
    var d = function (a, b, d) {
        return c.dj(!0, a, b, d);
    },
            e = function (a, b, d) {
                return c.dk(!0, a, b, d);
            };
    "default" == a
            ? (b("text-default", "#333"),
                    b("text-inverted", "#f3f3f3"),
                    b("text-light", "#808080"),
                    b("text-lighter", "#2b2b2b"),
                    b("text-gray", "#999"),
                    b("text-gray-dark", "#666"),
                    b("text-green", "#0b0"),
                    b("text-red", "#c00"),
                    b("text-red-light", "#f00"),
                    b("text-orange", "#d29200"),
                    b("text-blue-light", "#7d96c2"),
                    b("shadow", "#aaaaaa"),
                    b("shadow-lighter", "#d0d0d0"),
                    b("shadow-darker", "#191919"),
                    b("border", "#ccc"),
                    b("border-lighter", "#cdcdcd"),
                    b("border-rep-circle", "#d0d0d0"),
                    b("border-rep-circle-active", ":border"),
                    b("page-bg", "#414141"),
                    b("page-bg-new", "#e1e1e1"),
                    b("page-layer-bg", ":page-bg-new"),
                    b("page-overlay-bg", "#1a1a1a"),
                    b("page-hint-text", "#eee"),
                    b("page-hint-bg", "rgba(96,140,213,0.75)"),
                    e("gradient-header2", {
                        dir: "bottom",
                        stops: [
                            ["#ed7b7b", "0%"],
                            ["#d86565", "2%"],
                            ["#b23e3e", "96%"],
                            ["#9e2a2a", "100%"],
                        ],
                    }),
                    d("panel-header-bg", ":gradient-header2"),
                    b("panel-header-border", ":border"),
                    b("panel-header-text", "#fff"),
                    b("panel-header-shadow", "#d3d3d3"),
                    b("panel-bg", "#f7f7f7"),
                    b("panel-bg-lighter", "#fafafa"),
                    b("panel-border", "#dcdcdc"),
                    b("panel-border-darker", "#9c9c9c"),
                    b("panel-text", ":text-default"),
                    b("panel-ruler", "#ddd"),
                    b("sub-panel-bg", "#e9e9e9"),
                    b("dialog-border", ":border"),
                    b("dialog-buttons-panel-border", "#ddd"),
                    b("dialog-shadow", "#555"),
                    d("dialog-buttons-panel-bg", "#ededed"),
                    b("ui-hover-bg", "#e8e8e8"),
                    b("ui-hover-text", ":text-lighter"),
                    b("ui-hover-border", ":border"),
                    b("input-text", ":panel-text"),
                    b("input-bg", "#f5f5f5"),
                    b("input-border", ":border-lighter"),
                    b("input-focused-bg", ":panel-bg"),
                    b("input-focused-border", "#a1c1e1"),
                    b("input-disabled-bg", "#e0e0e0"),
                    b("button-text", "#454545"),
                    b("button-active-text", "#555"),
                    b("button-selected-text", ":panel-header-text"),
                    b("button-border", ":border-lighter"),
                    b("button-active-border", ":button-border"),
                    b("button-selected-border", "#06c"),
                    b("button-focus-border", ":input-focused-border"),
                    b("button-focus-bg", "#ededed"),
                    b("button-icon", "#333"),
                    d("button-bg", "#f5f5f5"),
                    b("button-shadow", "1px 1px 3px #dadada"),
                    b("text-header", "#06c"),
                    b("text-reputation", "#a8a8a8"),
                    b("text-reputation-effect", "#88aadd"),
                    b("link-text", "#0046af"),
                    b("link-hover-text", ":text-lighter"),
                    b("loader-label", "#0060b5"),
                    b("comment-author", "#2b61ca"),
                    b("comment-space", "#7a9ac4"),
                    b("table-bg", "#fff"),
                    b("table-body-bg1", "#e9e9e9"),
                    b("table-body-bg2", "#f2f2f2"),
                    b("table-row-odd", "#fafafa"),
                    b("table-row-head-border", "#c7c7c7"),
                    b("table-row-head-text", ":panel-text"),
                    b("table-row-head-sort-asc-text", "#0b0"),
                    b("table-row-head-sort-desc-text", "#b00"),
                    b("intro-bg", "#fff"),
                    b("intro-border", ":border-lighter"),
                    b("intro-shadow", ":shadow-lighter"),
                    b("loading-status-border", "#ddd"),
                    b("vp-text", "#80a9c8"),
                    b("vp-ring-gradient1", "#cceafe"),
                    b("vp-ring-gradient2", "#608cd5"),
                    b("vp-ring-inner-gradient1", "#f9fcfe"),
                    b("vp-ring-inner-gradient2", "#d9ebf7"),
                    b("vp-tube-gradient1", "#eafaff"),
                    b("vp-tube-gradient2", "#e8f8ff"),
                    b("vp-tube-border", "#c2c5fdaa"),
                    b("vp-circle-inner-border", "#b2d5edaa"),
                    b("vp-circle-outer-border", "#bbbbcc"),
                    b("vp-circle-outer-shadow", "#555555"),
                    b("vp-circle-inner-shadow", "#444444"),
                    b("post-viewer-bg", "#fefefe"),
                    b("post-viewer-table-row-bg1", "#fcfcfc"),
                    b("post-viewer-table-row-bg2", "#f4f4f4"),
                    b("post-viewer-code-bg", "#dfeeff"),
                    b("post-viewer-pre-code-bg", "#eeefff"),
                    b("post-viewer-footer-bg", "#f3f3f3"),
                    b("post-viewer-reply-border", "#e0e0e0"),
                    b("post-viewer-reply-shadow", "#dadada"),
                    b("operation-title-alt-text1", "#2c5fb4"),
                    b("operation-title-alt-text2", "#009000"),
                    b("operation-title-alt-text3", "#e05803"),
                    b("orderbook-bg", ":panel-bg-lighter"),
                    b("orderbook-border", "#aaa"),
                    b("orderbook-horizontal-bar", "#06c"),
                    b("orderbook-bids-line", "#00aa00"),
                    b("orderbook-bids-bg", "#ff005550"),
                    b("orderbook-asks-line", "#aa0000"),
                    b("orderbook-asks-bg", "#00ff5550"))
            : "dark" == a &&
            (b("text-default", "#ccc"),
                    b("text-inverted", "#ccc"),
                    b("text-light", "#808080"),
                    b("text-lighter", "#dbdbdb"),
                    b("text-gray", "#999"),
                    b("text-gray-dark", "#666"),
                    b("text-green", "#0a0"),
                    b("text-red", "#c00"),
                    b("text-red-light", "#f00"),
                    b("text-orange", "#d29200"),
                    b("text-blue-light", "#7d96c2"),
                    b("shadow", "#000000"),
                    b("shadow-lighter", ":shadow"),
                    b("shadow-darker", ":shadow"),
                    b("border", "#1a1a1a"),
                    b("border-lighter", "#4f4f4f"),
                    b("border-rep-circle", "#404040"),
                    b("border-rep-circle-active", ":button-active-border"),
                    b("page-bg", "#0f0f0f"),
                    b("page-bg-new", "#101010"),
                    b("page-layer-bg", ":page-bg-new"),
                    b("page-overlay-bg", "#000"),
                    b("page-hint-text", "#eee"),
                    b("page-hint-bg", "rgba(96,140,213,0.75)"),
                    e("gradient-header2", {
                        dir: "bottom",
                        stops: [
                            ["#039", "0%"],
                            ["#006", "100%"],
                        ],
                    }),
                    b("panel-header-border", ":border"),
                    b("panel-header-text", ":text-inverted"),
                    b("panel-header-shadow", "#000000"),
                    d("panel-header-bg", ":gradient-header2"),
                    b("panel-bg", "#101010"),
                    b("panel-bg-lighter", "#1a1a1a"),
                    b("panel-border", "#575757"),
                    b("panel-border-darker", "#393939"),
                    b("panel-text", ":text-default"),
                    b("panel-ruler", "#4e4e4e"),
                    b("sub-panel-bg", "#393939"),
                    b("dialog-border", "#a1a1a1"),
                    b("dialog-buttons-panel-border", "#333"),
                    b("dialog-shadow", "#000"),
                    d("dialog-buttons-panel-bg", "#131313"),
                    b("ui-hover-bg", "#2d2d2d"),
                    b("ui-hover-text", ":text-lighter"),
                    b("ui-hover-border", ":border-lighter"),
                    b("input-text", ":panel-text"),
                    b("input-bg", "#1c1c1c"),
                    b("input-border", ":border-lighter"),
                    b("input-focused-bg", "#303030"),
                    b("input-focused-border", "#999"),
                    b("input-disabled-bg", "#202020"),
                    b("button-text", "#c5c5c5"),
                    b("button-selected-text", ":panel-header-text"),
                    b("button-active-text", ":text-inverted"),
                    b("button-border", ":border-lighter"),
                    b("button-selected-border", "#06c"),
                    b("button-focus-border", ":input-focused-border"),
                    b("button-focus-bg", ":ui-hover-bg"),
                    b("button-active-border", "#aaa"),
                    b("button-icon", "#bababa"),
                    d("button-bg", "#1a1a1a"),
                    b("button-shadow", "1px 1px 10px #000000"),
                    b("text-header", "#8bf"),
                    b("link-text", ":text-header"),
                    b("text-reputation", "#808080"),
                    b("text-reputation-effect", "#88aadd"),
                    b("menu-active-bg", ":panel-header-bg"),
                    b("link-hover-text", ":text-lighter"),
                    b("loader-label", "#b3ccf8"),
                    b("comment-author", "#a3bce8"),
                    b("comment-space", "#a3bce8"),
                    b("table-bg", "#313131"),
                    b("table-body-bg1", "#242424"),
                    b("table-body-bg2", "#2f2f2f"),
                    b("table-row-odd", "#1e1e1e"),
                    b("table-row-head-border", "#474747"),
                    b("table-row-head-text", ":panel-text"),
                    b("table-row-head-sort-asc-text", "#0b0"),
                    b("table-row-head-sort-desc-text", "#b00"),
                    b("intro-bg", "#444"),
                    b("intro-border", ":border-lighter"),
                    b("intro-shadow", ":shadow-lighter"),
                    b("loading-status-border", "#555"),
                    b("vp-text", ":text-header"),
                    b("vp-ring-gradient1", "#8c9a9f"),
                    b("vp-ring-gradient2", "#204c95"),
                    b("vp-ring-inner-gradient1", ":panel-bg"),
                    b("vp-ring-inner-gradient2", ":panel-bg"),
                    b("vp-tube-gradient1", "#bacacf"),
                    b("vp-tube-gradient2", "#b8c8cf"),
                    b("vp-tube-border", "#9295cdaa"),
                    b("vp-circle-inner-border", "#82a5bdaa"),
                    b("vp-circle-outer-border", "#8b8b9c"),
                    b("vp-circle-outer-shadow", "#555555"),
                    b("vp-circle-inner-shadow", "#444444"),
                    b("post-viewer-bg", "#101010"),
                    b("post-viewer-table-row-bg1", "#0e0e0e"),
                    b("post-viewer-table-row-bg2", "#1b1b1b"),
                    b("post-viewer-code-bg", "#2f3139"),
                    b("post-viewer-pre-code-bg", "#2f3139"),
                    b("post-viewer-footer-bg", "#1a1a1a"),
                    b("post-viewer-reply-border", "#363636"),
                    b("post-viewer-reply-shadow", "#030303"),
                    b("operation-title-alt-text1", "#a3bce8"),
                    b("operation-title-alt-text2", "#1dbd5d"),
                    b("operation-title-alt-text3", "#f9711c"),
                    b("orderbook-bg", ":panel-bg-lighter"),
                    b("orderbook-border", "#666"),
                    b("orderbook-horizontal-bar", "#039"),
                    b("orderbook-bids-line", "#00aa00"),
                    b("orderbook-bids-bg", "#ff005550"),
                    b("orderbook-asks-line", "#aa0000"),
                    b("orderbook-asks-bg", "#00ff5550"));
    b("dialog-titlebar-text", ":panel-header-text");
    d("dialog-titlebar-bg", ":panel-header-bg");
    b("sub-panel-border", ":border-lighter");
    b("sub-panel-shadow", ":shadow-lighter");
    b("button-hover-bg", ":button-focus-bg");
    b("tab-text", ":button-text");
    b("tab-active-text", ":panel-header-text");
    b("tab-hover-bg", ":button-hover-bg");
    b("menu-active-text", ":panel-header-text");
    d("tab-bg", ":button-bg");
    d("tab-active-bg", ":panel-header-bg");
    d("menu-active-bg", ":panel-header-bg");
    d("button-active-bg", ":button-bg");
    d("button-selected-bg", ":panel-header-bg");
    b("vote-chart-stroke", "rgba(220,220,220,0.8)");
    b("vote-chart-highlight-fill", "rgba(220,220,220,0.75)");
    b("vote-chart-highlight-stroke", "rgba(220,220,220,1)");
    b("vote-chart-tooltips-bg", "rgba(120,120,120,0.8)");
    return c;
};
d2.prototype.d6 = function (a) {
    for (var b = 0; b < this.themes.length; b++)
        if (this.themes[b].dd() == a)
            return this.themes[b];
    return null;
};
d2.prototype.IG = function (a) {
    var b = this.d6(a);
    b ? dr.dv(b) : Pn("[!] theme not found", a);
};
d2.prototype.d8 = function () {};
d2.prototype.d9 = function (a) {
    var b = this.d6(a);
    b ? (dr.Ls(b), Pn("edit", a, b)) : D4("The theme '" + a + "' could not be found!");
};
var au = function () {
    this.cW = $("#pageContent");
    this.a4 = this.elemFooter = this.elemHeader = null;
    this.T2 = {};
    this.Ne = "";
    this.d7 = new d2();
    this.lO = [];
    this.jl = this.bE = null;
    this.kC = !1;
};
au.prototype.dP = function () {
    var a = this;
    this.kC ||
            ($("#pageNoScript").hide().remove(),
                    aH.W5().hide().fadeIn(Rd),
                    navigator.vendor.startsWith("Apple") && aH.W5().addClass("isApple"),
                    $(window)
                    .on("pageshow", function () {
                        D.t.i8() && a.bJ(D.t.bH(!1));
                    })
                    .on("resize", function () {
                        a.Hj && clearTimeout(a.Hj);
                        a.Hj = setTimeout(function () {
                            return a.onPageResized();
                        }, 100);
                    })
                    .on("popstate", function (b) {
                        a.kK(b.originalEvent.state);
                    }));
    this.kD();
};
au.prototype.kD = function () {
    var a = this;
    this.cW.empty();
    Pn("prepare page");
    dM.ah(this);
    dM.dN(this.Ne, !this.kC);
    var b = function () {
        return a.dQ();
    },
            c = function () {
                a.kQ() || a.elemHeader
                        ? b()
                        : a.jD(function () {
                            return ak.ai(b);
                        });
            };
    D.G.load(function () {
        at.Qg();
        D.L.Qg();
        D.l && at.Qk(D.l);
        a.kQ() && D.A.jj();
        window.location.href.endsWith(i3) ? b() : a.By(!a.kC, c);
    });
};
au.prototype.dQ = function () {
    this.elemFooter || ak.b6();
    dM.dO(this);
    if (!this.kC) {
        var a = this.T2.cfg;
        a &&
                "{cfg}" != a &&
                D.G.FH(atob(decodeURIComponent(a)), function () {
                    return D4.D9("Settings successfully loaded!");
                });
        setInterval(function () {
            return ak.Qn();
        }, 6e4);
    }
    this.kC = !0;
};
au.prototype.By = function (a, b) {
    var c = this,
            d = function () {
                c.KV(0, "Connecting...");
                if (a)
                    if (D.G.get(GU)) {
                        var d = D.G.get(GU);
                        d = D.d.get(d);
                        D.d.CR(d, !1, function (a) {
                            a ? b() : D.d.hP(b);
                        });
                    } else
                        D.d.hP(b);
                else
                    b();
            };
    if (this.kQ()) {
        $("#pageIntro").remove();
        $("#pageContent,#pageFooter").fadeOut(250);
        $("#supportHint").fadeIn(250);
        var e = Ft.R4("", "pageIntro").appendTo(aH.W5()),
                f = Math.max(120, $(window).innerHeight() / 2 - e.outerHeight() / 2 - 30);
        e.css("margin-top", f + "px").fadeIn(Rd, function () {
            return ak.jk(d);
        });
    } else
        $("#pageContent,#pageFooter").fadeIn(Rd), d();
};
au.prototype.NP = function () {
    var a = this;
    $(".sectionHeader").each(function () {
        var a = $(this),
                b = a.is(".sectionHeaderMinimized"),
                e = D.X.Jp(a.attr("id") + ".minimized", b);
        void 0 !== e && b != e && a.toggleClass("sectionHeaderMinimized");
    });
    $(".sectionHeader").on("click", function () {
        var b = $(this),
                d = b.attr("id");
        b.toggleClass("sectionHeaderMinimized");
        var e = b.is(".sectionHeaderMinimized");
        b = b.parents(".sectionContainer");
        var f = b.find(".sectionContent");
        b.attr("data-hidden", String(e));
        f[1 == D.G.get(KH) ? "slideToggle" : "toggle"]();
        D.X.set(d + ".minimized", e);
        e || ("headerAccountOperations" == d && D.D.filter(), a.onPageResized());
    });
    var b = $(".sectionHeaderMinimized").parents(".sectionContainer");
    b.find(".sectionContent").hide();
    b.attr("data-hidden", "true");
};
au.prototype.i6 = function () {
    $(".userFromDblClick")
            .off("dblclick")
            .on("dblclick", function () {
                var a = $(this),
                        b = D.l;
                a.val(a.val() != b ? b : "");
            });
};
au.prototype.Nf = function (a) {
    return this.Ne == a;
};
au.prototype.Ng = function (a) {
    this.Ne = a;
};
au.prototype.kQ = function () {
    return this.Nf(Nc);
};
au.prototype.dO = function (a, b) {
    this.DQ(FE + "/" + a, b);
};
au.prototype.lM = function (a) {
    this.lO.push(a);
};
au.prototype.lN = function () {
    for (var a = 0; a < this.lO; a++)
        this.lO[a] && clearInterval(this.lO[a]);
    this.lO = [];
};
au.prototype.jN = function () {
    return T7.Kh("");
};
au.prototype.IG = function (a) {
    this.d7.IG(a);
};
au.prototype.d8 = function () {
    this.d7.d8();
};
au.prototype.d9 = function () {
    this.d7.d9(D.G.get(IF));
};
au.prototype.bF = function (a) {
    this.bE = a;
};
au.prototype.DH = function (a) {
    this.kQ() && ((a = (MG() ? this.DP() + "?account=" : "/@") + a), this.mm(a));
};
au.prototype.mm = function (a) {
    window.history.replaceState && window.history.replaceState({}, "", a);
};
au.prototype.kJ = function (a) {
    window.history.pushState({kM: !0}, "", a);
};
au.prototype.DP = function () {
    return window.location.href.split("?")[0];
};
au.prototype.kR = function (a) {
    var b = {};
    a = a.split("?");
    if (2 == a.length) {
        a = a[1].split("&");
        for (var c, d = 0; d < a.length; d++)
            (c = a[d].split("=")), 2 == c.length && (b[c[0]] = c[1]);
    }
    return b;
};
au.prototype.kN = function (a) {
    var b = a.split("/");
    b = "/" + b[b.length - 1];
    for (var c, d = 0; d < i1.length; d++)
        if (((c = i1[d]), b.includes("/" + c)))
            return c;
    if (b.includes("/@"))
        return Nc;
    a = this.kR(a);
    return a.module ? a.module : null;
};
au.prototype.DQ = function (a, b) {
    var c = a.startsWith("/") || a.startsWith(FE);
    if (this.kQ() && c)
        var d = D.l;
    var e = this.kN(a),
            f = e != Nc && !this.kQ();
    if (MG()) {
        var g = this.DP();
        if (c) {
            a = a.replace(FE, g);
            var h = a.includes("/@");
        }
        if (h)
            a = a.replace("/@", "?account=");
        else if (e) {
            c = this.kR(a);
            a = g + "?module=" + e;
            for (var k in c)
                a.includes(k + "=") || (a += "&" + k + "=" + c[k]);
        }
    }
    d && !a.includes(i3) && (a += (a.includes("?") ? "&" : "?") + "login=" + d);
    if (b || !f)
        return aH.DQ(a, b);
    this.kJ(a);
    this.kL(a);
};
au.prototype.kL = function (a) {
    var b = this,
            c = this.kR(a),
            d = this.kN(a);
    d && (c.module = d);
    Pn("fade to", a, d, c);
    for (var e in c)
        this.cW.data(e, c[e]);
    this.lN();
    this.kQ() && D.C.CH();
    var f = !1;
    $("#pageContent,#pageFooter,.ui-dialog").fadeOut(Rd, function () {
        aH.mk();
        f || ((f = !0), b.dP());
    });
};
au.prototype.bf = function (a) {
    this.cW.css("max-width", a + "px");
    this.elemFooter && this.elemFooter.css("max-width", a + "px");
};
au.prototype.iq = function (a) {
    return Math.min(aH.eA(), a);
};
au.prototype.ce = function () {
    return aH.eB(0.8);
};
au.prototype.ar = function (a) {
    $("head title").text(a);
};
au.prototype.KV = function (a, b, c) {
    var d = this;
    if (100 < a || 0 > a)
        a = 100;
    var e = 100 == a;
    this.jl && this.jl.cU() < a
            ? (void 0 !== b && this.jl.cT(b),
                    this.jl.KV(a),
                    e &&
                    $("#pageIntro,#supportHint").fadeOut(parseInt(Rd / 2), function () {
                $("#pageIntro").remove();
                d.jl = null;
                $("#pageContent,#pageFooter").fadeIn(Rd);
                void 0 !== c && c();
            }))
            : !this.jl && e && void 0 !== c && c();
};
au.prototype.Ju = function (a) {
    var b = this,
            c = D.t.a1();
    if (c) {
        var d = function () {
            Pn("[!] Could not find account '" + c + "'");
            setTimeout(function () {
                return b.Ju(a);
            }, 3e3);
        };
        D.S.aY(
                c,
                function (c) {
                    var e = new a6(c).a9(64),
                            g = new Image();
                    g.onload = function () {
                        b.a4
                                .find("#divProfileImage")
                                .css("background-image", "url('" + e + "')")
                                .fadeIn();
                    };
                    g.src = e;
                    D.p.M3(
                            c,
                            function () {
                                D.l = c.name;
                                void 0 !== a && a();
                            },
                            d
                            );
                },
                d
                );
    }
};
au.prototype.jD = function (a) {
    var b = this.T2.login;
    b
            ? D.t.CW(
                    b,
                    F2,
                    function (c) {
                        D.t.a2(b);
                        a();
                    },
                    a
                    )
            : a();
};
au.prototype.a3 = function (a) {
    var b = this.a4,
            c = b.find("#btnSignIn"),
            d = b.find("#btnSignOut"),
            e = b.find("#divProfileName");
    b = b.find("#divProfileImage");
    var f = D.t.a1(),
            g = function () {
                void 0 !== a && a();
            };
    e.text(f);
    b.hide();
    d[f ? "show" : "hide"]();
    c[f ? "hide" : "show"]();
    e[f ? "show" : "hide"]();
    f ? this.Ju(g) : g();
};
au.prototype.aq = function (a, b, c, d, e) {
    this.i2(b);
    e = e ? "append" : "prepend";
    a = new aj(a, b, c, d);
    this.cW[e](a.an());
    return a;
};
au.prototype.i2 = function (a) {
    $("#panelContent" + a)
            .parents(".pagePanel")
            .remove();
};
au.prototype.eZ = function (a, b, c) {
    return this.aq(!0, a, b, c);
};
au.prototype.bG = function () {
    this.bE && this.bE();
};
au.prototype.iZ = function () {
    var a = $(".qTab:visible:first").outerHeight();
    $(".qTabs").each(function () {
        var b = $(this),
                c = b.children(".qTabsNav"),
                d = b.children(".qTabsContent"),
                e = b.is(".qVertical"),
                f = b.data("v_padding_right"),
                g = b.css("height"),
                h = b.data("org_height");
        if (e) {
            if ((h = 1e3 >= b.width()))
                b.removeClass("qVertical").addClass("qHorizontal").addClass("qSwitched").data("is_vertical", !0), -1 < g.indexOf("px") && b.css("height", "auto").data("org_height", g), c.css("margin-bottom", "12px");
            d.css("overflow-y", "visible");
            f && d.css("padding-right", h ? "0" : f);
        } else
            (g = c.innerHeight() >= 2 * a), b[g ? "addClass" : "removeClass"]("qWrapped"), b.data("is_vertical") && 1e3 < b.width() && (b.removeClass("qHorizontal").removeClass("qSwitched").removeClass("qWrapped").addClass("qVertical"), h && b.css("height", h), c.css("margin-bottom", "0"), f && d.css("padding-right", f));
    });
};
au.prototype.ia = function () {
    for (var a = [D.D, D.c], b = 0; b < a.length; b++)
        if (a[b])
            a[b].onPageResized(this);
};
au.prototype.iY = function () {
    var a = Ft.eU("adTitle", "", "<strong>HiveTasks Update</strong><br>The official post for feedback").css({padding: "8px 28px", "font-size": "24px", "line-height": "40px"});
    $(".adMediumRect").each(function () {
        var b = $(this);
        b.html().trim() ||
                b.html(Ft.R5("https://peakd.com/@fernandosoder/hivetasks", a, {class: "adLink", target: "_blank"}).append(Ft.eU("adHint", "", "( promoted / @fernandosoder )")));
    });
    $(".adMediumRect").html('<iframe data-aa="1448329" src="//ad.a-ads.com/1448329?size=300x250" scrolling="no" style="width:300px; height:250px; border:0px; padding:0; overflow:hidden" allowtransparency="true"></iframe>');
};
au.prototype.bJ = function (a) {
    var b = this;
    a || D.p.reset();
    this.a3(function () {
        return b.bG();
    });
};
au.prototype.ir = function () {
    var a = this;
    Pn("page loaded");
    this.iY();
    this.i6();
    b1.init(this.cW);
    var b = setInterval(function () {
        document.hidden || (clearInterval(b), a.onPageResized(), a.NP());
    }, 250);
    this.elemFooter && !this.kQ() && this.elemFooter.fadeIn(Rd);
};
au.prototype.onPageResized = function () {
    this.iZ();
    this.ia();
};
au.prototype.kK = function (a) {
    Pn("pop", a);
    this.kL(window.location.href);
};
var b1 = function () {};
b1.init = function (a) {
    var b = aH.W5();
    b.on("mousedown", function (a) {
        a.ctrlKey && a.shiftKey && (a.stopPropagation(), a.preventDefault());
    }).on("mouseup", function (c) {
        if (c.ctrlKey && c.shiftKey) {
            c.stopPropagation();
            c.preventDefault();
            var d = [b, ".ui-widget-overlay"],
                    e = a.data("focus-Io-mode");
            e ? a.removeData("focus-Io-mode") : a.data("focus-Io-mode", !0);
            for (var f = 0; f < d.length; f++) {
                var g = $(d[f]);
                e ? g.css("background", g.data("org-bg")).removeData("org-bg") : g.data("org-bg", g.css("background")).css("background", "transparent");
            }
            var h = function (a, b, c) {
                a[b ? "removeClass" : "addClass"]("invisible");
                a[c ? "addClass" : "removeClass"]("visible");
                a = a.children();
                for (c = 0; c < a.length; c++)
                    h($(a[c]), b);
            };
            d = a.children();
            for (f = 0; f < d.length; f++)
                (g = $(d[f])), h(g, e, !1);
            c.target &&
                    ((g = $(c.target)),
                            (c = g.prop("tagName").toLowerCase()),
                            "th" == c || "td" == c || "tr" == c
                            ? (g = g.closest("table"))
                            : "canvas" == c || "strong" == c || "input" == c || "select" == c
                            ? (g = g.closest("div"))
                            : "span" == c && (g = g.parents(".opItemHeader").length ? g.parents(".opItemHeader") : g.closest("div")),
                            g.parents(".opItem").length && (g = g.parents(".opItem")),
                            g.data("id") && (g = $("[data-id='" + g.data("id") + "']")),
                            h(g, !0, !0));
            document.getSelection().removeAllRanges();
        }
    });
};
var UM = function (a) {
    var b = this;
    this.div = a;
    this.labelPrefix = "Loading... ";
    var c = Ft.R4("hProgressBarLabel"),
            d = Ft.GB("div", {class: "hProgressBar"}, c);
    a.append(d);
    d.progressbar({
        value: !1,
        change: function () {
            b.fu(b.labelPrefix + "( " + b.cU() + " % )");
        },
        complete: function () {
            b.fu("Complete!");
            d.fadeOut();
        },
    });
    this.cX = c;
    this.divBar = d;
};