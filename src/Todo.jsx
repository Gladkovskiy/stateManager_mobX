import {observer} from 'mobx-react-lite'
import React from 'react'
import todo from './store/todo'

const Todo = observer(() => {
  return (
    <ul style={{listStyle: 'none'}}>
      <button onClick={() => todo.fetchTodos()}>Добавть асинхронно</button>
      {todo.loading ? (
        <div>Loading...</div>
      ) : (
        todo.todos.map((item, key) => (
          <li key={key + 'z'}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => todo.completeTodo(key)}
            />
            {item.title}
            <button onClick={() => todo.removeTodo(item.id)}>x</button>
          </li>
        ))
      )}
    </ul>
  )
})

export default Todo
