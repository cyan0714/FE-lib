// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  const set = new Set()
  let i = 0, j = 0, maxLength = 0
  for (; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i])
      maxLength = Math.max(maxLength, set.size)
    } else {
      while (set.has(s[i])) {
        set.delete(s[j])
        j++
      }

      set.add(s[i])
    }
  }

  return maxLength
}
