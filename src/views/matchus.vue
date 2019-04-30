<template>
  <div id="aboutUs">
    <!--banner-->
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/matchus" class="col_3 f_12">联系我们</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">联系我们</strong> </div>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div class="lxwm_box">
            <p>地址：无锡国家高新技术开发区长江南路17-6号</p>
            <p>电话：+86 (510) 8531 8888</p>
            <p>邮箱：Huanhuan.ren@suntech-power.com</p>
            <p>传真：+86 (510) 8534 4214-0006</p>
          </div>
          <div class="mapBox">
            <!-- <iframe src="/masozi/utils/map.html" width="1000" height="600"></iframe> -->
            <el-amap vid="map" :zoom="zoom" :center="center">
              <el-amap-marker :position="center"></el-amap-marker>
            </el-amap>
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
      center: [120.4057306051, 31.5140248403],
      zoom: 16
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.mapBox{
  width:698px;
  height:268px;
  overflow:hidden;
  margin:20px auto;
}
.lxwm_box{
  line-height:26px;
  margin:20px auto;
  width:732px;
}
.lxwm_title{
  padding-bottom:16px;
}
</style>
