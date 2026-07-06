// class queue{
//     constructor(){
//         this.item=[]
//         this.front=0;
//         this.rear=0;
//     }

//     enqueue(val){
//         if(this.item===null){
//             return empty;
//         }
//         this.item[this.rear]=val
//         this.rear++
//     }

//     dequeue(){
//         if(this.rear===this.front){
//             return null
//         }
        
//         let value=this.item[this.front]
//         this.front++
//         return value

//     }

//     peek(){
//         if(this.front===this.rear){
//             return null;
//         }
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
// // console.log(q.dequeue())
// console.log(q.peek())
// q.print()




class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }


    enqueue(val){
        let node=new Node(val)
        if(this.front===null){
            this.front=node;
            this.rear=node;
        }else{
   this.rear.next=node;
        this.rear=node;
        }
     
    }

    dequeue(){
        if(this.front===null){
            return "empty"
        }
        let val=this.front.data;
        this.front=this.front.next;
        return val
    }


    peek(){
        if(this.front===null){
            return "is empty"
        }

        return this.front.data
    }

    print(){
        let curr=this.front;
        while(curr!=null){
            console.log(curr.data)
            curr=curr.next
        }
    }
}

const q=new queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

console.log("deleetd" ,q.dequeue())

console.log("peek ",q.peek())
q.print()