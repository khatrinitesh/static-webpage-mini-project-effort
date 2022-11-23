// dsa with js => bubble recursive sort
let arr = [64, 34, 25, 12];
function recursiveBubbleSort(data,count){
	if(count == 1){
		return;
	}
	let currentEl = 0;

	for(let i=0;i<count;i++){
		if(data[i] > data[i]){
			let temp = data[i];
			data[i] = data[i  + 1]
			data[i + 1] = temp;
			currentEl++
		}
	}
	recursiveBubbleSort(data,count-1)
}
recursiveBubbleSort(arr,arr.length)
console.warn(arr)
// dsa with js => binary search tree 
// class Node {
//     constructor(val) {
//       this.value = val;
//       this.left = null;
//       this.right = null;
//     }
//   }
//   class BSTree {
//     constructor() {
//       this.root = null;
//     }

//     isTreeEmpty() {
//       return this.root === null;
//     }
//     makeTree(val) {
//       let newNode = new Node(val);
//       if (this.root === null) {
//         this.root = newNode;
//       } else {
//         this.insertNode(this.root, newNode);
//       }
//     }

//     insertNode(root, newNode) {
//       if (root.value > newNode.value) {
//         if (root.left === null) {
//           root.left = newNode;
//         } else {
//           this.insertNode(root.left, newNode);
//         }
//       } else {
//         if (root.right === null) {
//           root.right = newNode;
//         } else {
//           this.insertNode(root.right, newNode);
//         }
//       }
//     }
//     search(root, val) {
//       if (root === null) {
//         return false;
//       } else if (root.value === val) {
//         return true;
//       } else if (root.value > val) {
//         return this.search(root.left, val);
//       } else {
//         return this.search(root.right, val);
//       }
//     }
//     preOrder(root) {
//       if (root) {
//         console.warn(root.value);
//         this.preOrder(root.left);
//         this.preOrder(root.right);
//       }
//     }

//     inOrder(root) {
//       if (root) {
//         this.inOrder(root.left);
//         console.warn(root.value);
//         this.inOrder(root.right);
//       }
//     }

//     postOrder(root) {
//       if (root) {
//         this.postOrder(root.left);
//         this.postOrder(root.right);
//         console.warn(root.value);
//       }
//     }

//     bfsTraversing() {
//       let queue = [];
//       queue.push(this.root);
//       while (queue.length) {
//         let current = queue.shift();
//         if (current.left) {
//           queue.push(current.left);
//         }
//         if (current.right) {
//           queue.push(current.right);
//         }
//         console.warn(current.value);
//       }
//     }

//     minValue(root) {
//       if (!root.left) {
//         return root.value;
//       } else {
//         return this.minValue(root.left);
//       }
//     }

//     maxValue(root) {
//       if (!root.right) {
//         return root.value;
//       } else {
//         return this.maxValue(root.right);
//       }
//     }

//     maxValue(root) {
//       if (!root.right) {
//         return root.value;
//       } else {
//         return this.maxValue(root.right);
//       }
//     }

//     removeData(value) {
//       this.root = this.deleteNode(this.root, value);
//     }
//     deleteNode(root,value) {
//       if (root === null) {
//         return null;
//       }
//       if (value < root.value) {
//         root.left = this.deleteNode(root.left, value);
//       } else if (value > root.value) {
//         root.right = this.deleteNode(root.right, value);
//       } else {
//         if (!root.left && !root.right) {
//           return null;
//         } else if (!root.left) {
//           return root.right;
//         } else if (!root.right) {
//           return root.left;
//         }
//         root.value= this.minValue(root.right);
//         root.right=this.deleteNode(root.right,root.value)
//       }
//       return root;
//     }
//   }

//   let bst = new BSTree();
//   //
//   bst.makeTree(20);
//   bst.makeTree(10);
//   bst.makeTree(5);
//   bst.makeTree(11);
//   bst.makeTree(30);
//   bst.makeTree(40);
//   bst.makeTree(23);
//   // bst.preOrder(bst.root)
//   // bst.inOrder(bst.root)
//   // bst.postOrder(bst.root);
//   // console.warn(bst.search(bst.root, 11));
//   bst.removeData(20);
//   // bst.bfsTraversing(bst.root);
//   console.warn(bst.root)

// dsa with js => binary search
// let data = [5, 9, 13, 17,45,67,89,100];
// let find = 89;
// let start = 0;
// let end = data.length - 1;
// let position = undefined;
// while(start < end){
// 	let mid = Math.floor((start+end) / 2);
// 	if(data[mid] === find){
// 		position = mid;
// 		break;
// 	}
// 	else if(data[mid] < find){
// 		start = mid + 1
// 	}
// 	else{
// 		end = mid - 1 
// 	}
// }
// console.warn(position)


// dsa with js 10 => array traversing
// let data = [9, 45, 2, 8, 45, 23, 7, 78, 0, 11, 41, 77];
// function getElement(){
// 	let el = document.getElementById('element').value;
// 	if(el < data.length && typeof  parseInt(el) === 'number'){
// 		alert(data[el])
// 	}
// 	else{
// 		alert('please enter valid input')
// 	}
// }

// dsa with js 9 => array sort 
// let data = [34,3,1,25,54,12,89,5,76,789] 
// for(i=0;i<data.length;i++){
// 	for(j=0;j<data.length;j++){
// 		console.warn(data);
// 		if(data[j]>data[j+1]){
// 			let temp = data[j]
// 			data[j]=data[j+1];
// 			data[j+1]=temp;
// 		}
// 	}
// }

// dsa with js 8 => array search 
 //  function searchElement(){
 // let data =[20,40,60,5,10,70,80,99];
	//     let item=document.getElementById('searchEl').value;
	//     let index=undefined;
	//     for(i=0;i<=data.length-1;i++){
	//         // console.warn(data[i])
	//         if(data[i]===parseInt(item))
	//         {
	//             index=i;
	//             break;
	//         }
	//     }
	//     console.warn(index);
	//     }

// dsa with js 7 => array merge while 
// let data1 =[3,7,12,34,56,90];
// let data2 = [4,9,25,45];
// let data3 =[];
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<data1.length && d2<data2.length){
//  if(data1[d1]<data2[d2])
//  {
//      data3[d3]=data1[d1];
//      d1++;
//  }else{
//      data3[d3]=data2[d2];
//      d2++;
//  }
//  d3++;
// }
// while(d1<data1.length){
// data3[d3]=data1[d1];
//      d1++;
//      d3++;
// }
// console.warn(data3)

// dsa with js 6 => array merge
// let data =[3,7,12,34,56,90];
// let data2=[20,30,40,50]
// let data3=[];
// for(i=0;i<data.length;i++){
// 	data3[i]=data[i]
// }
// for(i=0;i<data2.length;i++){
// 	data3[data.length+i]=data2[i];
// }
// console.warn(data3);

// dsa with js 5 => array insert 
// function insertEl(){
// 	let data = [60,30,70,67,50]
// 	let newEl = document.getElementById('newEl').value;
// 	newEl = parseInt(newEl)
// 	let position = document.getElementById('position').value; 
// 	console.warn(data);

// 	for(let i=data.length - 1;i>=0;i--){
// 		if(i >= position){
// 			data[i+1] = data[i];
// 			if(i==position){
// 				data[i] = newEl;
// 			}
// 		}
// 	}
// 	console.warn(data)
// }

// dsa with js 4 => array delete 
// function removeEl(){
// 	let data = [30,20,45,76,20,80]
// 	let position = document.getElementById('position').value; 
// 	position = parseInt(data)
// 	for(let i=position;i<data.length;i++){
// 		data[i] = data[i + 1]
// 	}
// 	data.length = data.length - 1 
// 	console.warn(data);
// }

// dsa with js 3 => anagram 
// function checkAnagram(str1,str2){
// 	let ObjStr1 = {};
// 	if(str1.length !== str2.length){
// 		return false;
// 	}
// 	for(ch of str1){
// 		ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
// 	}
// 	for(ch of str2){
// 		if(!ObjStr1[ch]){
// 			return false;	
// 		}
// 		ObjStr1[ch]--;
// 	}
// 	return true;
// }
// console.warn(checkAnagram('nitesh','sameet'))

// dsa with js 2 => array traversing and accessing in data
// let data2 = [9,45,2,8]
// function getElement() {
//         let el = document.getElementById("element").value;
//         if (el < data2.length && typeof parseInt(el) === "number") {
//           alert(data2[el]);
//         } else {
//           alert("Please enter valid input");
//         }
//       }
// for(let i=0;i<data2.length;i++){
// 	// document.write(`Array/ ${i} is  ${data2[i]}  <br>`)/
// 	x = 2
// 	document.write(data2[x])
// }


// dsa with js 1 => data structure and algorithn with javascript
// const data = [8,2,1,6,0,4,3,7,5]
// const dataresult = data.sort((a,b) => a-b)
// console.log(data)