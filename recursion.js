// reverse string using recursion
// Fibonacci Sequence using recursion
// Factorial of n using recursion 
// check if prime number or not using recursion
// Power of 2
// capitalize first letter in a string
// remove Duplicates in a string
// remove Duplicates in an array
// flatten array


// function palin(str){
//     if(str.length <=1) return true;
//     if(str[0]!==str[str.length-1]){
//         return false
//     }
//     return palin(str.slice(1,-1))
// }

// console.log(palin("madamc"))



// function cap(str){
//     if(str.length===0) return "";
//     return str[0].toUpperCase()+str.slice(1)
// }
// console.log(cap("sneha"))

// function flat(arr){
//     if(!Array.isArray(arr)){
//         return arr
//     }
//   return flat(arr)
// }

// console.log(flat([1,[2,3],3,4]))



// function fab(n){
//     if(n<=1) return n;
  
//     return fab(n-1)+fab(n-2)
// }
//   for(let i=0;i<7;i++){
//         console.log(fab(i))
//     }

//0 1 1 2 3

// function prime(n){
//     if()
// }



// let arr=[1,2,3,4,5]

// function binary(arr,search){
//     let start=0;
//     let end=arr.length-1;
    
//     while(start<=end){
//         let mid=Math.floor((start+end)/2);
//         if(arr[mid]===search){
//             return arr[mid]
//         }
//         if(arr[mid]<search){
//             start=mid+1
//         }else{
//           end=mid-1 
//         }
//     }
//     return -1
// }

// console.log(binary(arr,2))



// function sum(n){
//     if(n===0) return 0;
//     if(n%2===0){
//         return n+sum(n-1)
        
//     }
//     return sum(n-1)
// }
// console.log(sum(5))


// function sum(n){
//     console.log(n)
//     if(n===5)return 5;
//     return sum(n+1)
// }

// sum(1)


// function sum(arr,index=0){
//     if(index===arr.length){
//         return 0;
//     }
//     return arr[index]+sum(arr,index+1)
// }
// console.log(sum([1,2,3,4,5],0))


// function max(arr,index=0){
//     if(index===arr.length)return arr[index]
//     return  arr[index]
// }
// console.log(max([1,2,3,4,5]))

//-------------------------------------------------------
// string reversing

// function rev(str){
//     if(str.length===0) return "";
//     return rev(str.slice(1))+str[0]
// }

// console.log(rev("sneha"))



//---------------------------------------------------------

//binary search in  recursion

// function bSearch(arr,t,start=0,end=arr.length-1){
// if(start>=end) return -1;
// let mid=Math.floor((start+end)/2)
// if(arr[mid]===t) return mid;
// if(arr[mid]<t) return bSearch(arr,t,mid+1,end)
// return bSearch(arr,t,start,mid-1)
// }

// console.log(bSearch([1,3,5,7,9,11], 7) )


//---------------------------------------------------------

//sunm of even numbers

// function sum(n){
//     if(n===0) return 0;
//     if(n%2===0){
//         return n+sum(n-1)
        
//     }
//     return sum(n-1)
// }
// console.log(sum(5))

//=--------------------------------------------------------


// function digitsum(dig){
//     if(dig===0) return 0;
//     return dig%10+digitsum(Math.floor(dig/10))
// }
// console.log(digitsum(123))


//--------------------------------
// function digitcount(digit){
//     if(digit===0)return 0;
    
//     return 1+digitcount(Math.floor(digit/10))
// }

// console.log(digitcount(123))

//------------------------------------

// function arrayreverse(arr,start=0, end=arr.length-1){
//     if(start>=end) return arr;
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     return arrayreverse(arr,start+1,end-1)
// }
// console.log(arrayreverse([1,2,3,4]))


//------------------------------------------


// function rev(str,index=0){
//     if(str.length===0) return "";
//     return rev(str.slice(1))+str[0]
// }

// console.log(rev("sneha"))

//=============================================







