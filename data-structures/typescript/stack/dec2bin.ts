import { MyStack } from './implement_stack'

const dec2bin = (value: number): string => {
  const stack = new MyStack<number>()
  let result = ''
  while (value > 0) {
    stack.push(value % 2)
    value = Math.floor(value / 2)
  }
  while (!stack.isEmpty()) {
    result += stack.pop()
  }
  return result
}