import mongoose from "mongoose"
import config from './config.js'

const connect = async () => {
  await mongoose.connect(config.mongoDbUrl)
}

export default connect
