const age=  19
let isVote = false 
// if(age > 25){
//     isVote = true 
// }
// else{
//     isVote = false 
// }
isVote = age > 20 ? 'yes' : 'no'
console.log(isVote)

const greeting = (person) => {
    const name = person ? person.name : 'stranger';
    return `Hi ${name}`;
}
console.log(greeting({name:'nitesh'}));
console.log(greeting(null))


const person = {
    name:'nitesh',
    age:33,
    hobbies:'cricket',
    address:{
        street:'amir house',
        country:'india'
    }
}
console.log(person)
console.log(person.address.street)

function printMagicIndex(arr){
    console.log(arr?.[6])
}
printMagicIndex();


let user = null
user ??= 'stranger';    
console.log(user)

// function configDb(){
//     (options.name ??= 'admin'),
//     (options.password ??= 'admin'),
//     (options.port ??= 5001);
//     return options; 
// }
// console.log(configDb({port:8000}))

function B(){
    console.log('b was called')
    return 'B';
}
function A(){
    console.log('a was called')
    return 'A';
}
console.log(B() ?? A());