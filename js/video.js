var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.getElementById("player1");
	video.autoplay=false;
	video.loop=false;
	video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video!");
	video.play();
	var volume=document.getElementById("slider").value;
	document.getElementById("volume").innerHTML=volume+"%";
});

document.querySelector(#pause).addEventListener("click", function(){
	console.log("pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down");
	video.playbackRate *= 0.9;
	console.log("video playback rate" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed quick");
	video.playbackRate /= 0.9;
	console.log("video playback rate" + video.playbackRate);
});