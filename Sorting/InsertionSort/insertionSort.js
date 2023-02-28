const array = [2,3,4,1];

function insertionSort(array){
    for(let i = 0;i<array.length;i++){
        let current = array[i];
        let j = i - 1;
        while(j>=0 && array[j]>current){
            array[j+1] = array[j];
            j--
        }
       array[ j + 1 ] = current;
    }
    return array;
}

console.log(insertionSort(array));