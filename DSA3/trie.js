

class Node{
    constructor(){
   
       this.Children={};
        this.isEnd=false

    }
}

class trie{
    
    constructor(){
        
        this.root=new Node()
    }

    insert(word){
        let curr=this.root
        for(let i of word){
            if(!curr.Children[i]){
             curr.Children[i]=new Node()
            }
            curr=curr.Children[i]
        }
        curr.isEnd=true;
         return "Inserted Successfully";
    }


    search(word){
     let curr=this.root;
     for(let i of word){
        if(!curr.Children[i]){
            return false
        }
        curr=curr.Children[i]
     }
     return true
    }


    autocompletion(prefix){
        let curr=this.root;
        for(let i of prefix){
            if(!curr.Children[i]){
                return []
            }
            curr=curr.Children[i]
        }

        let result=[]
        function dsf(node,word){
            if(node.isEnd){
                result.push(word)
            }
            for(let i in node.Children){
                dsf(node.Children[i],word+i)
            }
        }

        dsf(curr,prefix);
        return result
    }
}


const t=new trie()
t.insert("cat")
t.insert("car")
t.insert("cap")
// console.log(t.search("ca"))

console.log(t.autocompletion("c"))
