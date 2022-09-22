// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

const reverseBetween = (head, left, right) => {
  let prev = null
  let curr = head
  let next = head

  for (let i = 1; i < left; i++) {
    prev = curr
    curr = curr.next
  }

  let prev2 = prev
  let curr2 = curr

  for (let i = left; i <= right; i++) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  if (prev2 !== null) {
    prev2.next = prev
  } else {
    head = prev
  }

  curr2.next = curr

  return head
}
