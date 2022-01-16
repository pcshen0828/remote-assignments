// Assignment 2: Object
// In JavaScript, there are many different sets of syntax for creating objects. In the code below,
// function parameters are encapsulated into an object, try using at least two ways to create a
// proper object as a parameter of the calculate function.

// let args = {
//     op: '+',
//     n1: 1,
//     n2: 2
// };
function arg(cal, n1, n2){
    this.op = cal;
    this.n1 = n1;
    this.n2 = n2;
}
let args = new arg('+', 2, 3)
function calculate(args){
    let result;
    if(args.op === "+"){
        result = args.n1 + args.n2;
    }else if(args.op === "-"){
        result = args.n1 - args.n2;
    }else{
        result = "Not supported";
    }
    return result;
}
console.log(calculate(args));

// Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/