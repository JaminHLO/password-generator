// Assignment code here

//define global variables for password characteristics
// var pwLength = 0 // must be between 8 and 128 characters
// var pwUpper = false;
// var pwLower = false;
// var pwNumeric = false;
// var pwSpecial = false;
var passwordInfo = {pwLength: 0, pwLower: false, pwUpper: false, 
  pwNumeric: false, pwSpecial: false
};

console.log(passwordInfo);

function generatePassword(){

  //collect valid password length
  passwordInfo.pwLength = this.prompt("How long should the password be? \n(Must be between 8 and 128 characters)");
  if (passwordInfo.pwLength < 8 || passwordInfo.pwLength > 128) {
    this.alert ("Error: Password must be between 8 and 128 characters in length");
    return;
  }

  //confirm whether user would like lowercase
  passwordInfo.pwLower = this.confirm("May the password include lowercase letters?");

  //confirm whether user would like uppercase
  passwordInfo.pwUpper = this.confirm("May the password include uppercase letters?");

  //confirm whether user would like numeric
  passwordInfo.pwNumeric = this.confirm("May the password include numbers?");

  //confirm whether user would like special characters
  passwordInfo.pwSpecial = this.confirm("May the password include special characters?");

  //make sure at least one type is selected
  if (passwordInfo.pwLower === false && 
    passwordInfo.pwUpper === false &&
    passwordInfo.pwNumeric === false &&
    passwordInfo.pwSpecial === false ) {
    this.alert ("Error: Password must include at least one of the following types: \nLowercase, Uppercase, Numeric, or Special");
    return;
  }
  
  return(console.log(passwordInfo));
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
