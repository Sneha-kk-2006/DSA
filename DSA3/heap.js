class MinHeap{
    constructor(){
        this.heap=[]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(value)
    }
    heapifyUp(){
        let index=this.heap.length-1

        while(index>0){
            let parentindex=Math.floor((index-1)/2)
            if(this.heap[index]>=this.heap[parentindex]){
                break;
            }
            [this.heap[index],this.heap[parentindex]]=[this.heap[parentindex],this.heap[index]]
            index=parentindex
        }
    }

    remove(){
        if(this.heap.length===0){
            return null;
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown();
        return min
    }


    heapsort(arr){
        let n=arr.length;
        for(let i=Math.floor(n/2)-1;i>=0;i--){
            this.heapify1(arr,n,i)
        }

        for(let i=n-1;i>0;i--){
            [arr[0],arr[i]]=[arr[i],arr[0]]
            this.heapify1(arr,i,0)
        }
        return arr
    }

    heapify1(arr,n,i){
    
        let left=2*i+1
        let right=2*i+2
        let large=i

        if(left<n&&arr[left]>arr[large]){
            large=left
        }
        if(right<n&&arr[right]>arr[large]){
            large=right
        }

        if(large!==i){
            [arr[i],arr[large]]=[arr[large],arr[i]]
            this.heapify1(arr,n,large)
        }
   return arr
    }


    heapifyDown(){
        let index=0;
        while(true){
            let left=2*index+1;
            let right=2*index+2;
            let small=index
if(left<this.heap.length&&this.heap[left]<this.heap[small]){
    small=left
}

if(right<this.heap.length&&this.heap[right]<this.heap[small]){
   small=right
}

if(index===small){
    break;
}

[this.heap[index],this.heap[small]]=[this.heap[small],this.heap[index]]
index=small;
        }
    }



build(arr){
 this.heap=[...arr]

    let lastparentindex=Math.floor((this.heap.length-2)/2)

    for(let i=lastparentindex;i>=0;i--){
        this.heapifyDownfrom(i)
    }
}

heapifyDownfrom(index){
 
 while(true){
let left=2*index+1
 let right=2*index+2;
 let small=index
    if(left<this.heap.length&&this.heap[left]<this.heap[small]){
        small=left
    }
    if(right<this.heap.length&&this.heap[right]<this.heap[small]){
        small=right
    }
    if(index===small){
     break
    }

    [this.heap[index],this.heap[small]]=[this.heap[small],this.heap[index]]
  index=small
 }
}

}



function heapsort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>0;i--){
        heapify(arr,n,i)
    }


}



function heapify(arr,n,i){
    let largest=i;
    let left=Math.floor(2*i+1)
    let right=Math.floor(2*i+2)

    if(arr[left]>arr[largest]){
        largest=left
    }

    if(arr[right]>arr[largest]){
        largest=right
    }

}
const heap = new MinHeap();

heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(5);

console.log(heap.heap);

// console.log(heap.heap);
// // [5,15,10,40,20]

// console.log(heap.remove());
// // 5

// console.log(heap.heap);
// [10,15,20,40]

// heap.build([30,20,10,5,15]);

// console.log(heap.heap);

let arr=[1,20,5,3,15]

console.log("array sort",heap. heapsort(arr))










