
// define the home page route
const createReplyDB = (requestBody) => {
  const { body, thread_id, post_id } = requestBody  
  const statement = `INSERT INTO reply(body, thread_id, post_id) VALUES (?)`;
  db.query(statement, [[body, thread_id, post_id]], (err, result) => {
    if (err) {
      console.log('CREATE NEW Reply ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { createReplyDB }
