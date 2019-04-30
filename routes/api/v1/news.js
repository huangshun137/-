/***
 * news相关路由
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
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || '';
  let total = 0;
  var sql=`select * from sd_news`;
  query(sql,[])
  .then(result=>{
    total=result.length;
    sql+=` ORDER BY time DESC limit ?,?`;
    return query(sql,[page-1,limit]);
  })
  .then(result=>{
    res.json({
      total: total,
      page: page,
      limit: limit,
      news: result
    })
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
