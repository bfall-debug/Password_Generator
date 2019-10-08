document.getElementById("generate").addEventListener("click", function () {
    var characters = "";
    
//========================== User Input ======================================
    // Desired Length of Password
    do{
        length = prompt("Please select a password length between 8 and 128");
        if (length == null) { return; }
    } while ( (length != null && length != NaN  && (length < 8 || length > 128))      || isNaN(length) )

    // Special Characters
    if(confirm("Do you require SPECIAL characters in your password?")){
        characters = characters + "!#$%&()*+,-./:;<=>?@[]^_{|}~";
    }

    // Numeric Characters
    if(confirm("Do you require NUMERIC characters in your password?")){
        characters = characters + "1234567890";
    }

    // Lowercase Characters
    if(confirm("Do you require LOWERCASE characters in your password?")){
        characters = characters + "abcdefghijklmnopqrstuvwxyz";
    }

    // Uppercase Characters
    if(confirm("Do you require UPPERCASE characters in your password?")){
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

//========================== Password Generation ======================================
    var password = ""
    var Num = characters.length;
    for( i = 0; i < length; i++){
        char = Math.random() * Num;
        char = Math.floor(char);
        char++ ;
        char = characters.charAt(char);
        console.log(char);
        password = password + char;

    }

//========================== Update Webpage ======================================
    document.getElementById("password").textContent = password;
    document.getElementById("copy").style.backgroundColor = "green";
});

















document.getElementById("copy").addEventListener("click", function () {

});


