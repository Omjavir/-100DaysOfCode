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



// // ************* Day 2 **************
// // *** Check if given string are isomorphic or not
// var isIsomorphic = function (s, t) {
//     if (s.length !== t.length) return false;
//     const mapa = new Map();
//     const mapb = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if (mapa.has(s[i])) {
//             if (mapa.get(s[i]) !== t[i]) {
//                 return false;
//             }
//         } else {
//             mapa.set(s[i], t[i])
//         }
//         if (mapb.has(t[i])) {
//             if (mapb.get(t[i]) !== s[i]) {
//                 return false;
//             }
//         } else {
//             mapb.set(t[i], s[i])
//         }
//     }
//     return true
// };
// console.log(isIsomorphic('paper', 'titer'));


// // *** Check is one string are subsequence of another string.
// var isSubsequence = function (str1, str2) {
//     let i = 0;
//     let j = 0;
//     while (i < str1.length) {
//         if (j === str2.length) {
//             return false;
//         }
//         if (str1[i] === str2[j]) {
//             i++;
//         }
//         j++;
//     };
//     return true;
// };
// console.log(isSubsequence('ace', 'bakcfoe'));



// // ************* Day 3 **************
// Merge two sorted linked list
// var mergeTwoLists = function (l1, l2) {
//     if (!l1 || !l2) return l1 || l2;
//     const linkThem = (smaller, greater) => {
//         smaller.next = mergeTwoLists(smaller.next, greater);
//         return smaller;
//     };
//     return l1.val < l2.val ? linkThem(l1, l2) : linkThem(l2, l1);
// };

// // Reverse a linked list
// var reverseList = function (node) {
//     var prev = null;
//     var current = node;
//     var next = null;
//     while (current != null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     node = prev;
//     return node;
// };