<template>
  <div id="aboutUs">
    <!--banner-->
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/aboutus/1" class="col_3 f_12">关于我们</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">关于我们</strong> </div>
              <ul class="sidebar">
                  <li class="sidebar_li"> <router-link to="/aboutus/1" class="sidebar_a" :class="this.id == 1 ? 'active' : ''">公司简介</router-link></li>
                  <li class="sidebar_li"> <router-link to="/aboutus/2" class="sidebar_a" :class="this.id == 2 ? 'active' : ''">发展历程</router-link></li>
                  <li class="sidebar_li"> <router-link to="/aboutus/3" class="sidebar_a" :class="this.id == 3 ? 'active' : ''">管理团队</router-link></li>
                  <li class="sidebar_li"> <router-link to="/aboutus/4" class="sidebar_a" :class="this.id == 4 ? 'active' : ''">技术研发</router-link></li>
                  <li class="sidebar_li"> <router-link to="/aboutus/5" class="sidebar_a" :class="this.id == 5 ? 'active' : ''">专业优势</router-link></li>
              </ul>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div class="gsjj_Box" v-if="id==1">
            <p style="height:10px;"></p>
            <h2>公司简介</h2>
            <p>无锡尚德太阳能电力有限公司(简称 尚德电力)由施正荣博士于2001年1月建立</p>
            <p>是一家集研发、生产、销售为一体的外商独资高新技术光伏企业</p>
            <p>主要从事晶体硅太阳电池、组件、光伏系统工程、光伏应用产品的研究、制造、销售和售后服务</p>
            <p>尚德全球分支机构遍及北京、上海、旧金山、东京、慕尼黑、罗马、马德里、沙夫豪森、首尔、悉尼等重要城市</p>
            <p>目前拥有 4 个生产基地，分别位于无锡、洛阳、青海、上海及日本长野，在全球拥有约11,000名员工</p>
          </div>
          <div class="fzlc_Box" v-if="id==2">
            <p style="height:10px;"></p>
            <h2>发展历程</h2>
            <p>尚德的产品在世界各地深受青睐，被广泛应用到通信、广电、交通、石油、照明等行业。</p>
            <p>尚德公司积极参与和承建了世行项目、西部光明工程项目和2008年北京绿色奥运工程（奥运会主体育馆鸟巢工程太阳能电力供应商）,其卓越的生产力和产品品质受到了国内外市场的一致好评</p>
            <p>公司在致力于光伏产业链的国产化、中国光伏的大规模发展的同时</p>
            <p>努力加快第二代多晶硅薄膜太阳电池大规模产业化研究的步伐，保持在光伏行业内的技术领先地位</p>
            <br>
            <p>无锡尚德太阳能电力有限公司2002 年9 月完成了第一条多晶硅太阳能电池生产线的安装</p>
            <p>公司成立前一年获得了无锡市政府的赠款600 万美元，最初的生产规模十分有限，仅为10MW</p>
            <p>自成立以来，无锡尚德太阳能电力有限公司呈现出突飞猛进的发展态势</p>
            <p>一跃成为世界上第四大太阳能电池制造商，2006 年生产量达到270MW，预计2007 年将达到470MW</p>
          </div>
          <div class="zjgj_Box" v-if="id==3">
            <p style="height:10px;"></p>
            <h2>管理团队</h2>
            <p class="boldFont">张伏波先生</p>
            <p>张伏波，男，1962年6月出生，经济学博士。曾任国泰君安证券有限责任公司总裁助理，兴安证券有限责任公司副总裁，上海证券有限责任公司副总经理，海证期货有限公司董事长，西藏城市发展投资股份有限公司独立董事，香港玖源化工（集团）有限公司董事局副主席；现任亚太资源开发投资有限公司董事，香港玖源化工（集团）有限公司非执行董事，上海申华控股股份有限公司独立董事，万家基金管理有限公司独立董事，上海锦江国际酒店发展股份有限公司独立董事。2017年2月起担任顺风光电科技有限公司董事长兼任无锡尚德太阳能电力有限公司董事长。</p>
            <br>
            <p class="boldFont">高瞻先生</p>
            <p>高瞻先生（Zeight），新加坡国立大学工商管理硕士，于2012年以执行董事的身份加入了顺风集团并于2013年12月份作为全球IPP业务副总裁加入尚德。他为顺风集团建立了海外项目投资开发及管理部门，其业务范围涵盖了欧洲、日本、美国的市场。高先生拥有超过20年的国际贸易和管理经验，尤其熟悉日本市场。从2018年7月起他担任无锡尚德太阳能电力有限公司董事、副董事长。</p>
            <br>
            <p class="boldFont">何双权先生</p>
            <p>1972年10月出生，工商管理硕士。进入无锡尚德前，在制造业工作已超过20年，曾任飞利浦移动显示系统有限公司制造部经理、菲尼萨光电通讯（上海）有限公司高级运营经理、尚德太阳能电力有限公司副总经理、总经理。2016年5月起担任无锡尚德太阳能电力有限公司总裁。</p>
            <br>
            <p class="boldFont">刘军先生</p>
            <p>1972年1月出生，汉族。毕业于首都经济贸易大学会计专业，本科学历，财政部财政科学研究所会计专业硕士(MPACC)学位，国家一级理财规划师（高级职称），高级国际财务管理师（SIFM），税务会计师（CTAC），中级会计师。拥有近20年财务管理工作经验，其中有10年国内上市公司高级财务职业经历。2014年8月正式入职无锡尚德太阳能电力有限公司，曾任集团财务总监，现担任无锡尚德太阳能电力有限公司副总裁，分管公司财务管理、关务物流、信息技术等相关工作。</p>
          </div>
          <div class="qyry_Box" v-if="id==4">
            <p style="height:10px;"></p>
            <h2>技术研发</h2>
            <p>尚德电力高度重视技术创新，使其在中国太阳能光伏行业的激励竞争中立于不败之地</p>
            <p>公司创始人兼总裁施正荣先生曾留学澳洲，并获得太阳能薄膜电池专业博士学位</p>
            <p>之后，继续留在澳洲，从事太阳能光伏的研究，最终将多项专利发明，以及创新对行业发展的重要性的理念带回中国</p>
            <p>公司将年收益的5%用于产品研发，已经建立了世界级的研发中心，聘请了20 多名行业内资深的专家</p>
            <br>
            <p>2006年，尚德电力在上海附近建立了第二个研发中心，吸引了更多人才的加入</p>
            <p>该研发中心致力于薄膜光伏电池的研究——一项有助于减少未来光伏发电成本的前沿技术</p>
            <p>上海研发中心同时还包括一个薄膜电池制造中心，该制造中心将于2008 年投入使用，到2009 年可达到50MW 的生产能力</p>
            <br>
            <p>2009年4月，尚德电力于启动碲化镉薄膜电池项目，项目由四川大学、无锡尚德公司共同组建</p>
            <p>双方成立了四川尚德太阳能电力有限公司，其中四川大学光电研究所部分专家拥有部分股权，但控股方仍为无锡尚德</p>
            <p>尚德的碲化镉电池的转化率已达到8%左右，而实验室水平在13%~14%之间</p>
          </div>
          <div class="zyys_Box" v-if="id==5">
            <p style="height:10px;"></p>
            <h2>专业优势</h2>
            <p>无锡尚德在在‪2009-2010‬年期间，黑硅多晶、PREC单晶、PREC多晶的技术正值巅峰时期</p>
            <p>拥有完全的筹备，可以说我们在技术上的优势非常大</p>
            <p>未来无锡尚德也会坚持以技术为导向，以质量为生命的理念，不断加大对科技研发的投入</p>
            <p>我们会加深巩固PREC单晶的稳定性，以及黑硅多晶大量的投产,满足市场对高效组件产品的需求</p>
            <p>在其他组件产品上，也会与市场同步，满足光伏行业对高性价比组件的需求</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['reload'],
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
.boldFont{
  font-weight: bold;
}
.main_rightDiv>div{
  padding:0px 16px;
  line-height:26px;
  color:#4e4e4e;
  font-size:12px;
}
</style>
