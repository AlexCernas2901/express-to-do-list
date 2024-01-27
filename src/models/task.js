import mongoose from 'mongoose'

// Esquema de tareas
const taskSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
      trim: true,
      length: 30
    },
    description: {
      type: String,
      required: true,
      trim: true,
      length: 50
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('Task', taskSchema)
