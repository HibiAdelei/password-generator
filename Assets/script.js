// variable declaration, mostly for password characters and function inits


var generateBtn = document.querySelector('#generate');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var nums = "0987654321";
var specials = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//pass length
var passlength;
//var to check if user wants uppercase characters in their password
var upCheck;
//var to check if user wants lowercase characters in their password
var lowCheck;
//var to check if user wants special characters in their password
var specialsCheck;
//var to check if user wants numbers in their password
var numCheck;




// prompt to determine password length (between 8-128 characters)

function lengthCheck() {

  passLength = prompt("How many characters would you like to include in your password? \nInput must be between 8 and 128.");

if (passLength > 128) { 
  alert ("Input must be a number between 8 and 128.");
  lengthCheck();
}
else if (passLength < 8) {
  alert ("Input must be a number between 8 and 128."); 
  lengthCheck();
}
else if (isNaN(passLength)){
  alert ("Input must be a number between 8 and 128."); 
  lengthCheck();
}

return passLength;
}

// prompt to check if user wants lowercase characters
function lowerCheck() {
  lowcheck = prompt("Would you like to include lowercase characters in your password? (type yes or no)");
    lowcheck = lowcheck.toLowerCase();

    if (lowcheck === null || lowcheck === "") {
      alert("Please input yes or no.");
      lowerCheck();

    } else if (lowcheck === "yes" || lowcheck ==="y") {
      lowcheck = true;
      return lowcheck;

    } else if (lowcheck === "no" || lowcheck ==="n") {
      lowcheck = false;
      return lowcheck;

    } 
      else {
      alert("Please input yes or no.");
      lowerCheck();
    }
    return lowcheck;
}

//prompt to check if user wants uppercase characters
function upperCheck() {
  upcheck = prompt("Would you like to include uppercase characters in your password? (type yes or no)");
    upcheck = upcheck.toLowerCase();

    if (upcheck === null || upcheck === "") {
      alert("Please input yes or no.");
      upperCheck();

    } else if (upcheck === "yes" || upcheck ==="y") {
      upcheck = true;
      return upcheck;

    } else if (upcheck === "no" || upcheck ==="n") {
      upcheck = false;
      return upcheck;

    } 
      else {
      alert("Please input yes or no.");
      upperCheck();
    }
    return upcheck;
}

//prompt to check if user wants special characters
function spCheck() {
  specialsCheck = prompt("Would you like to include special characters in your password? (type yes or no)");
    specialsCheck = specialsCheck.toLowerCase();

    if (specialsCheck === null || specialsCheck === "") {
      alert("Please input yes or no.");
      spCheck();

    } else if (specialsCheck === "yes" || specialsCheck === "y") {
      specialsCheck = true;
      return specialsCheck;

    } else if (specialsCheck === "no" || specialsCheck === "n") {
      specialsCheck = false;
      return specialsCheck;

    } 
      else {
      alert("Please answer yes or no.");
      spCheck();
    }
    return specialsCheck;
}

function numCheck() {
  numberCheck = prompt("Would you like to include numbers in your password? (type yes or no)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === "") {
      alert("Please input yes or no.");
      numCheck();

    } else if (numberCheck === "yes" || numberCheck === "y") {
      numberCheck = true;
      return numberCheck;

    } else if (numberCheck === "no" || numberCheck === "n") {
      numberCheck = false;
      return numberCheck;

    } 
      else {
      alert("Please answer yes or no.");
      numCheck();
    }
    return numberCheck;
}



//generates secure password
function generatePassword() {
 //runs each check function, then assembles a password based on which cases are true
lengthCheck();
upperCheck();
lowerCheck();
spCheck();
numCheck();

var passwordContent = "";
var passwordCharacters = lowercase;

if (upCheck && numberCheck && specialsCheck) {
  passwordCharacters += uppercase + nums + specials;

} else if (upCheck && numberCheck) {
  passwordCharacters += uppercase + nums;

} else if (numberCheck && specialsCheck) {
  passwordCharacters += nums + specials;

} else if (upCheck && specialsCheck) {
  passwordCharacters += uppercase + specials;

} else if (upCheck) {
  passwordCharacters += uppercase;

} else if(numberCheck) {
  passwordCharacters += nums;

} else if (specialsCheck) {
  passwordCharacters += specials;

} else {
  passwordCharacters === lowercaseChar;
}
  //randomises and shuffles characters
  for(var i = 0; i < passLength; i++) {
    passwordContent += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return passwordContent;

}



// write password to the #password input
function writePassword() {
  var generatedPass = "";
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Add event listener to generate button


generateBtn.addEventListener('click', writePassword);
