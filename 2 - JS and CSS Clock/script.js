var allHands = document.querySelectorAll('.hand');
var hourHand = document.querySelector('.hour-hand');
var minHand = document.querySelector('.min-hand');
var secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    /*
    Remove CSS transition at zero seconds--prevents the flicker that the transition causes when the rotation degree point resets to zero. 
    */
    if (seconds === 0) {
        for(var x=0; x<allHands.length; x++) {
            allHands[x].classList.add('notransition');
        }
    } else {
        for(var x=0; x<allHands.length; x++) {
            allHands[x].classList.remove('notransition');
        }
    }

		// Ad 90 to account for the 90 degrees the hands are initially set at
    var secondRotation = ((seconds / 60) * 360) + 90;
    var minuteRotation = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    var hourRotation = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    
    // Originally did these with concatenation / variables
    // Switched for the ES6 template literals
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;

    // Display all hands now that they're correctly placed according to the current time -- only needed on the first pass
    for(var x=0; x<allHands.length; x++) {
        allHands[x].style.display = 'block';
    }
}

// Initially hide the hands of the clock
// don't want that jump from them all being at 12 to the current time
for(var x=0; x<allHands.length; x++) {
    allHands[x].style.display = 'none';
}

// Run setDate function every second to update the hands
setInterval(setDate, 1000);