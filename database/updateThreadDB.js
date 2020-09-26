const updateThreadByIdDB = (req) => {
  const {title, body, attachment } = req.body  
  const statement = `UPDATE thread SET title = ?, body = ?, attachment = LOAD_FILE(?) WHERE id = ?`;
  db.query(statement, [title, body, attachment, req.params.id], (err, result) => {
    if (err) {
      console.log('UPDATE THREAD ERROR',err)
      throw err
    }
  })
}

export { updateThreadByIdDB }
