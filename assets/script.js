// Assignment code here

//define global variable for password characteristics
var passwordInfo = {pwLength: 0, pwLower: false, pwUpper: false, 
  pwNumeric: false, pwSpecial: false
};

console.log(passwordInfo);

//collect user password specifications
function collectPasswordSpecs (){
  //collect valid password length
  passwordInfo.pwLength = this.prompt("How long should the password be? \n(Must be between 8 and 128 characters)");
  if (passwordInfo.pwLength < 8 || passwordInfo.pwLength > 128) {
    this.alert ("Error: Password must be between 8 and 128 characters in length");
    return false;
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
    return false;
  }
  return(true);
}


function generatePassword(){
  console.log(passwordInfo);
  var pwCharList = '';
  var passwordFinished = '';
  if (passwordInfo.pwLower === true) {
    pwCharList = pwCharList.concat('abcdefghijklmnopqrstuvwxyz');
    // console.log(pwCharList);
  }
  if (passwordInfo.pwUpper === true) {
    pwCharList = pwCharList.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    // console.log(pwCharList);
  }
  if (passwordInfo.pwNumeric === true) {
    pwCharList = pwCharList.concat('1234567890');
    // console.log(pwCharList);
  }
  if (passwordInfo.pwSpecial === true) {
    pwCharList = pwCharList.concat('!#$%&*+-<=>?@^~');
    //  console.log(pwCharList);
  }
  console.log("Chars:", pwCharList, "\nLength of Possibles:", pwCharList.length);
  
  //generate random number with user defined length
  for (i=0; i<passwordInfo.pwLength; i++) {
    // Get random index from string of character possibilities (pwCharList)
    var index = Math.floor(Math.random() * pwCharList.length);
    // add this random possible character to our password
    passwordFinished = passwordFinished.concat(pwCharList[index]);
  }
  //return our finished password string
  console.log(passwordFinished);
  return (passwordFinished);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  if (!collectPasswordSpecs()){
    return;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
