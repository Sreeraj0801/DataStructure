
function bubbleSort(arr){
    
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return "Sorted array is "+arr;
}

const array = [4,1,80,3,-1];
console.log(bubbleSort(array));