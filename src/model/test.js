import mongoose from '../config/DBHelper'

// 引用内部类 
const Schema = mongoose.Schema

// 给对象添加一些额外的参数 生成一个对象
const TestSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  }
})

// 生成一个表 表名 + 表结构
const TestModel = mongoose.model('users', TestSchema)

export default TestModel