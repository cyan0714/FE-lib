// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false

const isSymmetric = (root) => {
  if (!root) return true
  const isMirror = (l, r) => {
    if (!l && !r) return true
    if (l && r && l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left)) return true
    return false
  }
  
  return isMirror(root.left, root.right)
}