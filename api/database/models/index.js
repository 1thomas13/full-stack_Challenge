const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

const Category = sequelize.define('Category', {
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

const Operation = sequelize.define('Operation', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
})

User.hasMany(Operation, {foreignKey: "userId"})
Operation.hasOne(Operation, {foreignKey: "userId"})


;(async() => {
  await sequelize.sync({ force: true })
  console.log("All models were synchronized successfully.")
})()

module.exports = { User, Operation}
