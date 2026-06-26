

//🟢 Level 1: Basic Binary Search
// Search an element in a sorted array.
// Input: [1,2,3,4,5,6], target = 4
// Output: 3
// Check whether an element exists.
// Count the number of iterations taken by binary search.
// Binary Search (Recursive).
// Binary Search (Iterative).


// 🟡 Level 2: Duplicates
// Find the first occurrence of an element.
// Find the last occurrence of an element.
// Count the frequency of an element.
// Find the leftmost occurrence.
// Find the rightmost occurrence.


// 🟠 Level 3: Lower & Upper Bound
// Lower Bound (>= target)
// Upper Bound (> target)
// Search Insert Position
// Floor of a target
// Ceil of a target
// Find the closest element.
// Find the next greater element.


// 🟣 Level 4: Rotated Sorted Array
// Search in Rotated Sorted Array.
// Find the minimum element.
// Find the number of rotations.
// Search in Rotated Sorted Array with duplicates.
// Find the pivot element.


// 🔵 Level 5: Matrix Binary Search
// Search in a row-wise sorted matrix.
// Search in a fully sorted matrix.
// Count occurrences in a sorted matrix.
// Find the median of a row-wise sorted matrix.


// 🟤 Level 6: Binary Search on Answer
// Integer Square Root.
// Nth Root of a Number.
// Koko Eating Bananas.
// Capacity to Ship Packages Within D Days.
// Minimum Days to Make Bouquets.
// Split Array Largest Sum.
// Allocate Minimum Number of Pages.
// Painter's Partition Problem.
// Aggressive Cows.
// Magnetic Force Between Two Balls.
// Minimize Maximum Distance to Gas Station.
// Smallest Divisor Given a Threshold.
// Find Peak Element.
// Peak Index in a Mountain Array.


// 🔴 Level 7: Hard
// Median of Two Sorted Arrays.
// Kth Smallest Element in Sorted Matrix.
// Kth Missing Positive Number.
// Find Duplicate Number (Binary Search on Value).
// Find K Closest Elements.
// Minimize the Maximum Difference of Pairs.
// Maximum Value at a Given Index in a Bounded Array.
// Search in Infinite Sorted Array.
// First Bad Version.
// Guess Number Higher or Lower.













// let arr = [1,2,3,4,5,6,7]
// let t = 5

// function search(arr, t){
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(arr[mid]===t){
//             return mid
//         }
//         if(arr[mid]<t){
//                      start=mid+1
//         }else{
//   end=mid-1
//         }
        
//     }
//     return -1
// }

// console.log(search(arr,t))


//---------------------------------------------

// let arr=[2,4,6,8]
// let t=2


// function exist(arr, t){
//     let start=0;
//     let end=arr.length-1
//     while(start<=end){
//           let mid=Math.floor((start+end)/2)
//         if(arr[mid]===t){
//             return true
//         }
//         if(arr[mid]<t){
//                      start=mid+1
//         }else{
//   end=mid-1
//         }
        
//     }
//     return false
// }

// console.log(exist(arr,t))


//---------------------------------------------




// let arr=[2,4,6,8]
// let t=2


// function exist(arr, t){
//     let start=0;
//     let end=arr.length-1;
//     let s=0;
//     while(start<=end){
//         s++;
//           let mid=Math.floor((start+end)/2)
//         if(arr[mid]===t){
//             return s
//         }
//         if(arr[mid]<t){
//                      start=mid+1
//         }else{
//   end=mid-1
//         }
        
//     }
//     return false
// }



// ------------------------------------------------


//first occurence

// let arr=[1,2,2,2,3,4]
// let t=2


// function exist(arr, t){
//     let start=0;
//     let end=arr.length-1
//     let ans=-1
//     while(start<=end){
//           let mid=Math.floor((start+end)/2)
//         if(arr[mid]===t){
//             ans=mid
//             end=mid-1
//         }
//         if(arr[mid]<t){
//                      start=mid+1
//         }else{
//   end=mid-1
//         }
        
//     }
//     return ans
// }

// let first=exist(arr,t)

// console.log(first)


//--------------------------------------------
//last occurence 


// let arr=[1,2,2,2,3,4]
// let t=2


// function exist1(arr, t){
//     let start=0;
//     let end=arr.length-1
//     let ans=-1
//     while(start<=end){
//           let mid=Math.floor((start+end)/2)
//         if(arr[mid]===t){
//             ans=mid;
//             start=mid+1;
//         }
//         else if(arr[mid]<t){
//                      start=mid+1
//         }else{
//   end=mid-1
//         }
        
//     }
//     return ans
// }
// let last=exist1(arr,t)
// console.log(last)
// console.log("frequency ",last-first+1)

//----------------------------------------------------

// let arr = [1,2,4,4,5,7]
// let t = 4

// function first(arr,t){
//     let start=0;
//     let end=arr.length-1;
//     let ans=arr.length;
//     while(start<=end){
//         let mid=Math.floor((start+end)/2);
//       if(arr[mid]>t){
//          ans=mid;
//          end=mid-1;
//       }else {
//         start=mid+1
//       }
//     }
//     return ans
// }
// console.log(first(arr,t))

//---------------------------------------------

//Floor of a Target

//The floor of a target is the largest element that is less than or equal to (<=) the target.
//Return its index (or the value, depending on the question).

// let arr = [1,2,4,6,8]
// let t = 5;

// function floorOfTarget(arr,t){
// let start=0;
// let end=arr.length-1;
// while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]<=t){
//         return arr[mid]

//     }else{
//         return -1
//     }
// }
// }
// console.log(floorOfTarget(arr,t))

//================================================


//Ceil of a Target
//The ceil of a target is the smallest element that is greater than or equal to (>=) the target.



// let arr = [1,2,4,6,8]
// let t = 5;

// function CeilOfTarget(arr,t){
// let start=0;
// let end=arr.length-1;
// let ans=-1;
// while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]>=t){
//     ans=arr[mid]
//     end=mid-1
//     }else{
//         start=mid+1
//     }
// }
// return ans;
// }
// console.log(CeilOfTarget(arr,t))

//============================================
//Search Insert Position


// let arr = [1,3,5,6]
// let t = 2

// function insert(arr,t){
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(arr[mid]<t){
            
//             start=mid+1;
//         }else{
//             end=mid-1
//         }
//     }
//     arr.splice(start,0,t)
//     return arr
// }

// console.log(insert(arr,t))


//================================================






