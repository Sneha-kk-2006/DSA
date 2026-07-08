// class stack{
//     constructor(){
//         this.item=[]
        
//     }
    
//     push(val){
//         this.item.push(val)
//     }
    
//     pop(){
//         if(this.item.length===0){
//             return "it empty"
//         }
        
//         return this.item.pop()
//     }
    
    
//     peek(){
//         return this.item[this.item.length-1]
//     }
    
//     print(){
//         console.log(this.item)
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// // console.log(s.pop())
// console.log(s.peek())
// s.print()










class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null;
        this.size=0
    }
    
    
    push(val){
        let node=new Node(val)
         node.next=this.top
          this.top=node
          this.size++
        
    }
    
    
    pop(){
        let val=this.top
     this.top=this.top.next;
     return val
    }
    
    peek(){
        return this.top
    }
    
    
    print(){
        let top=this.top;
        let list=''
        while(top){
           list+=`${top.data}-->`
            top=top.next
        }
         console.log(list+null)
        
    }
}

let s=new stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)

// console.log(s.pop())
console.log(s.peek())
s.print()










