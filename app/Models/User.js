import conn from '../config/database.js';
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const User = conn.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},
{
    freezeTableName: true,
    timestamps: false
});

export default User;