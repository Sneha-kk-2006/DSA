class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newnode = new Node(val);
    
    if (!this.root) {
      this.root = newnode;
      return
    }

    let curr = this.root;

    while (true) {
      if (val < curr.value) {
        if (!curr.left) {
          curr.left = newnode;
          return;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newnode;
          return 
        }
        curr = curr.right;
      }
      
    }
  }

  inorder(root){
    if(!root)return null;
    this.inorder(root.left);
    console.log(root.value)
    this.inorder(root.right)
  }
search(val){
    if(!this.root)return false
    let curr=this.root
    while(curr){
        if(val===curr.value){
            return true;
        }
        if(val<curr.value){
            curr=curr.left;
        }else{
            curr=curr.right;
        }
    }
    return false

}

findmin(root){
if(!root.left){
    return root.value
}else{
    return this.findmin(root.left)
}
}

}

const b=new bst()
b.insert(10)
b.insert(1)
b.insert(15)
b.insert(24)
b.insert(20)
b.inorder(b.root)

console.log(b.search(11))
console.log(b.findmin(b.root))
