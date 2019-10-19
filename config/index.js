'use strict'

const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}`)
// const DB = require('./credentials.js')
import { DB } from './credentials.js'
const dbName = `${env}`
const createDatabase =
` 
  CREATE DATABASE IF NOT EXISTS ${dbName};
  USE ${dbName};
`
const createUserTable = 

`
CREATE TABLE IF NOT EXISTS user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30),
  password VARCHAR(255),
  email VARCHAR(255)
) 
`

const db = mysql.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  multipleStatements: true
})

db.connect(function (err) {
  if (err) throw err
  console.log(`Created ${dbName} database !`)
})

db.query(createDatabase, function (err, result) {
  if (err) throw err
  console.log(`Created ${dbName} table !`)
})


db.query(createUserTable, function (err, result) {
  if (err) throw err
  console.log(`Created ${dbName} table !`)
})

global.db = db
module.exports = config