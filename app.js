const express = require('express');
const path = require('path')
const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home2.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});