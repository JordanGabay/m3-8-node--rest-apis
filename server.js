'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const {
  handleRoot, getHandleClient, getHandleClients, postHandleClient, deleteHandleClient, errorPage
} = require('./handlers/clientHandlers')

const {
  hangmanTester, hangmanTest, hangRandomWord, hangGuessLetter, handleGuessLetter2, 
} = require('./handlers/hangmanHandlers')

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
  

  // Hangman Handlers

  .get('/hangman/test', hangmanTester)
  .get('/hangman/words', hangRandomWord)
  .get('/hangman/words/:id', hangmanTest)
  .get('/hangman/guess/:id/:letter', handleGuessLetter2)
  .get('*', errorPage) // Created an error page if user goes off track 

  .listen(8000, () => console.log(`Listening on port 8000`));
