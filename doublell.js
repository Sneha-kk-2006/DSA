class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doublelinkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  isEmpty(){
    return this.size===0
  }

  prepend(data){
    const node=new Node(data);
    if(this.isEmpty()){
        this.head=node;
        this.tail=node;
    }else{
        node.next=this.head;
        this.head.prev=node
        this.head=node
    }
    this.size++;
  }


append(data){
    const node=new Node(data)
    if(this.isEmpty()){
        this.head=node;
        this.tail=node;
    }else{
        node.prev=this.tail
        this.tail.next=node
        this.tail=node;
        

    }
    this.size++;
}


remove(){
    let rem=this.head
    if(this.isEmpty(0)){
        return null;
    }
    if(this.size===1){
        this.head=null;
        this.tail=null;
    }else{
        this.head=this.head.next
        this.head.prev=null;
    }
    rem.next=null;
    this.size--;
    return rem.data
}
removelast(data){
    let rem=this.tail;
    if(this.isEmpty()){
        return null;
    }
    if(this.size===1){
        this.head=null;
        this.tail=null
    }else {
        this.tail=this.tail.prev
        this.tail.next=null;
    }
    rem.prev=null;
  this.size--;
  return rem.data
}

middle(data){
    if(this.size===0){
        return null;
    }
    let slow=this.head;
    let fast=this.head;
    while(fast!=null&&fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    console.log("middle",slow.data)
    return slow.data
}
     

reverse(data){
    if(this.size===0){
        return null;
    }
    let curr=this.head;
    let temp=null;
    while(curr!=null){
        temp=curr.prev;
        curr.prev=curr.next;
        curr.next=temp;
        curr=curr.prev
    }

    temp=this.head;
    this.head=this.tail;
    this.tail=temp
}


  print(){
    let curr=this.head;
    let list = '';

    while(curr){
        list += ` ${curr.data} -> `
        curr=curr.next
    }

    console.log(list + 'null');
  }


   
}

const li=new doublelinkedlist()
li.prepend(10)
li.prepend(20)// 20 10 30 40
li.append(30)
li.append(40)
// li.remove()
// li.removelast()
// li.middle()
li.reverse()
li.print()
// console.log(li)