class Trie{
    constructor(){
        this.root = new Map();
    }
    
    insert(word){
        let current = this.root;
        for(let letter of word){
            if(!current.has(letter)){
                current.set(letter,new Map())
            }
            current = current.get(letter)
        }
        current.set("end",true)
    }
    
    search(word){
        let current = this.root;
        for(let letter of word){
            if(!current.has(letter)) return false
            current = current.get(letter)
        }
        return current.get("end")
    }
    suffix(string){
        for(let i=0;i<string.length;i++){
            let current = this.root;
            for(let j = i;j<string.length;j++){
                if(!current.has(string[j])) current.set(string[j],new Map())
                current = current.get(string[j])
            }
            current.set("end",true)
        }
    }
    prefix(string){
        for(let i=0;i<string.length;i++){
            let current = this.root;
            for(let j=0;j<string.length-i;j++){
                if(!current.has(string[j])) current.set(string[j],new Map())
                current = current.get(string[j])
            }
            current.set("end",true)
        }
    }
}

const n = new Trie();
n.prefix("ajeesh")

console.log(n)