const { Sequelize, DataTypes } = require('sequelize')
const { sequelize } = require('../connection')

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    notNull: true
  },
  password: {
    type: DataTypes.STRING,
    notNull: true
  },
  email: {
    type: DataTypes.STRING,
    notNull: true
  }
})

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  category: {
    type: DataTypes.STRING,
    notNull: true
  },
  image: {
    type: Sequelize.STRING,
    notNull: true
  }
})

const Operation = sequelize.define('Operation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
  }
})

User.hasMany(Operation, { foreignKey: 'userId' })
Operation.belongsTo(Category)

;(async () => {
  await sequelize.sync({ force: true, alter: true })
  console.log('All models were synchronized successfully.')

  await Category.create({ category: 'food', image: 'https://cdn-icons-png.flaticon.com/512/8280/8280802.png' })
  await Category.create({ category: 'services', image: 'https://cdn-icons-png.flaticon.com/512/8280/8280802.png' })
  await Category.create({ category: 'healt', image: 'https://cdn-icons-png.flaticon.com/512/2869/2869805.png' })
  await Category.create({ category: 'tecnology', image: 'https://cdn-icons-png.flaticon.com/512/8238/8238581.png' })
  await Category.create({ category: 'clothes', image: ' https://cdn-icons-png.flaticon.com/512/1774/1774656.png' })
})()

module.exports = { User, Operation, Category }
