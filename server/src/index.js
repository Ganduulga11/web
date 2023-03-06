//* Requirement dependencies
const express = require("express");
const cors = require("cors");
const database = require("./config/database");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const errorHandling = require("./helper/errorHandling");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(cors());

server.post("/login", (request, response, next) => {
    const { username, password } = request.body;

    database.query(
        `SELECT * FROM user WHERE user_namef = '${username}' LIMIT 1`,
        async (err, result) => {
            if (err) {
                next(err);

                return;
            }

            if (result.length != 0 && result != null) {
                _username = result[0].user_name;
                _password = result[0].user_password;

                const login = await bcrypt.compare(password, _password);

                if (username == _username && (await login) == true) {
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

server.post("/signup", async (request, response, next) => {
    const { username, password } = request.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    await database.query(
        `INSERT INTO user (account_id, user_name, user_password) VALUES ('${uuid()}', '${username}', '${hash}');`,
        (err) => {
            if (err) next(err);
        }
    );

    await response.json({ type: "success" });
});

server.use(errorHandling);

//* Server listen on port
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Server listening on " + port);
});
