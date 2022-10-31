import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express'

import router from "./app/router/index.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use("/api", router);

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
