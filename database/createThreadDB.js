
// define the home page route
const createThreadDB = (requestBody) => {
  const {title, body, attachment} = requestBody  
  const userId = 1 //hardcoded, should be
  // const statement = `INSERT INTO thread(title, body, attachment, user_id) VALUES (?)`;;
  const statement = `INSERT INTO thread(title, body, attachment, user_id) VALUES ("title1","body1",LOAD_FILE("/Users/TonyNg/Desktop/micheng.jpg"),1)`;;
  db.query(statement, (err, result) => {
  // db.query(statement, [[title, body, `LOAD_FILE(${attachment})`, userId]], (err, result) => {
    if (err) {
      console.log('CREATE NEW THREAD ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { createThreadDB }
