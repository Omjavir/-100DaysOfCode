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



// // ************* Day 4 **************
// // Middle of the Linked List
// var middleNode = function (head) {
//     let fast = head;
//     let slow = head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// };

// // Linked List Cycle II
// var detectCycle = function (head) {
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next && fast.next.next) {
//         slow = slow.next;
//         // Move fast pointer twice as fast as slow pointer and if there is a cycle, the fast will eventually meet slow at a node in the cycle but not necessarily the node that starts the cycle
//         fast = fast.next.next;
//         // Once we determine there is a cycle we must find where the cycle starts
//         if (slow === fast) {
//             // Move slow pointer to the head
//             slow = head;
//             // Move both fast and slow pointer one node at a time and they will meet at the node where the cycle starts
//             while (slow !== fast) {
//                 slow = slow.next;
//                 fast = fast.next;
//             }
//             return slow;
//         }
//     }
//     return null;
// };



// // ************* Day 5 **************
// // Maximum Subarray
// var maxSubArray = function (nums) {
//     let maxSum = -Infinity
//     let currentSum = 0
//     for (let i = 0; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i])
//         maxSum = Math.max(currentSum, maxSum)
//     }
//     return maxSum
// };

// // Contains Duplicate
// var containsDuplicate = function (array) {
//     return (new Set(array)).size !== array.length;
// };



// // ************* Day 6 **************
// // Two sum
// // Input: nums = [2, 7, 11, 15], target = 9
// // Output: [0, 1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// const twoSum = (array, goal) => {
//     let indexes = [];

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === goal) {
//                 indexes.push(i);
//                 indexes.push(j);
//             }
//         }
//     }
//     return indexes;
// }
// console.log(twoSum([3,2,4], 7));


// function sumTwo(array, goal) {
//     let indexes = [];
//     for (let i = 0; i <= array.length; i++) {
//         for (let j = array.length - 1; j >= 0; j--) {
//             if (array[i] + array[j] === goal) {
//                 indexes.push(i);
//                 indexes.push(j)
//             }
//         }
//     }
//     return indexes
// }
// console.log(sumTwo([3, 2, 4], 7));


// // Merge Two array
// var merge = function (nums1, m, nums2, n) {
//     const len = m + n
//     nums1.splice(len - n)
//     for (let i = 0; i < n; i++) {
//         nums1.push(nums2[i])
//     }

//     for (let j = 1; j < len; j++) {
//         if (nums1[j - 1] || nums1[j - 1] === 0) {
//             if (nums1[j] < nums1[j - 1]) {
//                 let tmp = nums1[j - 1]
//                 nums1[j - 1] = nums1[j]
//                 nums1[j] = tmp
//                 j = j - 2
//             }
//         }
//     }
//     return nums1
// };