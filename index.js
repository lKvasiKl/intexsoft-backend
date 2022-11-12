require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/index');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use("/api", router);

const start = () => {
    app.listen(PORT, () => 
        console.log(`Server started on port ${PORT}`)
    );
};

start();
