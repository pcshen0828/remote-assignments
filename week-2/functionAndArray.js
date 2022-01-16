// Assignment 1: Function and Array
// Complete the function below to find the max number of the passing array of numbers.
// Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.

let numbers;
let maxNum = 0;
function max(numbers){
    // your code here, for-loop method preferred
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > maxNum){
            maxNum = numbers[i];
        }
    }
    return maxNum;

}
console.log(max([1, 2, 4, 5])); // result to 5
console.log(max([5, 2, 7, 1, 6])); // result to 7