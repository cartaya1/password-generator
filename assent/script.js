//this are my Numeric characters
var NumCh = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//this are my lowercase characters
var lowCh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//this are my uppercase characters
var UpCh = ["A", "B", "C", "D", "E", "F", "G", "H", "i", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//this are my Weird characters
var WeCh = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "/", "<", ">", "?", "~"];
//----------------------------------------------------------------------------------------
var PWLength = prompt("Enter size of you Password 8-128");
console.log(PWLength)
//----------------------------------------------------------------------------------------
let x = PWLength;
var finalArray = [0];
var length = parseInt(x, 10)

// Validation of size of password
if (x > 7 && x < 129) {
    console.log("length: " + length);
    // Validation of Uppercase Characters
    var ContainUpCh = confirm("Click if need UpperCase Characters");
    console.log(ContainUpCh);
    if (ContainUpCh) {
        finalArray = finalArray.concat(UpCh)
        console.log(finalArray)
    }
    // Validation of Lowercase Characters
    var ContainlowCh = confirm("Click if need LowerCase Characters");
    console.log(ContainlowCh);
    if (ContainlowCh) {
        finalArray = finalArray.concat(lowCh)
        console.log(finalArray)
    }
    // Validation of Numeric Characters
    var ContainNumCh = confirm("Click if need Numeric Characters");
    console.log(ContainNumCh);
    if (ContainNumCh) {
        finalArray = finalArray.concat(NumCh)
        console.log(finalArray)
    }
    // Validation of Weird Characters
    var ContainWRCh = confirm("Click if need Special Characters");
    console.log(ContainWRCh);
    if (ContainWRCh) {
        finalArray = finalArray.concat(WeCh)
        console.log(finalArray)
    }
    //console.log(random number to add password);
finalPassword = ("");
for (let i = 0; i < x; i++) {
    var stringPassword = finalArray[Math.floor(Math.random() * finalArray.length)];
    finalPassword = (stringPassword + finalPassword)
    }  
}
else {
    alert("Invalid Password length")
    }    
//----------------------------------------------------------------------------------------
console.log(finalPassword);
//----------------------------------------------------------------------------------------
// Assignment Code
var generateBtn = document.querySelector("#generate");
//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);
}
//----------------------------------------------------------------------------------------