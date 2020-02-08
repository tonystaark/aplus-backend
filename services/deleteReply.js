import { deleteReplyByIdDB } from '../database/deleteReplyDB'

const deleteReplyById = async(req, res) => {
  try {
    const result = await deleteReplyByIdDB(req)
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
  deleteReplyById
}