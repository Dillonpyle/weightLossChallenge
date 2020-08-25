const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require('path');

require('./db/db');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'Public/build')));

app.use(session({
    secret: 'silence, my brother',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const login = require('./controllers/login');
const user = require('./controllers/users');

app.use('/users', user);
app.use('/login', login);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/Public/build/index.html'));
});


app.listen(process.env.PORT, () => {
    console.log('its over 9000!');
});