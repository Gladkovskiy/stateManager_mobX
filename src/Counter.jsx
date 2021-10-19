import {observer} from 'mobx-react-lite'
import React from 'react'
import counter from './store/counter'

const Counter = observer(() => {
  return (
    <div className="container">
      <div>COUNT = {counter.total}</div>
      <button className="btn btn-success mx-3" onClick={counter.increment}>
        +
      </button>
      <button className="btn btn-danger" onClick={counter.decrement}>
        -
      </button>
    </div>
  )
})

export default Counter
