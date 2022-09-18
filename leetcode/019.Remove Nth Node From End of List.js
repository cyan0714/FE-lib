// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

const removeNthfromEnd = (head, n) => {
  const dummy = new ListNode()
  dummy.next = head

  let n1 = dummy
  let n2 = dummy

  for (let i = 0; i <= n; i++) {
    n2 = n2.next
  }

  while (n2 !== null) {
    n1 = n1.next
    n2 = n2.next
  }

  n1.next = n1.next.next

  return dummy.next
}