// Your solution goes here

function isStrongPassword(password) {
    let isLongEnough = false; // needs to be true
    let hasPasswordInside = false; // needs to stay false
    let containsUppercase = false; // needs to be true

    if(password.length >= 8) {isLongEnough = true;}
    if(password.includes("password")){hasPasswordInside = true;}
    if(password !== password.toLowerCase()){containsUppercase = true;}

    if (isLongEnough && !hasPasswordInside && containsUppercase) {
        console.log("true")
        return true;
    }else{
        return false;
    }
    /*} else if (!isLongEnough) {
        console.log("false - Too short")
        return false;
    } else if (hasPasswordInside) {
        console.log("false - Contains \"password\"");
        return false;
    } else if (!containsUppercase) {
        console.log("false - No uppercase characters");
        return false;
    } else {
        console.log(false);
        return false;
    }*/
}