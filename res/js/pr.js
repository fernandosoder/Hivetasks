
var aabanner = () => {
    let panel = document.getElementById("panelTopAd");
    let iframe = document.createElement("iframe");
    iframe.id = "aabanner";
    iframe.setAttribute("data-aa", "2141231");
    iframe.setAttribute("src", "//acceptable.a-ads.com/2141231");
    iframe.setAttribute("style", 'border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;');
    if (document.getElementById("aabanner") === null)
    panel.append(iframe);
    if (document.getElementById("aabanner") === null)
        return false;
    document.getElementById("aabanner").src = document.getElementById("aabanner").src;
};

var prList = [];
var prIndex = 0;

var setPr = () => {
    let panel = document.getElementById("panelTopAd");
    if (panel === null)
        return;
//  if (aabanner())
//      return;
    if (prList.length < 1) {
        panel.title = "Click Here to vote for @fernandosoder as Hive Witness";
        let a = panel.children.length > 0 ? panel.children[0] : document.createElement("a");
        a.innerHTML = "";
        let img = document.createElement("img");
        img.classList.add("adImage");
        img.classList.add("hoverImage");
        img.style.height = "inherit";
        img.style.width = "inherit";
        img.src = "/witness.png";
        a.style.height = "100%";
        a.style.width = "100%";
        a.target = "";
        a.href = (false && hive_keychain !== null) ? "javascript:hive_keychain.requestWitnessVote(localStorage.account,'fernandosoder',true);" : "https://vote.hive.uno/@fernandosoder";
        if (a.children.length === 0)
            a.appendChild(img);
        if (panel.children.length === 0)
            panel.appendChild(a);
        return;
    }
    if (panel === null) {
        return;
    }
    prIndex = prList.length > (prIndex + 1) ? ++prIndex : 0;
    $.ajax({
        async: true,
        cache: false,
        crossDomain: true,
        url: "https://" + localStorage["cfg.hive_node"],
        type: 'POST',
        dataType: 'application/json',
        data: JSON.stringify({
            "jsonrpc": "2.0",
            "method": "bridge.get_post",
            'params': {
                "author": prList[prIndex].user,
                "permlink": prList[prIndex].permlink
            },
            "id": 1
        }),
        complete: (jqXHR, textStatus) => {
            let res = JSON.parse(jqXHR.responseText);
            let panel = document.getElementById("panelTopAd");
            let a = panel.children.length > 0 ? panel.children[0] : document.createElement("a");
            a.innerHTML = "";
            let img = document.createElement("img");
            img.addEventListener("error", (e) => {
                e.target.src = '/res/img/loading-status.png';
                e.target.classList.add("error");
            });
            let title = document.createElement("span");
            let author = document.createElement("span");
            let container = document.createElement("div");

            author.innerHTML = res.result.author;
            img.classList.add("adImage");
            img.classList.add("hoverImage");
            container.classList.add("container");
            img.style.height = "inherit";
            img.style.width = "inherit";
            a.style.height = "100%";
            a.style.width = "100%";
            a.target = "_blank";
            a.appendChild(img);
            container.appendChild(title);
            container.appendChild(author);
            a.appendChild(container);
            panel.appendChild(a);

            if (res.result.json_metadata.app.split("/")[0] === "dBuzz") {
                let arr = res.result.body.split("\n");
                container.classList.add("dbuzz");
                img.src = "/res/img/dbuzz-icon-152.png";
                let text = "";
                for (let index in arr)
                    if (index < arr.length - 1) {
                        text += (arr[index]);
                    }
                title.innerHTML = text.replaceAll("#", "");
            } else {
                img.src = res.result.json_metadata.image[0];
                title.innerHTML = res.result.title;
            }




            let link = (localStorage['cfg.hive_platform'] === undefined ? "http://hive.blog" : localStorage['cfg.hive_platform']) + "/@" + prList[prIndex].user + "/" + prList[prIndex].permlink;
            if (a.href !== prList[prIndex].link)
                a.href = link;
            a.classList.add("adLink");
            panel.title = "Click Here to open our Sponsor's Hive Post:\n\n" + link;
        }
    });
};

var  getpr = () => {
    let xhttp = new XMLHttpRequest();
   	let arr = [];
   	let validAdds = [];
    let start = 0;
   	let postData = {
      "id":1,
     	"jsonrpc":"2.0",
     	"method":"condenser_api.get_account_history",
     	"params":[
      	"fernandosoder",
       	-1,
       	1000,
       	4,
        4
      ]};
    let next = function () {
        if (this.readyState === 4 && this.status === 200) {
            let res = JSON.parse(this.responseText);
          	let stop = false;
            try{
                res.result.forEach((item) =>{
                    if(item[1].op[0] === "transfer")
                      if(item[1].op[1].to === "fernandosoder"){
                        let transac = item[1].op[1];
                        transac.timestamp = item[1].timestamp;
                    let d = new Date(transac.timestamp);
                    let now = new Date();
                        let inc = now.valueOf() - d.valueOf() - 0604800000 > 0;
                        if(!inc)
                            arr.push(transac);
                        stop = stop || inc;
                      }
                });
            }catch(e){
                setTimeout(getpr, 1000);
                return;
            }
          	if(!stop){
              console.log(postData.params);
              start += 1000;
              postData.params[1] = start;
              console.log(postData.params);
              xhttp.open("POST", "https://" + localStorage["cfg.hive_node"], true);
              xhttp.send(JSON.stringify(postData));
              return;
            }
           	console.table(arr);
          	console.log(stop);
          	arr.forEach((item)=>{
              try{
                let jsondata = JSON.parse(item.memo);
                console.log(jsondata);
                if(jsondata.id !== "ht_add")
                 	throw new Error('not a Hivetasks Add');
                let _expire;
                let d = new Date(item.timestamp + ".000Z");
                _expire = d.valueOf() + item.amount.split(" ")[0] * 6e7;
                let add = {
                  author: 	jsondata.author,
                  permlink:	jsondata.permlink,
                  image:		jsondata.image,
                  expire:		_expire	
                };
                validAdds.push(add);
               	console.log(add);
              }catch(e){
//                  console.log(e);
              }
            });
            prList =     validAdds;        
            return;
        }
        return;
    };
    xhttp.onreadystatechange = next;
    //xhttp.onerror = next;
    xhttp.open("POST", "https://" + localStorage["cfg.hive_node"], true);
    xhttp.send(JSON.stringify(postData));
};

setTimeout(getpr, 1000);
setTimeout(setPr, 1000);
setTimeout(setPr, 2000);
setTimeout(setPr, 3000);
setTimeout(setPr, 4000);

setInterval(getpr, 600000);
setInterval(setPr, 40000);

