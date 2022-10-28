// How to Find the majority element of an array JavaScript
// const arr = [2,4,2,2,2,6,2,52]
// const majEle = (arr) => {

// }
// function majEle(arr){
// 	const threshold = Math.floor(arr.length / 2)
// 	const map = {}

// 	for (let i=0;i<arr.length;i++){
// 		const value = arr[i]
// 		map[value] = map[value] +1 || 1
// 		if(map[value] > threshold){
// 			return value
// 		}
// 	}
// }
// console.log(majEle(arr));

// How to find second largest number in array in JavaScript
// let arr = [1,10,2,9]
// const result = function secondEl(arr){
// 	let max = -1
// 	let secMax = -1
// 	arr.forEach((el) => {
// 		if(el>max){
// 			let temp = max;
// 			max = el 
// 			secMax = temp
// 		}
// 		else if(el > secMax){
// 			secMax = el;
// 		}
// 	})
// 	return secMax 
// }
// console.log(result([1,10,2,9]))

// function findRunningFrequency(string) {

// 	if(!string){
// 		return string
// 	}
// 	let resultString = ''
// 	let count = 1 

// 	for(let i=1;i<=string.length;i++){
// 		if(string[i] === string[i-1]){
// 			count += 1;
// 		}
// 		else{
// 			resultString += string[i-1]+count;
// 			count  = 1 
// 		}
// 	}
// 	return resultString
// }
// console.log(findRunningFrequency('111333227'))

// let str = '1113333' = '1433'
// console.log(str)

//substring
// const string1 = 'hi'
// const string2 = 'all'
// function findComString(str1,str2){
// 	const stringmap = new Map()
// 	for (let char of str1){
// 		stringmap[char] = true
// 	}

// 	let resultString  = ''

// 	for(let char of str2){
// 		if(stringmap[char]){
// 			resultString += char;
// 		}
// 	}
// 	return resultString.length > 0 
// }
// console.log(findComString(string1,string2))
// console.log(findComString(string1,string2));

// speaking function - do you need to give voice to your app? here is the solution try it in the console.
// function speak(message,language ='en-US'){
// 	const msg  = new SpeechSynthesisUtterance(message);
// 	msg.lang = language;
// 	SpeechSynthesis.speak(msg)
// }

// console.log(speak('my inital language js e-book will soon be released'))
// console.log(speak('do you support me in reaching the most people possible?','it-IT'))

// simple array 
// const studentsRollNoArr = [1,2,3,4,5]
// const [first,second,...args] = studentsRollNoArr
// console.log('first element of array',first,second)
// console.log('others of array',...args)

// spread and rest operator - the three dots operator 
// object literal 
// let obj1 = {test:'value',x:10}
// let obj2 = {text:'other value',y:20}
// let combined = {...obj1,...obj2}
// console.log(combined)
//array literal
// const boys = ['vishal','mayur']
// const girls = ['sonal','jinal']
// console.log(...boys,...girls)

// with a function
// function showCoords(x,y,z){
// 	console.log(`x : ${x} y: ${y} z: ${z}`)
// }
// const coords = [2,1.5,3.5]
// console.log(showCoords(...coords))

// usecases of weak map - to keep an objects private data private
// var Person = (function(){
// 	var privateData = new WeakMap();

// 	function Person(name){
// 		privateData.set(this,{name:name})
// 	}

// 	Person.prototype.getName = function(){
// 		return privateData.get(this).name;
// 	}

// 	return Person;
// })

// weakMap example
// const aboutAuthor = new WeakMap();
// const currentAge = {};
// const currentCity = {};

// aboutAuthor.set(currentAge,33)
// aboutAuthor.set(currentCity,'Mumbai')

// // aboutAuthor.delete(currentAge)
// console.log(aboutAuthor.has(currentAge))


// set iteration example 
// const friends = ['vijay','ronak','vishal','rahul']
// let text = '';
// friends.forEach(function(val){
// 	text += val + "<br>"
// })
// document.getElementById('demo').innerHTML = text;
// const letter = new Set(['a','b','c'])
// let text = ''
// letter.forEach(function(value){
// 	text += value + "<br>"
// })
// document.getElementById('demo').innerHTML = text;

// adding elements to a set
// let friends = new Set()
// let pranay = {
// 	name:"pranay"
// }
// let tejas = {
// 	name:"tejas"
// }
// friends.add(pranay)
// friends.add(pranay)
// friends.add(tejas)
// friends.add(pranay)
// console.log(friends.size)

// let vegetables = new Set()

// let cucumber = {
// 	name:'cucumber'
// }
// let onion = {
// 	name:'onion'
// }
// let potato = {
// 	name:'potato'
// }
// let tomato = {
// 	name:'tomato'
// }
// vegetables.add(cucumber)
// vegetables.add(cucumber)
// vegetables.add(onion)
// vegetables.add(potato)
// vegetables.add(onion)
// vegetables.add(potato)
// vegetables.add(tomato)
// console.log(vegetables.size)

// new Set() method 
// const letter = new Set(['a','b','c'])
// console.log(letter)

// create a map from an object
// let srcobject = {
// 	name:'nitesh khatri',
// 	title:'king in the north'
// }
// let mapexample = new Map(Object.entries(srcobject))
// console.log(mapexample)


// map set 
// const friends = new Map();
// console.log(friends.set('vijay',2000))

// map creation
// const fruits = new Map([
// 	['apples',500],
// 	['banana',300],
// 	['oranges',200],
// 	])

// console.log(fruits)

// function rest parameter 
// function sum(...args){
// 	let sum = 0 
// 	for(let arg of args) sum += arg
// 	return sum; 
// }
// let x = sum(4,9,16,25,29,100,66,77)
// console.log(x)

// CLASS example 
// class Person{
// 	constructor(name){
// 		this.name = name
// 	}
// }

// const member = new Person('nitesh')
// console.log(typeof member)
// class UserProfile{
// 	constructor(fname,lname){
// 		this.fname = fname
// 		this.lname = lname
// 	}

// 	getName(){
// 		console.log(`the fullname is ${this.fname} ${this.lname}`)
// 	}
// }

// let obj = new UserProfile('nitesh','khatri')
// console.log(obj.getName());

// PROMISES are used for asynchronous execution. we can use promise with the arrow function 
// var asynccall = new Promise((resolve,reject) => {
// 	resolve()
// }).then(() => console.log('DONE!'))

// enchanced object literals
// function getLaptop(make,model,year){
// 	return {
// 		make,model,year
// 	}
// }
// console.log(getLaptop('maruti',111,2023))

// destructing assignment
// let person = {name:'nitesh',age:33}
// let {name,age} = person
// console.log(name,age)

// let fruits = ['apple','banana','grape']
// let [a,b,c] = fruits 
// console.log(a,b,c)

// default parameters
// let calculateArea = function(height=2300,width=1000){
// 	console.log(height,width)
// }
// calculateArea()

// template literals 
// var first  = 'nitesh'
// var last  = 'khatri'
// var name = `my name is ${first} ${last}`
// console.log(name)


// multine sstrings
// var poemData = `Johny, Johny.

// Yes, Papa?

// Eating sugar?

// No, Papa.

// Telling lies?

// No, Papa.

// Open your mouth.

// Ha-ha-ha!`
// console.log(poemData)


// arrow function example
// var sum = function(a,b){
// 	return  a +b 
// }
// console.log(sum(10,20))

// var sum = (a,b) => a+b 
// console.log(sum(40,20))


// let and const keywords
// let x = 10
// {
// 	let x = 2
// }
// document.getElementById('demo').innerHTML = x 


// var x = 10
// {
// 	const x = 2
// }
// document.getElementById('demo').innerHTML = x 