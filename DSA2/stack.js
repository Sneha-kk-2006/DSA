//Both operations take O(1) time because they only access or update the top pointer.
// 
// 
//  class stack{
//     constructor(){
//         this.item=[]
//         this.top=-1;
//     }

//     push(val){
//         this.top++;
//         this.item[this.top]=val
//     }

//    pop(){
//     if(this.top===-1){
//         return "is empty"
//     }
//     let value=this.item[this.top]
//     this.item.length=this.top;
//     this.top--;


//     return value
//    }


//    peek(){
//     if(this.top===-1){
//         return null
//     }
//     return this.item[this.top]
//    }
   
//    print(){
//     console.log(this.item)
//    }

// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)

// s.push(40)
// console.log(s.peek())
// s.pop()
// s.print()


class Node{
    constructor(val){
        this.data=val;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null
    }
    push(val){
    let node=new Node(val)
 node.next=this.top
 this.top=node

    }
    
    pop(){
    if(this.top===null){
        return "empty"
    }
    let val=this.top.data
    this.top=this.top.next
  return val

    }


    peek(){
        if(this.top==-1){
            return "empty"
        }
        return this.top.data
    }


    print(){
        let curr=this.top;
        while(curr!=null){
        console.log(curr.data)
        curr=curr.next
        }
    }


}

function palin(str){
    let s=new stack()
    for(let i of str){
        s.push(i)
    }

    for(let i=0;i<str.length;i++){
        if(str[i]!==s.pop()){
            return false
        }
    }
    return true
}

function validparenthesis(str){
let stack=[]
let map={
    '}':'{',
    ']':'[',
    ')':'('
}
    for(let ch of str){
     if(ch==='{'||ch==='('||ch==='['){
        stack.push(ch)
     }else{
       if( stack.pop()!==map[ch]){
             return false;
        }
       
     }
     return stack.length===0
    }
}


console.log(validparenthesis("()"))



// console.log(palin("maam"))
// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.pop()
// console.log(s.peek())
// s.print()







