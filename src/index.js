// // 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function (nums, n) {
  let x = nums.slice(0, n);
  let y = nums.slice(n);
  let result = [];

  for (let i = 0; i < nums.length / 2; i++) {
    let currentX = x[i];
    let currentY = y[i];

    result.push(currentX);
    result.push(currentY);
  }

  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
