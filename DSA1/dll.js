class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    InsertAtFirst(data){
        const newNode = new Node(data)
        if(this.head==null){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    InsertAtEnd(data){
        const newNode = new Node(data)
        if(this.head==null){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }
    InsertNextTo(nextTo,data){
        const newNode = new Node(data)
            if(this.head == null){
                this.head = newNode
                this.tail = newNode
                return
            }if(this.tail.data==nextTo){
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
                return
            }
            let current = this.head
            while(current!=null && current.data!=nextTo){
                current = current.next
            }
            if(current == null){
                console.log('Node Not Found')
                return
            }
            newNode.next = current.next
            current.next.prev = newNode
            newNode.prev = current
            current.next = newNode
    }
    
    InsertBefore(before,data){
        const newNode = new Node(data)
        if(this.head==null){
            this.head = newNode
            this.tail = newNode
            return
        }
        if(this.head.data==before){
            this.head.prev = newNode
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
        current.next.prev = newNode
        newNode.prev = current
        current.next = newNode
    }
    DeleteAtFirst(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        this.head.next.prev = null
        this.head = this.head.next
       
    }
    DeleteAtEnd(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        this.tail.prev.next = null
        this.tail = this.tail.prev 
    }
    DeleteAfter(after){
        if(this.head==null){
            console.log('Empty')
            return
        }
        if(this.tail.data==after){
            console.log('there is no data to deleting')
            return
        }
        if(this.tail.prev.data == after){
            this.tail.prev.next = null
            return
        }
        let current = this.head
        while(current!=null && current.data!=after){
            current = current.next
        }
        if(current==null){
            console.log('Node Not Found')
            return
        }
        current.next.next.prev = current
        current.next = current.next.next
    }
    DeleteBefore(before){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.head
        while(current!=null && current.next.data!=before){
            current = current.next
        }
        if(current==null){
            console.log('Node not found')
            return
        }
        current.next.prev = current.prev
        current.prev.next = current.next
    }
    Reverse(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.tail
        let result = ''
        while(current!=null){
            result += current.data+'->'
            current = current.prev
        }
        console.log(result,'Null')
    }
    Sort(){
        if(this.head==null){
            console.log('Empty')
            return
        }
        let current = this.head
        while(current!=null){
            let small = current
            let next = current.next
            while(next!=null){
                if(next.data<small.data){
                    small = next
                }
                next = next.next
            }
            let temp = small.data
            small.data = current.data
            current.data = temp
            current = current.next
        }
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
    
    Display(){
        if(this.head == null){
            console.log("Empty")
            return
        }
        let current = this.head
        let result = ''
        while(current!=null){
            result += current.data+'->'
            current = current.next
        }
        console.log(result,'Null')
    }
}
const DLL = new DoublyLinkedList()
DLL.InsertAtFirst(5)
DLL.InsertAtFirst(4)
DLL.InsertAtFirst(3)
DLL.InsertAtFirst(2)
DLL.InsertAtFirst(1)
DLL.Display()
DLL.InsertAtEnd(10)
DLL.Display()
DLL.InsertNextTo(10,100)
DLL.Display()
DLL.InsertBefore(1,500)
DLL.Display()
DLL.DeleteAtFirst()
DLL.Display()
DLL.DeleteAtEnd()
DLL.Display()
DLL.DeleteBefore(4)
DLL.Display()
DLL.DeleteAfter(4)
DLL.Display()
// DLL.Reverse()
// DLL.Display()
// DLL.Sort()
// DLL.Display()