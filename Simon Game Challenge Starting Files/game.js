var gamePattern = [];
var userClick=[];
buttonColours = ["red", "blue", "green", "yellow"];
var level =0;
var started=false;


function nextSequence() {
    userClick=[];
    level++;
    $("#level-title").text("Level " + level);
     randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   
}

var randomChosenColour



function handleButtonClick(color) {
    $("#" + color).addClass('pressed')
    userClick.push(color);
    setTimeout(() => {
        $("#" + color).removeClass('pressed')
    }, 200);
 console.log("coklor "+userClick)
}


buttonColours.forEach(function(color) {
    $("#" + color).click(function() {
        handleButtonClick(color);
        nextSequence() ;
       console.log(gamePattern);
       equalsCheck(gamePattern,userClick);
    });
});

$(document).on("keypress",function (Event){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;

    }
})

const compareArrays = (gamePattern, userClick) => {
    if (gamePattern.length !== userClick.length) return false;
    else {
      // Comparing each element of your array
      for (var i = 0; i < gamePattern.length; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  };



buttonColours.forEach(function(color) {
    $("#" + color).click(function() {
        switch(color){
            case "green":
                var green= new Audio("sounds/green.mp3");
                green.play();
                break;
    
    
                case "red":
                    var red= new Audio("sounds/red.mp3");
                    red.play();
                    break;
    
    
                    case "yellow":
                        var yellow= new Audio("sounds/yellow.mp3");
                        yellow.play();
                        break;
    
    
                        case "blue":
                            var blue= new Audio("sounds/blue.mp3");
                            blue.play();
                            break;
    
                default:
                    
        }
    });
    })

    function equalsCheck(gamePattern, userClick) {
        // Check if lengths match
        if (gamePattern.length !== userClick.length) {
            return false;
        } else {
            // Compare each element of the arrays
            for (let i = 0; i < gamePattern.length; i++) {
                if (gamePattern[i] !== userClick[i]) {
                    // If elements don't match, return false
                    return false;
                }
            }
            // If all elements match, return true
            return true;
        }
    }



    $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    setTimeout(() => {
        $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}, 200);

$('body').addClass("game-over");