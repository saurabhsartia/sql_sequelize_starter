const Sequelize = require("sequelize");

const sequelizeConnect = new Sequelize(
    "saurabh",  //"db_name",
    "root",            // "db_usename",
    null,    ///"Password",
    {
        dialect: "mysql",
        host: "localhost",
        // logging:false
    }
);


module.exports = sequelizeConnect;