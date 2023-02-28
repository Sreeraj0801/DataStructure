function QuickSort(array){
    if(array.length < 2){
        return array;
    }

    let pivot = array[array.length-1];
    let leftArray =[];
    let rightArray = [];
    for(let i = 0; i<array.length-1;i++){
        if(array[i]<pivot){
            leftArray.push(array[i]);
        }
        else{
            rightArray.push(array[i]);
        }
    }
    return [...QuickSort(leftArray),pivot,...QuickSort(rightArray)];
}

const array = [3,7,1,5,9];
console.log(QuickSort(array));