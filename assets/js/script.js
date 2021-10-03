// Assignment code here

function generatePassword() {
  var passwordLength = 0;
  var characterSet = "";
  var password = "";

  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = Number(window.prompt("Enter a password length between 8 and 128 characters:"));
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a valid password length.");
    }
  }

  while (characterSet.length == 0) {
    if (window.confirm("Include lowercase letters?")) characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (window.confirm("Include uppercase letters?")) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (window.confirm("Include numeric characters?")) characterSet += "0123456789";
    if (window.confirm("Include special characters?")) characterSet += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    if (characterSet.length == 0) window.alert("You must select at least on character type.");
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
