const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 5000

const userRoutes = require('./routes/user')
const operationRoutes = require('./routes/operation')

app.use(express.json())

app.get('/', (_req,res) => {
  res.status(200).json('ok')
})

app.use('/api/user', userRoutes)
app.use('/api/operation', operationRoutes)


app.listen( port, () => {
  console.log(`app listen on port ${port}`)
})