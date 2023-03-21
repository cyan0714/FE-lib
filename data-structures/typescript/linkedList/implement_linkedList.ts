class Node<T> {
  value: T
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size
  }

  append(value: T) {
    const newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode 
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  insert(value: T, index: number) {
    if (index < 0 || index > this.size) {
      throw new Error('Index out of range')
    }
    const newNode = new Node(value)
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous: Node<T> | null = null
      for (let i = 0; i < index; i++) {
        previous = current
        current = current!.next
      }
      newNode.next = current
      if (previous) {
        previous.next = newNode
      }
    }
    this.size++
  }

  traverse() {
    let current = this.head
    while (current !== null) {
      console.log(current.value)
      current = current.next
    }
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.traverse() // a b c
linkedList.insert('d', 1)
linkedList.traverse() // a d b c



export { Node, LinkedList }