<template>
  <div id="aboutUs">
    <!--banner-->
    <div class="towBanner">
      <div class="towBannerBox" id="homeBannerImgBox"> <img src="../../static/images/banner4.png" /> </div>
    </div>
    <div class="main clear">
      <div class="main_title left">
        <span class=" col_3 f_12">您的当前位置：</span>
        <a href="/#/index" class="col_3 f_12">首页</a> > <a href="/#/message" class="col_3 f_12">在线留言</a>
      </div>
      <div class="main_left left">
          <div class="main_leftDiv">
              <div class="main_leftTitle"> <strong class="f_14 col_3">在线留言</strong> </div>
          </div>
      </div>
      <div class="main_right right">
        <div class="main_rightDiv">
          <div>
            <span>在线留言</span>
          </div>
          <form action="">
            <table>
              <tr class="phone">
                <td>联系电话：</td>
                <td><input type="text" placeholder="请输入您的手机号" oninput="value=value.replace(/[^\d]/g,'')" v-model="phone" @blur="checkPhone()"><span class="yes"></span><span class="no"></span><span class="wrongText"></span></td>
              </tr>
              <tr class="email">
                <td>电子邮箱：</td>
                <td><input type="text" placeholder="请输入您的邮箱" v-model="email" @blur="checkEmail()"><span class="yes"></span><span class="no"></span><span class="wrongText"></span></td>
              </tr>
              <tr class="detail">
                <td>详细说明：</td>
                <td><textarea name="" id="" maxlength="200" placeholder="（最多输入200字）" v-model="detail" @blur="checkDetail()"></textarea><span class="yes"></span><span class="no"></span><span class="wrongText"></span></td>
              </tr>
              <tr class="name">
                <td>姓名：</td>
                <td><input type="text" placeholder="请输入您的姓名" v-model="name" @blur="checkName()"><span class="yes"></span><span class="no"></span><span class="wrongText"></span></td>
              </tr>
            </table>
            <div class="submit">
              <input type="submit" value="提交">
              <input type="reset" value="重置">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: '',
      email: '',
      detail: '',
      name: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    checkPhone () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.phone === '') {
        $('.phone .yes').hide()
        $('.phone .no').css('display', 'inline-block')
        $('.phone .wrongText').html('联系电话不能为空')
      } else if (!reg.test(this.phone)) {
        $('.phone .yes').hide()
        $('.phone .no').css('display', 'inline-block')
        $('.phone .wrongText').html('请输入正确的联系电话')
      } else {
        $('.phone .yes').css('display', 'inline-block')
        $('.phone .no').hide()
        $('.phone .wrongText').html('')
      }
    },
    checkEmail () {
      var regEmail = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
      if (this.email === '') {
        $('.email .yes').hide()
        $('.email .no').css('display', 'inline-block')
        $('.email .wrongText').html('电子邮箱不能为空')
      } else if (!regEmail.test(this.email)) {
        $('.email .yes').hide()
        $('.email .no').css('display', 'inline-block')
        $('.email .wrongText').html('请输入正确的电子邮箱')
      } else {
        $('.email .yes').css('display', 'inline-block')
        $('.email .no').hide()
        $('.email .wrongText').html('')
      }
    },
    checkDetail () {
      if (this.detail === '') {
        $('.detail .yes').hide()
        $('.detail .no').css('display', 'inline-block')
        $('.detail .wrongText').html('详细说明不能为空')
      } else {
        $('.detail .yes').css('display', 'inline-block')
        $('.detail .no').hide()
        $('.detail .wrongText').html('')
      }
    },
    checkName () {
      var regName = /^[\u4e00-\u9fa5]{2,4}$/
      if (this.name === '') {
        $('.name .yes').hide()
        $('.name .no').css('display', 'inline-block')
        $('.name .wrongText').html('姓名不能为空')
      } else if (!regName.test(this.email)) {
        $('.name .yes').hide()
        $('.name .no').css('display', 'inline-block')
        $('.name .wrongText').html('请输入正确的姓名')
      } else {
        $('.name .yes').css('display', 'inline-block')
        $('.name .no').hide()
        $('.name .wrongText').html('')
      }
    }
  }
}
</script>
<style scoped>
@import "../../static/css/secondPage.css";
textarea{
  resize: none;
  width:300px;
  height:120px;
}
form table td input{
  width:300px;
  height:20px;
}
form table tr td:first-child{
  width:100px;
}
.yes{
  background-image:url(../../static/images/yes.png);
  background-size: cover;
  width:20px;
  height:20px;
  display: none;
  vertical-align: middle;
  margin:0 10px;
}
.no{
  background-image:url(../../static/images/no.png);
  background-size: cover;
  width:20px;
  height:20px;
  display: none;
  vertical-align: middle;
  margin:0 10px;
}
.wrongText{
  color:red;
  font-size:14px;
}
.submit{
  margin:10px 0;
  text-align: center;
}
.submit input:first-child{
  margin-right:50px;
}
.submit input{
  padding:5px 10px;
}
</style>
