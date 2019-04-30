/***
 * aboutus相关路由
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var bookController = require('../../../controllers/book');
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

//返回book的集合
router.get('/aboutus', function (req, res) {
  var sql = "select * from sd_aboutus where type = 'introduction'";
  pool.query(sql,[],(err,result)=>{
    err&&console.log(err);
    if(result.length>0){
      return res.json({
        "errcode": 0,
        content: result
      });
    }else{
      return res.json({"errcode": 40003, "errmsg": "请求失败，暂无数据"});
    }
    res.end();
  })
});

router.get('/', bookController.find);

//返回指定的book
router.get('/:id', bookController.findById);

//创建book
router.post('/', bookController.create);

//更新book全部信息
router.put('/:id', bookController.update);

router.post('/aboutus/:id', function (req, res) {
  let content = req.body.content;
  let author = req.body.author;
  var sql = "UPDATE sd_aboutus SET content = ? , author = ? WHERE type = 'introduction'";
  pool.query(sql,[content,author],(err,result)=>{
    err&&console.log(err);
    if(result.changedRows>0){
      return res.json({"errcode": 0, "errmsg": "修改成功"});
    }else{
      return res.json({"errcode": 40003, "errmsg": "修改失败,未有变动"});
    }
    res.end();
  })
});

//更新book部分信息
router.patch('/:id', bookController.patch);

//批量删除
router.delete('/batch/:ids', bookController.deleteBatch);

//删除指定的book
router.delete('/:id', bookController.delete);



indexRouter.router = router;

module.exports = indexRouter;
