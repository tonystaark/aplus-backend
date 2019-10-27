'use strict'

const mysql = require('mysql')
const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}`)
import { DB } from './credentials.js'
const dbName = `${env}`
const createDatabase =
` 
  CREATE DATABASE IF NOT EXISTS ${dbName};
  USE ${dbName};
`
const createCountryTable = 

`
CREATE TABLE IF NOT EXISTS country(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) 
`

const createUserTable = 
`
CREATE TABLE IF NOT EXISTS user(
  id INT AUTO_INCREMENT PRIMARY KEY,
  country_id INT,
  user_name VARCHAR(30),
  password VARCHAR(60),
  FOREIGN KEY (country_id) REFERENCES country(id),
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`


const createSystemTable = 

`
CREATE TABLE IF NOT EXISTS sistem(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  country_id INT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (country_id) REFERENCES country(id) ON DELETE CASCADE
) 
`

const createSubjectTable = 
`
CREATE TABLE IF NOT EXISTS course(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  sistem_id INT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sistem_id) REFERENCES sistem(id) ON DELETE CASCADE
)
`

const createThreadTable = 
`
CREATE TABLE IF NOT EXISTS thread(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(150),
  body TEXT,
  attachment TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  like_count INT,
  user_id INT,
  course_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES course(id) ON DELETE CASCADE
)
`

const createPostTable = 
`
CREATE TABLE IF NOT EXISTS post(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  body TEXT,
  attachment TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  like_count INT,
  thread_id INT,
  user_id INT,
  FOREIGN KEY (thread_id) REFERENCES thread(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
)
`

const createReplyTable = 
`
CREATE TABLE IF NOT EXISTS reply(
  id INT AUTO_INCREMENT PRIMARY KEY, 
  body TEXT,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  like_count INT,
  thread_id INT,
  user_id INT,
  post_id INT,
  FOREIGN KEY (thread_id) REFERENCES thread(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE
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
  db.query(createDatabase, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })

  db.query(createCountryTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createUserTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createSystemTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createSubjectTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createThreadTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createPostTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })
  
  db.query(createReplyTable, function (err, result) {
    if (err) throw err
    console.log(`Created ${dbName} table !`)
  })  
})


global.db = db
module.exports = config