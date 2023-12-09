let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 0;

let startedGame = false;

$(document).keypress(() => {
  if (!startedGame) {
    $("#level-title").html(`Level: ${level}`);
    nextSequence();
    startedGame = true;
  }
});

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkTheAnswer(userClickedPattern.length - 1);

  console.log("userClickedPattern", userClickedPattern);
});

function checkTheAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("good job man");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => nextSequence(), 1000);
    }
  } else {
    $("#level-title").html("Game Over<br> Press Any Key to Restart");
    playSound('wrong')
    $('body').addClass("game-over");
    setTimeout(() => $('body').removeClass("game-over"), 200);
    startOver()
    console.log('wrong guess!');
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  startedGame = false;
}

function nextSequence() {
  
  userClickedPattern = [];//now it is ready for the next level.
  level++;
  $("#level-title").html(`Level: ${level}`);

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);

  console.log("gamePattern", gamePattern);
  return gamePattern;
}

function playSound(name) {
  let playSound = new Audio("sounds/" + name + ".mp3");
  playSound.play();
}

function animatePress(currentColour) {
  let activeClick = $("." + currentColour);
  setTimeout(() => activeClick.removeClass("pressed"), 100);
  activeClick.addClass("pressed");
}


