// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.isEnd = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let curr = this.root;
//     for (let i of word) {
//       if (!curr.children[i]) {
//         curr.children[i] = new TrieNode();
//       }
//       curr = curr.children[i];
//     }

//     curr.isEnd = true;
//   }

//   search(word) {
//     let curr = this.root;
//     for (let i of word) {
//       if (!curr.children[i]) {
//         return false;
//       }
//       curr = curr.children[i];
//     }

//     return true;
//   }

//   autocomplete(word) {
//     let curr = this.root;
//     for (let i of word) {
//       if (!curr.children[i]) {
//         return [];
//       }
//       curr = curr.children[i];
//     }
//     let result = [];
//     this.collectwords(curr, word, result);
//     return result;
//   }

//   collectwords(node, prefix, result) {
//     if (node.isEnd) result.push(prefix);

//     for (let char in node.children) {
//       this.collectwords(node.children[char], prefix + char, result);
//     }
//   }



//   longestprefix(word){
//       if(word.length===0)return "";

//     for(let w of word){
//         this.insert(w)
//     }
  
//     let prefix=""
//     let curr=this.root
//     while(true){
//         let key=Object.keys(curr.children)
//         if(key.length!==1)break ;
//         if(curr.isEnd)break;

//         let ch=key[0]
//         prefix+=ch
//         curr=curr.children[ch]
//     }
//     return prefix
    
//   }
// }

// const t = new Trie();
// t.insert("apple");
// t.insert("app");
// t.insert("ape");
// t.insert("tree");

// // console.log(t.search("water"))

// // console.log(t.autocomplete("ap"));
// const t2 = new Trie();
// console.log(t2. longestprefix(["flower", "flow", "floight"]));  










// startsWith(prefix) {
//     let curr = this.root;

//     for (let ch of prefix) {
//         if (!curr.children[ch]) {
//             return false;
//         }
//         curr = curr.children[ch];
//     }

//     return true;
// }

// autoComplete(prefix) {
//     let curr = this.root;

//     for (let ch of prefix) {
//         if (!curr.children[ch]) return [];

//         curr = curr.children[ch];
//     }

//     let result = [];

//     function dfs(node, word) {
//         if (node.isEnd) {
//             result.push(word);
//         }

//         for (let ch in node.children) {
//             dfs(node.children[ch], word + ch);
//         }
//     }

//     dfs(curr, prefix);

//     return result;
// }


// delete(word) {

//     const remove = (node, depth) => {

//         if (!node) return null;

//         if (depth === word.length) {
//             node.isEnd = false;

//             if (Object.keys(node.children).length === 0) {
//                 return null;
//             }

//             return node;
//         }

//         let ch = word[depth];

//         node.children[ch] = remove(node.children[ch], depth + 1);

//         if (!node.isEnd &&
//             Object.keys(node.children).length === 0) {
//             return null;
//         }

//         return node;
//     };

//     this.root = remove(this.root, 0);
// }

// countWords() {
//     let count = 0;

//     function dfs(node) {
//         if (node.isEnd) count++;

//         for (let ch in node.children) {
//             dfs(node.children[ch]);
//         }
//     }

//     dfs(this.root);

//     return count;
// }

// countPrefix(prefix) {

//     let curr = this.root;

//     for (let ch of prefix) {
//         if (!curr.children[ch]) {
//             return 0;
//         }
//         curr = curr.children[ch];
//     }

//     let count = 0;

//     function dfs(node) {

//         if (node.isEnd) count++;

//         for (let ch in node.children) {
//             dfs(node.children[ch]);
//         }
//     }

//     dfs(curr);

//     return count;
// }

// longestPrefix() {

//     let curr = this.root;
//     let ans = "";

//     while (
//         Object.keys(curr.children).length === 1 &&
//         !curr.isEnd
//     ) {
//         let ch = Object.keys(curr.children)[0];
//         ans += ch;
//         curr = curr.children[ch];
//     }

//     return ans;
// }


// // printWords() {

// //     function dfs(node, word) {

// //         if (node.isEnd) {
// //             console.log(word);
// //         }

// //         for (let ch in node.children) {
// //             dfs(node.children[ch], word + ch);
// //         }
// //     }

// //     dfs(this.root, "");
// // }


