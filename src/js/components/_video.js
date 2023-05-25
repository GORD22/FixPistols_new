const videoBlocks = document.querySelectorAll(".video-block");
const video = document.querySelectorAll(".video-block__video");
const playBtns = document.querySelectorAll(".btn-play");


for (let i = 0; i < playBtns.length; i++) {
    playBtns[i].addEventListener('click', () => {
        if (video[i].paused) {
            videoBlocks[i].classList.add('video-block_played');
            video[i].play();
            video[i].controls = true;
            playBtns[i].classList.add('btn-play_played');
        }
    })
}