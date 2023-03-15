import IStack from './IStack'
class MyStack<T> implements IStack<T> {
  private data: T[] = []
  push(item: T) {
    this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.pop()
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }
  isEmpty() {
    return this.data.length === 0
  }
  size() {
    return this.data.length
  }
}

const stack = new MyStack<number>()
stack.push(1)
stack.push(2)
stack.push(3)

export {
  MyStack
}