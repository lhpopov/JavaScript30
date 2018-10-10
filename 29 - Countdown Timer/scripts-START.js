const timerDisplay = document.querySelector('.display__time-left'),
	endTimerDisplay = document.querySelector('.display__end-time'),
	buttons = document.querySelectorAll('[data-time]');
let timerIntervalId;

function timer(seconds){
	//clear interval if timer func is run again
	if(timerIntervalId){
		clearInterval(timerIntervalId);
	}

 	const now = Date.now(),
 		then = now + (seconds * 1000);
 	
	displayTimeLeft(seconds);
	displayEndTime(then);
	
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
	document.title = display;
}

function displayEndTime(timestamp){
	const end = new Date(timestamp),
		hours = end.getHours(),
		mins = end.getMinutes();
	
	endTimerDisplay.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer(){
	const seconds = parseInt(this.dataset.time);

	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
});