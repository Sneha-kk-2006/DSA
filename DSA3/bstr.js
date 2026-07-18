class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class bst{
    constructor(root){
        this.root=null
    }

    insert(val){
    let node=new Node(val)
    if(!this.root){
       return this.root=node
    }
    let curr=this.root
    while(true){
        
        if(val<curr.value){
            if(!curr.left){
                curr.left=node;
                return
            }
            curr=curr.left
        }else{
            if(!curr.right){
                curr.right=node
                return
            }
            curr=curr.right
        }
    }


    }


    preorder(root){
       if(!root) return null
        console.log(root.value)
         this.preorder(root.left)
        this.preorder(root.right)
    }
}

const b=new bst()
b.insert(5)   // root
b.insert(15)  // 15 > 5 -> right
b.insert(2)   // 2 < 5 -> left
b.insert(7)   // 7 > 5 -> right(15), 7 < 15 -> left of 15
b.insert(12)  // 12 > 5 -> right(15), 12 < 15 -> left(7), 12 > 7 -> right of 7
b.insert(20)  // 20 > 5 -> right(15), 20 > 15 -> right of 15

b.preorder(b.root)