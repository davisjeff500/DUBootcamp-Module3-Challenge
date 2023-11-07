// Module 3 Password Generator JavaScript Code
// Query selectors

var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function that generates a random password in the "text area" box
function writePassword() {
    // Clear the screen of the previous password
    password.value === "";
    var randomString = "";

    // Variable declaration for all upper and lowercase letters, numbers, and characters

    var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var optionsVariable = "";

    // Prevent the screen from refreshing when whe button is clicked
    event.preventDefault();

    // password criteria variables
    var lowerCase = confirm("Should your password contain lowercase letters?");
    var upperCase = confirm("Do you want to also include uppercase letters?");
    var num = confirm("How about numbers in the password?");
    var specialChar = confirm("Any special characters?");
    var passwordLength = prompt("Please specify a password length between 8 and 128 characters");

    // Password length validation function
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please choose a password between 8 and 128 characters");
        var passwordLength = prompt(
            "Please choose a password between 8 and 128 characters"
        );
    }

    // Check for user specifying no criteria
    if (
        lowerCase === false &&
        upperCase === false &&
        num === false &&
        specialChar === false
    ) {
        alert("At least one password criteria must be chosen");
        var lowerCase = confirm("lowercase letters?");
        var upperCase = confirm("uppercase letters?");
        var num = confirm("numbers?");
        var specialChar = confirm("special characters?");
    }

    // Assigns options selected variable to be used to generate password based on user selections
    if (lowerCase) {
        optionsVariable += lowercaseAlphabet;
    }

    if (upperCase) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // Generates a random password that meets user selected criteria
    for (var i = 0; i < passwordLength; i++) {
        // loop selects random characters based on options selected until it is the desired length
        randomString += optionsVariable.charAt(
            Math.floor(Math.random() * optionsVariable.length)
        );
    }
    password.value = randomString;
}


// Now write to the screen the newly generated password using the writePassword() method
// writePassword();
