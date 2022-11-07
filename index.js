require('dotenv').config();
const express = require('express');
const sequelize = require('./app/util/database');
require('./app/models/index');
const bodyParser = require('body-parser');
const router = require('./app/routes/index');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use("/api", router);

const start = async () => {
    try {
        sequelize.authenticate().catch(err => console.log(err));
        await sequelize.sync({force:true});
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
