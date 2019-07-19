//sleep function if I ever need it
function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

var version = "v1.1"; //to more easily update each page
var year = 2019;
document.getElementById("version").innerHTML = version;
document.getElementById("year").innerHTML = year + " so far";

//will probs delete commented code below
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

//this code is for the little pop up if you enter without the hashtag in the url.
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

//to go to the 535 error page
if ((urlTest.search("omniverse")>-1) || (urlTest.search("universe")>-1) || (urlTest.search("void")>-1) || (urlTest.search("power")>-1) || (urlTest.search("absolute")>-1) || (urlTest.search("fsp")>-1)){
	window.location.replace("https://percycho.github.io/bbho/535.html");
}

//the light and dark mode! This is fairly easy.
//local storage is *like* cookies, except it only applies to that site.
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

//don't mind beneath here lol

window.addEventListener("keydown", game535, false);

var pos535 = document.getElementById("game535");
var ver535 = pos535.getBoundingClientRect().top; 
var hor535 = pos535.getBoundingClientRect().left;

function game535(event) {
	if (event.keyCode == "38") {
		ver535-=6;
		document.getElementById("game535").style.top = ver535 + "px";
	}
	if (event.keyCode == "40") {
		ver535+=6;
		document.getElementById("game535").style.top = ver535 + "px";
	}
	if (event.keyCode == "37") {
		hor535-=6;
		document.getElementById("game535").style.left = hor535 + "px";
	}
	if (event.keyCode == "39") {
		hor535+=6;
		document.getElementById("game535").style.left = hor535 + "px";
	}
}

var game535id = document.getElementById('game535');
var game535off = game535id.getBoundingClientRect();
var menuBBHOid = document.getElementById('menuBBHO');
var menuBBHOoff = menuBBHOid.getBoundingClientRect();

cross();

function cross(){
	game535id = document.getElementById('game535');
	game535off = game535id.getBoundingClientRect();
	if ((menuBBHOoff.top < game535off.top) && (menuBBHOoff.bottom > game535off.bottom) && (menuBBHOoff.left < game535off.left) && (menuBBHOoff.right > game535off.right)){
		document.getElementById('menuFSP').style.display = "inline";
	}
	else if ((menuBBHOoff.top > game535off.top) || (menuBBHOoff.bottom < game535off.bottom) || (menuBBHOoff.left > game535off.left) || (menuBBHOoff.right < game535off.right)){
		document.getElementById('menuFSP').style.display = "none";
	}
	setTimeout(cross,100);
}