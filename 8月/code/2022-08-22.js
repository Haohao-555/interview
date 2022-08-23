var addBinary = function(a, b) {
  let add = 0
  let sum = []
  for(let i = a.length -1, j = b.length -1; i >= 0 || j >= 0; i--, j--) {
      let num1 = +a[i] || 0
      let num2 = +b[j] || 0
      sum.unshift(num1 ^ num2 ^ add)
      add = num1 + num2 + add > 1 ? 1 : 0
      
  }
  if (add === 1) sum.unshift(1)
  return sum.join('')
};