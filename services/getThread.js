import { getAllThreadsDB, getThreadsByIdDB } from '../database/getThreadDB'

const getAllThreads = async(req, res) => {
  try {
    const result = await getAllThreadsDB(req)
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

const getThreadsById = async(req, res) => {
  try {
    const result = await getThreadsByIdDB(req.params.id)
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
  getAllThreads,
  getThreadsById
}