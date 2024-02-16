const sequelize = require("../utils/database");
const { Sequelize } = require("sequelize");

const User = sequelize.define("Users", {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
        type: Sequelize.INTEGER,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gender: {
        type: Sequelize.STRING,
        defaultValue: "Male",
        allowNull: false,
    },
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,  //pending, active, de-active

    },
    date: {
        type: Sequelize.DATE,


    },

});
module.exports = User;
