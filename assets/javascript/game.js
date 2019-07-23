$(document).ready(function() {

    // define generic variables.
    var wins = 0;
    var losses = 0;
    var randomNumber = 0;
    var totalScore = 0;
    var gameStart = false;

    // variable to hold values for each gem.
    var gem = {
        redGem: 0,
        blueGem: 0,
        yellowGem: 0,
        greenGem: 0,
    }
    
    
    /* A function to create the random number the users need to match, and the
    values of each gem button */
    function createRandomNumbers(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    };

    // function that sets gem values and the random number.
    function setValues() {
        // assigning a random value between 1 and 12 to each color gem value.
        gem.redGem = createRandomNumbers(1, 12);
        gem.blueGem = createRandomNumbers(1, 12);
        gem.yellowGem = createRandomNumbers(1, 12);
        gem.greenGem = createRandomNumbers(1, 12);

        //console.log the values for trouble shooting purposes.
        console.log("Red gem value: " + gem.redGem);
        console.log("Blue gem value: " + gem.blueGem);
        console.log("Yellow gem value: " + gem.yellowGem);
        console.log("Green gem value: " + gem.greenGem);

        // assinging a random number between 19 and 120 to the random number variable.
        randomNumber = createRandomNumbers(19, 120);
        console.log("Number to hit: " + randomNumber);

        // then we show the random number on the page for the user to see.
        $("#random-number").text("Number to hit: " + randomNumber);


    };

    // a function for what happens when the user wins or loses.
    function outCome() {
        if (totalScore === randomNumber) {
            wins++;
            gameStart = false;
            totalScore = 0;
            $("#wins").text("Wins: " + wins);
            $("#random-number").text("WINNER");
            console.log("Total score: " + totalScore);
        };

        if (totalScore > randomNumber) {
            losses++;
            gameStart = false;
            totalScore = 0;
            $("#losses").text("Losses: " + losses);
            $("#random-number").text("LOSER");
            console.log("Total score: " + totalScore);
        };

        $("#total-score").text("Total Score: " + totalScore);
    };

    // the "on click" functions the 4 different gem buttons on the page.
    $("#red-gem").on("click", function() {
        
        if (gameStart === false) {
            // if the game is set to false, a click on any button will swtich it to true and set the values.
            gameStart = true;
            setValues();

            // then add the value of the button to total score and check the outcome.
            totalScore += gem.redGem;
            outCome();

        }

        // else the game has already been started there is no need to set new values or switching the game to game start to true.
        // then check outcome again to see if the game is over.
        else {
            totalScore += gem.redGem;
            outCome();

        };

        $("#gem-points").text("Gem Value: " + gem.redGem);


    });

    // now we can just make 3 more of the exact same on click function for each button.

    $("#blue-gem").on("click", function() {

        if (gameStart === false) {

            gameStart = true;
            setValues();

            totalScore += gem.blueGem;
            outCome();
        }

        else {
            totalScore += gem.blueGem;
            outCome();
        };

        $("#gem-points").text("Gem Value: " + gem.blueGem);

    });

    $("#yellow-gem").on("click", function() {

        if (gameStart === false) {

            gameStart = true;
            setValues();

            totalScore += gem.yellowGem;
            outCome();
        }

        else {
            totalScore += gem.yellowGem;
            outCome();
        };

        $("#gem-points").text("Gem Value: " + gem.yellowGem);

    });

    $("#green-gem").on("click", function() {

        if (gameStart === false) {

            gameStart = true;
            setValues();

            totalScore += gem.greenGem;
            outCome();
        }

        else {
            totalScore += gem.greenGem;
            outCome();
        };

        $("#gem-points").text("Gem Value: " + gem.greenGem);

    });

});