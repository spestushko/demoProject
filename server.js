// Gather dependancies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

// Get api routes
const api = require('./server/routes/api');

// Initialize express application
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set the API routes
app.use('/api', api);

// Catch all other routes and return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
* Get port from the environment and store it in the express
*/
const port = process.env.PORT || '3000';
app.set('port', port);

/**
* Create HTTP server
*/
const server = http.createServer(app);

/**
* Listen on a provided port for all network interfaces
*/
server.listen(port, () => console.log(`API running on localhost:${port}`))
