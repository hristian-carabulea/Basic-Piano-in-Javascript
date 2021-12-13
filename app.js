// v. 2021-12-13

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // console.log(this.innerHTML);
    
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "s":
        var audio1 = new Audio("sounds/1_Do_C3.mp3")
        audio1.play();
        break;

      case "d":
        var audio2 = new Audio("sounds/2_Re_D3.mp3")
        audio2.play();
        break;

      case "f":
        var audio3 = new Audio("sounds/3_Mi_E3.mp3")
        audio3.play();        
        break;
        
      case "g":
        var audio4 = new Audio("sounds/4_Fa_F3.mp3")
        audio4.play();
        break;

      case "h":
        var audio5 = new Audio("sounds/5_Sol_G3.mp3")
        audio5.play();
        break;

      case "j":
        var audio6 = new Audio("sounds/6_La_A3.mp3")
        audio6.play();

        break;

      case "k":
        var audio7 = new Audio("sounds/7_Si_B3.mp3")
        audio7.play();
        break;

      case "l":
        var audio8 = new Audio("sounds/8_Do2_C4.mp3")
        audio8.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  
  });
  
}

// event keypress does not exist any longer
document.addEventListener("keydown", function(event) { 
  console.log(event.code);
  // alert("Key was pressed" + key)
  makeSound(event.code);

});

function makeSound(key) {

  switch (key) {
    case "KeyS":
      var audio1 = new Audio("sounds/1_Do_C3.mp3")
      audio1.play();
      break;

    case "KeyD":
      var audio2 = new Audio("sounds/2_Re_D3.mp3")
      audio2.play();
      break;

    case "KeyF":
      var audio3 = new Audio("sounds/3_Mi_E3.mp3")
      audio3.play();        
      break;
      
    case "KeyG":
      var audio4 = new Audio("sounds/4_Fa_F3.mp3")
      audio4.play();
      break;

    case "KeyH":
      var audio5 = new Audio("sounds/5_Sol_G3.mp3")
      audio5.play();
      break;

    case "KeyJ":
      var audio6 = new Audio("sounds/6_La_A3.mp3")
      audio6.play();

      break;

    case "KeyK":
      var audio7 = new Audio("sounds/7_Si_B3.mp3")
      audio7.play();
      break;

    case "KeyL":
      var audio8 = new Audio("sounds/8_Do2_C4.mp3")
      audio8.play();
      break;

    default:
      console.log(key);
  }

}