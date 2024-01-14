import { Router } from 'express'
import { authRequired } from '../middlewares/tokenValidator.js'
import { getTasks, getTask, createTask, updateTask, deleteTask } from '../controllers/tasks.js'

const router = Router()

router.get('/', authRequired, getTasks)
router.get('/:id', authRequired, getTask)
router.post('/', authRequired, createTask)
router.put('/:id', authRequired, updateTask)
router.delete('/:id', authRequired, deleteTask)

export default router
