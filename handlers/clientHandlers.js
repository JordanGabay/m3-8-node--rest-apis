const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');


// write your handlers here...

const handleRoot = (req, res) => {
    res.status(200).send('Hello! Welcome to my first Insomnia example')
}

const getHandleClient = (req, res) => {
    res.status(200).json(clients)
}

const getHandleClients = (req, res) => {
    const {id} = req.params
    client = clients.filter(client => id === client.id)
    res.status(200).json(client)
}

const postHandleClient = (req, res) => {
    const {email} = req.body
    let emailExists = clients.some(client => email === client.email)
    if(!emailExists) {
        const id = uuidv4()
        res.status(201).json({id, ...req.body})
    } else {
        res.status(304).send('An account with this email address already exists!')
    }
}

const deleteHandleClient = (req, res) => {
    const {id} = req.params
    const index = clients.indexOf(client => id === client.id)
    clients.splice(index, 1)
    res.status(200).json(clients)
}

const errorPage = (req, res) => {
    res.status(404).send("Hey... I don't think you're on the right page? Try again!")
}

module.exports = { handleRoot, getHandleClient, getHandleClients, postHandleClient, deleteHandleClient, errorPage };