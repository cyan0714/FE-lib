var conststr = ['h', 'n', 'u', 'd', 's', 'n', 'u']; //将 n,u 互换

for (let i = 0; i < conststr.length; i++) {
  if (conststr[i] === 'n') {
    conststr[i] = 'u'
    continue;
  }
  if (conststr[i] === 'u') {
    conststr[i] = 'n'
    continue
  }
}
console.log(conststr.join(''));
// for (var i = 0; i < conststr.length; i++) {
//     var temp;
//     if (conststr[i] == 'u') {
//         temp = conststr[i];
//         conststr[i] = conststr[i - 1];
//         conststr[i - 1] = temp;

//     }
// }
// console.log(conststr.join(''));