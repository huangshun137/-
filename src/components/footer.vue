<template>
  <div class="footerBj">
    <div class="footer_top">
      <ul class="footer_nav clear">
        <li class="footer_nav_li"><a href="/#/index" class="footer_nav_a">网站首页</a> </li>
        <li class="footer_nav_li"> <a href="/#/aboutus/1" class="footer_nav_a">关于我们</a> </li>
        <li class="footer_nav_li"> <a href="/#/news/1" class="footer_nav_a">新闻动态</a> </li>
        <li class="footer_nav_li"> <a href="/#/production/1" class="footer_nav_a">产品中心</a> </li>
        <li class="footer_nav_li"> <a href="/#/case/1" class="footer_nav_a">成功案例</a> </li>
        <li class="footer_nav_li"> <a href="/#/resource/1" class="footer_nav_a">资源中心</a> </li>
        <li class="footer_nav_li"> <a href="/#/message" class="footer_nav_a">在线留言</a> </li>
        <li class="footer_nav_li"> <a href="/#/matchus" class="footer_nav_a">联系我们</a> </li>
      </ul>
    </div>
    <div class="footer_bottom">
      <div class="footer_text">
        <p> <span class="col_f f_12">地址:无锡国家高新技术开发区长江南路17-6号 电话:+86 (510) 8531 8888</span> </p>
        <p> <span class="col_f f_12">Copyright &#169; 无锡尚德太阳能电力有限公司 版权所有 苏 ICP 备 10023461 号</span> <span class="col_f f_12"></span> </p>
      </div>
      <div class="erweima">
        <!-- <img src="./upload/images/2018/1/6154852541.jpg" width="90" height="90" /> -->
      </div>
    </div>
    <ul class="rightNav">
      <li class="text"><a href="/#/message">在线留言</a></li>
      <li class="text"><a href="/#/matchus">联系我们</a></li>
      <li id="goTop" v-show="btnFlag"><a href="javascript:;" title="返回顶部" @click="backTop()"><img src="../../static/images/back.png"></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      btnFlag: ''
    }
  },
  created () {},
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>
<style scoped>
.footerBj{
  width:100%;
  height:198px;
  background:url(../../static/images/footerBJ.jpg) no-repeat scroll center bottom ;
  margin:0px auto;
  text-align:center;
}
.footer_top{
  width:1000px;
  height:52px;
  margin:0px auto;
}
.footer_nav{
  display:inline-block;
  height:44px;
}
.footer_nav_li{
  position:relative;
  float:left;
  width:94px;
  height:52px;
  line-height:52px;
  text-align:center;
  background:url(../../static/images/footer_navbj.jpg) no-repeat scroll right center;
}
.footer_nav_a{
  display:block;
  width:94px;
  height:52px;
  font-size:12px;
  color:#fff;
}
.footer_bottom{
  position:relative;
  width:1000px;
  height:114px;
  padding-top:30px;
  margin:0px auto;
  text-align:center;
  line-height:24px;
}
.footer_text{
  padding-top:30px;
}
.erweima{
  position:absolute;
  right:70px;
  top:45px;
  width:90px;
  height:90px;
  overflow:hidden;
}
.erweima img{
  width:90px;
  height:90px;
}

/*右侧浮动*/
.rightNav{
  width:54px;
  position:fixed;
  right:25px;
  bottom:20px;
}
.rightNav li{
  height:54px;
  margin-bottom:5px;
  background-color:#94DD19;
}
.rightNav li a{
  display:block;
  height:54px;
  line-height:22px;
  text-align:center;
  color:#fff;
  font-size:16px;
}
.rightNav li a:hover{
  background-color:#83b91f;
}
.rightNav li a img{
  margin-top:19px;
}
.rightNav li.text a{
  height:46px;
  padding:4px;
}
</style>
