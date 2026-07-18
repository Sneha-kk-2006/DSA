class maxheap{
    constructor(){
        this.heap=[]
    }
    
    insert(val){
  this.heap.push(val)
  this.heapifyup(val)

    }

    heapifyup(val){
    let index=this.heap.length-1
    
    while(index>0){
        let pindex=Math.floor((index-1)/2)
        if(this.heap[index]<this.heap[pindex]){
            break;
        }else{
            [this.heap[index],this.heap[pindex]]=[this.heap[pindex],this.heap[index]]
            index=pindex
        }
    }

    }

    remove(val){
       if(this.heap.length===0){
        return null;
       }
      
       if(this.heap.length===1){
        return this.heap.pop()
       }
       
       let min=this.heap[0];
       this.heap[0]=this.heap.pop()
       this.heapifydown()
   return min

    }

    heapifydown(i){
      let index=0;
      while(true){
      let left=Math.floor(2*i+1)
      let right=Math.floor(2*i+2)
      let small=index
     
     if(left<this.heap[small]&&left<this.heap.length){
        small=left
     }
     if(right<this.heap[small]&&right<this.heap.length){
        small=right
     }

     if(index===small){
        break;
     }

     [this.heap[index],this.heap[small]]=[this.heap[small],this.heap[index]]
     index=small

    }
}

}

const heap = new maxheap();

heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(5);

console.log(heap.heap)

console.log(heap.remove());

console.log(heap.heap)