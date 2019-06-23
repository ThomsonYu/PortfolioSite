'use strict';
const log = console.log;

// Node/Server architecture
const express = require('express');
const bodyParser = require('body-parser'); // middleware for parsing HTTP body from client
const port = process.env.PORT || 3000;
const path = require('path');

// Mongo DB
const { ObjectID } = require('mongodb');

// Express setup
const app = express();
// body-parser middleware setup.  Will parse the JSON and convert to object
app.use(bodyParser.json());
// parse incoming parameters to req.body
app.use(bodyParser.urlencoded({ extended:true }))

// Directory
app.use(express.static(`${__dirname}/../react-client/dist`));

// Route for index
app.route('/index')
    .get((req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
    });

app.listen(port, () => {
    log(`Listening on port ${port}...`)
});
