/**
 Codeland Username Validation
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
 */

function CodelandUsernameValidation(str) {
    if (str.length < 4 || str.length > 25) {
        return "false"; // Rule 1: Length between 4 and 25 characters
    }

    if (!/^[a-zA-Z]/.test(str)) {
        return "false"; // Rule 2: Must start with a letter
    }

    if (!/^[a-zA-Z0-9_]+$/.test(str)) {
        return "false"; // Rule 3: Can only contain letters, numbers, and underscore
    }

    if (/_$/.test(str)) {
        return "false"; // Rule 4: Cannot end with an underscore
    }

    return "true"; // All rules passed
}

// Test the function with examples
console.log(CodelandUsernameValidation("Codeland123")); // Output: "true"
console.log(CodelandUsernameValidation("1code_land")); // Output: "false"
