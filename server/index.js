import express from 'express';
import cors from 'cors';
import sequelize from './databaseProject.js'
import {colorsRouter} from "./controllers/index.js";

const app = express();


app.use(express.json())
app.use(cors())
app.use('/colors', colorsRouter)



const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        await app.listen(5001,()=> console.log('Server started on port 5001'));

    } catch (error) {
        console.log(error);
    }
}



start();