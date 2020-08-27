
UM.prototype.cU = function () {
    return this.divBar.progressbar("value");
};
UM.prototype.KV = function (a) {
    this.divBar.progressbar("value", parseInt(a));
};
UM.prototype.fu = function (a) {
    this.cX.text(a);
};
var cV = function (a, b) {
    var c = this;
    this.cZ = this.dL = !1;
    this.cf = !0;
    this.cY = this.statusPercent = 0;
    this.statusText = "Initializing Page...";
    this.borderColor = T5(b["border-color"], "#eee");
    this.borderRGB = T7.Mb(this.borderColor, 1, !0);
    this.ci = this.cj = null;
    this.AI(a);
    var d = new Image();
    d.onload = function () {
        c.dL = !0;
        c.cS(d);
        c.KV(0.15);
        c.cT(c.statusText);
        if (b.onReady)
            b.onReady();
    };
    d.src = b["image-src"];
};
cV.prototype.AI = function (a) {
    this.div = Ft.R4("loadingStatus");
    this.divImage = Ft.R4("statusImage");
    this.divText = Ft.R4("statusText");
    this.divPercent = Ft.R4("statusPercentText");
    this.canvas = Ft.GB("canvas");
    this.divImage.append(this.canvas);
    this.div.append(this.divImage, this.divPercent, this.divText);
    a.append(this.div);
};
cV.prototype.cU = function () {
    return this.statusPercent;
};
cV.prototype.KV = function (a) {
    this.statusPercent = a;
    this.dL && !this.cZ && (!this.cY || this.cY < a) && this.dR();
};
cV.prototype.cT = function (a) {
    this.divText.html(a);
};
cV.prototype.ch = function (a) {
    this.dJ.putImageData(a, 0, 0);
    a = new Image();
    a.src = this.canvas[0].toDataURL();
    return a;
};
cV.prototype.cg = function (a) {
    var b = this.dJ.createImageData(a);
    a = a.data;
    for (var c = b.data, d, e, f, g = 0; g < a.length; g += 4)
        (d = a[g]), (e = a[g + 1]), (f = a[g + 2]), (d = e = f = this.cf ? this.borderRGB.r : (d + e + f) / 3), (c[g] = d), (c[g + 1] = e), (c[g + 2] = f), (c[g + 3] = a[g + 3]);
    return this.ch(b);
};
cV.prototype.cS = function (a) {
    var b = a.width,
            c = a.height;
    this.divImage.height(c);
    this.canvas.attr("width", b);
    this.canvas.attr("height", c);
    for (var d = this.canvas[0].getContext("2d"), e = [-1, -1, 0, -1, 1, -1, -1, 0, 1, 0, -1, 1, 0, 1, 1, 1], f = 0; f < e.length; f += 2)
        d.drawImage(a, 2 * e[f], 2 * -e[f + 1]);
    d.globalCompositeOperation = "source-in";
    d.fillStyle = this.borderColor;
    d.fillRect(0, 0, b, c);
    d.globalCompositeOperation = "source-over";
    d.drawImage(a, 0, 0);
    a = d.getImageData(0, 0, b, c);
    this.dJ = d;
    this.imageWidth = b;
    this.imageHeight = c;
    this.cY = 0;
    this.cj = this.ch(a);
    this.ci = this.cg(a);
    this.draw();
};
cV.prototype.dR = function () {
    var a = this;
    requestAnimationFrame(function () {
        return a.draw();
    });
};
cV.prototype.draw = function () {
    var a = Math.floor(this.cY) + " %";
    this.divPercent.text() != a && this.divPercent.text(a);
    a = this.dJ;
    var b = this.imageWidth,
            c = this.imageHeight,
            d = Math.max(0, c - (this.cY / 100) * c),
            e = Math.max(1, c - d);
    a.clearRect(0, 0, b, c);
    a.drawImage(this.ci, 0, 0);
    a.drawImage(this.cj, 0, d, b, e, 0, d, b, e);
    a = this.statusPercent - this.cY;
    0.1 < a ? ((this.cZ = !0), (this.cY += Math.max(0.2, a / 10)), this.dR()) : ((this.cZ = !1), (this.cY = this.statusPercent));
};
var L2 = function (a, b) {
    var c,
            d,
            e,
            f,
            g,
            h = this,
            k = !1,
            l = !1,
            m = aH.IH("--vp-ring-gradient1"),
            n = aH.IH("--vp-ring-gradient2"),
            p = aH.IH("--vp-ring-inner-gradient1"),
            q = aH.IH("--vp-ring-inner-gradient2"),
            r = aH.IH("--vp-tube-gradient1"),
            t = aH.IH("--vp-tube-gradient2"),
            u = aH.IH("--vp-tube-border"),
            x = aH.IH("--vp-circle-inner-border"),
            v = aH.IH("--vp-circle-outer-border"),
            y = aH.IH("--vp-circle-outer-shadow"),
            A = aH.IH("--vp-circle-inner-shadow"),
            E = new Image();
    E.addEventListener("load", function () {
        k = !0;
    });
    E.src = aH.IH("--vp-bg", !0);
    var B = {width: 262, height: 262, progress: 0, value: "$ 0.00", mj: !1};
    if (void 0 !== b)
        for (K in B)
            b.hasOwnProperty(K) || (b[K] = B[K]);
    else
        b = B;
    var C = document.createElement("div");
    C.style.width = b.width + "px";
    C.style.height = b.height + "px";
    C.style.position = "relative";
    a.appendChild(C);
    var F = document.createElement("canvas");
    F.setAttribute("width", b.width);
    F.setAttribute("height", b.height);
    C.appendChild(F);
    var G = b.width - 6,
            J = b.height - 6;
    var z = G / 2 - 1;
    var I = J / 2 - 1;
    a = z / 2.5;
    B = z / 5.5;
    var K = 0.16666666 * J - B;
    var H = document.createElement("div");
    H.className = "statusTextPercent";
    H.style.fontSize = a.toString() + "px";
    H.style.lineHeight = a.toString() + "px";
    H.style.width = (G - 2).toString() + "px";
    H.style.top = (J / 2 - a / 2 + 4).toString() + "px";
    var L = document.createElement("div");
    L.className = "statusTextValue";
    L.style.width = (G - 2).toString() + "px";
    L.style.fontSize = B.toString() + "px";
    L.style.lineHeight = B.toString() + "px";
    L.style.top = (0.8333333 * J + K / 3 + 2).toString() + "px";
    a = [L, H];
    for (B = 0; B < a.length; B++) {
        K = a[B];
        var P = ["-webkit-user-select", "-khtml-user-select", "-moz-user-select", "-o-user-select", "user-select"];
        for (d = 0; d < P.length; d++)
            K.style[P[d]] = "none";
    }
    C.appendChild(H);
    C.appendChild(L);
    var w = F.getContext("2d");
    w.imageSmoothingEnabled = !0;
    var R = w.createLinearGradient(z, 0, z, J);
    R.addColorStop(0, m);
    R.addColorStop(1, n);
    var S = w.createLinearGradient(z, 0.133333 * z, z, J - 0.133333 * z);
    S.addColorStop(0, p);
    S.addColorStop(1, q);
    var T = w.createLinearGradient(z, 0, z, J);
    T.addColorStop(0, r);
    T.addColorStop(1, t);
    var O = 0.6666 * z;
    var U = z - 2;
    var Q = O + 0.06 * z;
    var V = U - 0.06 * z;
    var W = 0.9707963267949 + 2 * Math.PI;
    w.lineWidth = 1;
    var M = function (a, b, c) {
        return {x: a.x + Math.cos(b) * c, y: a.y + Math.sin(b) * c};
    };
    var X = function (a, b) {
        var c = {x: z, y: I};
        var d = M(c, a, Q);
        w.moveTo(d.x, d.y);
        var e = M(c, b, Q);
        var f = M(c, b, V);
        var g = b + 1.571;
        d = 0.2 * z - 4;
        var h = M(e, g, d);
        g = M(f, g, d);
        w.arc(z, I, Q, a, b, !1);
        w.bezierCurveTo(h.x, h.y, g.x, g.y, f.x, f.y);
        w.arc(z, I, V, b, a, !0);
        e = M(c, a, Q);
        f = M(c, a, V);
        g = a - 1.571;
        h = M(f, g, d);
        g = M(e, g, d);
        w.bezierCurveTo(h.x, h.y, g.x, g.y, e.x, e.y);
    };
    var aa = function () {
        H.innerHTML = (100 * N).toFixed(2) + " %";
        H.title = (100 * N).toFixed(3) + " %";
    };
    var ba = function () {
        w.beginPath();
        w.fillStyle = R;
        w.strokeStyle = v;
        w.arc(z, I, U, 0, 2 * Math.PI, !1);
        w.fill();
        w.stroke();
        w.save();
        w.shadowColor = y;
        w.shadowBlur = 8;
        w.shadowOffsetX = 2;
        w.shadowOffsetY = 3;
        w.stroke();
        w.restore();
    };
    var ca = function () {
        w.beginPath();
        w.fillStyle = S;
        w.arc(z, I, O, 0, 2 * Math.PI, !1);
        w.fill();
        w.strokeStyle = x;
        w.stroke();
    };
    var da = function () {
        w.beginPath();
        w.strokeStyle = u;
        X(2.1707963267949, W);
        w.fillStyle = T;
        w.fill();
        w.stroke();
    };
    var ea = function () {
        f = 2.1707963267949 + N * (W - 2.1707963267949);
        w.beginPath();
        X(2.1707963267949, f);
        w.save();
        w.clip();
        w.drawImage(E, 0, 0, G, J);
        w.restore();
        w.beginPath();
        X(2.1707963267949, f);
        w.stroke();
        w.save();
        w.strokeStyle = "#dadada";
        w.shadowColor = A;
        w.shadowBlur = 6;
        w.shadowOffsetX = 1;
        w.shadowOffsetY = 1;
        w.stroke();
        w.restore();
    };
    var Y = function () {
        w.clearRect(0, 0, F.width, F.height);
        ba();
        ca();
        l && c && (w.save(), w.clip(), w.drawImage(c, z - O, I - O, 2 * O, 2 * O), w.restore());
        da();
        ea();
        aa();
    };
    var Z = function () {
        0 > N ? (N = 0) : 1 < N && (N = 1);
    };
    this.L0 = g = function (a) {
        N = a;
        Z();
        Y();
    };
    this.aM = function (a) {
        e = a;
        L.innerHTML = e;
    };
    this.aM(b.value);
    this.Lv = function (a) {
        (l && a == c.src) ||
                ((l = !1),
                        (c = new Image()),
                        c.addEventListener("load", function () {
                            l = !0;
                            Y();
                        }),
                        (c.src = a));
    };
    this.loaded = function (a) {
        k ? a() : E.addEventListener("load", a);
    };
    var N = b.progress;
    Z();
    Y();
    b.mj &&
            (function () {
                var a = function (a, b) {
                    return Math.sqrt(Math.pow(a - z, 2) + Math.pow(b - I, 2));
                };
                var c = !1;
                var d = function (a, c) {
                    a = Math.atan2(c - I, a - z);
                    a > Math.PI / 2 && (a -= 2 * Math.PI);
                    g(((a - (2.1707963267949 - 2 * Math.PI)) / (W - 2.1707963267949)).toFixed(2));
                    void 0 !== b.mi && b.mi.call(h, N);
                };
                C.addEventListener("mousedown", function (b) {
                    var e = this.getBoundingClientRect(),
                            f = b.clientX - e.left;
                    b = b.clientY - e.top;
                    e = a(f, b);
                    e > O && e < U && ((c = !0), d(f, b));
                });
                C.addEventListener("mouseup", function () {
                    c = !1;
                });
                C.addEventListener("mousemove", function (a) {
                    if (c) {
                        var b = this.getBoundingClientRect();
                        d(a.clientX - b.left, a.clientY - b.top);
                    }
                });
                C.addEventListener("mouseleave", function () {
                    c = !1;
                });
            })();
};
D.n = {
    CJ: function () {
        ay.init();
        ay.az().append(
                $(
                        '<div data-id="form_powerup"><div class="dialogForm"><table class="dataTable"><tr><td>Account</td><td><input id="powerup_account" type="text" value="{account}" disabled></td></tr><tr><td>Percentage</td><td>{slider}</td></tr><tr><td>Amount ({symbol})</td><td><input id="powerup_amount" type="text" value=""></td></tr></table></div></div><div data-id="form_powerdown"><div class="dialogForm"><table class="dataTable"><tr><td>Account</td><td><input id="powerdown_account" type="text" value="{account}" disabled></td></tr><tr><td>Percentage</td><td>{slider}</td></tr><tr id="row_powerdown_vests"><td>Amount (Vests)</td><td><input id="powerdown_vests" type="text" value="" disabled></td></tr><tr><td>Amount ({symbol})</td><td><input id="powerdown_sp" type="text" value=""></td></tr></table></div></div><div data-id="form_transfer_to_savings"><div class="dialogForm"><table class="dataTable"><tr><td>From Account</td><td><input id="savings_from_account" type="text" value="{from_account}" disabled></td></tr><tr><td>To Account</td><td><input id="savings_to_account" type="text" value="{to_account}"></td></tr><tr><td>Percentage</td><td>{slider}</td></tr><tr><td>Amount ({unit})</td><td><input id="savings_amount" type="text" value=""></td></tr><tr><td>Remarks</td><td><input id="savings_memo" type="text" placeholder="(optional)" value=""></td></tr></table></div></div><div data-id="form_transfer_from_savings"><div class="dialogForm"><table class="dataTable"><tr><td>From Account</td><td><input id="savings_from_account" type="text" value="{from_account}" disabled></td></tr><tr><td>To Account</td><td><input id="savings_to_account" type="text" value="{to_account}"></td></tr><tr><td>Percentage</td><td>{slider}</td></tr><tr><td>Amount ({unit})</td><td><input id="savings_amount" type="text" value=""></td></tr><tr><td>Remarks</td><td><input id="savings_memo" type="text" placeholder="(optional)" value=""></td></tr></table></div></div><div data-id="form_edit_withdraw_route"><div class="dialogForm"><table class="dataTable"><tr><td>From Account</td><td><input id="route_from" type="text" value="{from}" disabled></td></tr><tr><td>To Account</td><td><input id="route_to" type="text" value="{to}"></td></tr><tr><td>Percentage</td><td><input id="route_percent" type="text" value="{percent}"></td></tr><tr><td>&nbsp;</td><td>{slider}</td></tr><tr><td>Receive Vests</td><td><input id="route_auto_vest" type="checkbox"></td></tr></table></div></div><div data-id="form_conversion_request"><div><div class="textBox" style="margin-top: 4px">This feature should only be used when HBD is trading below 1.0 USD! The conversion will take 3.5 days to finish. In case you want to buy HIVE directly, you can use the <a id="gotoMarket" href="#">Internal Market</a>.</div><table class="dataTable"><tr><td>Account</td><td><input id="conversion_account" type="text" value="{account}" disabled></td></tr><tr><td>Request Id</td><td><input id="conversion_request_id" type="text" value="{request_id}" disabled></td></tr><tr><td>HBD Amount</td><td><input id="conversion_amount" type="text" value="{amount}"></td></tr><tr><td>Percentage</td><td>{slider}</td></tr></table></div></div>'
                        )
                );
    },
    get: function (a, b) {
        return ay.get(a, b);
    },
};
var ei = function () {
    this.it = !0;
};
ei.prototype.HS = function (a, b, c, d) {
    var e = this;
    if (this.it) {
        var f = {body: b, icon: L8("res/img/notify-icon.png"), tag: c, onClick: d};
        "Notification" in window
                ? "granted" === Notification.permission
                ? (new Notification(a, f).onclick = d)
                : "denied" !== Notification.permission &&
                Notification.requestPermission(function (b) {
                    "granted" === b ? (new Notification(a, f).onclick = d) : (e.it = !1);
                })
                : (Pn("[!] This browser does not support desktop notifications"), (e.it = !1));
    }
};
ei.prototype.ej = function () {
    var a = D.Z.Qv.followers,
            b = a.length ? Number(a[0][0]) : 0,
            c = at.get(D.l, "last_new_follower", 0),
            d = [];
    if (b && b != c) {
        for (var e, f = 0; f < a.length; f++) {
            e = a[f];
            if (e[0] <= c)
                break;
            D.p.TR(e[1]) || (-1 == d.indexOf(e[1]) && d.push(e[1]));
        }
        d.length &&
                ((a = "@" + D.l + ": You have " + d.length + " new follower" + (1 < d.length ? "s" : "") + "!"),
                        (c = 25 < d.length) && d.splice(25, d.length - 25),
                        (d = d.join(", ") + (c ? " ..." : "")),
                        this.HS(a, d, D.l + ".followers", function () {
                            g8("#filterFollowersMode").aM("new_followers");
                            D.A.fj("tabAccountFollowers");
                        }),
                        at.set(D.l, "last_new_follower", b));
    }
};
ei.prototype.ek = function () {
    var a = this,
            b = D.Z.Qv.mentions,
            c = b.length ? Number(b[0][0]) : 0,
            d = at.get(D.l, "last_mention", 0),
            e = [];
    if (c && c != d) {
        for (var f, g = 0; g < b.length; g++) {
            f = b[g];
            if (f[0] <= d)
                break;
            D.p.TR(f[1]) || (-1 == e.indexOf(f[1]) && e.push(f[1]));
        }
        if (e.length) {
            var h = "@" + D.l + ": You were mentioned" + (1 < e.length ? " by " + e.length + " accounts!" : "!");
            (b = 25 < e.length) && e.splice(25, e.length - 25);
            var k = e.join(", ") + (b ? " ..." : "");
            setTimeout(function () {
                a.HS(h, k, D.l + ".mentions", function () {
                    return D.A.fj("tabAccountMentions");
                });
            }, 5e3);
            at.set(D.l, "last_mention", c);
        }
    }
};
ei.prototype.Hg = function () {
    var a = D.G.get(Gb);
    -1 < ["all", "followers"].indexOf(a) && this.ej(a);
    -1 < ["all", "mentions"].indexOf(a) && this.ek(a);
};
D.i = {
    AI: function () {
        var a = D.G.get(D5);
        $(document).tooltip({
            items: ".uName",
            show: {delay: a},
            create: function (a, c) {
                $(".ui-tooltip").remove();
            },
            open: function (a, c) {
                (a = $(c.tooltip[0])) && a.data("open", !0);
            },
            close: function (a, c) {
                $(".uRepLoaderContainer").remove();
                (a = $(c.tooltip[0])) && a.removeData("open");
            },
            content: function () {
                var a = $(this);
                if (1 == D.G.get(Jc) && a.is(".uName") && !a.is(".invalid")) {
                    var c = D.G.get(D5),
                            d = Ft.GB("div", {class: "uNameTooltip", "data-name": String(a.data("name"))}).one("mousedown", function () {
                        $(".uRepLoaderContainer").remove();
                        d.data("clicked", !0);
                    });
                    a.find(".uRep")
                            .prepend(Ft.GB("div", {class: "uRepLoaderContainer"}, Ft.GB("span", {class: "uRepLoader"})))
                            .find(".uRepLoader")
                            .css("animation", "spin " + c / 1e3 + "s linear 1");
                    setTimeout(function () {
                        var b = d.parents(".ui-tooltip");
                        d.data("clicked") ? b.remove() : (b.css("width", "auto"), b.data("open") && D.i.JS(a, d, b));
                    }, c);
                    return d;
                }
            },
        });
    },
    JS: function (a, b, c) {
        b.html("Loading account details...");
        var d = String(b.data("name")),
                e = Ft.GB("div", {class: "uTop clearfix"}),
                f = function () {
                    var b = a.offset().left + e.outerWidth(!0) + 50,
                            d = aH.eA();
                    b > d && c.css("margin-left", "-" + (b - d) + "px");
                };
        D.S.aY(d, function (a) {
            var c = D.S.NI(a),
                    g = D.Q.NJ(a, "voting_manabar", c).NL,
                    l = D.p.Yx();
            l = D.o.U3.Y5(c, g, 100, l);
            var m = new a6(a),
                    n = "<strong>" + m.a7() + '</strong><br><div class="uAbout text">' + m.a8() + "</div>";
            (m = m.bD(240, "uImage")) && e.append(m);
            e.append(n);
            c = Ft.be("dataTable autoWidth simple").append(
                    Ft.Fj("td", ["Reputation", D.Q.Ah(a.reputation), ""]),
                    Ft.Fj("td", ["HIVE Power", D.Q.OJ(D.o.U3, c), D.Q.OK(D.o.U3, a)]),
                    Ft.Fj("td", ["Voting Power", Bl(g, 1) + " %", "$ " + D.B.EQ(l) + " for a 100 % vote"])
                    );
            b.empty().append(e, "<hr>", c);
            b.on("mousemove", function () {
                var a = $(this);
                a.data("force_close") ||
                        (a.data("force_close", !0),
                                a.fadeOut("fast", function () {
                                    a.parents(".ui-tooltip").remove();
                                    a.remove();
                                }));
            });
            b.hasClass("noRep") || 1 != D.G.get(JP) || ($(".uName[data-name='" + d + "']").removeClass("updated"), D.L.JU(d, a));
            f();
        });
    },
};
var textsUS = [
    ["powerdown_warning", " A Powerdown ({0} of HP) has been started for your account.<br> If you didn't start it yourself, you should take action now! "],
    ["savings_withdrawal_warning", " A Savings Withdrawal Request has been started for your account.<br> If you didn't start it yourself, you should take action now! "],
    ["payment_method", " Payment Method "],
    ["ac_claim_account_title", " Claim Account Ticket "],
    [
        "ac_claim_account_text",
        " Here you can claim Account Tickets, which you can then use to create new Hive accounts. The Tickets can be paid with HIVE or Resource Credits (RC) and they don't expire over time, so you can collect them without the need of spending them for new accounts immediately. ",
    ],
    ["ac_claim_account_btn", " Claim Account "],
    ["ac_import_keys_btn", " Import Keys... "],
    ["ac_use_master_key_option", " Use Master Password "],
    ["ac_use_existing_keys_option", " Use Existing Public Keys "],
    [
        "ac_use_existing_keys_warning",
        " This option should only be used for creating an account with already <strong>existing Public Keys for the defined Account Name</strong>! Do not use the Public Keys from any other account, because your Private Keys will differ and you won't have access to the new account. ",
    ],
    ["ac_generate_key_btn", " Generate "],
    ["ac_create_account_title", " Create New Account "],
    ["ac_create_account_btn", " Create Account "],
    ["ac_create_account_text", " To be able to create an account you first need to claim a Ticket in the section above. You currently have {0} Account Tickets available. "],
    ["show_in_new_tab_btn", " Show In New Tab "],
    ["show_in_post_viewer_btn", " Show In Post Viewer "],
    ["show_votes_btn", " Show Votes... "],
    ["show_nsfw_hint", " This post was assigned the 'nsfw' tag and it may contain adult/pornographic content. "],
    ["show_content_btn", " Show Content "],
    ["fill_required_fields_hint", " Please fill in all required fields to continue! "],
    [
        "page_footer_text",
        " <p>  This website does not make use of any user or traffic analysis tools and it  does not collect any kind of personal data. All settings and temporary data  are being stored in your browser's local storage (cache) and there are no  cookies being used on this page. </p><p>  Your Private Active and Owner Keys are not being stored in cache or anywhere  else. Private Posting and Memo Keys are being cached (encrypted) and they  are only readable from the client (your browser) on this site. </p><strong>Have Fun &amp; Hive On!</strong> ",
    ],
    [
        "master_pwd_hint",
        ' For security reasons your Master Password is not being supported on HiveTasks. NEVER use the Master Password to log into steemit.com or any other Steem application! <br><br><strong>Please read:</strong><hr><a target="_blank" href="https://steemit.com/faq.html#Why_should_I_be_careful_with_my_master_password">  Why should I be careful with my master password? </a><br><a target="_blank" href="https://steemit.com/faq.html#What_are_my_different_keys_for">  What are my different keys for? </a> ',
    ],
    ["update_hint", " Your current HiveTasks version is out of date. Do you want to reload the page to start the new version? <br><br><span>Your Version</span> :&nbsp;&nbsp;{0} <br><span>Server Version</span> :&nbsp;&nbsp;{1} "],
    ["update_hint_local", " Your current HiveTasks version is out of date. Do you want to download the new version? <br><br><span>Your Version</span> :&nbsp;&nbsp;{0} <br><span>Server Version</span> :&nbsp;&nbsp;{1} "],
    ["nsfw_hint", " <div class=\"dialogBody\">  This post have been assigned the 'nsfw' tag,  therefore it may contain adult/pornographic content.  <br><br>Do you really want to watch the images? </div> "],
    [
        "request_account_recovery_hint",
        " Only the Recovery Account '{0}' is allowed to make a recovery request for '{1}'. <br><br> Please note that changing an account's Recovery Account will take 30 days to finish and the new Recovery Account is not allowed to start a Recovery Request beforehand. ",
    ],
],
        fw = function () {};
fw.init = function () {
    for (var a = 0; a < textsUS.length; a++)
        D.T.fu("us", textsUS[a][0], textsUS[a][1]);
    textsUS = null;
};
D.U = {
    Sa: function (a) {
        a.preventDefault();
        a = $(this);
        var b = a.data("memo");
        a.data("incoming");
        a = function (a) {
            D.S.O2(a, b, function (a) {
                a = aJ.GT(a.substring(1).trim());
                D4.EA(a, "Decrypted Message");
            });
        };
        b && D.t.DL(K8, !1, !0, a);
    },
    Oe: function () {
        $(".encryptedMemo").off("click").on("click", D.U.Sa);
    },
    DV: function () {
        $(".scrollY:not(.checked)").on("mousewheel DOMMouseScroll", function (a) {
            var b = $(this),
                    c = a.wheelDelta || -a.detail || (a.originalEvent && a.originalEvent.wheelDelta);
            (D.V.LQ || (b.hasClass("tabOperationsData") && 0 > c)) && aH.Do(b) && ((b = 0 >= this.scrollTop), ((1 > this.scrollHeight - this.offsetHeight - this.scrollTop && 0 > c) || (b && 0 < c)) && a.preventDefault());
        });
    },
    Ta: function (a) {
        var b = a.find(".hProgressBarLabel");
        a.hide().progressbar({
            value: !1,
            change: function () {
                b.text(a.progressbar("value") + " %");
            },
            complete: function () {
                b.text("Complete!");
                a.fadeOut();
            },
        });
        return a;
    },
    Kl: function (a, b, c, d, e, f) {
        d = parseFloat(d);
        new ZZ(a.find(".percentageSlider"), {
            minValue: c,
            maxValue: d,
            value: e,
            onSlide: function (a) {
                isNaN(a) || a < c || a > d || (b && b.val(Bl(a, f)).trigger("change"));
            },
        });
    },
    ZB: function () {
        return Ft.R4("percentageSlider ui-widget")[0].outerHTML;
    },
    ZC: function (a, b, c) {
        var d = Ft.R4("voteSlider", a);
        a = Ft.GB("span", {id: b, class: "voteSliderValue"}, c).attr("data-slider", a);
        return Ft.GB("div").append(a, d).html();
    },
    AB: function (a, b, c) {
        var d = D.p,
                e = d.XD,
                f = d.Ve();
        d = d.Yx();
        b = e.Y5(f, b, c, d);
        a.html("$ " + D.B.EQ(b));
    },
    AG: function (a, b) {
        $(a).each(function () {
            var a = $(this),
                    d = $(".voteSliderValue[data-slider='" + a.attr("id") + "']"),
                    e = g8(a.find(".hSlider"));
            e
                    ? D.U.AB(d, b, e.bt())
                    : new ZZ(a, {
                        minValue: 1,
                        maxValue: 100,
                        value: 100,
                        onSlide: function (a) {
                            return D.U.AB(d, D.p.Vm("Upvote"), a);
                        },
                    });
        });
    },
    OG: function (a, b, c) {
        if (!at.Jp(D.l, c, !1)) {
            $("#" + b).remove();
            var d = Ft.GB("button", {class: "right", title: "Close"}, "X")
                    .button()
                    .on("click", function () {
                        at.set(D.l, c, !0);
                        $("#" + b).remove();
                    });
            a = Ft.GB("div", {id: b, class: "pageWarning text"}, [d, a]);
            aH.W5().append(a);
        }
    },
    QV: function (a) {
        D.X.Qh(Qi + D.l + "." + a);
    },
    OF: function () {
        $(".pageWarning").remove();
        var a = "powerdown_",
                b = D.p.Vv(VI);
        if (0.1 < b) {
            var c = D.p.kZ(VI);
            D.U.OG(fv("powerdown_warning", [parseInt(c) + "%"]), "powerdownWarning", a + b);
        } else
            D.U.QV(a);
        a = "savings_withdrawals_";
        D.p.O3 ? ((b = at.SL(D.l, "savings_withdrawals", 0)), D.p.O3 > b ? D.U.OG(fv("savings_withdrawal_warning"), "savingsWithdrawWarning", a + D.p.O3) : D.p.O3 < b && at.set(D.l, "savings_withdrawals", D.p.O3)) : D.U.QV(a);
    },
};
D.B = {
    DD: function (a) {
        return a.format(Ba[D.G.get(D6)]);
    },
    DC: function (a) {
        return a.format(Ba[0]);
    },
    aB: function (a) {
        return a.format(KR);
    },
    DE: function (a, b, c, d) {
        if (1970 >= a.year())
            return "-";
        var e = a.format(Bb[D.G.get(D6)]);
        a = void 0 !== d && d ? a.format(":ss") : "";
        if (void 0 !== b && b) {
            b = e.split(", ");
            if (b[0] == D.V.E6)
                return (void 0 !== c && c ? "Today, " : "") + b[1] + a;
            if (b[0] == D.V.E5)
                return "Yesterday, " + b[1] + a;
            if (b[0] == D.V.Fe)
                return "Tomorrow, " + b[1] + a;
        }
        return e + a;
    },
    CG: function (a) {
        return moment.utc(a).local();
    },
    HO: function () {
        return moment().diff(moment.unix(HM), "days");
    },
    Hf: function (a) {
        return moment.unix(HM).add(a, "days");
    },
    HN: function (a) {
        return moment.utc(a).diff(moment.unix(HM), "days");
    },
    IK: function () {
        var a = D.G.get(D6);
        if (void 0 === a || isNaN(a))
            a = 0;
        return Ba[a].toLowerCase().replace("yyyy", "yy");
    },
    EQ: function (a) {
        return Bl(a, D.G.get(KI));
    },
    Fd: function (a, b) {
        return (a = D.Q.Fc(a, b, NB)) ? "in " + aG.DT(a, moment(), !0) + Lf + (a ? D.B.DE(a, !0, !0) : "Now") : "Now";
    },
    Jn: function (a) {
        return a.replace(D.G.Y2(), "");
    },
    Kr: function (a) {
        if (1 != D.G.get(Kq))
            for (var b = 0; b < a.length; b++)
                a[b].startsWith("http:") || (a[b].startsWith("//") ? (a[b] = "https:" + a[b]) : a[b].startsWith("https:") || (a[b] = "https://" + a[b]));
        return a;
    },
    DS: function (a) {
        return D.B.Kr(T7.Ix(a).images);
    },
    Lc: function (a) {
        a = ((void 0 !== a.title && a.title ? a.title + " " : "") + a.body).toLowerCase();
        a = T7.Km(a, "@@", "");
        a = T7.Km(a, ".@", " @");
        a = T7.Km(a, "-@", " @");
        a = a.replace(/[^a-z0-9@.\-]/g, " ");
        a = a.replace(/ +/g, " ");
        for (var b = a.split(" "), c = [], d = 0; d < b.length; d++)
            (a = b[d]), a.startsWith("@") && ((a = T7.Km(a, "@", "")), (a = T7.Lb(a, ["."])), 3 > a.length || a.startsWith("-") || a.endsWith("-") || !isNaN(a.charAt(0)) || -1 < c.indexOf(a) || c.push(a));
        return c;
    },
};
var bi = 960,
        bg = 1024,
        bh = 1200,
        Nc = "sw",
        i0 = "home",
        PB = "postviewer",
        Nd = "block-explorer",
        Zh = "sps-proposals",
        MODULE_DONATE = "donate",
        MODULE_MARKET = "market",
        MODULE_DELEGATIONS = "delegations",
        jE = "witnesses",
        k9 = "witness-schedule",
        ix = "account-creator",
        iv = "account-recovery",
        iy = "key-generator",
        i7 = "change-password",
        iw = "transfer-search",
        iz = "delegation-history",
        jR = "copy-votes",
        jt = "abuse-finder",
        kH = "manual-vote",
        kI = "proxy-info",
        lE = "account-authorities",
        lR = "seed-nodes-check",
        i3 = "authentication",
        i1 = [i0, PB, Nd, Zh, MODULE_DONATE, MODULE_MARKET, MODULE_DELEGATIONS, jE, k9, ix, iv, iy, i7, iw, iz, i3, jR, jt, kH, kI, lE, lR],
        ly = {},
        A1 = MG() && !T3() ? i0 : 0,
        Y3 = !0,
        Rd = 250,
        D7 = 30,
        HK = 30,
        BT = 50,
        HM = 1458777600,
        NN = [1, 5, 25, 50, 75, 100],
        EJ = [
            {title: "Hive", url: "https://hive.blog", ca: "feed", cb: "transfers"},
            {title: "PeakD", url: "https://peakd.com", ca: "feed", cb: "transfers"},
        ],
        FE = "https://hivetasks.com",
        HT = "https://steemworld-ws.org/",
        GW = [
            {name: "CoinCap", Ig: "https://coincap.io/assets/", Ih: "steem", Ii: "steem-dollars"},
            {name: "CoinGecko", Ig: "https://www.coingecko.com/en/coins/", Ih: "hive", Ii: "steem-dollars"},
            {name: "CoinMarketCap", Ig: "https://coinmarketcap.com/currencies/", Ih: "steem", Ii: "steem-dollars"},
            {name: "WorldCoinIndex", Ig: "https://worldcoinindex.com/coin/", Ih: "steem", Ii: "steemdollars"},
        ],
        IM = ["default", "dark"],
        Mh = "STM1111111111111111111111111111111114T1Anm",
        K8 = "MEMO KEY",
        F2 = "POSTING KEY",
        F1 = "ACTIVE KEY",
        Oo = "OWNER KEY",
        P2 = "RECENT OWNER KEY",
        P3 = "NEW OWNER KEY",
        Lf = '<span class="splitSpan">|</span>',
        k4 = function () {};
k4.prototype.OL = function (a, b) {
    var c = a.WC();
    a = a.U1(b, 3);
    1e6 < a ? ((b = 0.000001), (c = "M&nbsp;" + c)) : ((b = 1), (c = "&nbsp;" + c));
    return {sp: a, factor: b, unit: c};
};
k4.prototype.OJ = function (a, b) {
    a = this.OL(a, b);
    return D.B.EQ(a.sp * a.factor) + a.unit;
};
k4.prototype.OK = function (a, b) {
    var c = a.X9() ? D.S.NI(b) : D.p.NI(a.aP);
    c = this.OL(a, c);
    var d = a.X9() ? D.S.Ko(b) : 0,
            e = a.X9() ? AQ(b.vesting_shares) : D.p.V0(a.aP),
            f = a.X9() ? AQ(b.received_vesting_shares) : D.p.V2(a.aP);
    b = a.X9() ? AQ(b.delegated_vesting_shares) : D.p.V4(a.aP);
    var g = a.WC();
    return d || f || b
            ? ((e = "(&nbsp;" + Ft.NT(D.B.EQ(a.U1(e, 3) * c.factor), "", "Staked " + g + " (" + e + " Vests)")),
                    f && (e += Ft.NT("&nbsp;+&nbsp;" + D.B.EQ(a.U1(f, 3) * c.factor), "", "Received " + g + " (" + f + " Vests)")),
                    b && (e += Ft.NT("&nbsp;-&nbsp;" + D.B.EQ(a.U1(b, 3) * c.factor), "", "Delegated " + g + " (" + b + " Vests)")),
                    d && (e += Ft.NT("&nbsp;-&nbsp;" + D.B.EQ(a.U1(d, 3) * c.factor), "", "HP Withdrawal (" + d + " Vests)")),
                    e + "&nbsp;)")
            : "";
};
k4.prototype.Ah = function (a) {
    if (null == a)
        return a;
    var b = parseInt(a);
    b = (a = 0 <= b) ? String(b) : String(b).substring(1);
    var c = parseInt(b.substring(0, 4));
    c = Math.log(c + 1e-9) / Math.log(10);
    b = b.length - 1 + (c - parseInt(c));
    isNaN(b) && (b = 0);
    b = Math.max(b - 9, 0) * (a ? 1 : -1);
    return Bl(9 * b + 25, 3);
};
k4.prototype.Fc = function (a, b, c) {
    return a < b ? ((a = c * (b - a)), moment().add(a, "seconds")) : 0;
};
k4.prototype.NA = function (a, b, c, d) {
    c = moment.unix(c);
    if (0 < b) {
        var e = moment().diff(c, "seconds");
        a = Math.min((100 / b) * a + e / d, 100);
    } else
        a = 0;
    return {NK: b, NM: (b * a) / 100, NL: a, aA: c, M9: D.B.aB(moment.utc())};
};
k4.prototype.NJ = function (a, b, c) {
    var d = a[b];
    a = d.last_update_time;
    d = parseFloat(d.current_mana);
    return this.NA(d, (c / ("downvote_manabar" == b ? 4 : 1)) * 1e6, a, NB);
};
k4.prototype.Kn = function (a) {
    return parseFloat(T7.Km(a.val(), ",", "").trim());
};
k4.prototype.GA = function (a, b, c, d) {
    if ("BTC" == c || "mBTC" == c || "Sat" == c) {
        var e = D.TE.TK(D.TE.X8("HBD", "USD")),
                f = D.TE.TK(D.TE.X8("HIVE", "USD"));
        a = a * e + b * f;
        "mBTC" == c ? (a *= 1e3) : "Sat" == c && (a *= 1e8);
    } else
        "HIVE" == c ? (a = b + a / D.V.Eh.Ei) : "HBD" == c ? (a = (b + a / D.V.Bn) * D.V.Bn) : ((e = D.TE.X8("HBD", c)), (f = D.TE.X8("HIVE", c)), (a = a * e + b * f));
    return d ? D.B.EQ(a) + " " + c : a;
};
D.V = {
    Ne: Nc,
    KS: "",
    Eh: {Ei: 0, Ej: 0, Ek: 0, El: 0, Em: 0, GG: 0, GI: 0, GH: 0, GJ: 0, Jl: 0, Jm: 0, GF: 0, GE: 0, HF: "", HG: "", HH: "", HI: ""},
    E6: aG.Db(0, 0),
    E5: aG.Db(0, 1),
    Fe: aG.Db(0, -1),
    Bw: 0,
    GN: null,
    HE: null,
    EE: !0,
    J7: !1,
    LK: !0,
    LQ: !1,
    Bn: 0,
    Gx: 0,
    Tv: 0,
    OW: moment(),
    Gz: 0,
    G2: 0,
    G3: 0,
    G4: 0,
    G5: 0,
    G6: 0,
    JV: 0,
    JW: 0,
    JX: 1,
    G9: 0,
    Tw: 0,
    Tx: 0,
    Ty: 0,
    FB: 0,
    FC: 0,
    Mp: "",
    OZ: 0,
    Oa: 0,
    Tp: 0,
    O3: 0,
    IE: [],
    E8: "",
    FA: "",
    E9: "",
};
var Cl = steem.api,
        Cm = steem.broadcast,
        NV = steem.utils,
        OP = steem.auth,
        OS = steem.formatter,
        iB = 3,
        N9 = 432e3,
        NB = N9 / 100,
        iA = N9,
        NC = N9 / 100,
        Tz = 0.001,
        Tn = 0.02,
        Zo = "steem.dao",
        h7 = "calc_rc_costs",
        kU = "return_op",
        UI = function () {
            this.Qy = [];
            this.h2 = new h1();
            this.jp = null;
        };
UI.prototype.Qx = function (a) {
    var b = this.Qy.indexOf(a);
    -1 == b && (b = this.Qy.push(a) - 1);
    return b;
};
UI.prototype.ml = function (a) {
    return parseInt(a.substr(0, 8), 16);
};
UI.prototype.lG = function (a) {
    for (var b = {}, c = 0; c < a.length; c++)
        b[a[c].name] = a[c];
    return b;
};
UI.prototype.Ko = function (a) {
    var b = AQ(a.to_withdraw),
            c = AQ(a.vesting_withdraw_rate);
    a = AQ(a.withdrawn);
    return 0 < b ? Math.min(c, b - a) : 0;
};
UI.prototype.NI = function (a) {
    var b = a.vesting_shares,
            c = a.received_vesting_shares,
            d = a.delegated_vesting_shares;
    aI.Cf(b) ? ((b = AQ(b.amount) / 1e6), (c = AQ(c.amount) / 1e6), (d = AQ(d.amount) / 1e6)) : ((b = AQ(b)), (c = AQ(c)), (d = AQ(d)));
    return b + c - d - this.Ko(a);
};
UI.prototype.Z1 = function (a) {
    a = a.proxied_vsf_votes;
    var b = 0;
    if (aI.Qc(a) && a.length)
        for (var c = 0; c < a.length; c++)
            b += AQ(a[c]);
    return b;
};
UI.prototype.hO = function (a) {
    D4.EA(a.message.replace("rethrow", ""), a.name);
};
UI.prototype.hN = function (a, b, c) {
    a = "Error while calling '" + b + "' occurred.<br>" + a.name + ": " + a.message + "<br>Switching to other node...";
    console.log(a);
    D4.D9(a, 3e3);
    D.d.ae();
};
UI.prototype.He = function (a, b, c, d, e) {
    var f = this,
            g = a;
    if (-1 < g.indexOf("_")) {
        var h = g.split("_");
        g = h[0];
        for (var k = 1; k < h.length; k++)
            g += T7.DR(h[k]);
    }
    b && (g += "Async");
    var l = 0,
            m = function () {
                l++;
                Cl[g].apply(0, c);
            },
            n = function (h, k) {
                h || void 0 !== k
                        ? h && null != h
                        ? "get_active_votes" == a && -1 < h.message.indexOf("unknown key")
                        ? (Pn("votes could not be loaded", c), n(null, []))
                        : (-1 < h.message.indexOf("plugin not enabled") && (l = 3),
                                3 > l
                                ? (Pn("[!] trying again after error", h), setTimeout(m, 3e3))
                                : (Pn("[!] request error", g, c),
                                        f.hN(h, a),
                                        D.d.hP(function () {
                                            setTimeout(function () {
                                                f.He(a, b, c, d, e);
                                            }, 3e3);
                                        })))
                        : d(k)
                        : e();
            };
    c.push(n);
    m();
};
UI.prototype.Ow = function (a, b, c, d, e) {
    var f = this,
            g = 0,
            h = function () {
                g++;
                Cl.send(a, {method: b, params: c}, k);
            };
    var k = function (k, m) {
        k && null != k
                ? 3 > g
                ? (Pn("trying send again after err", k), setTimeout(h, 3e3))
                : (f.hN(k, b),
                        D.d.hP(function () {
                            f.Ow(a, b, c, d, e);
                        }))
                : d(m);
    };
    h();
};
UI.prototype.Nj = function (a) {
    var b = ["unable to acquire database lock"];
    return a && a.message && -1 < b.indexOf(a.message);
};
UI.prototype.jn = function (a, b) {
    this.He("get_config", !1, [], a, b);
};
UI.prototype.jo = function (a, b) {
    var c = this;
    this.jn(function (b) {
        c.jp = b;
        a(void 0 !== b.HIVE_ADDRESS_PREFIX);
    }, b);
};
UI.prototype.Yl = function (a, b, c) {
    this.He("get_block", !0, [a], b, c);
};
UI.prototype.Mu = function (a, b, c) {
    this.He("get_block_header", !0, [a], b, c);
};
UI.prototype.NY = function (a, b, c, d) {
    this.He("get_ops_in_block", !0, [a, b], c, d);
};
UI.prototype.Mx = function (a, b, c) {
    this.He("get_transaction", !0, [a], b, c);
};
UI.prototype.DI = function (a, b) {
    this.He("get_hardfork_version", !0, [], a, b);
};
UI.prototype.DJ = function (a, b) {
    this.He("get_next_scheduled_hardfork", !0, [], a, b);
};
UI.prototype.Co = function (a, b) {
    var c = this;
    D.Z.Hp(Hq, a, function () {
        c.He("get_account_count", !0, [], a, b);
    });
};
UI.prototype.Cp = function (a, b) {
    var c = this;
    D.Z.Hp(Hr, a, function () {
        c.He("get_witness_count", !0, [], a, b);
    });
};
UI.prototype.N8 = function (a, b, c, d) {
    this.He("get_content", !0, [a, b], c, d);
};
UI.prototype.H9 = function (a, b, c, d, e) {
    if (c && (c = D.r.get("post_body_" + a + "_" + b, 5))) {
        d(c);
        return;
    }
    this.N8(
            a,
            b,
            function (c) {
                c = {title: c.title, body: c.body};
                D.r.set("post_body_" + a + "_" + b, c);
                d(c);
            },
            e
            );
};
UI.prototype.Bp = function (a, b, c, d, e, f) {
    if (c && (d = D.r.get("post_content_" + a + "_" + b, 5))) {
        e(d);
        return;
    }
    this.N8(
            a,
            b,
            function (d) {
                d = new X2(d);
                c && D.r.set("post_content_" + a + "_" + b, d);
                e(d);
            },
            f
            );
};
UI.prototype.clearPostFromCache = function (a, b) {
    D.r.set("post_content_" + a + "_" + b, steemPost);
};
UI.prototype.La = function (a, b, c, d) {
    this.He("get_active_votes", !0, [a, b], c, d);
};
UI.prototype.LB = function (a, b, c) {
    this.He("get_state", !0, [a], b, c);
};
UI.prototype.GP = function (a, b, c, d, e) {
    this.LB(
            a + "/@" + b + "/" + c,
            function (a) {
                var b = [],
                        c;
                for (c in a.content)
                    a.content[c].parent_author && b.push(a.content[c]);
                d(b);
            },
            e
            );
};
UI.prototype.Gt = function (a, b, c, d) {
    var e = this,
            f = [];
    if (!a.length)
        return c(f);
    var g = 0,
            h = function () {
                e.Bp(a[g].author, a[g].permlink, b, !1, k, d);
            };
    var k = function (b) {
        f.push(b);
        g++;
        g < a.length ? h() : c(f);
    };
    h();
};
UI.prototype.Jx = function (a, b, c, d, e, f) {
    this.Bp(
            b,
            c,
            !1,
            !0,
            function (b) {
                var c = b.La();
                b = d && !b.YY();
                if (!b)
                    for (var f = 0; f < c.length; f++)
                        if (c[f].voter == a && 0 < c[f].rshares) {
                            b = !0;
                            break;
                        }
                e(b);
            },
            f
            );
};
UI.prototype.ax = function (a, b, c, d) {
    this.He(a, !0, [b], c, d);
};
UI.prototype.B3 = function (a, b, c, d, e) {
    this.He(
            "get_discussions_by_author_before_date",
            !0,
            [a, b, "1970-01-01T00:00:00", c],
            function (a) {
                for (var b = [], c, e = 0; e < a.length; e++)
                    (c = a[e]), void 0 === c.id && c.post_id && (c.id = c.post_id), b.push(new X2(c));
                d(b);
            },
            e
            );
};
UI.prototype.Aw = function (a, b, c, d, e) {
    var f = this,
            g = [],
            h = [],
            k = Math.min(25, c),
            l = function () {
                f.B3(a, b, k, m, n);
            };
    var m = function (a) {
        if (a.length) {
            b = a[a.length - 1].G0();
            for (var f = !1, k, m = 0; m < a.length; m++)
                if (((k = a[m]), -1 == h.indexOf(k.G0()) && (h.push(k.G0()), g.push(k), (f = !0)), c && g.length >= c)) {
                    f = !1;
                    break;
                }
            d(g.length);
            f ? l() : (aI.Bu(g, "ep", !0), e(g));
        } else
            aI.Bu(g, "ep", !0), e(g);
    };
    var n = function (a) {
        Pn(a);
        l();
    };
    l();
};
UI.prototype.j4 = function (a, b, c, d) {
    this.He(
            a,
            !0,
            [b],
            function (a) {
                for (var b = [], d = 0; d < a.length; d++)
                    b.push(new X2(a[d]));
                c(b);
            },
            d
            );
};
UI.prototype.j5 = function (a, b, c, d) {
    var e = this,
            f = [],
            g = {limit: 100, start_author: "", start_permlink: "", truncate_body: 1},
            h = function (a) {
                for (var d = !1, e = 0; e < a.length; e++) {
                    a: {
                        var h = a[e];
                        for (var l = 0; l < f.length; l++)
                            if (f[l].aw() == h.aw() && f[l].G0() == h.G0()) {
                                h = !0;
                                break a;
                            }
                        h = !1;
                    }
                    if (!h && ((d = !0), f.push(a[e]), f.length == b))
                        break;
                }
                d && f.length < b ? ((g.start_author = a[a.length - 1].aw()), (g.start_permlink = a[a.length - 1].G0()), k()) : c(f);
            };
    var k = function () {
        e.j4(a, g, h, d);
    };
    k();
};
UI.prototype.j6 = function (a, b, c) {
    this.j5("get_post_discussions_by_payout", a, b, c);
};
UI.prototype.jq = function (a, b, c) {
    this.j5("get_comment_discussions_by_payout", a, b, c);
};
UI.prototype.jr = function (a, b, c) {
    this.j5("get_discussions_by_trending", a, b, c);
};
UI.prototype.MA = function (a, b, c) {
    this.He("get_order_book", !0, [a], b, c);
};
UI.prototype.L9 = function (a, b, c) {
    this.He("get_open_orders", !0, [a], b, c);
};
UI.prototype.Oh = function (a, b, c) {
    this.He("get_conversion_requests", !0, [a], b, c);
};
UI.prototype.Ox = function (a, b, c) {
    this.He("get_savings_withdraw_from", !0, [a], b, c);
};
UI.prototype.Ff = function (a, b, c, d) {
    this.He("get_witnesses_by_vote", !0, [a, b], c, d);
};
UI.prototype.k6 = function (a, b) {
    this.He("get_witness_schedule", !0, [], a, b);
};
UI.prototype.jF = function (a, b, c) {
    this.Ff(
            "",
            1e3,
            function (c) {
                for (var d = -1, f = 0; f < c.length; f++)
                    if (c[f].owner == a) {
                        d = f + 1;
                        break;
                    }
                b(d);
            },
            c
            );
};
UI.prototype.Cq = function (a, b, c) {
    var d = this,
            e = [],
            f,
            g = function (d) {
                if (void 0 === d || d.length != f.length) {
                    for (var g = [], k, n, p = 0; p < f.length; p++) {
                        n = f[p];
                        k = !1;
                        for (var q = 0; q < d.length; q++)
                            if (d[q].name == n) {
                                k = !0;
                                break;
                            }
                        k || g.push(n);
                    }
                    Pn("[!] accounts not found", g);
                    void 0 !== c && c(g);
                } else {
                    for (g = 0; g < d.length; g++)
                        e.push(d[g]);
                    a.length ? h() : b(e);
                }
            };
    var h = function () {
        var b = Math.min(1e3, a.length);
        f = [];
        for (var e = 0; e < b; e++)
            f.push(a[e]);
        a.splice(0, b);
        d.He("get_accounts", !0, [f], g, c);
    };
    h();
};
UI.prototype.lJ = function (a, b, c) {
    var d = this;
    this.Cq(
            a,
            function (a) {
                return b(d.lG(a));
            },
            c
            );
};
UI.prototype.aY = function (a, b, c) {
    this.Cq(
            [a],
            function (d) {
                d.length && d[0].name == a ? b(d[0]) : void 0 !== c && c();
            },
            c
            );
};
UI.prototype.Di = function (a, b, c) {
    this.He("get_witness_by_account", !0, [a], b, c);
};
UI.prototype.mF = function (a, b, c) {
    var d = this,
            e = function (a) {
                var c = {},
                        e;
                for (e in a) {
                    var f = a[e],
                            l = AQ(f.vesting_shares);
                    f = d.Z1(f) / 1e6;
                    c[e] = {mU: l, mT: f};
                }
                b(c);
            };
    this.lF(
            a,
            function (a) {
                return d.lJ(a, e, c);
            },
            c
            );
};
UI.prototype.lF = function (a, b, c) {
    var d = this,
            e = [],
            f = "",
            g = function (c) {
                c.votes && (c = c.votes);
                for (var d = 1e3 == c.length, g = 0; g < c.length; g++) {
                    var k = c[g];
                    f = k.account;
                    k.witness == a ? e.includes(f) || e.push(f) : (d = !1);
                }
                d ? h() : b(e);
            };
    var h = function () {
        d.Ow("database_api", "list_witness_votes", {start: [a, f], limit: 1e3, order: "by_witness_account"}, g, c);
    };
    h();
};
UI.prototype.Dw = function (a, b, c) {
    this.He("get_recovery_request", !0, [a], b, c);
};
UI.prototype.Ct = function (a, b, c) {
    this.He("get_follow_count", !0, [a], b, c);
};
UI.prototype.Cu = function (a, b, c, d, e, f) {
    var g = this,
            h = [],
            k = "follower" == b ? 1e3 : 100,
            l = "",
            m = function () {
                g.He(a, !0, [d, l, c, k], n, f);
            };
    var n = function (a) {
        for (var c, d = 0; d < a.length; d++)
            (c = a[d][b]), -1 == h.indexOf(c) && h.push(c);
        a.length < k || c == l ? e(h) : ((l = c), m());
    };
    m();
};
UI.prototype.C6 = function (a, b, c) {
    this.Cu("get_following", "following", "ignore", a, b, c);
};
UI.prototype.Cr = function (a, b, c, d, e) {
    this.He("get_vesting_delegations", !0, [a, b, c], d, e);
};
UI.prototype.XH = function (a, b, c) {
    var d = this,
            e = [],
            f = "",
            g = 0,
            h = function (a) {
                for (var c = g; c < a.length; c++)
                    e.push(a[c]);
                1e3 > a.length ? b(e) : ((f = a[a.length - 1].delegatee), (g = 1), k());
            };
    var k = function () {
        d.Cr(a, f, 1e3, h, c);
    };
    k();
};
UI.prototype.I8 = function (a, b, c, d, e) {
    this.Ow("condenser_api", "get_expiring_vesting_delegations", [a, b, c], d, e);
};
UI.prototype.XG = function (a, b, c) {
    var d = this,
            e = [],
            f = moment.utc(),
            g = function (a) {
                for (var c = 0; c < a.length; c++)
                    e.push(a[c]);
                1e3 > a.length ? b(e) : ((f = moment.utc(a[a.length - 1].expiration).add(1, "second")), h());
            };
    var h = function () {
        d.I8(a, f.format("YYYY-MM-DDTHH:mm:ss"), 1e3, g, c);
    };
    h();
};
UI.prototype.M1 = function (a, b, c) {
    this.Ow("rc_api", "find_rc_accounts", {accounts: a}, b, c);
};
UI.prototype.Nk = function (a, b) {
    this.Ow("rc_api", "get_resource_params", {}, a, b);
};
UI.prototype.hy = function (a, b) {
    this.Ow("rc_api", "get_resource_pool", {}, a, b);
};
UI.prototype.PQ = function (a, b) {
    for (var c = {}, d = Object.keys(b[1]).sort(), e = this.Qx(b[0]), f, g = 0; g < d.length; g++)
        (f = d[g]), (c[f] = b[1][f]);
    b = T7.Kh(JSON.stringify(c));
    return a + "-" + String(e) + "-" + b;
};
UI.prototype.Cx = function (a, b, c, d, e, f) {
    var g = this,
            h = [a, b, c];
    Pn("get history", c);
    this.He(
            "get_account_history",
            !0,
            h,
            function (a) {
                for (var b = [], c = -1, f = "", h, k, r, t, u, x = 0; x < a.length; x++)
                    (h = a[x][0]),
                            (k = a[x][1]),
                            (r = moment.utc(k.timestamp).local()),
                            (u = r.unix() + (k.virtual_op ? 1 : 0)),
                            k.virtual || (k.trx_id != f ? ((c = 0), (f = k.trx_id)) : c++, (k.op_in_trx = c)),
                            d && (t = "op-" + g.PQ(k.timestamp, k.op)),
                            b.push(
                                    d
                                    ? {id: h, J9: t, ts: r, fk: u, timestamp: k.timestamp, op: k.op[0], data: k.op[1], block: k.block, blockTrx: k.trx_in_block, trx: k.virtual_op ? "0" : k.trx_id, virtualOp: k.virtual_op}
                            : {id: h, ts: r, fk: u, timestamp: k.timestamp, op: k.op[0], data: k.op[1]}
                            );
                e(b);
            },
            function (h) {
                g.Nj(h)
                        ? setTimeout(function () {
                            return g.Cx(a, b, c, d, e, f);
                        }, 3e3)
                        : void 0 !== f && f();
            }
    );
};
UI.prototype.Bv = function (a, b, c, d, e, f, g, h, k) {
    var l = this,
            m = [],
            n = b,
            p = function () {
                0 <= n && n < c && (c = n - 1);
                if (0 == n && -1 == c)
                    return h(m);
                l.Cx(a, n, c, g, q, k);
            };
    var q = function (a) {
        var b = 0 == a.length,
                g = -1;
        if (0 < a.length) {
            g = a[a.length - 1].id;
            for (var k = a.length - 1; 0 <= k; k--) {
                var l = a[k];
                if (-1 != f.indexOf(l.op)) {
                    var q = moment.utc(l.timestamp);
                    if (q < d) {
                        b = !0;
                        break;
                    }
                    q <= e && m.push(l);
                }
            }
        }
        a = (-1 == n && 0 < a.length ? g : n) - c;
        0 > a && (a = n);
        if (-1 == g || a == n)
            b = !0;
        b ? h(m) : ((n = a), p());
    };
    p();
};
UI.prototype.Kp = function (a, b, c, d) {
    this.He("get_withdraw_routes", !0, [a, b], c, d);
};
UI.prototype.Zz = function (a, b, c, d) {
    var e = this,
            f = "",
            g = function (d) {
                d.accounts && (d = d.accounts);
                for (var g = !1, k, n = 0; n < d.length; n++)
                    (k = d[n]), (f = k.name), k.proxy == a && void 0 === b[k.name] && ((g = !0), (b[k.name] = {proxy: k.proxy, vests: e.NI(k), checked: !1}));
                g && 10 == d.length ? h() : c();
            };
    var h = function () {
        e.Ow("database_api", "list_accounts", {start: [a, f], limit: 10, order: "by_proxy"}, g, d);
    };
    h();
};
UI.prototype.Z0 = function (a, b, c) {
    var d = this,
            e = {},
            f,
            g = function (a) {
                e[f].checked = !0;
                h();
            };
    var h = function () {
        f = "";
        for (var a in e)
            if (!1 === e[a].checked) {
                f = a;
                break;
            }
        f ? d.Zz(f, e, g, c) : b(e);
    };
    e[a] = {proxy: "", checked: !1};
    h();
};
UI.prototype.Z2 = function (a, b, c) {
    var d = this,
            e = [],
            f = function (c) {
                e.push(a);
                c.proxy ? ((a = c.proxy), g()) : b(e);
            };
    var g = function () {
        return d.aY(a, f, c);
    };
    g();
};
UI.prototype.Z3 = function (a, b, c) {
    this.Z2(
            a,
            function (a) {
                return b(a[a.length - 1]);
            },
            c
            );
};
UI.prototype.lI = function (a, b, c) {
    var d = this,
            e = [],
            f = [],
            g;
    for (g in a) {
        var h = a[g];
        a[g].proxies = [];
        h.proxy && (e.push(g), f.push(h.proxy));
    }
    var k = function () {
        var c = {},
                e;
        for (e in a) {
            var f = a[e],
                    g = AQ(f.vesting_shares),
                    h = d.Z1(f) / 1e6,
                    k = a[e].proxies;
            k = k.length ? k[k.length - 1] : "";
            var l = "" != k;
            c[e] = {mU: g, mT: h, proxy: k, proxies: f.proxies, hasProxy: l, hasProxyVoted: l && void 0 !== a[k]};
        }
        b(c);
    },
            l = function (b, e) {
                for (var f = 0; f < b.length; f++)
                    aI.Lm(a[b[f]].proxies, e[f]);
                f = function (c) {
                    for (var d = [], e = [], f = 0; f < c.length; f++) {
                        var g = c[f],
                                h = b[f];
                        g.proxy && (aI.Lm(a[h].proxies, g.proxy), d.push(h), e.push(g.proxy));
                    }
                    l(d, e);
                };
                for (var g = b.length - 1; 0 <= g; g--) {
                    var h = b[g],
                            m = a[e[g]];
                    void 0 !== m && (b.splice(g, 1), e.splice(g, 1), m.proxy && aI.Lm(a[h].proxies, m.proxy));
                }
                e.length ? d.Cq(e, f, c) : k();
            };
    l(e, f);
};
UI.prototype.Ze = function (a, b, c) {
    this.He("find_proposals", !0, [a], b, c);
};
UI.prototype.Zf = function (a, b, c, d, e, f, g) {
    this.He("list_proposals", !0, [a, b, c, d, e], f, g);
};
UI.prototype.Zg = function (a, b, c, d, e, f, g) {
    this.He("list_proposal_votes", !0, [a, b, c, d, e], f, g);
};
UI.prototype.bv = function (a, b, c, d) {
    this.Zg(
            [a, b],
            1,
            "by_proposal_voter",
            "ascending",
            "all",
            function (d) {
                d.length ? ((d = d[0]), c(d.proposal.proposal_id == a && d.voter == b)) : c(!1);
            },
            d
            );
};
UI.prototype.Zp = function (a, b, c) {
    var d = this,
            e = [],
            f = "",
            g = function (c) {
                for (var d = 1e3 == c.length, g = 0; g < c.length; g++) {
                    var k = c[g];
                    f = k.voter;
                    if (k.proposal.proposal_id == a)
                        -1 == e.indexOf(f) && e.push(f);
                    else {
                        d = !1;
                        break;
                    }
                }
                d ? h() : b(e);
            };
    var h = function () {
        d.Zg([a, f], 1e3, "by_proposal_voter", "ascending", "all", g, c);
    };
    h();
};
UI.prototype.Zq = function (a, b, c) {
    var d = this;
    this.Zp(
            a,
            function (a) {
                return d.lJ(a, b, c);
            },
            c
            );
};
UI.prototype.lH = function (a, b, c) {
    var d = this;
    this.Zq(
            a,
            function (a) {
                return d.lI(a, b, c);
            },
            c
            );
};
UI.prototype.Px = function (a, b, c) {
    var d = this;
    if (a === h7)
        return this.h6([b]);
    if (a === kU)
        return b;
    var e = function (a, b) {
        a && null != a ? (d.hO(a), c(!1)) : c(!0);
    };
    if (this.Nh(a))
        this.ON(b[0], b[1], e);
    else if (this.O1(a))
        this.O0(a, [b], e);
    else if (aI.Qc(a))
        Cm.send({extensions: [], operations: [b]}, a, e);
    else {
        a = [a];
        for (var f = b[0].split("_"), g = f[0], h = 1; h < f.length; h++)
            g += T7.DR(f[h]);
        for (var k in b[1])
            a.push(b[1][k]);
        a.push(e);
        Cm[g].apply(0, a);
    }
    return !0;
};
UI.prototype.iI = function (a, b, c, d) {
    var e = this,
            f = function (a, b) {
                a && null != a ? (e.hO(a), void 0 !== d && d(a)) : c();
            };
    this.O1(a) ? this.O0(a, b, f) : Cm.send({extensions: [], operations: b}, [a], f);
};
UI.prototype.jc = function (a, b, c, d, e, f) {
    var g = this,
            h = b.length,
            k = 0,
            l = function () {
                b.length ? (k++, D4.D9("Broadcasting Operation " + k + " of " + h + "...", 3e3, !0), g.Px(a, b[0], m)) : e();
            };
    var m = function (a) {
        a ? (d(k - 1), b.splice(0, 1), setTimeout(l, c)) : f && f();
    };
    l();
};
UI.prototype.FR = function (a) {
    return {weight_threshold: 1, account_auths: [], key_auths: [[a, 1]]};
};
UI.prototype.DK = function (a, b, c, d, e, f) {
    return this.Px(a, ["claim_reward_balance", {account: b, reward_steem: c, reward_sbd: d, reward_vests: e}], f);
};
UI.prototype.C7 = function (a, b, c, d) {
    b = ["custom_json", {required_auths: [], required_posting_auths: [D.l], id: b, json: JSON.stringify(c)}];
    return this.Px(a, b, d);
};
UI.prototype.C8 = function (a, b, c, d) {
    return this.C7(a, "follow", ["follow", {follower: D.l, following: b, what: [c ? "blog" : ""]}], d);
};
UI.prototype.FV = function (a, b, c, d, e, f) {
    return this.Px(a, ["vote", {voter: b, author: c, permlink: d, weight: e}], f);
};
UI.prototype.Fv = function (a, b, c, d, e) {
    return this.Px(a, ["account_witness_vote", {account: b, witness: c, approve: d}], e);
};
UI.prototype.F0 = function (a, b, c, d) {
    return this.Px(a, ["account_witness_proxy", {account: b, proxy: c}], d);
};
UI.prototype.FT = function (a, b, c, d, e, f) {
    return this.Px(a, ["transfer", {from: b, to: c, amount: d, memo: e}], f);
};
UI.prototype.FS = function (a, b, c, d, e) {
    return this.Px(a, ["transfer_to_vesting", {from: b, to: c, amount: d}], e);
};
UI.prototype.Om = function (a, b, c, d, e, f) {
    return this.Px(a, ["transfer_to_savings", {from: b, to: c, amount: d, memo: e}], f);
};
UI.prototype.On = function (a, b, c, d, e, f, g) {
    return this.Px(a, ["transfer_from_savings", {from: b, request_id: f, to: c, amount: d, memo: e}], g);
};
UI.prototype.O6 = function (a, b, c, d) {
    return this.Px(a, ["cancel_transfer_from_savings", {from: b, request_id: c}], d);
};
UI.prototype.FU = function (a, b, c, d, e) {
    return this.Px(a, ["delegate_vesting_shares", {delegator: b, delegatee: c, vesting_shares: d}], e);
};
UI.prototype.Kd = function (a, b, c, d, e) {
    return this.Px(a, ["withdraw_vesting", {account: b, vesting_shares: c}], e);
};
UI.prototype.LM = function (a, b, c, d, e, f) {
    return this.Px(a, ["set_withdraw_vesting_route", {from_account: b, to_account: c, percent: d, auto_vest: e}], f);
};
UI.prototype.LF = function (a, b, c, d, e) {
    return this.Px(a, ["convert", {owner: b, requestid: d, amount: c}], e);
};
UI.prototype.ML = function (a, b, c, d, e, f, g, h) {
    return this.Px(a, ["limit_order_create", {owner: b, orderid: c, amount_to_sell: d, min_to_receive: e, fill_or_kill: f, expiration: g}], h);
};
UI.prototype.MM = function (a, b, c, d) {
    return this.Px(a, ["limit_order_cancel", {owner: b, orderid: c}], d);
};
UI.prototype.My = function (a, b, c, d) {
    return this.Px(a, ["claim_account", {creator: b, fee: c, extensions: []}], d);
};
UI.prototype.av = function (a, b, c, d, e, f, g, h, k) {
    return this.Px(a, ["create_proposal", {creator: b, receiver: c, start_date: d, end_date: e, daily_pay: f, subject: g, permlink: h, extensions: []}], k);
};
UI.prototype.Zc = function (a, b, c, d, e) {
    return this.Px(a, ["update_proposal_votes", {voter: b, proposal_ids: c, approve: d, extensions: []}], e);
};
UI.prototype.Zd = function (a, b, c, d) {
    return this.Px(a, ["remove_proposal", {proposal_owner: b, proposal_ids: c, extensions: []}], d);
};
UI.prototype.Mz = function (a, b, c, d, e, f, g, h) {
    b = ["create_claimed_account", {creator: b, new_account_name: c, owner: this.FR(d), active: this.FR(e), posting: this.FR(f), memo_key: g, json_metadata: "{}", extensions: []}];
    return this.Px(a, b, h);
};
UI.prototype.LL = function (a, b, c, d, e, f, g, h) {
    return this.Px(a, ["account_update", {account: b, owner: c ? c : void 0, active: d ? d : void 0, posting: e ? e : void 0, memo_key: f, json_metadata: g ? g : ""}], h);
};
UI.prototype.LG = function (a, b, c, d) {
    return this.LL(a, b, "", "", "", "", c, d);
};
UI.prototype.ls = function (a, b, c, d, e) {
    return this.LL(a, b, "", "", c, d, "", e);
};
UI.prototype.lt = function (a, b, c, d, e) {
    return this.LL(a, b, "", c, "", d, "", e);
};
UI.prototype.lu = function (a, b, c, d, e) {
    return this.LL(a, b, c, "", "", d, "", e);
};
UI.prototype.Pw = function (a, b, c, d) {
    return this.Px(a, ["change_recovery_account", {account_to_recover: b, new_recovery_account: c, extensions: []}], d);
};
UI.prototype.Fz = function (a, b, c, d, e) {
    b = ["request_account_recovery", {recovery_account: b, account_to_recover: c, new_owner_authority: this.FR(d), extensions: []}];
    return this.Px(a, b, e);
};
UI.prototype.Ci = function (a, b, c, d, e) {
    b = ["recover_account", {account_to_recover: b, new_owner_authority: this.FR(c), recent_owner_authority: this.FR(d), extensions: []}];
    return this.Px(a, b, e);
};
UI.prototype.k0 = function (a, b, c, d) {
    return this.Px(a, ["witness_set_properties", {owner: b, props: c, extensions: []}], d);
};
UI.prototype.k1 = function (a, b, c, d, e, f, g) {
    return this.Px(a, ["witness_update", {owner: b, url: c, block_signing_key: d, props: e, fee: f}], g);
};
UI.prototype.Er = function (a, b) {
    try {
        return OP.wifIsValid(a, b);
    } catch (c) {
        return !1;
    }
};
UI.prototype.l6 = function (a, b, c, d) {
    for (var e = b[c], f = !1, g = 0; g < e.length; g++)
        if (this.Er(a, e[g])) {
            f = !0;
            break;
        }
    if (d)
        for (d = ["owner", "active", "posting"], e = 0; e < d.length; e++)
            if (d[e] != c && this.l6(a, b, d[e], !1))
                return !1;
    return f;
};
UI.prototype.MN = function (a) {
    return 53 == a.length && a.startsWith("STM");
};
UI.prototype.OT = function (a, b, c) {
    return OP.getPrivateKeys(a, b, c);
};
UI.prototype.OU = function () {
    return OS.createSuggestedPassword();
};
UI.prototype.OX = function (a) {
    return "P" + OP.toWif(a, this.OU(), "master");
};
UI.prototype.Th = function (a, b, c) {
    return this.l6(a, b, "posting", c);
};
UI.prototype.Tj = function (a, b, c) {
    return this.l6(a, b, "active", c);
};
UI.prototype.l7 = function (a, b, c) {
    return this.l6(a, b, "owner", c);
};
UI.prototype.Ti = function (a, b) {
    return this.Er(a, b.memo);
};
UI.prototype.O2 = function (a, b, c) {
    if (this.O1(a))
        hive_keychain.requestVerifyKey(D.l, b, a == K8 ? "Memo" : "Active", function (a) {
            a.success ? c(a.result) : console.log(a);
        });
    else
        try {
            var d = NV.decodeMemo(a, b);
            c(d);
        } catch (e) {
            D4.EA("The memo could not be decoded.<br>Error: " + e.message + "<br>Memo: " + b, "Error Decoding Memo");
        }
};
UI.prototype.Nh = function (a) {
    return -1 != a.indexOf(cO);
};
UI.prototype.ON = function (a, b, c) {
    -1 < [Bd, BC].indexOf(a) && !b.memo && (b.memo = " ");
    c = "";
    var d;
    for (d in b) {
        var e = b[d];
        if (void 0 !== e) {
            if (aI.Qc(e) || aI.Cf(e))
                e = JSON.stringify(e);
            c += (c ? "&" : "") + d + "=" + encodeURIComponent(e);
        }
    }
    aH.DQ("https://steemlogin.com/sign/" + a + "?" + c, !0);
};
UI.prototype.Oz = function (a, b) {
    if (1 == D.G.get(Oy) && void 0 !== window.hive_keychain)
        try {
            hive_keychain.requestHandshake(a);
        } catch (c) {
            console.log(c), b();
        }
    else
        b();
};
UI.prototype.O1 = function (a) {
    return a == F1 || a == F2 || a == K8;
};
UI.prototype.bL = function (a, b, c) {
    var d = function (d) {
        d.success && "#[sw.sign_in]" == d.result ? b(a) : c();
    };
    this.aY(
            a,
            function (b) {
                b = NV.encodeMemo("5KMhF4ARAxmi9LvBPrejcpWckPd9b9CmVPEFxz27PxWdii19AKa", b.posting.key_auths[0][0], "#[sw.sign_in]");
                hive_keychain.requestVerifyKey(a, b, "Posting", d);
            },
            c
            );
};
UI.prototype.O0 = function (a, b, c) {
    hive_keychain.requestBroadcast(D.l, b, a == F2 ? "Posting" : "Active", function (a) {
        a
                ? a.success
                ? c(null, a.result)
                : a.error && a.error.length
                ? ("user_cancel" == a.error && (a.error = {message: "Operation has been cancelled.", name: "Info"}), c(a.error, null))
                : c({message: "KeyChain returned no error text.", name: "Error"}, null)
                : c({message: "Response from KeyChain is empty.", name: "Error"}, null);
    });
};
UI.prototype.hz = function (a, b) {
    var c = D.S,
            d = c.h2;
    d.h3()
            ? a()
            : c.hy(function (b) {
                d.h5(b);
                a();
            }, b);
};
UI.prototype.Nq = function (a, b) {
    var c = D.S,
            d = c.h2;
    d.h3()
            ? a()
            : c.Nk(function (b) {
                d.h4(b);
                a();
            }, b);
};
UI.prototype.h6 = function (a) {
    return this.h2.h6(a);
};
UI.prototype.lw = function (a, b, c) {
    var d = this;
    a = Math.min(60, T5(a, 10));
    var e,
            f,
            g = function (c) {
                var d = c ? c.previous : "0000000000000000000000000000000000000000";
                c = new Date(e.getTime() + 6e4 * a);
                d = T7.lx(d);
                d = Uint8Array.from(d).buffer;
                d = new DataView(d, 4).getUint32(0, !0);
                b({ref_block_num: f, ref_block_prefix: d, expiration: c, operations: []});
            };
    D.S.He(
            "get_dynamic_global_properties",
            !0,
            [],
            function (a) {
                var b = a.last_irreversible_block_num;
                e = new Date(a.time + "Z");
                f = (b - 1) & 65535;
                d.Mu(b, g, c);
            },
            c
            );
};
UI.prototype.signTransaction = function (a, b) {
    return OP.signTransaction(a, b);
};
var ad = function () {
    this.items = [];
    this.hR = [];
    this.hM = this.YZ = !1;
    this.mR = null;
    this.jC = "anyx.io techcoderx.com api.steem.house rpc.esteem.app steemd.privex.io api.timcliff.com steemd.minnowsupportproject.org rpc.steemviz.com api.hive.blog".split(" ");
    this.Md();
};
ad.prototype.Fq = function (a) {
    a = a.toLowerCase().replace(/(https|wss):\/\//, "");
    for (var b = 0; b < this.items.length; b++)
        if (this.items[b].url == a)
            return !0;
    return !1;
};
ad.prototype.jB = function (a) {
    a = a.toLowerCase().replace(/(https|wss):\/\//, "");
    return -1 < this.jC.indexOf(a);
};
ad.prototype.Fr = function (a, b, c, d, e) {
    this.items.push({url: a, by: b, type: c, prio: d, active: e, errors: 0});
};
ad.prototype.af = function (a) {
    a = a.toLowerCase();
    var b = -1 < a.indexOf("wss") ? "wss" : "https";
    a = a.replace(/(https|wss):\/\//, "");
    this.Fq(a) || this.Fr(a, "", b, 1, 1);
    return a;
};
ad.prototype.bw = function (a) {
    return (a.type ? a.type + "://" : "") + a.url;
};
ad.prototype.ae = function (a, b) {
    this.mR.errors++;
    a && this.CQ(!0, b);
};
ad.prototype.onRPCConnect = function () {
    for (var a = [], b = 0; b < this.hR.length; b++)
        a.push(this.hR[b]);
    this.hR = [];
    for (b = 0; b < a.length; b++)
        a[b]();
};
ad.prototype.CR = function (a, b, c) {
    var d = this;
    if (!this.YZ) {
        this.YZ = !0;
        var e = !1,
                f = function (a) {
                    e = !0;
                    d.YZ = !1;
                    if (a)
                        d.onRPCConnect();
                    else
                        d.ae();
                    c(a);
                };
        setTimeout(function () {
            e || f(!1);
        }, 7e3);
        try {
            var g = this.bw(a);
            this.mR = a;
            console.log("Testing connection: " + g);
            Cl.setOptions({url: g});
            D.S.jo(
                    function (c) {
                        e || (c ? (console.log("Connected to: " + g), D.G.set(GU, a.url, !0), b && D4.D9("Connection established: " + g), f(!0)) : (D4.D9("The connected node does not belong to a Hive network!"), f(!1)));
                    },
                    function () {
                        e || f(!1);
                    }
            );
        } catch (h) {
            console.error(h), e || f(!1);
        }
    }
};
ad.prototype.CQ = function (a, b) {
    var c = this;
    if (!this.hM) {
        this.hM = !0;
        var d = function () {
            aI.Bu(c.items, "errors", !1);
            var e = c.items[0];
            c.YZ = !1;
            c.CR(e, a, function (a) {
                !0 === a
                        ? ((a = g8("#selectSteemNode")) && a.aM(e.url, !1), (c.hM = !1), void 0 !== b && b(e))
                        : setTimeout(function () {
                            return d();
                        }, 3e3);
            });
        };
        d();
    }
};
ad.prototype.hP = function (a) {
    4 < this.hR.length || (-1 == this.hR.indexOf(a) && this.hR.push(a), this.CQ(!1));
};
ad.prototype.HB = function (a) {
    for (var b = 0, c = 0; c < this.items.length; c++)
        if (this.items[c].url == a) {
            b = c;
            break;
        }
    return b;
};
ad.prototype.get = function (a) {
    a = this.HB(a);
    return this.items[a];
};
ad.prototype.HA = function () {
    if (D.V.G2) {
        var a = moment().diff(D.V.G2, "minutes");
        10 <= a &&
                ((a = "No block change for > " + a + " minutes! Switching to other node..."),
                        console.log(a),
                        D4.D9(a),
                        this.ae(!0, function () {
                            D.V.G2 = moment();
                        }));
    }
};
ad.prototype.Md = function () {
    this.items = [];
    this.Fr("api.hive.blog", "@blocktrades", "https", 1, 1);
    this.Fr("api.openhive.network", "@gtg", "https", 1, 1);
    this.Fr("anyx.io", "@anyx", "https", 2, 1);
    this.Fr("api.hivekings.com", "@drakos", "https", 3, 1);
    this.Fr("hived.privex.io", "@privex", "https", 3, 1);
    this.Fr("rpc.ausbit.dev", "@ausbitbank", "https", 3, 1);
    //this.Fr("api.steem.fans", "ety001", "https", 3, 1);
};
var Ay = "vote",
        Az = "curation_reward",
        A0 = "author_reward",
        A2 = "claim_reward_balance",
        A3 = "comment_benefactor_reward",
        A4 = "producer_reward",
        A6 = "comment",
        A7 = "edit_comment",
        A8 = "delete_comment",
        A5 = "comment_options",
        A9 = "create_post",
        BA = "edit_post",
        Be = "transfer",
        BB = "transfer_to_vesting",
        BC = "transfer_to_savings",
        Bd = "transfer_from_savings",
        O7 = "cancel_transfer_from_savings",
        Bf = "fill_transfer_from_savings",
        BD = "fill_order",
        BE = "account_witness_vote",
        Bc = "account_witness_proxy",
        BF = "delegate_vesting_shares",
        BH = "return_vesting_delegation",
        BI = "limit_order_create",
        Bh = "limit_order_cancel",
        BJ = "custom_json",
        BK = "interest",
        BM = "withdraw_vesting",
        BL = "set_withdraw_vesting_route",
        BN = "fill_vesting_withdraw",
        Bi = "feed_publish",
        LH = "convert",
        LI = "fill_convert_request",
        OI = "request_account_recovery",
        OH = "recover_account",
        Nt = "change_recovery_account",
        M6 = "claim_account",
        M7 = "create_claimed_account",
        M8 = "account_create",
        Bj = "account_create_with_delegation",
        CD = "account_update",
        j9 = "account_update2",
        Ep = "witness_update",
        PY = "witness_set_properties",
        W1 = "create_proposal",
        aS = "remove_proposal",
        XE = "update_proposal_votes",
        W2 = "sps_fund",
        ZE = "proposal_pay",
        jH = "escrow_approve",
        jI = "escrow_dispute",
        jJ = "escrow_release",
        jK = "escrow_transfer",
        BP = [A6, A7, A9, BA],
        LR = [Be, BB, BC, Bd, O7, BI, Bh, BD, jK, BF, BH, BM, BN, Bf],
        BQ = [Be, jK, BB, BC, Bd],
        Nl = [BJ, A5, A2, Bi, BI, Bh, M6, A8, LH, CD, j9, Ep, BM, OH, PY, Nt],
        BR = [A2, Az, A0, A3, A4],
        CE = "created last_account_update last_vote_time last_root_post last_post last_owner_proved last_owner_update last_active_proved last_account_recovery sbd_seconds_last_update sbd_last_interest_payment savings_sbd_seconds_last_update savings_sbd_last_interest_payment last_sbd_exchange_update hardfork_time_vote start_date end_date expiration ratification_deadline escrow_expiration".split(
                " "
                ),
        h1 = function () {
            this.h0 = this.Nr = null;
        };
h1.prototype.h3 = function () {
    return this.Nr && this.h0;
};
h1.prototype.h4 = function (a) {
    this.Nr = a;
    a = this.Nr.size_info;
    this.sizeInfo = a.resource_state_bytes;
    this.execInfo = a.resource_execution_time;
};
h1.prototype.h5 = function (a) {
    this.h0 = a;
};
h1.prototype.iF = function () {
    return parseInt(1e4 * DW(D.o.U3.Um, 4));
};
h1.prototype.iE = function () {
    return parseInt(1e3 * DW(D.o.U3.Ul, 3));
};
h1.prototype.iR = function (a, b) {
    var c = {resource_history_bytes: 0, resource_new_accounts: 0, resource_market_bytes: 0, resource_state_bytes: 0, resource_execution_time: 0};
    a = a.operations;
    var d = this.sizeInfo;
    c.resource_history_bytes += b;
    var e = new iJ(d, this.execInfo),
            f;
    for (f in a)
        e.iL(a[f][0], a[f][1]);
    c.resource_new_accounts += e.iN;
    e.iM && (c.resource_market_bytes += b);
    c.resource_state_bytes += d.transaction_object_base_size + d.transaction_object_byte_size * b + e.iO;
    c.resource_execution_time += e.iP;
    return c;
};
h1.prototype.h9 = function (a, b, c, d) {
    if (0 >= c)
        return 0 > c ? -this.h9(a, b, -c, d) : 0;
    d = parseInt(d);
    d *= parseInt(a.coeff_a);
    d = parseInt(ED.iX(d, parseInt(a.shift)));
    d = (d + 1) * c;
    a = parseInt(a.coeff_b);
    a += Math.max(b, 0);
    return Math.floor(d / a) + 1;
};
h1.prototype.iS = function (a, b) {
    var c = this.h0.resource_pool,
            d = this.Nr.resource_names;
    a = this.iR(a, b);
    b = 0;
    var e = {},
            f;
    for (f in d) {
        var g = d[f];
        var h = this.Nr.resource_params[g];
        var k = parseInt(c[g].pool);
        var l = h.resource_dynamics_params.resource_unit;
        a[g] *= l;
        e[g] = this.h9(h.price_curve_params, k, a[g], this.iQ);
        b += e[g];
    }
    return {usage: a, cost: e, totalCost: b};
};
h1.prototype.h6 = function (a) {
    var b = this.iF(),
            c = this.iE();
    this.iQ = Math.floor(b / Math.floor(N9 / iB));
    if (!this.iQ)
        return !1;
    a = {
        ref_block_num: 12345,
        ref_block_prefix: 31415926,
        expiration: "2018-09-28T01:02:03",
        operations: a,
        extensions: [],
        signatures: ["000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f40"],
    };
    var d = JSON.stringify(a).length;
    a = this.iS(a, d);
    b = DW((a.totalCost * c) / (1e3 * b), 3);
    return {iT: 100 * a.totalCost, iU: b, iV: a};
};
var iJ = function (a, b) {
    this.sizeInfo = a;
    this.execInfo = b;
    this.iP = this.iO = this.iN = this.iM = 0;
};
iJ.prototype.iK = function (a) {
    var b = this.sizeInfo;
    return b.authority_base_size + b.authority_account_member_size * a.account_auths.length + b.authority_key_member_size * a.key_auths.length;
};
iJ.prototype.iL = function (a, b) {
    this.iP += this.execInfo[a + "_operation_exec_time"];
    a == M6 && 0 == AQ(b.fee) && (this.iN += 1);
};
var by = function (a, b) {
    this.steem = a;
    this.tokens = b;
    this.XD = b.U3;
    this.VX = this.XD.aP;
    this.aR = {};
    this.aN = {};
    this.M4 = {};
    this.aO = null;
    this.jG = -1;
    this.jA = "";
    this.VW = ["", ""];
    this.Tg = {};
    this.Fw = [];
    this.TQ = [];
    this.WD = [];
    this.OM = this.O3 = 0;
    this.Yy = 20;
    this.Vr(VI, 0);
    this.VJ(VI, 0);
    this.Vn(VI, 0);
    this.VM(VI, 0);
    this.VN(VI, 0);
    this.VO(VI, 0);
    this.Vr(IQ, 0);
    this.VJ(IQ, 0);
    this.Vr(VT, 0);
    this.VJ(VT, 0);
    this.Wa = new WZ(this);
    this.Wx = new Ww(this);
};
by.prototype.reset = function () {
    this.aN = {};
    this.OM = 0;
    this.jA = "";
    this.Fw = [];
};
by.prototype.aQ = function (a) {
    this.XD = a;
    this.VX = a.aP;
};
by.prototype.M3 = function (a, b, c) {
    this.aR = a;
    this.aO = null;
    for (var d = ["owner", "active", "posting"], e = {owner: [], active: [], posting: [], memo: a.memo_key}, f = 0; f < d.length; f++) {
        var g = d[f],
                h = a[g],
                k = h.key_auths;
        h = h.weight_threshold;
        for (var l = 0; l < k.length; l++) {
            var m = k[l],
                    n = m[0];
            m[1] >= h && e[g].push(n);
        }
    }
    this.Tg = e;
    this.VZ(a.reputation);
    this.Fw = [];
    for (d = 0; d < a.witness_votes.length; d++)
        this.Fw.push(a.witness_votes[d]);
    this.O3 = a.savings_withdraw_requests;
    this.OM = a.pending_claimed_accounts;
    fl.i9();
    this.VM(VI, a.vesting_shares);
    this.VN(VI, a.received_vesting_shares);
    this.VO(VI, a.delegated_vesting_shares);
    d = AQ(a.to_withdraw) / 1e6;
    e = AQ(a.withdrawn) / 1e6;
    f = D.B.DE(moment.utc(a.next_vesting_withdrawal).local());
    this.Vb(VI, d);
    this.Vu(VI, a.vesting_withdraw_rate);
    this.Xu(VI, e);
    this.Xv(VI, D.S.Ko(a));
    this.WE(VI, f);
    this.Vr(VI, a.balance);
    this.Vr(IQ, a.sbd_balance);
    this.VJ(VI, a.reward_steem_balance);
    this.VJ(IQ, a.reward_sbd_balance);
    this.VJ(VT, a.reward_vesting_balance);
    this.Vn(VI, a.savings_balance);
    this.Vn(IQ, a.savings_sbd_balance);
    this.M0(a.name, b, c);
};
by.prototype.getData = function () {
    return this.aR;
};
by.prototype.aK = function (a) {
    this.aO = a;
};
by.prototype.bN = function () {
    return this.aO;
};
by.prototype.J6 = function () {
    return null !== this.aO;
};
by.prototype.TR = function (a) {
    return -1 != this.TQ.indexOf(a);
};
by.prototype.get = function (a) {
    return this.aR[a];
};
by.prototype.VZ = function (a) {
    a = String(D.Q.Ah(a)).split(".");
    this.VW = [a[0], 1 < a.length ? a[1] : "0"];
};
by.prototype.Qj = function () {
    return this.VW;
};
by.prototype.getPublicKeys = function () {
    return this.Tg;
};
by.prototype.Yw = function (a) {
    this.Yy = a;
};
by.prototype.Yx = function () {
    return this.Yy;
};
by.prototype.l4 = function (a) {
    var b = this.tokens.mh(),
            c = this.aN,
            d = [],
            e;
    for (e in c) {
        var f = b[e];
        f && f.Uz == a && d.push(e);
    }
    for (a = 0; a < d.length; a++)
        delete c[d[a]];
};
by.prototype.Vs = function (a) {
    void 0 === this.aN[a] &&
            (this.aN[a] = {
                balance: 0,
                Vp: 0,
                Vo: 0,
                vestsStaked: 0,
                Ew: 0,
                Ex: 0,
                Vj: 0,
                vestsWithdrawal: 0,
                Oq: 0,
                vestsWithdrawn: 0,
                WU: 0,
                WV: "",
                withdrawalTrxId: "",
                WM: 100,
                WL: "2019-01-01T00:00:00",
                Z8: 100,
                Z7: "2019-01-01T00:00:00",
                Wf: 0,
            });
    return this.aN[a];
};
by.prototype.VU = function (a, b, c) {
    this.Vs(a)[b] = c;
};
by.prototype.VV = function (a, b) {
    return this.Vs(a)[b];
};
by.prototype.VQ = function () {
    return this.Vs(this.VX);
};
by.prototype.Vr = function (a, b) {
    this.VU(a, "balance", AQ(b));
};
by.prototype.Vt = function (a) {
    return this.VV(a, "balance");
};
by.prototype.Vz = function () {
    return this.Vt(this.VX);
};
by.prototype.VJ = function (a, b) {
    this.VU(a, "Vp", AQ(b));
};
by.prototype.VK = function (a) {
    return this.VV(a, "Vp");
};
by.prototype.Vy = function (a) {
    return this.VK(this.VX);
};
by.prototype.Vn = function (a, b) {
    this.VU(a, "Vo", AQ(b));
};
by.prototype.Vq = function (a) {
    return this.VV(a, "Vo");
};
by.prototype.VR = function (a) {
    a = this.Vs(a);
    return a.vestsStaked - a.Ex;
};
by.prototype.VS = function () {
    return this.VR(this.VX);
};
by.prototype.NI = function (a) {
    var b = this.Vs(a);
    return b.vestsStaked + b.Ew - b.Ex - (this.tokens.get(a).X9() ? b.WU : 0);
};
by.prototype.Vd = function () {
    return this.NI(this.VX);
};
by.prototype.FM = function (a) {
    var b = this.Vs(a);
    return 0 < b.Vj ? b.Vj : this.NI(a);
};
by.prototype.Ve = function () {
    return this.FM(this.VX);
};
by.prototype.Vi = function (a) {
    return this.VV(a, "Vj");
};
by.prototype.Vg = function () {
    return this.Vi(this.VX);
};
by.prototype.Vh = function (a) {
    this.Vf(this.VX, a);
};
by.prototype.VM = function (a, b) {
    this.VU(a, "vestsStaked", AQ(b));
};
by.prototype.V0 = function (a) {
    return this.VV(a, "vestsStaked");
};
by.prototype.V1 = function () {
    return this.V0(this.VX);
};
by.prototype.VN = function (a, b) {
    this.VU(a, "Ew", AQ(b));
};
by.prototype.V2 = function (a) {
    return this.VV(a, "Ew");
};
by.prototype.V3 = function () {
    return this.V2(this.VX);
};
by.prototype.VO = function (a, b) {
    this.VU(a, "Ex", AQ(b));
};
by.prototype.V4 = function (a) {
    return this.VV(a, "Ex");
};
by.prototype.V5 = function () {
    return this.V4(this.VX);
};
by.prototype.Vb = function (a, b) {
    b = AQ(b);
    this.VU(a, "vestsWithdrawal", b);
    b || (this.Vu(a, 0), this.Xu(a, 0), this.WE(a, ""));
};
by.prototype.YU = function (a) {
    return this.VV(a, "vestsWithdrawal");
};
by.prototype.YX = function () {
    return this.YU(this.VX);
};
by.prototype.Vu = function (a, b) {
    this.VU(a, "Oq", AQ(b));
};
by.prototype.Vv = function (a) {
    return this.VV(a, "Oq");
};
by.prototype.Vw = function () {
    return this.Vv(this.VX);
};
by.prototype.Xu = function (a, b) {
    this.VU(a, "vestsWithdrawn", AQ(b));
};
by.prototype.YT = function (a) {
    return this.VV(a, "vestsWithdrawn");
};
by.prototype.YW = function () {
    return this.YT(this.VX);
};
by.prototype.Xv = function (a, b) {
    this.VU(a, "WU", AQ(b));
};
by.prototype.IR = function (a) {
    return this.VV(a, "WU");
};
by.prototype.WE = function (a, b) {
    "1969-12-31T23:59:59" == b && (b = "");
    this.VU(a, "WV", b);
};
by.prototype.WG = function (a) {
    return this.VV(a, "WV");
};
by.prototype.WH = function () {
    return this.WG(this.VX);
};
by.prototype.kZ = function (a) {
    var b = D.p.YU(a),
            c = D.p.YT(a);
    return (100 / D.p.V0(a)) * (b - c);
};
by.prototype.YV = function (a, b) {
    this.VU(a, "withdrawalTrxId", b);
};
by.prototype.Ie = function (a) {
    return this.VV(a, "withdrawalTrxId");
};
by.prototype.IS = function () {
    return this.Ie(this.VX);
};
by.prototype.Vf = function (a, b) {
    this.VU(a, "Vj", AQ(b));
};
by.prototype.Vk = function (a, b, c, d) {
    this.VU(a, "last" + b + "VP", AQ(c));
    this.VU(a, "last" + b + "VPUpdate", d);
};
by.prototype.Vl = function (a, b) {
    this.tokens.get(a);
    var c = this.VV(a, "last" + b + "VP");
    a = this.aC(a, b);
    a = moment.utc().diff(a, "seconds");
    return Math.min(c + a / NB / 10, 100).toFixed(2);
};
by.prototype.aC = function (a, b) {
    a = this.VV(a, "last" + b + "VPUpdate");
    return moment.utc(a);
};
by.prototype.Vm = function (a) {
    return this.Vl(this.VX, a);
};
by.prototype.Wd = function (a, b) {
    this.VU(a, "Wf", b);
};
by.prototype.We = function (a) {
    this.tokens.get(a).Uz == VG && (a = VI);
    return this.VV(a, "Wf");
};
by.prototype.WY = function (a) {
    return this.Wa.WY(a);
};
by.prototype.Wt = function () {
    return this.Wx.Wt();
};
by.prototype.Kb = function (a) {
    a = a ? void 0 : this.VX;
    this.WY(a) &&
            ((a = this.Wa.Wb(a)),
                    (a = this.Wa.Wh(a)),
                    this.Wa.Kb(a, function () {
                        D.A.refresh();
                        D.C.Fs();
                        setTimeout(function () {
                            return D4.D9("Rewards claimed!");
                        }, 3e3);
                    }));
};
by.prototype.Ws = function () {
    this.Wt() &&
            this.Wx.Ws(function () {
                D.A.refresh();
                D.C.Fs();
                setTimeout(function () {
                    return D4.D9("Staking done!");
                }, 3e3);
            });
};
by.prototype.M0 = function (a, b, c) {
    var d = this,
            e = function () {
                d.M4 = {};
                d.ND = {};
                d.Xw = {};
                void 0 !== c && c();
            };
    D.S.M1(
            [a],
            function (a) {
                if (a.rc_accounts.length) {
                    a = a.rc_accounts[0];
                    var c = a.rc_manabar.current_mana,
                            f = a.max_rc,
                            k = a.rc_manabar.last_update_time,
                            l = D.p.NI(VI);
                    c = D.Q.NA(c, f, k, NC);
                    d.M4 = {current_rc_status: Bl(c.NL, 2) + " %", current_rc: Bl(c.NM), max_rc: Bl(c.NK), max_rc_creation_adjustment: a.max_rc_creation_adjustment, last_update: D.B.DE(c.aA, !1, !0, !0)};
                    c = D.Q.NJ(D.p.getData(), "voting_manabar", l);
                    D.p.Vk(VI, "Upvote", c.NL, c.M9);
                    d.ND = {current_upvote_power: Bl(c.NL, 2) + " %", current_upvote_mana: Bl(c.NM), max_upvote_mana: Bl(c.NK), last_update: D.B.DE(c.aA, !1, !0, !0)};
                    c = D.Q.NJ(D.p.getData(), "downvote_manabar", l);
                    D.p.Vk(VI, "Downvote", c.NL, c.M9);
                    d.Xw = {current_downvote_power: Bl(c.NL, 2) + " %", current_downvote_mana: Bl(c.NM), max_downvote_mana: Bl(c.NK), last_update: D.B.DE(c.aA, !1, !0, !0)};
                    void 0 !== b && b();
                } else
                    e();
            },
            e
            );
};
by.prototype.iG = function () {
    return AQ(this.M4.max_rc);
};
by.prototype.iH = function () {
    return AQ(this.M4.current_rc);
};
by.prototype.j0 = function () {
    return this.XD.Y5(this.Ve(), this.Vm("Upvote"), 100, this.Yx());
};
var a6 = function (a) {
    this.bC = this.bB = this.bA = "";
    this.init(a);
};
a6.prototype.init = function (a) {
    if (a.json_metadata) {
        var b = T7.DU(a.json_metadata);
        b && b.profile && ((this.bA = b.profile.name ? aJ.GT(b.profile.name) : a.name), (this.bC = b.profile.profile_image ? aJ.GT(b.profile.profile_image) : ""), (this.bB = b.profile.about ? aJ.GT(b.profile.about) : ""));
    }
    this.bC && ((a = D.B.DS(this.bC)), (this.bC = a.length ? a[0] : ""));
};
a6.prototype.a7 = function () {
    return this.bA;
};
a6.prototype.a8 = function () {
    return this.bB;
};
a6.prototype.a9 = function (a) {
    var b = this.bC;
    return b ? C4.Ns(b, a, 0) : "";
};
a6.prototype.bD = function (a, b) {
    return (a = this.a9(a)) ? Ft.GB("img", {class: b, src: a}) : "";
};
var Ww = function (a) {
    this.account = a;
    this.tokens = a.tokens;
};
Ww.prototype.VB = function () {
    var a = {},
            b,
            c;
    for (c in this.account.aN) {
        var d = this.tokens.get(c);
        d.Up && (b = this.account.Vt(c)) && (a[c] = Or(b, d.da()));
    }
    return a;
};
Ww.prototype.Wt = function () {
    var a = this.VB();
    return 0 < Object.keys(a).length;
};
Ww.prototype.Wy = function (a) {
    var b = {},
            c;
    for (c in a) {
        var d = this.tokens.get(c);
        d = d.Uz;
        void 0 === b[d] && (b[d] = {});
        b[d][c] = a[c];
    }
    return b;
};
Ww.prototype.Wz = function (a) {
    var b = this,
            c = [],
            d = this.VB();
    if (Object.keys(d).length) {
        var e;
        for (e in d) {
            var f = D.o.get(e);
            c.push({id: e, icon: f.WP, checked: !f.X9(), htmlLeft: f.X9() ? "" : f.Uz, html: f.Uk, htmlRight: Bl(d[e], f.da())});
        }
        D4.Wv("Select Tokens...", "", c, function (c) {
            if (c.length) {
                for (var e = {}, f, g = 0; g < c.length; g++)
                    (f = c[g]), (e[f] = d[f]);
                c = b.Wy(e);
                a(c);
            }
        });
    }
};
Ww.prototype.W0 = function (a, b, c, d, e) {
    c == VG ? ((c = Or(d[VI], 3) + " HIVE"), D.S.FS(a, b, b, c, e)) : c == VH && D.H.cP(a, b, b, d, e);
};
Ww.prototype.Ws = function (a) {
    var b = this,
            c,
            d,
            e,
            f,
            g = function (b) {
                if (b) {
                    for (b = 0; b < f.length; b++)
                        delete d[e][f[b]];
                    Object.keys(d[e]).length || delete d[e];
                    Object.keys(d).length ? c() : a();
                }
            },
            h = function (a) {
                c = function () {
                    e = Object.keys(d)[0];
                    f = [];
                    var c = d[e],
                            h = {},
                            k = [],
                            p = 0,
                            q;
                    for (q in c) {
                        p++;
                        h[q] = c[q];
                        var r = b.tokens.get(q);
                        k.push(r.Uk);
                        f.push(q);
                        if (9 < p)
                            break;
                    }
                    D4.D9("Staking: " + k.join(", ") + "...");
                    b.W0(a, D.l, e, h, g);
                };
                c();
            };
    this.Wz(function (a) {
        d = a;
        D.t.DL(F1, !1, !1, h);
    });
};