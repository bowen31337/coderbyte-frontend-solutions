
/**
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
Examples
Input: 3
Output: 5
Input: 2
Output: 2
*/

function BracketCombinations(num) {
    // Helper function to calculate factorial
    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    // Calculate the number of valid combinations using the Catalan number formula
    // C(n) = (2n)! / ((n + 1)! * n!)
    const combinations = factorial(2 * num) / (factorial(num + 1) * factorial(num));
    return combinations;
}

// Test the function with an example input
console.log(BracketCombinations(3)); // Output: 5
