//* Requirement dependencies
const express = require("express");
const cors = require("cors");
const database = require("./config/database");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(cors());

server.post("/login", (request, response) => {
    const { username, password } = request.body;
    database.query(
        `SELECT * FROM user WHERE name = '${username}' LIMIT 1`,
        (err, result) => {
            if (err) throw err;

            if (result.length != 0 && result != null) {
                _username = result[0].name;
                _password = result[0].password;

                if (username == _username && password == _password) {
                    response.json({ type: "success" });
                } else {
                    response.json({ type: "failed" });
                }
            } else {
                response.json({ type: "user not found" });
            }
        }
    );
});

server.post("/signup", async (request, response) => {
    const { username, password } = request.body;
    await database.query(
        `INSERT INTO user (name, password) VALUES ('${username}', '${password}');`,
        (err) => {
            if (err) throw err;
        }
    );

    await response.json({ type: "success" });
});

//* Server listen on port
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Server listening on " + port);
});
