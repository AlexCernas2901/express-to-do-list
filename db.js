import mongoose from 'mongoose'
import { MONGO_URI } from './consts.js'
import { databaseMessages } from './src/messages.js'

export const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log(databaseMessages.connectionSuccess)
  } catch (error) {
    console.error(databaseMessages.connectionError, error)
  }
}
