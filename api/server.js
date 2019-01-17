const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const db = require('../dataAccess/db.js');
// const cohortsRoute = require('./routes/cohortsRoute.js');
// const studentsRoute = require('./routes/studentsRoute.js');
const server = express();

//middleware
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(morgan('short'));

//routes
// server.use('/api/cohorts', cohortsRoute);
// server.use('/api/students', studentsRoute);

server.get('/', (req, res) => {
    res.send(`<h1>API Running...</h1>`)
});

server.get('/api/dishes', (req,res,next) => {
    db.getDishes()
        .then(dishes=> {
            res.status(200).json(dishes)
        })
        .catch(err => next(err))
});

server.get('/api/recipes', (req,res,next) => {
    db.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => next(err))
})

//exports
module.exports = server;