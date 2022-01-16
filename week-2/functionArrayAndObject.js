// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the average price of all the products.
let totalPrice = 0;
function avg(data){
    // your code here
    for(let i = 0; i < data.products.length; i++){
        totalPrice += data.products[i]['price'];
    }
    return totalPrice / data.size;
}
let newObj = {
    size:3,
    products:[
        {
            name:"Product 1",
            price:100
        },
        {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
};
// console.log(newObj.size);
// console.log(newObj.products[0]['price']);
// show the average price of all products
console.log(avg(newObj));