<template>
  <div class="wrapper">

    <div class="content">
      <div class="title">
        <h4>分类管理</h4>
      </div>
      <div class="panel">
        <div class="panel__header">
          <el-input
            size="small"
            style="width: 180px"
            class="input"
            placeholder="请输入关键字" />
          <el-button
            size="small"
            class="ml5"
            type="primary">
            <i class="el-icon-search"></i>
            搜索  
          </el-button>

          <el-button
            size="small"
            class="ml15"
            type="primary"
            @click="add">
            <i class="el-icon-plus"></i>
            添加
          </el-button>
        </div>

        <div class="panel__body">
          <el-table
            :data="data"
            border>
            <el-table-column
              prop="name"
              label="分类名称"/>
            <el-table-column
              prop="desc"
              label="描述"/>
            <el-table-column
              label="操作">
              <template slot-scope="">
                <el-button
                  size="mini"
                  type="primary"
                  @click="edit">
                  <i class="el-icon-edit"></i>
                  编辑
                </el-button>
                <el-button
                  size="mini"
                  type="danger">
                  <i class="el-icon-delete"></i>
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <el-pagination
            layout="prev, pager, next"
            :total="20"/>
        </div>
      </div>
    </div>

    <!-- 添加/删除对话框 -->
    <el-dialog
      append-to-body
      :title="isEdit ? '编辑': '添加'"
      :visible.sync="showDialog">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px">
        <el-form-item label="分类名称" prop="name">
          <el-input
            v-model="form.name"
            size="small"
            placeholder="请输入分类名称"/>
        </el-form-item>
        <el-form-item label="分类描述" prop="desc">
          <el-input
            v-model="form.desc"
            :rows="3"
            size="small"
            type="textarea"
            placeholder="请输入分类描述"/>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="addCategory">{{ isEdit ? '编辑' : '保存'}}</el-button>
          <el-button size="small" @click="showDialog = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form } from 'element-ui'
import { IValidationRules, IForm } from '@/types/common'
import api, { Category } from '@/api/category'

@Component({
  name: 'CategoryManage'
})
export default class CategoryManage extends Vue {

  $refs!: {
    /**
     * 表单
     */
    form: Form;
  }

  form: IForm = {
    id: '',
    name: '',
    desc: '',
  }

  isEdit = false

  showDialog = false

  /**
   * 验证规则
   */
  rules: IValidationRules = {}

  data: Category[] = []

  mounted () {
    this.fetchTableData()
  }

  add () {
    this.isEdit = false
    this.showDialog = true
  }

  edit () {
    this.isEdit = true
    this.showDialog = true
  }

  async fetchTableData (reset?: boolean) {
    const { data } = await api.getCategoryList()
    this.data = data
    console.log(data)
  }

  async addCategory () {
    const { name, desc } = this.form
    await api.addCategory({ name, desc })
    this.$message.success('添加成功')
    this.fetchTableData(true)
    this.showDialog = false
  }

}
</script>

