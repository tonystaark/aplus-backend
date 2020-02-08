
// define the home page route
const getAllRepliesByThreadIdDB = (req) => {
  const statement = `SELECT * from reply WHERE thread_id = ?`;
  return new Promise(function(resolve, reject){
    db.query(statement, [req.params.threadId], (err, result) => {
      if (err) {
        console.log(err)
        reject(new Error('get ALL POSTS ERROR'))
      }
      resolve(result)
    })
  })
}

export { 
  getAllRepliesByThreadIdDB
}
