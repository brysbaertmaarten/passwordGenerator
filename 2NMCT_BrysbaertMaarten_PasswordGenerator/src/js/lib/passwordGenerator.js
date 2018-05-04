(function (){
    "use strict";

    let passwordGenerator = {
        newPassword : newPassword
    }

    function newPassword(length, hasChars, hasNumbers, hasCapitals, hasSpecialChars) {
        let result = '',
            chars = "abcdefghijklmnopqrstuvwxyz",
            numbers = "1234567890",
            capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            specialChars = "~`!@#$%^&*()_+-={}[]:\";<>?,./|\\",
            allChars = "";

        if (hasNumbers) {
            allChars += numbers;
        }
        if (hasCapitals) {
            allChars += capitals;
        }
        if (hasChars) {
            allChars += chars;
        }
        if (hasSpecialChars) {
            allChars += specialChars;
        }
        if (!hasNumbers && !hasCapitals && !hasChars && !hasSpecialChars) {
            return "ERROR Select at least 1 checkbox";
        }

        for (var i = length; i > 0; --i) result += allChars[Math.floor(Math.random() * allChars.length)];

        return result;
    }

    window.passwordGenerator = passwordGenerator;

})();