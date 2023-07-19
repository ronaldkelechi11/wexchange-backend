const express = require('express')
const client = require('./providers/postgress');
const cors = require('cors');

const app = express()
const port = 3000

//Middleware
app.use(express.urlencoded())
app.use(express.json())

//Providing Routes
const SignUp = require('./routes/signup');

//Assigning Variables
app.use('/signup', SignUp)


app.listen(port, () => {
    console.log(`Backend Service listening on port ${port}`),
        client.connect().then((result) => {
            console.log('Connected to Postgress DB');
        }).catch((err) => {
            console.log("Error connecting to Postgress DB");
        });
});