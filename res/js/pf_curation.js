var t_pb_c = function (a) {
    //Fs.lY(a, "#tableDelegadores tr th:nth-child(1),#tableDelegadores tr td:nth-child(1),#tableDelegadores tr th:nth-child(7),#tableDelegadores tr th:nth-child(11),#tableDelegadores tr td:nth-child(11),#tableDelegadores tr th:nth-child(12),#tableDelegadores tr td:nth-child(12){text-align:center}#tableDelegadores tr th:nth-child(3),#tableDelegadores tr td:nth-child(3),#tableDelegadores tr th:nth-child(7),#tableDelegadores tr td:nth-child(7),#tableDelegadores tr th:nth-child(8),#tableDelegadores tr td:nth-child(8),#tableDelegadores tr th:nth-child(9),#tableDelegadores tr td:nth-child(9),#tableDelegadores tr th:nth-child(10),#tableDelegadores tr td:nth-child(10){text-align:right}#tableDelegadores tr[data-active='0'] .uName{text-decoration:line-through;color:#aaa}#tableDelegadores th,#tableDelegadores td{width:25%;text-align:right}#tableDelegadores tr th:nth-child(1),#tableDelegadores tr td:nth-child(1){min-width:195px;text-align:left}#tableDelegadores tr th:nth-child(4),#tableDelegadores tr td:nth-child(4){width:20%}");
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
    p1.append("The account @perfilbrasil was created to promote Brazilian and Portuguese language content. Delegators are entitled to receive a small share of curation rewards, which are currently calculated around ");
    p1.append(output);
    p1.append(" Hive per week, divided among delegators according to each one's contributions.");
    c.append(p1);
    c.append(p_wwarning);
//    D.s.aM(!1, "PerfilbrasilInfo", "Information", c, 0); 
    this.AJ(a);
};
var t_pb_c_object = null;

t_pb_c.ct = function (a, b, c, d) {
    a.bA(bC);
    b = a.d1("perfilbrasil", "Posts to be curated in the following days.").aI();
    t_pb_c_object = new t_pb_c(b);
    a.aN(c + "Perfilbrasil Curation");
    a.ak(function () {
        var a = function () {
            return t_pb_c_object.Fg()
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
    return t_pb_c_object
};

t_pb_c.prototype.AJ = function (a) {

    //a.append("<div>Informations</div>");

    a.append(Fs.a9("dataTable notBold qNoWrap", "tableCuration", Fs.Ar([{
            html: "Author",
            attr: {
                "class": "author",
                "data-sort-col": "author",
                "data-sort-asc": "0"
            }
        }, {
            html: "Title",
            attr: {
                "class": "title",
                "data-sort-col": "title",
                "data-sort-asc": "0"
            }
        }, {
            html: "Voting Deadline",
            attr: {
                "class": "time",
                "data-sort-col": "time",
                "data-sort-asc": "1"
            }
        }, {
            html: "Vote",
            attr: {
                "class": "situation"
            }
        }], {
        "class": "headerRow"
    }))[0].outerHTML);
};
t_pb_c.prototype.getPosts = function (tabela_callback) {
    $.ajax({
        async: true,
        cache: false,
        crossDomain: true,
        url: "https://sds.hivetasks.com/perfilbrasil",
        type: 'GET',
        complete: (jqXHR) => {
            let posts = JSON.parse(jqXHR.responseText);
            let posts_req = [];
            let posts_req_cont = [];
            let reasons = [];
            let count = 0;
            posts.forEach((post) => {
                reasons[post.id] = post.motivo
                posts_req[count++] = {
                    "jsonrpc": "2.0",
                    "method": "bridge.get_post",
                    "params": {
                        "author": post.author,
                        "permlink": post.permlink
                    },
                    "id": post.id
                };
                if (count > 20) {
                    posts_req_cont.push(posts_req);
                    count = 0;
                    posts_req = [];
                }
            });
            posts_req_cont.push(posts_req);
            $("#tableCuration").find("tr:not(.headerRow)").remove();
            posts_req_cont.forEach((req) => {
                $.ajax({
                    async: true,
                    cache: false,
                    crossDomain: true,
                    url: "https://" + localStorage["cfg.hive_node"],
                    type: 'POST',
                    dataType: 'application/json',
                    data: JSON.stringify(req),
                    complete: (jqXHR2) => {
                        let b = $("#tableCuration");
                        let e = [];
                        let postsnode = JSON.parse(jqXHR2.responseText);
                        console.log(postsnode);
                        postsnode.forEach((post) => {
                            let payout = new Date(post.result.payout_at + "Z");
                            payout.setDate(payout.getDate() - 4);
                            payout.setMinutes(60);
                            payout.setSeconds(0);
                            let situation = document.createElement("img");
                            situation.src = "/res/img/status-green.png";
                            situation.role = "button";
                            $(situation).on('click', t_pb_c_object.curationVote);
                            e.push(Fs.Aq([
                                {
                                    html: aG.EU(post.result.author),
                                    attr: {
                                        "class": "author"
                                    }
                                },
                                {
                                    html: '<a target="_blank" title="' +
                                            post.result.title + '" href="' +
                                            localStorage["cfg.hive_platform"] + '/@' + post.result.author + '/' + post.result.permlink +
                                            '\">' +
                                            post.result.title.substring(0, 80) + ((post.result.title.length > 80) ? "..." : "") +
                                            '</a>',
                                    attr: {
                                        "class": "title"
                                    }
                                },
                                {
                                    html: payout.toLocaleDateString() + " " + payout.toLocaleTimeString(),
                                    attr: {
                                        "class": "time"
                                    }
                                },
                                {
                                    html: situation,
                                    attr: {
                                        "class": "situation"
                                    }
                                }
                            ], {
                                "data-author": post.result.author,
                                "data-title": post.result.title,
                                "data-reason": reasons[post.id],
                                "data-time": post.result.payout_at,
                                "data-id": post.id
                            }));
                        });
                        b.append(e);
                        bc.Ko(b, "time");
                    }
                });
            });
        }

    });
};
t_pb_c.prototype.step5min = (starter) => {
    if (document.querySelectorAll("output.pfdelegators").length === 0 && starter === undefined)
        return;
    t_pb_c_object.getPosts((c) => {
        delegadoresResponse(c);
        if (starter !== undefined)
            stepSecond();
    });
    //setTimeout(t_pb_c_object.step5min, 5E3);
    setTimeout(t_pb_c_object.step5min, (660 - (new Date().getMinutes() % 10 * 60 + new Date().getSeconds())) * 1E3);
};

t_pb_c.prototype.Fg = function () {
    var b = $("#tableDelegadores");
    Fs.fv(b);
    b.append(Fs.Aq([{
            html: "Loading...",
            attr: {
                colspan: "12"
            }
        }]));
    console.log(t_pb_c_object);
    t_pb_c_object.step5min("start");
    stepSecond();
};

t_pb_c.prototype.kk = function (a) {
    let post = a.target.parentNode.parentNode;
    let header = Fs.Rf("vote_info");
    let titulo = document.createElement("h2");
    let autor = document.createElement("p");
    let motivo = document.createElement("p");
    let votebar_container = Fs.Rf("votebar_container");
    let votebar = Fs.Rf("votebar");
    let votebar_pos = Fs.Rf("pos");
    let votebar_neg = Fs.Rf("neg");
    let votebar_flag = Fs.Rf("flag");
    let votebar_mid = Fs.Rf("mid");
    votebar_pos[0].style.width = "1pt";
    votebar_neg[0].style.width = "0pt";
    votebar_flag[0].style.width = "0pt";
    titulo.innerHTML = post.attributes["data-title"].value;
    autor.innerHTML = post.attributes["data-author"].value;
//    console.log();
    switch (post.attributes["data-reason"].value) {
        case '0':
            motivo.innerHTML = "Decided by moderation of <a href=\"" + localStorage["cfg.hive_platform"] + "/@hive-127515\">HiveBR</a> community";
            votebar_pos[0].style.width = "0pt";
            votebar_neg[0].style.width = "0pt";
            votebar_flag[0].style.width = "1pt";
            break;
        case '1':
            motivo.innerHTML = "Shared in community: Brasil";
            break;
        case '2':
            motivo.innerHTML = "Posted in community: Brasil";
            break;
        case '3':
            motivo.innerHTML = "Posted using the tag <i>pt</i> with content in Portuguese";
            break;
        case '4':
            motivo.innerHTML = "Posted using the tag <i>pt-br</i> with content in Portuguese or about Brazil";
            break;
        case '5':
            motivo.innerHTML = "Posted using the tag <i>br</i> with content in Portuguese or about Brazil";
            break;
        case '6':
            motivo.innerHTML = "Posted using the tag <i>hivebr</i>";
            break;
        case '7':
            motivo.innerHTML = "Posted by an account with the Brazilian Badge.";
            break;
        default:
            motivo.innerHTML = "No given reason.";
            break;
    }
    titulo.classList.add("titulo");
    autor.classList.add("autor");
    autor.classList.add("motivo");
    header.append(titulo);
    header.append(autor);
    header.append(motivo);
    votebar_container.append(votebar);
    votebar.append(votebar_flag);
    votebar.append(votebar_neg);
    votebar.append(votebar_pos);
    votebar_container.append(votebar_mid);

    let buttons_container = Fs.Rf("buttons_container");
    let buttons_p = document.createElement("p");
    buttons_p.innerHTML = "Do you, as a delegator, approve curation of this post?";
    let button_flag = document.createElement("button");
    let button_neg = document.createElement("button");
    let button_pos = document.createElement("button");
    button_pos.innerHTML = "Approve";
    button_neg.innerHTML = "Disapprove";
    button_flag.innerHTML = "Flag post";
    button_flag.classList.add("button_flag");
    button_neg.classList.add("button_neg");
    button_pos.classList.add("button_pos");

    buttons_container.append(buttons_p);
    buttons_container.append(button_flag);
    buttons_container.append(button_neg);
    buttons_container.append(button_pos);

    let c = Fs.Rf("topico");
    c.append(header);
    c.append(votebar_container);
    c.append(buttons_container);
    c.append(Fs.a9("dataTable notBold qNoWrap", "tableCuration_voters", Fs.Ar([{
            html: "Voter",
            attr: {
                "class": "voter",
                "data-sort-col": "voter",
                "data-sort-asc": "0"
            }
        }, {
            html: "Vote",
            attr: {
                "class": "vote",
                "data-sort-col": "vote",
                "data-sort-asc": "0"
            }
        }, {
            html: "Delegation Power",
            attr: {
                "class": "time",
                "data-sort-col": "power",
                "data-sort-asc": "1"
            }
        }], {
        "class": "headerRow"
    }))[0].outerHTML);
    $.ajax({
        async: true,
        cache: false,
        crossDomain: true,
        url: "https://sds.hivetasks.com/perfilbrasil/" + post.attributes["data-id"].value,
        type: 'GET',
        complete: (jqXHR) => {
            let voters = JSON.parse(jqXHR.responseText);
            let voter_req = [];
            let voter_req_cont = [];
            let count = 0;
            voters.forEach((voter) => {
                voter_req[count++] = {
                    "jsonrpc": "2.0",
                    "method": "condenser_api.get_vesting_delegations",
                    "params": [
                        voter.voter,
                        "perfilbrasil",
                        50
                    ],
                    "id": voter.id
                };
                if (count > 20) {
                    voter_req_cont.push(voter_req);
                    count = 0;
                    voter_req = [];
                }
            });
            voter_req_cont.push(voter_req);
            $("#tableCuration_voters").find("tr:not(.headerRow)").remove();
            voter_req_cont.forEach((req) => {
                if (req.length > 0)
                    $.ajax({
                        async: true,
                        cache: false,
                        crossDomain: true,
                        url: "https://" + localStorage["cfg.hive_node"],
                        type: 'POST',
                        dataType: 'application/json',
                        data: JSON.stringify(req),
                        complete: (jqXHR2) => {
                            let node_voters = JSON.parse(jqXHR2.responseText);
                            let b = $("#tableCuration_voters");
                            let e = [];
                            let total = BigInt(0); 
                            node_voters.forEach((voterdata) => {
                                if (voterdata.result.length <= 0)
                                    return;
                                total += BigInt(voterdata.result[0].vesting_shares.split(".")[0]);
                            });
                            console.log(total);
                            node_voters.forEach((voterdata) => {
                                console.log(voterdata.result.length);
                                if (voterdata.result.length <= 0)
                                    return;
                                e.push(Fs.Aq([
                                    {
                                        html: aG.EU(voterdata.voter),
                                        attr: {
                                            "class": "voter"
                                        }
                                    },
                                    {
                                        html: voterdata.vote,
                                        attr: {
                                            "class": "vote"
                                        }
                                    },
                                    {
                                        html: (BigInt(voterdata.result[0].vesting_shares.split(".")[0])/total).toFixed(2),
                                        attr: {
                                            "class": "power"
                                        }
                                    }
                                ], {
                                    "data-author": voterdata.voter,
                                    "data-title": voterdata.vote
                                }));
                            });
                            b.append(e);
                            bc.Ko(b, "author");
                        }
                    });
            });
        }

    });
    return c;
};
t_pb_c.prototype.curationVote = function (e) {
    a = "Curation Vote";
    var b = Fs.Rf();
    D6.I1(b, {
        title: a,
        width: Math.min(800, Zn.db(.9)),
        height: Math.min(700, D.s.cA()),
        padding: "0px 0",
        buttons: [],
        open: function () {
            return b.parents(".ui-dialog").focus();
        }
    });
    return b.html(t_pb_c_object.kk(e));
};
//t_pb_c.prototype.kX = function (a) {
//    a = ""
//    var b = this,
//        c = this.curationVote(a);
//    D.b.lc(a, function (a) {
//        c.html(b.kk(a));
//    });
//};
