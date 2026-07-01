class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    InsertAtFirst(data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    InsertAtEnd(data){
        let newNode = new Node(data)
        if(this.head==null){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
      this.tail =  newNode
    }
    InsertAfter(after,data){
        const newNode = new Node(data)
        if(this.head==null){
            this.head = newNode
            this.tail = newNode
            return
        }
        let current = this.head
        while(current!=null && current.data!=after){
            current = current.next
        }
        if(current==null){
            console.log('NOde Not Found')
            return
        }
        newNode.next = current.next
        current.next  = newNode
    }
    InsertBefore(before,data){
        const newNode = new Node(data)
        if(this.head == null ){
            this.head = newNode
            this.tail = newNode
            return
        }
        if(this.head.data == before){
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next!=null && current.next.data!=before){
            current = current.next
        }
        if(current.next==null){
            console.log('Node Not Found')
            return
        }
        newNode.next = current.next
        current.next = newNode
    }
    sort(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.head
        while(current!==null){
            let small = current
            let currentNext = current.next
            while(currentNext!==null){
                if(currentNext.data<small.data){
                    small = currentNext
                }
                currentNext = currentNext.next
            }
            let temp = small.data
            small.data = current.data
            current.data = temp
            current  = current.next
        }
    }
    DeleteAtFirst(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        this.head = this.head.next
    }
    DelateAtEnd(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.head
        while(current.next.next!=null){
            current = current.next
        }
        current.next = null
    }
    DeleteNextTo(value){
        if(this.head==null){
            console.log('empty')
            return
        }
        let current = this.head
        while(current.next!=null && current.data!= value){
            current = current.next
        }
        if(current.next==null){
            console.log('Node Not found')
            return
        }
        current.next = current.next.next
    }
    DeleteBefore(value){
        if(this.head==null){
            console.log('Empty')
            return
        }
        if(this.head.data==value){
            console.log('There is no data for deleting')
            return
        }
        if(this.head.next.data==value){
            this.head = this.head.next 
            return
        }
        let current = this.head
        let prev = null
        while(current.next!=null && current.next.data!=value){
            prev = current
            current = current.next
        }
        if(current.next==null){
            console.log('NOde Not Found')
            return
        }
        prev.next = current.next
    }
    DeleteTheValue(value){
        if(this.head==null){
            console.log('Empty')
            return 
        }
        if(this.head.data == value){
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        while(current!=null&&current.data!=value){
             prev = current
            current = current.next
        }
        if(current==null){
            console.log('Node Not Found')
            return
        }
        prev.next = current.next
    }
    Reverse(){
        if(this.head == null){
            console.log('Empty')
            return
        }
        let next = null
        let current = this.head
        let prev = null
        while(current!=null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
     removeDup(){
        let current = this.head
        while(current!=null && current.next!=null){
            if(current.data==current.next.data){
                let dup = current.next
                current.next = dup.next
                if(dup.next){
                    dup.next.prev = current
                }else{
                    this.tail = current
                }
            } else{
                current = current.next
            }
        }
    }
     RemoveDup(data){
            const newNode = new Node(data)
            if(this.head==null){
                this.head = newNode
                this.tail.newNode
                return
            }
            let current = this.head
            while(current!==null){
                if(current.data===data){
                    console.log('duplicate not allowed')
                    return
                }
                current = current.next 
            }
            this.tail.next = newNode
            this.tail = newNode
        }
    
    Display(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.head
        let result = ''
        while(current!=null){
            result += current.data +'->'
            current = current.next
        }       
        
        console.log(result,'Null')
    }
}
const LL = new LinkedList()
LL.InsertAtFirst(3 )
LL.InsertAtFirst(2 )
LL.InsertAtFirst(3)
// LL.Display()
LL.InsertAtEnd(10)
LL.InsertAtEnd(20)
// LL.Display()
LL.InsertAfter(3,100)
// LL.Display()
LL.InsertBefore(1,500)
// LL.Display()
// LL.sort()
// LL.Display()
// LL.Reverse()
// LL.Display()
// LL.DeleteAtFirst()
// LL.Display()
// LL.DelateAtEnd()
// LL.Display()
// LL.DeleteBefore(10)
// LL.Display()
// LL.DeleteTheValue(2)
LL.removeDup()
LL.Display()