console.log('hello')
console.log('hello123')
// alert('hi')
// var b = 'sameet'
// console.log(b)

// var someNumber = 45;
// console.log(someNumber)

// var age = prompt('what is your age')
// document.getElementById('someText').innerHTML = age
// console.log(age)

// numbers 
// var num1 = 5.7;
// num1 = num1 + 10;
// console.log(num1);

var num1 = 10;
// num1++;


// increment 
console.log(num1++)

// decrement
console.log(num1--)

console.log(num1 / 6)

num1 += 10
console.log(num1);

// functions 
// 1. create a function
// 2. call the function
function fun(){
    console.log('this is a function')
}

// call
fun();

// let us create a function that take in a name and says hello followed by your name

// for example
// return ' nitesh khatri'

// function greeting(){
//     var name = prompt('what is your name')
//     var result = 'hello' +  ' ' + name
//     console.log(name)
//     console.log(result)
// }
// // console.log(greeting())

// greeting();

// how do arguments work in functions?
// how do we add 2 numbers together in a function?
// function sumNumbers(num1,num2){
//    var result = num1 + num2 
//    console.log(num1 + num2)
// }

// sumNumbers(10,10)

// var num=0;
// while (num < 100){
//     num += 1;
//     console.log(num);
// }

// for loop
// var num = 0;
// for (let num =0;num<100;num++){
//     console.log(num);
// }

// data types 
// var yourAge = 18; //number 
// let yourname = 'nitesh';
// let name = {
//     first:'nitesh',
//     last:'khatri'
// }
// console.log(yourAge,yourname)
// console.log(name)

// let truth = false;
// let groceries = ['HTML','CSS','JS']
// console.log(groceries)
// console.log(truth)
// let random; // undefined
// let nothing = null;

// strings common methods
// let fruit = 'banna';
// let morefruits = 'nitesh\nkhatri';
// console.log(morefruits)
// console.log(fruit.length)
// console.log(fruit.indexOf('q'))
// console.log(fruit.slice(2,6))
// console.log(fruit.replace('ban','123'))
// console.log(fruit.toUpperCase(fruit));
// console.log(fruit.toLowerCase(fruit));
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(',')); // split by a comma
// console.log(fruit.split('')) // split by a characters

// array 
// let fruits = ['banana','apple','orange']
// console.log(fruits)

// let fruits = new Array('banana','apple','orange','pineapples')
// console.log(fruits);
// alert(fruits[1])

// var dogs = ['abc','cde','efg']
// for (let i=0;i<dogs.length;i++){
//     console.log(dogs[i])
// }


// console.log('to string',fruits.toString())
// console.log(fruits.join(' * '))
// console.log(fruits,fruits.pop(),fruits)
// console.log(fruits.push('kiwi'),fruits)
// console.log(fruits.shift());
// console.log(fruits.unshift());

// let vegetables = ['potato','onion','bean','peas']
// console.log(vegetables)
// let allGroceries = fruits.concat(vegetables)
// console.log(allGroceries)
// console.log(allGroceries.slice(1,3))
// console.log(allGroceries.reverse());

// let someNumbers = [5,10,25,3,255,1,2,334,321,2]
// console.log(someNumbers.sort(function(a,b){
//     return a-b
// }));

// console.log(someNumbers.sort(function(a,b) {
//     return b-a
// }))


// let newEmptyArray = new Array();
// for(let num =0;num<=10;num++){
//     newEmptyArray.push(num)
// }
// console.log(newEmptyArray)

// objects
// let student = {
//     first:'nitesh',
//     last:'khatri',
//     age:33,
//     height:170,
//     studentInfo:function(){
//         return this.first + '\n'  + this.last + '\n' + this.age;
//     }
// }
// console.log(student.first);
// console.log(student.last);
// student.first = 'notrafesh '
// console.log(student.first) 
// student.age++;
// console.log(student.studentInfo())


// if else conditionals and switch statements
// && and 
// || or
// var result = prompt('what is your age')
// if((age >= 18) && (age <= 35)){
//         status = 'target demo'
//         console.log(status);
// } 
// else{
//     status = 'not my audience'
//     console.log(status)
// }

// switch statements
// different between weekday vs weekend
// switch(2){
//     case 0 : text = 'weekend';
//     break;
//     case 5 : text = 'weekend';
//     break;
//     case 6 : text = 'weekend';
//     break;
//     default:text = 'weekday';
// }
// console.log(text);

// learn json 
// let students = [
//     {
//         "name":'nitesh',
//         "age":33,
//         "height":160
//     },
//     {
//         "name":'sameet',
//         "age":40,
//         "height":180
//     }
// ]
// console.log(JSON.parse(students[0].age))