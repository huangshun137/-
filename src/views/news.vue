<template>
  <div class="news">
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/news/1" class="col_3 f_12">新闻动态</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">新闻动态</strong> </div>
              <ul class="sidebar">
                  <li class="sidebar_li"> <router-link to="/news/1" class="sidebar_a" :class="this.id == 1 ? 'active' : ''">公司新闻</router-link></li>
              </ul>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <ul class="news_ul">
              <li class="news_li">
                <router-link :to="{name:'newsDetail',params: {id: id,num:1}}" class="news_li_title" target="_self">尚德亮相韩国大邱国际绿色能源展</router-link>
                <div class="news_li_div">
                  <p class="news_content">韩国国际绿色能源展是亚洲领先、且韩国规模最大的国际可再生能源展览会，也是各大光伏厂商开拓韩国太阳能光伏市场的重要平台。众所周知，韩国能源贫瘠，石油与天然气稀少，水力资源也很匮乏，因此在亚洲范围内，韩国政府首先提出并实施购电补偿法，政府采用“政府扶持、企业投资、地方参与”的发展模式，大力扶持太阳能发电产业。据彭博新能源财经预测，2019年韩国预计新增光伏装机量达1.96GW，光伏产业发展前景广阔。</p>
                  <router-link :to="{name:'newsDetail',params: {id: id,num:1}}" class="news_li_div_a" target="_self">More+ </router-link>
                </div>
              </li>
              <li class="news_li">
                <a href="javascript:;" class="news_li_title">尚德光伏检测中心主任龚海丹受邀参加PVTD研讨会并发表演说</a>
                <div class="news_li_div">
                  <p class="news_content">据悉，本次研讨会以“为2019光伏组件技术发展指明风向”为己任，邀请了包括硅片、电池、组件、组件配套材料，相关设备以及光伏系统、检测认证等光伏产业各领域技术骨干，共同探讨2019年光伏产业的发展趋势。研讨会现场讨论激烈，有关“2019年，哪些组件技术将引领发展趋势的潮流”、“有哪些提高组件可靠性的方案”、“电站业主如何看待光伏组件的性能成本”等议题的提出，都得到了现场业内人士的专业解答。</p>
                  <a href="javascript:;" class="news_li_div_a">More+ </a>
                </div>
              </li>
              <li class="news_li">
                <a href="javascript:;" class="news_li_title">尚德参加南美洲太阳能研讨会，进一步拓展南美地区光伏市场</a>
                <div class="news_li_div">
                  <p class="news_content">南美地区拥有着世界上最具活力的可再生能源市场,有超过四分之一的能源供给来自于可再生能源，是全球平均水平的两倍。但是，该地区对于水力发电高度依赖，在水力发电和可再生能源间寻求互补关系，改变能源结构特性，是南美洲新能源市场发展的关键因素。</p>
                  <a href="javascript:;" class="news_li_div_a">More+ </a>
                </div>
              </li>
              <li class="news_li">
                <a href="javascript:;" class="news_li_title">有机管理，融合发展——探访组件工厂负责人于佳</a>
                <div class="news_li_div">
                  <p class="news_content">2004年，大学刚毕业的于佳收到了来自尚德的offer，就此开始了在尚德的职业生涯，当时的他，满怀憧憬、充满干劲；如今的他：稳健、有阅历、有活力，个人特性也是公司共性的真实写照。今天来到《尚德人物》接受专访的是尚德组件工厂负责人——于佳，肩负着整个尚德组件制造生产管理重任的他，有哪些精彩故事要与我们分享呢？</p>
                  <a href="javascript:;" class="news_li_div_a">More+ </a>
                </div>
              </li>
              <li class="news_li">
                <a href="javascript:;" class="news_li_title">尚德电力总裁何双权先生出席德国莱茵TÜV质胜中国光伏盛典</a>
                <div class="news_li_div">
                  <p class="news_content">德国莱茵TÜV作为第三方权威检测认证机构，始终秉持公平原则和严谨态度，多年来为尚德提供了全方位测试与认证支持。在今年年初，德国TÜV莱茵还授予尚德光伏测试中心“实验室TMP”资质，证明了尚德光伏测试中心在人员资质、设备资质和设施与环境条件等方面全面多维度满足德国莱茵TÜV的外部实验室管理规范。</p>
                  <a href="javascript:;" class="news_li_div_a">More+ </a>
                </div>
              </li>
              <li class="news_li">
                <a href="javascript:;" class="news_li_title">尚德经典项目回顾2-印度Adani项目</a>
                <div class="news_li_div">
                  <p class="news_content">时间回到2015年8月，尚德向全球宣布：“我们将与印度最大的私营独立电力生产商之一Adani电力有限公司(Adani Power Ltd.)展开进一步紧密合作，尚德将向Adani电力的太阳能项目提供222.5MW组件。”众所周知，尚德于2014年3月被顺风收购，在收购的短短一年间尚德迅速重新回到彭博社光伏组件一级供应商名单。而2015年这一至关重要的项目签单，正是印度客户对尚德产品质量和项目能力的认可。</p>
                  <a href="javascript:;" class="news_li_div_a">More+ </a>
                </div>
              </li>
          </ul>
          <div class="pageBtn">
                <v-pagination :total="total" :current-page='current' @pagechange="pagechange"></v-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pagination from '@/components/pagination'
export default {
  data () {
    return {
      id: '',
      total: 150, // 记录总条数
      display: 10, // 每页显示条数
      current: 1 // 当前的页数
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  components: {
    'v-pagination': pagination
  },
  methods: {
    pagechange (currentPage) {
      console.log(currentPage) // ajax请求, 向后台发送 currentPage, 来获取对应的数据
    }
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.news_ul{
  width:688px;
  height:auto;
  margin:20px;
  overflow:hidden;
}
.news_li{
  width:688px;
  height:106px;
  border-bottom:1px dashed #dbdbdb;
  margin-bottom:-1px;
}
.news_li_title{
  font-size:14px;
  color:#333;
  height:40px;
  line-height:40px;
  font-weight:bold;
}
.news_li_title:hover{
  color:#83b91f;
}
.news_li_div{
  width:688px;
  height:65px;
  line-height:22px;
  position:relative;
}
.news_li_div_a{
  position:absolute;
  right:0px;
  bottom:0px;
  height:22px;
  line-height:22px;
  color:#83b91f;
  padding-left:20px;
  background:#fff;
}
.news_content{
  display: -webkit-box;
  height:42px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
