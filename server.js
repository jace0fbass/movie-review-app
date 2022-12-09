require('dotenv').config()
const express = require('express')
const sequelize = require('./config/connection')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3001
const isProduction = process.env.NODE_ENV === "production"

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`)
  sequelize.sync({ force: false }).then(() => {
    console.log('Sequelize connected!')
  })
})