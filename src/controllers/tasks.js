const Task = require('../models/Task')

const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean()

  res.render('index', { tasks })
}

const createTask = async (req, res) => {
  try {
    const task = Task(req.body)

    const taskSaved = await task.save()
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
}

const renderTaskEdit = async (req, res) => {
  const { id } = req.params
  const task = await Task.findById(id).lean()

  res.render('edit', { task })
}

const editTask = async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndUpdate(id, req.body, { new: true })

  res.redirect('/')
}

const deleteTask = async (req, res) => {
  const { id } = req.params
  await Task.findByIdAndDelete(id)
  res.redirect('/')
}

const toogleTask = async (req, res) => {
  const { id } = req.params

  const task = await Task.findById(id)
  task.done = !task.done
  await task.save()

  res.redirect('/')
}


module.exports = { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, toogleTask }