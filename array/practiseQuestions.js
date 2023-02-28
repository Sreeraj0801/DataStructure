class Solution
{
  print2largest(a,n)
  {

    let largest = a[0];
    let secondLargest = a[0];
    
    for(let i=1;i<=n-1;i++){
        if(a[i]>largest)
        {   
            secondLargest = largest;
            largest = a[i];
        }
        else if(a[i]>secondLargest && a[i]<largest)
        {
            secondLargest = a[i]
        }

    }
    return [secondLargest,largest]
    }

}


let array= [61 ,30 ,28 ,47 ,42 ,25 ,41 ,56 ,27 ,45 ,44 ,34 ,46 ,35 ,58 ,36 ,60 ,29 ,53 ,55, 32, 31 ,33 ,59 ,50 ,51 ,52 ,37 ,39 ,38 ,43 ,49 ,54 ,57 ,40 ,26 ,48]
const N = 37 
const obj = new Solution();
ans = obj.print2largest(array,N);
console.log(ans);