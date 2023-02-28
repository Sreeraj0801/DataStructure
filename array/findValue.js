const { promptSimShell } = require("readline-sync");

let array = [6,1,2,3,4,5,6,9,7,6];

length = (array.length)-1;

for(i=0;i<length/2;i++)
{
    for(j=length; j>length/2 ;j--)
    {
        if(array[i] == 6)
        {
            if(array[j] != 6)
            {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp ; 
            }
        }
      
    }
 
};

console.log(array);