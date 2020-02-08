const deleteReplyByIdDB = (req) => {
  console.log(req.params)
  const statement = `DELETE FROM reply WHERE id = ?`;
  db.query(statement, [req.params.id], (err, result) => {
    if (err) {
      console.log('DELETE reply ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { deleteReplyByIdDB }
