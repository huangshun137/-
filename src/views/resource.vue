<template>
  <div id="aboutUs">
    <!--banner-->
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/resource/1" class="col_3 f_12">资源中心</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">资源中心</strong> </div>
              <ul class="sidebar">
                  <li class="sidebar_li"> <router-link to="/resource/1" class="sidebar_a" :class="this.id == 1 ? 'active' : ''">活动日程表</router-link></li>
                  <li class="sidebar_li"> <router-link to="/resource/2" class="sidebar_a" :class="this.id == 2 ? 'active' : ''">研究院</router-link></li>
                  <li class="sidebar_li"> <router-link to="/resource/3" class="sidebar_a" :class="this.id == 3 ? 'active' : ''">光伏实验室</router-link></li>
              </ul>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div v-if="id==1">
            <div class="activity_list">
              <div class="list_title">
                <span class="list_time">2019/2/13-15</span>
                <span class="title_content">2019法国可再生能源展会</span>
                <span class="controlBottom" @click="showListContent($event)"></span>
              </div>
              <div class="list_content">
                <div class="list_img">
                  <img src="../../static/images/1111.png" alt="">
                </div>
                <div class="name_place">
                  <div>名称：2019法国可再生能源展会</div>
                  <div>地点：里昂</div>
                </div>
                <div class="date_country">
                  <div>日期：2019-02-13</div>
                  <div>国家：法国</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="id==2">
            <div class="activity_list">
              <div class="list_title list_active">
                <span class="list_time">江苏省（尚德）光伏技术研究院</span>
                <span class="controlBottom activeBottom" @click="showContent($event)"></span>
              </div>
              <div class="search_content">
                <p>2008年7月无锡尚德太阳能电力有限公司(简称“尚德公司”)承担了“江苏省科技发展计划（重大研发机构建设项目）—江苏省（尚德）光伏技术研究院” (简称“研究院”)的建设，该项目在“江苏省光伏能源工程技术研究中心”基础上进行建设。“研究院”整合和运用尚德公司以及各合作高校的研发资源，以提高产品竞争力为核心开展技术创新活动，加快产品更新换代，促进我省光伏行业技术升级和产品结构调整。组织力量开发行业共性技术和关键性技术，帮助企业解决技术难题；开发具有自主知识产权、高附加值的产品；为省内光伏企业提供质量检测、信息管理、咨询等各项服务等。</p>
                <div>
                  <img src="../../static/images/yanjiuyuan.jpg" alt="">
                </div>
                <h3>一、硬件设施建设</h3>
                <p>“研究院”建有先进的化学实验室、物理实验室、光刻实验室、扩散实验室、镀膜实验室、激光实验室、检测分析室等实验室，配置了先进的研发和试验检测设备，可以支撑开展先进的光伏技术研究；建成了20340平方米研发场所，配备研发仪器设备四百多台套，并拥有技术先进的中试生产线。完善的硬件设施为研究院今后的良好运转打下坚实的基础。</p>
                <h3>二、组织机构建设</h3>
                <p>“研究院”重点完成了太阳电池研发中心和光伏产品检测中心的建设。光伏产品检测中心拥有规模较大、检测手段先进的光伏组件与产品检测实验室，该实验室荣获美国UL授予的WTDP证书、德国VDE授予的TDAP证书、中国合格评定国家认可委员会（CNAS）实验室认可证书、太阳能光伏产品金太阳认证认可证书等。</p>
                <h3>三、创新机制建设</h3>
                <p>“研究院”在企业技术中心已有的创新机制基础上进行建设，该企业技术中心于2008年9月通过了国家认定，由此为“研究院”体制机制建设提供了一个高起点的平台，为“研究院”的顺利建设奠定了良好的基础。“研究院”在体制机制建设过程中，开展了一系列的活动。如经江苏省科技厅批准，成立了由两位院士领衔的“研究院”技术委员会，同时成立了太阳电池研究专业委员会和光伏产品检测专业委员会，并于2008年11月8日举行了第一次会议。会上省科技厅朱厅长发表了重要讲话，并对“研究院”建设寄予了很高的期望。</p>
              </div>
            </div>
            <div class="activity_list">
              <div class="list_title list_active">
                <span class="list_time">国家认定企业技术中心</span>
                <span class="controlBottom activeBottom" @click="showContent($event)"></span>
              </div>
              <div class="search_content">
                <div>
                  <img src="../../static/images/yanjiuyuan2.jpg" alt="">
                </div>
                <p>无锡尚德太阳能电力有限公司企业技术中心（简称“中心”）于2008年9月通过国家级认定，经过多年努力，每年进行多项科研项目开发，取得了丰硕的成果。在近几年的技术创新建设中，中心紧紧围绕企业发展战略规划，面向光伏行业和产业链发展的科技前沿，以自主科技创新为基础，以提高光伏行业整体技术水平为重点，以科技人才队伍建设为关键，积极制定和实施企业技术创新战略，并着力在创新平台、技术创新、人才培养等方面进行建设。</p>
              </div>
            </div>
            <div class="activity_list">
              <div class="list_title list_active">
                <span class="list_time">国家级博士后科研工作站</span>
                <span class="controlBottom activeBottom" @click="showContent($event)"></span>
              </div>
              <div class="search_content">
                <p>尚德公司博士后科研工作站，继2008年10月被国家博管办批准为无锡新区博士后科研工作站企业分站后，在2010年8月经国家人力资源和社会保障部和全国博士后科研流动站管理协调委员会批准，升级为国家级博士后科研工作站。博士后科研工作站的成立进一步促进了企业和高等院校的产学研合作，进一步拓宽了吸纳高精尖人才的渠道，提高了技术创新和管理创新水平，增强了核心竞争力。</p>
                <p>尚德公司申请建立国家级博士后工作站后，成为立足本企业、面向全行业、放眼全世界，打造“一流技术、一流品质、一流人才、一流管理”企业科研实体关键性步骤之一。在近几年的博士后工作站建设过程中，充分利用尚德公司科技创新平台，吸引高端科技创新人才加入尚德公司，目前在站的博士后1人，出站博士后2人。博士后在站期间充分利用尚德公司和高等院校以及科研院所各自的优势，在站期间主攻的项目均得到了专家的认可，获得了江苏省科研资助基金的支持。尚德公司逐步建立了有关管理制度，并在研究院下设置专职人员，加强博士后科研工作站的日常管理工作，为博士进站创造有利条件，鼓励博士后为企业为社会做出更大贡献。</p>
                <div class="imgFlex">
                  <img src="../../static/images/keyan1.jpg" alt="">
                  <img src="../../static/images/keyan2.jpg" alt="">
                  <img src="../../static/images/keyan3.jpg" alt="">
                </div>
              </div>
            </div>
            <div class="activity_list">
              <div class="list_title list_active">
                <span class="list_time">江苏省光伏能源工程技术研究中心</span>
                <span class="controlBottom activeBottom" @click="showContent($event)"></span>
              </div>
              <div class="search_content">
                <p>江苏省光伏能源工程技术研究中心（简称“工程中心”）于2005年6月经江苏省科技厅批准，在 “无锡市光伏能源工程技术中心”的建设基础上组建。根据其科技活动内容及职能具体分为4个中心，分别为管理中心、太阳电池研究中心、光伏组件研究中心、光伏产品检测中心。</p>
                <p>工程中心从成立起就逐步建立了相关科研管理制度，规范了新产品开发、产品管理、项目管理、知识产权管理、科研经费管理、科技档案管理等过程控制程序和方法，制定了《技术开发项目管理规定》、《技术开发项目备案管理规定》、《科技成果鉴定管理办法》、《科技成果推广应用管理办法》、《科技项目奖励办法》等多项科技管理规章制度。建立了研发知识管理平台，藉此对中心的研发项目进行系统管理。进行了专利管理制度建设及实施，规范了专利工作流程及奖励制度，加强了企业自主知识产权保护力度。</p>
                <div class="imgFlex">
                  <img src="../../static/images/yanjiu4_1.jpg" alt="">
                  <img src="../../static/images/yanjiu4_2.jpg" alt="">
                  <img src="../../static/images/yanjiu4_3.jpg" alt="">
                </div>
                <p>工程中心实行开放的管理模式，以课题和项目为纽带，汇集国内外优秀科研人才。目前已经建立了项目专家评审制，以确保项目技术可行性、经济可行性得到充分评估；建立了项目负责制，研发部门提名，工程中心主任会同技术委员会专家进行审查，确立具体项目和课题的负责人；建立了科研成果效益与项目承担人员个人利益挂钩的量化考核办法，对科研人员收入实行上不封顶、下可保底的激励和鼓励政策。</p>
                <p>工程中心作为企业科技创新平台和江苏省光伏行业共性技术研发平台，以后将始终遵循“六有”和“五个一流”建设标准，结合尚德公司实际情况，完善相对独立的研发场所，相对完备的设施装备、高效精干的创新团队、支撑发展的研发业务、引领未来的产出指标、开放运行的体制机制；完备研发设施和研发人才，围绕国际一流，不断自我完善和发展，在科研管理机制上和科技成果等方面继续取得显著成效。</p>
                <div class="imgFlex">
                  <img src="../../static/images/yanjiu5_1.jpg" alt="">
                  <img src="../../static/images/yanjiu5_2.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div v-if="id==3">
            <p style="height:10px;"></p>
            <h2 class="titleMargin">光伏实验室</h2>
            <p>尚德光伏产品检验检测中心是从事太阳能光伏产品检验检测的内部独立测试机构，完全符合ISO/IEC17025《检测和校准实验室能力的通用要求》的管理要求，具有光伏行业内世界领先的检测能力。</p>
            <p>检测中心分为室内和室外两部分，室内面积3200平方米，室外面积3000平方米。获国际权威机构的认可，具备独立完成国际标准测试要求的检验检测项目。</p>
            <div class="laboratory">
              <img src="../../static/images/shiyanshi1.jpg" alt="">
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
  created () {
  },
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {
    showListContent (ev) {
      if (!$(ev.target).parent().hasClass('list_active')) {
        $(ev.target).parent().next().animate({height: '85px', padding: '20px 15px'})
        $(ev.target).parent().addClass('list_active')
        $(ev.target).css('background-image', 'url(../../static/images/icon.png)')
      } else {
        $(ev.target).parent().next().animate({height: '0px', padding: '0px 15px'})
        $(ev.target).parent().removeClass('list_active')
        $(ev.target).css('background-image', 'url(../../static/images/icon_0.png)')
      }
    },
    showContent (ev) {
      if (!$(ev.target).parent().hasClass('list_active')) {
        $(ev.target).parent().addClass('list_active')
        $(ev.target).parent().next().slideDown()
        $(ev.target).addClass('activeBottom')
      } else {
        $(ev.target).parent().removeClass('list_active')
        $(ev.target).parent().next().slideUp()
        $(ev.target).removeClass('activeBottom')
      }
    }
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
.activity_list{
  margin-bottom: 20px;
}
.list_title{
  background-color: #f8f8f8;
  color:black;
  padding:10px 10px 10px 28px;
}
.list_active{
  background-color: #83b91f;
  color:white;
  padding:12px 10px 12px 28px;
}
.list_title span{
  font-size:16px;
}
.title_content{
  margin-left:28px;
}
.controlBottom{
  background-image: url(../../static/images/icon_0.png);
  float:right;
  width:24px;
  height:24px;
  cursor: pointer;
}
.activeBottom{
  background-image: url(../../static/images/icon.png);
}
.list_content{
  height:0;
  padding:0;
  overflow: hidden;
  padding:0 15px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  box-shadow: 0px 6px 22px -1px rgba(58,0,0,0.11);
}
.list_img img{
  width:290px;
}
.search_content{
  padding:15px;
  box-shadow: 0px 6px 22px -1px rgba(58,0,0,0.11);
}
.imgFlex{
  margin:10px auto;
  display: flex;
  justify-content:space-around;
  align-items: center;
}
.imgFlex img{
  height:121px;
}
.laboratory img{
  width:100%;
}
</style>
