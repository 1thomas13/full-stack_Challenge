const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000

const userRoutes = require('./routes/user')


app.use(express.json())

app.get('/', (_req,res) => {
  res.status(200).json('ok')
})

app.use('/api', userRoutes)

app.listen( port, () => {
  console.log('listen on port 3000')
})