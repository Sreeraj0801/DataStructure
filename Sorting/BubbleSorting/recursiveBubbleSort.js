function recursiveBubble(arr,n){
    for(i=0;i<n;i++){
        if(n === 1){
           return arr 
        }
        if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1];
        arr[i+1] = temp ; 
        }
    }
    return recursiveBubble(arr,n-1)
}

const arr = [4,9,1,2,6]
let n = 5

//console.log(recursiveBubble(arr,n))

let a = 20;
{

   a = 40
}
console.log(a)