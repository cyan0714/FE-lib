// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Example 1:
// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

// Example 2:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]

// Example 3:
// Input: l1 = [0], l2 = [0]
// Output: [0]

const addTwoNumbers = (l1, l2) => {
  const stack1 = []
  const stack2 = []

  while (l1 !== null) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2 !== null) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let carry = 0, curr = null

  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0

    if (stack1.length !== 0) {
      sum += stack1.pop()
    }
    
    if (stack2.length !== 0) {
      sum += stack2.pop()
    }

    sum += carry
    const node = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    node.next = curr
    curr = node

  }

  if (carry !== 0) {
    const node = new ListNode(carry)
    node.next = curr
    curr = node
  }
  
  return curr
}