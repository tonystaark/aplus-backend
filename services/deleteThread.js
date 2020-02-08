import { deleteThreadByIdDB } from '../database/deleteThreadDB'

const deleteThreadById = async(req, res) => {
  try {
    const result = await deleteThreadByIdDB(req)
    res.status(200).send(result)
  }catch(err){
    const errorObject = {
      status:false,
      message: err
    }
    res.status(500).send(errorObject)
  }
}

export { 
  deleteThreadById
}