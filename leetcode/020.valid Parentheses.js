// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
 
const validParenthese = (s) => {
  const map = new Map();
  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')
  const stackArr = []
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stackArr.push(map.get(s[i]))
    } else {
      if (stackArr.pop() !== s[i]) {
        return false
      }
    }
  }

  return stackArr.length === 0
}