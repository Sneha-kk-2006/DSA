

// function insertion(arr){
//  for(let i=1;i<arr.length;i++){
//     let numbertoinsert=arr[i]
//     let j=i-1
//     while(j>=0&&arr[j]>numbertoinsert){
//         arr[j+1]=arr[j]
//         j=j-1
//     }
//     arr[j+1]=numbertoinsert
//  }


// }



// const arr=[8,20,-2,4,-6]
// insertion(arr)
// console.log(arr)

//O(n^2)



const s = [
    { name: "John", age: 22 },
    { name: "Alice", age: 18 },
    { name: "Bob", age: 25 },
    { name: "David", age: 20 }
];
function sort(s){
 
for(let i=1;i<s.length;i++){
   let curr=s[i]
    let j=i-1;
while(j>=0&&s[j].age>curr.age){
    s[j+1]=s[j]
    j--;
}
s[j+1]=curr

}
return s
}

console.log(sort(s))