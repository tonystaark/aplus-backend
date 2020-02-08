const updateReplyByIdDB = (req) => {
  const { body } = req.body  
  const statement = `UPDATE reply SET body = ? WHERE id = ?`;
  db.query(statement, [body, req.params.id], (err, result) => {
    if (err) {
      console.log('UPDATE POST ERROR',err)
      throw err
    }
  })
}

export { updateReplyByIdDB }
