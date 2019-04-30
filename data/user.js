/**
 * 初始化用户(user)模拟数据
 *
 */
const Users = [];
Users.push({
  id: 1,
  username: 'admin', //用户名
  name: "尚德", //姓名
  password: '123456', //密码
  email: '761791474@qq.com', //邮箱
  nickname: '超级管理员', //昵称
  sex: 1, //性别
  addr: '江苏省无锡市锡山区'
});

Users.push({
  id: 2,
  username: 'staff',
  name: "死神", //姓名
  password: '123123',
  email: '761791474@qq.com',
  nickname: '普通管理员',
  sex: 1, //性别
  addr: '江苏省无锡市新吴区'
});

module.exports = Users;
