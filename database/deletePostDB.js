const deletePostByIdDB = (req) => {
  const statement = `DELETE FROM post WHERE id = ?`;
  db.query(statement, [req.params.id], (err, result) => {
    if (err) {
      console.log('DELETE POST ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { deletePostByIdDB }
