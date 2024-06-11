const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();

//setup static folder 
//app.use(express.static(path.join(__dirname, 'public')));

let posts = [
   {id: 1, title: 'Post One'},
   {id: 2, title: 'Post Two'},
   {id: 3, title: 'Post Three'}
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
 });

 app.get('/about', (req, res) => {
    res.send("About Page")
 });

app.listen(5000, () => console.log(`Server is running on port 5000`));