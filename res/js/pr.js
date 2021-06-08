var setpr = function (data) {
    let panel = document.getElementById("panelTopAd");
	if(panel !== null && Object.keys(data).length !== 3){
		let a   = panel.children.length > 0 ? panel.children[0] : document.createElement("a");
		let img = a.children.length > 0     ? a.children[0]     : document.createElement("img");
		img.classList.add("adImage");
		img.classList.add("hoverImage");
		img.style.height = "inherit";
		img.style.width = "inherit";
		img.src = "/witness.png"
		a.style.height = "100%";
		a.style.width = "100%";
		a.target="";
		a.href = (hive_keychain !== null) ? "javascript:hive_keychain.requestWitnessVote(localStorage.account,'fernandosoder',true);" : "https://hivesigner.com/sign/account-witness-vote?witness=fernandosoder&approve=1";
		if(a.children.length === 0)
			a.appendChild(img);
		if(panel.children.length === 0)
			panel.appendChild(a);
		setTimeout(getpr, 5000);
		return;
	}
    if (panel === null || Object.keys(data).length !== 3) {
	    setTimeout(getpr, 5000);
        return;
    }
    let a = panel.children.length > 0 ? panel.children[0] : document.createElement("a");
    let img;
    if (panel.children.length > 0) {
        if (panel.children[0].children.length > 0) {
            img = panel.children[0].children[0];
        } else {
            img = document.createElement("img");
            img.classList.add("adImage");
            img.classList.add("hoverImage");
            img.style.height = "inherit";
            img.style.width = "inherit";
            a.appendChild(img);
        }
    } else {
        img = document.createElement("img");
        img.classList.add("adImage");
        img.classList.add("hoverImage");
        img.style.height = "inherit";
        img.style.width = "inherit";
        a.style.height = "100%";
        a.style.width = "100%";
        a.target="_blank";
        a.appendChild(img);
        panel.appendChild(a);
    }
    if (img.src != data.img)
        img.src = data.img;
    
    let link = (localStorage['cfg.hive_platform'] == undefined ? "http://hive.blog" : localStorage['cfg.hive_platform']) + "/@" + data.user + "/" +data.permlink;
    if (a.href != data.link)
        a.href = link;
    a.classList.add("adLink");
    setTimeout(getpr, 10000);
};

var getpr = function () {
    var xhttp = new XMLHttpRequest();
    let next = function () {
        if (this.readyState === 4 && this.status === 200) {
            let res = JSON.parse(this.responseText);
			console.log("foi certo");
            setpr(res);
			return;
        }
		return;
    };
	xhttp.onreadystatechange = next;
	//xhttp.onerror = next;
    xhttp.open("GET", "/pr", true);
    xhttp.send();
}

getpr();