let n =5;
let f = 1
function factorial(n)
{
    if(n==1)
    {
        return f
    }
   
    return n*(factorial(n-1))
    
}

console.log("Factorial is",factorial(n))