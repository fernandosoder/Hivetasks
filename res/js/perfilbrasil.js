var t_pb = function (a) {
    //Fs.lY(a, "#tableDelegadores tr th:nth-child(1),#tableDelegadores tr td:nth-child(1),#tableDelegadores tr th:nth-child(7),#tableDelegadores tr th:nth-child(11),#tableDelegadores tr td:nth-child(11),#tableDelegadores tr th:nth-child(12),#tableDelegadores tr td:nth-child(12){text-align:center}#tableDelegadores tr th:nth-child(3),#tableDelegadores tr td:nth-child(3),#tableDelegadores tr th:nth-child(7),#tableDelegadores tr td:nth-child(7),#tableDelegadores tr th:nth-child(8),#tableDelegadores tr td:nth-child(8),#tableDelegadores tr th:nth-child(9),#tableDelegadores tr td:nth-child(9),#tableDelegadores tr th:nth-child(10),#tableDelegadores tr td:nth-child(10){text-align:right}#tableDelegadores tr[data-active='0'] .uName{text-decoration:line-through;color:#aaa}#tableDelegadores th,#tableDelegadores td{width:25%;text-align:right}#tableDelegadores tr th:nth-child(1),#tableDelegadores tr td:nth-child(1){min-width:195px;text-align:left}#tableDelegadores tr th:nth-child(4),#tableDelegadores tr td:nth-child(4){width:20%}");
    t_pb.hive_rate = 0;
    let c = Fs.Rf("textBox", "perfilbrasil_info");
    let output = document.createElement("output");
    let p1 = document.createElement("p");
    let p_wwarning = document.createElement("p");
    let p_ww_red = document.createElement("span");
    let p_ww_balance = document.createElement("output");
    let p_ww_date = document.createElement("output");
    p_ww_red.style.color = "red";
    p_wwarning.style.display = "none";
    p_ww_red.innerHTML = "Warning:";
    p_ww_balance.id = "p_ww_balance";
    p_ww_date.id = "p_ww_date";
    p_wwarning.id = "p_wwarning";
    p_wwarning.append(p_ww_red);
    p_wwarning.append(document.createElement(("br")));
    p_wwarning.append(" The curator @perfilbrasil currently has an inferior balance in relation to the total owed to it's delegators. If your share is above the total of ");
    p_wwarning.append(p_ww_balance);
    p_wwarning.append(", wait untill the next Powerdown, scheduled to ");
    p_wwarning.append(p_ww_date);
    p_wwarning.append(" before witdraw otherwise your request won't be processed.");
    output.id = "perfilbrasil_totaldelegations";
    output.innerHTML = "--.---";
    p1.append("The account @perfilbrasil was created to promote Brazilian and Portuguese language content. Delegators are entitled to receive a small share of curation rewards plus a bonus based on balance liquidity, which are currently calculated around ");
    p1.append(output);
    p1.append(" Hive per week, divided among delegators according to each one's contributions.");
    c.append(p1);
    c.append(p_wwarning);
    D.s.aM(!1, "PerfilbrasilInfo", "Information", c, 0);
    this.AJ(a);
};
var t_pb_object = null;

t_pb.ct = function (a, b, c, d) {
    a.bA(bC);
    b = a.d1("perfilbrasil", "Delegations to Perfilbrasil").aI();
    t_pb_object = new t_pb(b);
    a.aN(c + "Perfilbrasil Overview");
    a.ak(function () {
        var a = function () {
            return t_pb_object.Fg()
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
    return t_pb_object
};

t_pb.prototype.AJ = function (a) {

    //a.append("<div>Informations</div>");

    a.append(Fs.a9("dataTable notBold qNoWrap", "tableDelegadores", Fs.Ar([{
            html: "Name",
            attr: {
                "data-sort-col": "account",
                "data-sort-asc": "0"
            }
        }, {
            html: "Contribution",
            attr: {
                "data-sort-col": "percentage",
                "data-sort-asc": "0"
            }
        }, {
            html: "Pending Rewards Estimation",
            attr: {
                "data-sort-col": "pending",
                "data-sort-asc": "0"
            }
        }, {
            html: "Withdraw Rewards"

        }, {
            html: "Change Delegation",
            attr: {
                "class": "hide"
            }
        }], {
        "class": "headerRow"
    }))[0].outerHTML);
};
t_pb.prototype.getDelegadores = function (tabela_callback) {
    $.ajax({
        async: true,
        cache: false,
        crossDomain: true,
        url: "https://" + localStorage["cfg.hive_node"],
        type: 'POST',
        dataType: 'application/json',
        data: JSON.stringify([{
                "jsonrpc": "2.0",
                "method": "condenser_api.get_accounts",
                "params": [["perfilbrasil"]],
                "id": 1
//            }, {
//                "jsonrpc": "2.0",
//                "method": "condenser_api.get_account_history",
//                "params": ["perfilbrasil", -1, 1, 262144],
//                "id": 2
            }]),
        complete: (jqXHR, textStatus) => {
            console.log(JSON.parse(jqXHR.responseText));
            let wddate = new Date(JSON.parse(jqXHR.responseText)[0].result[0].next_vesting_withdrawal + "Z");
            document.getElementById("p_ww_date").innerHTML = wddate.toLocaleString();
            document.getElementById("p_ww_balance").innerHTML = JSON.parse(jqXHR.responseText)[0].result[0].balance;
            let res = JSON.parse(jqXHR.responseText)[0].result[0].received_vesting_shares.split(" ")[0];
            let mvests = res / 1E6 + "";
            num = Number(D.o.AM(1E6, 3) * mvests.replace(",", "") * 0.0018);
            str = num.toString().split('.');
            if (str[0].length >= 3) {
                str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
            let balance = JSON.parse(jqXHR.responseText)[0].result[0].balance.split(" ")[0] / 100;
            let hpower = (str[0] + "." + str[1].slice(0, 3));
            document.getElementById("perfilbrasil_totaldelegations").innerHTML = (Number(hpower) + Number(balance)).toFixed(3);
            document.getElementById("perfilbrasil_totaldelegations").title = hpower + " Hive per delegations\n" + balance.toFixed(3) + " Hive liquidity bonus";
            {
                let res = JSON.parse(JSON.parse(jqXHR.responseText)[0].result[0].json_metadata).delegations;
                let total_d = 0;
                let dataTable = {
                    cols: {
                        name: 0,
                        percentparticipation: 1,
                        pay10min: 2,
                        accumulated: 3
                    },
                    rows: []
                };
                let total = 0;
                res.forEach((item) => {
                    total_d += item.pay10min;
                    total += Number(item.total);
                });
                res.forEach((item) => {
                    dataTable.rows.push([item.nome,
                        Number(Number(item.pay10min / total_d * 100).toFixed(2)),
                        item.pay10min,
                        item.total
                    ]);
                });
                console.log(JSON.parse(jqXHR.responseText)[0].result[0].balance.split(" ")[0] + " < " + total);
                document.getElementById("p_wwarning").style.display = JSON.parse(jqXHR.responseText)[0].result[0].balance.split(" ")[0] < total ? "" : "none";
                tabela_callback(dataTable);
            }
            t_pb.hive_rate = JSON.parse(JSON.parse(jqXHR.responseText)[0].result[0].json_metadata).brl.hive;

        }

    });
};
var stepSecond = () => {
    if (document.querySelectorAll("output.pfdelegators").length === 0)
        return;
    document.querySelectorAll("output.pfdelegators").forEach((item) => {
        let grandpa = item.parentNode.parentNode;
        grandpa.setAttribute("data-pending", parseFloat(grandpa.attributes["data-pending"].value) + parseFloat(grandpa.attributes["data-step"].value));
        {
            let split = (grandpa.attributes["data-pending"].value + "").split(".");
            item.firstChild.innerHTML = split.length > 1 ? split[0] + "." + split[1].substr(0, 3) : split[0].substr(0, 3);
            item.lastChild.innerHTML = split.length > 1 ? split[1].substr(3) : split[0].substr(3);
        }
        {
            let brlValue = Number(grandpa.attributes["data-pending"].value) * t_pb.hive_rate;
            let split = (brlValue + "").split(".");
            console.log(split);
            grandpa.querySelector(".pfdelegatorsbrl").firstChild.innerHTML = split.length > 1 ? split[0] + "." + split[1].substr(0, 3) : split[0].substr(0, 3);
            grandpa.querySelector(".pfdelegatorsbrl").lastChild.innerHTML = split.length > 1 ? split[1].substr(3) : split[0].substr(3);
        }
    });
    setTimeout(stepSecond, 1E3);
};
t_pb.prototype.step5min = (starter) => {
    if (document.querySelectorAll("output.pfdelegators").length === 0 && starter === undefined)
        return;
    t_pb_object.getDelegadores((c) => {
        delegadoresResponse(c);
        if (starter !== undefined)
            stepSecond();
    });
    //setTimeout(t_pb_object.step5min, 5E3);
    setTimeout(t_pb_object.step5min, (660 - (new Date().getMinutes() % 10 * 60 + new Date().getSeconds())) * 1E3);
};

t_pb.prototype.Fg = function () {
    var b = $("#tableDelegadores");
    Fs.fv(b);
    b.append(Fs.Aq([{
            html: "Loading...",
            attr: {
                colspan: "12"
            }
        }]));
    console.log(t_pb_object);
    t_pb_object.step5min("start");
    stepSecond();
};

var delegadoresResponse = (c) => {
    let b = $("#tableDelegadores");
    b.find("tr:not(.headerRow)").remove();
    var d = c.rows;
    c = c.cols;
    for (var e = [], f = {}, g = 0; g < d.length; g++) {
        let h = d[g];
        let accumulated = document.createElement("output");
        let accumulatedbrl = document.createElement("output");
        let accumulated_start = document.createElement("span");
        let accumulated_end = document.createElement("sub");
        let accumulatedbrl_start = document.createElement("span");
        let accumulatedbrl_end = document.createElement("sub");
        let sacar_btn = document.createElement("button");
        let delegar_btn = document.createElement("button");
        let sacar_img = document.createElement("div");
        let delegar_img = document.createElement("div");
        sacar_img.classList.add("opIcon");
        sacar_img.classList.add("opIconInTransaction");
        delegar_img.classList.add("opIcon");
        delegar_img.classList.add("opIconOutTransaction");
        accumulated.classList.add("pfdelegators");
        accumulatedbrl.classList.add("pfdelegatorsbrl");
        sacar_btn.classList.add("btnSacar");
        delegar_btn.classList.add("btnDelegar");
        //accumulated.style.float = "left";
        sacar_btn.appendChild(sacar_img);
        delegar_btn.appendChild(delegar_img);
        let paySec = h[c.pay10min] / 600;
        let split = (h[c.accumulated] + (new Date().getMinutes() % 10 * 60 + new Date().getSeconds()) * paySec + "").split(".");
        accumulated_start.innerHTML = split.length > 1 ? split[0] + "." + split[1].substr(0, 3) : split[0].substr(0, 3);
        accumulated_end.innerHTML = split.length > 1 ? split[1].substr(3) : split[0].substr(3);
        accumulated.appendChild(accumulated_start);
        accumulated.appendChild(accumulated_end);
        accumulatedbrl.appendChild(accumulatedbrl_start);
        accumulatedbrl.appendChild(accumulatedbrl_end);
        e.push(Fs.Aq([
            {
                html: aG.EU(h[c.name]),
                attr: {
                    "class": "account"
                }
            },
            {
                html: h[c.percentparticipation] + "%",
                attr: {
                    "class": "percentage"
                }
            },

            {
                html: accumulated.outerHTML + accumulatedbrl.outerHTML,
                attr: {
                    "class": "pending"
                }
            },
            sacar_btn.outerHTML,
            {
                html: delegar_btn.outerHTML,
                attr: {
                    "class": "hide"
                }
            }
        ], {
            "data-active": h[c.percentparticipation] > 0 ? 1 : 0,
            "data-account": h[c.name],
            "data-percentage": h[c.percentparticipation],
            "data-pending": h[c.accumulated] + (new Date().getMinutes() % 10 * 60 + new Date().getSeconds()) * paySec,
            "data-step": paySec
        }));
    }
    ;

    b.append(e).find(".btnSacar").each(function () {
        var c = $(this);
        c.data("url", c.html()).button().on("click", function () {
            let grandpa = this.parentNode.parentNode;
            hive_keychain.requestCustomJson(grandpa.attributes["data-account"].value, 'pb_withdraw', 'Active', JSON.stringify({'ammount': 'all'}), "Request Withdraw of Hive Delegation Rewards to your account", (res) => {
                if (res.success)
                    D6.EA("Your witdraw request will be processed in the next " + ((600 - (new Date().getMinutes() % 10 * 60 + new Date().getSeconds())) / 60).toFixed(0) + " minutes.", 5E3);
                else
                    D6.EA("witdraw cancelled.", 2E3);
            });
            //a.kX(this.attributes.username.value);
            /*        
             account String Hive account to perform the request. If null, user can choose the account from a dropdown (optional, default null)
             id String Type of custom_json to be broadcasted
             key String Type of key. Can be 'Posting','Active' or 'Memo'
             json String Stringified custom json
             display_msg String Message to display to explain to the user what this broadcast is about
             callback function Keychain's response to the request
             rpc String Override user's RPC settings (optional, default null)
             */
            //return Zn.DS(a.data("url"), !0);
        })
    })
    b.append(e).find(".btnDelegar").each(function () {
        var c = $(this);
        c.data("url", c.html()).button().on("click", function () {
            let grandpa = this.parentNode.parentNode;
            console.log(grandpa.attributes["data-account"].value);
            //return Zn.DS(a.data("url"), !0);
            a.kX(this.attributes.username.value);
        });
    });
    bc.Ko(b, "percentage");
}
t_pb.prototype.kk = function (a) {
    console.log("KK");
//    var b = Fs.a9("dataTable notBold qNoWrap", "tableDelegadores", Fs.Ar([{
//            html: "Voter",
//            attr: {
//                "data-sort-col": "voter",
//                "data-sort-asc": "0"
//            }
//        }, {
//            html: "Own (MV)",
//            attr: {
//                "data-sort-col": "own-vests",
//                "data-sort-asc": "0"
//            }
//        }, {
//            html: "Proxied (MV)",
//            attr: {
//                "data-sort-col": "proxied-vests",
//                "data-sort-asc": "0"
//            }
//        }, {
//            html: "Influence",
//            attr: {
//                "data-sort-col": "influence",
//                "data-sort-asc": "0"
//            }
//        }])),
//            c = 0;
//    for (e in a) {
//        var d = a[e];
//        c += d.lr + d.lq
//    }
//    var e = [];
//    for (var f in a) {
//        var g = a[f];
//        d = g.lr;
//        g = g.lq;
//        var h = 100 / c * (d + g),
//                k =
//                Bm(h, 2) + " %",
//                l = Bm(d / 1E6, 3),
//                m = Bm(g / 1E6, 3);
//        e.push(Fs.Aq([aG.EU(f, !1, !0, !0), {
//                html: l,
//                attr: {
//                    class: "alignRight"
//                }
//            }, {
//                html: m,
//                attr: {
//                    class: "alignRight"
//                }
//            }, {
//                html: k,
//                attr: {
//                    class: "alignRight"
//                }
//            }], {
//            "data-voter": f,
//            "data-own-vests": d,
//            "data-proxied-vests": g,
//            "data-influence": h
//        }))
//    }
//    b.append(e);
//    bc.Ko(b, "influence");
//    return b
};
t_pb.prototype.kj = function (a) {
    a = "Updating delegation | " + a;
    var b = Fs.Rf();
    D6.I1(b, {
        title: a,
        width: Math.min(400, Zn.db(.9)),
        height: Math.min(400, D.s.cA()),
        padding: "4px 0",
        buttons: [],
        open: function () {
            return b.parents(".ui-dialog").focus()
        }
    });
    return b.html(Fs.Rf("textBoxPanel").html("Not Implemented"))
};
t_pb.prototype.kX = function (a) {
    var b = this,
            c = this.kj(a);
    D.b.lc(a, function (a) {
        c.html(b.kk(a))
    })
};
