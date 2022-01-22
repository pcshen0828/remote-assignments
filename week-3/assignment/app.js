const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Assignment 3: Connect to Backend API by AJAX
app.use(express.static('../assignment'));

app.set('view engine', 'pug');

// Assignment 1: Your First Web Server
app.get('/', (req, res) => { // the location parameter, the callBackFunction parameter
    res.send('<h1>Hello, I am Michelle!</h1>'); // send a string to the client
}); 

// Assignment 2: Build Backend API for Front-End 
let sum = 0;
function add(num){
    for(let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
};
app.get('/getData', (req, res) => { 
    sum = 0;
    if(!req.query.number){
        res.send('<h2>Lack of Parameter</h2>')
    }else if(isNaN(req.query.number) || parseInt(req.query.number) === 0){
        res.send('<h2>Wrong Parameter</h2>')
    }else if(parseInt(req.query.number) > 0){
        res.send(`<h2>${add(req.query.number)}</h2>`); 
    }
});


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
}); 
