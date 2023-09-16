const express = require('express')
const cors = require('cors');

const app = express()
const mongoDBurl = ""
const port = 3000 || process.env.PORT

//Middleware
app.use(express.urlencoded())
app.use(express.json())
app.use(cors({
    origin: "*"
}))

//Providing Routes
const SignUp = require('./routes/signup');
const Login = require("./routes/login")

//Assigning Variables
app.use('/signup', SignUp)
app.use('/login', Login)


app.listen(port, () => {
    console.log(`Backend Service listening on port ${port}`)
});