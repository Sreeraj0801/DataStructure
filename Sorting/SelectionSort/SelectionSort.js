const array = [3,1,6];
function selectionSort(array){
    for(i=0;i<array.length;i++){
        let smallest = 100;
        let index = 0;
        for(j=i;j<array.length;j++){
            if(smallest>array[j]){
                smallest = array[j];
                index  = j;
            }
        }
      [array[i], array[index]] = [array[index], array[i]];
    }
    console.log(array)
}

selectionSort(array)