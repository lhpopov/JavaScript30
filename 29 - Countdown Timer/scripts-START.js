const timerDisplay = document.querySelector('.display__time-left');
let timerIntervalId;

function timer(seconds){
	//clear interval if timer func is run again
	if(timerIntervalId){
		clearInterval(timerIntervalId);
	}

 	const now = Date.now(),
 		then = now + (seconds * 1000);
 	
	displayTimeLeft(seconds);
	
 	timerIntervalId = setInterval(() => {
 		const secondsLeft = Math.round((then - Date.now()) / 1000);

 		if(seconds < 0){
 			clearInterval(intervalId);
 			return;
 		}

 		displayTimeLeft(secondsLeft);
 	}, 1000);
}

function displayTimeLeft(seconds){
	const mins = Math.floor(seconds / 60),
		remainingSecs = seconds % 60,
		display = `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;

	timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp);
}