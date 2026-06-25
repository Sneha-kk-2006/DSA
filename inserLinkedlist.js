class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null;
    }

    fromarray(arr){
        if(arr.length===0){
            return null;
        }
        this.head=new Node(arr[0])
        let curr=this.head;

        for(let i=1;i<arr.length;i++){
            curr.next=new Node(arr[i])
            curr=curr.next;
        }
    }

    print(){
        let res=[];
        let curr=-this.head;
        while(curr){
            res.push(curr.data)
            curr=curr.next
        }

    }
}

const li=new linkedlist()
let arr=[1,2,3,4]

li.fromarray(arr)
li.print()