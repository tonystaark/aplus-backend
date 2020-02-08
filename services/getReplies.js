import { getAllRepliesByThreadIdDB } from '../database/getRepliesDB'

const getAllRepliesByThreadId = async(req, res) => {
  try {
    const result = await getAllRepliesByThreadIdDB(req)
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
  getAllRepliesByThreadId
}