// class stack{
//     constructor(){
//         this.item=[]
//     }
//     push(val){
//         this.item.push(val)
//     }

//     pop(){
//         return this.item.pop()
//     }

//     peek(){
//         return this.item[this.item.length-1]
//     }
//     isempty(){
//         return this.item.length===0
//     }
//     print(){
//         console.log(this.item)
//     }
// }

// function rev(s){
//     let temp=new stack()
//     while(!s.isempty()){
//         temp.push(s.pop())
//     }
//     return temp
// }



// function palin(str){
//    let stack1=[]
//     for(let i of str){
//         stack1.push(i)
//     }

//     let rev='';
//     while(stack1.length){
//         rev+=stack1.pop();
//     }

//     return rev===str

// }


// const s=new stack()

// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.push(50)
// s.print()
// // let res=rev(s).item
// let res=palin("maam")
// console.log(res)








//=======================================================

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }


// class stack {
//  this.
// }

//===========================


class hashtable{
constructor(size=10){
   this.table=new Array(size)
    this.size=size
};

hash(key){
    let total=0;
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total%this.size
}

set(key ,value){
    let index=this.hash(key)
    if(!this.table[index]){
      this.table[index]=[]
    }
    this.table[index].push([key,value])
}

get(key){
    let index=this.hash(key)

  if(this.table[index][0]===key){
    return this.table[index][1]
  }
}

print(){
  for(let i=0;i<this.table.length;i++){
    if(this.table[i]){
console.log(i,this.table[i])
    }
    
  }

}
}

const ht=new hashtable()
ht.set("name","sneha")
ht.set("age",10)
ht.print()
