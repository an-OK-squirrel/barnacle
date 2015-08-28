// ==UserScript==
// @name Barnacle
// @description stickies GH issues
// @include https://github.com/*
// ==/UserScript==

console.log(3);

var locationStr = window.location.toString();
console.log(locationStr);
if (locationStr.endsWith("issues")) {

	var repo = locationStr.split("/")[4];
	var owner = locationStr.split("/")[3];
	console.log(owner, repo);
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();

	console.log("https://api.github.com/repos/"+owner+"/"+repo+"/issues?labels=sticky");
	xmlhttp.open("GET","https://api.github.com/repos/"+owner+"/"+repo+"/issues?labels=sticky",true);

	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		console.log(xmlhttp.responseText);

	};

}