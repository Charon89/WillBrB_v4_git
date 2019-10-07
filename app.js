const express = require('express');
const exphbs = require('express-handlebars');
const PORT = 3000;

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/Home', (req, res) => {
    res.render('Home');
});
app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/RoomListing', (req, res) => {
    res.render('RoomListing');
});

//app.get('/UserRegistration', (req, res) => {
//    res.render('UserRegistration');
//});

app.listen(PORT);