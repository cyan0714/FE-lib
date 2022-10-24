// Given a string s, return the longest palindromic substring in s.
// A string is called a palindrome string if the reverse of that string is the same as the original string.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = (s) => {
  if (s.length < 2) return s
  let start = 0;
  let maxLength = 1;
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1
        start = left
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1)
    expandAroundCenter(i, i + 1)
  }

  return s.substring(start, start + maxLength)
}
 