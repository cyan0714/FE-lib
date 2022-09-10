// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.
//
// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

const subsets = nums => {
  const result = []
  const backtrack = (start, curr) => {
    result.push([...curr])
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i])
      backtrack(start + 1, curr)
      curr.pop()
    }
  }

  backtrack(0, [])

  return result
}
