function mergeSort(arr){
    if(arr.length < 2)
    {
        return arr
    }
    else{
        let mid = Math.floor(arr.length/2)
        let leftArray = arr.slice(0,mid);
        let rightArray = arr.slice(mid);
        return merge(mergeSort(leftArray),mergeSort(rightArray));
    }
}

function merge(leftArray,rightArray){
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<= rightArray[0])
        {
            sortedArray.push(leftArray.shift());
        }
        else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray ,...leftArray ,...rightArray];
}


let array = [9,3,4,45,-1,-7];
console.log(mergeSort(array));