exports.encryptPassword = function encryptPassword(password) {
    let encryptedPassword = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < password.length; i++) {
        encryptedPassword += alphabet[i % alphabet.length] + "2" + password[i];
    }
    return encryptedPassword.split("").reverse().join("");
}

exports.decryptPassword = function decryptPassword(encryptedPassword) {
    let decryptedPassword = "";
    let reversedEncryptedPassword = encryptedPassword.split("").reverse().join("");
    for (let i = 0; i < reversedEncryptedPassword.length; i += 3) {
        decryptedPassword += reversedEncryptedPassword[i + 2];
    }
    return decryptedPassword;
}