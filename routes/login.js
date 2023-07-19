const express = require('express')
const client = require('../providers/postgress')
const router = express.Router()


router.post("/", (req, res) => {
    var telephone = req.body.telephone
    var password = req.body.password

    var query = `SELECT * FROM profile WHERE telephone = '${telephone}' AND password = '${password}'`
    client.query(query, (err, result, fields) => {
        if (err) {
            console.log(err);
        }
        else {
            if (result.rows[0] === undefined) {
                // No user exist
                res.status(400).send(JSON.stringify(result.rows))
            }
            else {
                // User exist
                res.status(200).send(result.rows)
            }
        }
    })


});

module.exports = router