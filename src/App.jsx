import React from 'react'
import Counter from './Counter'
import Todo from './Todo'
import TodoNew from './NewMobx'

function App() {
  return (
    <div className="container">
      <Counter />
      <Todo />
      <hr />
      <TodoNew />
    </div>
  )
}

export default App
