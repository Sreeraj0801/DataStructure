class HashTable{
    constructor(size){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key){
        let hash = 0;
        for(let i =0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size ;
    }

    set(key,value){
        let index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [key,value];
        }
        else{this.table[index].push([key,value]);}
    }
    get(key){
        let index = this.hash(key);
        const current = this.table[index];
        if(current){
            for(let i=0;i<current.length;i++){
                if(current[i][0] === key){
                    return current[i]
                }
            }
        }

    }
}
 
const n = new HashTable(50);

n.set("grape",300);
console.log(n.get("grape"));
