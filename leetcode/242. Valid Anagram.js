// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1)
    map.has(t[i]) ? map.set(t[i], map.get(t[i]) - 1) : map.set(t[i], -1)
  }

  for (let [k, v] of map) {
    if (v !== 0) return false;
  }

  return true;
}