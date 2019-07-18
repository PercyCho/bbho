function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

var version = "v1.0";
var year = 2019;
document.getElementById("version").innerHTML = version;
document.getElementById("year").innerHTML = year + " so far";

/*
var w = window.innerWidth;
var h = window.innerHeight;
var ratio = h-w;

setTimeout(function deviceCheck() {
	if (ratio > 0) {
		document.getElementById("mobilemessage").style.display = "block";
		document.getElementById("bsod").style.display = "none";
		document.getElementById("updating").style.display = "none";
	}
}, 20);
*/
//ehhh maybe not

function updateTop() {
	document.getElementById("updating").style.display = "none";
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(event) {
	if (event.keyCode == "56") {
		document.getElementById("updating").style.display = "block";
	}
}

function enterSite(event) {
	sleep(event);
	document.getElementById("updatingscreen").style.display = "none";
}

var urlTest = window.location.href;

var lastChar = urlTest.slice(-1);

if (lastChar === "#") {
	enterSite(0);
}

if ((urlTest.search("omniverse")>-1) || (urlTest.search("universe")>-1) || (urlTest.search("void")>-1) || (urlTest.search("power")>-1) || (urlTest.search("absolute")>-1)){
	window.location.replace("https://percycho.github.io/bbho/535.html");
}

let mode;
mode = localStorage.getItem('mode');

if (mode === 'light'){
	lightMode();
}else{
	darkMode();
}

function darkMode() {
	document.getElementById("title").style.color = "white";
	document.body.style.backgroundColor = "#040040";
	document.getElementById("hometext").style.color = "lightgray";
	var x = document.getElementsByClassName("hometext");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "lightgray";
	}
	document.getElementById("subtitle").style.color = "lightgray";
	document.getElementById("footer").style.color = "lightgray";
	document.getElementById("menu").style.color = "lightgray";
	//code...
	document.getElementById("darkmodebtn").style.color = "black";
	document.getElementById("darkmodebtn").style.backgroundColor = "white";
	document.getElementById("darkmodebtn").onclick = lightMode;
	document.getElementById("darkmodebtn").innerHTML = "Light Mode";
	localStorage.setItem('mode', 'dark');
	mode = localStorage.getItem('mode');
}

function lightMode() {
	document.getElementById("title").style.color = "black";
	document.body.style.backgroundColor = "lightblue";
	document.getElementById("hometext").style.color = "black";
	var x = document.getElementsByClassName("hometext");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.color = "black";
	}
	document.getElementById("subtitle").style.color = "black";
	document.getElementById("footer").style.color = "black";
	document.getElementById("menu").style.color = "black";
	//more code...
	document.getElementById("darkmodebtn").style.color = "white";
	document.getElementById("darkmodebtn").style.backgroundColor = "black";
	document.getElementById("darkmodebtn").onclick = darkMode;
	document.getElementById("darkmodebtn").innerHTML = "Dark Mode";
	localStorage.setItem('mode', 'light');
	mode = localStorage.getItem('mode');
}