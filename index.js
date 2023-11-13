const express = require('express')
const cors = require('cors');

const app = express()
const mongoDBurl = "mongodb://127.0.0.1:27017/selln"
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