<template>
  <div class="production">
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox">
        <img src="../../static/images/banner4.png">
      </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class="col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> >
        <a href="/#/production/1" class="col_3 f_12">产品中心</a>
      </div>
      <div class="main_left left">
        <div class="main_leftDiv">
          <div class="main_leftTitle">
            <strong class="f_14 col_3">产品中心</strong>
          </div>
          <ul class="sidebar">
            <li class="sidebar_li">
              <router-link to="/production/1" class="sidebar_a" :class="this.id == 1 ? 'active' : ''">常规组件</router-link>
            </li>
            <li class="sidebar_li">
              <router-link to="/production/2" class="sidebar_a" :class="this.id == 2 ? 'active' : ''">半片组件</router-link>
            </li>
            <li class="sidebar_li">
              <router-link to="/production/3" class="sidebar_a" :class="this.id == 3 ? 'active' : ''">双玻组件</router-link>
            </li>
            <li class="sidebar_li">
              <router-link to="/production/4" class="sidebar_a" :class="this.id == 4 ? 'active' : ''">轻质组件</router-link>
            </li>
            <li class="sidebar_li">
              <router-link to="/production/5" class="sidebar_a" :class="this.id == 5 ? 'active' : ''">智能组件</router-link>
            </li>
            <li class="sidebar_li">
              <router-link to="/production/6" class="sidebar_a" :class="this.id == 6 ? 'active' : ''">特殊应用组件</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div>
            <div class="cpzx_title">
              <span class="col_3 f_12">常规组件</span>
            </div>
            <div class="clear cpzx_page">
              <div class="product left">
                <a href="/masozi/contents/530/3431.html" class="productImg">
                  <img src="../../static/images/production1.jpg" width="228" height="154">
                </a>
                <a href="/masozi/contents/530/3431.html" class="productText">单晶72片（335-370W）</a>
              </div>
              <div class="product left">
                <a href="/masozi/contents/530/3430.html" class="productImg">
                  <img src="../../static/images/production1.jpg" width="228" height="154">
                </a>
                <a href="/masozi/contents/530/3430.html" class="productText">单晶72片（335-370W）</a>
              </div>

              <div class="product left">
                <a href="/masozi/contents/530/3429.html" class="productImg">
                  <img src="../../static/images/production1.jpg" width="228" height="154">
                </a>
                <a href="/masozi/contents/530/3429.html" class="productText">单晶72片（335-370W）</a>
              </div>

              <div class="product left">
                <a href="/masozi/contents/530/3428.html" class="productImg">
                  <img src="../../static/images/production1.jpg" width="228" height="154">
                </a>
                <a href="/masozi/contents/530/3428.html" class="productText">单晶72片（335-370W）</a>
              </div>
            </div>
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
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.product {
  width: 252px;
  height: 198px;
  text-align: center;
  padding-bottom: 10px;
}
.productImg {
  display: inline-block;
  /* width: 246px;
  height: 182px; */
  overflow: hidden;
}
.productImg img {
  border: 1px solid #e1e1e1;
}
.productImg img:hover {
  border: 1px solid #83b91f;
}
.productText {
  display: block;
  width: 246px;
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  color: #4e4e4e;
}
.productText:hover {
  color: #83b91f;
}
.cpzx_title {
  height: 30px;
  line-height: 38px;
  padding-bottom: 10px;
}
.cpzx_page {
  width: 770px;
  margin-left: -8px;
}
</style>
