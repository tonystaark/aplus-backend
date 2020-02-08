
// define the home page route
const getAllThreadsDB = (req) => {
  let statement;
  if(req.query.search){
    statement = `SELECT * from thread WHERE title LIKE ?`;
  }else {
    statement = `SELECT * from thread`;
  }
  return new Promise(function(resolve, reject){
    db.query(statement, [req.query.search], (err, result) => {
      if (err) {
        console.log(err)
        reject(new Error('get ALL THREADS ERROR'))
      }
      resolve(result)
    })
  })
}

const getThreadsByIdDB = (id) => {
  const statement = `SELECT * from thread WHERE id = ?`;
  return new Promise(function(resolve, reject){
    db.query(statement, [id], (err, result) => {
      if (err) {
        console.log(err)
        reject(new Error('get NEW THREAD By ID ERROR'))
      }
      resolve(result)
    })
  })
}
export { 
  getAllThreadsDB,
  getThreadsByIdDB
}
