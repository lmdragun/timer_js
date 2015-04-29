var start = document.querySelector("#start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");
var time = document.querySelector("#timer");
var seconds = 0;
var timerSeconds;

function startTime(event){
	if(!timerSeconds){
		timerSeconds = setInterval(function () {
		    document.getElementById("timer").innerHTML = double(++seconds % 60);
			}, 1000);
	}
}

function resetTime(event){
	timerStop();
	seconds = 0;
	document.getElementById("timer").innerHTML = double(seconds);
}

function pauseTime(event){
	timerStop();
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

var timerStop = function(){ setTimeout(function () {
		clearInterval(timerSeconds);
}, 1000);}

start.addEventListener("click", startTime);
pause.addEventListener("click", pauseTime);
reset.addEventListener("click", resetTime);
