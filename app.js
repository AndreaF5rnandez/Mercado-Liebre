const express = require('express');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

var puerto;
if(process.env.PORT) {
  puerto = process.env.PORT;
} else {
  puerto = 3000;
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server started on port: ${port}');})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
});

app.get('/home2', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home2.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});