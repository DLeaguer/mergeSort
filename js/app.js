module.exports = function mergeSort(arr) {
  console.log('');
  console.log('arr start', arr);

  // base case 
  if (arr.length < 2) {
    console.log('base case arr', arr);
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  console.log('');
  console.log('middle =', middle);
  console.log('left =', left);
  console.log('right =', right);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log('');
  console.log('merge left', left);
  console.log('merge right', right);
  let result = [];
  console.log('result start', result);

  while (left.length && right.length) {
    console.log('');
    if (left[0] <= right[0]) {
      console.log('left[0]', left[0], '<= right[0]', right[0]);
      console.log('1st result.push(left.shift()) =', left);
      result.push(left.shift());
      console.log('1st left result', result);
    }
    else {
      console.log('right[0]', right[0], '< left[0]', left[0]);
      console.log('1st result.push(right.shift()) =', right);
      result.push(right.shift());
      console.log('1st right result', result);
    }
  }

  console.log('2nd result.push(left.shift()) =', left);
  while (left.length) result.push(left.shift());
  console.log('2nd left result', result); 

  console.log('2nd result.push(right.shift()) =', right);
  while (right.length) result.push(right.shift());
  console.log('2nd right result', result);

  console.log('results end', result);
  return result;
}

// let arr = [4,2,3,1];
// mergeSort(arr);
// merge(mergeSort(arr));