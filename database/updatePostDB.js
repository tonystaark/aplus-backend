const updatePostByIdDB = (req) => {
  const { body, attachment } = req.body  
  const statement = `UPDATE post SET body = ?, attachment = ? WHERE id = ?`;
  db.query(statement, [body, attachment, req.params.id], (err, result) => {
    if (err) {
      console.log('UPDATE POST ERROR',err)
      throw err
    }
  })
}

export { updatePostByIdDB }
