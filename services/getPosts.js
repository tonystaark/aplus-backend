import { getAllPostsByThreadIdDB } from '../database/getPostsDB'

const getAllPostsByThreadId = async(req, res) => {
  try {
    const result = await getAllPostsByThreadIdDB(req)
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
  getAllPostsByThreadId
}