function countdown(n){
    if(n > 0)
    {
        return n+" " + (countdown(n-1))
    }
    return ;
} 

console.log(countdown(5))