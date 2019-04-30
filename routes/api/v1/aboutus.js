/***
 * aboutus相关路由
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var pool=require("../../../pool");
var query=require("../../query");

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

router.get('/', function (req, res) {
  var intro=[];
  var dev=[];
  var manager=[];
  var skills=[];
  var major=[];
  var sql = "select * from sd_aboutus";
  pool.query(sql,[],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      for (var i in result) {
        if (result[i].type == 'introduction') {
          intro.push(result[i])
        } else if (result[i].type == 'development') {
          dev.push(result[i])
        } else if (result[i].type == 'manager') {
          manager.push(result[i])
        } else if (result[i].type == 'skills') {
          skills.push(result[i])
        } else if (result[i].type == 'major') {
          major.push(result[i])
        }
      }
      res.json({intro,dev,manager,skills,major})
    }else{
      return res.json({"errcode": 40003, "errmsg": "请求失败，暂无数据"});
    }
    res.end();
  })
});

router.post('/:id', function (req, res) {
  let content = req.body.content;
  let author = req.body.author;
  let type = req.body.type;
  let id = req.body.id;
  let name = req.body.name;
  var sql = "UPDATE sd_aboutus SET content = ? , author = ? , name = ? WHERE type = ? AND id = ?";
  pool.query(sql,[content,author,name,type,id],(err,result)=>{
    err&&console.log(err);
    if(result.changedRows>0){
      return res.json({"errcode": 0, "errmsg": "修改成功"});
    }else{
      return res.json({"errcode": 40003, "errmsg": "修改失败,未有变动"});
    }
    res.end();
  })
});

indexRouter.router = router;

module.exports = indexRouter;
