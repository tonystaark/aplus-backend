import { updateThreadByIdDB } from '../database/updateThreadDB'

const updateThreadById = async(req, res) => {
  try {
    const result = await updateThreadByIdDB(req)
    console.log('rsult',result)
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
  updateThreadById
}