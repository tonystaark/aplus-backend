
// define the home page route
const createThreadDB = (requestBody) => {
  const {title, body, attachment} = requestBody  
  const statement = `INSERT INTO thread(title, body, attachment) VALUES (?)`;
  db.query(statement, [[title, body, attachment]], (err, result) => {
    if (err) {
      console.log('CREATE NEW THREAD ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { createThreadDB }
