class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    
    }
}

class linkedlist{
    constructor(data){
        this.head=data;
        this.tail=null;
        this.size=0
    }

   prepend(data) {
    let node = new Node(data);

    if (this.size === 0) {
        this.head = node;
        this.tail = node;
        this.size++;
        return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;

    this.size++;
}

    addend(data){
        let node=new Node(data)
      if(this.size===0){
        this.head=node;
        this.tail=node;
      }else{
     node.prev=this.tail;
       this.tail.next=node;
      this.tail=node; 
      }
    
        this.size++
     

    }


    addafter(after,val){
        let node=new Node(val)
        if(this.size===0){
            this.head=node;
            this.tail=node
        }
        let curr=this.head;
        while(curr!=null&&curr.data!=after){
            curr=curr.next
        }
         node.next=curr.next;
         node.prev=curr;
         curr.next.prev=node;
         curr.next=node


         this.size++;

    }




    addbefore(bef,val){
        let node=new Node(val)

        let curr=this.head;
        while(curr!=null&&curr.next.data!=bef){

        }
        node.next=curr.next;
        node.prev=curr;
        curr.next.prev=node;
        curr.next=node;
        this.size++;
    }



    remove1(val){
        let curr=this.head;
        while(curr.data!=val){
         curr=curr.next
        }
        this.head=this.head.next;
        this.size--;
    }

    removelast1(val){
          
     if(this.tail===null){
        return
     }else{
        this.tail=this.tail.prev;
        this.tail.next=null;
     }
        this.size--;
    }

  removeafter(af){
    let curr=this.head;
    while(curr!=null&&curr.data!=af){
        curr=curr.next
    }
curr.next.next.prev=curr;
curr.next=curr.next.next
this.size--;


  }

  removebefore(bef){
    let curr=this.head;
     while(curr!=null&&curr.next.data!=bef){
        curr=curr.next
    }
curr.prev.next=curr.next;
curr.next.prev=curr.prev

    this.size--;

  }



    print(data){
        let curr=this.head;
        let list='';
        while(curr){
            list+=`${curr.data}<-->`
            curr=curr.next
        }
        console.log(list + null)
       
    }
}

const li=new linkedlist()
li.prepend(10)
li.prepend(20)
li.prepend(30)

li.addend(5)

li.addafter(20,15)

li.addbefore(20,25)
// li.remove1(30)
// li.removelast1(5)
// li.removeafter(25)
li.removebefore(15)
li.print()

// console.log(li)