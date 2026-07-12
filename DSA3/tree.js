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