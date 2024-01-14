import Task from '../models/task.js'
import { taskMessages } from '../messages.js'

export const getTasks = async (req, res) => {
  try {
    const user = req.user.id
    const tasks = await Task.find({ user })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({
      message: taskMessages.serverError
    })
  }
}

export const getTask = async (req, res) => {
  try {
    const id = req.params.id
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).json({
        message: taskMessages.serverError
      })
    }
    res.json(task)
  } catch (error) {
    res.status(500).json({
      message: taskMessages.serverError
    })
  }
}

export const createTask = async (req, res) => {
  try {
    const { tittle, description } = req.body
    const newTask = new Task({
      tittle,
      description,
      user: req.user.id
    })
    const taskSaved = await newTask.save()
    res.json(taskSaved)
  } catch (error) {
    res.status(500).json({
      message: taskMessages.serverError
    })
  }
}

export const updateTask = async (req, res) => {
  try {
    const id = req.params.id
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
    if (!task) {
      return res.status(404).json({
        message: taskMessages.taskNotFound
      })
    }
    res.json({
      message: taskMessages.taskUpdated
    })
  } catch (error) {
    res.status(500).json({
      message: taskMessages.serverError
    })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id
    const task = await Task.findByIdAndDelete(id)
    if (!task) {
      return res.status(404).json({
        message: taskMessages.taskNotFound
      })
    }
    res.json({
      message: taskMessages.taskDeleted
    })
  } catch (error) {
    res.status(500).json({
      message: taskMessages.serverError
    })
  }
}
