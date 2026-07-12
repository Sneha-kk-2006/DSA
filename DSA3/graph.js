//adjacency matrix

// const matrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// console.log(matrix[0][1])


//adjacency list


// const  adjlist={
//     'A':["B"],
//     'B':['A','C'],
//     'C':['B']
// }

// console.log(adjlist['C'])



class Graph{
    constructor(){
        this.adjacencyList={}
    }

    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }

    addedge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    //checking the edge btwn vertices

     hasedge(v1,v2){
        return (
        this.adjacencyList[v1].has(v2)&&
        this.adjacencyList[v2].has(v1)
        )
     }


     //removing edge

     removeEdge(v1,v2){
        this.adjacencyList[v1].delete(v2)
        this.adjacencyList[v2].delete(v1)
     }


     //removing vertices

      removeVertex(v){
        if(!this.adjacencyList[v]){
            return
        }
        for(let i of this.adjacencyList[v]){
            this.removeEdge(v,i)
        }
        delete this.adjacencyList[v]

      }


    print(){
        for(let i in this.adjacencyList){
            console.log(i +'--->'+[...this.adjacencyList[i]])
        }
    }


}

const g=new Graph()
g.addvertex('A')
g.addvertex('B')
g.addvertex('C')


g.addedge('A','B')
g.addedge('B','C')

// g.print()

// console.log(g.hasedge('A','C'))


// g.removeEdge('A','B')
g.removeVertex('B')

g.print()





























