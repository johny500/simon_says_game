var gamePattern = [];
var userClick=[];
buttonColours = ["red", "blue", "green", "yellow"];
var level =0;
var started=false;


function nextSequence() {
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
       console.log(gamePattern);
      

if (gamePattern.length==userClick.length){
       if(equalsCheck(gamePattern,userClick)){
        userClick=[];
        
       }
       else {
        gamePattern=[];
        userClick=[];
        level=0;
        $('body').addClass("game-over");
        setTimeout(() => {
            $('body').removeClass("game-over")
        }, 500);
       }
      nextSequence();
    }
    else{
        for(var i=0; i<userClick.length; i++){
            if(userClick[i]!==gamePattern[i]){
                gamePattern=[];
                userClick=[];
                started=false;
                level=0;
                $('body').addClass("game-over");
                setTimeout(() => {
                    $('body').removeClass("game-over")
                    $("#level-title").text("Game Over! Press any key to restart.");
                }, 500);
                var failed= new Audio("sounds/wrong.mp3");
                failed.play();
                break;
            }
        }
    }
    });
    
});

$(document).on("keypress",function (Event){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started=true;

    }
})




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