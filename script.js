const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  const result = []; 
  let currentSum = 0; 
  let currentSubarray = []; 

  arr.forEach(item => {
    if (currentSum + item > n) {
      result.push(currentSubarray);
      currentSubarray = [item];
      currentSum = item;
    } else {
      currentSubarray.push(item);
      currentSum += item;
    }
  });

  
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
