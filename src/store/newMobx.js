import {makeAutoObservable, runInAction} from 'mobx'

const Todo = makeAutoObservable({
  todos: [
    {id: 1, title: 'Сходи в магазин', completed: false},
    {id: 2, title: 'Посмотри TV', completed: false},
    {id: 3, title: 'поставь лайк', completed: false},
  ],
  loading: false,
  number: 1,

  addTodo: todo => {
    Todo.todos.push(todo)
  },

  removeTodo: id => {
    Todo.todos = Todo.todos.filter(item => item.id !== id)
  },

  completeTodo: index => {
    Todo.todos[index].completed = !Todo.todos[index].completed
  },

  fetchTodo: async () => {
    Todo.loading = true
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    runInAction(() => {
      Todo.todos = [...Todo.todos, data]
      Todo.loading = false
    })
  },

  get addNumber() {
    return this.number + 1
  },

  increment: () => Todo.number++,
})

export default Todo
