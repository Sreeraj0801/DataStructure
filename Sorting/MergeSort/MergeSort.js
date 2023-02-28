function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
  
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  
  function merge(leftArr, rightArr) {
    const resultArr = [];
  
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        resultArr.push(leftArr.shift());
      } else {
        resultArr.push(rightArr.shift());
      }
    }
  
    return resultArr.concat(leftArr, rightArr);
  }
  
    
const array = [3,1,6,8,2,-3];
console.log("The array    : ",array)

console.log("Sorted Array : ",mergeSort(array))