let array = [4,8,5,7,5];

//for a specified target
let linearSearch = function(a,target){
    for(i=0;i<a.length;i++){
        if (a[i]===target) {
            return (i+1)
        }
    }
}

//global lenear search
let globalSearch = (a,target)=>{
    let global = [];
    for(let i = 0; i<a.length ; i++){
        if(a[i] === target)
        {
            global.push(i+1);
        }
    }
    console.log(global);
}


globalSearch(array,5);
//console.log(linearSearch(array,7)+ ' ' +'positon');

