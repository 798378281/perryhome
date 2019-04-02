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
          <PTable
            :columns="col"
            :data="data"
            type="index"/>
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
import { IValidationRules, IForm, TableCloumn } from '@/types/common'
import api, { Category } from '@/api/category'
import PTable from '@/components/ptable/index.vue'


@Component({
  name: 'CategoryManage',
  components: {
    PTable
  }
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

  get col (): TableCloumn[] {
    return [
      {
        prop: 'name',
        lable: '分类名称'
      },
      {
        prop: 'desc',
        lable: '描述'
      },
      {
        lable: '操作',
        render: (h: any, params: any) => {
          let self = this
          let editBtn = h('el-button', {
            props: {
              size: 'mini',
              type: 'primary'
            },
            nativeOn: {
              click: () => {
                self.edit()
              }
            }
          }, [
            h('i', { 'class': 'el-icon-delete'}),
            '编辑'
          ])

          let deleteBtn = h('el-button', {
            props: {
              size: 'mini',
              type: 'danger'
            },
            nativeOn: {
              click: () => {
                self.deleteCategory(params.row.id)
              }
            }
          }, [
            h('i', { 'class': 'el-icon-delete'}),
            '删除'
          ])
          return h('div', [editBtn, deleteBtn])
        }
      }
    ]
  }

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
    const { data: { data } } = await api.getCategoryList()
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

  async deleteCategory (id: string) {
    try {
      await api.deleteCategory(id)
      this.$message.success('删除成功')
    } catch (err) {
      this.$message.error('删除失败')
      console.log(err)
    }
  }

}
</script>

