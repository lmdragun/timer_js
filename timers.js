var start = document.querySelector("#start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");
var time = document.querySelector("#timer");
var seconds = 0;
var timerSeconds;

console.log(start);
console.log(pause);
console.log(reset);
console.log(time);
console.log(seconds);

// reset.addEventListener("click", function(event){
// 	setInterval(function(){
// 		seconds = 0;}, 1000);
// })
//
// start.addEventListener("click", function(event){
// 	setInterval(function() {
// 		seconds++;
// 		time.innerHTML = "Stop Watch: " + double(seconds%60);
// 	 }, 1000);
// })
//
// pause.addEventListener("click", function(event){
// 	setInterval(function() {
// 		time.innerHTML = "Stop Watch: " + double(seconds%60);
// 	 }, 1000);
// })


function startTime(event){
	timerSeconds = setInterval(function () {
	    document.getElementById("timer").innerHTML = double(++seconds % 60);
		}, 1000);
}

function resetTime(event){
	setTimeout(function () {
	    clearInterval(timerSeconds);
	}, 1000);
	seconds = -1;
}

function pauseTime(event){
	setTimeout(function () {
	    clearInterval(timerSeconds);
	}, 1000);
}


function double(value){
	var twoValues = value + "";
	if(twoValues.length < 2){
		return "0" + twoValues;
	}
	else{
		return twoValues;
	}
}

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);
