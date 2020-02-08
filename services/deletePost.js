import { deletePostByIdDB } from '../database/deletePostDB'

const deletePostById = async(req, res) => {
  try {
    const result = await deletePostByIdDB(req)
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
  deletePostById
}