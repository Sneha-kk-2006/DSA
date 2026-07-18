class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Binarytree{
    constructor(){
        this.root=null
    }
}



const tree=new Binarytree()
tree.root = new Node(50);
tree.root.left = new Node(40);
tree.root.right = new Node(30);

tree.root.left.left = new Node(20);
tree.root.left.right = new Node(10);

tree.root.right.left = new Node(15);
tree.root.right.right = new Node(5);

// function preorder(root){
// if(root===null) return null;
// console.log(root.data)
// preorder(root.left)
// preorder(root.right)
// }
// preorder(tree.root);


// function inorder(root){
//     if(root===null) return null;
//     inorder(root.left)
//     console.log(root.data)
//     inorder(root.right)
// }

// inorder(tree.root)


function postorder(root){
    if(root===null) return null;
    postorder(root.left)
    postorder(root.right)

    console.log(root.data)
}

postorder(tree.root)




class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class binarytree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    
    // insert(val){
    //     let newnode=new Node(val)
    //     if(this.isEmpty()){
    //         this.root=newnode
    //         return ;
    //     }
    //     let curr=this.root
    //     while(curr){
    //         if(val<curr.value){
    //             if(!curr.left){
    //                 curr.left=newnode
    //                 return
    //             }
    //             curr=curr.left
    //         }else if(val>curr.value){
    //             if(!curr.right){
    //                 curr.right=newnode
    //                 return
    //             }
    //             curr=curr.right
    //         }
    //     }
    //     return null
        
    // }
    
    
    insert(val){
        let newNode=new Node(val)
        if(this.isEmpty()){
            this.root=newNode;
            return
        }
        
        let queue=[]
        queue.push(this.root);
        while(queue.length>0){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=newNode
                return
            }else{
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right=newNode
                return
            }else{
                queue.push(curr.right)
            }
        }
    }
    
    inorder(root){
        if(!root) return null;
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
        
    }
    
}

const bt=new binarytree()
bt.insert(10)
bt.insert(5)
bt.insert(15)
bt.insert(6)
bt.insert(8)
bt.insert(20)
bt.inorder(bt.root)