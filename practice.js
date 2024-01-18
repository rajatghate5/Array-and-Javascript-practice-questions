// 1. Check if the string palindrome or not
// let str = 'civics';
// let flag;

// function checkPalindrome(str){
//     return str.toLowerCase() === str.split('').reverse().join('');
// }

// console.log(checkPalindrome(str))

// for (let i in str){
//     if(str[i] === str[str.length - i -1]){
//         flag = true;
//         break;
//     }else{
//         flag = false
//     }
// }

// console.log(flag)
// ---------------------------------------------------------------

// 2. Reverse the string
// let revStr = '';
// for (let i = str.length -1 ; i >=0 ; i--){
//     revStr += str[i];
// }

// console.log(revStr)

// function reverseString (str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString(str));

// ---------------------------------------------------------------

// 3. Find Max and Min from the array

// let arr = [4, 20, 30, 25, 15];

// function findMaxAndMin(arr){
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     return [max, min];
// }

// console.log(findMaxAndMin(arr))

// ---------------------------------------------------------------

// 4. Find Unique Element in array
// let arr = [3,44,4, 3, 4, 5, ];

// function uniqueElement(arr){     
//     return Array.from (new Set(arr));
// }

// console.log(uniqueElement(arr))

// -----------------------------------------------------------------

// 5. Calculate the Factorial
// let num = 5;
// let fact =1;
// for (let i = 1 ; i <= num ;i++){
//     fact *= i;
// }

// function calculateFact(num){
//     if(num < 2) return 1;
//     return num * calculateFact(num-1);
// }
// console.log(calculateFact(num))

// ----------------------------------------------------------------

// 6. Check Prime number
// let num = 20;
// let flag = true;

// function checkPrime(num){
//     if(num < 2 || (num > 2 && num % 2 === 0)){
//          flag = false;
//     }else{
//         for (let i = 2; i < num ; i++){
//             if (num % i === 0){
//                 flag = false
//                 break;
//             }
//         }
//     }
//     return flag
// }

// console.log(checkPrime(num))

// -----------------------------------------------------------------
// 7. Sum of arr elements

// let arr = [3, 5, 6, 7, 10, 12];
// let sum = 0;
// for (let i of arr){
//     sum += i 
// }
// console.log(sum)

// function sumArr(arr){
//     return arr.reduce((sum, num) => sum + num)
// }

// console.log(sumArr(arr))

// ----------------------------------------------------------------

// 8. Count the occurrence of the characters in string

// let str = 'sadhkjhdk';
// function countCharOccurrence(str){
//     let charCount = {};
//     for (let char of str){
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     return charCount;
// }

// console.log(countCharOccurrence(str))

// ----------------------------------------------------------------
// 9. Remove Duplicates from array

// let arr = [3,44,4, 3, 4, 5];

// function removeDuplicate(arr){
//     return Array.from(new Set(arr))
// }

// console.log(removeDuplicate(arr));

// ----------------------------------------------------------------
// 10. Sort the array

// let arr = [3,44,4, 3, 4, 5];

// function sortArray(arr){
//     return arr.sort((a,b) => a-b);
// }

// console.log(sortArray(arr))

// ----------------------------------------------------------------

// 11. Even Number Filter 
// let arr = [3,5,4,5,6,10,15];
// let filterArr = []
// function filterArray(arr){
//     // return arr.filter((num) => num % 2 === 0)
//     for (let i of arr){
//         if(i % 2 === 0){
//             filterArr.push(i)
//         }
//     }
//     return filterArr;
// }
// console.log(filterArray(arr))

// ----------------------------------------------------------------

// 12. Find Largest Element
// let nestedArray = [
//     [1, 2, 3],
//     [4,15, 6],
//     [7, 8, 9]
// ];

// function largestElement(nestedArray){
//     let max = 0;
//     for (let arr of nestedArray){
//         for (let i of arr){
//             if (i > max){
//                 max = i;
//             }
//         }
//     }
//     return max;
// }

// console.log(largestElement(nestedArray))

// ----------------------------------------------------------------

// 13. Largest Difference
// let arr = [4, 20, 30, 25, 15];

// function largestDiff(arr){
//     let min = arr[0];
//     let maxDiff = 0;
    
//     for (let i =0 ; i < arr.length ; i++){
//         if (arr[i] < min){
//             min = arr[i]
//         }else{
//             const diff = arr[i] - min;
//             if (diff > maxDiff){
//                 maxDiff = diff;
//             }
//         }
//     }
//     return maxDiff;
// }

// console.log(largestDiff(arr))

// ----------------------------------------------------------------

// 14. Remove Duplicates
// let arr = [4, 5,6 ,4, 6];

// function removeDuplicates(arr){
//     // return Array.from(new Set(arr))
//   return  arr.filter((item, index) => arr.indexOf(item) === index)
// }

// console.log(removeDuplicates(arr))

// ----------------------------------------------------------------
// 15. Max the multi-dimensional array into single dimensional

// let nestedArray = [
//     [1, 2, 3],
//     [4,15, 6],
//     [7, 8, 9]
// ];

// function flattenArray(arr){
//     return arr.flat()
// }

// console.log(flattenArray(nestedArray))

// ----------------------------------------------------------------
// 16. Check if the given string is Anagram or not
// let str1 = 'modi', str2 = 'domids';

// function isAnagram(str1, str2){
// return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(isAnagram(str1, str2))

// ---------------------------------------------------------------

// 17. Find the second minimum number in the array
// let arr = [3,4 ,6, 20, 15];

// function findSecMin(arr){
//     const sortedArr = arr.sort((a,b) => a -b)
//     return sortedArr[1];
// }

// console.log(findSecMin(arr))

// ----------------------------------------------------------------
// 18. Find the maximum number in array

// let arr = [4,6,15,8,10];
// let max = 0;
// function maxArray(arr){
// // let max = Math.max(...arr);
// // return max
// for (let num of arr){
//     if (num > max){
//         max = num
//     }
// }
// return max;
// }

// console.log(maxArray(arr))

// ----------------------------------------------------------------

// 20. Get Average
// let arr = [4,6,7,8,10,7,8];

// function getAverage(arr){
// let sum = arr.reduce((sum, num) => sum+ num,0);
// return sum / arr.length
// }

// console.log(getAverage(arr))

// ----------------------------------------------------------------
// 21. Sort the inside string 
// let str = ['djasf', 'dhasdhak', 'dhasdkhadsk'];

// function sortStr(str){
// return str.slice().sort();
// }

// console.log(sortStr(str))

// ----------------------------------------------------------------

// 22. Find the index of given element in array
// const arr = [4,6, 8, 9,10, 12];
// const element = 5;

// function findIndex(arr, element){
// const index = arr.indexOf(element);
// return index !== -1 ? index : -1;
    
// }

// console.log(findIndex(arr, element))

// ----------------------------------------------------------------

// 23. Remove the Boolean values from array
// let arr = [5,6, null, "", 0,false, 8,10]

// function removeBoolean(arr){
//     return arr.filter(Boolean);
// }

// console.log(removeBoolean(arr))

// ----------------------------------------------------------------

// 25. Merge the Two array
// let arr1 = [1,2,3,5,6];
// let arr2 = [7,8,9,11,12];

// function mergeArray(arr1, arr2){
//     const mergedArray = []
//     const maxLength = Math.max(arr1.length, arr2.length);
//     for (let i = 0; i< maxLength ;i++){
//         if (i < arr1.length) mergedArray.push(arr1[i])
//         if (i < arr2.length) mergedArray.push(arr2[i])
//     }
// return mergedArray;    
// }

// console.log(mergeArray(arr1, arr2))

// ----------------------------------------------------------------

// 26. Filter the array in odd and even
// let arr = [5, 7, 6,7, 22,24, 21,];

// function filterArr(arr){

// let oddArr = arr.filter((item) => item % 2 !== 0)    
// let evenArr = arr.filter((item) => item % 2 === 0)    
// return {oddArr, evenArr}
// }

// console.log(filterArr(arr))

// ----------------------------------------------------------------

// 27. Generate the random string
// const characters = ‘ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789’;
// const length = 10

// function randomChar(characters, length){
//     let result = '';
//     for (let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * length);
//         result += characters.charAt(randomIndex);
//     }
//     return result;
// }

// console.log(randomChar(characters, length))

// ----------------------------------------------------------------

// 28. Print the Fibonacci series

// function fibSeq(n){
//     let  sequence = [0,1]
//     for (let i =2; i < n ; i++){
//         let nextTerm = sequence[i-1] + sequence[i-2];
//         sequence.push(nextTerm);
//     }
//     return sequence;
//     }
    
//     console.log(fibSeq(6))

// -----------------------------------------------------------------
// 29. Swap Numbers

// let a = 5, b= 6;
// function operation(data1, data2){
//   let temp = a ;
//   a = b;
//   b = temp;
//   return {a , b}
//      Or
//   return [a,b] = [b,a]
// }

// console.log(operation(a, b))

// ------------------------------------------------------------------
