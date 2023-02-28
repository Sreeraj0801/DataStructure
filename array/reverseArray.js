class Array{
    constructor(array){
        this.array = array
    }

    //reverse An Array
    arrayReverser(){
        let left = 0;
        let right = (this.array.length) -1;
        while(left<right){
            [this.array[left] ,this.array[right]] = [this.array[right]  ,this.array[left]]  
            left++;
            right--;
        }
        return this.array;
    }

    //sort an array
    //bubble sort
    bubbleSort(){
        let len = this.array.length;
        for(let i=0;i<len-1;i++){
            for(let j=0;j<len-1;j++)
            {
                if(this.array[j]<this.array[j+1]){
                    let temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                }
            }
            return this.array
        }
    }
    //Merge Sort

    MergeSort(){
        if(this.array.length < 2){
            return this.array;
        }
        let mid = Math.floor(this.array.length/2);
        let leftArray = this.array.splice(0,mid);
        let rightArray = this.array.splice(mid);
        return Merge(this.MergeSort(leftArray),this.MergeSort(rightArray));
    }
}

Merge(leftArray,rightArray)
{
    this.leftArray = leftArray;
    this.rightArray = rightArray;
    let sortedArray

    while(this.leftArray.length && this.rightArray.length){
        if(this.leftArray[0]<= this.rightArray[0])
        {
            sortedArray.push(this.leftArray.shift());
        }
        else
        {
            sortedArray.push(this.rightArray.shift());
        }
    }
    return [...sortedArray,...leftArray,...rightArray]
}



//creating an instance
let arr = [4,7,9,2]
const a = new Array(arr);
//let ans = a.arrayReverser();
//let sort = a.bubbleSort();
//console.log(sort);

console.log(a.MergeSort());
