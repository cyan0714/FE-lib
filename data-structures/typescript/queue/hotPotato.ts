import { MyQueue } from './implement_queue'

const hotPotato = (people: string[], num: number): string => {
  const queue = new MyQueue<string>()
  people.forEach(person => queue.enqueue(person))
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }
  return queue.dequeue()!
}