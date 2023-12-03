let gamePattern = [];

let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequance() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
    
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);


  return gamePattern;
};


console.log(gamePattern);


function playSound(array) {
  if (array == "red") {
    let redSound = new Audio("sounds/red.mp3");
    redSound.play();
  } else if (array == "green") {
    let greenSound = new Audio("sounds/green.mp3");
    greenSound.play();
  } else if (array == "blue") {
    let blueSound = new Audio("sounds/blue.mp3");
    blueSound.play();
  } else if (array == "yellow") {
    let yellowSound = new Audio("sounds/yellow.mp3");
    yellowSound.play();
  } else {
    console.log(array);
  }
}




$('.btn').on('click', function(){

  let userChosenColour = $(this).attr("id")
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern); 

})

