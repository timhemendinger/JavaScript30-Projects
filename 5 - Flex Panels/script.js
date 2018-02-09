var panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', function(){
        this.classList.toggle('open');
    });
});

panels.forEach(panel => {
    panel.addEventListener('transitionend', function (evt) {
        /* Only toggle on the event fire containing flex */
        if (evt.propertyName.includes('flex')) {
            this.classList.toggle('open-text');
        }
    });
});