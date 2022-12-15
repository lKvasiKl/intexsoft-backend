require('dotenv').config();
const express = require('express');
const {errors} = require('celebrate');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const cors = require('cors');

const PORT = process.env.PORT || 4001;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);
app.use(errors());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
