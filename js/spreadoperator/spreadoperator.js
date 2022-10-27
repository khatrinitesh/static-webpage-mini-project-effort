let studentA = {
	name:"nitesh",
	address:{
		city:"mumbai"
	}
}

let studentB = {
	...studentA
}


studentB.name = 'sameet'
studentB.address.city = 'USA'

let studentC = JSON.parse(JSON.stringify(studentA))

// console.log(studentB)
console.log(studentC)


