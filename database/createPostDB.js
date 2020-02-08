
// define the home page route
const createPostDB = (requestBody) => {
  const { body, attachment, thread_id } = requestBody  
  const statement = `INSERT INTO post(body, attachment, thread_id) VALUES (?)`;
  db.query(statement, [[body, attachment, thread_id]], (err, result) => {
    if (err) {
      console.log('CREATE NEW POST ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { createPostDB }
