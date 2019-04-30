/**
 * users相关路由
 */

var express = require('express');
var router = express.Router();
var indexRouter = {};
var pool=require("../../../pool");
var query=require("../../query");

//用户登录
router.post('/login', function (req, res) {
  var username = _.trim(req.query.username || req.body.username || '');
  var pwd = req.body.pwd;
  if (!username || !pwd) {
    return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
  }
  var sql="select * from sd_user where uname=? and upwd=?";
  pool.query(sql,[username,pwd],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      req.session.userId=result[0].uid;
      return res.json({
        id: result[0].uid,
        username: result[0].uname,
        nickname: result[0].nick_name,
        name: result[0].user_name,
        email: result[0].email,
        phone: result[0].phone
      });
    }else{
      return res.json({"errcode": 40003, "errmsg": "用户名或密码错误"});
    }
    res.end();
  })
});

//用户退出
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.json({"errcode": 0, "errmsg": "退出完成"});
});

//先检查登录
router.use(function (req, res, next) {
  //用户已经登录
  if (req.session.userId) {
    next();
  }
  else {
    res.json({"errcode": 40001, "errmsg": "您还没有登录"});
  }
});

//更新个人部分信息
router.post('/profile', function (req, res) {
  let username = req.body.username;
  let nickname = req.body.nickname;
  let email = req.body.email;
  let name  = req.body.name;
  let phone = req.body.phone;
  var sql = "UPDATE sd_user SET nick_name = ? , email = ? , user_name = ? , phone = ? WHERE uname = ?";
  pool.query(sql,[nickname,email,name,phone,username],(err,result)=>{
    err&&console.log(err);
    if(result.changedRows>0){
      res.json({"errcode": 0, "errmsg": "修改成功"});
    }else{
      return res.json({"errcode": 40003, "errmsg": "修改失败,未有变动"});
    }
    res.end();
  })
});

//用户修改个人密码
router.patch('/changepwd', function (req, res) {
  let username = req.body.username;
  let oldPwd = req.body.oldPwd;
  let newPwd = req.body.newPwd;
  let confirmPwd  = req.body.confirmPwd;
  var pwd;
  var sql = "select upwd from sd_user where uname=?";
  query(sql,[username])
  .then(result=>{
    pwd = result[0].upwd
    if (pwd !== oldPwd) {
      res.json({"errcode": 40002, "errmsg": "原密码不正确"});
    } else if (newPwd !== confirmPwd) {
      res.json({"errcode": 40003, "errmsg": "新密码和确认新密码不一致"});
    } else if (oldPwd === newPwd) {
      res.json({"errcode": 40004, "errmsg": "新密码不能与原密码相同"});
    } else {
      sql = "UPDATE sd_user SET upwd = ? WHERE uname = ?";
      return query(sql,[newPwd,username]);
    }
  })
  .then(result=>{
    if(result.changedRows>0){
      res.json({"errcode": 0, "errmsg": "修改成功"});
    }else{
      res.json({"errcode": 40009, "errmsg": "处理失败"});
    }
    res.end();
  })
})

//返回user的集合
router.get('/', function (req, res) {
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || '';
  let total = 0;
  let rltUsers = [];
  var sql=`select * from sd_user`;
  query(sql,[])
  .then(result=>{
    total=result.length;
    sql+=` limit ?,?`;
    return query(sql,[page-1,limit]);
  })
  .then(result=>{
    rltUsers=result;
    res.json({
      total: total,
      limit: limit,
      users: rltUsers
    })
  })
});

indexRouter.router = router;

module.exports = indexRouter;

