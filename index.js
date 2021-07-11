require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = require(`./api/v${process.env.API_VERSION}`);
app.use(express.static(path.join(__dirname, process.env.PUBLIC_PATH)))
app.use(`/api/v${process.env.API_VERSION}`, apiRouter);
app.listen(port, ()=> console.log("app listening on 3000"));