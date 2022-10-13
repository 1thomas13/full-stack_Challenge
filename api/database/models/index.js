const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../connection')

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    notNull: true
  },
  password: {
    type: DataTypes.STRING,
    notNull: true
  },
})

const Category = sequelize.define('Category', {
  category: {
    type: DataTypes.STRING,
    notNull: true
  },
  image: {
    type: Sequelize.STRING,
    notNull: true
  },
})

const Operation = sequelize.define('Operation', {
  type: {
    type: DataTypes.STRING,
    notNull: true
  },
  amount: {
    type: Sequelize.INTEGER,
    notNull: true
  },
  description: {
    type: Sequelize.STRING,
    notNull: false
  },
})

User.hasMany(Operation, {foreignKey: "userId"})
Category.hasOne(Operation, {foreignKey: "categoryId"})


;(async() => {
  await sequelize.sync({ force: true })
  console.log("All models were synchronized successfully.")
})()

module.exports = { User, Operation}
