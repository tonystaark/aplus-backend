import { createThreadDB } from '../database/createThreadDB'

const createThread = async(req, res) => {
  try {
    await createThreadDB(req.body)
    res.sendStatus(200)
  }catch(err){
    const errorObject = {
      status:false,
      message: err
    }
    res.status(500).send(errorObject)
  }
}

export { createThread }