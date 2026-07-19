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









//////////////////////////////////////////////////////////////////////////////



class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null
    }
}
class bst{
    constructor(){
        this.root=null;
    }
    
    insert(val){
          let node=new Node(val)
        if(!this.root){
            this.root=node
            return
        }
        
      
        let queue=[this.root]
        while(queue.length>0){
            let curr=queue.shift()
            if(val<curr.data){
                 if(!curr.left){
                     curr.left=node
                     return
                 }else{
                     queue.push(curr.left)
                 }
                 curr=curr.left
            }else if(val>curr.data){
                if(!curr.right){
                    curr.right=node
                    return
                }else{
                    queue.push(curr.right)
                }
            }else{
                return 
            }
           
        }
    }
    
    search(root,val){
        if(!root)return false;
        if(root.data===val){
            return true
        }
        if(val<root.data){
            return this.search(root.left,val)
        }
        if(val>root.data){
            return this.search(root.right,val)
        }
    
    }
    
    min(root){
        if(!root)return null;
        if(!root.left) return root.data
        this.min(root.left)
    }
    
    delete(val){
        this.root=this.remove(this.root,val)
    }
    
    remove(root,val){
        if(!root)return null;
       if(val<root.data){
           root.left=this.remove(root.left,val)
       }else if(val>root.data){
           root.right=this.remove(root.right,val)
       }else{
           if(!root.left&&!root.right)return null;
           if(!root.left){
               return root.right
           }
           if(!root.right){
               return root.left
           }
           
           let temp=this.min(root.right)
           this.min=temp.data
           root.right=this.remove(root.right,val)
           
       }
       return root
       
    }
    
    
    
    
    
  findmin(root){
      if(!root)return 0;
      if(!root.left)return root.data
      return this.findmin(root.left)
  }
  
  findmax(root){
      if(!root) return 0;
      if(!root.right)return root.data;
      return this.findmax(root.right)
  }
  
  
  close(root,target){
     
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
              curr=curr.left
          }else{
              curr=curr.right
          }
          
      }
      return closest
     
      
  }
  
  findkth(root,k){
      let res=this.inorder(root,[])
      return res[k-1]
  }
  inorder(root,res){
      if(!root)return res
      this.inorder(root.right,res)
      res.push(root.data)
      this.inorder(root.left,res)
      return res
      
  }
    
    preorder(root){
        if(!root)return 0;
        console.log(root.data)
        this.preorder(root.left)
        this.preorder(root.right)
    }
}

const bt=new bst()
bt.insert(1)
bt.insert(2)
bt.insert(3)
// bt.insert(4)
// bt.insert(5)
bt.insert(6)

bt.preorder(bt.root)

console.log("searching",bt.search(bt.root,9))

// console.log("removing")
// bt.delete(3)

// bt.preorder(bt.root)

console.log("minimum value",bt.findmin(bt.root))
console.log("maximum value",bt.findmax(bt.root))

// console.log("closest to 3",bt.close(bt.root,5))

console.log("kth index",bt.findkth(bt.root,1))








///////////////////////////////////////////////////////////////////////////////////////////////////



class minHeap{
    constructor(){
        this.heap=[]
    }
    
    insert(val){
        this.heap.push(val)
        return this.heapifyup()
    }
    
    heapifyup(){
        let index=this.heap.length-1
        while(index>0){
            let p=Math.floor((index-1)/2);
            if(this.heap[index]>=this.heap[p]){
                break
            }
            [this.heap[index],this.heap[p]]=[this.heap[p],this.heap[index]]
            index=p;
        }
    }
    remove(val){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown()
        return min
        
        
    }
    
    heapifydown(){
        let index=0
        while(true){
        let left=Math.floor(2*index+1)
        let right=Math.floor(2*index+2)
        let small=index
        if(left<this.heap.length&&this.heap[left]<this.heap[small]){
            small=left
        }
        if(right<this.heap.length&&this.heap[right]<this.heap[small]){
            small=right
        }
        if(index===small){
            break;
        }
        [this.heap[small],this.heap[index]]=[this.heap[index],this.heap[small]]
        index=small;
        
        }
    }
    
    
    heapsort(arr){
        let n=arr.length
        for(let i =Math.floor(n/2)-1;i>=0;i--){
            this.heapify(arr,n,i)
        }
        
        for(let i=n-1;i>=0;i--){
            [arr[0],arr[i]]=[arr[i],arr[0]]
            this.heapify(arr,i,0)
        }
        return arr
    }
    
    heapify(arr,n,i){
        let large=i
        let left=Math.floor(2*i+1)
        let right=Math.floor(2*i+2)
        
        if(left<n&&arr[left]>arr[large]){
            large=left
        }
        if(right<n&&arr[right]>arr[large]){
            large=right
        }
        if(large!==i){
            [arr[large],arr[i]]=[arr[i],arr[large]]
            this.heapify(arr,n,i)
        }
    }
    
}

const h=new minHeap()
h.insert(1)
h.insert(2)
h.insert(3)
h.insert(4)
h.remove()
console.log(h.heap)
let arr=[1,5,2,6,3]
console.log(h.heapsort(arr))


////////////////////////////////////////////////////////////////////////////////////////////////


class Node{
    constructor(){
        this.child={};
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    
    insert(word){
        let curr=this.root
        for(let i of word){
          if(!curr.child[i]){
              curr.child[i]=new Node()
          }
          curr=curr.child[i]
        }
        curr.isEnd=true
        
    }
    
    search(w){
       let curr=this.root
       for(let i of w){
           if(!curr.child[i]){
               return false
           }
           curr=curr.child[i]
       }
       return curr.isEnd
    }
    
    
    longest(){
        let curr=this.root;
        let prefix=''
        while(curr){
            const keys=Object.keys(curr.child)
            if(keys.length!==1||curr.isEnd){
                break;
            }
            let char=keys[0]
            prefix+=char;
            curr=curr.child[char]
        }
        return prefix
    }
    
    auto(pre){
        let curr=this.root;
        let words=[]
        for(let i of pre){
            if(!curr.child[i]){
                return words
            }
            curr=curr.child[i]
           
        }
        this.collect(pre,words,curr)
        return words
    }
    
    collect(pre,words,curr){
       if(curr.isEnd) {
           words.push(pre)
       } 
       for(let i in curr.child){
           this.collect(pre+i,words,curr.child[i])
       }
    }
}

const t=new Trie()
t.insert("car")
t.insert("carl")
t.insert("carp")
t.insert("carp")

// console.log("long",t.longest())
console.log(t.auto("ca"))

// console.log(t.search("carl"))

///////////////////////////////////////////////////////////////////////////////////



class minh{
    constructor(){
        this.heap=[]
    }
    
    insert(val){
      this.heap.push(val)
      this.heapifyup()
    }
    
    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown()
        return min
    }
    
    
    heapifydown(){
        let index=0;
        while(true){
            let left=Math.floor(2*index+1)
            let right=Math.floor(2*index+2)
            let min=index
            if(left<this.heap.length&&this.heap[left]<this.heap[min]){
                min=left
            }
            if(right<this.heap.length&&this.heap[right]<this.heap[min]){
                min=right
            }
            if(min===index){
            break;
            }
            [this.heap[min],this.heap[index]]=[this.heap[index],this.heap[min]]
            index=min
            
        }
    }
    
    
    heapifyup(){
        let index=this.heap.length-1
        while(index>0){
            let p=Math.floor((index-1)/2)
            if(this.heap[index]>this.heap[p]){
                break;
            }
            [this.heap[index],this.heap[p]]=[this.heap[p],this.heap[index]]
            index=p;
        }
    }
    
    heapsort(arr){
        let n=arr.length
        for(let i=Math.floor(n/2)-1;i>=0;i--){
            this.heapify(arr,n,i)
        }
        for(let i=n-1;i>0;i--){
            [arr[i],arr[0]]=[arr[0],arr[i]]
            this.heapify(arr,n,0)
        }
        return arr
    }
    heapify(arr,n,i){
        let large=i;
          let left=Math.floor(2*i+1)
            let right=Math.floor(2*i+2) 
            
            if(left<n&&arr[left]<arr[large]){
                large=left
            }
            if(right<n&&arr[right]<arr[large]){
                large=right
            }
            if(large!==i){
               [arr[large],arr[i]]=[arr[i],arr[large]]
               this.heapify(arr,n,large)
            }
          
    }
    build(arr){
        let n=arr.length
        for(let i =Math.floor(n/2)-1;i>=0;i--){
            this.heap1(arr,n,i)
        }
        return arr
    }
    
    heap1(arr,n,i){
        let large=i
        let l=Math.floor(2*i+1)
        let r=Math.floor(2*i+2)
        
        if(l<n&&arr[l]>arr[large]){
            large=l
        }
        if(r<n&&arr[r]>arr[large]){
            large=r
        }
        if(large!==i){
            [arr[i],arr[large]]=[arr[large],arr[i]]
            this.heap1(arr,n,large)
        }
    }
    
    
}

const h=new minh()
h.insert(1)
h.insert(2)
h.insert(3)
h.insert(4)
h.remove()


console.log(h.heap)

let arr1=[1,8,9,3,2,6,5]
console.log(h.heapsort(arr1))

let arr=[1,2,3,4,5]
console.log(h.build(arr))






