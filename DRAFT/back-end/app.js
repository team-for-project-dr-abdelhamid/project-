
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/index');

const app = express();
const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://mohamed:12345@cluster0.s2lovnp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
   .catch(err => console.log(err));
const port = 3000
app.use(morgan('dev'));
app.use(express.static(__dirname + '/frontend'));
app.use(express.json());

app.use('/', route)

app.listen(port, (req, res) => {
console.log('Server is running');
})
