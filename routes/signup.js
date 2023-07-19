const express = require('express')
const client = require('../providers/postgress')
const router = express.Router()


router.post("/", (req, res) => {
    var name = req.body.name;
    var profilePic = req.body.profilePic;
    var password = req.body.password;
    var telephone = req.body.telephone;
    var address = req.body.address;
    var about = req.body.about;

    var signupQuery = `INSERT INTO profile(
        name, profilePic, ads, password, telephone, address, about) VALUES 
        ('${name}', '${profilePic}', '','${password}', '${telephone}', '${address}', '${about}' );`

    client.query(signupQuery, (err, result, fields) => {
        if (err) {
            //Duplicate Entry
            res.status(400).send()
        }
        else {
            res.status(200).send()
        }
    })


});

module.exports = router