// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]

const swapPairs = (head) => {
  const dummy = new ListNode() 
  dummy.next = head

  let curr = dummy

  while (curr.next !== null && curr.next.next !== null) {
    let n1 = curr.next
    let n2 = curr.next.next
    curr.next = n2
    n1.next = n2.next
    n2.next = n1
    curr = n1
  }

  return dummy.next
}