const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => {
    //res.send('Home page!')
    res.render('index')
});

app.get('/services', (req, res) => {
    res.render('services')
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => {    
    console.log(`Server is running on localhost:${port}`);
});

