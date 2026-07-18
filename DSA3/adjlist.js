class Graph{
    constructor(){
        this.adj={}
    }
    addv(v){
      if(!this.adj[v]){
          this.adj[v]=[]
      }  
    }
    
    adde(v1,v2){
        this.adj[v1].push(v2)
        this.adj[v2].push(v1)
    }
    
    remove(v1,v2){
        this.adj[v1]=this.adj[v1].filter(v=>v!==v2)
        this.adj[v2]=this.adj[v2].filter(v=>v!==v1)
    }
    
    
    hasedge(v1,v2){
       return this.adj[v1].includes(v2) 
    }
    
   
    
    
    bfs(start){
        let visit=new Set();
        let res=[]
        let queue=[start]
        visit.add(start)
        while(queue.length>0){
            let curr=queue.shift()
            res.push(curr)
            for(let i of this.adj[curr]){
                if(!visit.has(i)){
                    visit.add(i)
                    queue.push(i)
                }
            }
        }
        return res
    }
    
    
    dfs(start,visit=new Set(),res=[]){
        visit.add(start)
        res.push(start)
        for(let i of this.adj[start] ){
            if(!visit.has(i)){
               this.dfs(i,visit,res)
            }
        }
        return res
        
    }
    
    iscyclic(){
        let visit=new Set()
        const dfs=(node,parent)=>{
           visit.add(node)
            for(let i of this.adj[node]){
                if(!visit.has(i)){
                   if(dfs(i,node)){
                       return true
                   }
                }else if(i!==parent){
                    return true
                }
            }
            return false
        }
        return dfs(Object.keys(this.adj)[0], null);
        
    }
    
}

const g=new Graph()


//cycle

g.addv('A')
g.addv('B')
g.addv('C')

g.adde('A','B')
g.adde('B','C')
// g.adde('C','A')


// g.addv("A");
// g.addv("B");
// g.addv("C");
// g.addv("D");
// g.addv("E");
// g.addv("F");
// g.addv("G");
// g.adde("A", "B");
// g.adde("A", "C");
// g.adde("A", "D");
// g.adde("B", "E");
// g.adde("B", "F");
// g.adde("D", "G");
// console.log(g.bfs('A'))
// console.log(g.dfs('A'))

// console.log(g.iscyclic())
console.log(g.adj)
// console.log(g.hasedge('A','C'))

// g.remove('A','B')
console.log(g.adj)


