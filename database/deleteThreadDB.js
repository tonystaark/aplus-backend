const deleteThreadByIdDB = (req) => {
  const statement = `DELETE FROM thread WHERE id = ?`;
  db.query(statement, [req.params.id], (err, result) => {
    if (err) {
      console.log('DELETE THREAD ERROR',err)
      throw err
    }
    console.log('result',result)
  })
}

export { deleteThreadByIdDB }
