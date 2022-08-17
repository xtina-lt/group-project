// read enviroment variables
require('dotenv').config()
// get port from .env
const PORT = process.env.PORT;
// express: js framework - interface to Node Server
const express = require('express');
// cors cross-origin requests
const cors = require('cors')
// middleware for cookies
const cookieParser = require('cookie-parser')


const app = express();
app.use( express.json() )
app.use( express.urlencoded({extended:true}) )
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())


// connect to mongooese and routes
require('./config/mongoose')
require('./routes/users.routes')(app)
require('./routes/buckets.routes')(app)


// app listen to port
app.listen(PORT, () => console.log(`Party on port: ${PORT}`) );


// LOGIN REG INSTALL
// npm i bcrypt dotenv cookie-parser jsonwebtoken