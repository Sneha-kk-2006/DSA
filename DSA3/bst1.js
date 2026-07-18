class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}

class Binarysearchtree{
    constructor(){
        this.root=null
    }

   insert(val){
    let newnode=new Node(val);
     
    if(!this.root){
        this.root=newnode
        return
    }
   let curr=this.root;
   while(true){
   if(val<curr.data){
    if(!curr.left){
      curr.left=newnode
      return
    }else{
        curr=curr.left
    }
   }else if(val>curr.data){
   if(!curr.right){
    curr.right=newnode
    return
   }else{
    curr=curr.right
   }
   }else{
    return 
   }

   
   }
}

 findmin(root){
    if(!root)return null;
    if(!root.left){
        return root
    }
    return this.findmin(root.left)
 }

  remove(val){
    this.root=this.deleteNode(this.root,val)
    return true
  }

  deleteNode(root,val){
    if(!root) return null;
    if(val<root.data){
        root.left=this.deleteNode(root.left,val)
    }else if(val>root.data){
        root.right=this.deleteNode(root.right,val)
        
    }else{
        //case 1 : no children (leaf node)
        if(!root.left&&!root.right){
            return null
        }

        //case 2 :one child

        if(!root.left){
            return root.right;
        }
        if(!root.right){
            return root.left
        }

        let min=this.findmin(root.right)
        root.data=min.data;
        root.right=this.deleteNode(root.right,min.data)
    }
    return root
  }

  checkbst(root,min=-Infinity,max=Infinity){
  if(!root)return true;
  if(root.data<min||root.data>max)return false
   return (this.checkbst(root.left,min,root.data)&&
   this.checkbst(root.right,root.data,max));
  }


  closest(root,target){
    let curr=root
    let closest=root.data
    while(curr){
        if(Math.abs(curr.data-target)<Math.abs(closest-target)){
            closest=curr.data
        }

        if(target===closest){
            return curr.data
        }

        if(target<curr.data){
            curr=curr.left;
        }else{
            curr=curr.right
        }
    }
    return closest
  }


  kthelement(root,k){
    let res=this.inorderkth(root,[]);
    return res[k-1]
  }
  inorderkth(root,result){
    if(!root) return result;
    //largest value in bst
      this.inorderkth(root.right,result);

    result.push(root.data)
    //smallest 
      this.inorderkth(root.left,result)
    return result;
  }




countleaf(root){
    if(!root) return 0
    if(!root.left&&!root.right){
       return 0
    } 
 return this.countleaf(root.left)+this.countleaf(root.right)+1
}




countsinglenode(root){
    if(!root)return 0;
    if(!root.left&&!root.right){
        return 0
    }
    return this.countsinglenode(root.left)+this.countsinglenode(root.right)+1
}


findmin(root){
    if(!root) return 0;
    if(!root.left){
        return root.data
    }
    return this.findmin(root.left)
}


checkbstidentical(root1,root2){
    if(!root1&&!root2){
        return true
    }

    if(!root1||!root2) return false

    if(root1.data!==root2.data) return false

    return this.checkbstidentical(root1.left,root2.left)&&this.checkbstidentical(root1.right,root2.right)
}


rangesum(root,low,high){
    if(!root) return 0;
    if(root.data<low){
        return this.rangesum(root.right,low,high)
    }
    if(root.data>high){
        return this.rangesum(root.left,low,high)
    }
    return(root.data+this.rangesum(root.left)+this.rangesum(root.right))
}


   inorder(root){
    if(!root) return 
    this.inorder(root.left)
    console.log(root.data)
    this.inorder(root.right)
   }

}

const bst=new Binarysearchtree()
// bst.insert(1)
// bst.insert(2)
// bst.insert(3)
// bst.insert(4)

// bst.inorder(bst.root)



// console.log(bst.remove(20))
// console.log("removeed")
// bst.inorder(bst.root)

// console.log("is this bst",bst.checkbst(bst.root))


const bst1=new Binarysearchtree();
[50, 30, 70, 20, 40, 60, 80].forEach(v=>bst1.insert(v))

console.log("new")

bst1.inorder(bst1.root)
// console.log("is this bst1",bst1.checkbst(bst1.root))
console.log("smallest value",bst1.kthelement(bst1.root,1))
console.log("Closest to 38:", bst1.closest(bst1.root, 38));
console.log("Range sum (20-60):", bst1.rangesum(bst1.root, 20, 60));

console.log("count leafnode",bst1.countleaf(bst1.root))
console.log("count single nodes",bst1.countsinglenode(bst1.root))
console.log("minumum",bst1.findmin(bst1.root))
