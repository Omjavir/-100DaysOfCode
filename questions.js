// ************* Day 1 **************
// // ***Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).Return the running sum of nums.***
// var runningSum = function (nums) {
//     let ans = new Array(nums.length)
//     ans[0] = nums[0]
//     for (let i = 1; i < nums.length; i++)
//         ans[i] = ans[i - 1] + nums[i]
//     return ans
// };
// console.log(runningSum([1, 2, 3, 4]));

// // ***Find pivot index***
// const pivotIndex = function (nums) {
//     let sum = nums.reduce((acc, num) => acc + num, 0)
//     let currentSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         currentSum += (nums[i - 1] || 0)
//         sum -= nums[i]
//         if (currentSum === sum) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));