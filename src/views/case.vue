<template>
  <div id="aboutUs">
    <!--banner-->
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/case/1" class="col_3 f_12">成功案例</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">成功案例</strong> </div>
              <ul class="sidebar">
                  <li class="sidebar_li"> <router-link to="/case/1" class="sidebar_a" :class="this.id == 1 ? 'active' : ''">户用屋顶案例</router-link></li>
                  <li class="sidebar_li"> <router-link to="/case/2" class="sidebar_a" :class="this.id == 2 ? 'active' : ''">商业场所案例</router-link></li>
                  <li class="sidebar_li"> <router-link to="/case/3" class="sidebar_a" :class="this.id == 3 ? 'active' : ''">地面电站案例</router-link></li>
              </ul>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div v-if="id==1">
            <p style="height:10px;"></p>
            <h2 class="titleMargin">户用屋顶案例</h2>
            <img src="../../static/images/hycase4.png" alt="">
            <h4>降低成本，同时也为低碳环保作出了贡献</h4>
            <p>从国际市场上来看，多数国家对太阳能发电有政府资助，这使得使用太阳能光伏发电系统的成本大大降低。即使在没有政府补助的国家，与传统的资源相比，我们的太阳能光伏发电系统仍然具有价格优势。您可以通过咨询我们在您当地的经销商和安装商来进行选择。<br>
              尚德电力，全球光伏行业的先驱。我们之所以能如此自信，源于我们强大的科研团队以及超长质保。您可以下载尚德产品宣传册和产品单页来对我们的产品有更进一步的了解。</p>
          </div>
          <div v-if="id==2">
            <p style="height:10px;"></p>
            <h2 class="titleMargin">商业场所案例</h2>
            <img src="../../static/images/case1.png" alt="">
            <h4>经济与环境并重</h4>
            <p>从国际市场上来看，多数国家对太阳能发电有政府资助，这使得使用太阳能光伏发电系统的成本大大降低。即使在没有政府补助的国家，与传统的资源相比，我们的太阳能光伏发电系统仍然具有价格优势。您可以 通过咨询我们在您当地的经销商和安装商来进行选择。<br>
              尚德电力，全球光伏行业的先驱。我们之所以能如此自信，源于我们强大的科研团队以及超长质保。您可以下载尚德产品宣传册和产品单页来对我们的产品有更进一步的了解。</p>
          </div>
          <div v-if="id==3">
            <p style="height:10px;"></p>
            <h2 class="titleMargin">地面电站案例</h2>
            <img src="../../static/images/case2.png" alt="">
            <h4>利用太阳能发电系统可获得稳定的经济回报和银行的支持</h4>
            <p>太阳能是自然界最清洁、最安全、且蕴藏最丰富的可再生能源。面对能源枯竭、环境破坏，尚德将一如既往，始终致力于为人类的可持续发展提供彻底的能源解决方案！ <br>
              尚德已经迎来新的希望之光。自收购后，尚德以零负债重回市场，并与全球范围内的EPC公司展开合作，正在往清洁能源整体解决方案供应商的方向发展。</p>
          </div>
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
  created () {
  },
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.titleMargin{
  margin-bottom: 10px;
}
</style>
