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
  return myTimeOutSequence;
});
function clearingUserSelectedColorArr() {
  if (gamePattern.length == 0) {
    userClickedPattern.pop();
    setTimeout(nextSequance, 1000);
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

let level = 0;
$("body").on("keydown", (e) => {
  nextSequance(e.key);
  level++;
  $("#level-title").html(`Level: ${level}`);
});

function checkAnswer(currentLevel) {
  //for(let i = 0; i < currentLevel.length; i++)
  if (currentLevel !== gamePattern[0]) {
    alert("Wrong");

    /*     let timeOutId = setTimeout(()=>{
      $('#level-title').html('Correct!')
      
    },200)
    clearTimeout(timeOutId) */
  } else {
    $("#level-title").html("Correct!");
    console.log("userClickedPattern", userClickedPattern);
  }
}
