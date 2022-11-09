var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.getElementById("player1");
	console.log(video);
	video.autoplay=false;
	video.loop=false;
	// video.load();

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var volume=document.getElementById("slider").value;
	document.querySelector("#volume").innerHTML=volume+"%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("video playback rate" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("video playback rate" + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function(){
 	console.log("Skip Ahead");
	if(video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
		video.play()	
	}
	else {
		video.currentTime += 10;
	    console.log(video.currentTime);
	}
});

// mute
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute");
	if (video.muted === false) {    
		video.muted = true;
		document.getElementById("mute").innerHTML= "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML= "Mute";
	};
});
// volume slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("Change volume", video.volume);
	video.volume = this.value/100;
	console.log("New volume", video.volume);
	document.getElementById("volume").innerHTML= video.volume*100+"%";
});

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
});