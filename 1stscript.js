document.addEventListener("DOMContentLoaded", () => {
    const counterValue = document.getElementById("value");
    const increaseButton = document.getElementById("incrs-btn");
    const decreaseButton = document.getElementById("dcrs-btn");
    const resetButton = document.getElementById("rst-btn");


    function updateCounter() {
        counterValue.textContent = count;
    }

    let count = 0;

    // ADDING EVENTS TO BUTTONS
    increaseButton.addEventListener("click", () => {
        count++;

        // UPDATING THE VALUE

        //  UNCOMMENT EITHER OF THE CODE GIVEN BELOW 
        // counterValue.textContent = count;
        updateCounter()
    });

    decreaseButton.addEventListener("click", () => {
        count--;

        // UPDATING THE VALUE

        //  UNCOMMENT EITHER OF THE CODE GIVEN BELOW 
        // counterValue.textContent = count;
        updateCounter()
    });

    resetButton.addEventListener("click", () => {
        count = 0;

        // UPDATING THE VALUE

        //  UNCOMMENT EITHER OF THE CODE GIVEN BELOW 
        // counterValue.textContent = count;
        updateCounter()

    });

});

