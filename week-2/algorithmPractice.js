// Assignment 5: Algorithm Practice (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a
// specific target. You may assume that each input would have exactly one solution, and you
// may not use the same element twice.
let nums = [];
let newArr = []; 
let arrIndice = [];
let target = 0;
function twoSum(nums, target){
    // your code here
    for(let i = 0; i < nums.length; i++){
        newArr = newArr.concat(nums.splice(i, 1));
        console.log(newArr);
        for(let j = 0; j < newArr.length; j++){
            if(newArr[j] + nums[i] === target){
                arrIndice.push(i);
                arrIndice.push(nums.indexOf(newArr[j]));
                return arrIndice;
            }
        }  
    }
}
console.log(twoSum([3, -1, 4, 7], 6)); // [1, 3]
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/