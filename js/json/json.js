
// ============================ 4
const newJoke = {
  categories: ['dev'],
  value: "Chuck Norris's keyboard is made up entirely of Cmd keys because Chuck Norris is always in command."
};
fetch('https://api.chucknorris.io/jokes/submit', { // fake API endpoint
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newJoke), // turn the JS object literal into a JSON string
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.log(err);
  });


// ============================ 3
const profiles = [
  {
    name: 'Jane Doe',
    'favorite-game': 'Stardew Valley',
    subscriber: false
  },
  {
    name: 'John Doe',
    'favorite-game': 'Dragon Quest XI',
    subscriber: true
  }
];


// ============================ 2
fetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => console.log(data));

 fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then(data => console.log(data))


// ============================ 1
let userObj  = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userStr  = JSON.parse(userObj )
console.log(userStr )

