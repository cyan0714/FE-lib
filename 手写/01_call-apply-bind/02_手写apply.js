Function.prototype.myApply = function (thisObj, argsArr=[]) {
  const fn = this
  
  thisObj = (thisObj !== null && thisObj !== undefined) ? Object(thisObj) : window
  thisObj.fn = fn
  let result = thisObj.fn(...argsArr)
  delete thisObj.fn

  return result
}

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2)
  return num1 + num2
}

function foo(num) {
  return num
}

// 自己实现的调用
var result = sum.myApply("abc", [20, 30])
console.log(result)

var result2 = foo.myApply("abc", [20])
console.log(result2)