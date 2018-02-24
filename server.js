const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// import config file for connection
const config = require('./config/database');
// import users file for routing
const users = require('./routes/users');

// connect the databae
mongoose.connect(config.database);

// check if the database connection is established or not
mongoose.connection.on('connected', () => {
    console.log('connected to', config.database);
});

mongoose.connection.on('error', (err) => {
    console.log(err);
})

const app = express();

const port = 3000 || process.env.PORT;

// enable cors so we can use for the front-end as well
app.use(cors());

// set the client path (to use in front-end page)
app.use(express.static(path.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.json());

// routes to user
app.use('/users', users);

// setup routes to index page
app.get('/', (req, res) => {
    res.send('invalid endpoint');
})

// listen to the current port
app.listen(port, (req, res) => {
    console.log('Server started on port', port);
})