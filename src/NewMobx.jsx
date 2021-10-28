import {observer} from 'mobx-react-lite'
import React from 'react'
import todo from './store/newMobx'

const Todo = () => {
  return (
    <ul style={{listStyle: 'none'}}>
      <button onClick={todo.increment}>Добавить +1</button>
      <div>{todo.addNumber}</div>
      <button onClick={() => todo.fetchTodo()}>Добавть асинхронно</button>
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
}

export default observer(Todo)
