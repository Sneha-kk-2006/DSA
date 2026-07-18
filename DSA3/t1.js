class Node{
    constructor(data){
  this.data=data
  this.left=null;
  this.right=null
    }
}

class tree{
    constructor(){
        this.root=null;
    }

    insert(val){
        let newnode=new Node(val)
        if(!this.root) {
            this.root=newnode
            return
        }

        let queue=[this.root]
        while(queue.length>0){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=newnode
                return 
            }else{
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right=newnode
                return
            }else{
                queue.push(curr.right)
            }
        }
        
    }

    heightofnode(root){
        if(!root) return -1
        let left=this.heightofnode(root.left)
       let right=this.heightofnode(root.right)

       return Math.max(left,right)+1
    }

    depthofnode(root,target,d=0){
        if(!root)return -1
        if(root.data===target) return d;
        let leftdepth=this.depthofnode(root.left,target,d+1)
        if(leftdepth!==-1)return leftdepth
        let rightdepth=this.depthofnode(root.right,target,d+1)
        return rightdepth
    }

    alLeafnode(root){
  if(!root) return -1
  if(!root.left&&!root.right){
     console.log(root.data)
     return
  }
  this.alLeafnode(root.left)
  this.alLeafnode(root.right)
  
    }


    countInternalnode(root){
        if(!root)return 0
        if(!root.left&&!root.right){
            return 0
        }
        return this.countInternalnode(root.left)+this.countInternalnode(root.right)+1
    }


    sumofleftLeaf(root){
        if(!root) return 0;
       let sum=0;
       if(root.left&&!root.left.left&&!root.left.right){
        sum+=root.left.data 
       }else{
        sum+=this.sumofleftLeaf(root.left)
       }
       sum+=this.sumofleftLeaf(root.right)
       return sum

    }


    isFullBinarytree(root){
        if(!root) return true
        if(!root.left&&!root.right)return true
        if(!root.left||!root.right){
            return false
        }
        return this.isFullBinarytree(root.left)&&this.isFullBinarytree(root.right)
    }

    isBalanced(root){
        if(!root)return true
        let left=this.heightofnode(root.left)
        let right=this.heightofnode(root.right)
        if(Math.abs(left-right)>1){
            return false
        }
        return this.isBalanced(root.left)&&this.isBalanced(root.right)
    }

    isidentical(root1,root2){
        if(!root1&&!root2)return true
        if(!root1&&!root2)return false
        if(!root1.data!==root2.data)return false
        return this.isidentical(root1.left,root2.left)&&this.isidentical(root1.right,root2.right)
    }


    levelorder(root){
        if(!root) return null
        let queue=[root]
        while(queue.length>0){
            let curr=queue.shift()
            console.log(curr.data)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right) queue.push(curr.right)
        }
    }

    // preorder(root){
    //     if(!root)return null
    //     console.log(root.data)
    //     this.preorder(root.left)
    //     this.preorder(root.right)
    // }
}

const t=new tree()
t.insert(10)
t.insert(20)
t.insert(40)
t.insert(30)
t.insert(15)
t.insert(23)
t.insert(53)
t.insert(60)
t.insert(1)
// t.preorder(t.root)
t.levelorder(t.root)

// console.log(t.heightofnode(t.root))
// console.log(t.depthofnode(t.root,60))
console.log("all leaf nodes")
t.alLeafnode(t.root)

console.log("count",t.countInternalnode(t.root))
console.log("sum of left node", t.sumofleftLeaf(t.root))
console.log(t.isFullBinarytree(t.root))

console.log("is balanced tree",t.isBalanced(t.root))

console.log("tree is identical",t.isidentical(10,20))

