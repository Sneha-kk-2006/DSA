class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}

class Tree{
    constructor(){
        this.root=null;
    }
    
    insert(val){
        let node=new Node(val);
        if(!this.root){
            this.root=node
            return
        }
        let queue=[this.root]
        
        while(queue.length>0){
            let curr=queue.shift()
            if(!curr.left){
                curr.left=node
                return
            }
            queue.push(curr.left)
            if(!curr.right){
                curr.right=node
                return
            }
           queue.push(curr.right)
        }
    }
    
    height(root){
        if(!root)return 0;
        let left=this.height(root.left)
        let right=this.height(root.right)
       return Math.max(left,right)+1
    }
    
    
    depth(root,target,d=0){
        if(!root)return -1;
        if(target===root.data) return d
        let leftd=this.depth(root.left,target,d+1)
        if(leftd!==-1)return leftd
        let rightd=this.depth(root.right,target,d+1)
        return rightd
    }
    
    
    leaf(root){
        if(!root)return 0;
      
        if(!root.left&&!root.right){
           console.log(root.data) 
           return
        }
        this.leaf(root.left)
        this.leaf(root.right)
        }
        
        
        countleaf(root){
            if(!root) return 0;
           if(!root.left||!root.right){
               return 1;
           }
           return this.countleaf(root.left)+this.countleaf(root.right)
            
        }
        
        internalnodes(root){
            if(!root)return 0;
            if(!root.left&&!root.right)return 0;
             return 1+this.internalnodes(root.left)+
             this.internalnodes(root.right)
        }
        fullbinary(root){
            if(!root)return true;
            if(!root.left||!root.right) return false
            if(!root.left&&!root.right)return true
            return this.fullbinary(root.left)&&
            this.fullbinary(root.right)
        }
        
        
        sumleft(root){
            if(!root)return 0;
            let sum=0
            if(root.left&&!root.left.left&&!root.left.right){
                sum+=root.left.data
            }else{
                sum+=this.sumleft(root.left)
               
            }
             sum+=this.sumleft(root.right)
             return sum
        }
        
        
        balanced(root){
            if(!root)return true
            let hleft=this.height(root.left)
            let hright=this.height(root.right)
            if(Math.abs(hleft-hright)>1){
                return false
            }
            return this.balanced(root.left)&&this.balanced(root.right)
        }
        
        identy(root1,root2){
            if(!root1&&!root2) return true
            if(!root1||!root2) return false
            if(!root1.data!==root2.data) return false
            return this.identy(root1.left,root2.left)&&this.identy(root1.right,root2.right)
        }
        
        mirror(root){
            if(!root)return ;
            let temp=root.left
            root.left=root.right
            root.right=temp;
            this.mirror(root.left)
            this.mirror(root.right)
        }
        
    preorder(root){
        if(!root)return ;
        
        console.log(root.data)
        this.preorder(root.left)
        this.preorder(root.right)
    }
}

const t=new Tree()
t.insert(1)
t.insert(2)
t.insert(3)
t.insert(4)
t.insert(5)
t.insert(6)
t.insert(7)
t.insert(8)
t.insert(9)
t.insert(10)


t.preorder(t.root)


console.log("height of the tree",t.height(t.root))
console.log("depth of the tree",t.depth(t.root,9))

console.log("leaf nodes")
t.leaf(t.root)

console.log("count leaf",t.countleaf(t.root))

console.log("internalnodes",t.internalnodes(t.root))

console.log("sum of left leaf",t.sumleft(t.root))

console.log("is the tree is fullbinary ", t.fullbinary(t.root))


console.log("balanced tree", t.balanced(t.root))


console.log("mirror",t.mirror(t.root))



