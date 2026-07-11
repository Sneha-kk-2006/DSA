let a=[1,2,0,3,0,0,4,5]
let p=0;

for(let i=0;i<a.length;i++){
    if(a[i]!==0){
        a[p]=a[i]
        p++;
    }
}
for(let j=p;j<a.length;j++){
    a[j]=0
}

console.log(a)



// let t=8;

// // for(let i=0;i<a.length;i++){
// //     for(let j=i;j<a.length;j++){
// //     let sum=0;
// //         for(let k=i;k<=j;k++){
// //           sum=sum+a[k]
// //         }   
// //         if(sum===t){
// //             console.log(a.slice(i,j+1))
// //         }
// //     }
// // }


// for(let i=0;i<a.length;i++){
  
  
//     for(let j=i;j<a.length;j++){
    
//     let sum=0;
    
//     for(let k=i;k<=j;k++){
//         sum+=a[k]
//     }
//     if(sum===10){
//         console.log(a.slice(i,j+1))
//     }
// }
// }













// function sub(arr,k){
//     let end=0;
//     let sum=0;
//     for(let start=0;start<arr.length;start++){
//         sum+=arr[start]
//         while(sum>k){
//            sum-=arr[end];
//            end++;
//         }
//          if(sum===k){
//                console.log(arr.slice(end,start+1))
//                return;
//             }

//     }
// }

// sub(a,t)

// let array = [
//     [1, 3, 4],
//     [6, 7, 8],
//     [10, 23, 26]
// ];
// target1 = 23;

// function target(arr,t){
//     let r=0;
//     let c=arr[0].length-1;

//   while(r<arr.length&&c>=0){
//     if(arr[r][c]===t)  
//         {return true;
//         }else if(arr[r][c]>t){
//      c--;
//         }else{
//   r++;
//         }
      
      
//   }
//   return false
// }


// console.log(target(array,target1))



// function sumnested(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             sum+=sumnested(arr[i])
//         }else{
//  sum+=arr[i]
//         }
       
//     }

//     return sum
// }

// console.log(sumnested([1, [2, 3], [4, [5, 6]]])); 



// function rev(a){
// let w=a.split(" ");
// for(let i=1;i<w.length;i+=2){
   
//         w=w[i].split(" ").reverse().join("")
// }
//     return w.join(" ");

// }


// console.log(rev("my name is sneha kk"))








