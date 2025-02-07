document.querySelectorAll('button').forEach(button => {
    const sound = new Audio(`sound/${button.id}.mp3`);
    sound.loop = true;
    let isPlaying = false;

    button.addEventListener('click', function () {
        if (isPlaying) {
            sound.pause();
            sound.currentTime = 0;
            button.style.backgroundColor = '#8ecae6';
        } else {
            sound.play();
            button.style.backgroundColor = '#669bbc';
        }
        isPlaying = !isPlaying;
    });

    const volumeBar = document.getElementById(`${button.id}V`);
    volumeBar.addEventListener('input', function () {
        sound.volume = volumeBar.value;
    });
});