$(document).ready(function() {

    // define generic variables.
    var wins = 0;
    var losses = 0;
    var randomNumber = 0;
    var gemValue = 0;
    var totalScore = 0;
    var gameStart = false;

    // variable to hold values for each gem.
    var gem = {
        redGem: {
            value: 0
        },
        blueGem: {
            value: 0
        },
        yellowGem: {
            value: 0
        },
        greenGem: {
            value: 0
        },
    }
    
    
    /* A function to create the random number the users need to match, and the
    values of each gem button */
    function createRandomNumbers(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    };

    // function that sets gem values and the random number.
    function setValues() {
        // assigning a random value between 1 and 12 to each color gem value.
        gem.redGem.value = createRandomNumbers(1, 12);
        gem.blueGem.value = createRandomNumbers(1, 12);
        gem.yellowGem.value = createRandomNumbers(1, 12);
        gem.greenGem.value = createRandomNumbers(1, 12);

        //console.log the values for trouble shooting purposes.
        console.log("Red gem value: " + gem.redGem.value);
        console.log("Blue gem value: " + gem.blueGem.value);
        console.log("Yellow gem value: " + gem.yellowGem.value);
        console.log("Green gem value: " + gem.greenGem.value);

        // assinging a random number between 19 and 120 to the random number variable.
        randomNumber = createRandomNumbers(19, 120);
        console.log("Number to hit: " + randomNumber);

        // then we show the random number on the page for the user to see.
        $("#random-number").text("Number to hit: " + randomNumber);


    };

});