<template>
  <div id="header">
    <div class="headerBj">
      <div class="header_top clear">
        <div class="left"> <a href="/#/index">
          <img src="../../static/images/logo.png" height="62" />
          </a> </div>
        <div class="right">
          <div class="clear"> <span class="col_ls54 f_16" >全国免费热线：</span> <span class="col_ls54 f_22" ><strong>
            +86 (510) 8531 8888
            </strong></span> </div>
          <div class="clear">
            <div class="right searchBox clear">
              <form action="#" method="get" target="_blank" >
                <input type="text" name="word" placeholder="请输入关键字" class="searchText left" />
                <input type="submit" value="搜索" name="" class="searchBtn left" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="navBox">
        <ul class="nav clear">
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/index" class="nav_a">首页</a> </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/aboutus/1" class="nav_a">关于我们</a>
            <ul>
              <li @click="activeChildShow($event)"> <router-link :to="{name:'aboutus',params:{id:1}}">公司简介</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link :to="{name:'aboutus',params:{id:2}}">发展历程</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link :to="{name:'aboutus',params:{id:3}}">组织架构</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link :to="{name:'aboutus',params:{id:4}}">企业荣誉</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link :to="{name:'aboutus',params:{id:5}}">专业优势</router-link> </li>
            </ul>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/news/1" class="nav_a">新闻动态</a>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/production/1" class="nav_a">产品中心</a>
            <ul>
              <li @click="activeChildShow($event)"> <router-link to="/production/1">常规组件</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/production/2">半片组件</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/production/3">双玻组件</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/production/4">轻质组件</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/production/5">智能组件</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/production/6">特殊应用组件</router-link> </li>
            </ul>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/case/1" class="nav_a">成功案例</a>
            <ul>
              <li @click="activeChildShow($event)"> <router-link to="/case/1">户用屋顶案例</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/case/2">商业场所案例</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/case/3">地面电站案例</router-link> </li>
            </ul>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/resource/1" class="nav_a">资源中心</a>
            <ul>
              <li @click="activeChildShow($event)"> <router-link to="/resource/1">活动日程表</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/resource/2">研究院</router-link> </li>
              <li @click="activeChildShow($event)"> <router-link to="/resource/3">光伏实验室</router-link> </li>
            </ul>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/message" class="nav_a">在线留言</a>
          </li>
          <li class="nav_li" @click="activeShow($event)"> <a href="/#/matchus" class="nav_a">联系我们</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      router: ''
    }
  },
  created () {
    if (sessionStorage.getItem('number')) {
      this.num = sessionStorage.getItem('number')
    }
  },
  mounted () {
    var index = 0
    var timer
    $('.nav .nav_li').hover(function () {
      index = $(this).index()
      timer = setTimeout(function () {
        $('.nav .nav_li').eq(index).find('ul').slideDown(500)
      }, 100)
    }, function () {
      $('.nav .nav_li').eq(index).find('ul').slideUp(500)
      clearTimeout(timer)
    })

    $('.nav .nav_li .nav_a').eq(this.num).addClass('active')
  },
  methods: {
    activeShow (ev) {
      $('.nav .nav_li .nav_a').removeClass('active')
      $(ev.currentTarget).children('.nav_a').addClass('active')
      let number = $('.nav_li .nav_a').index($('.active'))
      sessionStorage.setItem('number', number)
    },
    activeChildShow (ev) {
      $('.nav .nav_li .nav_a').removeClass('active')
      $(ev.currentTarget).parent().parent().children('.nav_a').addClass('active')
      let number = $('.nav_li .nav_a').index($('.active'))
      sessionStorage.setItem('number', number)
    }
  },
  watch: {
    $route (to, from) {
      this.router = to.name
      $('.nav .nav_li .nav_a').removeClass('active')
      if (this.router === 'homepage') {
        sessionStorage.setItem('number', 0)
        $('.nav .nav_li .nav_a').eq(0).addClass('active')
      } else if (this.router === 'aboutus') {
        sessionStorage.setItem('number', 1)
        $('.nav .nav_li .nav_a').eq(1).addClass('active')
      } else if (this.router === 'news' || this.router === 'newsDetail') {
        sessionStorage.setItem('number', 2)
        $('.nav .nav_li .nav_a').eq(2).addClass('active')
      } else if (this.router === 'production') {
        sessionStorage.setItem('number', 3)
        $('.nav .nav_li .nav_a').eq(3).addClass('active')
      } else if (this.router === 'case') {
        sessionStorage.setItem('number', 4)
        $('.nav .nav_li .nav_a').eq(4).addClass('active')
      } else if (this.router === 'resource') {
        sessionStorage.setItem('number', 5)
        $('.nav .nav_li .nav_a').eq(5).addClass('active')
      } else if (this.router === 'message') {
        sessionStorage.setItem('number', 6)
        $('.nav .nav_li .nav_a').eq(6).addClass('active')
      } else if (this.router === 'matchus') {
        sessionStorage.setItem('number', 7)
        $('.nav .nav_li .nav_a').eq(7).addClass('active')
      }
    }
  }
}
</script>
<style scoped>
.headerBj{
  width:100%;
  height:162px;
  background:#83b91f url(../../static/images/headerBJ.jpg) repeat-x scroll left top;
}
.header_top{
  width:1000px;
  height:90px;
  margin:0px auto;
  padding-top:30px;
}
.searchBox{
  height:26px;
  padding-top:10px;
}
.searchText{
  width:150px;
  height:24px;
  background:#83b91f;
  color:#fff;
  border:1px solid #83b91f;
  text-indent:10px;
  border-radius:20px 0px 0px 20px;
  font-size:12px;
  outline:none;
}
.searchBtn{
  cursor:pointer;
  width:50px;
  height:26px;
  background:#689b0b;
  color:#fff;
  border:1px solid #689b0b;
  border-radius:0px 20px 20px 0px;
  font-size:12px;
  outline:none;
}
.searchText::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
}
.searchText:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
}
.searchText::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
}
.searchText:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
}
.navBox{
  width:1000px;
  height:42px;
  margin:0px auto;
}
.nav{
  width:1000px;
  height:42px;
}
.nav_li{
  position:relative;
  float:left;
  width:124px;
  height:42px;
  line-height:44px;
  text-align:center;
  background:url(../../static/images/nav_liBJ.jpg) no-repeat scroll right center;
}
.nav_a{
  display:block;
  width:122px;
  height:42px;
  font-size:16px;
  color:#fff;
}
.nav_a.active,.nav_a:hover{
  background:url(../../static/images/nav_hovBj.jpg) no-repeat scroll 0px 0px;
  text-decoration:none;
}
.nav_li ul{
  position:absolute;
  width:122px;
  top:42px;
  left:0px;
  display:none;
  z-index:10;
}
.nav_li ul li{
  width:114px;
  height:28px;
  margin:1px auto;
}
.nav_li ul li a{
  display:block;
  width:114px;
  height:28px;
  line-height:28px;
  background:#97c447;
  font-size:14px;
  color:#fff;
}
.nav_li ul li a:hover{
  background:#8dbf33;
}
</style>
