// JAVSACRIPT ARRAY METHODS: 
const myArray = ['tiger','lion','elephant','giraffee','fish','fish','dog','tiger']
// console.log([...new Set(myArray)])
const res = myArray.filter(function(item,index,arr) {
	arr.indexOf(item) === index;
});	
// console.log(Array.from(new Set(myArray)));
// console.log([...new Set(myArray)])

// JAVSACRIPT ARRAY METHODS: 
// const array = ['pranay',null,'tiger',0,'','hamburger']

// const res = array.filter(function(item){
// 	return Boolean(item) || item === 0 || item === null
// })
// console.log(array)
// console.log(res);

// JAVSACRIPT ARRAY METHODS: 
// const array = [
//  {name:"a",id:'1'},
//  {name:'b',id:'2',f:function(){2+2}},
//  {name:'c',id:'1'},
//  {name:'d',id:'2',f:function(){2+3}}
// ]
// const res = array.filter(function(item,index){
// 	return index === array.findIndex(function(obj){
// 		return item.id === obj.id;
// 	})
// });
// console.log(res);

// JAVSACRIPT ARRAY METHODS: 
// const numbers = [10,20,30,40,50];
// const greatThan25 = numbers.find(num => num > 25)
// console.log(greatThan25)

// JAVASCRIPT ARRAY METHODS: 
// const numbers = [33,2,8];
// numbers.sort();
// console.log(numbers[1]);

// JAVSCRIPT ARRAY METHODS :In JavaScript, we can easily create a copy of an array using the slice() method which returns a shallow copy of a portion of the array. The second argument which is the end index of the element is exclusive.
// let colors = ['red','blue','green','coral','magenta','black']
// let newColors = [...colors.slice(0,3)]
// console.log(newColors);

// JAVSCRIPT ARRAY METHODS : In JavaScript, we can easily iterate through an array using for loop statement. At first, I created a clone of the original array and then iterated through the cloned array.
// const heroes = [
//     {
//         name:'shadow',type:'agility',difficultyLevel:'normal'
//     },
//     {
//         name:'invoker',type:'intellgience',difficultyLevel:'hard'
//     },
//     {
//         name:'pudge',type:'strength',difficultyLevel:'medium'
//     },
// ]
// const heroDeepCopy = JSON.parse(JSON.stringify(heroes))
// for(let i=0;i<heroDeepCopy.length;i++){
//     if(heroDeepCopy[i].name === 'invoker'){
//         heroDeepCopy[i].name= 'nitesh'
//     }
//     console.log(heroDeepCopy[i])
// }
// console.log(heroes) // original
// console.log(heroDeepCopy) // modified

// JAVSCRIPT ARRAY METHODS :3 WAYS TO MERGE ARRAYS IN JAVASCRIPT ✨In these slides, I share 3 ways on how you can combine multiple arrays together which are the Spread operator, Array.concat and Array.push
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// const merged = [...array1,...array2]
// console.log(merged)
// console.log(array1.concat(array2))
// array1.push(...array2)
// console.log(array1 )


// JAVSCRIPT ARRAY METHODS :
// let arr = [1,2,3]
// console.log(arr.forEach(el => el*2))
// console.log(arr.map(el => el*2))

// JAVSCRIPT ARRAY METHODS : Another way to iterate over arrays is to use Array.prototype.forEach() method which is a functional way of achieving iteration. Important tips to consider are that the forEach method does not have a return value so it cannot be chained as well as we cannot break the forEach method like normal for loops.
// const heroes = [
//     {
//         name:'shadow',type:'agility',difficultyLevel:'normal'
//     },
//     {
//         name:'invoker',type:'intellgience',difficultyLevel:'hard'
//     },
//     {
//         name:'pudge',type:'strength',difficultyLevel:'medium'
//     },
// ]
// const heroesresult = heroes.forEach((item) => console.log(`${item.name} - ${item.type} - ${item.difficultyLevel}`))

// JAVSCRIPT ARRAY METHODS : One common way to iterate over an array and update its elements is by using the Array.prototype.map() method which simply receives a callback function and based on that callback we can transform array elements to something else.
// const foods = [
//     {id:'hamburger',name:'Hamburger',price:300},
//     {id:'french',name:'french fries',price:1000},
//     {id:'cold',name:'cold drink',price:20500},
// ]
// const mappedFoods = foods.map((food,index) => {
//     if(food.id === 'french'){
//         return{
//             ...food,price:food.price * 2
//         }
//     }

//     return food;
// })
// console.log(mappedFoods)
// console.log(foods)
// console.log(foods)
// JAVASCRIPT ARRAY METHOS: we can easily create a copy of an array using the slice() method which returns a shallow copy of a portion of the array. The second argument which is the end index of the element is exclusive.
// const colors = ['red','orange','green','purple','pink','red']
// const newColors = [...colors.slice(0,4)]
// console.log(newColors)

// JavaScript Array Methods: map() and forEach()
// const studentsNames = ['UTTAM','MANANA','VIRAJ']
// studentsNames.map(name => console.log(name.toLowerCase()))

// const numbers = [1,4,9,625]
// const mathresult = numbers.map((item) => Math.sqrt(item));
// console.log(mathresult)

// const pets = ['dog','cat','fish']
// const petsresult = pets.map(pet => pet.toUpperCase())
// console.log(petsresult)

// const array1 = [1,4,9,16]
// const arrayresult = array1.map(item => item + 2)
// console.log(arrayresult);

// array 12112022 01 - Polyfill for Filter Method in JavaScript | Interview Question
// const originalArray = [0,1,2,3,4,5,6,7,8,9]
// const newArray = originalArray.filter((item,index,array) => item % 2 === 0);
// console.log(newArray)

// const arrData = [0,1,2,3,4,5,6,7,8,9]
// Array.prototype.myFilter = function(callback){
//     let newArray = [];
//     for(let i =0;i<this.length;i++){
//         if(callback(this[i],i,this)){    
//             newArray.push(this[i]);
//         }
//     }
//     return newArray
// }   
// const resultarrData = arrData.myFilter(function(item,index,array){
//     return item % 2 === 0;
// })
// console.log(resultarrData)


// What is difference between Sparse Array and Dense Array in JavaScript|JavaScript Interview Questions
// let arr = [1,2,,5]
// arr.forEach((example) => {
// 	console.log(example)
// })

// arrays 
// var group = ['diesel','filter','speaker','car']
// var a = 5 
// var a = 10
// document.write(a)
// document.write('<br>')
// document.write(group)
// document.write('<br>')
// console.log(size)
// document.write(group[1])
// var size = group.length
// for(i=0;i<size;i++){
// 	console.log(i)
// }

// JavaScript reduce() Method | For Beginners
// const array1 = [10,20,30,40]
// console.log(array1)

// const initialValue = 0
// console.log(initialValue)

// const suminitialValue = array1.reduce((prevVal,currVal,currIndex,array1) => {
// 	console.log({currIndex,prevVal,currVal});
// 	return prevVal + currVal;
// },initialValue)
// console.log(suminitialValue)

// How to Find the length of longest substring JavaScript
// let string = 'nitesh'
// function lengthExample(string){
// 	let max = 0,current_string = '',char,pos;
// 	for(let i=0;i<string.length;i++){
// 		char = string.charAt(i)
// 		pos = current_string.indexOf(char)
// 		if(!pos == -1){
// 			current_string = current_string.substr(pos+1)
// 		}
// 		current_string += char;
// 		max = Math.max(max,current_string.length)
// 	}
// 	return max
// }
// console.log(lengthExample('nitesh'))


// // Write A Javascript Program for Largest Sum Contiguous Subarra
// function getMaxSum(arr){
// 	let maxSum = arr[0]
// 	let currSum = 0;
// 	for (let item of arr){
// 		currSum += item;
// 		maxSum = Math.max(maxSum,currSum)
// 		if(currSum < 0) currSum = 0
// 	}

// return maxSum
// }
// console.log(getMaxSum([100,230,30,-3.5,-9,2]))

// const numbers = ['one','two','three','four']
// const colors = ['red','green','yellow']
// console.log(...numbers,...colors)
// console.log(numbers.length)
// console.log(colors.length)
// const resultpop = numbers.pop()
// console.log(resultpop)
// const resultpush = numbers.push()
// console.log(resultpush)


// const arr = {
// 	0:1,
// 	1:2,
// 	2:"three",
// 	3:4
// }

// console.log(arr)

// const arr = [1,2,'three',4,5,true,false]
// console.log(arr.at(-3))
// console.log(arr.at(-1))
// console.log(arr.at(0))
// console.log(arr.at(2))
// console.log(arr.at(7))

// const str = 'this is string'
// console.log(str.at(0))
// console.log(str.at(-1))
// console.log(arr[arr.length-1])
// console.log(arr[0])
// console.log(arr[-1])

// skip values in array destructing
// const colors = ['red','yellow','green','blue','brown']
// const [,,...remainingColors] = colors
// console.log(remainingColors)

// const tech = ['C++','Java','JavaScript'];
// console.log(tech.map(technology => technology.length))

// The at() method for arrays can take both positive and negative integer values and returns the item at that index. The negative integers count back from the last item in the array, enabling negative indexing in JavaScript. This cool feature was introduced in ES2022.
// let arr = [3, 4, 5, 6, 7];
// let lastElement = arr.at(-1);
// console.log(lastElement);


// const x = 10
// var num = [1, 2, 3, 4];
// console.log(num);
// console.log(num.at(-1));
// console.log(num.push(5));
// console.log(num.pop());
// console.log(num.fill(1));
// console.log(num.shift());
// console.log(num.unshift());
// console.log(num.reverse());
// console.log(num.includes(2));
// console.log(num.map(item => 2 * item))
// console.log(num.filter(item => item > 2))
// console.log(num.find(item => item > 2))
// console.log(num.every(item => item > 2))
// console.log(num.some(item => item > 2))
// console.log(num.findIndex(item => item > 2))
// console.log(num.reduce((a,b) => a+b))
// console.log(num.toString())
// console.log(num.join('-'))
// console.log(num.splice(2,0,"i","p"))
// console.log(num.slice(2,3))
// console.log(num.sort((a,b) => b-a))
// console.log(x.sort(function(a,b) {return a-b}))
// console.log(x.sort(function(a,b) {return b-a}))
// console.log(x.sort(function(a,b) {return 0.5 - Math.random()}))

//********* 17TH OCTOBER 2022, MONDAY *********//
// // Count by the properties of an array of objects

// // convert an array of objects to a single object
// const arr = [
//   { id: '1', name: 'Alpha', gender: 'Male' },
//   { id: '2', name: 'Bravo', gender: 'Male' },
//   { id: '3', name: 'Charlie', gender: 'Female' },
// ];

// console.log(arr.reduce((a, b) => ({ a, b }), {}));
// console.log(Object.values(arr.map((item) => item)))

// // compare two arrays regardless of order
// const isEqual = (a, b) =>
//   JSON.stringify([...new Set(a)].sort()) ===
//   JSON.stringify([...new Set(b)].sort());
// console.log(isEqual([1, 2, 3], [1, 2, 3]));

// // compare two arrays
// const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
// console.log(isEqual([1, 2, 3], [1, 2, 3]));
// console.log(isEqual([1, 2, 3], [1, '2', 3]));

// // clone an array
// const arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
// console.log(arr.slice(0));
// console.log([...arr]);
// console.log(Array.from(arr));
// console.log(arr.map((x) => x));
// console.log(JSON.parse(JSON.stringify(arr)));
// console.log(arr.concat([111]));
// console.log(structuredClone);
