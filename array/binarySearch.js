let array = [1,2,3,4,5];

function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length-1;
    
    while(leftIndex <= rightIndex)
    {
        let middleValue = Math.floor((rightIndex+leftIndex)/2);

        if(arr[middleValue] === target) return middleValue;
        if(arr[middleValue] < target)
        {
            leftIndex = middleValue+1;
        }
        else{
            rightIndex = middleValue-1;
        }
    }
    return false;
}


console.log(binarySearch(array,5));