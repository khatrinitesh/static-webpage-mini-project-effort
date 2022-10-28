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
