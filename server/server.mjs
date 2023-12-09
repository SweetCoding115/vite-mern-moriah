import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Todo from './models/Todo.js'

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

// start the Express server
import './db/conn.mjs'

app.get('/todos', async (req, res) => {
  const todos = await Todo.find()

  res.json(todos)
})

app.post('/todo/new', (req, res) => {
  console.log(req)
  const todo = new Todo({
    text: req.body.text,
  })

  todo.save()

  res.json(todo)
})

app.delete('/todo/delete/:id', async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id)

  res.json({ result })
})

app.get('/todo/complete/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  todo.complete = !todo.complete

  todo.save()

  res.json(todo)
})

app.put('/todo/update/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  todo.text = req.body.text

  todo.save()

  res.json(todo)
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
