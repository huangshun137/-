<template>
  <div class="contain">
    <bannerComponent></bannerComponent>
    <div class="main">
      <!--栏目-->
      <div class="successAL">
          <div class="big_title">
              <a href="/#/production/1" class="more">more+</a>
              <h3>产品中心</h3>
          </div>
          <div id="my_sc_box">
              <div id="my_scroll" style="width: 2080px; left: -798.5px;" @mouseenter="stopMove()" @mouseleave="bannerControl(150)">
                  <div id="my_div1">
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production1.jpg" width="224" height="150" /></a></p>
                      </div>
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production2.jpg" width="224" height="150" /></a></p>
                      </div>
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production3.jpg" width="224" height="150" /></a></p>
                      </div>
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production4.png" width="224" height="150" /></a></p>
                      </div>
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production5.png" width="224" height="150" /></a></p>
                      </div>
                      <div class="my_sc_Div">
                          <p><a href="/#/production/1" class="my_sc_a"><img src="../../static/images/production6.jpg" width="224" height="150" /></a></p>
                      </div>
                  </div>
                  <div id="my_div2">
                  </div>
              </div>
          </div>
      </div>
      <div class="clear">
      <!--左 此处是选项卡-->
        <div class="left home_column_left">
          <div class="home_column_left_BtnBox clear">
            <span class="home_column_left_Btn left on" @click="showNews($event)">新闻动态</span>
            <span class="home_column_left_Btn left " @click="showMatch($event)">联系我们</span>
          </div>
          <div class="home_column_left_DivBox">
            <div class="home_column_left_Div news on fontHide_title">
              <ul class="">
                <li class="clear homeNewLi"> <a href="/#/news/1" class="left col_3 f_12">尚德亮相韩国大邱国际绿色能源展</a> <span class="right col_6 f_12">[2019-04-03]</span> </li>
                <li class="clear homeNewLi"> <a href="/#/news/1" class="left col_3 f_12">尚德光伏检测中心主任龚海丹受邀参加PVTD研讨会并发表演说</a> <span class="right col_6 f_12">[2019-03-29]</span> </li>
                <li class="clear homeNewLi"> <a href="/#/news/1" class="left col_3 f_12">尚德参加南美洲太阳能研讨会，进一步拓展南美地区光伏市场</a> <span class="right col_6 f_12">[2019-03-27]</span> </li>
                <li class="clear homeNewLi"> <a href="/#/news/1" class="left col_3 f_12">有机管理，融合发展——探访组件工厂负责人于佳</a> <span class="right col_6 f_12">[2019-03-27]</span> </li>
                <li class="clear homeNewLi"> <a href="/#/news/1" class="left col_3 f_12">尚德电力总裁何双权先生出席德国莱茵TÜV质胜中国光伏盛典</a> <span class="right col_6 f_12">[2019-03-22]</span> </li>
              </ul>
              <div class="clear"> <a href="/#/news/1" class="right col_83b91f f_14">更多>></a> </div>
            </div>
            <div class="home_column_left_Div matchus">
              <div class="lxwm_title"><span class="col_0 f_17">无锡尚德太阳能电力有限公司</span></div><p><span class="col_4e4e4e f_14">地址：无锡国家高新技术开发区长江南路17-6号</span></p><p><span class="col_4e4e4e f_14">电话：+86 (510) 8531 8888</span></p><p><span class="col_4e4e4e f_14">邮箱：Huanhuan.ren@suntech-power.com</span></p><p><span class="col_4e4e4e f_14">传真：+86 (510) 8534 4214-0006</span></p>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right home_column_right">
          <div class="home_column_right_title"> <span class="col_3 f_14">公司简介</span> </div>
          <div class="home_column_right_content">
            <p>
              <span class="col_4e4e4e f_14 fontHide_5">
                无锡尚德太阳能电力有限公司(简称 尚德电力)由施正荣博士于2001年1月建立，是一家集研发、生产、销售为一体的外商独资高新技术光伏企业，主要从事晶体硅太阳电池、组件、光伏系统工程、光伏应用产品的研究、制造、销售和售后服务。尚德全球分支机构遍及北京、上海、旧金山、东京、慕尼黑、罗马、马德里、沙夫豪森、首尔、悉尼等重要城市，目前拥有 4 个生产基地，分别位于无锡、洛阳、青海、上海及日本长野，在全球拥有约11,000名员工。
              </span>
            </p>
            <div class="home_column_right_content_xq"> <a href="/#/aboutus/1" class=" col_83b91f f_14">详情>></a> </div>
          </div>
        </div>
      </div>
      <!--友情链接-->

      <div class="friendlink"> <span class="col_83b91f f_12">友情链接：</span>

        <a href="http://www.solarbe.com" target="_blank" class="col_0 f_12">索比光伏网</a>

        <span>&nbsp;|&nbsp;</span> <a href="http://http://www.jszhs.cn//" target="_blank" class="col_0 f_12">江苏正辉太阳能电力</a>

        <span>&nbsp;|&nbsp;</span> <a href="http://www.solarland.cn/" target="_blank" class="col_0 f_12">施朗德太阳能电力</a>

      </div>

    </div>
  </div>
</template>

<script>
import bannerComponent from '../components/banner.vue'
export default {
  data () {
    return {
      timer: '',
      h: 0
    }
  },
  mounted () {
    clearInterval(this.timer)
    $('#my_scroll').css('left', '0px')
    this.bannerControl(150)
  },
  destroyed () {
    clearInterval(this.timer)
  },
  components: {bannerComponent},
  methods: {
    showNews (ev) {
      $(ev.currentTarget).addClass('on')
      $(ev.currentTarget).siblings().removeClass('on')
      $('.news').show()
      $('.matchus').hide()
    },
    showMatch (ev) {
      $(ev.currentTarget).addClass('on')
      $(ev.currentTarget).siblings().removeClass('on')
      $('.matchus').show()
      $('.news').hide()
    },
    bannerControl (s) {
      $('#my_div2').html($('#my_div1').html())
      var a = $('#my_div1').width()
      $('#my_scroll').css('width', 2 * a + 100)
      this.scrollLeft(s, a)
    },
    scrollLeft (s, a) {
      let that = this
      this.timer = setInterval(function () {
        that.h -= s / 100
        $('#my_scroll').css('left', (that.h % a - a) % a)
      }, 30)
    },
    stopMove () {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
@import "../../static/css/base.css";
@import "../../static/css/style.css";
div{
  cursor: default;
}
.fontHide_5{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
}
.fontHide_title ul li a{
  max-width:330px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
/*轮播*/
.successAL{
  width:1000px;
  height:230px;
  margin:0px auto;
}
#my_sc_box{
  width:1000px;
  height:154px;
  margin:20px 0px 0px;
  position:relative;
  overflow:hidden;
}
#my_scroll{
  position:absolute;
  top:0px;
  left:0px;
}
#my_div1,#my_div2{
  float:left;
  white-space:nowrap;
}
.my_sc_Div{
  float:left;
  width:260px;
  height:152px;
  text-align:center;
}
.my_sc_Div a{
  border:2px solid #d1d1d1;
  width:224px;
  height:150px;
  display:inline-block;
  *display:inline;
  *zoom:1;
}
.my_sc_a:hover{
  border:2px solid #83b91f;
}
.big_title{
  border-bottom:1px solid #d1d1d1;
  padding-top:10px;
}
.big_title h3{
  font:18px/34px "微软雅黑";
  color:#222;
  border-bottom:3px solid #6a6a6a;
  position:relativel;
  margin-bottom:-2px;
  display:inline-block;
  *display:inline;
  *zoom:1;
  padding:0 10px;
}
.big_title .more{
  font-family:Arial, Helvetica, sans-serif;
  font-size:14px;
  color:#83b91f;
  float:right;
  text-transform:uppercase;
  margin-top:15px;
}
</style>
