let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let level = 1;


function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

    $("#level-title").html(`Level: ${level}`);
  $("body").removeClass('game-over');



  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);

  console.log("gamePattern", gamePattern);
  return gamePattern;
}

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern[0]);
  gamePattern.pop();
  clearingUserSelectedColorArr();

  console.log("userClickedPattern", userClickedPattern);
  // return myTimeOutSequence;
});

function clearingUserSelectedColorArr() {
  if (gamePattern.length == 0) {
    userClickedPattern.pop();
    let nextSequanceHandler = setTimeout(nextSequance, 1000);
    nextSequanceHandler;
  }
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


$("body").on("keydown", (e) => {
  nextSequance(e.key);
});

function bodyFlash(className) {
  $("body").addClass(className);
  setTimeout($(className).removeClass(className), 200);
}
function checkAnswer(currentLevel) {
  if (currentLevel !== gamePattern[0]) {
    startOver()
    
  } else {
    console.log("Success!");
    level++;
    
    
    console.log("userClickedPattern", userClickedPattern);
  }
}

function startOver(){
  let wrongClicked = new Audio("sounds/wrong.mp3");
  wrongClicked.play();
  
  $("#level-title").html("Game Over,<br> Press Any Key to Restart");
  
  level = 1;
  gamePattern.length = 0;
  userClickedPattern.length = 0;
  $("body").addClass('game-over');
  clearTimeout(nextSequanceHandler);
}
