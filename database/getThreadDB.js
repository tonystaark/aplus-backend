
// define the home page route
const getAllThreadsDB = (req) => {
  let statement;
  if(req.query.search){
    statement = `SELECT thread.*, user.user_name FROM thread JOIN user on thread.user_id = user.id WHERE thread.title LIKE ?`;
  }else {
    statement = `SELECT thread.*, user.user_name FROM thread JOIN user on thread.user_id = user.id`;
  }
  return new Promise(function(resolve, reject){
    db.query(statement, '%' + [req.query.search]+ '%', (err, result) => {
      if (err) {
        console.log(err)
        reject(new Error('get ALL THREADS ERROR'))
      }
      resolve(result)
    })
  })
}

const getThreadsByIdDB = (id) => {
  const statement = `SELECT thread.*, user.user_name FROM thread JOIN user on thread.user_id = user.id WHERE thread.id = ? `;
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
