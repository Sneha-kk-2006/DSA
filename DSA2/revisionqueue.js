// class queue{
//     constructor(){
//         this.item=[];
//         this.front=0;
//         this.rear=0;
//     }
    
//     enqueue(val){
//       this.item[this.rear]=val;
//       this.rear++
//     }
    
//     dequeue(){
//         if(this.front=== this.rear){
//             return "underflow"
//         }
//         let val=this.item[this.front]
//         this.item[this.front]=undefined;
//         this.front++
//         return val
//     }
    
//     peek(){
//         return this.item[this.front]
//     }
    
//     print(){
//         console.log(this.item)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// // console.log(q.dequeue())
// console.log(q.peek())





class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

class queue{
    constructor(){
        this.rear=null;
        this.front=null;
        this.size=0
    }
    
    
    enqueue(val){
        let node=new Node(val)
if(this.front===null){
    this.front=node;
    this.rear=node;
    
}else{
this.rear.next=node
this.rear=node;
}
this.size++
    }
    
    
    dequeue(){
       if(this.front===null){
           return "empty"
       } 
       let val=this.front
       this.front=this.front.next;
       return val
       
       if(this.front===null){
           this.rear=null
       }
       this.size--;
    }
    
    peek(){
        if(this.front===null){
            return "null"
        }
        return this.front.data
    }
    
    print(){
        let curr=this.front
        let list=''
        while(curr){
            list+=`${curr.data}-->`
            curr=curr.next
        }
        
        console.log(list+null)
    }
}

let q=new queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
console.log(q.peek())
q.dequeue()
q.print()





