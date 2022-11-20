import {DataTypes, Sequelize} from "sequelize";
import dotenv from "dotenv"
dotenv.config();


const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;


const sequelize = new Sequelize('databaseProject','root','',{
    host:'localhost',
    dialect: 'sqlite',
    storage: 'databaseProject.db'
});



export default sequelize;

