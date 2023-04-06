var xhttp = new XMLHttpRequest();
var reqid = 0;
var currentVirtualTime = 0;
var top20 = [];
var sorteados = [];
var lastVirtualTime = 0;
var counter = 0;
var update1 = function () {
    if (this.readyState == 4 && this.status == 200) {
        currentVirtualTime = JSON.parse(this.responseText).result.current_virtual_time;
        if (lastVirtualTime === 0)
            lastVirtualTime = currentVirtualTime;
        xhttp.onreadystatechange = update2;
        let req = {
            "id": reqid++,
            "jsonrpc": "2.0",
            "method": "call",
            "params": [
                "database_api", "get_witnesses_by_vote",
                ["", 25]
            ]
        };
        xhttp.open("POST", "https://api.hive.blog", true);
        xhttp.send(JSON.stringify(req));
    }
};
xhttp.onreadystatechange = update1;
xhttp.open("POST", "https://api.hive.blog", true);
xhttp.send(JSON.stringify({
    "id": reqid++,
    "jsonrpc": "2.0",
    "method": "call",
    "params": [
        "database_api",
        "get_witness_schedule",
        []
    ]
}));

var update2 = function () {
    if (this.readyState == 4 && this.status == 200) {
        let lista = {};
        let res = JSON.parse(this.responseText);
        //console.log(res.result);
        res.result.forEach(function (item) {
            let x = new BigNumber(item.virtual_scheduled_time);
            let y = new BigNumber(currentVirtualTime);
            let diff = x.sub(y).toFixed().padStart(26, '0');
            lista[diff] = {
                name: item.owner,
                gridId: "a" + item.id,
                w: document.createElement("div")
            };
            if (document.getElementById(item.owner) !== null) {
                let selector = ".a" + item.id + " .sch";
                //console.log(selector);
                document.querySelectorAll(selector)[0].innerHTML = diff;
                return;
            }
            



            //console.log(item);
            
            let nome = document.createElement("div");
            let sch = document.createElement("div");
            nome.innerHTML = item.owner;
            sch.classList.add("sch");
            sch.innerHTML = diff;
            lista[diff].w.appendChild(nome);
            lista[diff].w.appendChild(sch);

            lista[diff].w.style.gridArea = "a" + item.id;
            lista[diff].w.classList.add("a" + item.id);
            lista[diff].w.id = item.owner;
            if(top20.length < 20){
                top20.push("a" + item.id);
                lista[diff].w.classList.add("top20");
            }


            document.body.appendChild(lista[diff].w);
        });

        let keys = Object.keys(lista),
                i, len = keys.length;

        keys.sort();

        let gridAreas = "";

        if (lastVirtualTime !== currentVirtualTime) {
            lastVirtualTime = currentVirtualTime;
            counter = 0;
        }

        for (i = counter; i < len ; i++) {
            let k = keys[i];
            console.log(k);
            gridAreas += "'" + lista[k].gridId + "' ";
        }
        
        for (i = 0; i < len && i < Number(counter); i++) {
            let k = keys[i];
            //console.log(k);
            gridAreas += "'" + lista[k].gridId + "' ";
        }
        
        
        
        counter++;
        //let oldGridAreas = document.body.style.gridTemplateAreas === "" ? gridAreas : document.body.style.gridTemplateAreas;
        document.body.style.gridTemplateAreas = gridAreas;
        //document.body.style.gridTemplateAreas = gridAreas;
        
        console.log(gridAreas);
        //console.log(oldGridAreas);
        console.log(counter);
        
        
        
        
        xhttp.onreadystatechange = update1;
        setTimeout(function () {
            xhttp.open("POST", "https://api.hive.blog", true);
            xhttp.send(JSON.stringify({
                "id": reqid++,
                "jsonrpc": "2.0",
                "method": "call",
                "params": [
                    "database_api",
                    "get_witness_schedule",
                    []
                ]
            }));
        }, 2000);
    }
};



/*
 
 
 
 // Global variables
 var gNextShuffleBlockNum = 0;
 var gCurrentVirtualTime = 0;
 var gLastBlockNumber = 0;
 var gLastVirtualTime = 0;
 var gWitnessRanking = [];
 
 function updateWitnessesList() {
 
 var refreshed = moment().format('LTS');
 
 var code = '<div style="position:relative;"><span style="position:absolute; left:0;">--- <em><small>refreshed @ ' + refreshed + '</small></em> ---</span><span>&nbsp;</span>';
 code += '<span style="position:absolute; right:0;"><em>(virtual_scheduled_time diff)</em></span></div><div style="line-height:0.7em;"><br></div>';
 
 gWitnessRanking.sort(function (a, b)
 {
 if (a.virtual_scheduled_time < b.virtual_scheduled_time)
 return -1;
 if (a.virtual_scheduled_time > b.virtual_scheduled_time)
 return 1;
 return 0;
 });
 
 var index = 0;
 for (var i = 0; i < gWitnessRanking.length; i++)
 {
 var rank = gWitnessRanking[i]['rank'];
 var owner = gWitnessRanking[i]['owner'];
 var votes = gWitnessRanking[i]['votes'];
 var virtual_scheduled_time = gWitnessRanking[i]['virtual_scheduled_time'];
 var signing_key = gWitnessRanking[i]['signing_key'];
 var time_estimate = gCurrentVirtualTime
 
 var style = "";
 
 if (rank <= 20) {
 style = "display:none;";
 $("[id='witness_" + owner + "']").find(".rank").html(((rank < 10) ? "&nbsp; " : "") + "(" + rank + ")");
 } else {
 $("[id='witness_" + owner + "']").find(".rank").html('(' + rank + ') <span style="font-style:normal;">backup</span>');
 if (signing_key != 'STM1111111111111111111111111111111114T1Anm')
 index++;
 
 if (owner == 'arcange')
 style = 'color:orange;';
 
 if (signing_key != 'STM1111111111111111111111111111111114T1Anm') {
 code += '<div id="witness_rank_' + owner + '" class="witness_rank" style="position:relative;' + style + '">';
 code += '<span class="rank0" style="position:absolute; left:0;"><em><small>' + ((rank < 100) ? "&nbsp; " : "") + ((rank < 10) ? "&nbsp; " : "") + '(' + rank + ')</small></em> &nbsp; ';
 code += '<span class="owner">' + owner + '</span>' + '</span><span>&nbsp;</span>';
 var x = new BigNumber(virtual_scheduled_time);
 var y = new BigNumber(gCurrentVirtualTime);
 var diff = x.sub(y).toFixed();
 
 //var uint128max = 340282366920938463463374607431768211455;
 //var estimate = diff * index / uint128max / (votes + 1);
 
 code += '<span class="scheduled" style="position:absolute; right:0;">' + diff;
 if (rank <= 20)
 code += ' &nbsp; <em><small>[' + ((index >= 10) ? '&nbsp; ' : '') + '&nbsp; ]</small></em>' + ((index < 10) ? ' &nbsp;' : '') + ((index < 100) ? ' &nbsp;' : '');
 else
 code += ' &nbsp; <em><small>[' + index + ']</small></em>' + ((index < 10) ? ' &nbsp;' : '') + ((index < 100) ? ' &nbsp;' : '');
 code += '</span></div>';
 }
 }
 
 $("#consolewitnesses").html(code);
 }
 }
 
 /*
 
 
 // Main Function
 function main()
 {
 var UpdateBlock = function ()
 {
 steem.api.getDynamicGlobalProperties(function (err, result)
 {
 var block_number = result.head_block_number;
 var witness = result.current_witness;
 var time = moment().format('LTS');
 
 if (gLastBlockNumber != block_number)
 {
 gLastBlockNumber = block_number;
 
 $(".witness:not(.highlighted)").css("color", "").css("font-weight", "");
 $("._witnessed").css("opacity", "0.3");
 $("[id='witness_" + witness + "']").find(".blocknum").html(block_number);
 $("[id='witness_" + witness + "']").addClass("_witnessed").css("color", "green").css("font-weight", "bold");
 
 if (gNextShuffleBlockNum != 0)
 {
 var diff = gNextShuffleBlockNum - block_number;
 if (diff == 0)
 $('#shuffle').html('&middot;');
 else
 $('#shuffle').html('<em><small>-' + diff + '</small></em>');
 }
 }
 
 document.title = block_number + ' ' + witness + ' [' + time + ']';
 setTimeout(UpdateBlock, 750);
 });
 };
 
 var UpdateSchedule = function ()
 {
 steem.api.getWitnessSchedule(function (err, result)
 {
 gCurrentVirtualTime = result.current_virtual_time;
 gNextShuffleBlockNum = result.next_shuffle_block_num;
 
 var current = result.current_shuffled_witnesses;
 var refreshed = moment().format('LTS');
 
 if (gLastVirtualTime != gCurrentVirtualTime) {
 var delay = 0;
 if (gLastVirtualTime != 0)
 delay = 1800;
 
 gLastVirtualTime = gCurrentVirtualTime;
 
 setTimeout(function () {
 var code = '<div style="text-align:center;">--- <em><small>refreshed @ ' + refreshed + '</small></em> ---</div>';
 code += '<div style="line-height:0.7em;"><br></div>';
 code += '<div id="list">' + list + '</div><br>';
 code += '<div style="position:relative;">' + gNextShuffleBlockNum + '<div style="position:absolute; top:0; width:100%; padding-left:5em;" id="shuffle"></div></div>';
 code += '<div><em><small>(Next Shuffle BlockNum)</small></em></div><div style="line-height:0.5em;"><br></div>';
 code += '<div>' + gCurrentVirtualTime + '</div>';
 code += '<div><em><small>(Current Virtual Time)</small></em></div>';
 $("#consoleschedule").html(code);
 }, delay);
 }
 setTimeout(UpdateActive, 1000);
 });
 };
 
 var list = "";
 // a separate call to get the list of current shuffled witnesses, can remove after get_witness_schedule is fixed
 var UpdateActive = function ()
 {
 steem.api.getActiveWitnesses(function (err, result)
 {
 
 list = "";
 for (var i = 0; i < result.length; i++) {
 if (result[i] == "")
 continue; // current bug in response
 
 var style = '';
 if (result[i] == 'arcange')
 style = 'style="color:orange;" class="highlighted"';
 
 list += '<div id="witness_' + result[i] + '" class="witness" style="position:relative;">';
 list += '<span class="rank" style="position:absolute; left:0; font-style:italic; font-size:small;">.</span>';
 list += '<span ' + style + '>' + result[i] + '</span>';
 list += '<span class="blocknum" style="position:absolute; right:0;"></span></div>';
 }
 
 UpdateSchedule();
 });
 };
 
 var UpdateWitnesses = function () {
 
 gWitnessRanking = [];
 
 steem.api.getWitnessesByVote("", 100, function (err, result)
 {
 for (var i = 0; i < result.length; i++) {
 var owner = result[i]['owner'];
 var virtual_scheduled_time = result[i]['virtual_scheduled_time'];
 var signing_key = result[i]['signing_key'];
 var votes = result[i]['votes'];
 gWitnessRanking.push(
 {
 'rank': (i + 1),
 'owner': owner,
 'virtual_scheduled_time': virtual_scheduled_time,
 'signing_key': signing_key,
 'votes': votes
 });
 }
 updateWitnessesList();
 setTimeout(UpdateWitnesses, 1000);
 });
 };
 steem.api.setOptions({url: 'https://api.hive.blog'});
 
 UpdateBlock();
 UpdateActive();
 UpdateWitnesses();
 }
 
 $(function ()
 {
 main();
 });
 */    