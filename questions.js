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



// // ************* Day 7 **************
// // Intersection of two arrays ||
// // Example 1:
// // Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// // Output: [2, 2]
// // Example 2:
// // Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// // Output: [4, 9]
// // Explanation: [9, 4] is also accepted.
// var intersect = function (arr1, arr2) {
//     const res = [];
//     const { length: len1 } = arr1;
//     const { length: len2 } = arr2;
//     const smaller = (len1 < len2 ? arr1 : arr2).slice();
//     const bigger = (len1 >= len2 ? arr1 : arr2).slice();
//     for (let i = 0; i < smaller.length; i++) {
//         if (bigger.indexOf(smaller[i]) !== -1) {
//             res.push(smaller[i]);
//             bigger.splice(bigger.indexOf(smaller[i]), 1, undefined);
//         }
//     };
//     return res;
// };


// // Best Time to Buy and Sell Stock
// var maxProfit = function (prices) {
//     let profit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const currentProfit = prices[j] - prices[i];

//             if (currentProfit > profit) {
//                 profit = currentProfit;
//             }
//         }
//     }

//     return profit;
// };



// // ************* Day 8 **************
// // Reshape the matric
// var matrixReshape = function (arr, r, c) {
//     if (r * c !== arr.length * arr[0].length) {
//         return arr
//     }
//     const res = []
//     let row = []
//     arr.forEach(items => items.forEach((num) => {
//         row.push(num)
//         if (row.length === c) {
//             res.push(row)
//             row = []
//         }
//     }))
//     return res
// };

// // Pascal's Triangle
// var generate = function (numRows) {
//     if (numRows === 0) return [];
//     if (numRows === 1) return [[1]];
//     let result = [];
//     for (let row = 1; row <= numRows; row++) {
//         let arr = [];
//         for (let col = 0; col < row; col++) {
//             if (col === 0 || col === row - 1) {
//                 arr.push(1);
//             } else {
//                 arr.push((result[row - 2][col - 1] + result[row - 2][col]));
//             }
//         }
//         result.push(arr);
//     }
//     return result;
// };



// // ************* Day 9 **************
// // Valid Sudoku 
// var isValidSudoku = function (board) {
//     let set = new Set()

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             const value = board[i][j]
//             if (value !== ".") {
//                 const row = `${value} at row ${i}`
//                 const column = `${value} at column ${j}`
//                 const box = `${value} at box ${Math.floor(i / 3)}, ${Math.floor(j / 3)}`
//                 console.log(`${row}, ${column}, ${box}`)
//                 if (set.has(row) || set.has(column) || set.has(box)) {
//                     return false
//                 } else {
//                     set.add(row)
//                     set.add(column)
//                     set.add(box)
//                 }
//             }
//         }
//     }

//     return true
// };


// // Search a 2d Matrix
// var searchMatrix = function (M, T) {
//     let y = M.length, i = 0, j = M[0].length - 1
//     while (i < y && ~j) {
//         let cell = M[i][j]
//         if (cell === T) return true
//         else if (cell > T) j--
//         else i++
//     }
//     return false
// };



// // ************* Day 10 **************
// // Given a string s, find the first non - repeating character in it and return its index.If it does not exist, return -1.
// // Example 1:
// // Input: s = "leetcode"
// // Output: 0
// // Example 2:
// // Input: s = "loveleetcode"
// // Output: 2
// var firstUniqChar = function (s) {
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s.substring(i, i + 1)) === s.lastIndexOf(s.substring(i, i + 1))) {
//             return i
//         }
//     }
//     return -1
// };


// // Ransom Number
// // Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// // Each letter in magazine can only be used once in ransomNote.
// // Example 1:
// // Input: ransomNote = "a", magazine = "b"
// // Output: false
// // Example 2:
// // Input: ransomNote = "aa", magazine = "ab"
// // Output: false
// // Example 3:
// // Input: ransomNote = "aa", magazine = "aab"
// // Output: true
// var canConstruct = function (ransomNote, magazine) {
//     const map = new Map();
//     for (let i = 0; i < magazine.length; i++) {
//         if (map.has(magazine[i])) {
//             map.set(magazine[i], map.get(magazine[i]) + 1)
//         } else {
//             map.set(magazine[i], 1)
//         }
//     }
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
//             return false;
//         }
//         map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
//     }
//     return true;
// };


// // Valid Anagram
// // Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// // Example 1:
// // Input: s = "anagram", t = "nagaram"
// // Output: true
// // Example 2:
// // Input: s = "rat", t = "car"
// // Output: false
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     if (s.split('').sort().join('') === t.split('').sort().join('')) {
//         return true;
//     } else {
//         return false;
//     }
// };



// // ************* Day 11 **************
// Linked List Cycle
var hasCycle = function (head) {
    let set = new Set()
    // for traversing, initialize current with head node
    let current = head
    //traverse the linked list
    while (current) {
        if (set.has(current)) {
            // if duplication occurs, return true
            return true
        } else {
            set.add(current)
        }
        current = current.next
    }
    // traverse is completed, cycle not found
    return false
};


// Merge Two Sorted List
var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const linkThem = (smaller, greater) => {
        smaller.next = mergeTwoLists(smaller.next, greater);
        return smaller;
    };
    return l1.val < l2.val ? linkThem(l1, l2) : linkThem(l2, l1);
};


// Remove Linked list Elements
var removeElements = function (head, val) {
    if (head == null) return null;
    var node = new ListNode(0);
    var prev = node;
    node.next = head;
    while (head != null) {
        if (head.val != val) {
            prev = head;
            head = head.next;
        } else {
            prev.next = head.next;
            head = head.next;
        }
    }
    return node.next;
};