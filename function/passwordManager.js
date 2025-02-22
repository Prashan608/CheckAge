function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '@#$!&*';
    
    let characters = upperCase + lowerCase; // By default, use uppercase and lowercase letters
    let password = '';

    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    // Ensure required characters are included
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // At least one uppercase

    if (includeNumbers) {
        password += numbers[Math.floor(Math.random() * numbers.length)]; // At least one number
    }

    if (includeSpecialChars) {
        password += specialChars[Math.floor(Math.random() * specialChars.length)]; // At least one special character
    }

    // Fill the rest of the password with random characters
    for (let i = password.length; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    // Shuffle the password to make it random
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

// Example test cases
console.log(generatePassword(10, true, true)); // Might return something like "Ab1@def2Gh"
console.log(generatePassword(8, false, false)); // Should contain only letters
console.log(generatePassword(12)); // Defaults to including numbers but no special characters
