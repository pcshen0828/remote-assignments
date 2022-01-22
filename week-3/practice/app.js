const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

app.set('view engine', 'pug');

// create the root route
app.get('/', (req, res) => { // the location parameter, the callBackFunction parameter
    res.send('<h1>Hello, I am Michelle!</h1>'); // send a string to the client
});
// another route 
app.get('/getData', (req, res) => { 
    res.send('<h1>Lack of Parameter</h1>'); 
});

// render pug template
app.get('/pug', (req, res) => { 
    res.render('index'); 
});
app.post('/hello', (req, res) => { 
    res.render('hello', { name: req.body.username }); 
    // res.json(req.body);
});
app.get('/cards', (req, res) => { 
    // res.locals.prompt = "Who is buried in Grant's tomb?";
    res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is.", colors}); // res.render(view [, locals] [, callback])
    
});

// in terminal, press ctrl + c to stop the server
// then run node app.js again to renew the codes that the server serves
// to replace the steps above, install nodemon by "npm install -g nodemon" 
// and make sure that in package.json the key "main" directs to the correct file name "app.js"
app.listen(3001, () => {
    console.log('The application is running on localhost:3001!')
}); 