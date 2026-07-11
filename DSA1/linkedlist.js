class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//----------------------------------------
class linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getsize() {
    return this.size;
  }

  //-------------------------------------------------------
  prepend(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //----------------------------------------------------
  append(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  //-------------------------------------
  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      return this.prepend(data);
    } else {
      const node = new Node(data);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //----------------------------------------

  remove(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removed;
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removed = prev.next;
      prev.next = removed.next;
    }
    this.size--;
  }

  //-------------------------------------------


  search(data){
    if(this.size===0){
        return -1
    }
    let i=0;
    let curr=this.head;
    while(curr){
        if(curr.data===data){
            console.log(i)
            return i
        }
        curr=curr.next;
        i++;
    }
    return -1
  }
  //-------------------------------------------------------------

  reverse(data){
    let prev=null;
    let nextnode;
    let curr=this.head;
    while(curr){
      nextnode=curr.next;
      curr.next=prev;
      prev=curr;
      curr=nextnode
    }
    this.head=prev
    return prev
  }





  print() {
    if (this.isEmpty()) {
      console.log("is empty");
    }
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const list = new linkedlist();
// console.log(list.isEmpty())
// console.log(list.getsize())
// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// list.prepend(4)

// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)

list.insert(10, 0);
list.insert(20, 0);
list.insert(30, 1);
list.insert(40, 2);
list.remove()
// list.reverse()
// list.search(30)

// console.log(list.remove(1))
list.print();
