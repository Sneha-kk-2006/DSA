class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class linkedlist{
    isEmpty(){
        return this.size===0
    }

    prepend(data){
        let node=new Node(data)
        if(this.isEmpty()){
          this.head=node;
          node.next=null;
        }else{
            node.next=this.head;
            this.head=node;
            this.next=null
        }
        this.size++;
    }
  apend(data){
    let node=new Node(data)
    if(this.isEmpty()){
          this.head=node;
          node.next=null;
        }
        let prev=this.head;
        while(prev.next){
     prev=prev.next;
        }
        prev.next=node
        this.size++;
  }

  inserting(data,index){
    let node=new Node(data)
    if(index<=0||index<this.size){
        return null;
    }else if (index===0){
        return this.prepend(data)
    }
    let prev=this.head
    for(let i=0;i<index-1;i++){
      prev=prev.next
    }
    node.next=prev.next;
    prev.next=node
   this.size++;
  }

  addingafter(after,val){
    let node=new Node(val)
    if(this.size===0){
        return null;
    }
    let curr=this.head;
    while(curr!=null&&curr.data!=after){
        curr=curr.next
    }
    node.next=curr.next;
    curr.next=node
  this.size++;
  }


  addingbefore(before,val){
    let node=new Node(val)
    if(this.size===0){
        return null;
    }
   if(this.head.data===before){
 node.next=this.head;
 this.head=node;
 this.size++;
 return
   }

 let prev=null;
 let curr=this.head;
 while(curr!==null&&curr.data!==before){
    prev=curr;
    curr=curr.next
 }
 if(curr===null){
    return console.log("nothing to return")
 }

 prev.next=node;
 node.next=curr;
 this.size++;
 return;


  }



remove1st(data){
    if(this.head===null){
        return ;
    }
   this.head=this.head.next;
   this.size--;
  return
}

removelast1(data){
     if(this.head===null){
        return ;
    }
    let curr=this.head
   while(curr.next.next!==null){
    curr=curr.next
   }
   curr.next=null;
   this.size--;

}


removing(val){
    if(this.size===null){
        return
    }
    let prev=null;
    let curr=this.head
    while(curr!=null&&curr.data!=val){
       prev=curr
        curr=curr.next
    }
    prev.next=curr.next
    return
}


removeafter(after){
      if(this.size===null){
        return
    }
    let curr=this.head
    while(curr!=null&&curr.data!==after){
        curr=curr.next
    }
    curr.next=curr.next.next;
    this.size--;
    return
}


removebefore(before){
        if(this.size===null){
        return
    }
    let prevprev=null;
    let prev=this.head;
    let curr=this.head.next
    
    while(curr!=null&&curr.data!=before){
        prevprev=prev
        prev=curr
        curr=curr.next
    }
    prevprev.next=curr;
    this.size--;

}



// hascycle(data){
//     let slow=this.head;
//     let fast=this.head

//     while(slow!=null&&fast!=null){
//         slow=slow.next;
//         fast=fast.next.next;

//         if(slow===fast){
//             return console.log("true")
//         }
//     }
//         return console.log("noooo")
    
// }


middle(data){
     let slow=this.head;
    let fast=this.head

    while(fast !== null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;

     
    }
        return console.log(slow)
}


reverse(data){
    if(this.size===0){
        return null;
    }
    let prev=null;
    let curr=this.head;
    let next=null;
    while(curr!=null){
        next=curr.next;
        curr.next=prev
        prev=curr;
        curr=next
    }
    this.head=prev
}



// reverse(data){
//     if(this.size===0){
//         return 0;
//     }
//     let curr=this.head;
//      let prev=null
//      let next=null
//     while(curr.data!=null){

//     }
// // return 0
//     // curr.next=curr.prev;
//     // curr.prev.prev=curr;

// }


















// add(data){
//     if()
// }


//   removing(data,index){
//     let node=new Node(data)
//     let rem
//     if(index===0){
//      rem=this.head;
//      this.head=this.head.next;
//     }else{
   
//     }
//     this.size--;
//   }



sort(data){
    let curr=this.head
    while(curr!=null){
  let small=curr;
  let sec=curr.next;
  while(sec!=null){
    if(sec.data<small.data){
        small=sec
    }
    sec=sec.next
  }
  let temp=small.data
  small.data=curr.data;
  curr.data=temp
  curr=curr.next
    }

}

    print(data){
        let curr=this.head;
        let list=''
        while(curr){
          list+=`${curr.data}--->`
          curr=curr.next
        }
    console.log(list+ null)
    }
}


const li=new linkedlist()
li.prepend(10)
li.prepend(20)
li.prepend(30)
li.apend(50)
li.inserting(70,2)
li.sort()
li.addingafter(30,40)
li.addingbefore(70,60)
// li.remove1st()
// li.removelast1()
// li.removing(50)
// li.removeafter(30)
// li.removebefore(40)
// li.hascycle()
// li.middle()
li.reverse()
li.print()