const pg = require('pg');

const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    port: '5432',
    database: "wexchange_database"
});

(function () {
    var query = `CREATE TABLE profile(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100), 
        profilePic VARCHAR(255), 
        ads TEXT,
        password VARCHAR(255), 
        telephone VARCHAR(20) UNIQUE,
        address VARCHAR(255), 
        about VARCHAR(255))`;

    client.query(query, (err, result, fields) => {
        if (err.code == "42P07") {
            console.log(">> Profile Table already exists");
        }
        else {
            console.log(">> Profile Table created");
        }
    });

})();

module.exports = client