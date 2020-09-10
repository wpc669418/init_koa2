import User from './test'

const user = {
  name: 'wpc',
  age: 28,
  email: 'wpc@qq.com'
}

// 单个新增
const insertMethods = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log('run -> result', result)
}

// 批量新增
const insertManyMethods = async () => {
  // const data = new User(user)
  // const result = await data.inser()
  const result = await User.insertMany([user])
  console.log('run -> result', result)
}

// run()

// 删 
const deleteMethods = async () => {
  const result = await User.deleteOne()
  console.log('run -> result', result)
}

// 改
const updateMethods = async () => {
  const result = await User.updateOne(
    {
      name: 'wpc'
    },
    {
      email: 'wpc6694@164.com'
    })
  console.log('run -> result', result)
}

// 查
const findMethods = async () => {
  const result = await User.find()
  console.log('run -> result', result)
}

// insertManyMethods()
updateMethods()