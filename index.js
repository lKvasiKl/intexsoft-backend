import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express'

const PORT = process.env.PORT || 4000;

const app = express();

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
};

start();
