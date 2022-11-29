import { DataTypes } from 'sequelize';
import sequelize from "./databaseProject.js"

const Color = sequelize.define('Color', {
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});


export {
    Color
}