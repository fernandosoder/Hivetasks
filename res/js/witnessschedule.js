var kW = function (a) {
    Fs.lY(a, ".activeWitnessRow,.activeBlockRow{color:var(--section-header-text)}.activeWitnessRow{font-weight:bold}");
    this.Im = !1;
    this.TV = this.k1 = 0;
    this.TY = "";
    this.k5 = [];
    this.k7 = 0;
    this.AJ(a)
};
kW.ct = function (a, b, c, d) {
    a.bA(bB);
    b = a.d1("WitnessSchedule", "Hive Witness Schedule").aI();
    var e = new kW(b);
    a.aN(c + "Hive Witness Schedule");
    a.ak(function () {
        d(function () {
            return e.kZ()
        })
    });
    a.al();
    return e
};
kW.prototype.AJ = function (a) {
    this.kx = Fs.Rf().css("width", "66%");
    this.ky = Fs.Rf().css({
        width: "34%",
        "padding-left": "20px"
    });
    var b = Fs.h1("row nowrap", "", "divSchedule", [this.kx, this.ky]);
    a.append(b);
    let shuffled = document.createElement("table");
    shuffled.id = "shuffledwitnesses";
    shuffled.classList.add("shuffledwitnesses");
    shuffled.classList.add("dataTable");
    shuffled.appendChild(document.createElement("tbody"));
    this.ky.empty().append(this.k0("Shuffled Witnesses"), "<hr>", shuffled);
    this.kx.append(this.k0("Next Runners"));
    this.kx.append(document.createElement("hr"));
    this.kx.append(Fs.a9("dataTable notBold qNoWrap", "tableWitnessLine", Fs.Ar([{
            html: "Active",
            attr: {
            }
        }, {
            html: "Witness",
            attr: {
                "data-sort-col": "owner",
                "data-sort-asc": "0"
            }
        }, {
            html: "Virtual Time Left",
            attr: {
                "data-sort-col": "timeleft",
                "data-sort-asc": "1"
            }
        }, {
            html: "Last Block",
            attr: {
                "data-sort-col": "lastblock",
                "data-sort-asc": "0"
            }
        }], {
        "class": "headerRow"
    }))[0].outerHTML);
    this.Q7 = a
};
kW.prototype.kw = function (a) {
    this.Im = a
};
kW.prototype.k0 = function (a) {
    return Fs.Rf("bigText headerText bold qNoWrap", "", a).css("padding", "14px 14px 4px 14px")
};
kW.prototype.kz = function (a, b, c) {
    for (var d = Fs.Rf().css("margin-bottom", "10px"), e = {}, f = 0; f < c.length; f++) {
        let g = c[f];
        e[g] = b[g];
        delete b[g]
    }
    d.append(this.k0(a), "<hr>", aG.AN(e));
    return d
};
kW.prototype.k6 = function (a) {
    a.next_shuffle_block_num = Bm(a.next_shuffle_block_num)
};
kW.prototype.k4 = function () {
    var a = this;
    this.TY && this.k3.find("tr:not(.headerRow)").each(function () {
        var b = $(this),
                c = 0 < b.find("td:contains('" + a.TY + "')").length;
        b[c ? "addClass" : "removeClass"]("activeWitnessRow")
    });
    this.kx.find("td:contains('Current Head Block Num')").next("td").text(Bm(this.TV)).parent("tr").addClass("activeBlockRow")
};
kW.prototype.k2 = function () {
    var a = this;
//    console.log(this.TV + " " + this.k1 + " " + (this.k1 - this.TV));
//    let blocks = [];
//    if (this.TV === 0)
//        for (let c = this.k1 - 20; c < this.k1; c++) {
//            blocks.push({
//                "jsonrpc": "2.0",
//                "method": "condenser_api.get_block",
//                "params": ["" + c],
//                "id": c
//            });
//        }
//    else
//        blocks.push({
//            "jsonrpc": "2.0",
//            "method": "condenser_api.get_block",
//            "params": ["" + this.TV++],
//            "id": 1
//        });
//    $.ajax({
//        async: true,
//        cache: false,
//        crossDomain: true,
//        url: "https://" + localStorage["cfg.hive_node"],
//        type: 'POST',
//        dataType: 'application/json',
//        data: JSON.stringify(blocks),
//        complete: (jqXHR, textStatus) => {
//            console.log(JSON.parse(jqXHR.responseText));
//        }
//    });
    D.S.HU("get_dynamic_global_properties", !0, [], function (b) {
        try {
            document.querySelectorAll("#shuffledwitnesses tr").forEach((i) => i.classList.remove("activeBlockRow"));
            document.getElementById("shuffled_" + b.current_witness).classList.add("activeBlockRow");
            document.getElementById("shuffled_" + b.current_witness + "_block").innerHTML = b.head_block_number;
        } catch (exception) {

        }
        console.log(a.TV);
        if (a.TV === 0 || isNaN(a.TV)) {
            document.querySelectorAll(".lastblock").forEach((item) => {
                //if(item.innerHTML > 0)
                let min = (b.head_block_number - item.innerHTML) / 20;
                item.title = item.innerHTML;
                if (Number(item.innerHTML) === 0) {
                    item.innerHTML = "never";
                }else if (min > 525600) {
                    let v = Math.trunc(min / 525600);
                    item.innerHTML = v + " year" + (v >= 2 ? "s" : "");
                    item.style.color = "red";
                } else if (min > 43200) {
                    let v = Math.trunc(min / 43200);
                    item.innerHTML = v + " month" + (v >= 2 ? "s" : "");
                    item.style.color = "red";
                } else if (min > 10080) {
                    let v = Math.trunc(min / 10080);
                    item.innerHTML = v + " week" + (v >= 2 ? "s" : "");
                    item.style.color = "#db9000";
                } else if (min > 1440) {
                    let v = Math.trunc(min / 1440);
                    item.innerHTML = v + " day" + (v >= 2 ? "s" : "");
                } else if (min > 60) {
                    let v = Math.trunc(min / 60);
                    item.innerHTML = v + " hour" + (v >= 2 ? "s" : "");
                } else if (min > 1) {
                    let v = Math.trunc(min);
                    item.innerHTML = v + " min" + (v >= 2 ? "s" : "");
                } else {
                    item.innerHTML = "<1 min";
                }
            });
        }

        a.TV = b.head_block_number;
        a.TY = b.current_witness;
        b = a.k5.indexOf(a.TY);
        -1 < b && (a.k7 = b);
        a.k4();
        setTimeout(function () {
            return a.kZ();
        }, 2E3);
    });
};

kW.prototype.updateList = (callback) => {
    $.ajax({
        async: true,
        cache: false,
        crossDomain: true,
        url: "https://" + localStorage["cfg.hive_node"],
        type: 'POST',
        dataType: 'application/json',
        data: JSON.stringify([{
                "jsonrpc": "2.0",
                "method": "database_api.get_witness_schedule",
                "id": 1
            }, {
                "jsonrpc": "2.0",
                "method": "call",
                "params": ["database_api", "get_witnesses_by_vote", ["", 400]],
                "id": 2
            }]),
        complete: (jqXHR, textStatus) => {
            let res = JSON.parse(jqXHR.responseText);
            callback(res);
        }
    });
}

kW.prototype.kZ = function () {
    var a = this;
    this.k1 && this.TV < this.k1 || this.Im || (this.kw(!0), this.HD || (this.HD = setInterval(function () {
        return a.k2()
    }, 2E3), D.s.kl(this.HD)), this.updateList(function (res) {
        let top20 = res[1].result.slice(0, 20);
        let table = $("#tableWitnessLine");
        let b = res[0].result;
        console.log(this.k1);
        res[1].result.forEach((item) => {
            if (top20.indexOf(item) !== -1)
                return;

            let timeleft = BigInt(item.virtual_scheduled_time) - BigInt(b.current_virtual_time);

            if ($("#tableWitnessLine tbody tr[data-owner='" + item.owner + "']").length > 0) {
                $("#tableWitnessLine tbody tr[data-owner='" + item.owner + "']").remove();
            }
            let lastblock = document.createElement("span");
            lastblock.innerHTML = item.last_confirmed_block_num;
            lastblock.classList.add("lastblock");
            if (!(a.TV === 0 || isNaN(a.TV))) {
                lastblock.title = item.last_confirmed_block_num;
                let min = (a.TV - lastblock.innerHTML) / 20;
                if (item.last_confirmed_block_num === 0) {
                    if (item.last_aslot > 0){
                        lastblock.style.color = "red";
                        lastblock.innerHTML = "missed all";
                    }else
                        lastblock.innerHTML = "never";
                }else if (min > 525600) {
                    let v = Math.trunc(min / 525600);
                    lastblock.innerHTML = v + " year" + (v >= 2 ? "s" : "");
                    lastblock.style.color = "red";
                } else if (min > 43200) {
                    let v = Math.trunc(min / 43200);
                    lastblock.innerHTML = v + " month" + (v >= 2 ? "s" : "");
                    lastblock.style.color = "red";
                } else if (min > 10080) {
                    let v = Math.trunc(min / 10080);
                    lastblock.innerHTML = v + " week" + (v >= 2 ? "s" : "");
                    lastblock.style.color = "#db9000";
                } else if (min > 1440) {
                    let v = Math.trunc(min / 1440);
                    lastblock.innerHTML = v + " day" + (v >= 2 ? "s" : "");
                } else if (min > 60) {
                    let v = Math.trunc(min / 60);
                    lastblock.innerHTML = v + " hour" + (v >= 2 ? "s" : "");
                } else if (min > 1) {
                    let v = Math.trunc(min);
                    lastblock.innerHTML = v + " min" + (v >= 2 ? "s" : "");
                } else {
                    lastblock.innerHTML = "<1 min";
                }
            }
            table.append([Fs.Aq([{
                        html: aG.EU(item.owner),
                        attr: {
                            "class": "account"
                        }
                    },
                    {
                        html: String(timeleft).padStart(27, '0'),
                        attr: {
                            "class": "timeleft"
                        }
                    },
                    {
                        html: lastblock,
                        attr: {
                            "class": "last_block"
                        }
                    }
                ], {
                    "data-active": item.signing_key === "STM1111111111111111111111111111111114T1Anm" ? 0 : 1,
                    "data-owner": item.owner,
                    "data-lastblock": item.last_confirmed_block_num,
                    "data-lastaslot": item.last_aslot,
                    "data-totalmissed": item.total_missed,
                    "data-timeleft": String(timeleft).padStart(27, '0')
                })]);
        });
        top20arr = [];
        top20.forEach(e => top20arr.push(e.owner));
        document.getElementById("shuffledwitnesses").childNodes.forEach((p) => p.childNodes.forEach((i) => {
                if (top20arr.indexOf(i.getAttribute("data-owner")) === -1)
                    i.remove();
            }));
        b.current_shuffled_witnesses.forEach((item) => {
            let newid = "shuffled_" + item;
            if (document.getElementById(newid) === null) {
                let tr = document.createElement("tr");
                let index = document.createElement("td");
                let name = document.createElement("td");
                let block = document.createElement("td");
                name.innerHTML = item;
                tr.id = newid;
                tr.setAttribute("data-owner", item);
                block.id = newid + "_block";
                index.id = newid + "_index";
                tr.appendChild(index);
                tr.appendChild(name);
                tr.appendChild(block);
                document.getElementById("shuffledwitnesses").children[0].append(tr);
            }
            if (top20arr.indexOf(item) === -1)
                document.getElementById(newid).classList.add("runner");
            else
                document.getElementById(newid).classList.remove("runner");
            document.getElementById(newid + "_index").innerHTML = b.current_shuffled_witnesses.indexOf(item);
            document.getElementById(newid).setAttribute("data-index", b.current_shuffled_witnesses.indexOf(item));
            document.getElementById(newid).setAttribute("data-index", b.current_shuffled_witnesses.indexOf(item));
            document.getElementById(newid + "_block").innerHTML = "--------";

        });
        for (let c = 0; c < document.querySelectorAll("#shuffledwitnesses tr").length; c++) {
            document.querySelector("#shuffledwitnesses tbody").append(document.querySelector("#shuffledwitnesses tr[data-index='" + c + "']"));
        }
        a.kw(!1);
        a.k7 = 20 > a.k7 ? a.k7 + 1 : 0;
        a.k1 = b.next_shuffle_block_num + 21; // compensating HF26 bug
        a.k5 = b.current_shuffled_witnesses;
        var c = a.k5.length ? a.k5[a.k7] : "";
        a.k6(b);
        a.k3 = $(aG.AN(b.current_shuffled_witnesses, "shuffledwitnesses"));
        delete b.id;
        //a.ky.append(a.k0("Shuffled Witnesses"), "<hr>", a.k3);
        delete b.current_shuffled_witnesses;

//        a.kx.empty().append(a.kz("General Data",
//                b, "majority_version current_head_block_num next_shuffle_block_num num_scheduled_witnesses max_voted_witnesses max_miner_witnesses max_runner_witnesses hardfork_required_witnesses elected_weight timeshare_weight miner_weight witness_pay_normalization_factor current_virtual_time".split(" ")),
//                a.kz("Median Props", b.median_props, ["account_creation_fee", "maximum_block_size", "hbd_interest_rate", "account_subsidy_budget", "account_subsidy_decay"]),
//                a.kz("Account Subsidy Rd", b.account_subsidy_rd, ["resource_unit", "budget_per_time_unit", "pool_eq", "max_pool_size", "decay_params"
//                ]), a.kz("Account Subsidy Witness Rd", b.account_subsidy_witness_rd, ["resource_unit", "budget_per_time_unit", "pool_eq", "max_pool_size", "decay_params"]));
        //a.kx.append("Linha<br/>") ;
        a.TY = c;
        a.k4();
        a.TV || a.k2();
        bc.Ko(table, "timeleft");
    }))
};
kW.prototype.dialog = (a_kz, h, w) => {
    a = "Updating delegation";
    var b = Fs.Rf();
    D6.I1(b, {
        title: a,
        width: Math.min(100, Zn.db(.9)),
        height: Math.min(100, D.s.cA()),
        padding: "4px 0",
        buttons: [],
        open: function () {
            return b.parents(".ui-dialog").focus()
        }
    });
    return b.html(Fs.Rf("textBoxPanel").html(a_kz));
}