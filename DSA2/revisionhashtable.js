class hashtable{
    constructor(){
        this.table=new Array(10);
        this.size=10;
    }
    
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key[i].charCodeAt(0)
        }
        return total%this.size
    }
    
    
    set(key ,value){
        let index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        this.table[index].push([key,value])
    }
    
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            for(let p of bucket){
                if(p[0]===key){
                    return p
                }
            }
        }
        return undefined
    }
    
}

const ht=new hashtable()
ht.set("name","sneha")
ht.set("age",20)
ht.set("place","mlp")
ht.set("study","broto")
console.log("getting",ht.get("name"))
console.log(ht.table)