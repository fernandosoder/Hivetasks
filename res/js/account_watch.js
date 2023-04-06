var oD = function (a) {
    this.AJ(a)
};
oD.ct = function (a, b, c, d) {
    a.bA(bC);
    b = a.d1("AccountWatch", "Hive Account Watch").aI();
    var e = new oD(b);
    a.aN(c + "Hive Account Watch");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {
                var a = D.s.op("template_id");
                e.oe(a ? a : "most_own_sp")
            })
        })
    });
    a.al();
    return e
};
oD.prototype.AJ = function (a) {
    var b = this;
    this.oP = D.s.aM(!1, "AccountWatchResult", "Search Results", "", !0);
    Fs.lY(a, "#tableAccountWatchResult th[data-type='int'],#tableAccountWatchResult td[data-type='int'],#tableAccountWatchResult th[data-type='float'],#tableAccountWatchResult td[data-type='float'],#tableAccountWatchResult th[data-type='vests'],#tableAccountWatchResult td[data-type='vests']{text-align:right}#tableAccountWatchResult td .accOpen span{margin-top:0}#tableAccountWatchFilters tr td:nth-child(1){width:30%;padding-left:0}#tableAccountWatchFilters tr td:nth-child(2){width:30%}#tableAccountWatchFilters tr td:nth-child(3){width:33%}#tableAccountWatchFilters tr td:nth-child(4){width:7%;padding-right:0}#btnAccountWatchAddFilter{margin-bottom:10px}#btnAccountWatchOpenInNewTab{width:190px}#selectAccountWatchSortField{width:calc(50% - 10px);margin:0 5px}#selectAccountWatchSortDir{width:calc(50% - 5px);display:inline-block}#selectAccountWatchSortDir button{width:calc(50% - 10px);margin:0 5px}#selectAccountWatchSortDir button:nth-child(1){width:calc(50% - 5px);margin:0 5px 0 0}#selectAccountWatchLimit button{margin:0 5px;width:calc(25% - 10px)}.checkVisibleAccountWatchGroup{width:calc(50% - 10px);margin:0px 5px;display:inline-block;padding:5px 0}");
    a.append('<table class="dataTable smallSize"><tr><td>Search Template</td><td><select id="selectAccountWatchTemplate"></select></td><td><button id="btnAccountWatchOpenInNewTab">Open In New Tab...</button></td></tr><tr><td colspan="3"></td></tr><tr><td>Custom Filters</td><td colspan="2"><table id="tableAccountWatchFilters" class="dataTable simple"></table><hr><button id="btnAccountWatchAddFilter">Add Filter...</button></td></tr><tr><td colspan="2"></td></tr><tr><td> Sort Rows By </td><td colspan="2"><select id="selectAccountWatchSortField"></select><span id="selectAccountWatchSortDir"></span></td></td><tr class="odd"><td>Row Limit</td><td colspan="2"><span id="selectAccountWatchLimit"></span></td></tr><tr class="even"><td colspan="3"></td></tr><tr class="odd"><td>Visible Columns</td><td id="accountWatchVisibleCols" colspan="2"></td></tr><tr class="even"><td colspan="3"></td></tr><tr class="odd"><td></td><td colspan="2"><button id="btnAccountWatchRefresh">Find Accounts</button></td></tr></table> ');
    this.of();
    for (var c = [{
            text: " "
        }], d = 0; d < this.oV.length; d++)
        c.push({
            value: this.oV[d].id,
            text: this.oV[d].title
        });
    this.oH = a.find("#tableAccountWatchFilters");
    this.oG = this.oX().appendTo(this.oP.aI());
    this.oU = new gL({
        id: "selectAccountWatchTemplate",
        items: c,
        dj: function (a) {
            return b.loadTemplate(a)
        }
    });
    a.find("#selectAccountWatchTemplate").replaceWith(this.oU.aJ());
    a.find("#btnAccountWatchOpenInNewTab").button().on("click", function () {
        var a = b.oU.bO();
        a && (a = (Lu() ? D.s.DR() + "?module=" + oE + "&" : FE + "/" + oE + "?") + "template_id=" +
                a, D.s.DS(a, !0))
    });
    this.oN = this.oJ("selectAccountWatchSortField", "", function (a) {
        return b.sx(a)
    });
    a.find("#selectAccountWatchSortField").replaceWith(this.oN.aJ());
    this.oN.Zs("name");
    this.oO = (new di({
        id: "selectAccountWatchSortDir",
        og: !1,
        buttons: [{
                value: "ASC",
                text: "Ascending"
            }, {
                value: "DESC",
                text: "Descending"
            }]
    })).Zs("DESC");
    a.find("#selectAccountWatchSortDir").replaceWith(this.oO.aJ());
    this.oR = (new di({
        id: "selectAccountWatchLimit",
        og: !1,
        buttons: [{
                value: "25"
            }, {
                value: "100"
            }, {
                value: "250"
            }, {
                value: "1000"
            }]
    })).Zs("25");
    a.find("#selectAccountWatchLimit").replaceWith(this.oR.aJ());
    c = {};
    for (var e in this.od)
        c.$jscomp$loop$prop$group$441 = this.od[e], (new dm({
            "class": "checkVisibleAccountWatchGroup",
            text: c.$jscomp$loop$prop$group$441.title,
            checked: !0,
            dj: function (a) {
                return function (c) {
                    for (var d = a.$jscomp$loop$prop$group$441.cols, e = 0; e < d.length; e++)
                        b.oG.setColumnVisible(d[e], c, e === d.length - 1)
                }
            }(c)
        })).appendTo($("#accountWatchVisibleCols")), c = {
            $jscomp$loop$prop$group$441: c.$jscomp$loop$prop$group$441
        };
    this.gg = a.find("#btnAccountWatchRefresh").button().on("click",
            function () {
                return b.jg(0)
            });
    a.find("#btnAccountWatchAddFilter").button().on("click", function () {
        return b.oK()
    })
};
oD.prototype.oe = function (a) {
    if (a) {
        var b = this.om(a);
        b ? (D.s.aN(D.s.oo() + " / " + b.title), this.oU.Zs(a), this.gg.trigger("click")) : D6.EA("Template could not be found!")
    }
};
oD.prototype.oX = function () {
    for (var a = function (a, b) {
        return aG.oW(b)
    }, b = function (a, b) {
        return Bm(D.o.AM(b), 3)
    }, c = function (a, b) {
        return Bm(b)
    }, d = function (a, b) {
        return D.B.oQ(b)
    }, e = {
        account_index: {
            title: "#",
            width: "65px",
            ms: function (a, b) {
                return a + 1
            },
            align: "center"
        },
        account_link: {
            title: "",
            mt: "name",
            width: "25px",
            ms: function (a, b) {
                return aG.DI(b)
            },
            paddingLeft: "0",
            paddingRight: "0"
        }
    }, f = {}, g = 0; g < this.oI.length; f = {
        $jscomp$loop$prop$field$443: f.$jscomp$loop$prop$field$443
    }, g++) {
        f.$jscomp$loop$prop$field$443 = this.oI[g];
        var h = f.$jscomp$loop$prop$field$443.type,
                k = {
                    title: f.$jscomp$loop$prop$field$443.text
                };
        "account" === h ? k.ms = a : "vests" === h ? k.ms = b : "float" === h ? k.ms = function (a) {
            return function (b, c) {
                b = a.$jscomp$loop$prop$field$443.precision;
                return Bm(c, b ? b : 3)
            }
        }(f) : "time" === h ? k.ms = d : "int" === h && (k.ms = c);
        ["int", "float", "vests"].includes(h) && (k.align = "right");
        e[f.$jscomp$loop$prop$field$443.value] = k
    }
    return new mR({
        nE: "tableAccountWatchResult",
        pc: "dataTable notBold",
        mw: e,
        oY: !0,
        mS: !1,
        mT: !1
    })
};
oD.prototype.of = function () {
    this.oI = [{
            value: "name",
            type: "account",
            text: "Account"
        }, {
            value: "creator",
            type: "account",
            text: "Creator"
        }, {
            value: "recovery_account",
            type: "account",
            text: "Recovery Account"
        }, {
            value: "proxy",
            type: "account",
            text: "Witness Proxy"
        }, {
            value: "reputation",
            type: "float",
            text: "Reputation",
            precision: 3
        }, {
            value: "voting_csi",
            type: "float",
            text: "Voting CSI",
            precision: 1
        }, {
            value: "vests_own",
            type: "vests",
            text: "Own HP"
        }, {
            value: "vests_in",
            type: "vests",
            text: "Received HP"
        }, {
            value: "vests_out",
            type: "vests",
            text: "Delegated HP"
        }, {
            value: "balance_hive",
            type: "float",
            text: "HIVE Balance"
        }, {
            value: "balance_hbd",
            type: "float",
            text: "HBD Balance"
        }, {
            value: "savings_hive",
            type: "float",
            text: "HIVE Savings"
        }, {
            value: "savings_hbd",
            type: "float",
            text: "HBD Savings"
        }, {
            value: "rewards_hive",
            type: "float",
            text: "Claimable HIVE"
        }, {
            value: "rewards_hbd",
            type: "float",
            text: "Claimable HBD"
        }, {
            value: "rewards_vests",
            type: "vests",
            text: "Claimable HP"
        }, {
            value: "powerdown",
            type: "vests",
            text: "Powerdown"
        }, {
            value: "powerdown_done",
            type: "vests",
            text: "Powerdown Done"
        }, {
            value: "powerdown_rate",
            type: "vests",
            text: "Powerdown Rate"
        }, {
            value: "next_powerdown",
            type: "time",
            text: "Next Powerdown"
        }, {
            value: "count_root_posts",
            type: "int",
            text: "Root Post Count"
        }, {
            value: "count_comments",
            type: "int",
            text: "Comment Count"
        }, {
            value: "count_replies",
            type: "int",
            text: "Reply Count"
        }, {
            value: "count_active_posts",
            type: "int",
            text: "Active Post Count"
        }, {
            value: "count_upvotes",
            type: "int",
            text: "Upvote Count"
        }, {
            value: "count_downvotes",
            type: "int",
            text: "Downvote Count"
        }, {
            value: "count_upvoted",
            type: "int",
            text: "Upvoted Count"
        }, {
            value: "count_downvoted",
            type: "int",
            text: "Downvoted Count"
        }, {
            value: "count_followers",
            type: "int",
            text: "Follower Count"
        }, {
            value: "count_following",
            type: "int",
            text: "Following Count"
        }, {
            value: "created",
            type: "time",
            text: "Created"
        }, {
            value: "last_action",
            type: "time",
            text: "Last Action"
        }, {
            value: "last_vote",
            type: "time",
            text: "Last Vote"
        }, {
            value: "last_root_post",
            type: "time",
            text: "Last Root Post"
        }, {
            value: "last_comment",
            type: "time",
            text: "Last Comment"
        }, {
            value: "last_owner_update",
            type: "time",
            text: "Last Owner Update"
        }, {
            value: "last_account_update",
            type: "time",
            text: "Last Account Update"
        }, {
            value: "last_account_recovery",
            type: "time",
            text: "Last Account Recovery"
        }, {
            value: "updated",
            type: "time",
            text: "Updated"
        }];
    this.od = {
        reputation_csi: {
            title: "Reputation / Voting CSI",
            cols: ["reputation", "voting_csi"]
        },
        refs: {
            title: "Account References",
            cols: ["creator", "recovery_account", "proxy"]
        },
        savings: {
            title: "Savings",
            cols: ["savings_hive", "savings_hbd"]
        },
        rewards: {
            title: "Claimable Rewards",
            cols: ["rewards_hive",
                "rewards_hbd", "rewards_vests"
            ]
        },
        balances: {
            title: "Balances",
            cols: ["balance_hive", "balance_hbd"]
        },
        powerdown: {
            title: "Powerdown",
            cols: ["powerdown", "powerdown_done", "powerdown_rate", "next_powerdown"]
        },
        vests: {
            title: "Vesting Shares (HP)",
            cols: ["vests_own", "vests_in", "vests_out"]
        },
        count_posts: {
            title: "Count Posts / Comments",
            cols: ["count_root_posts", "count_comments", "count_replies", "count_active_posts"]
        },
        count_votes: {
            title: "Count Upvotes / Downvotes",
            cols: ["count_upvotes", "count_downvotes", "count_upvoted",
                "count_downvoted"
            ]
        },
        count_follows: {
            title: "Count Followers / Following",
            cols: ["count_followers", "count_following"]
        },
        last_posting_times: {
            title: "Last Post / Comment",
            cols: ["last_root_post", "last_comment"]
        },
        last_actions: {
            title: "Last Account Actions",
            cols: ["last_action", "last_vote", "last_owner_update", "last_account_update", "last_account_recovery"]
        }
    };
    this.ol = [
        ["reputation_csi"],
        ["savings"],
        ["rewards"],
        ["balances", "savings", "rewards"],
        ["vests", "balances", "savings", "rewards"],
        ["powerdown"],
        ["count_posts"],
        ["count_votes"],
        ["count_follows"],
        ["last_posting_times"]
    ];
    this.oV = [{
            id: "newest_accounts",
            title: "Newest Accounts",
            sortField: "created",
            sortDir: "DESC",
            on: []
        }, {
            id: "accounts_with_first_active_post",
            title: "Accounts With First Active Post",
            sortField: "last_root_post",
            sortDir: "DESC",
            on: [{
                    field: "count_root_posts",
                    op: "=",
                    value: "1"
                }, {
                    field: "last_root_post",
                    op: ">=",
                    value: "-7 days"
                }]
        }, {
            id: "accounts_with_most_active_posts",
            title: "Accounts With Most Active Posts",
            sortField: "count_active_posts",
            sortDir: "DESC",
            on: []
        },
        {
            id: "biggest_active_powerdowns",
            title: "Biggest Active Powerdowns",
            sortField: "powerdown",
            sortDir: "DESC",
            on: [{
                    field: "powerdown",
                    op: ">=",
                    value: "1"
                }]
        }, {
            id: "most_own_sp",
            title: "Most Own HP",
            sortField: "vests_own",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_delegated_sp",
            title: "Most Delegated HP",
            sortField: "vests_out",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_received_sp",
            title: "Most Received HP",
            sortField: "vests_in",
            sortDir: "DESC",
            on: []
        }, {
            id: "highest_voting_csi",
            title: "Highest Voting CSI",
            sortField: "voting_csi",
            sortDir: "DESC",
            on: []
        }, {
            id: "lowest_voting_csi",
            title: "Lowest Voting CSI",
            sortField: "voting_csi",
            sortDir: "ASC",
            on: []
        }, {
            id: "highest_reputation",
            title: "Highest Reputation",
            sortField: "reputation",
            sortDir: "DESC",
            on: []
        }, {
            id: "lowest_reputation",
            title: "Lowest Reputation",
            sortField: "reputation",
            sortDir: "ASC",
            on: []
        }, {
            id: "most_received_upvotes",
            title: "Most Received Upvotes",
            sortField: "count_upvoted",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_given_upvotes",
            title: "Most Given Upvotes",
            sortField: "count_upvotes",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_received_downvotes",
            title: "Most Received Downvotes",
            sortField: "count_downvoted",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_given_downvotes",
            title: "Most Given Downvotes",
            sortField: "count_downvotes",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_created_posts",
            title: "Most Created Posts",
            sortField: "count_root_posts",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_created_comments",
            title: "Most Created Comments",
            sortField: "count_comments",
            sortDir: "DESC",
            on: []
        }, {
            id: "most_received_replies",
            title: "Most Received Replies",
            sortField: "count_replies",
            sortDir: "DESC",
            on: []
        }
    ]
};
oD.prototype.sx = function (a) {
    this.oG.mr();
    for (var b = [a], c = !1, d = 0; d < this.ol.length; d++) {
        for (var e = this.ol[d], f = 0; f < e.length; f++) {
            var g = this.od[e[f]].cols;
            if (c || g.includes(a)) {
                for (c = 0; c < g.length; c++)
                    b.includes(g[c]) || b.push(g[c]);
                c = !0
            }
        }
        if (c)
            break
    }
    a = ["creator", "recovery_account", "proxy", "reputation", "voting_csi"];
    for (d = 0; d < a.length; d++)
        b.includes(a[d]) || b.push(a[d]);
    a = 2;
    for (d = 0; d < b.length; d++)
        a++, this.oG.oc(b[d], a, !1);
    this.oG.mV()
};
oD.prototype.SC = function (a) {
    Zn.Ms(this.gg, a);
    this.gg.text(a ? "Find Accounts" : "Loading...")
};
oD.prototype.oM = function (a) {
    for (var b = 0; b < this.oI.length; b++)
        if (this.oI[b].value === a)
            return this.oI[b];
    return null
};
oD.prototype.oJ = function (a, b, c) {
    return new gL({
        id: a,
        "class": b,
        items: this.oI,
        dj: c
    })
};
oD.prototype.oK = function (a, b, c) {
    var d = this;
    if (!(10 <= this.oH.find("tr").length)) {
        var e = this.oJ("", "accountWatchFilterField", function () {
            d.oL(e.aJ().closest("tr"))
        }),
                f = new di({
                    "class": "accountWatchFilterOp",
                    buttons: [{
                            value: "=",
                            text: "="
                        }, {
                            value: ">=",
                            text: ">="
                        }, {
                            value: "<=",
                            text: "<="
                        }]
                }),
                g = Fs.c7("text", "accountWatchFilterValue").on("change", function () {
            var a = g.val().trim(),
                    b = d.oM(e.bO());
            ["int", "float", "vests"].includes(b.type) ? Zo.Dh(a) || (D6.EA("Please enter a valid number!"), g.val("").focus()) : "account" ===
                    b.type && g.val(a.replace("@", ""))
        }),
                h = Fs.Ri("", "", "X", "Remove this filter", function () {
                    $(this).closest("tr").remove()
                });
        h = Fs.Aq([e.aJ(), f.aJ(), g, h]);
        this.oH.append(h);
        this.oL(h);
        a && e.Zs(a);
        b && f.Zs(b);
        c && g.val(c)
    }
};
oD.prototype.oL = function (a) {
    var b = ga(a.find(".accountWatchFilterField")),
            c = ga(a.find(".accountWatchFilterOp"));
    a = a.find(".accountWatchFilterValue");
    b = this.oM(b.bO()).type;
    var d = ["int", "float", "vests"].includes(b);
    c.ea("account" !== b);
    var e = "";
    d ? (e = "", a.attr("type", "number").attr("step", "int" === b ? "1" : "0.001")) : (a.removeAttr("step").attr("type", "text"), "time" === b ? e = "[ date (time) | -x days/weeks/months/hours/minutes ]" : "account" === b && (e = "[ Account Name ]", c.Zs("=")));
    a.attr("placeholder", e).val("").focus()
};
oD.prototype.om = function (a) {
    for (var b = 0; b < this.oV.length; b++)
        if (this.oV[b].id === a)
            return this.oV[b];
    return null
};
oD.prototype.loadTemplate = function (a) {
    var b = this.om(a);
    this.oH.find("tr").remove();
    if (a.trim())
        for (this.oN.Zs(b.sortField), this.oO.Zs(b.sortDir), a = 0; a < b.on.length; a++) {
            var c = b.on[a];
            this.oK(c.field, c.op, c.value)
        }
};
oD.prototype.l0 = function (a, b) {
    a = this.oM(a);
    "int" === a.type ? b = parseInt(b) : ["float", "vests"].includes(a.type) ? (b = parseFloat(b), "vests" === a.type && (b = D.o.FN(b, 6))) : "time" === a.type && (Zo.Dh(b) || (b = Th.pF(b)));
    return b
};
oD.prototype.jg = function (a) {
    var b = this;
    this.SC(!1);
    this.oG.mY();
    var c = this,
            d = this.oN.bO(),
            e = this.oO.bO(),
            f = [];
    this.oH.find("tr").each(function () {
        var a = $(this),
                b = ga(a.find(".accountWatchFilterField")).bO(),
                d = ga(a.find(".accountWatchFilterOp")).bO();
        a = a.find(".accountWatchFilterValue").val().trim();
        f.push({
            field: b,
            op: d,
            value: c.l0(b, a)
        })
    });
    D.Z.oF(d, e, JSON.stringify(f), !1, this.oR.bO(), a, function (a) {
        b.SC(!0);
        b.oG.be(a)
    }, function () {
        b.SC(!0)
    })
};
oD.prototype.nK = function (a) {
    a = Zn.dc();
    this.oG.oZ(.7 * a)
};
