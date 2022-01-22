let sum = 0;
function add(num){
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(add(5)); // 15