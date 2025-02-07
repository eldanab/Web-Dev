// function sumInput() {
//
//     let numbers = [];
//
//     while (true) {
//
//         let value = prompt("A number please?", 0);
//
//         // should we cancel?
//         if (value === "" || value === null || !isFinite(value)) break;
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// alert( sumInput() );






// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//
//     return maxSum;
// }
//
// alert( getMaxSubSum([-1, 2, 3, -9]) );
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
// alert( getMaxSubSum([-2, -1, 1, 2]) );
// alert( getMaxSubSum([1, 2, 3]) );
// alert( getMaxSubSum([100, -9, 2, -3, 5]) );



// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered );
// alert( arr );


// function filterRangeInPlace(arr, a, b) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//
// }
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4);
// alert( arr ); // [3, 1]

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );