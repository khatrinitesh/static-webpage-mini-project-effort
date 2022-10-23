import './array/array.js'; // ARRAY

//**** 9TH OCTOBER 2022, SUNDAY **** //
function changeHead(id) {
  id.innerHTML = 'sameet khatri';
}
function changeText(id) {
  id.innerHTML = 'you clicked on me!';
}
var myptag = document.getElementById('myptag');
myptag.style.color = 'red';
myptag.style.backgroundColor = 'yellow';
myptag.style.fontSize = '50px';
myptag.style.fontFamily = 'Arial';
myptag.style.fontWeight = '700';
myptag.style.textAlign = 'center';
myptag.style.padding = '20px';
myptag.style.border = '2px solid red';
myptag.style.borderRadius = '10px';

function SubmitForm() {
  var mytext1 = document.myform1.mytext1.value;
  if (myform1.mytext1.value == ' ') {
    alert('please enter your name');
  } else if (myform1.mytext2.value == '') {
    alert('please enter your password');
  } else if (myform1.mytext2.value.length < 6) {
    alert('please must be atleast of 6 characters');
  } else if (
    myform1.mytext2.value.includes(' ') ||
    myform1.mytext2.value.includes('.')
  )
    alert('passsword cannot contain spaces or .');
  else {
    // alert('thank you for submitting the form')
    document.write('thank you for submitting the form');
  }
  alert(mytext1);
}

var myimage = document.getElementById('myimg');
myimage.src =
  'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg';

function changeImg() {
  myimage.src =
    'https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg?w=2000';
}
// function firstLetterToUpperCase() {
//   let str = 'how can mirrors be real if our eyes aren"t real';

//   let arr = str.split(' ');
//   let capitalLetters = arr.map((item) => item[0].toUpperCase());
//   console.log(capitalLetters);
// }
// firstLetterToUpperCase();

//**** 8TH OCTOBER 2022, SATURDAY **** //
// const user = {
//   name: 'urvashi',
//   age: 64,
//   email: 'urvashi.khatri58@gmail.com',
// };
// console.log(Object.entries(user));

// function Person(name, age, email) {
//   this.firstName = name;
//   this.Age = age;
//   this.Email = email;
// }

// let Person1 = new Person('nitesh', 33, 'nitesh.khatri88@gmail.com');
// let Person2 = new Person('sameet', 40, 'sameet21000@gmail.com');
// Person.prototype.fullname = function () {
//   return this.firstName + ' ' + this.Age;
// };
// console.log(Person1.fullname());
// console.log(Person2.fullname());
// const user = {
//   name: 'nitesh',
//   age: 30,
//   email: 'nitesh.khatri88@gmail.com',
// };
// var arr1 = Object.values(user);
// h1tag.innerHTML = arr1;
// let h1tag = document.querySelector('h1');
// let data = JSON.stringify(user);

// let data2 = `your name is ${user.name}`;
// data += `and your age is ${user.age}`;
// data = JSON.parse(data);
// h1tag.innerHTML = typeof data;

// let arr = [1,2,3,4,5]
// let firstname = 'nitesh'
// let lastname = 'khatri'
// let age = 33
// let city = 'mumbai'
// console.log(arr)
// console.log(firstname,lastname)

// let myobj = {
//   firstname: 'sameeet',
//   lastname: 'khatri',
//   age: 40,
//   city: 'usa',
//   language: 'english',
//   set mylang(lang) {
//     this.language = lang;
//   },
//   set mybody(skin) {
//     this.skinner = skin;
//   },
//   fulldata: function () {
//     return (
//       this.firstname +
//       ' ' +
//       this.lastname +
//       ' is ' +
//       this.age +
//       ' age old. ' +
//       this.city
//     );
//   },
//   get fullname() {
//     return this.firstname + ' ' + this.lastname;
//   },
// };
// myobj.mylang = 'javascript';
// myobj.mybody = 'nose';
// console.log(myobj);
// let myobj2 = {
//   firstname: 'nitesh',
//   lastname: 'khatri',
//   age: 33,
//   city: 'mumbai',
// };
// console.log(myobj.fulldata());
// console.log(myobj.fullname);
// for (let key in myobj) {
//   console.log(key, myobj[key]);
// }
// myobj.email = 'nitesh.khatri88@gmail.com';
// delete myobj.age;
// console.log(myobj.firstname);
// console.log(myobj['firstname']);

// myobj.skills = {
//   skills1: 'html (hyper text markup language)',
//   skills2: 'css (cascading style sheet)',
//   skills3: 'js (javascript)',
// };

// myobj2.hobby = {
//   hobby1: 'cricket',
//   hobby2: 'football',
//   hobby3: 'volleyball',
// };
// let myarr = [myobj, myobj2];
// console.log(myarr);
// let text = document.getElementById('myhead');
// text.innerHTML = myobj.firstname;
// console.log(text);

// let x = myobj;
// x.firstname = 'sameet111';
// console.log(x);

// let text = document.getElementById('myhead');
// text.innerHTML = data;

//**** 7TH OCTOBER 2022, FRIDAY **** //
// const myarr = ['Banana', 'Orange', 'Apple'];
// const keys = myarr.keys();
// // console.log(keys);
// for (let i of keys) {
//   console.log(myarr[i]);
// }
// console.log(myarr)
// const numbers = [45, 4, 9, 16, 25];
// let first = numbers.find(9);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first);
// let age = [32, 44, 55, 666];
// let myarrage = age.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(myarrage);
// let myarr = [55, 45, 8, 3, 9, 9, 12, 22];
// let hrcarray = [
//   'nitesh',
//   'abddulla',
//   'siddharath',
//   'sufiyan',
//   'adnaz',
//   'punit',
//   'hitesh',
// ];
// const resultmyarr = myarr.sort(function (b, a) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// const resultmyarrword = hrcarray.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// console.log(resultmyarr);
// console.log(resultmyarrword);
// const fruits = ['banana','orange','apple','mango']
// fruits.splice(2,0,'lemon','kiwi')
// console.log(fruits)
// let myarr = ['3','1','2']
// let myarr2 = ['4','5','6']
// let myarr3 = ['7','8','78']
// let myarr4 = myarr.concat(myarr2,myarr3)
// let myarr5 = myarr.splice(1,2,'a','b','c')
// console.log(myarr5)
// let myarr = ['aaa','bbbb','ccc']
// myarr.unshift('ddd')
// console.log(myarr)
// let myarray123 = ['hj', 'vj', 'cj', 'dj'];
// console.log(myarray123.push('fj'))
// myarray123.forEach(element => {
//   console.log(element + 'is a good day')
// })
// console.log(myarray123.push('ej'))
// for(let i =0;i<myarray123.length - 1;i++){
//   console.log(myarray123[i])
// }
// let myname = 'nitesh khatrish channel';
// let myname2 = 'nitesh khatrish\r channel';
// let myname3 = 'nitesh  khatri';
// let b = 'world';
// let c = b.padStart(10, ' abc');
// let d = b.padEnd(10, ' abc');
// console.log(c.charAt(20))
// console.log(c)
// console.log(d)
// console.log(myname);
// console.log(myname2);
// console.log(myname3);
// let mytext = 'nitesh khatri';
// let mytextr = mytext.split(' ');
// console.log(mytextr)
// let mytext3 = mytextr.forEach((element) => {
//   element.charAt(0).toUpperCase();
// });
// console.log(mytext3);

//**** 6TH OCTOBER 2022, THURSDAY **** //
// let arr = ['1', '2', '3', '4', '5', '6', '7'];
// let myFunc = function (a, b) {
//   console.log(a + b);
// };
// console.log(myFunc(11, 2));
// arr.forEach(
//   function(item){
//     console.log(item)
//   }
// )
//  for(let i =0;i<arr.length;i++){
//    console.log(arr[i])
//  }
// let example = (value1 = 'nitesh', value2 = 'sameet') => {
//   return `${value1} ${value2}`;
// };
// console.log(example('nitesh', 32));
// console.log(example('sameet', 43));

// let name = 'nitesh';
// let name1 = 'sameet';
// let age = 20;
// let age1 = 19;
// console.log(`${name} ${name1} ${age} ${age1}`);
// function myFunction1(value1, value2, value3, value4) {
//   console.log(`${value1} ${value2} ${value3} ${value4}`);
// }
// myFunction1(name, name1, age1, age);
// var arr  = [1,2,3,3,4,5]
// for (let i= 0;i<arr.length;i++){
//   console.log(arr[i])
// }
// for(let i=0;i<10;i++){
//   console.log('this is length array ' + i)
// }
// let object = [1, 2, 3, 3, 4];
// for(let key in object){
//   console.log(object[key])
// }
// for (let key of object) {
//   console.log(object[key]);
// }
// let object = {
//   name:'nitesh',
//   age:33,
//   dob:'17/06/1989'
// }
// console.log(object)
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// arr.forEach(
//   function(myVal){
//     console.log(myVal)
//   }
// )
// let k = 20;
// for (k; k < 20; k==6) {
//   if(k%2 != 0){
//     continue;
//   }
//   console.log(k);
// }
// let arr = [
//   {
//     name:'nitesh',
//     age:33,
//     type:"dangerous programmer"
//   }
// ]
// console.log(arr)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// for(var i=0;i<=6;i++){
//   console.log(i)
// }

//**** 5TH OCTOBER 2022, WEDNESDAY **** //

// var arr = [1,2,3,6,1,7]
// arr.reverse()
// console.log(arr)
// var arr = [1,2,3,6]
// console.log(arr.indexOf(6))
// console.log(arr.length)
// console.log(arr.pop())
// console.log(arr.push(8))
// var str = ' nitesh '
// var str1 = 'sameet'
// console.log(str.concat(str1))
// console.log(1 == '1');
// console.log(1 === '1');

//arithmetic operators + - / % ++ -- **
// let a = 10;
// let b = 20;
// console.log(a, b);

// assignment operators = += *= /= %= **=
// let a1 = 10;
// let b2 = 20;
// const c2 = a1 + b2
// console.log(c2)

// comparison operators == === !== != > >= < <=
// console.log('nitesh' === 'nitesh');

// logical operatos || && !

// let myobject = {
//   name:'nitesh',
//   age:33,
//   hobbies:['coding','cycling','cricket','table tennis']
// }
// console.log(myobject.hobbies[0])
// console.log(myobject)
// const isLoggedNumber = 58
// if(isLoggedNumber > 85){
//   console.log('achievement')
// }
// else{
//   console.log('no achievement')
// }
// const isLoggedName = false
// console.log(isLoggedName ? 'nitesh' : 'sameet')
// const isLogged = 45;
// if (isLogged === 55) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// const x = 10;
// const y = 20;
// const z = x + y
// console.log(typeof z)
// const a = 30
// if(a % 10 !== 0){
//   console.log('even number',a)
// }
// else{
//   console.log('even number',a)
// }

//**** 3RD OCTOBER 2022, MONDAY **** //

// Difference Between Parameters and Argument
// const resultdate = new Date().getMonth()
// console.log(resultdate)
// let result = Math.floor(Math.random() * 45 / 2)
// console.log(result)
// let randomNumber1 = Math.floor(Math.random() * 6)
// console.log(randomNumber1)
// let randomNumber2 = new Date() % 6
// console.log(randomNumber2);
// Why {} == {} and {} === {} is false
// console.log({} == {});
// console.log({} === {});

// function sum(a, b) {
//   // parameters
//   return a + b;
// }
// console.log(sum(10, 20)); // agruments

// different ways to handle events
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }
// option 1
// function bgChange() {
//   const randCol = `rgb(${random(255)}, ${random(255)},${random(243)})`;
//   document.body.style.backgroundColor = randCol;
// }

// option 2
// const btn = document.getElementById('btnChange');
// btn.addEventListener('click', function () {
//   const randCol = `rgb(${random(255)}, ${random(255)},${random(243)})`;
//   document.body.style.backgroundColor = randCol;
// });

// there are many methods to find the last element in an array in js i have compiled a few that i used over the years for this purpose
// const arr = [1, 2, 3, 4, 5];
// const lastItem = arr[arr.length - 1]
// console.log(lastItem)
// const lastItem = arr.slice(-1)[0]
// console.log(lastItem)
// const lastItem = arr.at(-1)
// console.log(lastItem)
// const lastItem = arr.pop()
// console.log(lastItem)
// map, filter and reduce
// map
// var numbers = [1,2,3,4,5]
// var doubleNumbers = numbers.map((item) => item * 2)
// console.log(doubleNumbers)
// filter
// var numbers = [1, 2, 3, 4, 5];
// const resultfilter = numbers.filter((n) => n > 2);
// console.log(resultfilter);

// reduce
// var numbers = [1, 2, 3, 4, 5];
// var initialVal = 0
// let result = numbers.reduce((acc,cul) => acc + cul,initialVal)
// console.log(result)

//**** 1ST OCTOBER 2022, SATURDAY **** //

// how to reverse a string in a sentence
// var string = 'nitesh khatri is always well and trust';
// var newString = string.split('').reverse().join('');
// var finalString = string.split(' ').reverse().join('');
// console.log(newString);
// console.log(finalString);

// reduce
// const inr = [10,20,30,40,-20,50]
// const totalINR = inr.reduce(function(total,item){
//   return total + item
// })
// console.log(totalINR)

// filter
// const user  = ['Ajay','Sivam','Anuj','Shankar']
// let nameStartsWithA = user.filter(function(name){
//   return name.startsWith('S')
// })
// console.log(nameStartsWithA)

// map
// let arr = [10, 20, 30, 40, 50, 60];
// let square = arr.map(function (item, index) {
//   return `Index ${index} Square: ${item * item}`;
// });
// console.log(square);

//**** 29th September 2022, Thursday **** //

// ARRAY ISARRAY METHOD 💡
// const value1 = {};
// const value2 = 'sameet';
// const value3 = [];
// const isValueArray = Array.isArray(value1);
// console.log(isValueArray);
// const isValue2Array = Array.isArray(value2);
// console.log(isValue2Array);
// const isValue3Array = Array.isArray(value3);
// console.log(isValue3Array);
// add array to array
// let a  = [1,2,3]
// let b  = [4,5,6]
// a.push(b)
// console.log(a)
// console.log(a.concat(b))

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// const result = arr1.push(...arr2)
// console.log(result)

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// const resultarr12 = [...arr1, ...arr2];
// console.log(resultarr12);
// for (var i = 0; i < arr1.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1);

// array join method Here is the part 13 of my Array Methods Explained  ✨Array.join is a method that concatenates array items to string using a separator.
// const array1 = [1, 2, 3, 4];
// const array2 = ['banana', 'cashew', 20, true, 'mango'];
// const string1 = array1.join();
// const string2 = array2.join();
// const string3 = array2.join('-AA-');
// console.log(string1);
// console.log(string2);
// console.log(string3);

// how to remove duplicates from an array
// var arr = [1, 2, 3, 4, 3, 6, 5, 4];
// function removeDup(arr) {
//   let items = {};
//   arr.forEach((item) => {
//     if (!items[item]) {
//     }
//     items[item] = item;
//   });
//   return Object.values(items);
// }

// console.log(removeDup(arr));

// let newArray = [...new Set(arr)];
// let newFilterArr = arr.filter((item) => item > 4)
// let newFilterArr = arr.filter((val, index) => {
//   return arr.indexOf(val) == index;
// });
// console.log(newArray);
// console.log(newFilterArr);

//**** https://www.youtube.com/watch?v=PkZNo7MFNFg&t=929s Learn JavaScript - Full ourse for Beginners  ****//

// create an export fallback with an example default
// function subtract(x,y) {return x-y}
// console.log(subtract(10,50))

// understand the difference between input and require
// export const capitalizeString = str => str.toUpperCase()
// console.log(capitalizeString);

// use getters and setters to control access to an object
// class Book{
//   constructor(author){
//     this._author = author
//   }
//   get writer(){
//     return this._author
//   }
//   set writer(){
//     this._author = updatedAuthor
//   }
// }

// function makeClass(){
//   class Thermostat {
//     constructor(temp){
//       this._temp = 5/temp  * (temp - 32)
//     }
//     get temperature(){
//       return this._temp
//     }
//     set temperature(){
//       this._temp = updatedTemp
//     }
//   }
//   return Thermostat
// }

// const Thermostat = makeClass()
// const thermos = new Thermostat(76)
// let temp = thermos.temperature
// thermos.temperature = 26;
// temp = thermos.temperature
// console.log(temp)

// use class syntax to define a constructor function
// function makeClass() {
//   class Vegetable{
//     constructor(name){
//       this.name =  name
//     }
//   }
//   return Vegetable;
// }
// const Vegetable = makeClass();
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);

// class spaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
// }
// var zesus = new spaceShuttle('nitesh');
// console.log(zesus.targetPlanet);

// var spaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zesus = new spaceShuttle('nitesh');
// console.log(zesus.targetPlanet);

// write concise object literal declarations using simple fields
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     'use strict';
//     this.gear = newGear;
//   },
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);
// const createPerson = (name,age,gender)=> ({name,age,gender})
// console.log(createPerson('nitesh',33,'male'))
// const createPerson = (name,age,gender)=> {
//   return{
//     name:name,
//     age:age,
//     gender:gender
//   }
// }
// console.log(createPerson('nitesh',33,'male'))

// create strings using template literals 3:08:23
// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['id=backlist', 'no-dup-keys'],
// };
// function makeList(arr) {
//   const resultDisplayArray = []
//   for(let i=0;i<arr.length;i++){
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//   return resultDisplayArray;
// }
// const resultexample = makeList(result.failure);
// console.log(resultexample);
// const person = {
//   name: 'nitesh khatri',
//   age: 33,
// };
// const greeting = `hello my name is ${person.name}! i am ${person.age} years old`;
// console.log(greeting);

// use destructing assignment to pass an object as a function's parameters
// const stats = {
//   max:56.78,
//   standard_deviation:4.43,
//   median:34.44,
//   mode:23.87,
//   min:-0.75,
//   average:35.85
// }
// const half = (function(){
//   return function half(stats){
//     return (stats.max + stats.min) / 2.0
//   };
// });
// console.log(stats)
// console.log(half(stats))

// use destructing assignment with the rest operator
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removedFirstTwo(list) {
//   const [, , ...arr] = list;
//   return arr;
// }
// const arr = removedFirstTwo(source);
// console.log(arr);
// console.log(source);

// use destructing assignment to assign variables from arrays
// const [z, x, y] = [1, 2, 3, 4, 5, 6];
// console.log(z, x, y);

// let a = 8,b = 6;
// (() => {
//     'use strict';
//     [a,b] = [b,a]
//   })();
// console.log(a);
// console.log(b);

// destructing assignment with nested objects
// const LOCAL_FORECAST = {
//   today: { min: 72, max: 33 },
//   tomorrow: { min: 73.3, max: 84.6 },
// };

// function getMaxOfTmrw(forecast) {
//   'use strict';

//   // const maxOfTmrw = undefined;
//   const {
//     tomorrow: { max: maxOfTmrw },
//   } = forecast;
//   return maxOfTmrw;
// }
// console.log(getMaxOfTmrw(LOCAL_FORECAST));

// use destructing assignment to assign variables from objects
// var voxel = { x: 315, y: 7.4, z: 6.4 };
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// const { x: a, y: b, z: c } = voxel;
// const AVG_TEMPERATURES = {
//   today: 77.5,
//   tomorrow: 79,
// };
// function getTempOfTomrw(avgTemperature) {
//   'use strict';
//   const {tomorrow:tempOfTomorrow} = avgTemperature
//   return tempOfTomorrow;
// }
// console.log(getTempOfTomrw(AVG_TEMPERATURES)); // should be 79

// use the spread operator to evaluate arrays in-place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'];
// let arr2;
// (function () {
//   arr2 = [...arr1];
//   arr1[0] = 'potato';
// })();
// console.log(arr2);

// use the rest operator with function parameters
// const sum = (function(){
//   return function sum(...args){
//     return args.reduce((a,b) => a+b,0)
//   }
// })()
// console.log(sum(1,1,22,22))
// write higher order arrow functions
// const increment  = (function(){
//   return function increment(number,value = 1){
//     return number + value
//   }
// })()
// console.log(increment(5,2))
// console.log(increment(5))

// write higher order arrow functions
// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const squareList = (arr) => {
//   const squareIntegers = arr
//     .filter((num) => Number.isInteger(num) && num > 0)
//     .map((x) => x * x);
//   return squareIntegers;
// };

// const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);

// write arrow functions with parameter
// var myConcat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// };
// console.log(myConcat([1, 2], [3, 4, 5]));

// use arrow functions to write concise anonymous function
// var magic = function(){
//   return new Date()
// }
// console.log(magic())

// prevent object mutation
// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   Object.freeze(MATH_CONSTANTS);
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(PI);

// mutate an array declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//   'use strict';
//   s[0] = 23;
//   s[1] = 55;
//   s[2] = 57;
// }
// console.log(editInPlace());
// console.log(s);

// declare a read-only variable with the const keyword
// function printManyTimes(str) {
//   const SENTENCE = str + ' is cool';
//   for (let i = 0; i < str.length; i += 2) {
//     console.log(SENTENCE);
//   }
// }
// printManyTimes('freecodecamp');

// compare scopes of the var and let keywords
// function checkScope() {
//   'use strict';
//   // let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('block scope i is : ', i);
//   }
//   console.log('function scope i is :', i);
//   return i;
// }
// console.log(checkScope(i));
// differences between the var and let keywords
// let catname = 'nitesh'
// let quote ;

// catname = 'sameet'

// function catTalk(){
//   'use strict'
//   catname = 'mom'
//   quote = catname + 'says meow'
// }
// console.log(catTalk())

// use multiple conditional (ternary) opeartor
// function checkSign(num) {
//   return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
// }
// console.log(checkSign(-15));

// use the conditional (ternary) operator

// function checkEqual(a, b) {
//   return a === b ? true : false;
//   return a === b;
// }
// console.log(checkEqual(1, 1));
// function checkEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkEqual(10, 20));
// use the parseInt function
// function convetToInteger(str){
//   return parseInt(str,2)
// }
// console.log(convetToInteger('102'));

// function ourRandomRange(ourMin,ourMax){
//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }
// console.log(ourRandomRange(1,15))

// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random()* (myMax - myMin + 1 )) + myMin;
// }
// console.log(randomRange(11, 22));

//  generate random fractions
// var randomNumberBetween9and19 = Math.floor(Math.random() * 22);
// function randomFraction() {
//   return Math.floor(Math.random() * 10);
// }
// console.log(randomFraction());

// function ExampleFaction(){
//   return Math.floor(Math.random() * 10)
// }
// console.log(ExampleFaction())

// profile lookup
// var contacts = [
//   {
//     fname: 'nitesh',
//     sname: 'khatri',
//     number: '9920767524',
//     likes: ['pizza', 'dosa', 'jalebi'],
//   },
//   {
//     fname: 'sameet',
//     sname: 'khatri',
//     number: '9833841501',
//     likes: ['thelpa', 'vada pav', 'sandwich'],
//   },
//   {
//     fname: 'urvashi',
//     sname: 'khatri',
//     number: '9769708101',
//     likes: ['khichdi', 'dal', 'roti'],
//   },
//   {
//     fname: 'arvind',
//     sname: 'khatri',
//     number: '9819606321',
//     likes: ['pani puri', 'chole bhature', 'cutlet'],
//   },
// ];
// console.table(contacts);

// function lookUpProfile(name, prop) {
//   for (var i = 0; i < contacts; i++) {
//     if (contacts[i].fname === name) {
//       return contacts[i][prop] || " NO such property";
//     }
//   }
//   return 'no such contact';
// }

// var data = lookUpProfile('nitesh', 'likes');
// console.log(data);

// iterate with do while loops
// var myArray = [];
// var i = 10;
// do{
//   myArray.push(i)
//   i++
// }
// while(i<5)
// console.log(i,myArray)
// while (i < 5) {
//   myArray.push[i];
// }
// console.log(i, myArray);

// nesting for loops
// function multipleAllArr() {
//   var product = 1;
//   var arr = 0
//   for (var i = 0; i < arr.length; i++) {
//     for(var j=0;j<arr[i].length;j++){
//       product *= arr[i][j]
//     }
//   }
//   return product
// }
// var product = multipleAllArr([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
// console.log(product);
// iterate through an array with a for loop
// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;
// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }
// console.log(ourTotal);

// var myArr = [2, 3, 4, 5, 6];
// var total = 0;
// for (var i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// console.log(total);

// count backwards with a for loop
// var ourArray = []

// for(var i=0;i<5;i++){
//   ourArray.push(i)
// }
// console.log(ourArray)

// for(var i =9;i>0;i-=2){
//   ourArray.push(i)
// }
// console.log(ourArray)

// iterate with for loops
// for(var i=0;i<10;i+=2){
//   myArray.push(i)
// }
// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// console.log(ourArray);

// var myArray = []
// for (var i = 0; i < 6; i++) {
//   myArray.push(i);
// }
// console.log(myArray)

// iterate with while loops
// var myArray = []
// var i = 0;
// while (i < 5) {
//   myArray.push[i];
//   i++;
// }
// console.log(myArray);

// record collection
// var collection = {
//   2548: {
//     ablum: 'slippery when wet',
//     artist: 'bon jovi',

//     tracks: ['let it rock', 'you give love a bad name'],
//   },
//   2648: {
//     ablum: '1999',
//     artist: 'prince',
//     tracks: ['1999', 'you give love a bad name'],
//   },
// };
// // keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// console.log(collectionCopy);

// function updateRecords(id, prop, value) {
//   if (value === '') {
//     delete collection[id][prop];
//   } else if (prop === 'tracks') {
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value);
//   } else {
//     collection[id][prop] = value;
//   }
//   return collection;
// }
// updateRecords(2468, 'tracks', 'test');
// console.log(5419, 'artist', 'abba');

// accessing nesting arrays
// var myPlants = [
//   {
//     type: 'flowers',
//     list: ['rose', 'tulip', 'dandelion'],
//   },
//   {
//     type: 'trees',
//     list: ['fir', 'pine', 'birch'],
//   },
// ];
// console.log(myPlants[0].list);

// accessing nesting objects
// var myStorage = {
//   car: {
//     inside: {
//       'glove box': 'maps',
//       'passenger seat': 'crumbs',
//     },
//     outside: {
//       trunk: 'jack',
//     },
//   },
// };
// var gloveBoxContents = myStorage.car.inside['glove box'];
// console.log(gloveBoxContents);

// var myMusic = [
//   {
//     "artist":"nitesh",
//     "title":"piano",
//     "release_year":1972,
//     "formats":[
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold":true
//   }
// ]
// console.log(myMusic)

// test objects for properties
// var myObj = {
//   gift: 'pony',
//   pet: 'kitten',
//   bed: 'sleigh',
// };
// function Example(checkProp) {
//   if (myObj.hasOwnProperty(checkProp)) {
//     return myObj[checkProp];
//   } else {
//     return 'not found';
//   }
//   return 'change me';
// }
// console.log(Example('gift'));

// using object for lookups
// function phoneticLookup(val) {
//   var result = '';
//   var lookup = {
//     alpha: 'adams',
//     bravo: 'boston',
//     charlie: 'chicago',
//     delta: 'denver',
//     echo: 'easy',
//   };
//   result = lookup[val];
//   return result;
// }
// console.log(phoneticLookup('nitesh'));

// accessing object properties with dot notation
// var testObj = {
//   12: 'nitesh',
//   16: 'sameet',
//   19: 'urvashi',
// };
// var playernumbernit = 12;
// var playernumbersam = 16;
// var player = testObj[playernumbersam];
// console.log(player);
// var testObj = {
//   hat: 'ballcap',
//   shirt: 'jersey',
//   shoes: 'cleats',
// };
// var hatValue = testObj['an entree'];
// var shirtValue = testObj['shirt'];
// console.log(hatValue);
// console.log(shirtValue);

// building
// var ourDog = {
//   name: 'nitesh',
//   legs: 4,
//   tails: 1,
//   friends: ['everything'],
// };
// delete ourDog.legs
// console.log(ourDog)
// ourDog.name = 'Happy nitesh'
// console.log(ourDog.name)
// var myDog = {
//   name: 'sameet',
//   legs: 40,
//   tails: 1,
//   friends: ['everything'],
// };
// console.log(myDog);

// counting cards
// var count = 0;
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//       count++;
//     case 10:
//     case 'Q':
//     case 'K':
//       count--;
//       break;
//   }
//   return 'change me';
// }
// console.log(cc(7));
// returning early pattern from functions
// function aTest(a, b) {
//   if (a < 0 || b) {
//     return undefined;
//   }
//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// console.log(aTest(-2, 2));

// returning boolean values from functions
// function isLess(a, b) {
//   if (a < b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLess(50, 1));
// replacing if else chains with switch
// function chainToSwitch(val) {
//   var answer = '';
//   if (val === 'bob') {
//     answer = 'nitesh';
//   } else if (val === 42) {
//     answer = 'the answer';
//   } else if (val === 1) {
//     answer = 'there is no #1';
//   } else if (val === 99) {
//     answer = 'missed me by this much';
//   } else if (val === 7) {
//     answer = 'ate nine';
//   }
//   return answer
// }
// console.log(chainToSwitch(1))

// multiple identical options in switch options
// function sequentialSize(val) {
//   var answer = '';
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = 'low';
//       break;
//     case 1:
//     case 2:
//     case 3:
//       answer = 'low';
//       break;
//   }
//   return answer;
// }
// console.log(sequentialSize(1));

// switch statements
// function caseInSwitch(val) {
//   var answer = '';
//   switch (val) {
//     case 1:
//       answser = 'alpha';
//     case 2:
//       answser = 'delta';
//     case 3:
//       answser = 'mango';
//     case 4:
//       answser = 'pineapple';
//     default:
//       answer = 'stuff';
//   }
//   return answer;
// }
// console.log(caseInSwitch(5));
// Golf code
// var names = ['nitesh', 'sameet', 'vishal', 'mayur', 'sonal', 'nilesh'];
// function gotscore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   }
//   return 'change me';
// }
// console.log(gotscore(5, 4));
// function testSize(num){
//   if(num < 5 ){
//     return 'tiny'
//   }
//   else if(num < 10){
//     return 'small'
//   }
//   else if(num < 15){
//     return 'medium'
//   }
//   else if(num < 20){
//     return 'large'
//   }
//   else{
//     return 'huge'
//   }
// }
// console.log(testSize(6))

// else statements
// function testElseIf(val) {
//   if (val > 10) {
//     return 'Greater than 10';
//   } else if (val < 10) {
//     return 'Smaller  than 10';
//   } else {
//     return 'Between 5 and 10';
//   }
// }
// console.log(testElseIf(5));
// comparison with the greater than or equal to operator
// function testLogicValues(val) {
//   if (val < 10 || val > 20) {
//     return 'outside';
//   }
//   return 'inside';
// }
// console.log(testLogicValues(100));
// function testLogicValues(val){
//   if(val <= 50 || val >=25){
//     return 'yes'
//   }
//   return ' no'
// }
// console.log(testLogicValues(50))

// function testGreater(val){
//   if(val > 33){
//     return 'over 33'
//   }
//   else if(val > 20){
//     return 'over 20'
//   }
//   return '10 or under'
// }
// console.log(testGreater(35))
// comparison with the strict inequality operator
// function testStrictNotEqual(val){
//   if(val > 100){
//     return 'over 100'
//   }
//   else if(val > 35){
//     return 'over 35'
//   }
//   return '10 or under'
// }
// console.log(testStrictNotEqual(101))
// use conditional logic with if statements
// function ourTrueOrFalse(isItTrue) {
//   if (isItTrue) {
//     return 'yes, it is true';
//   }
//   return 'no, it is false';
// }
// function ourTrueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return 'yes, it is true';
//   }
//   return 'no, it is false';
// }
// console.log(ourTrueOrFalse(false));
// function ExampleBoolean(how) {
//   if (how) {
//     return 'nitesh';
//   } else {
//     return 'sameet';
//   }
// }
// console.log(ExampleBoolean(false));
// function compareEquality(a,b){
//   if(a !== b){
//     return 'yes'
//   }
//   else{
//     return 'no'
//   }
// }
// console.log(compareEquality(10,15))
// function testEqual(val){
//   if(val !== 10){
//     return 'equal'
//   }
//   else{
//     return 'not equal'
//   }
// }
// console.log(testEqual(12))
// BOOLEAN VALUES

// function welcomeBoolean(){
//   return true;
// }
// console.log(welcomeBoolean())
// function nextInLine(arr, item) {
//   arr.push(item);
//   return arr.shift();
// }
// var testArr = [1, 2, 3, 4, 5];
// console.log('before:' + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// // console.log(testArr[0]);
// console.log('After' + JSON.stringify(testArr));

// var changed = 0;
// function change(num) {
//   return (num + 5) / 3;
// }
// changed = change(10);

// var processed = 0 ;
// function processedArg(num){
//   return (num+3)/ 15
// }
// console.log(processedArg(10))
// function addFive() {
//   sum += 5;
// }
// console.log(addFive(10))
// var sum = 0
// function addThree(){
//   sum = sum + 3
// }
// console.log(addThree(4,5))
// function timesFive(num){
//   return num * 5
// }
// console.log(timesFive(5))
// function minusSeven(num){
//   return num - 7
// }
// console.log(minusSeven(10))
// var outerWear = 't-shirt'
// function myOutFit(){
//   var outerWear = 'sweater'
//   return outerWear
// }
// console.log(myOutFit())
// console.log(outerWear)

// global scope functions
// function myLocalScope(){
//   console.log(myVar)
// }
// myLocalScope()
// console.log(myVar)

// function functionWithArgs(a,b){
//   console.log(a+b)
// }
// functionWithArgs(10,220)

// write resuable code with functions
// function ourReusableFunction() {
//   console.log('hey nitesh');
// }
// ourReusableFunction();
// ourReusableFunction();
// ourReusableFunction();

// function resuableFunction(){
//   console.log('hi world')
// }
// resuableFunction()

// function ourFunctionWithArgs(a,b){
//   console.log(a-b)
// }
// ourFunctionWithArgs(10,5)

// shopping list
// var mylist = [
//   ['cereal', 3],
//   ['milk', 2],
//   ['banana', 3],
//   ['juice', 10],
// ];
// console.log(mylist);

// manipulate arrays with pop
// var ourArray = [1, 2, 3];
// var removedFromOurArray = ourArray.pop();
// var myArray = [
//   ['nitesh', 23],
//   ['cat', 2],
// ];
// var removedFrommyArray = myArray.pop();
// console.log(removedFrommyArray);
// console.log(myArray);
// console.log(ourArray)

// access multi-dimensional arrays with indexes
// var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
// const myData = myArray[2][1]
// console.log(myData)
// store multiple values with arrays
// var ourArray = ['nitesh', 32];
// var myArray = ['sameet', 40];
// var ourData = ourArray[0]
// console.log(ourData)
// console.log(ourArray, myArray);

// const friends = ['vijay','cjhandresh','hitesh','amit']
// console.log(friends[2])
// var myData = myArray[0];
// console.log(myData);

// Bracket notation to find nth-to-last character in string
// function workBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//   result += 'the' + myAdjective + myNoun + myVerb + myAdverb + 'to the store';
//   return result;
// }
// console.log(workBlanks('dog', 'big', 'ran', 'quickly'));

// var fname = 'nitesh'
// var lastName = 'lovelace'
// var lastLetter = fname[fname.length - 2]
// console.log(lastLetter)

// console.log("Javsacript".slice(2,4))
// console.log("Javsacript".substring(2,4))
// console.log("Javsacript".replace('Ja','HT'))
// console.log("Javsacript".toUpperCase())
// console.log("Javsacript".toLowerCase())
// console.log("Javsacript".charAt(1))
// console.log("Javsacript".charCodeAt())
// console.log("Javsacript".split(''))
// console.log("Javsacript".indexOf('p'))
// console.log("Javsacript".lastIndexOf('s'))
// console.log("Javsacript".startsWith('J'))
// console.log("Javsacript".endsWith('J'))
// console.log("Javsacript".includes('J'))
// console.log("Javsacript".concat(' is cool'))
// console.log("Javsacript".trim())
// console.log("Javsacript".trimStart())
// console.log("Javsacript".trimEnd())

// var myStr = 'sameet khatri'
// myStr[0] = 'h'
// console.log(myStr)
// console.log(myStr)

// var firstCharacter = 0
// var firstname = 'nitesh'
// firstCharacter = firstname[2]
// console.log(firstCharacter)

// find length string
// var firstNameLength = 0;
// var firstName = 'nitesh'
// firstNameLength = firstName.length
// console.log(firstNameLength)
// console.log(firstName)
// var lastLength = 0
// var lastname = 'khatri'
// lastLength = lastname.length
// console.log(lastLength)

// var ourStr = 'freecodecamp is '
// var anAdjective = 'awesome'
// ourStr += anAdjective
// console.log(ourStr)

// var myName = 'nitesh'
// var myStr = 'my name is '  + myName
// console.log(myStr)

// var ourName = 'freecodecamp';
// var ourstr = 'hello, our name is ' + ourName;
// console.log(ourstr);

// var myStr = "this is the first season "
// myStr += "this is the second season"
// console.log(myStr)

// var myStr = " this is start. "  + "this is end"
// console.log(myStr)

// var ourStr =  "i come first "  + "i come second."
// console.log(ourStr)

// \` single quote
// \" double quote
// \\ backslash
// \n newline
// \r carriage return
// \t tab
// \b backspace
// \f form feed

// var myfirst = 'first\n\t\\secondline\n';
// console.log(myfirst);

// var mystr = 'i am a "double quoted"'
// console.log(mystr)
// var anchor = "<a href='https://www.google.com/' target='_blank'>Link</a>"
// console.log(anchor)

// var fname = 'nitesh'
// var lname = 'khatri'
// console.log(fname,lname)
// a = a / 6;
// b = b / 15;
// c = c /  10;
// console.log(a, b, c);

// var remainder;
// remainder = 11 % 3
// console.log(remainder)
// var product = 2 * 0
// console.log(product)
// var number = 5;
// data types - undefined, null, boolean, string, symbol, number and object
// decimal numbers
// var ourDecimal = 5.7
// var myDecimal = 0.003
// console.log(myDecimal)
// console.log(ourDecimal)
// var myVar = 55;
// myVar = myVar + 1
// myVar = myVar - 1
// myVar++
// myVar--
// console.log(myVar);
// var quotient = 66 / 33
// console.log(quotient)
// var product = 8 * 0
// console.log(product)
// var diff = 45 - 0
// console.log(diff)
// var sum = 10 + 0
// console.log(sum)
// var a = 5;
// var b = 10;
// var c = "I am ";
// a = a + 1;
// b = b + 1;
// c = c + ' String!';
// console.log(a, b, c);
// a = 7
// b = a
// console.log(b)
// var a;
// var b = 2;
// console.log(b);
// const pi = 3.13;
// console.log(pi);
// var myName = 'nitesh';
// myName = 8;
// console.log(myName);
// let ourName = 'sameet'
// ourName = 11
// console.log(ourName)

//**** 20th September 2022 - Tuesday ****//
// const users = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496',
//       },
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets',
//     },
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618',
//       },
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains',
//     },
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653',
//       },
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications',
//     },
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990',
//       },
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services',
//     },
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342',
//       },
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems',
//     },
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-71.4197',
//         lng: '71.7478',
//       },
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications',
//     },
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984',
//       },
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers',
//     },
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {
//         lat: '-14.3990',
//         lng: '-120.7677',
//       },
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers',
//     },
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889',
//       },
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies',
//     },
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232',
//       },
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models',
//     },
//   },
// ];
// console.log(users);
// const resultuser = users.map((item) => item.email);
// console.log(resultuser);

//**** 18th September 2022 - Sunday ****//
// const Btn = document.getElementById('btnadd');
// Btn.addEventListener('click', function () {
//   const node = document.createElement('li');
//   const textNode = document.createTextNode('understand list');
//   node.appendChild(textNode);
//   document.getElementById('myList').appendChild(node);
// });
// const Example = (document.getElementById('niteshexample').textContent =
//   '<h1>nitesh khatri</h1>');

// document.write(2+1)
// console.log(2+1)
// if(window.localStorage){
//   console.log('The local storage is supported')
// }
// let message = 'Welcome to JavaScript';
// console.log(message);

// let formatted = true;
// if (formatted) {
//   console.log('The code is easy to read');
// }

//**** 17th September 2022 - Saturday ****//

// const word = ['nitesh', 'nitesh', 'sameet'];
// console.log(...new Set(word));
// const num = [0, 1 , 2, 3,55, 10, 20, 30 ]
// const numresult = num.sort(function(a,b) {
//   if(a>b) return 1
//   if(a<b) return -1
//   return 0
// })
// console.log(numresult)

// Learn Arrays & Objects in Vanilla JavaScript for Beginners (Data Structures)

// const letterFrequency = (phrase) => {
//   console.log(phrase);
//   for (const letter of phrase) {
//     console.log(letter);
//   }
// };
// console.log(letterFrequency('hahahga'));

// [1,2,3,4]
// result = 0
// result = 1
// result = 3
// result = 6
// result = 19
// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number);
//   }
//   return { result };
// };
// const nums = [1, 2, 3, 4];
// console.log(sumArray(nums));

// const nums = [1, 2, 3, 4, 5];
// console.log(sumArray(nums));

// const max = (numbers) => {
//   let result = numbers[0];
//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }
//   return { result };
// };
// console.log(max([1, 2, 3, 444]));

// const howManyletters = () => {
//   const phrase = 'hey, how are you? what are you doing?';
//   for (const letter in phrase) {
//     console.log(Number(letter) + 1);
//   }
//   let result = 0;
//   for (const index in phrase) {
//     console.log(Number(index) + 1);
//     result = index;
//   }
//   return { result };
// };

// const Happy = (phrase) => {
//   return { result: phrase.length };
// };
// const phrase = prompt('write your phrase');
// console.log(Happy(phrase));

// objects
// const person = {
//   name: 'nitesh',
//   age: 33,
//   dob: '17/06/1989',
// };
// person.phone = '9920767524';
// console.log(person.phone);
// console.log(person['phone']);
// console.log(person.name);
// console.log(person.age);
// console.log(person.dob);
// console.log(person['name']);
// console.log(person['age']);
// console.log(person['dob']);

// const person2 = {
//   name: 'sameet',
//   age: 40,
//   dob: '14/06/1982',
// };
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.dob);
// console.log(person2['name']);
// console.log(person2['age']);
// console.log(person2['dob']);

// const introducer = (name, age, dob, country) => {
//   const person = {
//     name: name,
//     age: age,
//     dob: dob,
//     country: country,
//   };
//   const intro = `hi my name ${person.name} is age ${person.age} and dob ${person.dob} and country ${person.country}`;
//   return intro;
// };
// console.log(introducer('nitesh', 40, '14/06/1982', 'USA'));
// console.log(introducer('nitesh', 33, '17/06/1989', 'India'));

// const groceries = ['apple', 'mango', 'banana'];
// console.log(groceries[2]);
// groceries.push('grape');
// console.log(groceries);
// console.log(groceries.length);
// console.log(groceries.slice(1, 1));

// const sumArrow = (a,b) => a+b
// console.log(sumArrow(3,3))
// const sumArrow = (a,b) => {
//   return a + b
// }
// console.log(sumArrow(10,20))
// Javascript Interview Questions ( Promises ) - Polyfills, Callbacks, Async/await, Output Based, etc

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) resolve('subscribed to roadside coder');
//     else reject(new Error('why arent you subscribed to roadside codere'));
//   }, 1000);
// });

// function ExampleSS(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to ${username}`);
//   }, 100);
// }

// function shareVideo(video, cb) {
//   setTimeout(() => {
//     cb(`share the ${video} video`);
//   }, 100);
// }

// function likeVideo(like, cb) {
//   setTimeout(() => {
//     cb(`like the ${like} like`);
//   });
// }

// const message = ExampleSS('Nitesh Khatri', function (message) {
//   console.log(message);
//   shareVideo('js interview questions', (action1) => {
//     console.log(action1);
//   });
//   likeVideo('js interview questions', (action2) => {
//     console.log(action2);
//   });
// });
// console.log(message);

// console.log('start')
// setTimeout(() => {
//   console.log('subscribe to roadside coder')
// },1000)
// console.log('finish')

// JS POLYFILL FOR PROMISE.ANY METHOD
// const promise1 = new Promise((resolve, reject) => {
//   resolve('TID Success');
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('TID failed');
//   }, 1000);
// });
// const promise3 = 10;
// // Promise.any
// Promise.any([promise1, promise2]).then((result) =>
//   console.log(result).catch((e) => console.error(e))
// );
// Promise.myAny = (arrayOfPromises) => {
//   return new Promise((resolve, reject) => {
//     let counter = 0
//     for (let i = 0; i < arrayOfPromises.length; i++) {
//       arrayOfPromises[i]
//         .then((data) => {})
//         .catch((e) => {
//           resolve(data);
//         })
//         .catch((e) => {});
//     }
//   });
// };
// Promise.myAny([promise1, promise2]);

// JS VARIABLES & OPERATORS
// document.getElementById('text_arithmetic').innerHTML = (7+5) * 12
// var a = 10;
// a = 10;
// document.getElementById('blockvo').innerHTML = a + '<br>';

// JS BOOLEAN LITERALS
// var x = 5;
// var y = 7;
// var z = 10;
// document.getElementById('booleanblock').innerHTML =
//   (x == y) + '<br>' + (x == z);

// JS TYPES OF LITERALS
// var name1 = 'value1';
// var name2 = 'value2';
// console.log(name1 + ' ' + name2);

// JS syntax and case sensitivity
// var a = 7;
// var b = 5;
// var c = a + b;
// console.log(c)

// JS CALCULATION MATHS
// document.getElementById('textmath').innerText = 12 + 3;

// JS CONSOLE LOG MATH CALCULATION
// console.log(12 + 3);

// JS DOM
// document.getElementById('example').innerHTML = 'Hi there!';

// JS WINDOW ALERT
// window.alert('hi nitesh')

// JS OBJECT METHODS
// const job = {
//   position:'cashier',
//   type:'hourly',
//   isAvailable:true,
//   showDetails(){
//     const accepting = this.isAvailable ? 'is accepting' : 'is not currently accepting'
//     console.log(`this ${this.position} position is ${this.type} and ${accpeting} `)
//   }
// }
// const barista = Object.create(job)

// const employees = {
//   boss: 'nitesh',
//   secretary: 'pam',
//   sales: 'nitesh',
//   accountant: 'oscar',
// };
// const details = {
//   price: 1500,
// };
// const user = {
//   username: 'AzureDiamond',
//   password: 'hunter2',
// };
// const newUser = Object.freeze(user);
// console.log(newUser);
// const keys = Object.keys(employees);
// const values = Object.values(employees);
// const entries = Object.entries(employees);
// const character = Object.assign(employees, details);
// console.log(keys);
// console.log(values);
// console.log(entries);
// console.log(details);

// JS How to merge two Object
// const person = {
//   fname: 'nitesh',
//   lname: 'khatri',
//   age: 32,
// };
// const job = {
//   title: 'frontend developer',
//   location: 'mumbai',
// };

// const employeeNew = Object.assign(person,job)
// const employee = { ...person, ...job };
// console.log(employee);
// console.log(employeeNew);

// You can swap 2 variables without adding a new temporary variable. Use array destructuring to do it in a single line and without having to declare a new variable. However, the third element is actually being created. It's an array that is used for destructuring.
// let one = 1
// let two =  2
// let temp = one
// one = two
// two = temp
// console.log(temp)

//
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const seas1 = seas.push('button');
// const seas2 = seas.unshift('button1');
// console.log(seas1);
// console.log(seas2);

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains)
// console.log(mountains);
// console.log(mountains[0]);
// console.log(mountains[1]);
// console.log(mountains[2]);

//
// let colors = ['red', 'green', 'blue'];
// console.log(colors);

//
// let athletes = new Array(3);
// console.log(athletes);
// let scores = new Array(1, 2, 3);
// console.log(scores);
// let signs = new Array('Red');
// console.log(signs);

// JS IN ARRAYS
// let scores = new Array(9, 10, 8, 79);
// console.log(scores);

// JS in objects
// let age = 25;
// let newAge = age;
// newAge = newAge + 1;
// console.log(age, newAge);

// let person = {
//   name: 'John',
//   age: 25,
// };
// person.ssn = '123-45-6789';
// person.name = 'nitesh';
// person.age = 32;
// console.log(person.ssn);
// console.log(person.name);
// console.log(person.age);

// let employee = {
//   firstName: 'Peter',
//   lastName: 'Doe',
//   employeeId: 1,
// };
// console.log('ssn' in employee);
// console.log('employeeId' in employee);
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
// };
// console.log(person);
// console.log(person?.firstName);
// console.log(person?.lastName);
// console.log(person['firstName']);
// console.log(person['lastName']);
// person.firstName = 'nitesh';
// person.age = 32;
// console.log(person);
// let address = {
//   'building no': 3960,
//   street: 'North 1st street',
//   state: 'CA',
//   country: 'USA',
// };

// Easy way to access index in for...of Save this for reference!
// const grades = ['a', 'b', 'c', 'd', 'e', 'f'];
// for (const [index, grade] of grades.entries()) {
//   console.log(`${index} : ${grade}`);
// }
//
// function getEmpl(one,two,three){
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }
// const name = 'nitesh'
// const age = 32
// const dob = '17/06/1989'
// console.log(getEmpl(`${name} ${age} ${dob}`))

// objects methods in js
// const data = {
//   name: 'nitesh',
//   id: 1000,
//   pw: 'nitesh89',
// };
// const complain = {
//   complainId: 2209056,
// };
// const allData = Object.assign(data, complain);
// Object.freeze(data);
// console.log(data);
// const values = Object.values(data);
// // const allData = Object.entries(data)
// console.log(values);
// console.log(allData);

// const user = {
//   email: 'nitesh.khatri88@gmail.com',
//   updateEmail: (email) => {
//     this.email = email;
//   },
// };
// user.updateEmail('urvashikhatri58@gmail.com');
// console.log(user.email);

// JS >> Multilevel array to flattened array
// const arrData = [1,2,3,[4,5[6,7[8,9]]]]
// let arrLevels = arrData.length
// console.log(arrLevels)
// let theResult = arrData.flat(arrLevels)
// console.log(theResult)

// JS > Javascript has Array.of() method which is used to create a new array. The new array will be created regardless of any number or type of arguments.
// const arr = Array.of(1,'hello',true,null)
// console.log(arr)
// const arr2 = Array.of(14,7,9)
// console.log(arr2)
// JS >
// function getVersion(...args){
//   console.log(typeof args)
// }
// getVersion(1)

// JS > To remove duplicates in an array we can have many ways but there’s one which is using filter with indexOf.
// console.log([1,2,3,4,4,4,4,44,1,1,2,2,2,2].filter((el,i,arr) => i === arr.indexOf(el)))
// const example = [1,2,3,4,4,4,4,44,1,1,2,2,2,2]
// console.log([...new Set(example)])

// JS > CLOSURES LEXICAL SCOPE INTERVIEW QUESTION
// function makeAdder(x) {
//   var sum = x || 0;
//   return function (y) {
//     return sum + y;
//   };
// }
// var adder = makeAdder(10);
// console.log(adder);
// function outer() {
//   var x = 1;
//   function inner() {
//     if (true) {
//       console.log(`printing x ${x}`);
//     }
//   }
//   function innerMost() {
//     var y = 2;
//     if (true) {
//       console.log(`printing x in innermost ${x}`);
//       console.log(`printing y in innermost ${y}`);
//     }
//   }

//   innerMost();
//   inner();
// }
// outer();

// function outside() {
//   console.log('i am outside');
//   console.log('printing x in outside ${x}');
// }
// outside();

// JS > understanding the new operator - part 1, 2

// function Person(name, profession) {
//   this.name = name;
//   this.profession = profession;
//   thisReference = this;
//   return 2;
// }
// var nitesh = new Person('nitesh', 'UI dev');
// var sameet = new Person('sameet', 'Field service engineering');
// var sonal = new Person('sonal', 'UX designer');
// var vishal = new Person('vishal', 'oracle developer');
// console.log(nitesh, sameet, sonal, vishal);
// console.log(nitesh === thisReference);

// var nitesh = {
//   name: 'nitesh',
//   profession: 'front-end developer',
// };
// var sameet = {
//   name: 'sameeet',
//   profession: 'field service engineer',
// };
// var arvind = {
//   name: 'arvind',
//   profession: 'ladies tailor',
// };

// function person(name, profession) {
//   this.name = name;
//   this.profession = profession;
//   return [1, 2, 3];
//   thisReference = this;
// }
// var urvashi = new person('urvashi');
// console.log(urvashi);
// console.log(Array.isArray('nitesh', 'FE DEv'));
// console.log(thisReference === urvsahi);

// JS > time functions cheat sheet
// const today = new Date()
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getMonth())
// console.log(today.getFullYear())
// console.log(today.getYear())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())
// console.log(today.getMilliseconds())
// console.log(today.getTime())
// console.log(today.getTimezoneOffset())

// JS > ROADSIDE CODER >> Javascript Interview Questions ( Functions ) - Hoisting, Scope, Callback, Arrow Functions, (Closure) - Lexical Scope, Output based Questions, Polyfills

// this.a = 5
// const  getParam = () => {
//   console.log(this.a)
// }
// getParam()

// console.log({a:1} == {b:2})
// console.log({a:1} === {b:2})

// const shape = {
//   radius:10,
//   diameter(){
//     return this.radius * 2
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter())
// console.log(shape.perimeter())

// const settings = {
//   username: 'nitesh',
//   level: 19,
//   health: 90,
// };
// const data = JSON.stringify(settings,['level','health'])
// console.log(JSON.parse(data))

// const user = { name: 'nitesh', age: 32 };
// const admin = {admin:true,...user}
// console.log(admin)

// const user = {
//   name: 'nitesh',
//   age: 33,
// };
// console.log(user.name);
// console.log(user.age);
// console.log(JSON.stringify(user));
// const StringExample = JSON.stringify(user);
// localStorage.setItem('example', StringExample);
// console.log(JSON.parse(localStorage.getItem('example')));

// const a  = {}
// const b = {key:'b'}
// const c = {key:'c'}
// a[b] = 123
// a[c] = 456
// console.log(a)

// function evaluate(operation){
//   return function (a){
//     return function (b){
//       if(operation === 'sum') return a +b
//       else if(operation === 'minus') return a - b
//       else if(operation === 'divide') return a / b
//       else if(operation === 'multiple') return a * b
//       else return 'invalid operation'
//     }
//   }

// }
// console.log(evaluate('multipless')(20)(10))

// function evaluate(operation) {
//   return function (a) {
//     return function (b) {
//       if (operation === 'sum') return a + b;
//       else if (operation === 'multiply') return a * b;
//       else if (operation === 'divide') return a / b;
//       else if (operation === 'Subtraction') return a - b;
//       else return 'invalid operation';
//     };
//   };
// }
// console.log(evaluate('ss')(4)(2));

// function sum(a){
//   return function(b){
//     return function(c){
//       return a + b + c
//     }
//   }
// }
// console.log(sum(10)(20)(30))

// function sum(a,b,c){
//   return a + b + c
// }
// console.log(sum(12,12,12))

// function f(a){
//   return function(b){
//     console.log(a,b)
//   }
// }
// console.log(f(1)(10))

// var username = 'nitesh khatri';
// function local() {
//   console.log(username);
// }
// local();

// function likeThisVideo(){
//   var example = 'this is an example'
//   console.log('subscribe',example)
// }
// likeThisVideo()

// function makeFunc(){
//   var name = 'niteshkhatri'
//   function displayName(){
//     console.log(name)
//   }
//   return displayName
// }
// var myFunc = makeFunc()
// myFunc()

// function square(num){ // params
//   return num * num
// }
// console.log(square(5)) // arguments

// function multiply(num1,num2){
//   console.log(num1 * num2)
// }
// multiply(10,20)

// function multiply(a,x,y,...numbers) => {
//   console.log(x,y)
// }
// multiply(5,6,7,8,9)

// const add = function(firstnum,secondnum){
//   return firstnum + secondnum
// }
// console.log(add(10,20))

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// functionName();
// var x = 21
// var fun = function(){
//   console.log(x)
//   var x = 20
// }
// fun()
// function functionName(){
//   console.log(x)
// }
// function functionName(){
//   var x = 5
//   console.log('nitesh khatri')
// }

// JS > FETCH API TO GET DATA
// const url = 'https://api.github.com/users/khatrinitesh';
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async function fetchData(url) {
//   let response = await fetch(url);
//   let finaldata = await esponse.json();
//   console.log(finaldata);
// }
// fetchData(url);

// JS INTERVIEW QUESTIONS (VAR, LET AND CONST) HOSITING, SCOPING AND SHADOWING  AND MORE

// function test() {
//   let a = 'hello';
//   let b = 'bye';
//   if (true) {
//     let a = 'hi';
//     var b = 'goodbye';
//     console.log(a);
//     console.log(b);
//   }
// }
// console.log(test());
// let a = 10;
// {
//   const a = 5;
// }
// console.log(a);

// JS > REVERSE METHOD
// const sampleArray = ['smile','tick','cross']
// console.log(sampleArray)
// const reversed = sampleArray.reverse()
// console.log(reversed)
// console.log(sampleArray)

// JS > guess the output
// let number = 0
// console.log(number++)
// console.log(++number)
// console.log(number)

// JS > object methods
// const frozen = Object.freeze({ username: 'nitesh' });
// const sealed = Object.freeze({ username: 'sameet' });
// delete frozen.username;
// delete sealed.username;
// console.log(frozen);
// console.log(sealed);

// frozen.username = 'mayur'
// sealed.username = 'ronak'
// let Emplpoyee = {
//   name: 'nitesh',
//   age: 33,
//   role: 'front-end developer',
// };
// let EmpArray = [
//   ['name', 'nitesh'],
//   ['age', 32],
//   ['role', 'front-end developer'],
// ];
// console.log(Object.keys(Emplpoyee))
// console.log(Object.values(Emplpoyee))
// console.log(Object.entries(Emplpoyee));
// console.log(Object.fromEntries(EmpArray));
// let student = {
//   name: 'nitesh',
//   age: 33,
//   display() {
//     console.log('name', this.name);
//   },
// };
// let std1 = Object.create(student);
// std1.name = 'sameet';
// std1.display();
// console.log(std1);

// JS > what is the output
// let personexample = {name:'nitesh'}
// const members = [personexample]
// personexample = null
// console.log(members)

// JS > CLEVER PROGRAMMER CHANNEL ON YOUTUBE

// const sum = async (a,b) => a+b
// console.log(sum(11,11).then(val => console.log(val)))

// const NewDog = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/posts'
//   const response = await fetch(url)
//   const data = await response.json()
//   console.log(data)
// }
// NewDog()

// const waitForSoup = () => console.log('soup');
// setTimeout(waitForSoup,2000) // 2000 ms is 2s

// console.log('you start the convo with your girl');
// console.log('you start the convo with your girl');
// setTimeout(waitForSoup, 1000); // 1000 ms in 1s
// console.log('still speaking');

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = [true, false][Math.floor(Math.random() * 2)];
//     true ? resolve('soup is ready') : reject('no soup today');
//   }, 200);
// });
// console.log(
//   promise1
//     .then((sucess) => console.log(sucess))
//     .catch((error) => console.log(error))
// );

// if (isReady == true) {
//   ('run this');
// } else {
//   ('do this');
// }

// const getSuperHero = (id, title) => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// getSuperHero();

// const randomHeroes = () => {
//   const numberOfHeroes = 731;
//   return Math.floor(Math.random() * numberOfHeroes) + 1;
// };
// console.log(randomHeroes)
// console.log('run 1st ');
// const dogImageDiv = document.getElementById('dogImage');
// const btnDog = document.getElementById('btnDog');
// const getNewDog = () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json.message);
//       dogImageDiv.innerHTML = `<img src="${json.message}" height=300 width=300/>`;
//     });
// };
// btnDog.onclick = () => getNewDog();
// console.log('run 3rd');
// const weatherScorer = (computer, player) => {
//   let score;
//   if (weather == 'rainy' && weather2 == 'sunny') {
//     score = 1;
//   } else if (weather == 'rainy') {
//     score = 2;
//   } else if (weather == 'suny') {
//     score = -1;
//   }

//   return score;
// };
// console.log(weatherScorer('rainy', 'overcast'));

// let fruits = ['banana', 'apple', 'orange', 'pear'];
// const randomFruit = (fruits) => {
//   const randomNumber = Math.floor(Math.random() * fruits.length);
//   return fruits[randomNumber];
// };
// console.log(fruits[0]);
// console.log(randomFruit(fruits));

// JS > ARRAY DESTRUCTURING Check out these slides where I explain what Array Destructuring is and how it allows you to easily extract values to variables in arrays
// const arraynew = [1, 2, 3];
// const fst = arraynew[0]
// const sec = arraynew[1]
// console.log(fst,sec)
// const [fst,sec] = arraynew
// console.log(fst,sec)
// const [fst,sec,thd,fth] = arraynew
// console.log(fst,sec,thd,fth)
// const [fst,,thd,fth] = arraynew
// console.log(fst,thd,fth)
// JS > 𝐆𝐮𝐞𝐬𝐬 𝐭𝐡𝐞 𝐎𝐮𝐭𝐩𝐮𝐭 ??? Which Output Gives Error ???
// var usernew = {
//   name: 'nitesh',
//   status: {
//     comment: true,
//   },
// };
// console.log(usernew.status.name);
// console.log(usernew?.status?.name);

// JS > that is a tricky one
// const arrnew = [{}, 'a', null, undefined];
// console.log(arrnew.forEach(el => console.log(typeof el === 'object')))

// JS > You can filter out numbers from an array by passing Number as an argument to the filter method. It will return an array containing all the numbers in your parent array. One thing to notice is that if your array contains numbers like strings, i.e '1', '2' etc. it will also return those. To overcome that pass Number.isInteger as an argument to the filter method and will only return numbers from the array.
// const strnew = ['1', '2', '3', 'apple'];

// const num1 = strnew.filter(Number);
// console.log(num1);
// const num2 = strnew.filter(Number.isInteger)
// console.log(num2)

// JS > Guess the output
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'nitesh';
//   let age = 33;
// }
// sayHi();

// JS > quick way to mask numbers
// const CC = '9920767524';
// const lastFourDigits = CC.slice(-4);
// const firstFourDigits = CC.slice(-4);
// const maskNumber1 = lastFourDigits.padStart(CC.length, '*');
// const maskNumber2 = lastFourDigits.padEnd(CC.length, '*');
// console.log(lastFourDigits);
// console.log(maskNumber1);
// console.log(maskNumber2);

// JS > CallBack Function
// function doHomeWork(subject,callback){
//   alert(`starting my ${subject} homework`)
//   callback()
// }
// function alertFinished(){
//   alert(`finished by homework`)
// }
// doHomeWork('history',alertFinished)
// function doHomeWork(subject,callback){
//   alert(`starting my ${subject} homework.`)
// }
// doHomeWork('match',function(){
//   alert(`finished my homework`)
// })
// function doHomeWork(subject){
//   alert(`starting my ${subject} homework`)
// }
// doHomeWork('english')
// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }
// first();
// function second() {
//   console.log(2);
// }
// first();
// second();

// JS > OBJECT DESTRUCTING CHECKOUT THESE SLIDES WHERE I EXPLAIN WHAT OBJECT DESTRUCTING IS AND HOW IT ALLOWS YOU TO EASILY EXTRACT PROPERTIES IN OBJECTS AND ASSIGN THEM TO VARAIBLES
// const object = {
//   name: 'nitesh',
//   ig: 'deeecode',
//   language: 'javascript',
// };
// const object = {
//   name: 'nitesh',
//   ig: 'deeecode',
//   language: {
//     first:'js',
//     second:'css'
//   }
// };
// const {
//   name,ig:instagram = 'myname',age=50
//    = object
// }
// console.log(name,instagram,age)
// const {name,ig:instagram,age,tw:twitter}  = object
// console.log(name,instagram,age,twitter)
// const {name,ig:instagram} = object
// console.log(name,instagram)
// const name = object.name
// const instagram = object.lg
// console.log(name)
// console.log(instagram)

// JS > automatically update footer copyRight with JS
// const CurrentYear = document.querySelector('#current_year');
// CurrentYear.innerHTML = new Date().getFullYear();

// JS > convert a number to string
// let val = 50
// console.log(String(val))
// console.log(val.toString())
// console.log(' ' + val)

// JS > guess output 3
// console.log(+true)
// console.log(!'nitesh')

// JS > guess the output reply with correct answer and explanation
// let num = 1;
// const list = ['A', 'B', ',C', 'D'];
// console.log(list[(num += 1)])

// const Para = document.getElementById('paragraph');
// Para.innerHTML = `<p class="text_desc">this is paragraph.</p>`;
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Import stylesheets
import './style.css';

//**** 28th September 2022 - Wednesday ****//
// spread operator
// const arr = [1,2,3,4]
// const unpack = [...arr]
// console.log(unpack)
// let arr = [10,20,30,40,50]
// console.log(...arr)
// console.log(arr)
// let myName = 'nitesh'
// console.log(...myName)
// let arr = [10,20,30,40,50]
// console.log(8,9,...arr)
// let myName = 'nitesh'
// console.log(...myName,'h','i','t','e')
// let arr = [10,20,30,40,50]
// let copy = arr;
// console.log(copy)
// console.log(...copy)
// let arr1 = [10, 20, 30];
// let arr2 = [40,50,60]
// console.log(...arr1,...arr2)

// let args = [1,2,3,4,5,6]
// function sum(a,b,c,d,e,f){
//     return a+b+c+d+e+f
// }
// console.log(sum(...args))
