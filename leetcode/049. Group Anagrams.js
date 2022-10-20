// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = strs => {
  const map = new Map()
  for (let str of strs) {
    let strArr = [...str]
    strArr.sort()
    let key = strArr.join(',')
    let list = map.get(key) ? map.get(key) : []
    list.push(str)
    map.set(key, list)
  }
  return [...map.values()]
}
