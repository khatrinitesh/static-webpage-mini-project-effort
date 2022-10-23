const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    timer = setTimeout(() => fn(...args), delay);
  };
};
const myFunc = (text) => console.log(text);
const myDebounceFunc = debounce(myFunc, 1000);

for (let i = 0; i < 10; i++) myFunc('not debounded');
for (let i = 0; i < 10; i++) myDebounceFunc('Debounced');
