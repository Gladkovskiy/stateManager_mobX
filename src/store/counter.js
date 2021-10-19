import {makeAutoObservable} from 'mobx'

class Counter {
  //состояние
  count = 0
  timer = 60

  constructor() {
    makeAutoObservable(this)
  }

  //экшины
  increment = () => {
    this.count = ++this.count
  }
  decrement = () => {
    this.count = --this.count
  }

  //computed экшион
  get total() {
    return `Count + timer = ${this.timer + this.count}`
  }
}

export default new Counter()
