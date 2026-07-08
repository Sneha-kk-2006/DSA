// let arr=[5, 2, 8, 1, 3]

// for(let i=0;i<arr.length;i++){
//     if(arr[i+1]>arr[i]){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//     }
    
// }

// console.log(arr)
// let arr=[5, 2, 8, 1, 3]
// let s=0
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//     if(arr[j+1]<arr[j]){
//         s++
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//     }
//     }
    
// }

// console.log(arr)
// console.log(s)

// let arr=[1, 2, 3, 5, 4, 6, 7]

//buble sort================================================
// let swap=false
// let s=0
// for(let i=0;i<arr.length;i++){
//     swap=false
//     for(let j=0;j<arr.length;j++){
//     if(arr[j+1]<arr[j]){
//   s++
//         let temp=arr[j]
//         arr[j]=arr[j+1]
//         arr[j+1]=temp
//         swap=true
//     }
//     }
//     if(!swap){
//         break;
//     }
    
// }

// console.log(arr)

// console.log(s)
//================================================


// function insert(arr){
//     let 
//     for(let i=0;i<arr.length;i++){
//         let j=i-1
//         while(arr[j])
//     }
// }


//================================================
// let arr=[5, 2, 8, 1, 3]

// function quick(arr){
//     let pivot=arr[arr.length-1]
//     if(arr.length<=1) return arr;
//     let left=[]
//     let right=[]
 
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//              left.push(arr[i])
//         }else{
//              right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }


// console.log(quick(arr))

//=======================================
// let arr=[5, 2, 8, 1, 3]
// function mergesort(arr){
//     if(arr.length<=1)return arr;
//     let mid=Math.floor((arr.length)/2);
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergesort(left),mergesort(right))
// }

// function merge(left,right){
//     let res=[]
//     while(left.length&&right.length){
//   if(left[0]<right[0]){
//       res.push(left.shift())
//   }else{
//       res.push(right.shift())
//   }
//     }
//   return [...res,...left,...right]
// }
// console.log(mergesort(arr))



// function mergesort(arr){
//     if(arr.length<=1) return arr
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid);
//     let right=arr.slice(mid);
//     return merge(mergesort(left),mergesort(right))
// }
// function merge(left,right){
//     let res=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             res.push(left.shift())
//         }else{
//             res.push(right.shift())
//         }
//     }
//     return[...res,...left,...right]
// }

// console.log(mergesort(arr))

//=============================================
// let arr=[5, 2, 8, 1, 3]

// for(let i=0;i<arr.length;i++){
//     let min=i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[min]){
//             min=j
//         }
//     }
//     [arr[i],arr[min]]=[arr[min],arr[i]]
// }
// console.log(arr)

//======================================


// let arr=[5, 2, 8, 1, 3]


// for(let i=0;i<arr.length;i++){
//     let current,j;
//     current=arr[i];
//     j=i-1;
//     while(j>=0&&arr[j]>current){
//         arr[j+1]=arr[j]
//         j--;
//     }
//     arr[j+1]=current
    
// }

// console.log(arr)







