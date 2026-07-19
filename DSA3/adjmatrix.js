class Graph{
    constructor(numv){
        this.numv=numv;
        this.matrix=Array.from({length:numv},()=>new Array(numv).fill(0))
    }
    
    adde(v1,v2){
        this.matrix[v1][v2]=1;
        this.matrix[v2][v1]=1
    }
    hasedge(v1,v2){
        return this.matrix[v1][v2]===1
    }
    
    removeedge(v1,v2){
        this.matrix[v1][v2]=0
        this.matrix[v2][v1]=0
    }
    
    bfs(start){
        let visit=new Set()
        let queue=[start]
        let res=[]
        visit.add(start)
       while(queue.length>0){
        let curr=queue.shift()
      res.push(curr)
        for(let i =0;i<this.numv;i++){
          if(this.matrix[curr][i]==1&&!visit.has(i)) {
            visit.add(i)
            queue.push(i)
          } 
        }

       }
       return res
    }

    dfs(start){
        let visit=new Set()
        let res=[]
        let traverse=(node)=>{
            visit.add(node);
            res.push(node)
            for(let i=0;i<this.numv;i++){
                if(this.matrix[node][i]===1&&!visit.has(i)){
                    traverse(i)
                }
            }
        }
        traverse(start)
        return res
    }

    
}
const g=new Graph(3)
g.adde(1,0)
g.adde(0,1)
g.adde(1,2)
console.log(g.matrix)
// console.log(g.hasedge(1,0))

console.log(g.removeedge(0,1))
console.log(g.matrix)