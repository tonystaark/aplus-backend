import { createReplyDB } from '../database/createReplyDB'

const createReply = async(req, res) => {
  try {
    console.log('reqq', req.body)
    await createReplyDB(req.body)
    res.sendStatus(200)
  }catch(err){
    const errorObject = {
      status:false,
      message: err
    }
    res.status(500).send(errorObject)
  }
}

export { createReply }