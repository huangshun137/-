<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>数据管理</el-breadcrumb-item>
        <el-breadcrumb-item>关于我们</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main" v-loading="loading" element-loading-text="拼命加载中" v-for="listItem in list" :key="listItem.id">
      <h1 v-if="listItem[0].typedes">{{listItem[0].typedes}}</h1>
      <!--列表-->
      <el-table :data="listItem" highlight-current-row style="width: 100%;">
        <el-table-column prop="cid" label="id" width="60"></el-table-column>
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="[详细内容]">
                <span>{{ props.row.content }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="content" label="简介" sortable></el-table-column>
        <el-table-column prop="author" label="作者" width="100" sortable></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="small" @click="showEditDialog(scope.$index,scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    
    <el-dialog title="编辑" :visible.sync ="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
        <el-form-item label="作者" prop="author">
          <el-input v-model="editForm.author" auto-complete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name" v-if="editFormNameVisible">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="editForm.content" auto-complete="off" :rows="8"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit">提交</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
  import util from '../../common/util'
  import API from '../../api/api_aboutus';

  export default{
    data(){
      return {
        list: [],
        loading: false,

        //编辑相关数据
        editFormVisible: false,//编辑界面是否显示
        editFormNameVisible: false,
        editFormRules: {
          author: [
            {required: true, trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          content: [
            {required: true, message: '请输入内容', trigger: 'blur'}
          ]
        },
        editForm: {
          id: 0,
          author: '',
          content: '',
          name: ''
        },
      }
    },
    mounted () {
      this.search()
      let user = localStorage.getItem('access-user');
      if (user) {
        user = JSON.parse(user);
        this.editForm.author = user.username;
      }
    },
    methods: {
      search(){
        let that = this;
        that.loading = true;
        API.aboutus().then(function (result) {
          that.loading = false;
          if (result) {
            that.list = result;
          }
        }, function (err) {
          that.loading = false;
          that.$message.error({showClose: true, message: err.toString(), duration: 2000});
        }).catch(function (error) {
          that.loading = false;
          console.log(error);
          that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
        });
      },
      //显示编辑界面
      showEditDialog: function (index, row) {
        this.editFormVisible = true;
        if (row.name) {
          this.editFormNameVisible = true;
          this.editForm.name = row.name;
        } else {
          this.editFormNameVisible = false;
        }
        this.editForm = Object.assign({}, row);
      },
      //编辑
      editSubmit: function () {
        let that = this;
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            let para = Object.assign({}, this.editForm);
            // para.publishAt = (!para.publishAt || para.publishAt == '') ? '' : util.formatDate.format(new Date(para.publishAt), 'yyyy-MM-dd');
            API.aboutusUpdate(para.id, para).then(function (result) {
              that.loading = false;
              if (result && parseInt(result.errcode) === 0) {
                that.$message.success({showClose: true, message: '修改成功', duration: 2000});
                that.$refs['editForm'].resetFields();
                that.editFormVisible = false;
                that.search();
              } else {
                that.$message.error({showClose: true, message: result.errmsg, duration: 2000});
              }
            }, function (err) {
              that.loading = false;
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              that.loading = false;
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
          }
        });
      }
    }
  }
</script>

<style>
  .demo-table-expand label {
    font-weight: bold;
  }
  .el-table .cell{
    white-space: nowrap !important;
  }
</style>
