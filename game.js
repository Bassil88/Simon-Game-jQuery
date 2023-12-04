let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);

  return gamePattern;
}

console.log(gamePattern);

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  console.log(userClickedPattern);
});

function playSound(name) {
  let playSound = new Audio("sounds/" + name + ".mp3");
  playSound.play();
}

function animatePress(currentColour) {
  let activeClick = $("." + currentColour);
  setTimeout(() => activeClick.removeClass("pressed"), 100);
  activeClick.addClass("pressed");
}
