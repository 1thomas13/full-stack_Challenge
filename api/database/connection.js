const { Sequelize } = require('sequelize');

const path = process.env.DB_PATH

exports.sequelize = new Sequelize(path)