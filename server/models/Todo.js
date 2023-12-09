import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
    default: '234efqewg',
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
})

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo
