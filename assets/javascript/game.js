$(document).ready(function() {

    // Generate number to be guessed
    var randNum = Math.floor(Math.random() * 102 + 19)

    // Display number to be guessed
    $("#targetValue").text(randNum);

    // Crystal Values
    var blueCrystal = Math.floor(Math.random() * 12 + 1)
    var quartzCrystal = Math.floor(Math.random() * 12 + 1)
    var purpleCrystal = Math.floor(Math.random() * 12 + 1)
    var greenCrystal = Math.floor(Math.random() * 12 + 1)

    // Scoreboard
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#playerTotal").text(playerTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);


    // Reset game
    function reset() {
        randNum = Math.floor(Math.random() * 101 + 19)
        blueCrystal = Math.floor(Math.random() * 12 + 1)
        quartzCrystal = Math.floor(Math.random() * 12 + 1)
        purpleCrystal = Math.floor(Math.random() * 12 + 1)
        greenCrystal = Math.floor(Math.random() * 12 + 1)
        playerTotal = 0;
        $("#userTotal").text(playerTotal);
        $("#targetValue").text(randNum);

    }

    // Display wins
    function win() {
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // Display losses
    function loss() {
        losses++;
        $('#losses').text(losses);
        reset()
    }

    // Blue Crystal
    $("#blue").on ('click', function() {
        playerTotal = playerTotal + blueCrystal;
        $("#playerTotal").text(playerTotal)
        if (playerTotal == randNum) {
            win();
        } 
        else if (playerTotal > randNum) {
            loss();
        }
    })
    // Quartz Crystal
    $("#quartz").on ('click', function() {
        playerTotal = playerTotal + quartzCrystal;
        $("#playerTotal").text(playerTotal)
        if (playerTotal == randNum) {
            win();
        } 
        else if (playerTotal > randNum) {
            loss();
        }
    })
    // Purple Crystal
    $("#purple").on ('click', function() {
        playerTotal = playerTotal + purpleCrystal;
        $("#playerTotal").text(playerTotal)
        if (playerTotal == randNum) {
            win();
        } 
        else if (playerTotal > randNum) {
            loss();
        }
    })
    // Green Crystal
    $("#green").on ('click', function() {
        playerTotal = playerTotal + greenCrystal;
        $("#playerTotal").text(playerTotal)
        if (playerTotal == randNum) {
            win();
        } 
        else if (playerTotal > randNum) {
            loss();
        }
    }
    
})