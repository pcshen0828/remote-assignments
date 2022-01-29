const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

// console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 42},
    {name: 'Shaniqua', age: 30},
    {name: 'Marvin', age: 23},
    {name: 'Sean', age: 47}
  ];
  const newUsers = users
    .filter(user => user.age >= 30)
    .map(user => user.name);

// console.log(newUsers);
// Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

// const products = [
//     { name: 'hard drive', price: 59.99 },
//     { name: 'lighbulbs', price: 2.59 },
//     { name: 'paper towels', price: 6.99 },
//     { name: 'flatscreen monitor', price: 159.99 },
//     { name: 'cable ties', price: 19.99 },
//     { name: 'ballpoint pens', price: 4.49 }
//   ];

//   const highestProduct = products
//     .filter(product => product.price <= 10)
//     .reduce((highest, product) => {
//         if(highest.price > product.price){
//             return highest;
//         }
//         return product;
//     });
// console.log(highestProduct);
// Result: { name: 'paper towels', price: 6.99 }

const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
  ];

const total = products
  .filter(product => product.price > 10)
  .reduce((sum, product) => sum + product.price, 0)
  .toFixed(2);
console.log(total);
// Result: 239.97