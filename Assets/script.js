// variable declaration, mostly for password characters and function inits
var generateBtn = document.querySelector('#generate');
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var nums = "0987654321";
var specials = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//pass length
var length;
//function to check if user wants uppercase characters in their password
var upCheck;
//function to check if user wants lowercase characters in their password
var lowCheck;
//function to check if user wants numbers in their password
var specialsCheck;
//function to check if user wants special characters in their password


// promt to determine password length (between 8-128 characters)

function lengthCheck() {

  passLength = prompt("How many characters would you like to include in your password? Value must be between 8 and 128")

}



// prompt to check if user wants lowercase characters
function lowerCheck() {
  lowcheck = prompt("Would you like to include lowercase characters in your password? (type yes or no)");
    lowcheck = lowcheck.toLowerCase();

    if (lowcheck === null || lowcheck === ""){
      alert("Please input yes or no");
      lowerCheck();

    } else if (lowcheck === "yes" || lowcheck ==="y"){
      lowcheck = true;
      return lowcheck;

    } else if (lowcheck === "no" || lowcheck ==="n"){
      lowcheck = false;
      return lowcheck;

    } 
      else {
      alert("Please answer Y or N");
      lowerCheck();
    }
    return lowcheck;
}

function upperCheck() {
  upcheck = prompt("Would you like to include uppercase characters in your password? (type yes or no)");
    upcheck = upcheck.toLowerCase();

    if (upcheck === null || upcheck === "") {
      alert("Please input yes or no");
      upperCheck();

    } else if (upcheck === "yes" || upcheck ==="y") {
      upcheck = true;
      return upcheck;

    } else if (upcheck === "no" || upcheck ==="n") {
      upcheck = false;
      return upcheck;

    } 
      else {
      alert("Please answer Y or N");
      upperCheck();
    }
    return upcheck;
}


function spCheck() {
  specialsCheck = prompt("Would you like to include special characters in your password? (type yes or no)");
    specialsCheck = specialsCheck.toLowerCase();

    if (specialsCheck === null || specialsCheck === "") {
      alert("Please input yes or no");
      spCheck();

    } else if (specialsCheck === "yes" || specialsCheck === "y") {
      specialsCheck = true;
      return specialsCheck;

    } else if (specialsCheck === "no" || specialsCheck === "n") {
      specialsCheck = false;
      return specialsCheck;

    } 
      else {
      alert("Please answer Y or N");
      spCheck();
    }
    return specialsCheck;
}




// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button


generateBtn.addEventListener('click', writePassword());
