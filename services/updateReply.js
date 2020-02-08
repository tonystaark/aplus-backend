import { updateReplyByIdDB } from '../database/updateReplyDB'

const updateReplyById = async(req, res) => {
  try {
    const result = await updateReplyByIdDB(req)
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
  updateReplyById
}