function getSum(){
	var obj = {}
	return function(x,y){
		if(!obj[`${x},${y}`]){
			console.log('calculating sum')
			const sum = x +y 
			obj[`${x},${y}`] = sum 
			console.log(sum)
		}
		else{
			console.log(obj[`${x},${y}`])
		}
	}
}
const memoizedSum = getSum();
memoizedSum(2,3)
memoizedSum(2,3)

// var sum = {
// 	'2,3':5,
// 	'4,5':9,
// 	'10,5':15,
// }
// console.log(sum['10,5'])

// function abc(){
// 	var count = 0 
// 	return function xyz(){
// 		count++
// 		console.log(count)
// 	}
// }
// var counter = abc()
// counter()
// counter()
// counter()


// function abc(){
// 	const name = 'nitesh'
// 	return function def(){
// 		console.log(name)
// 	}
// }

// var closure = abc()
// closure();