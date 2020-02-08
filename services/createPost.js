import { createPostDB } from '../database/createPostDB'

const createPost = async(req, res) => {
  try {
    console.log('reqq', req.body)
    await createPostDB(req.body)
    res.sendStatus(200)
  }catch(err){
    const errorObject = {
      status:false,
      message: err
    }
    res.status(500).send(errorObject)
  }
}

export { createPost }