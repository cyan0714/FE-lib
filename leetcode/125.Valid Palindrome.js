// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// method 1
const isPalindrome = (s) => {
  const newStr = s.toLowerCase().replace(/[\W_]/g, '');
  if (s.length < 2) return true;
  let left = 0, right = newStr.length - 1
  
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false
    }
    left++
    right--
  }
  
  return true
}

// method 2
const isPalindrome2 = (s) => {
  if (s.length < 2) return true
  s = s.toLowerCase().replace(/[\W_]/g, '')
  const s2 = s.split('').reverse().join("")
  
  return s === s2
}