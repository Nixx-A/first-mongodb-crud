const { Router } = require('express')
const {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toogleTask
} = require('../controllers/tasks')

const router = Router()

router.get('/', renderTasks)

router.post('/tasks/add', createTask)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)

router.get('/tasks/:id/toggleDone', toogleTask)

module.exports = router
