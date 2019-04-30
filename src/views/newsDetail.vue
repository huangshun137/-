<template>
  <div class="newsDetail">
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/news/1" class="col_3 f_12">新闻动态</a> > <span v-if="id==1">公司新闻</span>
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
          <div class="t_center">
            <p><br /></p>
            <strong class="f_16 col_3 " >尚德亮相韩国大邱国际绿色能源展</strong>
            <p><br /></p>
          </div>
          <p>当地时间2019年4月3日，韩国国际绿色能源展(Green Energy Expo) 在大邱EXCO正式开幕。尚德应邀携多款高效产品参加，吸引了行业内外的诸多关注。</p>
          <p>韩国国际绿色能源展是亚洲领先、且韩国规模最大的国际可再生能源展览会，也是各大光伏厂商开拓韩国太阳能光伏市场的重要平台。众所周知，韩国能源贫瘠，石油与天然气稀少，水力资源也很匮乏，因此在亚洲范围内，韩国政府首先提出并实施购电补偿法，政府采用“政府扶持、企业投资、地方参与”的发展模式，大力扶持太阳能发电产业。据彭博新能源财经预测，2019年韩国预计新增光伏装机量达1.96GW，光伏产业发展前景广阔。</p>
          <p>本次展会，尚德旨在拓展韩国光伏市场，展出了一系列优质高效组件，包括单晶PERC高效组件、单晶PERC双面双玻组件和单晶PERC半片组件。其中单晶PERC双面双玻组件的输出功率高达370-380W，通过使用高效P型双面单晶电池，背面增益最高可达25%，结合分体式接线盒设计，实现背面零遮挡，组件最大总功率可达475W，此外，该组件还具有出色的防沙功能，可减少灰尘积聚，平均提高功率增益1.3%，可以给客户带来更多效益。</p>
          <p>在本次韩国国际绿色能源展上，尚德凭借在韩国市场的多年深耕，和一如既往匠心打造的产品品质，在夯实当地原有客户关系的基础上，进一步与新兴伙伴达成了良好的合作共识。单丝不成线，独木不成林，尚德将一如既往贯彻以客户为中心的理念，与全球客户合作共赢。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.t_center{
  text-align:center;
}
</style>
