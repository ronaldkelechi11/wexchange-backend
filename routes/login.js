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
            console.log(result.rows[0]);
            if (result.rows[0] === undefined) {
                res.status(400).send(JSON.stringify(result.rows))
            }
            else {
                res.status(200).send(result.rows)
            }
        }
    })


});

module.exports = router