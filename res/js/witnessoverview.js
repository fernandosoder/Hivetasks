var fc = function (a) {
    //Fs.lY(a, "");
    this.AJ(a);
};
fc.ct = function (a, b, c, d) {
    a.bA(bC);
    b = a.d1("WitnessOverview", "Hive Witness Overview").aI();
    var e = new fc(b);
    a.aN(c + "Hive Witness Overview");
    a.ak(function () {
        var a = function () {
            return e.Fg()
        };
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            return d(a)
        })
    });
    a.al();
    return e
};
fc.prototype.AJ = function (a) {
    a.append('<table id="tableWitnesses" class="dataTable autoWidthCols qNoWrap"><tr class="headerRow"><th>#</th><th>Witness</th><th>Votes&nbsp;(Hive Power)</th><th></th><th>Version</th><th>Price Feed</th><th>APR</th><th>Missed</th><th>Url</th><th>Vote</th></tr></table> ')
};
fc.prototype.Fg = function () {
    var a = this,
            b = $("#tableWitnesses");
    Fs.fv(b);
    b.append(Fs.Aq([{
            html: "Loading...",
            attr: {
                colspan: "12"
            }
        }]));
    D.Z.ot(function (c) {
        b.find("tr:not(.headerRow)").remove();
        var d = c.rows;
        c = c.cols;
        for (var e = [], f = {}, g = 0; g < d.length; f = {
            $jscomp$loop$prop$witness$447: f.$jscomp$loop$prop$witness$447,
            $jscomp$loop$prop$checkbox$446: f.$jscomp$loop$prop$checkbox$446
        }, g++) {
            let h = d[g];
            console.log(c);
            let total = 0;
            let parc = 0;
            if(g > 0 && g < d.length-1){
                total = d[g+1][c.votes] - d[g-1][c.votes];
                parc = (d[g+1][c.votes] - h[c.votes]) / total * 100;
            }
            f.$jscomp$loop$prop$witness$447 = h[c.owner];
            let k = h[c.hbd_exchange_rate],
                    l = AQ(k.base),
                    m = AQ(k.quote);
            let dif_exchange_time = ((Date.now() - (h[c.last_hbd_exchange_update])) / 1000) / 3600;
            k = D.B.DH(moment.utc(h[c.last_hbd_exchange_update]).local(), !0, !0);
            let n = h[c.signing_key] != ML ? 1 : 0,
                    p = h[c.total_missed],
                    q = h[c.produced],
                    r = Bm(0 < q + p ? 100 / (q + p) * p : 0, 2) + " %",
                    t = Bm(l, 3) + Th.Kx() + "/" + Th.Kx() + Bm(m, 3);
            if (10 < l || 10 < m)
                t = '<span title="' + t + '">( invalid )</span>';
            l = Fs.j2("showVotesChart", "", "", "Show Votes...", function (b) {
                return function () {
                    return a.kX(b.$jscomp$loop$prop$witness$447)
                }
            }(f));
            f.$jscomp$loop$prop$checkbox$446 = new dm({
                width: "32px",
                padding: "5px 0",
                checked: D.W.Fx(f.$jscomp$loop$prop$witness$447),
                dj: function (a) {
                    return function () {
                        if (D.t.am(!0)) {
                            var b = !D.W.Fx(a.$jscomp$loop$prop$witness$447);
                            D.W[b ? "OW" : "Fy"](a.$jscomp$loop$prop$witness$447, function (c) {
                                PP(a.$jscomp$loop$prop$witness$447, c);
                                a.$jscomp$loop$prop$checkbox$446.ec(b && c || !b && !c, !1)
                            })
                        } else
                            a.$jscomp$loop$prop$checkbox$446.ec(!1, !1)
                    }
                }(f)
            });
            let cor = dif_exchange_time > 24 ? "red" : (dif_exchange_time > 12 ? "orange" : "");
            let mvests = Bm(h[c.votes] / 1E12, 3);
            num = Number(D.o.AM(1E6, 3) * mvests.replace(",","") ).toFixed(3) ;
            str = num.toString().split('.');
            if (str[0].length >= 5) {
                str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
            }
            let hpower = (str[0] + ".<sub>" + (str[1]) + "</sub> HP");
            e.push(Fs.Aq([g + 1, aG.EV(f.$jscomp$loop$prop$witness$447), 
                '<span title="' + mvests + ' MVests">' + hpower + "</span>",
                l,
                h[c.running_version], 
                '<span class="progress" style="width:'+ parc.toFixed(2) +'%"></span><span style="color:' + cor + ';" title="Updated: ' + k + '">' + t + "</span>",
                Bm(h[c.props].hbd_interest_rate / 100, 2) + Th.Kx() + "%", 
//                Bm(q),
                Bm(p),
//                r, 
                '<button class="btnOpenWitnessUrl">' + h[c.url] +
                        "</button>", f.$jscomp$loop$prop$checkbox$446.aJ()
            ], {
                "data-active": n
            }))
        }
        b.append(e).find(".btnOpenWitnessUrl").each(function () {
            var a = $(this);
            a.data("url", a.html()).text(">>").button().on("click", function () {
                return Zn.DS(a.data("url"), !0);
            })
        })
    }, function (a) {})
};
fc.prototype.kk = function (a) {
    var b = Fs.a9("dataTable notBold qNoWrap", "tableWitnessVotes", Fs.Ar([{
            html: "Voter",
            attr: {
                "data-sort-col": "voter",
                "data-sort-asc": "0"
            }
        }, {
            html: "Own (MV)",
            attr: {
                "data-sort-col": "own-vests",
                "data-sort-asc": "0"
            }
        }, {
            html: "Proxied (MV)",
            attr: {
                "data-sort-col": "proxied-vests",
                "data-sort-asc": "0"
            }
        }, {
            html: "Influence",
            attr: {
                "data-sort-col": "influence",
                "data-sort-asc": "0"
            }
        }])),
            c = 0;
    for (e in a) {
        var d = a[e];
        c += d.lr + d.lq
    } 
    var e = [];
    for (var f in a) {
        var g = a[f];
        d = g.lr;
        g = g.lq;
        var h = 100 / c * (d + g),
                k =
                Bm(h, 2) + " %",
                l = Bm(d / 1E6, 3),
                m = Bm(g / 1E6, 3);
        e.push(Fs.Aq([aG.EU(f, !1, !0, !0), {
                html: l,
                attr: {
                    class: "alignRight"
                }
            }, {
                html: m,
                attr: {
                    class: "alignRight"
                }
            }, {
                html: k,
                attr: {
                    class: "alignRight"
                }
            }], {
            "data-voter": f,
            "data-own-vests": d,
            "data-proxied-vests": g,
            "data-influence": h
        }))
    }
    b.append(e);
    bc.Ko(b, "influence");
    return b
};
fc.prototype.kj = function (a) {
    a = "Witness Votes | " + a;
    var b = Fs.Rf();
    D6.I1(b, {
        title: a,
        width: Math.min(750, Zn.db(.9)),
        height: D.s.cA(),
        padding: "4px 0",
        buttons: [],
        open: function () {
            return b.parents(".ui-dialog").focus()
        }
    });
    return b.html(Fs.Rf("textBoxPanel").html("Loading votes..."))
};
fc.prototype.kX = function (a) {
    var b = this,
            c = this.kj(a);
    D.b.lc(a, function (a) {
        c.html(b.kk(a))
    })
};
