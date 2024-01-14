import mongoose from 'mongoose'

// Esquema de tareas
const taskSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
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
