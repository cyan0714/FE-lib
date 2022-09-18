// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

const getIntersectionNode = (headA, headB) => {
  let n1 = headA
  let n2 = headB

  while (n1 !== n2) {
    n1 = n1 === null ? headB : n1.next
    n2 = n2 === null ? headA : n2.next
  }

  return n2
}