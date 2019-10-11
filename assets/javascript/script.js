//**************** Script for Generate Password Button *******************
document.getElementById("generate").addEventListener("click", function () {
 //========================== User Input ======================================
 var password = "";   
 var characters = "";
    var minChar = 8;
    var maxChar = 128;
    var SpecialChars =  "!#$%&()*+,-./:;<=>?@[]^_{|}~";
    var NumericChars =  "1234567890";
    var LowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Desired Length of Password
    do{
        length = prompt("Please select a password length between 8 and 128");
        if (length == null) { return; }
    } while ( (length != null && length != NaN  && (length < minChar || length > maxChar))      || isNaN(length) )

    // Special Characters
    if(confirm("Do you require SPECIAL characters in your password?")){
        characters = characters + SpecialChars
        password = randomGenChar(SpecialChars,1,password)
        length--;
    }

    // Numeric Characters
    if(confirm("Do you require NUMERIC characters in your password?")){
        characters = characters + NumericChars
        password = randomGenChar(NumericChars,1,password)
        length--;
    }

    // Lowercase Characters
    if(confirm("Do you require LOWERCASE characters in your password?")){
        characters = characters + LowercaseChars
        password = randomGenChar(LowercaseChars,1,password)
        length--;
    }

    // Uppercase Characters
    if(confirm("Do you require UPPERCASE characters in your password?")){
        characters = characters + UpperCaseChars;
        password = randomGenChar(UpperCaseChars,1,password)
        length--;
    }
 //========================== Password Generation ======================================
    password = randomGenChar(characters,length,password)

 //========================== Update Webpage ======================================
    document.getElementById("password").textContent = password;
    with (document.getElementById("copy")){
        style.backgroundColor = "green";
        focus();
    }

});

//**************** Script for Copy to Clipboard Button *******************
document.getElementById("copy").addEventListener("click", function () {
 //========================== Copy Password To Clip Board ======================================
    var passwordText = document.getElementById("password");
    if (passwordText.value != ""){
        with (passwordText){
            select();
            alert("Copied the text: " + value);
        }

        document.execCommand("copy");
        passwordText.value = ""
        document.getElementById("copy").style.backgroundColor = "silver";
    }   
});

//**************** Function to Random Generate Password with Given Characters *******************
function randomGenChar(characters,length,password){
    var Num = characters.length;
    for( i = 0; i< length; i++){
        charNum = Math.random() * Num;
        charNum = Math.floor(charNum);
        char = characters.charAt(charNum);
        password = password + char;
    }
    return password;
}


