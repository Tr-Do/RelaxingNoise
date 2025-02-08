document.querySelectorAll('button').forEach(button => {
    const sound = new Audio(`sound/${button.id}.mp3`);
    sound.loop = true;
    let isPlaying = false;

    button.addEventListener('click', function () {
        if (isPlaying) {
            button.style.backgroundColor = '#8ecae6';
            sound.pause();
            sound.currentTime = 0;
        } else {
            button.style.backgroundColor = '#669bbc';
            sound.play();
        }
        isPlaying = !isPlaying;
    });

    const volumeBar = document.getElementById(`${button.id}V`);
    volumeBar.addEventListener('input', function () {
        sound.volume = volumeBar.value;
    });
});