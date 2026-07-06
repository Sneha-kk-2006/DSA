class Queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }


    enqueue(val){
        this.stack1.push(val)
    }

    dequeue(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length===0){
                 return "Queue is empty";
        }
    
      return this.stack2.pop()
    }

    print(){
        console.log(this.stack2)
    }

}

let q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q.dequeue())
q.print()