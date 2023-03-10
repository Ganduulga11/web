//* Requirement dependencies
const express = require("express");
const cors = require("cors");
const errorHandling = require("./helper/errorHandling");
const userRouter = require("./api/router/userRouter");
require("dotenv").config();

const server = express();

//* Services
server.use(express.json());
server.use(cors());

server.use(userRouter);

server.use(errorHandling);

//* Server listen on port
const port = process.env.PORT;
server.listen(port, () => {
    console.log("Server listening on " + port);
});
