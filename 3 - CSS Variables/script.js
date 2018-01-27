const inputs = document.querySelectorAll('.controls input');

function processChange() {
    // Get data-sizing, or an empty string if no suffix is needed (color picker)
    console.log(this);
    var suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('mousemove', processChange));
inputs.forEach(input => input.addEventListener('change', processChange));