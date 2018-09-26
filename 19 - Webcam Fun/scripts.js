const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        })
        .catch(err => {
            console.error("Error while loading up device stream. Please reload.");
        });
}

function paintToCanvas(){
    const width = video.videoWidth,
        height = video.videoHeight;

    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const photoData = canvas.toDataURL('image/jpeg'),
        link = document.createElement('a');

    link.href = data;
    link.setAttribute('download', 'handsome');
    link.textContent = "Download photo";

    strip.insertBefore(link, strip.firstChild);
    console.log(data);
}

getVideo();

video.addEventListener('canplay', paintCanvas)