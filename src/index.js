require('dotenv').config();
const express = require('express');
const {errors} = require('celebrate');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());
app.use("/api", router);
app.use(errors());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
