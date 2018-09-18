/* Get needed elements */
const player = document.querySelector('.player'),
    video = document.querySelector('.viewer'),
    progress = document.querySelector('.progress'),
    progressBar = document.querySelector('.progress__filled'),
    toggle = document.querySelector('.toggle'),
    skipButtons = document.querySelectorAll('[data-skip]'),
    ranges = document.querySelectorAll('.player__slider');

let mouseDown = false;

/* Build functions */

function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    
    video[method]();
}

function updateButton(){
    toggle.textContent = this.paused ? '►' : '❚ ❚';;
}

function skip(){
    const skipStep = this.dataset.skip;
    video.currentTime += parseFloat(skipStep);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const prog = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${prog}%`;
}

function scrub(e){
    const sTime = (e.offsetX / progress.offsetWidth) * video.duration;

     video.currentTime = sTime;
}

/* Set event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => btn.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mouseMove', () => mouseDown && handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousedown', (e) => mouseDown = false));
// ranges.forEach(range => range.addEventListener('mouseup', (e) => mouseDown = true));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);