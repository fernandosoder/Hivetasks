var kp = function (a) {
    Fs.lY(a, "#divSeedCheckTitle{padding:14px}#btnCheck{margin:-8px -6px 0 0}#divSeeds{min-height:600px;margin-top:10px}#inputSeeds{width:50%;padding:15px;white-space:pre}#tableNodeStatus{float:right;width:50%}#tableNodeStatus tr th:nth-child(2),#tableNodeStatus tr td:nth-child(2){text-align:right}");
    this.Q7 = a;
    this.AJ(a)
};
kp.ct = function (a, b, c, d) {
    a.bA(bB);
    b = a.d1("SeedNodesCheck", "Hive Seed Nodes Check").aI();
    b = new kp(b);
    a.aN(c + "Hive Seed Nodes Check");
    a.ak(function () {
        d(function () {})
    });
    a.al();
    return b
};
kp.prototype.AJ = function (a) {
    var b = this,
            c = "\np2p-seed-node = api.hive.blog:2001\np2p-seed-node = api.openhive.network:2001\np2p-seed-node = anyx.io:2001\np2p-seed-node = hived.privex.io:2001\np2p-seed-node = rpc.ausbit.dev:2001\np2p-seed-node = techcoderx.com:2001\np2p-seed-node = rpc.ecency.com:2001\np2p-seed-node = hive.roelandp.nl:2001\np2p-seed-node = hived.emre.sh:2001\np2p-seed-node = api.deathwing.me:2001\np2p-seed-node = api.c0ff33a.uk:2001\np2p-seed-node = hive-api.arcange.eu:2001\np2p-seed-node = api.pharesim.me:2001\n".replace(/\n */g, "\n").replace(/\n+/g,"\n").trim();
    this.kr = Fs.Fi("textarea", "", "inputSeeds").val(c);
    this.kt = Fs.Ri("right", "btnCheck", "Check Nodes", "", function () {
        return b.ks()
    });
    c = Fs.Rf("textBox textBoxPanel", "divSeedCheckTitle", "Here you can test the availability and latency of Hive Seed Nodes.").append(this.kt);
    this.kv = Fs.a9("dataTable notBold", "tableNodeStatus", Fs.Ar(["Seed Node", "Status"], {
        "class": "headerRow"
    }));
    var d = Fs.h1("row nowrap", "", "divSeeds", [this.kr, this.kv]);
    a.append(c, d)
};
kp.prototype.ks = function () {
    var a = this;
    Zn.Ms(this.kt, !1);
    Fs.fv(this.kv);
    for (var b = this.kr.val().trim().replace(/p2p-seed-node *= */g, "").replace(/seed-node *= */g, "").replace(/\r/g, "\n").replace(/\n[ \t]*/g, "\n").replace(/#[^\n]*/g, "").replace(/\n+/g, "\n").split("\n"), c = ["127.0.0.1", "localhost", "0.0.0.0", "0.0.0.1"], d = b.length - 1; 0 <= d; d--) {
        var e = b[d].trim();
        !e.length || e.startsWith("#") ? b.splice(d, 1) : b[d] = e
    }
    var f = Zo.Ra(b),
            g = function () {
                if (f.length) {
                    var b = f[0].split(":");
                    if (2 != b.length)
                        f.splice(0, 1), g();
                    else {
                        var d = b[0];
                        b = b[1];
                        c.includes(d) ? (f.splice(0, 1), g()) : D.Z.ku(d, b, h)
                    }
                } else
                    Zn.Ms(a.kt, !0)
            };
    var h = function (b) {
        var c = Zo.Dh(b),
                d = f[0];
        b = c ? Bm(b) + " ms" : b;
        d = Fs.Aq([d, b]);
        c || d.addClass("numNegative");
        a.kv.append(d);
        f.splice(0, 1);
        g()
    };
    g()
};
