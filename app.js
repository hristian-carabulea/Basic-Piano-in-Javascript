// v. 2021-12-14a

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrumButtons; i++) {

  // mouse click functionality
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    // depending on the key pressed (defined through classes in CSS), 
    // create and play one of eight corresponding musical notes from do to do.
  });
  
}

// Key press functionality. Event "keypress" does not exist any longer. I am using "keydown" event.
// The callback function "function" returns the "keydown" respective event.
// And the event.code gets passed on to function makesound().
// See https://javascript.info/keyboard-events/ for more info.

document.addEventListener("keydown", 
                          function(event) { makeSound(event.code); }
                         );

// function receives the event.code (key) or an html class: "s", "d", "f", "g", "h", "j", "k", "l".
// I chose the keys for ease of use. And then plays a respective musical tone depending on the key received.
// I dowonloaded piano musical tones, and I cut the mp3 files to be shorter.
// I have no idea about piano stuff, and I found the notation to be very complicated!
// So I played the sounds and downloaded them by ear (https://github.com/fuhton/piano-mp3),
//   while listening to https://youtu.be/73ZZXyKS8X0. 😜👍

// I added animation as well. But since there are different codes returned by mouse and key pressed,
//    I am calling the animation from within the switch cases, which I group both mouse and click together.
 
function makeSound(key) {

  var valueEntered = "";

  switch (key) {
    case "KeyS":
    case "s":
      var audio1 = new Audio("sounds/1_Do_C3.mp3")
      audio1.play();
      valueEntered = "s";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyD":
    case "d":
      var audio2 = new Audio("sounds/2_Re_D3.mp3")
      audio2.play();
      valueEntered = "d";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyF":
    case "f":
      var audio3 = new Audio("sounds/3_Mi_E3.mp3")
      audio3.play();        
      valueEntered = "f";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;
      
    case "KeyG":
    case "g":
      var audio4 = new Audio("sounds/4_Fa_F3.mp3")
      audio4.play();
      valueEntered = "g";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyH":
    case "h":
      var audio5 = new Audio("sounds/5_Sol_G3.mp3")
      audio5.play();
      valueEntered = "h";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyJ":
    case "j":
      var audio6 = new Audio("sounds/6_La_A3.mp3")
      audio6.play();
      valueEntered = "j";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyK":
    case "k":
      var audio7 = new Audio("sounds/7_Si_B3.mp3")
      audio7.play();
      valueEntered = "k";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    case "KeyL":
    case "l":
      var audio8 = new Audio("sounds/8_Do2_C4.mp3")
      audio8.play();
      valueEntered = "l";
      // console.log("key in: " + key + ". Value passed on to buttonAnimation: " + valueEntered);
      buttonAnimation(valueEntered);
      break;

    default:
      console.log(valueEntered);
  }
}

function buttonAnimation(valueEntered) {
  var activeButton = document.querySelector("." + valueEntered);
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove ("pressed"); },
             170);
}