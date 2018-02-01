document.addEventListener('keydown', function(e){
    
    var key = e.key.toUpperCase().charCodeAt();
    var audioFile = document.querySelector(`audio[data-key="${key}"]`);
    var keyDiv = document.querySelector(`div[data-key="${key}"]`);

    if (keyDiv) {

        audioFile.currentTime = 0;
        keyDiv.classList.add('playing');
        audioFile.play();

        var keys = document.querySelectorAll('.key');

        keys.forEach(function(key){
            key.addEventListener('transitionend', function () {
                keyDiv.classList.remove('playing');
            });
        });

    }
});

