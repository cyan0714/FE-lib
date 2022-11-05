// Given an integer array nums, find the subarray which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

const maxSubArray = nums => {
  const memo = []
  memo[0] = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 1], nums[i])
    max = Math.max(max, memo[i])
  }
  console.log(memo);

  return max
}

