
Sk.prototype.ZK = function () {
    var a = this.opItem;
    if (a.op == Ay) {
        var b = this.Io,
                c = b.find(".voteWeight"),
                d = b.find(".votePayout"),
                e = b.find(".voteCuration"),
                f = b.find(".permlinkPreview");
        if (c.length && d.length) {
            var g = a.data,
                    h = function (a, b) {
                        f.html(ak.IJ(g.author, g.permlink, 215));
                        c.html(g.weight / 100 + "% ( $ " + D.B.EQ(b.amount) + " / ~ " + D.Q.GA(b.JY, b.JZ + b.Ja, D.G.get(GC), !0) + " )");
                        d.html("$ " + D.B.EQ(a.Et) + " ( " + a.E0() + " Votes " + (a.YY() ? "/ ~ " + D.Q.GA(a.Mn, a.Mo + a.Mm, D.G.get(GC), !0) : "") + " )");
                        e.length && e.html(DW(b.Mi, 3) + " HP ( ~ " + D.Q.GA(0, b.Mi, D.G.get(GC), !0) + " )");
                        b = d.parent();
                        b.find(".showVotesChart").remove();
                        b.append('<button class="imageButton showVotesChart right" title="Show Votes..."><span/></button>');
                        b.find(".showVotesChart").on("click", function () {
                            Wj.B7(g.author, g.permlink, a);
                        });
                    };
            D.q.X3(g.author, g.permlink, function (a) {
                var b = a.E1(g.voter);
                b && !b.Jd && h(a, b);
            });
        }
    }
};
Sk.prototype.Sh = function (a) {
    $(".opItem.focused").removeClass("focused");
    a && this.Io.addClass("focused");
};
Sk.prototype.Sg = function (a, b, c) {
    var d = this;
    a || this.ZK();
    this[a ? "gX" : "gY"](b, function () {
        d.Yg = a;
        d.Io.removeClass(a ? "maximized" : "minimized").addClass(a ? "minimized" : "maximized");
        d.Iq.toggle(a ? 150 : 250, function () {
            d[a ? "Si" : "Sj"]();
            void 0 !== c && c();
        });
    });
};
Sk.prototype.Wn = function (a) {
    var b = $(".opItem.maximized").toArray(),
            c = -1,
            d = function () {
                c++;
                c > b.length - 1
                        ? void 0 !== a && a()
                        : g8(b[c]).Sg(!0, !1, function () {
                    return d();
                });
            };
    d();
};
Sk.prototype.gX = function (a, b) {
    b();
};
Sk.prototype.Si = function () {};
Sk.prototype.gY = function (a, b) {
    a || this.ZL ? b() : this.Wn(b);
};
Sk.prototype.Sj = function () {};
var Bg = "in",
        bx = function () {
            this.Aq = !1;
            this.reset(!0);
        };
bx.prototype.reset = function (a) {
    this.Ji = [];
    this.Lh = -1;
    this.SN = 0;
    this.Jb = "";
    this.PS = [];
    this.PT = [];
    this.Go = {Gg: [], Gi: [], Gj: [], Gh: 0, Gd: 0, Ge: 0, Gf: 0};
    a || (D.D.reset(), D.D.filter());
};
bx.prototype.Ac = function (a) {
    for (var b = this.Ji.length - 1; 0 <= b; b--)
        if (this.Ji[b].J9 == a)
            return b;
    return -1;
};
bx.prototype.O4 = function (a) {
    return -1 < this.Ac(a.J9);
};
bx.prototype.EF = function (a) {
    a = this.Ac(a);
    return -1 < a ? this.Ji[a] : null;
};
bx.prototype.sort = function () {
    aI.Bu(this.Ji, "fk", !0);
};
bx.prototype.add = function (a, b) {
    if (b || !this.O4(a))
        this.km(a), this.Ji.push(a), (this.Aq = !0);
};
bx.prototype.km = function (a) {
    var b = a.op,
            c = a.data;
    if (b == Ay) {
        if (!D.p.TR(c.voter) && (c.author == D.l && D.R.J5 && $(".recentPost[data-permlink='" + c.permlink + "']").length && (D.P.Jd = !0), c.voter == D.l && 0 < c.weight && moment.utc(a.timestamp) >= this.EH)) {
            a = this.Go;
            b = c.weight;
            var d = a.Gg.indexOf(c.author);
            a.Gd += b;
            a.Gh++;
            c.author == D.l && (a.Ge += b);
            -1 == d ? (a.Gg.push(c.author), a.Gi.push(b), a.Gj.push(1)) : ((a.Gf += b), (a.Gi[d] += b), a.Gj[d]++);
        }
    } else if (this.ku(a))
        D.R.add(a, !1);
    else if (this.AO(b)) {
        if (c.body) {
            if (D.p.TR(c.author))
                return;
            try {
                (c.body = aJ.GT(c.body, 500)),
                        (d = {body: c.body, author: c.author, permlink: c.permlink}),
                        c.title && ((c.title = aJ.GT(c.title)), (d.title = c.title)),
                        c.parent_author && (d.parent_author = c.parent_author),
                        c.parent_permlink && (d.parent_permlink = c.parent_permlink),
                        c.json_metadata && (d.json_metadata = c.json_metadata),
                        (a.data = d);
            } catch (e) {
                Pn("ops.add", e, c);
            }
            c.author != D.l || c.parent_author || aI.Lm(D.P.Ll, c.permlink);
        } else
            c.title && (c.title = aJ.GT(c.title));
        void 0 !== c.parent_author && D.P.Tt(c.author, c.permlink, c.parent_author, c.parent_permlink, c.body, c.title);
    } else
        b == BJ
                ? D.F.Hu.length && (c = T7.DU(c.json)) && c[0] && c[1] && "follow" == c[0] && D.F.Fn(c[1].following, "blog" == c[1].what)
                : b == Be || b == BB
                ? D.p.TR(c.from) ||
                D.p.TR(c.to) ||
                (void 0 !== c.memo && (c.memo = aJ.GT(c.memo)),
                        c.from != c.to &&
                        ((b = c.amount.split(" ")),
                                (a = {id: a.id, timestamp: a.timestamp, amount: parseFloat(b[0]), unit: b[1], memo: c.memo ? c.memo : ""}),
                                c.from == D.l ? ((a.to = c.to), this.PT.push(a)) : ((a.from = c.from), this.PS.push(a))))
                : b == Nt && (D.p.jA = c.new_recovery_account);
};
bx.prototype.ku = function (a) {
    var b = a.op;
    return b == Az || b == A0 || b == A4 || (b == A3 && a.data.benefactor == D.l);
};
bx.prototype.AK = function (a) {
    return -1 < BR.indexOf(a);
};
bx.prototype.AO = function (a) {
    return -1 < BP.indexOf(a);
};
bx.prototype.AJ = function (a) {
    return -1 < LR.indexOf(a);
};
bx.prototype.DA = function () {
    return 25e3 < this.Ji.length;
};
bx.prototype.getItems = function (a) {
    var b,
            c = 0,
            d = [],
            e = T5(a.max_items, !1),
            f = T5(a.min_date, !1),
            g = T5(a.max_date, !1),
            h = T5(a.min_id, !1),
            k = T5(a.values, !1);
    void 0 !== a.sort && aI.Bu(this.Ji, a.sort, a.sort_desc);
    for (var l = 0; l < this.Ji.length; l++) {
        var m = D.D.Av(l, !0, !1);
        var n = moment.utc(m.timestamp);
        var p = f && n < f;
        n = g && n > g;
        if (void 0 !== a.sort && ((f && a.sort_desc && p) || (g && !a.sort_desc && n)))
            break;
        if (!(-1 == a.op.indexOf(m.op) || p || n || (h && m.id < h) || (m.incoming && !a.incoming) || (!m.incoming && !a.outgoing))) {
            if (k && k.length) {
                p = !1;
                for (b = 0; b < k.length; b++)
                    if (((n = k[b]), -1 < m.data[n[0]].indexOf(n[1]))) {
                        p = !0;
                        break;
                    }
                if (!p)
                    continue;
            }
            d.push(m);
            if (e && (c++, c >= e))
                break;
        }
    }
    void 0 === a.sort || a.sort_desc || aI.Bu(this.Ji, "fk", !0);
    return d;
};
bx.prototype.EC = function (a, b) {
    aG.Db(D.G.get(D6), 0) == D.V.E6 ? void 0 !== a && a() : (D.G.CF(D.G.get(D6), !1), this.reset(!1), D.R.reset(), (D.C.Fo = !1), D.C.Ju(!1, a, b));
};
bx.prototype.AV = function (a, b, c) {
    var d = this,
            e = -1 < a && a < b ? a : b,
            f = this.Lh,
            g = function (a) {
                d.Lh = a;
                d.sort();
                D.R.J5 = !0;
                D.R.refresh();
                c();
            };
    D.S.Cx(
            D.l,
            a,
            e,
            !0,
            function (b) {
                for (var h = b.length, l = -1, m, n, p, q, r = 0; r < h; r++)
                    if (((q = b[r]), (m = q.id), (n = q.J9), (p = moment.utc(q.timestamp)), p >= d.EI)) {
                        if (-1 == f || m < f)
                            f = m;
                        d.add(q, !0);
                    } else
                        l = m;
                -1 == a ? ((d.SN = m), (d.Jb = n)) : 0 == a && 0 == e && (l = f);
                -1 < l || !h ? g(h ? l : f) : ((b = Math.max(0, f - 1)), b == a ? g(l) : ((d.Lh = f), (l = Math.min(1e4, parseInt(1.5 * e))), d.AV(b, l, c)));
            },
            function (e) {
                setTimeout(function () {
                    return d.AV(a, b, c);
                }, 5e3);
            }
    );
};
bx.prototype.refresh = function (a, b, c, d) {
    var e = this;
    D.D.An();
    if (0 == this.SN || 0 == a) {
        var f = -1;
        var g = b ? 1 : a;
    } else
        (f = this.SN + 1), (g = 0);
    D.S.Cx(
            D.l,
            f,
            g,
            !0,
            function (a) {
                var f = a.length;
                if (f || 0 != g) {
                    for (var h, m, n, p = 0; p < f; p++) {
                        h = a[p];
                        m = h.id;
                        n = h.J9;
                        if ((0 == g || b) && 1 == f) {
                            n != e.Jb ? ((g = BT), e.SN && e.SN < m && (g = Math.min(1e4, Math.max(BT, m - e.SN))), e.add(h, !1), (e.Jb = ""), (e.SN = 0), e.refresh(g, !1, c)) : c();
                            return;
                        }
                        e.add(a[p], !1);
                    }
                    0 < f && ((e.SN = m), (e.Jb = n));
                    D.R.Aq && D.R.refresh();
                    e.Aq && D.D.Dn();
                    c();
                } else
                    e.refresh(0, !0, c, d);
            },
            d
            );
};
bx.prototype.Am = function (a, b) {
    Y3
            ? ((this.EI = moment().subtract(7, "days").startOf("day").utc()),
                    (this.EH = moment.utc().subtract(7, "days")),
                    (this.EG = moment.utc().subtract(30, "days")),
                    0 <= this.Lh
                    ? this.refresh(0, !1, a, b)
                    : (a(),
                            this.AV(-1, 3e3, function () {
                                D.D.An();
                                D.D.Dn();
                                D.R.Bs(!1);
                            })))
            : ((D.R.J5 = !0), (D.R.Eb = !0), D.R.refresh(), a());
};
var BO = "author parent_author comment_author curator voter from to proxy delegator delegatee account follower following witness current_owner open_owner owner publisher from_account to_account agent who creator receiver new_account_name recovery_account account_to_recover reset_account account_to_reset current_reset_account benefactor producer new_recovery_account".split(
        " "
        ),
        QH = ["profile_image", "cover_image", "website", "url", "image"],
        b0 = function () {
            this.J1 = 100;
            this.P4 = {};
            this.P5 = {};
            this.P6 = {};
            this.SO = {};
            this.BG = [];
            this.QC = [];
            this.P8 = this.QA = this.QB = this.P9 = this.No = "";
        };
b0.prototype.AI = function (a) {
    var b = this;
    aH.mB(
            "styleAccountOperations",
            "\n .qTabs.qVertical #filterOperationsRow {\n width: 210px;\n height: 564px;\n }\n .qTabs.qHorizontal #filterOperationsRow {\n height: auto !important;\n }\n .qTabs.qHorizontal #filterOperationsHiddenOps .qCheckbox {\n float: left;\n width: 215px;\n margin: 2px;\n }\n .qTabs.qHorizontal #filterOperationsHiddenOps {\n height: auto;\n }\n #filterOperationsRow strong {\n margin: 15px 0 6px 2px;\n display: block;\n font-size: 14px;\n color: var(--button-text);\n }\n #filterOperations {\n margin-top: 2px;\n }\n #filterOperationsDir {\n width: 100%;\n }\n #filterOperationsRow .qCheckbox {\n margin-top: 4px;\n }\n #filterOperationsHiddenOps {\n overflow-x: hidden;\n overflow-y: auto;\n }\n\n #btnShowMoreOperations {\n width: 100%;\n margin: 10px 0 5px 0;\n }\n #tabsAccountOperations.qVertical #btnShowMoreOperations {\n display: none;\n }\n\n .opItem.minimized .opItemHeader .uName {\n color: var(--link-text);\n }\n .opItem.maximized .opItemHeader .opCol,\n .opItem.maximized .opItemHeader .uName,\n .opItem.maximized .opItemHeader .uRep,\n .opItem.maximized .opItemHeader .uName:hover .uRep {\n color: var(--button-selected-text) !important;\n }\n .opItem.minimized.focused .opItemHeader {\n background-color: var(--ui-hover-bg);\n }\n .opItem .imageButton {\n width: 22px;\n height: 22px;\n padding: 2px;\n }\n .opItem .imageButton span {\n width: 18px;\n height: 18px;\n }\n\n .opIcon {\n position: absolute;\n width: 16px;\n height: 16px;\n margin-top: 1px;\n background-size: cover;\n }\n .opIconInTransaction {\n margin-left: 5px;\n }\n .opIconArrow {\n margin-left: 2px;\n }\n .opCol {\n display: inline-block;\n }\n\n .opTitle {\n display: inline-block;\n width: 26%;\n margin-left: 22px;\n font-weight: bold;\n font-size: 14px;\n }\n .opDetails {\n display: inline-block;\n margin-left: 15px;\n }\n .opDetails,\n .opDetails span {\n font-size: 14px;\n }\n .opDetails .splitSpan {\n font-size: 16px;\n }\n .opDate {\n float: right;\n margin-right: 10px;\n font-size: 12px;\n }\n\n .opItemHeader {\n position: relative;\n width: 100%;\n margin: 3px 0 0 0;\n padding: 11px 5px;\n color: var(--button-text);\n background-color: var(--button-bg);\n box-shadow: var(--tab-box-shadow);\n cursor: pointer;\n }\n .opItemHeader:hover {\n background-color: var(--ui-hover-bg);\n }\n .opItem.maximized .opItemHeader {\n color: var(--panel-header-text);\n background: var(--panel-header-bg);\n }\n .opItemContent {\n padding: 15px 18px 15px 20px;\n border: 1px solid var(--panel-border);\n border-top: 0;\n color: var(--panel-text);\n background-color: var(--panel-bg);\n }\n\n .opItem[data-op='vote'] .opCol:nth-child(1),\n .opItem[data-op='account_witness_vote'] .opCol:nth-child(1),\n .opItem[data-op='transfer'] .opCol:nth-child(1),\n .opItem[data-op='escrow_transfer'] .opCol:nth-child(1),\n .opItem[data-op='transfer_to_vesting'] .opCol:nth-child(1),\n .opItem[data-op='transfer_to_savings'] .opCol:nth-child(1),\n .opItem[data-op='transfer_from_savings'] .opCol:nth-child(1),\n .opItem[data-op='delegate_vesting_shares'] .opCol:nth-child(1),\n .opItem[data-op='return_vesting_delegation'] .opCol:nth-child(1),\n .opItem[data-op='proposal_pay'] .opCol:nth-child(1)\n {\n min-width: 225px;\n }\n\n .opItem[data-op='vote'] .opCol:nth-child(2),\n .opItem[data-op='transfer'] .opCol:nth-child(2),\n .opItem[data-op='escrow_transfer'] .opCol:nth-child(2),\n .opItem[data-op='transfer_to_vesting'] .opCol:nth-child(2),\n .opItem[data-op='transfer_to_savings'] .opCol:nth-child(2),\n .opItem[data-op='transfer_from_savings'] .opCol:nth-child(2),\n .opItem[data-op='delegate_vesting_shares'] .opCol:nth-child(2),\n .opItem[data-op='return_vesting_delegation'] .opCol:nth-child(2),\n .opItem[data-op='proposal_pay'] .opCol:nth-child(2)\n {\n width: 60px;\n text-align: right;\n }\n .opItem[data-op='account_witness_vote'] .opCol:nth-child(2) {\n width: 82px;\n }\n .opItem[data-op='account_witness_vote'] .opCol:nth-child(2) {\n text-align: center;\n }\n .opItem[data-op='vote'] .opCol:nth-child(3),\n .opItem[data-op='transfer'] .opCol:nth-child(3),\n .opItem[data-op='escrow_transfer'] .opCol:nth-child(3),\n .opItem[data-op='transfer_to_vesting'] .opCol:nth-child(3),\n .opItem[data-op='transfer_to_savings'] .opCol:nth-child(3),\n .opItem[data-op='transfer_from_savings'] .opCol:nth-child(3),\n .opItem[data-op='delegate_vesting_shares'] .opCol:nth-child(3),\n .opItem[data-op='return_vesting_delegation'] .opCol:nth-child(3),\n .opItem[data-op='proposal_pay'] .opCol:nth-child(3)\n {\n width: 95px;\n text-align: right;\n }\n\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='escrow_transfer'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='escrow_transfer'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_to_vesting'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_to_vesting'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_to_savings'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_to_savings'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_from_savings'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='transfer_from_savings'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='proposal_pay'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='proposal_pay'] .opCol:nth-child(3)\n {\n color: var(--operation-title-alt-text1);\n }\n body:not(.noColorizedOpTitles) .opItem[data-op='curation_reward'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='producer_reward'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='author_reward'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='comment_benefactor_reward'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='fill_order'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='fill_vesting_withdraw'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='fill_transfer_from_savings'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='fill_convert_request'] .opCol:nth-child(1)\n {\n color: var(--operation-title-alt-text2);\n }\n body:not(.noColorizedOpTitles) .opItem[data-op='delegate_vesting_shares'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='delegate_vesting_shares'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='return_vesting_delegation'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='return_vesting_delegation'] .opCol:nth-child(3)\n {\n color: var(--operation-title-alt-text3);\n }\n\n body:not(.noColorizedOpTitles) .opItem[data-op='vote'][data-incoming='0'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='vote'][data-incoming='0'] .opCol:nth-child(3),\n body:not(.noColorizedOpTitles) .opItem[data-op='claim_reward_balance'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='limit_order_create'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='limit_order_cancel'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='cancel_transfer_from_savings'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='feed_publish'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='request_account_recovery'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='change_recovery_account'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='set_withdraw_vesting_route'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='convert'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='account_update'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='create_claimed_account'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='account_create'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='account_create_with_delegation'][data-incoming='0'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='witness_update'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='witness_set_properties'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='claim_account'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='withdraw_vesting'] .opCol:nth-child(1),\n body:not(.noColorizedOpTitles) .opItem[data-op='account_witness_vote'][data-incoming='0'] .opCol:nth-child(2),\n body:not(.noColorizedOpTitles) .opItem[data-op='account_witness_proxy'][data-incoming='0'] .opCol:nth-child(1)\n {\n color: #898989;\n }\n "
            );
    this.mA = Ft.R7("", "btnShowMoreOperations", "Show more...", "", function () {
        b.mA.detach();
        b.l8(b.fF());
    });
    this.VY(a);
    this.l9();
};
b0.prototype.VY = function (a) {
    var b = this,
            c = this,
            d = Ft.R4("clearfix"),
            e = Ft.R4("", "filterOperationsDir");
    e.append(Ft.eQ("Filter"), d);
    this.eP = new eH(
            {
                buttons: [
                    {text: "In &amp; Out", value: "", title: "Show incoming &amp; outgoing ops", width: 50},
                    {text: "In", value: "in", title: "Show incoming ops", width: 25},
                    {text: "Out", value: "out", title: "Show outgoing ops", width: 25},
                ],
                eI: function () {
                    return b.filter();
                },
            },
            d
            );
    d = new gt({
        id: "filterOperations",
        items: [
            {value: "", text: "All", "data-ops": ""},
            {value: "comments", text: "Comments", "data-ops": "comment,edit_comment,delete_comment,comment_options,create_post,edit_post"},
            {value: "comments_votes", text: "Comments &amp; Votes", "data-ops": "vote,comment,edit_comment,delete_comment,comment_options,create_post,edit_post"},
            {value: "custom_json", text: "Custom JSON", "data-ops": "custom_json"},
            {value: "delegations", text: "Delegations", "data-ops": "delegate_vesting_shares,return_vesting_delegation"},
            {value: "downvotes", text: "Downvotes (Flags)", "data-ops": "downvote"},
            {value: "orders", text: "Market Orders", "data-ops": "limit_order_create,fill_order,limit_order_cancel"},
            {value: "rewards", text: "Rewards", "data-ops": "curation_reward,producer_reward,comment_benefactor_reward,author_reward,claim_rewards,proposal_pay"},
            {value: "sps", text: "HPS Related", "data-ops": "create_proposal,remove_proposal,update_proposal_votes,sps_fund,proposal_pay"},
            {value: "transfers", text: "Transfers", "data-ops": "transfer,escrow_transfer,transfer_to_vesting,withdraw_vesting,fill_vesting_withdraw,transfer_to_savings,transfer_from_savings,fill_transfer_from_savings"},
            {value: "upvotes", text: "Upvotes (No Flags)", "data-ops": "upvote"},
            {value: "votes", text: "Votes", "data-ops": "vote"},
            {value: "witness", text: "Witness Related", "data-ops": "producer_reward,feed_publish,account_witness_vote,witness_update,witness_set_properties"},
        ],
        eI: function (a) {
            b.filter();
        },
    });
    for (
            var f = Ft.R4("", "filterOperationsHiddenOps"),
            g = Ft.R4("", "filterOperationsHiddenOpsContainer", [Ft.eQ("Hide"), f]),
            h = function (a, c, d, e) {
                new eL(
                        {
                            checked: a,
                            id: c,
                            class: "checkboxHideOps",
                            text: d,
                            "data-ops": e,
                            eI: function () {
                                return b.filter();
                            },
                        },
                        f
                        );
            },
            k = [
                [!1, "checkHideCustomOps", "Custom JSON", "custom_json"],
                [!1, "checkHideBenefactorRewards", "Benefactor Rewards", "comment_benefactor_reward"],
                [!1, "checkHideCurationRewards", "Curation Rewards", "curation_reward"],
                [!0, "checkHideProducerRewards", "Producer Rewards", "producer_reward"],
                [!0, "checkHideHPSRewards", "HPS Rewards", "proposal_pay"],
                [!1, "checkHideMarketOrders", "Market Orders", "limit_order_create,fill_order,limit_order_cancel"],
                [!1, "checkHideWitnessRelated", "Witness Related", "feed_publish,account_witness_vote,witness_update,witness_set_properties"],
            ],
            l,
            m = 0;
            m < k.length;
            m++
            )
        (l = k[m]), h(l[0], l[1], l[2], l[3]);
    a = ak
            .gh({
                id: "tabsAccountOperations",
                fP: function (a) {
                    return b.Ao(a, !0, !0);
                },
            })
            .gj([
                {id: "tabOperationsToday", title: "Today", cls: "tabOperationsData scrollY"},
                {id: "tabOperationsYesterday", title: "Yesterday", cls: "tabOperationsData scrollY"},
                {id: "tabOperations2DaysAgo", title: "2 Days Ago", cls: "tabOperationsData scrollY"},
                {id: "tabOperations3DaysAgo", title: "3 Days Ago", cls: "tabOperationsData scrollY"},
                {id: "tabOperations4DaysAgo", title: "4 Days Ago", cls: "tabOperationsData scrollY"},
                {id: "tabOperations5DaysAgo", title: "5 Days Ago", cls: "tabOperationsData scrollY"},
                {id: "tabOperations6DaysAgo", title: "6 Days Ago", cls: "tabOperationsData scrollY"},
                {id: "tabOperations7DaysAgo", title: "7 Days Ago", cls: "tabOperationsData scrollY"},
            ])
            .appendTo(a);
    h = a.an().children(".qTabsContent");
    h.find(".qTabContent").on("scroll", function () {
        var a = $(this);
        if (a.data("has_more_results") && !a.data("is_loading")) {
            var b = a[0];
            b.scrollTop + b.clientHeight >= b.scrollHeight && c.l8(a);
        }
    });
    k = Ft.R4("clearfix");
    a.fQ().attr("id", "filterOperationsRow").append(k, e, d.an(), g);
    this.divTabs = h;
    this.hF = d;
};
b0.prototype.reset = function () {
    this.BG = [];
};
b0.AP = function (a) {
    return -1 < BO.indexOf(a);
};
b0.prototype.Eo = function (a) {
    return void 0 !== this.P4[a] ? this.P4[a] : a;
};
b0.prototype.Aj = function (a, b, c) {
    return '<span class="opIcon ' + (void 0 !== this.SO[a] ? this.SO[a](a, b, c) : b ? "opIconIn" : "opIconOut") + '"></span>';
};
b0.prototype.JH = function (a, b) {
    return void 0 !== this.P6[a] ? this.P6[a](b) : !0;
};
b0.prototype.Ai = function (a, b) {
    this.P8 = a.op;
    this.QB = this.QA = this.P9 = "";
    this.QC = [];
    if (void 0 !== this.P5[a.op])
        this.P5[a.op](a.data, a.incoming, b);
    if (this.QC.length) {
        b = Ft.GB("span");
        for (var c = 0; c < this.QC.length; c++)
            b.append(Ft.GB("span", {class: "opCol"}, this.QC[c]));
        this.P9 = b[0].outerHTML;
    }
    b = "vote" == a.op ? ((b = D.P.T0(a.data.author, a.data.permlink)) ? "Vote " + (b.parent_author ? "Comment" : "Post") : "Vote") : this.Eo(this.P8);
    a.title = '<span class="opTitle">' + ak.Dc(b) + "</span>";
    a.date = '<span class="opDate" title="' + D.B.DE(a.ts, !1, !1, !0) + '">' + D.B.DE(a.ts, !0) + "</span>";
    a.icon = this.Aj(this.P8, a.incoming, this.QB);
    a.extras = this.QA;
    a.details = "" != this.P9 ? '<span class="opDetails">' + Lf + this.P9 + "</span>" : "";
};
b0.prototype.Av = function (a, b, c) {
    a = D.O.Ji[a];
    a = {J9: a.J9, id: a.id, op: a.op, ts: a.ts, timestamp: a.timestamp, incoming: this.JH(a.op, a.data), block: a.block, blockTrx: a.blockTrx, trx: a.trx, virtualOp: a.virtualOp, data: a.data};
    c && this.Ai(a, b);
    return a;
};
b0.prototype.Ao = function (a, b, c) {
    if (a && this.eP) {
        a.data("is_loading", !0).data("has_more_results", !1);
        D.O.Aq = !1;
        this.No = a;
        for (var d = a.data("date"), e = [], f = [], g = this.hF.bt(), h = this.eP.bt(), k = g ? this.hF.hG(g)["data-ops"].split(",") : [], l = $(".checkboxHideOps.qChecked").toArray(), m = !1, n = [], p, q = 0; q < l.length; q++) {
            p = $(l[q]).data("ops").split(",");
            for (var r = 0; r < p.length; r++)
                "custom_ops" != p[r] ? f.push(p[r]) : ((m = !0), (n = this.Nx()));
        }
        b && ((this.J1 = parseInt(D.G.get(BU))), (this.BG = []), a.scrollTop(0).empty());
        b = g || h || f.length;
        l = h == Bg;
        p = -1 < k.indexOf("upvote");
        q = -1 < k.indexOf("downvote");
        for (var t = (r = 0), u = !1, x, v, y = 0; y < D.O.Ji.length; y++)
            if (D.B.DC(D.O.Ji[y].ts) == d) {
                v = this.Av(y, !1, !0);
                if (b) {
                    x = p || q ? "vote" != v.op || ("vote" == v.op && ((p && 0 > v.data.weight) || (q && 0 <= v.data.weight))) : -1 === k.indexOf(v.op);
                    if (h && l != v.incoming)
                        continue;
                    if (-1 < f.indexOf(v.op) || (g && x))
                        continue;
                    if (m) {
                        x = !1;
                        for (var A = 0; A < n.length; A++)
                            if (this.Ny(n[A], v)) {
                                x = !0;
                                break;
                            }
                        if (x)
                            continue;
                    }
                }
                t++;
                if (t <= this.J1)
                    -1 == this.BG.indexOf(v.J9) && (e.push(v), this.BG.push(v.J9), r++);
                else {
                    u = !0;
                    break;
                }
            }
        0 < r && this.SY(a, e, c);
        u && (a.data("has_more_results", !0), this.mA.detach(), a.append(this.mA));
        this.LX();
        a.data("is_loading", !1);
    }
};
b0.prototype.SY = function (a, b, c) {
    for (var d = this, e = [], f, g = 0; g < b.length; g++)
        (f = b[g]), this.O8(f), e.push(new Sk(f).Io);
    a[c ? "prepend" : "append"](e);
    if (this.BG.length > this.J1)
        for (a = a.find(".opItem").toArray(), b = this.J1; b < a.length; b++)
            (f = $(a[b])), (c = f.data("id")), f.remove(), (f = this.BG.indexOf(c)), -1 < f && this.BG.splice(f, 1);
    D.U.Oe();
    $(".exploreBlock")
            .off("click")
            .on("click", function (a) {
                a.preventDefault();
                var b = $(this);
                d.SZ(b, a);
            });
};
b0.prototype.l8 = function (a) {
    this.J1 += parseInt(D.G.get(BU));
    this.Ao(a, !1, !1);
};
b0.prototype.SZ = function (a, b) {
    D.s.DQ(a.attr("href"), !0);
};
b0.prototype.fF = function () {
    return this.divTabs.find(".tabOperationsData:visible");
};
b0.prototype.filter = function () {
    if (this.divTabs) {
        var a = this.fF();
        this.An();
        this.Ao(a, !0, !0);
        a.scrollTop(0);
    }
};
b0.prototype.Dn = function () {
    if (this.divTabs) {
        var a = this.fF();
        D.O.sort();
        this.Ao(a, !1, !0);
        D.P.LS();
    }
};
b0.prototype.An = function () {
    var a = moment(),
            b = -1,
            c;
    $(".tabOperationsData").each(function () {
        b++;
        1 < b && ((c = $($("#filterOperationsRow").find(".ui-tabs-tab a")[b])), c.text(D.B.DD(a)), c.attr("title", b + " days ago"));
        $(this).data("date", D.B.DC(a));
        a.subtract(1, "days");
    });
};
b0.prototype.O8 = function (a) {
    var b = "",
            c = function (a, c, f, g) {
                c = T5(c, "");
                f = T5(f, "");
                g = T5(g, "");
                if ("virtual" == c) {
                    var d = "Virtual Op " + f + " - " + g;
                    c = "";
                } else
                    d = c ? c : a;
                var e = dU.mn(a, c, f, g);
                a = Ft.Fh("a", {href: e, class: "exploreBlock", "data-block_num": a, "data-trx_id": c, "data-trx_index": f, "data-virtual_op": g}, d);
                b += (b ? " / " : "") + a;
            };
    c(a.block);
    1 < a.trx.length ? c(a.block, a.trx) : c(a.block, "virtual", a.blockTrx, a.virtualOp);
    a.data.transaction_info = b;
};
b0.prototype.Nx = function () {
    var a = D.G.get(Nw);
    a && (a = T7.DU(a));
    return a ? a : [];
};
b0.prototype.Ny = function (a, b) {
    if (a.op != b.op)
        return !1;
};
b0.prototype.LY = function (a, b) {
    a.text(b).addClass("colChecked");
};
b0.prototype.LX = function () {
    var a = this,
            b,
            c,
            d,
            e,
            f,
            g = -1,
            h = 0,
            k = $(".colVoteAmount:not(.colChecked)");
    var l = function (p) {
        (c = p.E1(f)) ? ((h = 0), a.LY(b, D.B.EQ(c.amount) + " $"), g < k.length - 1 && n()) : 3 > h ? (h++, D.q.Xa(d, e, l, m)) : (Pn("[!] refresh cols", "voter '" + f + "' not found!"), m());
    };
    var m = function () {
        setTimeout(function () {
            return a.LX();
        }, 5e3);
    };
    var n = function () {
        g++;
        b = $(k[g]);
        c = !1;
        d = b.data("author");
        e = b.data("permlink");
        f = b.data("voter");
        D.q.X3(d, e, l, m);
    };
    k.length && n();
};
b0.prototype.l9 = function () {
    var a = this;
    this.P4[A3] = "Benefactor Reward";
    this.P4[BE] = "Witness Vote";
    this.P4[Bc] = "Set Witness Proxy";
    this.P4[Bj] = "Account Create";
    this.P4[BL] = "Set Withdraw Route";
    this.P4[OI] = "Req. Account Recovery";
    this.P4[Bd] = "Withdraw Savings";
    this.P4[Bf] = "Fill Savings Withdr.";
    this.P4[O7] = "Stop Savings Withdr.";
    this.P4[BF] = "Delegate Vests";
    this.P4[BH] = "Return Delegated Vests";
    this.P4[A2] = "Claim Rewards";
    for (
            var b = function (b, c) {
                a.P6[b] = c;
            },
            c = 0;
            c < BQ.length;
            c++
            )
        b(BQ[c], function (a) {
            return a.from != D.l;
        });
    for (c = 0; c < Nl.length; c++)
        b(Nl[c], function (a) {
            return !1;
        });
    b(Ay, function (a) {
        return a.voter != D.l;
    });
    b(A6, function (a) {
        return a.author != D.l;
    });
    b(BE, function (a) {
        return a.witness == D.l;
    });
    b(Bc, function (a) {
        return a.proxy == D.l;
    });
    b(BF, function (a) {
        return a.delegatee == D.l;
    });
    b(BH, function (a) {
        return a.account == D.l;
    });
    b(Bj, function (a) {
        return a.creator != D.l;
    });
    b(M8, function (a) {
        return a.creator != D.l;
    });
    b(M7, function (a) {
        return a.creator != D.l;
    });
    b(A3, function (a) {
        return a.benefactor == D.l;
    });
    b(BL, function (a) {
        return a.from_account != D.l;
    });
    b(LI, function (a) {
        return a.owner == D.l;
    });
    b(Bf, function (a) {
        return a.to == D.l;
    });
    b(BN, function (a) {
        return a.to_account == D.l;
    });
    b(OI, function (a) {
        return a.recovery_account != D.l;
    });
    b(O7, function (a) {
        return a.from != D.l;
    });
    b(W1, function (a) {
        return a.creator != D.l;
    });
    b(XE, function (a) {
        return a.voter != D.l;
    });
    b(aS, function (a) {
        return a.proposal_owner != D.l;
    });
    b(ZE, function (a) {
        return a.receiver == D.l;
    });
    b(jH, function (a) {
        return a.from != D.l;
    });
    b(jI, function (a) {
        return a.from != D.l;
    });
    b(jJ, function (a) {
        return a.from != D.l;
    });
    b = function (b, c) {
        a.SO[b] = c;
    };
    for (c = 0; c < LR.length; c++)
        b(LR[c], function (a, b, c) {
            return b ? "opIconInTransaction" : "opIconOutTransaction";
        });
    for (c = 0; c < BR.length; c++)
        b(BR[c], function (a, b, c) {
            return a != A2 ? "opIconReward" : "opIconOut";
        });
    for (c = 0; c < BP.length; c++)
        b(BP[c], function (a, b, c) {
            return b ? "opIconInComment" : "opIconOut";
        });
    b(Ay, function (a, b, c) {
        return 0 <= c ? (b ? "opIconInUpvote" : "opIconOutUpvote") : b ? "opIconInDownvote" : "opIconOutDownvote";
    });
    b = function (b, c) {
        a.P5[b] = c;
    };
    c = function (b, c, d) {
        a.QC.push(c ? ak.Cz(b.from, d) : ak.Cz(b.to, d));
        a.P8 == jK
                ? "0.000 HBD" != b.sbd_amount
                ? ((d = b.sbd_amount.split(" ")), a.QC.push(d[1], Bl(d[0], 3)))
                : "0.000 HIVE" != b.steem_amount && ((d = b.steem_amount.split(" ")), a.QC.push(d[1], Bl(d[0], 3)))
                : ((d = b.amount.split(" ")), a.QC.push(d[1], Bl(d[0], 3)));
        a.P8 == Be &&
                ((d = String(b.memo)),
                        d.startsWith("http")
                        ? (b.memo = '<a href="' + d + '" target="_blank">' + d + "</a>")
                        : d.startsWith("#") && (b.memo = '<a href="#" class="encryptedMemo" title="Click to decrypt" data-memo="' + d + '" data-incoming="' + (c ? "1" : "0") + '">[ encrypted message ]</a>'));
    };
    for (var d = 0; d < BQ.length; d++)
        b(BQ[d], c);
    b(Az, function (b, c, d) {
        a.QC.push(Bl(D.o.AL(AQ(b.reward), 3), 3) + " HP");
    });
    b(A0, function (b, c, d) {
        c = AQ(b.vesting_payout);
        d = AQ(b.steem_payout);
        b = AQ(b.sbd_payout);
        c && (a.P9 += D.o.AL(c, 3) + " HP");
        d && (a.P9 += (a.P9 ? Lf : "") + DW(d, 3) + " HIVE");
        b && (a.P9 += (a.P9 ? Lf : "") + DW(b, 3) + " HBD");
        a.QC.push(a.P9);
    });
    b(A3, function (b, c, d) {
        c = AQ(b.vesting_payout);
        var e = AQ(b.steem_payout),
                f = AQ(b.sbd_payout);
        c && (a.P9 += (a.P9 ? Lf : "") + D.o.AL(c, 3) + " HP");
        e && (a.P9 += (a.P9 ? Lf : "") + DW(e, 3) + " HIVE");
        f && (a.P9 += (a.P9 ? Lf : "") + DW(f, 3) + " HBD");
        b.benefactor != D.l && (a.P9 += (a.P9 ? Lf : "") + ak.Cz(b.benefactor, d));
        a.QC.push(a.P9);
    });
    b(A4, function (b, c, d) {
        a.QC.push(Bl(D.o.AL(AQ(b.vesting_shares), 3), 3) + " HP");
    });
    b(Ay, function (b, c, d) {
        var e = b.weight / 100;
        a.QB = e;
        a.QA = 0 <= e ? "up" : "down";
        a.QC.push(ak.Cz(c ? b.voter : b.author, d), e + " %", c || 1 == D.G.get(MB) ? Ft.Fh("span", {class: "colVoteAmount", "data-author": b.author, "data-permlink": b.permlink, "data-voter": b.voter}) : "");
        void 0 === b.post_payout && (c || (b.pending_curation = ""), (b.post_payout = ""));
    });
    b(A6, function (b, c, d) {
        c = -1 == b.body.indexOf("@@");
        b.author != D.l ? (a.P9 = ak.Cz(b.author, d)) : b.parent_author && (a.P9 = ak.Cz(b.parent_author, d));
        !b.parent_author && b.title && (a.P9 += (a.P9 ? Lf : "") + aJ.GT(b.title, 40));
        a.P8 = b.parent_author ? (c ? A6 : A7) : c ? A9 : BA;
    });
    b(A2, function (b, c, d) {
        c = AQ(b.reward_steem, 3);
        d = AQ(b.reward_sbd, 3);
        b = D.o.AL(AQ(b.reward_vests), 3);
        0 < b && (a.P9 += (a.P9 ? Lf : "") + Bl(b, 3) + " HP");
        0 < c && (a.P9 += (a.P9 ? Lf : "") + c + " HIVE");
        0 < d && (a.P9 += (a.P9 ? Lf : "") + d + " HBD");
        a.QC.push(a.P9);
    });
    b(BI, function (b, c, d) {
        a.QC.push(b.amount_to_sell + Lf + b.min_to_receive);
    });
    b(Bh, function (b, c, d) {
        a.QC.push(b.orderid);
    });
    b(O7, function (b, c, d) {
        a.QC.push(b.request_id);
    });
    b(BD, function (b, c, d) {
        a.QC.push(b.current_pays + Lf + b.open_pays);
    });
    b(BJ, function (b, c, d) {
        if (b.json)
            if ((c = T7.DU(b.json))) {
                b = b.id;
                if ("nextcolony" == b)
                    c.type && (a.P9 = b + " -> " + c.type);
                else if ("scot_claim_token" == b)
                    a.P9 = "hive-engine -> claim tokens";
                else if (b.startsWith("ssc-"))
                    (a.P9 = "hive-engine"), c.contractName && c.contractAction && (a.P9 += " -> " + c.contractName + " -> " + c.contractAction);
                else if (c[0] && c[1]) {
                    var e = c[0];
                    c = c[1];
                    "follow" == b
                            ? "follow" == e
                            ? ((a.P8 = ("blog" == c.what ? "Follow" : "ignore" == c.what ? "Ignore" : "Unfollow") + " Account"), (a.P9 = ak.Cz(c.following, d)))
                            : "reblog" == e && ((a.P8 = "Reblog Post"), (a.P9 = ak.Cz(c.author, d)))
                            : "community" == b && ((a.P9 = b + " -> " + e), c.community && (a.P9 += " -> " + c.community));
                }
                a.P9 || void 0 === b || (a.P9 = b);
            } else
                b.json = "";
    });
    b(Bi, function (b, c, d) {
        b.exchange_rate && a.QC.push(b.exchange_rate.base + Lf + b.exchange_rate.quote);
    });
    b(BE, function (b, c, d) {
        a.QC.push(ak.Cz(b.witness == D.l ? b.account : b.witness, d), b.approve ? "Added" : "Removed");
    });
    b(Bc, function (b, c, d) {
        b = b.proxy == D.l ? b.account : b.proxy;
        a.QC.push(b ? ak.Cz(b, d) : "-");
    });
    b(BF, function (b, c, d) {
        a.QC.push(b.delegatee == D.l ? ak.Cz(b.delegator, d) : ak.Cz(b.delegatee, d), "HP", Bl(D.o.AL(AQ(b.vesting_shares), 3), 3));
    });
    b(BH, function (b, c, d) {
        a.QC.push("", "HP", Bl(D.o.AL(AQ(b.vesting_shares), 3), 3));
    });
    b(BK, function (b, c, d) {
        a.QC.push(b.interest);
    });
    b(BM, function (b, c, d) {
        a.QC.push(Bl(D.o.AL(AQ(b.vesting_shares), 3), 3) + " HIVE");
    });
    b(BN, function (b, c, d) {
        a.QC.push(Bl(D.o.AL(AQ(b.withdrawn), 3), 3) + " HIVE");
        (b.to_account == D.l && b.from_account == D.l) || a.QC.push(Lf, ak.Cz(b.to_account != D.l ? b.to_account : b.from_account, d));
    });
    b(Bf, function (b, c, d) {
        a.QC.push(b.amount);
    });
    c = function (b, c, d) {
        a.QC.push(b.new_account_name);
    };
    b(Bj, c);
    b(M8, c);
    b(M7, c);
    b(M6, function (b, c, d) {
        a.QC.push(b.fee);
    });
    b(LH, function (b, c, d) {
        a.QC.push(b.amount);
    });
    b(LI, function (b, c, d) {
        a.QC.push(b.amount_in + Lf + b.amount_out);
    });
    b(BL, function (b, c, d) {
        a.QC.push(ak.Cz(b.from_account == D.l ? b.to_account : b.from_account, d) + Lf + b.percent / 100 + "%");
    });
    b(OI, function (b, c, d) {
        a.QC.push(ak.Cz(b.recovery_account == D.l ? b.account_to_recover : b.recovery_account, d));
    });
    b(Nt, function (b, c, d) {
        a.QC.push(ak.Cz(b.new_recovery_account, d));
    });
    b(W1, function (b, c, d) {
        a.QC.push(ak.Cz(c ? b.creator : b.receiver, d));
    });
    b(aS, function (b, c, d) {
        a.QC.push(ak.Cz(b.proposal_owner, d));
    });
    b(XE, function (b, c, d) {
        b.voter != D.l && a.QC.push(ak.Cz(b.voter, d) + Lf);
        a.QC.push(b.approve + Lf, "[ " + b.proposal_ids.join(", ") + " ]");
    });
    b(W2, function (b, c, d) {
        a.QC.push(b.additional_funds);
    });
    b(ZE, function (b, c, d) {
        c = b.payment.split(" ");
        a.QC.push(ak.Cz(b.receiver == D.l ? Zo : b.receiver, d), c[1], Bl(c[0], 3));
    });
    b(jH, function (b, c, d) {
        a.QC.push(ak.Cz(b.to == D.l ? b.from : b.to, d));
    });
    b(jI, function (b, c, d) {
        a.QC.push(ak.Cz(b.to == D.l ? b.from : b.to, d));
    });
    b(jJ, function (b, c, d) {
        a.QC.push(ak.Cz(b.to == D.l ? b.from : b.to, d));
    });
};
b0.prototype.onPageResized = function (a) {
    var b = $("#tabsAccountOperations");
    if (b.length) {
        var c = $("#filterOperationsRow"),
                d = $("#filterOperationsHiddenOps");
        b.is(".qVertical")
                ? ((a = Math.max(564, a.ce())), b.css("height", a + "px"), c.css("height", a + "px"), (b = d.offset().top - c.offset().top), d.css("height", a - b - 10 + "px"))
                : (b.css("height", "auto"), c.css("height", "auto"), d.css("height", "auto"));
    }
};
var UF = function (a, b, c) {
    this.parentView = a;
    this.tabName = b;
    this.tabId = c;
    this.Io = Ft.R4("recentPostTab", c);
    this.GB(this.Io);
};
UF.prototype.GB = function (a) {};
UF.prototype.XV = function () {
    return this.parentView.Io;
};
UF.prototype.an = function () {
    return this.Io;
};
UF.prototype.X3 = function () {
    return this.parentView.post;
};
UF.prototype.G0 = function () {
    return this.parentView.post.YR().permlink;
};
UF.prototype.hW = function () {
    return this.Io.is(":visible");
};
UF.prototype.D0 = function (a) {
    this.parentView.D0(this.tabId, a);
};
UF.prototype.T6 = function (a) {};
UF.prototype.gr = function () {};
var T8 = function (a, b, c) {
    UF.call(this, a, b, c);
};
$jscomp.inherits(T8, UF);
T8.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    a.append(Ft.R4("postComments"));
};
T8.prototype.GY = function (a, b) {
    var c = this,
            d = this,
            e = {authors: T8.GZ(b), tags: T8.UW(b), modes: ["", "Not voted", "Not voted by me", "Voted", "Voted by me"]},
            f = function (a, b, d) {
                for (var f = [], g = e[d], h = 0; h < g.length; h++) {
                    var k = g[h];
                    f.push({text: k, value: k});
                }
                var q = new gt({
                    width: "14em",
                    class: a,
                    "data-name": b,
                    "data-type": d,
                    items: f,
                    eI: function () {
                        var a = q.an().parents(".filterCommentsRow");
                        c.Lo(a.data("Io"), a.data("result"));
                    },
                });
                return q;
            };
    this.hX = f("filterCommentsSelectAuthor", "filter_from", "authors");
    this.hY = f("filterCommentsSelectParentAuthor", "filter_to", "authors");
    this.hZ = f("filterCommentsSelectTag", "filter_tag", "tags");
    this.hJ = f("filterCommentsSelectMode", "filter_mode", "modes");
    this.hb = Ft.GB("input", {class: "filterCommentsSearchText", "data-name": "filter_text", type: "text"});
    b = Ft.R4("filterCommentsRow textBox")
            .data("Io", a)
            .data("result", b)
            .append([
                Ft.GB("span", {class: "filterCommentsLabel"}, "From"),
                this.hX.an(),
                Ft.GB("span", {class: "filterCommentsLabel"}, T7.LJ(4) + "To"),
                this.hY.an(),
                Ft.GB("span", {class: "filterCommentsLabel"}, T7.LJ(6) + "Containing Text"),
                this.hb,
                Ft.GB("button", {class: "filterCommentsRefresh"}, "Refresh"),
                Ft.GB("span", {class: "filterCommentsSpace"}),
                Ft.GB("span", {class: "filterCommentsLabel"}, "Tag"),
                this.hZ.an(),
                Ft.GB("span", {class: "filterCommentsLabel"}, T7.LJ(4) + "Filter"),
                this.hJ.an(),
            ]);
    b.find(":input").each(function () {
        var b = $(this).data("name");
        b && a.data(b) && $(this).val(a.data(b));
    });
    this.hb.on("input", function () {
        var a = $(this).parents(".filterCommentsRow");
        d.Ln && clearTimeout(d.Ln);
        d.Ln = setTimeout(function () {
            d.Lo(a.data("Io"), a.data("result"));
        }, 250);
    });
    b.find(".filterCommentsRefresh")
            .button()
            .on("click", function () {
                var a = $(this).parents(".filterCommentsRow");
                d.GO(a.data("Io"));
            });
    return b;
};
T8.prototype.Lo = function (a, b) {
    var c = this.hX.bt(),
            d = this.hY.bt(),
            e = this.hZ.bt(),
            f = this.hJ.bt().toLowerCase(),
            g = this.hb.val().toLowerCase().split(" ");
    b = a.find(".postComments");
    a.find(".filterCommentsRow")
            .find(":input")
            .each(function () {
                var b = $(this).data("name");
                b && a.data(b, $(this).val());
            });
    b.find(".textBox").each(function () {
        var a = $(this).show(),
                b = a.data("item");
        if (b) {
            var l = b.json_metadata ? T7.DU(b.json_metadata) : 0;
            l = l && l.tags ? l.tags : [];
            ((c && c != b.author) || (d && d != b.parent_author) || (e && (!l.length || -1 == l.indexOf(e)))) && a.hide();
            if (g.length)
                for (l = 0; l < g.length; l++)
                    if (-1 == b.body.toLowerCase().indexOf(g[l])) {
                        $(this).hide();
                        break;
                    }
            if (f) {
                l = b.active_votes;
                for (var m = 0 < b.active_votes.length, n = !1, p = 0; p < l.length; p++)
                    if (l[p].voter == D.l) {
                        n = !0;
                        break;
                    }
                (("not voted" == f && m) || ("voted" == f && !m) || ("not voted by me" == f && (n || b.author == D.l)) || ("voted by me" == f && !n)) && a.hide();
            }
        }
    });
};
T8.prototype.Pv = function (a) {
    var b = aJ.GT(a.title, 120),
            c = aJ.GT(a.body, 350),
            d = aJ.GT(a.body),
            e = moment.utc(a.last_update).local(),
            f = Bl(AQ(a.pending_payout_value) + AQ(a.total_payout_value) + AQ(a.curator_payout_value), 2);
    f =
            Ft.Fh("button", {class: "gotoComment"}, fv("show_in_new_tab_btn")) +
            T7.LJ(2) +
            Ft.Fh("button", {class: "showComment"}, fv("show_in_post_viewer_btn")) +
            Ft.Fh("span", {class: "commentPayout"}, "$ " + f) +
            (0 < f ? Ft.Fh("button", {class: "imageButton showVotesChart", title: fv("show_votes_btn")}, Ft.eU()) : "");
    this.gg ||
            (this.gg = new gf(
                    '\n <div class="textBox text" data-author="{author}" data-permlink="{permlink}" data-parent-author="{parent_author}" data-parent-permlink="{parent_permlink}">\n <div class="textBoxHeader clearfix">\n <span class="textBoxDate">\n {date}<br>\n <span class="textBoxTimeAgo">{time_ago}</span>\n </span>\n <span class="textBoxAuthor">{title_author}</span>\n <span class="textBoxSpace"></span>\n <span class="textBoxParentAuthor">\n <span class="textBoxSpace"> &gt;&gt; </span>\n {title_parent_author}\n </span>\n </div>\n <div class="textBoxBody">\n <div class="textBoxTitle">{title}</div>\n {body}\n </div><hr>\n <div class="textBoxFooter clearfix">{footer}</div>\n </div>\n '
                    ));
    var g = Ft.R4("textBoxBodyInner", "", c);
    c.length < d.length && g.append([T7.LJ(2), Ft.R5("#", "[ Show more ]", {class: "expandBody"})]);
    b = this.gg
            .fill(
                    {
                        author: a.author,
                        parent_author: a.parent_author,
                        parent_permlink: a.parent_permlink,
                        title_author: ak.ET(a.author, !1),
                        title_parent_author: ak.ET(a.parent_author, !1),
                        permlink: a.permlink,
                        title: b ? b + "<hr>" : "",
                        body: g[0].outerHTML,
                        footer: f,
                        date: D.B.DE(e, !1, !0, !0),
                        time_ago: "( " + aG.DT(moment(), e, !1) + " ago )",
                    },
                    !0
                    )
            .data("item", a);
    a.author == D.l && b.find(".textBoxAuthor a").css("color", "#23c259");
    a.parent_author == D.l && b.find(".textBoxParentAuthor a").css("color", "#23c259");
    return b;
};
T8.prototype.GO = function (a) {
    var b = this,
            c = a.data("permlink"),
            d = a.find(".postComments"),
            e = a.data("tags")[0];
    d.hide();
    this.D0("Loading...");
    D.S.GP(e, D.l, c, function (c) {
        d.empty().append(b.GY(a, c));
        d.find(".qSelect").each(function () {
            g8(this).hV();
        });
        if (c.length && void 0 === c[0].last_update)
            for (var f = 0; f < c.length; f++)
                c[f].last_update = c[f].created;
        aI.Bu(c, "last_update", !0);
        b.D0("Replies (" + c.length + ")");
        for (f = 0; f < c.length; f++) {
            var h = c[f];
            D.p.TR(h.author) || b.Pv(h).appendTo(d);
        }
        d.find(".showComment")
                .button()
                .on("click", function () {
                    var a = $(this).parents(".textBox").data("item");
                    new ge({author: a.author, permlink: a.permlink, mM: a, title: "", hh: !1});
                });
        d.find(".gotoComment")
                .button()
                .on("click", function () {
                    var a = $(this).parents(".textBox").data("item"),
                            b = D.G.Y2();
                    D.s.DQ(b + "/" + e + "/@" + a.author + "/" + a.permlink, !0);
                });
        d.find(".showVotesChart").on("click", function () {
            var a = $(this).parents(".textBox").data("item");
            Wj.B6(a.author, a.permlink);
        });
        d.find(".expandBody").on("click", function (a) {
            a.preventDefault();
            a = $(this).parents(".textBox").data("item");
            a = aJ.GT(a.body);
            $(this).parents(".textBoxBodyInner").html(a);
        });
        d.show();
        b.Lo(a, c);
    });
};
T8.prototype.T6 = function (a) {
    UF.prototype.T6.call(this, a);
    a && this.GO(this.XV());
};
T8.prototype.gr = function () {
    this.XV().find(".postComments").empty();
};
T8.GZ = function (a) {
    for (var b = [""], c = 0; c < a.length; c++)
        -1 == b.indexOf(a[c].author) && b.push(a[c].author), a[c].parent_author && -1 == b.indexOf(a[c].parent_author) && b.push(a[c].parent_author);
    return b.sort();
};
T8.UW = function (a) {
    for (var b = [""], c, d = 0; d < a.length; d++)
        if (a[d].json_metadata && (c = T7.DU(a[d].json_metadata)) && c.tags && (c = c.tags) && c.length)
            for (var e = 0; e < c.length; e++)
                -1 == b.indexOf(c[e]) && b.push(c[e]);
    return b.sort();
};
var T9 = function (a, b, c) {
    UF.call(this, a, b, c);
};
$jscomp.inherits(T9, UF);
T9.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    this.gD = Ft.R4("postContentTitle");
    this.Iq = HC.hi(this.gD);
    a.append(this.Iq);
};
T9.prototype.T6 = function (a) {
    UF.prototype.T6.call(this, a);
    a && new HC({author: D.l, permlink: this.G0(), hh: !0, hg: !1, gD: this.gD, Iq: this.Iq});
};
var UA = function (a, b, c) {
    UF.call(this, a, b, c);
};
$jscomp.inherits(UA, UF);
UA.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    for (
            var b = Ft.be("dataTable fixed mbBig"),
            c = [
                ["created_time", "Created"],
                ["payout_time", "Payout Time"],
                ["total_payout", "Payout Total"],
                ["author_payout", "Payout Author"],
                ["benef_payout", "Payout Beneficiaries"],
                ["curator_payout", "Payout Curators"],
                ["returned_payout", "Payout Returned"],
                ["percent_sbd", "Payout Percent HBD"],
                ["transfer_amount", "Transfer Amount"],
                ["post_link", "Link"],
            ],
            d = [],
            e,
            f = 0;
            f < c.length;
            f++
            )
        (e = c[f]), d.push(Ft.Fj("td", [e[1], {attr: {class: "rowContent"}, html: ""}], {"data-key": e[0]}));
    b.append(d);
    a.append(b, Ft.R4("recentPostMeta"));
};
UA.prototype.Lk = function () {
    var a = this.Io,
            b = "";
    a.find(".uName.invalid").each(function () {
        b += (b ? ", " : "") + $(this).data("name");
    });
    if (b) {
        var c = a.find(".postHint");
        c.length || ((c = Ft.GB("div", {class: "postHint textBox"})), c.insertBefore(a.find("table:first")));
        c.empty().append(Ft.GB("img", {src: L8("res/img/hint.png")}), "The following mentioned accounts could not be found:<br>" + Ft.Fh("span", {class: "numNegative"}, b));
    }
};
UA.prototype.T6 = function (a) {
    UF.prototype.T6.call(this, a);
    var b = this.XV();
    a &&
            setTimeout(function () {
                aH.BV(b.find(".recentPostTab table"));
            }, 800);
};
var LT = 480,
        LU = 1e3,
        UB = function (a, b, c) {
            UF.call(this, a, b, c);
        };
$jscomp.inherits(UB, UF);
UB.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    a.append(Ft.R4("postImages"));
};
UB.prototype.GL = function (a) {
    var b = Ft.GB("table", {class: "dataTable fixed"}, Ft.Fj("td", [{html: "", attr: {colspan: "2"}}])),
            c = D.G.get(GK),
            d = b.find("td"),
            e = LT * c,
            f = LU * c;
    c = 5 + 5 * c;
    for (var g = {}, h = 0; h < a.length; g = {$jscomp$loop$prop$imgElem$367: g.$jscomp$loop$prop$imgElem$367, $jscomp$loop$prop$imgLink$368: g.$jscomp$loop$prop$imgLink$368}, h++) {
        a[h] = a[h].trim();
        g.$jscomp$loop$prop$imgElem$367 = Ft.GB("img", {src: L8("res/img/loading.gif")});
        g.$jscomp$loop$prop$imgLink$368 = Ft.GB("a", {href: a[h], target: "_blank"}, g.$jscomp$loop$prop$imgElem$367);
        g.$jscomp$loop$prop$imgLink$368.css({padding: "0", margin: c + "px"});
        d.append(g.$jscomp$loop$prop$imgLink$368);
        var k = new Image();
        k.onload = (function (a) {
            return function () {
                var b = this.width,
                        c = this.height,
                        d = 0,
                        g = parseFloat(b / c);
                c > e && ((c = e), (b = c * g));
                b > f && ((c = f / g), c > e && (c = e));
                c = parseInt(c);
                c <= e && ((d = (e - c) / 2), (c = e - 2 * d));
                a.$jscomp$loop$prop$imgElem$367[0].src = this.src;
                a.$jscomp$loop$prop$imgElem$367.css("height", c + "px");
                a.$jscomp$loop$prop$imgLink$368.css({"line-height": "0", "padding-top": d + "px", "padding-bottom": d + "px"});
            };
        })(g);
        k.src = C4.Ns(a[h], 0, LT, !0);
    }
    return b;
};
UB.prototype.T6 = function (a) {
    UF.prototype.T6.call(this, a);
    var b = this,
            c = this.XV(),
            d = c.find(".postImages"),
            e = c.data("images");
    c = c.data("nsfw");
    if (d.length && e && (this.D0("Images (" + e.length + ")"), a)) {
        var f = function () {
            var a = Ft.GB("div", {class: "postImagesTools"}),
                    c = $(D.U.ZB());
            c.attr("title", "Adjust Image Zoom...");
            a.append(c);
            c = b.GL(e);
            d.empty().append(a).append(c);
            new ZZ(a.find(".percentageSlider"), {
                minValue: 1,
                maxValue: 100,
                value: 100 * D.G.get(GK),
                onSlide: function (a) {
                    !a ||
                            isNaN(a) ||
                            100 < a ||
                            (D.G.set(GK, a / 100, !1),
                                    D.V.GN && clearTimeout(D.V.GN),
                                    (D.V.GN = setTimeout(function () {
                                        D.G.set(GK, D.G.get(GK), !0);
                                        d.find("table").replaceWith(b.GL(e));
                                    }, 250)));
                },
            });
        };
        c
                ? 1 == D.G.get(PV)
                ? f()
                : D4.Mg("Confirm NSFW Content", fv("nsfw_hint"), function () {
                    X2.Pb();
                    f();
                })
                : f();
    }
};
var UC = function (a, b, c) {
    UF.call(this, a, b, c);
};
$jscomp.inherits(UC, UF);
UC.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    this.il = new b7({
        id: "tableResteems_" + this.G0(),
        class: "dataTable postResteems notBold scrollY",
        headers: ["Reblogged By", "Date"],
        widths: ["30%", "70%"],
        aligns: ["L", "L"],
        sortCols: ["account", "date"],
        sortDirs: ["A", "A"],
    }).an();
    a.append(this.il);
};
UC.prototype.T6 = function (a) {
    var b = this;
    UF.prototype.T6.call(this, a);
    this.XV();
    var c = this.G0();
    a ||
            D.Z.DO(D.l, c, function (a) {
                var c = b.il;
                Ft.gT(c);
                for (var d, g, h = 0; h < a.length; h++)
                    (d = a[h]), (g = d[0]), (d = D.B.DE(moment.unix(Number(d[1]) + HM))), c.append(Ft.Fj("td", [ak.ET(g, !1, !0), d], {"data-account": g, "data-date": d}));
                b7.LA(c, "account");
                b.D0("Reblogs (" + a.length + ")");
            });
};
var UD = function (a, b, c) {
    UF.call(this, a, b, c);
};
$jscomp.inherits(UD, UF);
UD.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
    a.append(Ft.R4("postTransfers scrollY"));
};
UD.prototype.T6 = function (a) {
    var b = this;
    UF.prototype.T6.call(this, a);
    var c = this.XV();
    a ||
            (c.find(".postTransfers").html("Loading..."),
                    c.find("td[data-key='transfer_amount']").text("Loading..."),
                    setTimeout(function () {
                        b.Eq();
                    }, 1e3));
};
UD.prototype.Eq = function () {
    var a,
            b = this.XV();
    var c = this.G0();
    var d = 0,
            e = 0,
            f = [],
            g = [];
    aI.Bu(D.O.PT, "ts", !0);
    aI.Bu(D.O.PS, "ts", !1);
    var h = "@" + D.l + "/" + c;
    c = this.X3().ep;
    for (var k = 0; k < D.O.PT.length; k++) {
        var l = D.O.PT[k];
        if (!(moment.utc(l.timestamp) < c) && l.memo.endsWith(h)) {
            f.push(l);
            "HBD" == l.unit ? (d += l.amount) : (e += l.amount);
            var m = moment.utc(l.timestamp);
            var n = moment.utc(l.timestamp).add(5, "minutes");
            var p = [l.to];
            "smartmarket" == l.to ? p.push("smartsteem") : "smartsteem" == l.to && p.push("smartmarket");
            for (a = 0; a < D.O.PS.length; a++)
                (l = D.O.PS[a]), moment.utc(l.timestamp) < m || moment.utc(l.timestamp) > n || -1 == p.indexOf(l.from) || -1 != g.indexOf(l.id) || (f.push(l), g.push(l.id), "HBD" == l.unit ? (d -= l.amount) : (e -= l.amount));
        }
    }
    g = Ft.GB("table", {class: "dataTable"}, Ft.Fj("th", ["", "To", "From", "Amount", "Date"]));
    for (p = 0; p < f.length; p++)
        (c = f[p]),
                void 0 === c.to ? ((m = c.from), (n = D.l)) : ((m = D.l), (n = c.to)),
                g.append(Ft.Fj("td", [void 0 !== c.to ? ak.DF(c.to) : "", ak.ET(n, !0), ak.ET(m, !0), Bl(c.amount, 3) + " " + c.unit, D.B.DE(moment.utc(f[p].timestamp).local())]));
    c = "";
    if (0 < d || 0 < e)
        (c = 0 < d ? Bl(d, 3) + " HBD" : ""), 0 < e && (c += (c ? Lf : "") + Bl(e, 3) + " HIVE"), g.append(Ft.Fj("td", ["", "", "", c, ""], {class: "rowSum"}));
    UN.NU(b, "transfer_amount", c ? c : "-");
    b.find(".postTransfers").html(Ft.Fk(g));
    this.D0("Transfers (" + f.length + ")");
};
var UE = function (a, b, c) {
    UF.call(this, a, b, c);
    this.Io.css({display: "flex", "flex-direction": "row", height: "600px", "margin-top": "4px"});
};
$jscomp.inherits(UE, UF);
UE.prototype.GB = function (a) {
    UF.prototype.GB.call(this, a);
};
UE.prototype.T6 = function (a) {
    UF.prototype.T6.call(this, a);
    var b = this.an(),
            c = this.X3(),
            d = c.E0();
    this.D0("Votes (" + d + ")");
    a &&
            d &&
            (((a = b.data("vote_count")) && a == d) ||
                    XW.ZN(c, function () {
                        Wj.Ar(b, c, "510px");
                        b.data("vote_count", d);
                    }));
};
var T4 = function (a, b) {
    this.W4 = a.data("posts_panel_handle");
    this.post = b;
    this.Yg = !0;
    this.tabs = [];
    this.GB(b);
};
T4.prototype.GB = function (a) {
    var b = this;
    a.YR();
    var c = Ft.GB("div", {class: "recentPost", "data-permlink": a.G0()}).data("ep", a.ep);
    g9(c, this);
    for (var d = Ft.R4("postImageContainer"), e = 0; 8 > e; e++)
        d.append(Ft.R4("postImage"));
    d = Ft.GB("div", {class: "recentPostHeader"})
            .on("click", function () {
                b.Sg(!b.Yg);
                b.Sh(!0);
            })
            .append(d, Ft.R4("postTitle"), Ft.R4("postSumPayout"));
    e = ak.gi({
        class: "tabsPost",
        MI: function () {
            return b.MI();
        },
        fP: function () {
            return b.fP();
        },
    });
    c.append(d, e.an());
    e.an().hide();
    this.Io = c;
    this.headerDiv = d;
    this.gB = e;
    this.VY(a);
};
T4.prototype.XB = function (a, b, c) {
    var d = "tabPost_" + this.post.YR().permlink + "_" + a;
    a = new c(this, a, d);
    this.tabs.push(a);
    this.gB.fL({id: d, title: b, content: a.Io, gn: "155px"});
};
T4.prototype.VY = function (a) {
    this.XB("data", "Summary", UA);
    this.XB("content", "Content", T9);
    this.XB("votes", "Votes", UE);
    this.XB("images", "Images", UB);
    this.XB("comments", "Replies (...)", T8);
    this.XB("resteems", "Reblogs", UC);
    this.XB("transfers", "Transfers", UD);
    this.YA(a, !1);
    this.gB.fS(D.X.get(D8, 0));
};
T4.prototype.YB = function (a) {
    for (var b = 0; b < this.tabs.length; b++)
        if (this.tabs[b].tabName == a)
            return this.tabs[b];
    return null;
};
T4.prototype.Sg = function (a, b) {
    var c = this;
    this.Yg = a;
    this.headerDiv[a ? "removeClass" : "addClass"]("qActive");
    this.gB.an().toggle("blind", function () {
        c[a ? "Si" : "Sj"]();
        void 0 !== b && b();
    });
};
T4.prototype.Sh = function (a) {
    $(".recentPost.focused").removeClass("focused");
    a && this.Io.addClass("focused");
};
T4.prototype.D0 = function (a, b) {
    (a = this.gB.fO(a)) && a.text(b);
};
T4.prototype.PX = function () {
    for (var a = this.Io, b = a.data("images"), c = "gallery" == this.W4.aW() ? Math.min(8, b.length) : 1, d, e = 0; e < c; e++)
        (d = b[e]), (d = a.data("nsfw") && 1 != D.G.get(PV) ? L8("res/img/warnings/nsfw-hint.png") : C4.Ns(d, 400, 256)) && a.find(".postImage:eq(" + e + ")").css("background-image", "url('" + d + "')");
};
T4.prototype.YA = function (a, b) {
    a.refresh();
    b = this.Io;
    var c = a.YR(),
            d = a.Xe(),
            e = a.YQ(),
            f = aJ.GT(a.Xx()),
            g = D.G.Y2() + "/" + e[0] + "/@" + a.aw() + "/" + a.G0(),
            h = [];
    d || (d = {});
    d.app || (d.app = "-");
    void 0 !== d.image && ((h = D.B.Kr(d.image.toString().split(","))), delete d.image);
    for (var k = D.B.DS(a.W5()), l = 0; l < k.length; l++)
        -1 == h.indexOf(k[l]) && h.push(k[l]);
    e = {app: d.app, tags: e, users: D.B.Lc(c)};
    delete d.app;
    delete d.tags;
    void 0 !== d.users && delete d.users;
    e.users.length || delete e.users;
    if (c.beneficiaries && c.beneficiaries.length)
        for (e.beneficiaries = $.extend(!0, {}, c.beneficiaries), k = 0; k < c.beneficiaries.length; k++)
            e.beneficiaries[k].weight = Bl(c.beneficiaries[k].weight / 100, 2) + " %";
    for (var m in d)
        e[m] = d[m];
    b.data("images", h).data("created", a.ep).data("tags", e.tags).data("nsfw", a.Pa());
    b.find(".postTitle").attr("title", f).html(f);
    b.find(".recentPostMeta").html(ak.AN(e, "fixed mbBig"));
    UN.NU(b, "post_link", Ft.R5(g, D.B.Jn(g), {target: "_blank"}));
    UN.NU(b, "percent_sbd", aH.FD([Bl(100 * a.factorHBD, 2) + " %"]));
    a.W8 || b.find("tr[data-key='benef_payout']").remove();
    a.XM() && b.addClass("payoutDeclined");
    a.YY() || b.find("tr[data-key='payout_time']").remove();
    this.PX();
};
T4.prototype.Si = function () {};
T4.prototype.Sj = function () {
    for (var a = ["images", "votes", "resteems", "transfers"], b = 0; b < a.length; b++)
        this.YB(a[b]).T6(!1);
    this.gB.fS(D.X.get(D8, 0));
    this.MI();
    D.s.iZ();
};
T4.prototype.fP = function () {
    var a = this.gB.fh();
    this.tabs[a].gr();
};
T4.prototype.MI = function () {
    var a = this.gB.fh(),
            b = this.tabs[a].hW();
    this.tabs[a].T6(b);
    D.X.set(D8, a);
};
T4.PW = function () {
    $(".recentPost").each(function () {
        g8(this).PX();
    });
};
var Nv = [
    {id: "default", title: "Default View", limit: 5},
    {id: "miniature", title: "Miniature View", limit: 50},
    {id: "gallery", title: "Gallery View", limit: 5},
],
        UN = function (a, b) {
            var c = this;
            this.div = a;
            this.ab = b;
            this.sortOrder = "desc";
            this.aV = function (a, b) {
                a = $(a).data("created");
                b = $(b).data("created");
                return ("asc" == c.sortOrder ? a < b : a > b) ? -1 : a != b ? 1 : 0;
            };
            a.data("posts_panel_handle", this);
            this.GB();
        };
UN.prototype.GB = function () {
    var a = this,
            b = Ft.R4("accountPostsHeader textBox"),
            c = Ft.R4("accountPosts");
    c.data("posts_panel_handle", this);
    this.div.empty().append(b, c);
    for (var d = [], e = 0; e < Nv.length; e++) {
        var f = Nv[e];
        d.push({text: f.title, value: f.id});
    }
    d = new gt({
        class: "selectRecentPostsView",
        items: d,
        eI: function (b) {
            "active" == a.ab && D.G.set(Nu, b, !0);
            a.Yb(b);
            c.find(".recentPost").each(function () {
                g8(this).PX();
            });
        },
    });
    d.an().css("margin-right", "4px");
    b.append(d.an());
    d.e8(!1);
    e = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1e3, 1e4];
    f = [];
    for (var g = 0; g < e.length; g++) {
        var h = e[g];
        f.push({value: h, text: h + " Posts"});
    }
    e = new gt({
        class: "selectRecentPostsLimit",
        width: "21%",
        items: f,
        eI: function (b) {
            b = parseInt(b);
            "active" == a.ab && D.G.set(N1, b, !0);
            a.VF(b, !0);
        },
    });
    b.append(e.an());
    this.XX = b;
    this.aX = c;
    this.ew = d;
    this.selectLimit = e;
    this.Yb("default");
};
UN.prototype.reset = function () {
    this.aX.empty();
};
UN.prototype.Yb = function (a) {
    this.aX.attr("data-view", a);
    this.ew.aM(a);
};
UN.prototype.aW = function () {
    return this.ew.bt();
};
UN.prototype.VF = function (a, b) {
    this.selectLimit.aM(a);
    var c = this.aX.find(".recentPost").toArray(),
            d = c.length;
    this.aX.data("limit", a);
    if (d > a)
        for (; a < d; a++)
            $(c[a]).remove();
    b && this.LW(!0);
};
UN.prototype.YD = function () {
    return parseInt(this.selectLimit.bt());
};
UN.prototype.US = function (a) {
    var b = a != this.sortOrder;
    this.sortOrder = a;
    b && this.LW(!0);
};
UN.prototype.UT = function () {
    return this.sortOrder;
};
UN.prototype.Nm = function (a) {
    var b = this,
            c,
            d = this.ab,
            e = this.aX,
            f = 0,
            g = this.YD(),
            h = e.find(".recentPost").length;
    e.find(".showMorePosts").remove();
    e.find(".recentPostSpacer").remove();
    "old" != d && e.find(".recentPost").sort(this.aV).appendTo(e);
    h < a &&
            ((a = Ft.R7("showMorePosts", "", "Show more...", "", function () {
                var a = g;
                g = a + (5 == a ? 5 : 10);
                b.VF(g, !0);
            })),
                    e.append(a));
    e.find(".recentPost").each(function () {
        c = $(this);
        0 < f && 0 == f % 5 && Ft.R4("recentPostSpacer").insertBefore(c);
        f++;
    });
};
UN.prototype.LW = function (a) {
    var b = this.ab,
            c = this.aX,
            d = c.parents(".panelAccountPosts").data("overview_handle"),
            e = 0,
            f = !1;
    if ("old" != b || d) {
        var g = "old" == b ? d.aa : D.q.Xb(D.l, !0);
        a && "old" != b && aI.Bu(g, "ep", "desc" == this.sortOrder);
        for (var h = 0; h < g.length; h++) {
            var k = g[h];
            var l = c.find(".recentPost").length;
            if ("active" == b) {
                if (!k.YY())
                    continue;
                var m = c.find(".recentPost[data-permlink='" + k.G0() + "']");
                !k.YY() && m.length && ((f = !0), m.remove());
            } else if ("search" == b) {
                if (!UN.OD(k))
                    continue;
                e++;
            }
            l < this.YD() && UN.N2(this.aX, k);
        }
        "active" == b && f ? this.LW(!0) : a && ((a = "active" == b ? D.q.ZJ(D.l, !0) : "old" == b ? d.aa.length : e), this.Nm(a));
    }
};
UN.Ap = function (a, b) {
    b = new T4(a, b);
    a.append(b.Io);
    return b.Io;
};
UN.N2 = function (a, b) {
    var c = a.find(".recentPost[data-permlink='" + b.G0() + "']"),
            d = !c.length;
    d && (c = UN.Ap(a, b));
    a = c.hasClass("activePost");
    var e = 0 < c.find(".recentPostHeader.qActive").length;
    if (d || a)
        c.find(".postSumPayout").html(D.B.EQ(b.Et) + " $"),
                UN.NU(c, "created_time", b.ez),
                UN.NU(c, "payout_time", UN.Yu(b)),
                UN.NU(c, "total_payout", UN.Yv(b)),
                UN.NU(c, "author_payout", UN.Yq(b)),
                UN.NU(c, "benef_payout", UN.Ys(b)),
                UN.NU(c, "curator_payout", UN.Yr(b)),
                UN.NU(c, "returned_payout", UN.Yt(b));
    b.YY() ? a || c.addClass("activePost") : a && c.removeClass("activePost").find("tr[data-key='payout_time']").remove();
    e && aH.BV(c.find(".recentPostTab table"));
};
UN.NU = function (a, b, c) {
    a = a.find("tr[data-key='" + b + "'] .rowContent");
    b = a.data("value");
    (void 0 !== b && b == c) || a.data("value", c).html(c);
};
UN.OC = function () {
    for (var a = D.q.Xb(D.l, !0), b = [""], c = 0; c < a.length; c++) {
        var d = T7.DU(a[c].bt("json_metadata"));
        if (d && void 0 !== d.tags) {
            aI.Dd(d.tags) && (d.tags = [d.tags]);
            for (var e = 0; e < d.tags.length; e++)
                d.tags[e] && void 0 !== d.tags[e].toLowerCase && aI.Lm(b, d.tags[e].toLowerCase());
        }
    }
    b.sort();
    a = [];
    for (c = 0; c < b.length; c++)
        (d = b[c]), a.push({value: d, text: d});
    g8("#searchPostsFilterAddTag").g4(a);
};
UN.OD = function (a) {
    var b = a.YR(),
            c = !1,
            d = !0,
            e = T7.Km($("#searchPostsFilterText").val().toLowerCase(), ",", " "),
            f = T7.Km($("#searchPostsFilterTags").val().toLowerCase(), ",", " "),
            g = e.split(" ");
    f = f.split(" ");
    var h = g8("#searchPostsFilterTextMode").bt();
    e = g8("#searchPostsFilterMode").bt();
    var k = $("#searchPostsFilterDateFrom").val(),
            l = $("#searchPostsFilterDateTo").val();
    if (g.length)
        for (
                var m, n = !h || "title" == h, p = !h || "body" == h, q = b.title.toLowerCase(), r = b.body.toLowerCase(), t = 0;
                t < g.length && (!g[t] || ((m = - 1 < r.indexOf(g[t])), (h = - 1 < q.indexOf(g[t])), (h = (n && h) || (p && m)) ? (c = !0) : (d = !1), "OR" != e || !c));
                t++
                )
            ;
    if (f.length && (b = T7.DU(b.json_metadata)) && void 0 !== b.tags)
        for (aI.Dd(b.tags) && (b.tags = [b.tags]), b = b.tags.join(" ").toLowerCase().split(" "), g = 0; g < f.length && (!f[g] || ((h = - 1 < b.indexOf(f[g])) ? (c = !0) : (d = !1), "OR" != e || !c)); g++)
            ;
    k && ((k = moment(k).utc()), (h = a.ep >= k) ? (c = !0) : (d = !1));
    l && ((l = moment(l).utc().add(1, "days")), (h = a.ep <= l) ? (c = !0) : (d = !1));
    return ("AND" == e && d) || ("OR" == e && c);
};
UN.Yv = function (a) {
    return aH.FD([Bl(a.Et, 3) + " $", a.XM() ? "(&nbsp;payout declined&nbsp;)" : ""]);
};
UN.Yq = function (a) {
    return aH.FD(a.YY() ? [Bl(a.Dq, 3) + " $", Bl(a.D1, 2) + " %", Bl(a.JZ, 3) + " HP", Bl(a.Ja, 3) + " HIVE", Bl(a.JY, 3) + " HBD", "~" + T7.LJ() + D.Q.GA(a.JY, a.Ja + a.JZ, D.G.get(GC), !0)] : [Bl(a.Dq, 3) + " $", Bl(a.D1, 2) + " %"]);
};
UN.Yr = function (a) {
    return aH.FD(a.YY() ? [Bl(a.Mv, 3) + " $", Bl(a.N5, 2) + " %", Bl(a.Mi, 3) + " HP"] : [Bl(a.Mv, 3) + " $", Bl(a.N5, 2) + " %"]);
};
UN.Ys = function (a) {
    return aH.FD(a.YY() ? [Bl(a.Yo, 3) + " $", Bl(a.Yp, 2) + " %", Bl(a.Mj, 3) + " HP", Bl(a.Ml, 3) + " HIVE", Bl(a.Mk, 3) + " HBD"] : [Bl(a.Yo, 3) + " $", Bl(a.Yp, 2) + " %"]);
};
UN.Yt = function (a) {
    return aH.FD([Bl(a.G1, 3) + " $", Bl(a.bj, 2) + " %"]);
};
UN.Yu = function (a) {
    return a.YY() ? D.B.DE(a.cashoutTime.clone().local()) + T7.LJ(3) + "( in " + aG.DT(a.cashoutTime, moment.utc()) + " )" : "";
};
UJ = "January February March April May June July August September October November December".split(" ");
var UG = function (a) {
    this.div = a;
    this.div.data("overview_handle", this);
    this.filterSortOrder = "desc";
    this.filterMode = "date";
    this.reset();
    this.UU(10);
};
UG.prototype.reset = function () {
    this.eq = [];
    this.aa = [];
    this.aZ = !1;
    this.en = "";
    this.em = this.eo = this.filterTag = this.er = this.es = null;
    this.div.empty();
};
UG.prototype.UK = function (a) {
    var b = this.filterMode,
            c = {};
    aI.Bu(this.eq, "ep", a);
    a = function (a, b) {
        void 0 === c[a] && (c[a] = {name: b, children: {}, count: 0});
        c[a].count++;
    };
    for (var d = 0; d < this.eq.length; d++) {
        var e = this.eq[d];
        if (!e.YY())
            if ("date" == b) {
                e = e.ep;
                var f = e.format("YYYY");
                var g = e.format("MM");
                e = "Y" + f;
                var h = "M" + g;
                a(e, f);
                void 0 === c[e].children[h] && (c[e].children[h] = {type: "month", filter: f + "_" + g, name: UJ[parseInt(g) - 1], count: 0});
                c[e].children[h].count++;
            } else if ("tag" == b)
                for (f = e.YQ(), h = 0; h < f.length; h++)
                    (g = f[h]), (e = "T" + g), a(e, g), (c[e].type = "tag");
    }
    if ("tag" == b) {
        b = [];
        for (var k in c)
            b.push(c[k]);
        aI.Bu(b, "count", !0);
        c = {};
        for (k = 0; k < b.length; k++)
            c[b[k].name] = b[k];
    }
    return c;
};
UG.prototype.UL = function () {
    var a = this;
    if (!this.aZ) {
        var b = this.div.data("posts_panel_handle"),
                c = b ? b.YD() : 5,
                d = b ? b.aW() : "default",
                e = this,
                f = this.div,
                g = this.filterMode,
                h = this.filterSortOrder,
                k = this.es,
                l = this.er,
                m = this.filterTag,
                n = this.eo ? this.eo.toLowerCase() : "",
                p = this.UK("desc" == h),
                q = Ft.R4("accountPostsFilter textBox"),
                r = Ft.R4("accountPostsFilterLimits"),
                t = Ft.R4("accountPostsFilterSortOrders");
        var u = Ft.R4("accountPostsFilterModes");
        var x = Ft.R4("accountPostsFilterGroups"),
                v = Ft.R4("accountPostsFilterSubGroups"),
                y = Ft.R4("accountPostsFilterTags"),
                A = Ft.R4();
        b = new UN(A, "old");
        b.Yb(d);
        b.VF(c);
        this.div.data("posts_panel_handle", b);
        f.empty();
        var E = function () {
            var a = $(this);
            e.UU(a.data("limit"));
        },
                B = function () {
                    var a = $(this).data("order");
                    e.filterSortOrder = a;
                    e.div.data("posts_panel_handle").US(a);
                    e.UL();
                };
        d = function () {
            e.filterMode = $(this).data("mode");
            e.es = null;
            e.er = null;
            e.filterTag = null;
            e.eo = null;
            e.UL();
        };
        for (var C = 0, F = !0, G = this.UR(), J = [10, 25, 100, 250, 1e3, 1e4, 1e5], z = 0; z < J.length; z++)
            (c = J[z]),
                    c < this.eq.length ||
                    (!F && G && c > G) ||
                    (G && c > G && (F = !1),
                            (c = Ft.GB("button", {class: "accountPostsFilterLimit" + (0 == C ? " ui-state-selected" : "")}, "Last " + c)
                                    .button()
                                    .data("limit", c)
                                    .on("click", E)),
                            r.append(c),
                            C++);
        E = ["desc", "asc"];
        for (C = 0; C < E.length; C++)
            (c = E[C]),
                    (c = Ft.GB("button", {class: "accountPostsFilterSortOrder" + (c == h ? " ui-state-selected" : "")}, "asc" == c ? "Ascending" : "Descending")
                            .button()
                            .data("order", c)
                            .on("click", B)),
                    t.append(c);
        q.append("<br>", "<strong>Limit</strong><hr>", r, "<strong>Sort Order</strong><hr>", t, "<strong>Filter Mode</strong><hr>", u);
        if ("date" == g)
            q.append("<strong>Year</strong><hr>", x, "<strong>Month</strong><hr>", v);
        else if ("tag" == g) {
            var I = Ft.GB("input", {class: "accountPostsFilterTagName", type: "text", placeholder: "[ Filter tags by name... ]", value: n ? n : ""});
            I.on("change input paste", function () {
                a.eo = I.val().toLowerCase();
                a.em && clearTimeout(a.em);
                a.em = setTimeout(function () {
                    a.UL();
                }, 1250);
            });
            q.append("<strong>Tag</strong><hr>", I, y);
        }
        f.append(q, A);
        f = ["date", "tag"];
        for (h = 0; h < f.length; h++)
            (c = Ft.GB("button", {class: "accountPostsFilterMode"}, "By " + T7.DR(f[h]))
                    .button()
                    .data("mode", f[h])
                    .on("click", d)),
                    f[h] == g && c.addClass("ui-state-selected"),
                    u.append(c);
        var K = function (c) {
            b.reset();
            a.aa = [];
            for (var d = 0; d < a.eq.length; d++) {
                var e = a.eq[d];
                if (!e.YY()) {
                    if ("month" == c.type) {
                        var f = e.ep;
                        var g = f.format("YYYY");
                        f = f.format("MM");
                        if (g + "_" + f != c.filter)
                            continue;
                    } else if ("tag" == c.type && ((g = X2.PZ(e.YR())), -1 == g.indexOf(c.name)))
                        continue;
                    a.aa.push(e);
                }
            }
            b.LW(!0);
        },
                H = function (a) {
                    return Ft.Fh("span", {class: "left"}, a.name) + Ft.Fh("span", {class: "right"}, "(" + a.count + ")");
                },
                L = function () {
                    var a = $(this),
                            b = a.data("sub_group");
                    v.find(".accountPostsFilterSubGroup").removeClass("ui-state-selected");
                    a.addClass("ui-state-selected");
                    e.er = b;
                    K(b);
                };
        f = function () {
            var a = $(this),
                    b = a.data("group"),
                    c = null;
            if ("date" == g) {
                e.es = b;
                e.filterTag = null;
                x.find(".accountPostsFilterGroup").removeClass("ui-state-selected");
                v.empty();
                for (var d in b.children) {
                    var f = b.children[d];
                    var h = Ft.GB("button", {class: "accountPostsFilterSubGroup"}, H(f)).button().data("sub_group", f).on("click", L);
                    l && l.name == f.name && (c = h);
                    v.append(h);
                }
                c ? c.click() : v.find(".accountPostsFilterSubGroup:first").click();
            } else
                "tag" == g && ((e.es = null), (e.er = null), (e.filterTag = b), y.find(".accountPostsFilterTag").removeClass("ui-state-selected"), K(b));
            a.addClass("ui-state-selected");
        };
        h = null;
        if ("date" == g) {
            for (var P in p)
                (u = p[P]), (c = Ft.GB("button", {class: "accountPostsFilterGroup"}, H(u)).button().data("group", u).on("click", f)), k && k.name == u.name && (h = c), x.append(c);
            h || (h = x.find(".accountPostsFilterGroup:first"));
        } else if ("tag" == g) {
            for (var w in p)
                (u = p[w]), (n && -1 == u.name.indexOf(n)) || ((c = Ft.GB("button", {class: "accountPostsFilterTag"}, H(u)).button().data("group", u).on("click", f)), m && m.name == u.name && (h = c), y.append(c));
            h || (h = y.find(".accountPostsFilterTag:first"));
        }
        h && h.click();
    }
};
UG.prototype.UR = function () {
    return D.Z.HP ? D.Z.HP.account.posts : 0;
};
UG.prototype.UU = function (a) {
    var b = this;
    if (!this.aZ) {
        this.aZ = !0;
        var c = Ft.R4("accountPostsStatus textBox"),
                d = new UM(c);
        this.div.empty().append(c);
        var e = this.UR(),
                f = this.eq.length;
        a && e > a && (e = a);
        D.S.Aw(
                D.l,
                this.en,
                a - f + (this.en ? 1 : 0),
                function (a) {
                    a += f;
                    e && e >= a && (d.KV((100 / e) * a), d.fu("Loading Posts... ( " + a + " / " + e + " )"));
                },
                function (a) {
                    b.aZ = !1;
                    for (var c, d, e = 0; e < a.length; e++) {
                        c = a[e];
                        d = !1;
                        for (var f = 0; f < b.eq.length; f++)
                            if (b.eq[f].G0() == c.G0()) {
                                d = !0;
                                break;
                            }
                        d || b.eq.push(c);
                    }
                    a.length && (b.en = a[a.length - 1].G0());
                    b.UL();
                }
        );
    }
};
var Wj = function () {};
Wj.Ar = function (a, b, c) {
    var d = b.votes.items,
            e = b.ep;
    if (d && d.length) {
        var f = [],
                g = [],
                h = [],
                k = Ft.GB("canvas", {width: 360, height: 360}),
                l = 0;
        var m = a.find(".voteChart");
        m.length
                ? ((c = a.find(".voteChartTable")), (b = $(c.find("table")[0])), Ft.gT(b))
                : ((c = Ft.R4("voteChartTable scrollY").css("min-width", c)),
                        (m = Ft.R4("voteChart").css("width", "100%")),
                        a.append(c, m).addClass("clearfix"),
                        (b = new b7({
                            id: "tablePostVotes_" + b.postId,
                            class: "dataTable smallLineHeight autoWidth simple",
                            headers: ["", "Voter", "Voted After", "Weight", "Amount"],
                            aligns: ["C", "L", "R", "R", "R"],
                            sortCols: ["", "voter", "time", "weight", "rshares"],
                            sortDirs: ["", "D", "D", "D", "D"],
                        })
                                .cE(1, "4px")
                                .appendTo(c)
                                .an()));
        b.hide();
        m.find("canvas").remove();
        m.empty().append(k);
        Wj.Bt(a);
        for (a = 0; a < d.length; a++)
            (d[a].factor = 0 < d[a].rshares ? 1 : -1), (d[a].rshares *= d[a].factor);
        aI.Bu(d, "rshares", !0);
        for (var n, p, q, r, t, u, x = 0; x < d.length; x++)
            (a = d[x]),
                    (m = a.voter),
                    (c = a.percent / 100),
                    (n = a.rshares),
                    (p = a.amount),
                    (q = a.time),
                    (r = moment.utc(q).local()),
                    (t = aG.Wl(r, e)),
                    50 >= x ? (g.push(" " + m), f.push(n), (u = 0 < a.factor ? D.J.Ab(x - l) : "#ff0000"), h.push(u), 0 > a.factor && l++) : (u = !1),
                    b.append(
                            Ft.Fj("td", ['<div class="voteColor"' + (!1 !== u ? ' style="background: ' + u + '"' : "") + "></div>", ak.ET(m, !1, !1, !0), t, c + T7.LJ() + "%", D.B.EQ(p) + T7.LJ() + "$"], {
                                title: "Voted: " + D.B.DE(r),
                                "data-voter": m,
                                "data-time": q,
                                "data-weight": c,
                                "data-rshares": n,
                            })
                            );
        b7.LA(b, "rshares");
        b.show();
        (function () {
            var a = Wj.eg("Votes", h, f, g),
                    b = Wj.ef();
            b.tooltips.callbacks.label = function (a, b) {
                a = d[a.index];
                return " " + a.voter + " | " + D.B.EQ(a.amount) + " $ | " + a.rshares * a.factor + " rshares";
            };
            Wj.eh(k, a, b);
        })();
    }
};
Wj.ef = function () {
    var a = $.extend(!0, {}, Chart.defaults.doughnut);
    a.legend.display = !1;
    a.tooltips.backgroundColor = aH.IH("--vote-chart-tooltips-bg");
    return a;
};
Wj.eg = function (a, b, c, d) {
    return {datasets: [{label: a, strokeColor: aH.IH("--vote-chart-stroke"), highlightFill: aH.IH("--vote-chart-highlight-fill"), highlightStroke: aH.IH("--vote-chart-highlight-stroke"), backgroundColor: b, data: c}], labels: d};
};
Wj.eh = function (a, b, c) {
    new Chart(a, {type: "doughnut", data: b, options: c});
    D.U.DV();
};
Wj.B6 = function (a, b) {
    D.S.Bp(a, b, !1, !0, function (c) {
        return Wj.B7(a, b, c);
    });
};
Wj.B7 = function (a, b, c) {
    var d = "activeVotes_" + a + "_" + b,
            e = function () {
                D.J.Hj && clearTimeout(D.J.Hj);
                D.J.Hj = setTimeout(function () {
                    Wj.Bt(f);
                    D.J.Hj = null;
                }, 50);
            },
            f;
    var g = $("#" + d);
    g.length && g.remove();
    g = Ft.R4("commentVotesDialog", d).css({display: "flex", "flex-direction": "row", height: "100%"}).attr("title", b);
    D4.JO(g, {
        width: D.s.iq(1e3),
        height: D.s.ce(),
        resizable: !0,
        fixed: !0,
        open: function (a) {
            f = a;
            $("#" + d).css("overflow", "hidden");
            var b = function () {
                Wj.Ar(g, c, "515px");
                setTimeout(e, 500);
            };
            a = c.La();
            (a.length ? void 0 !== a[0].time : 1)
                    ? b()
                    : D.S.La(c.aw(), c.G0(), function (a) {
                        c.ZM(a);
                        b();
                    });
        },
        resize: function () {
            return e();
        },
        resizeStop: function () {
            return e();
        },
    });
};
Wj.Bt = function (a, b) {
    a = a.find(".voteChart");
    var c = a.innerWidth(),
            d = a.innerHeight();
    b = 0.05 * c;
    var e = 0.04 * d;
    c = Math.min(c - 2 * b, d - 2 * e);
    a.css("padding", e + "px " + b + "px")
            .find("canvas")
            .width(c)
            .height(c);
};
var cI = function () {};
cI.Gl = function (a, b, c, d, e) {
    var f = e.find(".voteChartTable"),
            g = e.find(".voteChart");
    g.find("canvas").remove();
    f.html("Loading...");
    D.J.Gp(a, b, c, d, function (a) {
        var b = Ft.be("dataTable smallLineHeight autoWidth simple"),
                d = Ft.GB("canvas", {width: 360, height: 360}),
                h = [],
                n = [],
                p = [];
        g.empty().append(d);
        for (var q = "", r, t, u, x, v = 0; v < a.length; v++)
            (r = Bl(a[v].weight, 2)),
                    (t = D.B.EQ(a[v].amount)),
                    (u = a[v].count),
                    (x = a[v][c]),
                    50 >= v ? (n.push(" " + a[v].name), h.push(x * (0 <= x ? 1 : -1)), (x = D.J.Ab(v)), p.push(x)) : (x = !1),
                    (x = !1 !== x ? ' style="background: ' + x + '"' : ""),
                    (q += Ft.Fj("td", [
                        '<div class="voteColor"' + x + "></div>",
                        ak.ET(a[v].name, !1, !1, !0),
                        "amount" == c ? "$" + T7.LJ() + t : void 0,
                        "amount" != c ? r + T7.LJ() + "%" : void 0,
                        "amount" != c ? u + T7.LJ() + "x" : void 0,
                    ])[0].outerHTML);
        b.append(q);
        f.empty().append(b);
        Wj.Bt(e);
        a = Wj.eg("Accounts", p, h, n);
        b = Wj.ef();
        Wj.eh(d, a, b);
    });
};
cI.Gs = function (a, b) {
    cI.Gl(a, g8("#selectVotingDetailsKind").hc("upvotes"), g8("#selectVotingDetailsType").bt(), g8("#selectVotingDetailsRange").bt(), b);
};
cI.Gm = function (a, b, c) {
    var d = (a ? "Incoming" : "Outgoing") + " Votes - Top 250",
            e = Ft.R4("voteChartTable scrollY"),
            f = Ft.R4("voteChart");
    e.css("min-width", "370px");
    f.css("width", "100%");
    var g,
            h = $("#votingDetailsDialog");
    h.length && h.remove();
    h = Ft.R4("votingDetailsDialog", "votingDetailsDialog").attr("title", d).css({display: "flex", "flex-direction": "row", height: "100%"}).addClass("clearfix").append(e, f);
    var k = new gt({
        id: "selectVotingDetailsKind",
        items: [
            {value: "upvotes", text: "Upvotes"},
            {value: "downvotes", text: "Downvotes"},
        ],
        eI: function () {
            return cI.Gs(a, g);
        },
    }),
            l = new gt({
                id: "selectVotingDetailsType",
                items: [
                    {value: "amount", text: "By Amount"},
                    {value: "count", text: "By Count"},
                    {value: "weight", text: "By Weight"},
                ],
                eI: function () {
                    return cI.Gs(a, g);
                },
            }),
            m = new gt({
                id: "selectVotingDetailsRange",
                items: [
                    {value: "7", text: "Last 7 Days"},
                    {value: "14", text: "Last 14 Days"},
                    {value: "30", text: "Last 30 Days"},
                ],
                eI: function () {
                    return cI.Gs(a, g);
                },
            }).e8(!1);
    d = function () {
        D.J.Hj && clearTimeout(D.J.Hj);
        D.J.Hj = setTimeout(function () {
            Wj.Bt(g);
            D.J.Hj = null;
        }, 50);
    };
    D4.JO(h, {
        width: D.s.iq(860),
        height: D.s.ce(),
        minWidth: 556,
        resizable: !0,
        fixed: !0,
        open: function (d) {
            g = d;
            var e = d.closest(".ui-dialog").find(".ui-dialog-titlebar");
            d.css("overflow", "hidden");
            e.append(k.an(), l.an(), m.an());
            l.hd("amount", a).aM("weight", !1);
            cI.Gl(a, b, l.bt(), c, d);
        },
        resize: d,
        resizeStop: d,
    });
};
var dT = function () {
    this.Jd = !1;
    this.aA = moment();
    this.Ll = [];
    this.Tr = [];
};
dT.prototype.AI = function () {
    aH.mB(
            "styleAccountPosts",
            "\n .recentPostHeader {\n position: relative;\n display: flex;\n flex-flow: row nowrap;\n width: 100%;\n margin: 3px 0 0 0;\n padding: 5px;\n color: var(--button-text);\n background-color: var(--button-bg);\n box-shadow: var(--tab-box-shadow);\n cursor: pointer;\n }\n .recentPostHeader:hover {\n background-color: var(--ui-hover-bg);\n }\n .recentPost.maximized .recentPostHeader {\n color: var(--panel-header-text);\n background: var(--panel-header-bg);\n }\n .recentPostHeader.qActive,\n .recentPostHeader.qActive:focus {\n color: var(--tab-active-text);\n background: var(--tab-active-bg);\n font-weight: bold;\n }\n\n .accountPostsTab {\n min-height: 250px;\n }\n .accountPostsHeader {\n padding: 5px !important;\n display: flex;\n flex-direction: row;\n border-radius: 0 !important;\n }\n .accountPostsStatus {\n padding: 7px !important;\n }\n .accountPostsFilterLimits,\n .accountPostsFilterSortOrders,\n .accountPostsFilterModes,\n .accountPostsFilterGroups,\n .accountPostsFilterSubGroups,\n .accountPostsFilterTags {\n padding: 0 0 15px 0;\n }\n .accountPostsFilterTags {\n max-height: 333px;\n overflow: auto;\n }\n .accountPostsFilterLimit,\n .accountPostsFilterSortOrder,\n .accountPostsFilterMode,\n .accountPostsFilterGroup,\n .accountPostsFilterSubGroup,\n .accountPostsFilterTag {\n width: 175px;\n margin-right: 5px;\n margin-bottom: 5px;\n }\n .accountPostsFilterTag {\n width: 260px;\n }\n .accountPostsFilterTag span {\n font-size: var(--font-size-medium);\n }\n .accountPostsFilterTagName {\n margin-bottom: 8px;\n }\n\n .recentPost .postTitle {\n flex-grow: 1;\n margin-left: 12px;\n display: inline-block;\n overflow: hidden;\n }\n .recentPost .postSumPayout {\n text-align: right;\n margin-left: 10px;\n margin-right: 10px;\n }\n .recentPost .postTitle,\n .recentPost .postSumPayout {\n margin-top: 4px;\n margin-bottom: 4px;\n height: 22px;\n line-height: var(--line-height-text);\n white-space: nowrap;\n }\n body .recentPost .recentPostTab {\n width: auto;\n max-height: unset;\n float: none;\n min-height: 600px;\n }\n .recentPost .unitCol {\n min-width: 10px;\n }\n .recentPost .postImageContainer .postImage:nth-child(2),\n .recentPost .postImageContainer .postImage:nth-child(3),\n .recentPost .postImageContainer .postImage:nth-child(4),\n .recentPost .postImageContainer .postImage:nth-child(5),\n .recentPost .postImageContainer .postImage:nth-child(6),\n .recentPost .postImageContainer .postImage:nth-child(7),\n .recentPost .postImageContainer .postImage:nth-child(8) {\n display: none;\n }\n .recentPost .dataTable tr td:nth-child(1) {\n width: 18% !important;\n }\n .recentPost .dataTable.tableAccLinks tr td:nth-child(1) {\n width: auto !important;\n vertical-align: middle;\n }\n .recentPost .dataTable.tableAccLinks tr td:nth-child(2) {\n width: 95.8% !important;\n }\n .recentPostSpacer {\n height: 10px;\n margin: 8px 0 10px 0;\n background: var(--input-disabled-bg) !important;\n box-shadow: 2px 2px 3px var(--shadow);\n }\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(2),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(3),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(4),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(5),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(6),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(7),\n .accountPosts[data-view='gallery'] .postImageContainer .postImage:nth-child(8) {\n display: inline-block;\n }\n .recentPost .postImage,\n .recentPost .postImageContainer {\n float: left;\n display: inline-block;\n border-radius: 4px;\n }\n .recentPost .postImage {\n background-size: cover;\n background-position: center;\n }\n .accountPosts[data-view='default'] .recentPost .postImageContainer,\n .accountPosts[data-view='default'] .recentPost .postImage {\n width: 50px;\n height: 32px;\n }\n .accountPosts[data-view='miniature'] .recentPost {\n float: left;\n margin-right: 5px;\n margin-bottom: 4px;\n }\n .accountPosts[data-view='miniature'] .recentPost .postImageContainer {\n top: 2px;\n }\n .accountPosts[data-view='miniature'] .recentPost .postImageContainer,\n .accountPosts[data-view='miniature'] .recentPost .postImage {\n width: 116px;\n height: 76px;\n }\n .accountPosts[data-view='gallery'] .recentPost .postImage {\n width: 270px;\n height: 177px;\n margin-left: 5px;\n }\n .accountPosts[data-view='gallery'] .recentPost .postImageContainer {\n width: 100%;\n height: 177px;\n margin-top: 5px;\n margin-bottom: 5px;\n }\n .accountPosts[data-view='miniature'] .recentPost .postTitle {\n width: 116px;\n height: 64px;\n margin-left: 0;\n margin-bottom: 0;\n text-align: center;\n font-size: var(--font-size-small);\n line-height: var(--line-height-one);\n }\n .accountPosts[data-view='gallery'] .recentPost .postTitle {\n margin-left: 8px;\n }\n .accountPosts[data-view='miniature'] .recentPost .postSumPayout {\n display: none;\n }\n .accountPosts[data-view='gallery'] .recentPostSpacer,\n .accountPosts[data-view='miniature'] .recentPostSpacer {\n display: none;\n }\n .accountPosts[data-view='miniature'] .recentPostHeader {\n width: 128px;\n }\n .payoutDeclined .postSumPayout,\n .payoutDeclined td[data-key='pending_payout'],\n .payoutDeclined td[data-key='pending_author_rewards'],\n .payoutDeclined td[data-key='pending_curator_rewards'] {\n text-decoration: line-through;\n }\n .postHint img {\n float: left;\n width: 22px;\n height: 22px;\n margin-right: 10px;\n margin-bottom: 5px;\n }\n .showMorePosts {\n width: 100%;\n margin: 10px 0 5px 0;\n }\n\n .postResteems {\n max-height: 600px;\n }\n .postTransfers .dataTable tr td:nth-child(1) {\n width: 4% !important;\n }\n .postTransfers .dataTable tr td:nth-child(2),\n .postTransfers .dataTable tr td:nth-child(3) {\n width: 19%;\n }\n .postTransfers .dataTable tr td:nth-child(4),\n .postTransfers .dataTable tr th:nth-child(4) {\n width: 14%;\n text-align: right;\n }\n .postTransfers .dataTable tr td:nth-child(5),\n .postTransfers .dataTable tr th:nth-child(5) {\n padding-left: 50px;\n }\n .postTransfers tr.rowSum td {\n padding-top: 10px;\n border-top: 1px solid;\n border-color: var(--panel-ruler);\n }\n .postTransfers tr.rowSum td:nth-child(4) {\n font-weight: bold;\n }\n .postImages a {\n float: left;\n display: inline-block;\n }\n .postImagesTools {\n margin: 16px 0 16px 0;\n }\n\n #searchPostsFilter td {\n padding: 4px 0 0 4px;\n }\n #searchPostsFilter tr td:nth-child(1),\n #searchPostsFilter tr td:nth-child(3) {\n padding-right: 14px;\n }\n #searchPostsFilter tr td:nth-child(3) {\n padding-left: 20px;\n }\n #searchPostsFilter input[type='text'] {\n width: 622px;\n }\n #searchPostsFilterDateFrom,\n #searchPostsFilterDateTo {\n width: 115px !important;\n }\n #searchPostsFilter .qSelect {\n width: 280px;\n }\n #searchPostsFilterExec {\n margin-top: 8px;\n width: 150px;\n }\n\n .commentPayout {\n float: right;\n font-weight: bold;\n margin-left: 12px;\n margin-top: 6px;\n }\n .filterCommentsLabel {\n display: inline-block;\n margin-right: 12px;\n min-width: 60px;\n }\n .filterCommentsSpace {\n display: block;\n width: 100%;\n height: 7px;\n }\n .filterCommentsSearchText {\n width: 200px !important;\n }\n .filterCommentsRefresh {\n float: right;\n }\n\n .ui-widget-content .textBoxAuthor a,\n .ui-widget-content .textBoxParentAuthor a {\n color: var(--comment-author);\n }\n .textBoxSpace {\n color: var(--comment-space);\n }\n .textBoxBody {\n padding: 5px 18% 5px 0;\n margin-top: 5px;\n max-width: 920px;\n }\n .textBoxHeader {\n font-weight: bold;\n height: 22px;\n }\n .textBoxTitle {\n font-weight: bold;\n }\n .textBoxDate {\n float: right;\n text-align: right;\n }\n .textBoxDate,\n .textBoxDate * {\n font-size: 14px;\n }\n .textBoxTimeAgo {\n float: right;\n font-weight: normal;\n color: var(--text-gray);\n }\n .textBoxAuthor,\n .textBoxParentAuthor {\n float: left;\n }\n .textBoxSpace {\n padding: 2px;\n float: left;\n margin-right: 12px;\n }\n .textBoxFooter {\n margin: 5px 0;\n }\n .textBoxFooter button {\n float: left;\n margin-right: 7px;\n }\n .textBoxFooter .imageButton {\n float: right;\n }\n "
            );
    this.VY();
    $("#headerRecentPosts");
    var a = new UN($("#tabActivePosts .panelAccountPosts"), "active");
    a.Yb(D.G.get(Nu));
    a.VF(D.G.get(N1));
    new UN($("#tabSearchPosts .panelAccountPosts"), "search");
};
dT.prototype.el = function () {
    var a = new gt({
        id: "searchPostsFilterTextMode",
        items: [
            {value: "", text: "Title &amp; Body"},
            {value: "body", text: "Body"},
            {value: "title", text: "Title"},
        ],
    }),
            b = new gt({
                id: "searchPostsFilterAddTag",
                eI: function (a) {
                    a &&
                            setTimeout(function () {
                                var c = d.find("#searchPostsFilterTags"),
                                        e = c.val().toLowerCase().split(" ");
                                -1 == e.indexOf(a) && (e.push(a), c.val(e.join(" ").trim()));
                                b.aM("");
                            }, 500);
                },
            }),
            c = new gt({
                id: "searchPostsFilterMode",
                items: [
                    {value: "AND", text: "AND (all must match)"},
                    {value: "OR", text: "OR (at least one must match)"},
                ],
            });
    var d = Ft.R4(
            "textBox",
            "searchPostsFilter",
            Ft.be("", "", [
                Ft.Fj("td", ["Text", Ft.dc("text", "", "searchPostsFilterText"), "Search in", a.an()]),
                Ft.Fj("td", ["Tags", Ft.dc("text", "", "searchPostsFilterTags"), "Add tag", b.an()]),
                Ft.Fj("td", ["Date", [Ft.dc("text", "", "searchPostsFilterDateFrom"), "&nbsp;-&nbsp;", Ft.dc("text", "", "searchPostsFilterDateTo")], "Mode", c.an()]),
                Ft.Fj("td", [
                    {
                        attr: {colspan: "4"},
                        html: Ft.R7("", "searchPostsFilterExec", "Search", "", function () {
                            var a = $("#tabSearchPosts .panelAccountPosts");
                            a.find(".recentPost").remove();
                            a.data("posts_panel_handle").LW(!0);
                        }),
                    },
                ]),
            ])
            );
    d.find("#searchPostsFilterDateFrom,#searchPostsFilterDateTo").datepicker({dateFormat: D.B.IK(), changeMonth: !0, changeYear: !0});
    return d;
};
dT.prototype.VY = function () {
    var a = ak
            .gi({id: "tabsAccountPosts"})
            .gj([
                {id: "tabActivePosts", title: "Active", cls: "accountPostsTab", width: "auto"},
                {
                    id: "tabOldPosts",
                    title: "Finished",
                    cls: "accountPostsTab",
                    width: "auto",
                    gp: function (a) {
                        a = a.find(".panelAccountPosts");
                        a.data("overview_handle") || new UG(a);
                    },
                },
                {id: "tabSearchPosts", title: "Search", cls: "accountPostsTab", width: "auto"},
            ])
            .appendTo($("#contentRecentPosts"));
    a.fV(2).addClass("qDisabled");
    var b = a.fX(0),
            c = a.fX(1),
            d = a.fX(2);
    b.append(Ft.R4("panelAccountPosts", "", "", {"data-type": "active"}));
    c.append(Ft.R4("panelAccountPosts", "", "", {"data-type": "old"}));
    d.append(this.el(), Ft.R4("panelAccountPosts", "", "", {"data-type": "search"}));
    this.fe = a;
};
dT.prototype.LV = function (a) {
    $(".panelAccountPosts").each(function () {
        var b = $(this).data("posts_panel_handle");
        b && b.LW(a);
    });
};