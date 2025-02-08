let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");
let music = document.querySelector("#music")
let forward = document.querySelector("#forward")




song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// ARRAY OF MUSICS

const musics = ["/media/better-day-186374.mp3", "/media/corporate-motivation-music-297445.mp3", '/media/creative-technology-showreel-241274.mp3', '/media/drive-breakbeat-173062.mp3', '/media/lofi-chill-music-297444.mp3', '/media/summer-memories-270159.mp3', '/media/vlog-music-beat-trailer-showreel-promo-background-intro-theme-274290.mp3', '/media/your-black-hoodie-background-hip-hop-music-for-video-vlog-30-second-296257.mp3']

console.log(music.src);

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

// FORWARD BUTTON FUNCTIONALTY



