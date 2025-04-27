function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '@#$!&*';
    
    let characters = upperCase + lowerCase; 
    let password = '';

    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    // Ensure required characters are included
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    if (includeNumbers) {
        password += numbers[Math.floor(Math.random() * numbers.length)]; 
    }

    if (includeSpecialChars) {
        password += specialChars[Math.floor(Math.random() * specialChars.length)]; 
    }

    
    for (let i = password.length; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }


    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}


console.log(generatePassword(10, true, true)); // Might return something like "Ab1@def2Gh"
console.log(generatePassword(8, false, false)); // Should contain only letters
console.log(generatePassword(12)); // Defaults to including numbers but no special characters
