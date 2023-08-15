/**
 * Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
 */

function FindIntersection(strArr) {
    const [arr1, arr2] = strArr.map(str => new Set(str.split(', ')));

    const intersection = [...arr1].filter(num => arr2.has(num));

    return intersection.length > 0 ? intersection.join(',') : "false";
}

// Test the function with examples
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // Output: "1,4,13"
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "2, 4, 8, 10, 12, 18"])); // Output: "10,18"
console.log(FindIntersection(["1, 3, 9", "2, 4, 8, 10, 12, 18"])); // Output: "false"
