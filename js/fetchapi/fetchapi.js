// fetch('https://fakestoreapi.com/products',{
//             method:"POST",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch(error => console.log(error))
// .finally(() => hideLoader()); // call function to hide the loader

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => {
// 	console.log(res.ok)
// 	console.log(res.status)
// 	return res.json()
// })

// fetch('https://jsonplaceholder.typicode.com/users',{
// 	method:"POST",
// 	body:JSON.stringify({name:"nitesh"}),
// 	headers:{
// 		"Content-Type":"application/json"
// 	}
// })

// fetch('https://jsonplaceholder.typicode.com/users/1').then(res => {
// 	console.log(res.ok)
// 	console.log(res.status)
// })

// fetch('https://jsonplaceholder.typicode.com/users/-1')
// .then(res => {
// 	if(res.ok) 

// 		return res.json()
// 	return Promise.reject(res)
// })
// .then((data) => console.log(data))
// .catch(res => console.error(res.status))

// function jsonFetch(url,{body,headers,...options} = {}){
// 	return fetch(url,{
// 		headers:{'Content-Type':"application/json",...headers}
// 		body:JSON.stringify(body)
// 		...options
// 	})
// 	.then(res => {
// 		if(res.ok) return res.json()
// 			return Promise.reject(res)
// 	})
// 	.then(res => res.json())
// }