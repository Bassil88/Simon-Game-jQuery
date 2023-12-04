let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

    playSound(randomChosenColour)

  gamePattern.push(randomChosenColour);

  return gamePattern;
}

console.log(gamePattern);

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userClickedPattern)
  console.log(userClickedPattern);
});

function playSound(name){
  let playSound = new Audio("sounds/" + name + ".mp3");
  playSound.play();
}
