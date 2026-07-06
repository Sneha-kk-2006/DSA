// class HashTable{
//     constructor(size){
//      this.table=new Array(size)
//      this.size=size
//     }
// hash(key){
//     let total=0;
//     for(let i=0;i<key.length;i++){
//         total+=key.charCodeAt(i)
//     }
//     return total%this.size
// }
// //due to this the name is added after the already name exists it overwrite the first one soremoving this we create a new set method
// //  set(key , value){
// //     const index=this.hash(key)
// //     this.table[index]=value
// //  }
//  set(key , value){
//     const index=this.hash(key)
//     const bucket=this.table[index]
//     if(!bucket){
//         this.table[index]=[[key ,value]]
//     }else{
//         const samekeyitem=bucket.find(item=>item[0]===key)
//         if(samekeyitem){
//             samekeyitem[1]=value
//         }else{
//             bucket.push([key , value])
//         }
//     }
//  }

// //  get(key){
// //     const index=this.hash(key)
// //     return this.table[index]
// //  }
//  get(key){
//     const index=this.hash(key)
//     const bucket=this.table[index]
//     if(bucket){
//         const samekeyitem=bucket.find(item=>item[0]===key)
//         if(samekeyitem){
//             return samekeyitem[1]
//         }
//     }
//     return undefined
//  }

// //  remove(key){
// //     const index=this.hash(key)
// //     this.table[index]=undefined
// //  }
//  remove(key){
//     const index=this.hash(key)
//    const bucket=this.table[index]
//    if(bucket){
//     const samekeyitem=bucket.find(item=>item[0]===key)
//     if(samekeyitem){
//         bucket.splice(bucket.indexOf(samekeyitem),1)
//     }
//    }
//  }

//  print(){
//     for(let i=0;i<this.table.length;i++){
//         if(this.table[i]){
//             console.log(i, this.table[i])
//         }
//     }
//  }

// }

// const table=new HashTable(50)

// table.set("name","sneha")
// table.set("age",20)
// table.print()
// // console.log(table.get("name"))
// table.set("mane","chinnu")
// table.set("name","daiana")
// table.remove("name")
// // table.remove("name")
// table.print()



class HashTable {

    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {

        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }

        return total % this.size;
    }

    set(key, value) {

        let index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index].push([key, value]);
    }

    get(key) {

        let index = this.hash(key);

        let bucket = this.table[index];

        if (bucket) {

            for (let pair of bucket) {

                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }

        return undefined;
    }

    display() {

        for (let i = 0; i < this.table.length; i++) {

            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const ht = new HashTable();

ht.set("name", "John");
ht.set("age", 22);
ht.set("city", "Delhi");

console.log(ht.get("city"));

ht.display();