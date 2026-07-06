// const arr = [8, 3, 5, 4, 6, 1, 7, 2];

// function quicksort(a){
//     if(a.length<=1)return a
//     let pivot=a[a.length-1];
//     let left=[];
//     let right=[];
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }


// console.log(quicksort(arr))



const s = [
    { name: "John", age: 22 },
    { name: "Alice", age: 18 },
    { name: "Bob", age: 25 },
    { name: "David", age: 20 }
];


function quicksort(arr){
    if(arr.length<1)return arr
        let pivot=arr[arr.length-1]
        let left=[]
    let right=[]
    for(let i=1;i<arr.length-1;i++){
if(arr[i].age<pivot.age){
    left.push(arr[i])
}else{
    right.push(arr[i])
}
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort(s))

