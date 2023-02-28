function selectionSort(array){
    let minNum = Number.MAX_VALUE;
    let index = 0;
    for(let i=0;i<array.length;i++){
        for(let j = i ; j<array.length ; j++){
            if(minNum>array[j]){
                minNum = array[j]
                index = j ;
            }
        }
        //swapping array elements
        [array[index],array[i]] = [array[i],array[index]]
    }
    console.log(array)
}


const array = [2,0,4,8,1];
selectionSort(array)