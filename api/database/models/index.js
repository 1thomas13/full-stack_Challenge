const { Sequelize, DataTypes } = require('sequelize')
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
  email: {
    type: DataTypes.STRING,
    notNull: true
  }
})

const Category = sequelize.define('Category', {
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
Category.hasOne(Operation, { foreignKey: 'categoryId' })

;(async () => {
  await sequelize.sync()
  console.log('All models were synchronized successfully.')

  await Category.create({ category: 'food', image: 'asd' })
  await Category.create({ category: 'services', image: 'asd' })
  await Category.create({ category: 'healt', image: 'asd' })
  await Category.create({ category: 'tecnology', image: 'asd' })
})()

module.exports = { User, Operation, Category }
