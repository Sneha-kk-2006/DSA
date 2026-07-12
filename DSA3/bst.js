class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class BST{
    constructor(){
        this.root=null;
    }
    
    insert(val){
        let node=new Node(val)
       if(this.root===null){
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
    
    // preorder(root){
    //      if (root === null) return;
    //     console.log(root.value)
    //     this.preorder(root.left)
    //     this.preorder(root.right)
    // }
    
    inorder(root){
        if(!root)return ;
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
    
}

// function isbalanced(root){
//     return heightcheck(root)!==-1
// }

// function heightcheck(node){
//     if(node===null) return -1
//     let lefth=heightcheck(node.left)
//     if(lefth===-1)return -1
//     let righth=heightcheck(node.right)
//     if(righth===-1)return -1
//     if(Math.abs(lefth-righth)>1){
//         return -1
//     }
//     return Math.max(lefth,righth)+1
       
// }
// function height(root){
//     if(!root) return null
//     return 1+Math.max(height(root.left),height(root.right))
// }


// function countleaf(root){
//     if(!root) return 0
//     if(!root.left&&!root.right){
//         return 1
//     }
//     return countleaf(root.left)+countleaf(root.right)
// }

// function singlenodecount(root){
//     if(!root) return 0
//     let count=0
//     if(root.left&&!root.right||root.right&&!root.left)
//     count=1
//     return count+
//     singlenodecount(root.left)+
//     singlenodecount(root.right)
// }


function sumofleft(root){
    if(!root) return 0
    let sum=0
    if(root.left&&!root.left.left&&!root.left.right){
        sum+=root.left.value
    }
    return sum+
    sumofleft(root.left)+
    sumofleft(root.right)
}

const b=new BST()
// b.insert(10)
b.insert(5)
b.insert(15)
b.insert(2)
b.insert(7)
b.insert(12)
b.insert(20)
// b.preorder(b.root)
b.inorder(b.root)

// console.log(countleaf(b.root))
// console.log(singlenodecount(b.root))

console.log("summmm",sumofleft(b.root))

// console.log(isbalanced(b.root))

// console.log(height(b.root))
