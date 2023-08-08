// 深拷贝

const copyObject = (obj = {}) => {
  let newObj = null;
  if (typeof (obj) === 'object' && obj !== null) {
    newObj = obj instanceof Array ? [] : {}
    // 进入下一层进行递归
    for (let i in obj) newObj[i] = copyObject(obj[i])
  } else {
    newObj = obj
  }
  return newObj
}

// 测试
let obj = {
  id: 1,
  func: () => {
    console.log('func')
  },
  userInfo: {
    name: '浩浩',
    age: 23,
    birthday: '1999-05-29'
  },
  hobby: ['敲代码', '还是敲代码']
}

const newObj = copyObject(obj)

obj.userInfo.name = 'haohao'
obj.hobby[0] = '躺平'

console.log('旧值', obj);
console.log('新值', newObj)