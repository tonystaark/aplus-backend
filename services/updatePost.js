import { updatePostByIdDB } from '../database/updatePostDB'

const updatePostById = async(req, res) => {
  try {
    const result = await updatePostByIdDB(req)
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
  updatePostById
}