'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
  handleRoot, getHandleClient, getHandleClients, postHandleClient, deleteHandleClient, errorPage
} = require('./handlers/clientHandlers')

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))


  // endpoints

  // Client Handlers
  .get('/', handleRoot) // Homepage 
  .get('/clients', getHandleClient) // Shows id of all clients
  .get('/clients/:id', getHandleClients) // allows you to put id into the url to search for specific client
  .post('/clients/:email', postHandleClient) // shows an id when you put the email
  .delete('/clients/:id', deleteHandleClient) // deletes last client from the list
  .get('*', errorPage) // Created an error page if user goes off track 

  // Hangman Handlers

  .listen(8000, () => console.log(`Listening on port 8000`));
