import {makeAutoObservable, action} from 'mobx'

class Todo {
  todos = [
    {id: 1, title: 'Сходи в магазин', completed: false},
    {id: 2, title: 'Посмотри TV', completed: false},
    {id: 3, title: 'поставь лайк', completed: false},
  ]
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }
  removeTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id)
  }
  completeTodo(index) {
    this.todos[index].completed = !this.todos[index].completed
  }

  fetchTodos = () => {
    this.loading = true
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(
        action('fetchAddSuccess', json => {
          this.todos = [...this.todos, ...json]
          this.loading = false
        })
      )
  }
}

export default new Todo()
