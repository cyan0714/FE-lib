// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

const subsetsWithDup = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b)

  const backtrack = (start, curr) => {
    result.push([...curr])
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      curr.push(nums[i])
      backtrack(i + 1, curr)
      curr.pop()
    }
  }

  backtrack(0, [])

  return result
}
