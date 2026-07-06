// let a=[5, 1, 4, 2, 8];

// let a= [4, 2, 5, 2, 1, 4]

//ascending order
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[j]>a[i]){
//             let temp=a[i];
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }

// console.log(a)


//descending order
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[j]<a[i]){
//             let temp=a[i];
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }

// console.log(a)



//Count the number of swaps performed during Bubble Sort.


// let a= [5, 3, 2]
// let s=0;
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){
//         if(a[j]>a[i]){
//             s++;
//             let temp=a[i];
//             a[i]=a[j]
//             a[j]=temp
//         }
//     }
// }

// console.log(s)



let a= [1, 2,7, 3, 4, 5]


let s=0;
let swap=false
for(let i=0;i<a.length;i++){
    swap=false;
    for(let j=0;j<a.length;j++){
       
        if(a[j]>a[i]){
            s++;
            let temp=a[i];
            a[i]=a[j]
            a[j]=temp
             swap= true
        }
    }

        
     if(!swap){
  console.log("already sorted");
  break;
     }
      
}
if(swap){
console.log(s)
}












