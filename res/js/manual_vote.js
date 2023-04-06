var fZ = function (a) {
    this.AJ(a)
};
fZ.ct = function (a, b, c, d) {
    a.bA(bD);
    b = a.d1("ManualVote", "Manual Vote").aI();
    var e = new fZ(b);
    a.aN(c + "Manual Vote");
    a.ak(function () {
        Pa([
            [D.C, "AG"],
            [D.C, "AF"],
            [D.C, "Bs"]
        ], function () {
            d(function () {
                return e.AH()
            })
        })
    });
    a.al();
    return e
};
fZ.prototype.AJ = function (a) {
    var b = this;
    Fs.lY(a, "#manualVoteAuthor,#manualVoteType{width:42%}#manualVoteExecute{width:17%}#manualVoteSlider{width:252px}");
    a.append('<table class="dataTable smallSize"><tr><td>Post Link</td><td><input type="text" id="manualVoteLink"></td></tr><tr><td>Author</td><td><input type="text" id="manualVoteAuthor" class="inputAccountName"></td></tr><tr><td>Type</td><td><select id="manualVoteType"><option value="1" selected>Upvote</option><option value="-1">Downvote (Flag)</option></select></td></tr><tr><td>Weight</td><td><span id="manualVoteSliderValue" class="voteSliderValue" data-slider="manualVoteSlider"> $ 0.00 </span><div id="manualVoteSlider" class="voteSlider"></div></td></tr><tr><td></td><td><button id="manualVoteExecute">Vote</button></td></tr></table> ');
    this.jT =
            gL.gQ(a.find("#manualVoteType"), {
                dj: function () {
                    b.AH()
                }
            });
    this.gg = a.find("#manualVoteExecute").button().on("click", function () {
        if (D.t.am(!0)) {
            b.gd = ga("#manualVoteSlider .hSlider");
            var a = b.ge.val(),
                    d = b.gf.val(),
                    e = parseInt(b.jT.bO()),
                    f = 100 * Math.ceil(b.gd.bO()) * e;
            if (a && d) {
                var g = function (a) {
                    Zn.Ms(b.gg, !0);
                    a && (D6.EA("Done!"), b.gf.val(""), D.s.JX(!0, function () {
                        return b.AH()
                    }))
                };
                D.t.DO(F2, !1, !1, function (c) {
                    Zn.Ms(b.gg, !1);
                    D.S.FV(c, D.l, a, d, f, g)
                })
            } else
                D6.EA(fN("fill_required_fields_hint"))
        }
    });
    this.ge = a.find("#manualVoteAuthor");
    this.gf = a.find("#manualVoteLink").on("input", function () {
        var a = b.gf.val(),
                d = a.indexOf("@");
        if (-1 < d && (a = a.substring(d, a.length), d = a.indexOf("/"), -1 < d)) {
            var e = a.substring(0, d);
            a = a.substring(d + 1, a.length);
            b.ge.val(e.replace("@", ""));
            b.gf.val(a)
        }
    })
};
fZ.prototype.AH = function () {
    D.p.YU(20);
    var a = D.p.VJ("Upvote");
    D.U.AH(".voteSlider", a)
};
