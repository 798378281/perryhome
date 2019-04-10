<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/apps/journal/list' }">日志列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{ id ? '编辑': '添加'}}日志</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="panel__body">
          <el-form
            ref="form"
            label-width="80px"
            label-position="right">
            <el-form-item label="标题:" required>
              <el-input
                v-model="form.title"
                size="small"
                class="form-input" />
            </el-form-item>
            <el-form-item label="分类:" required>
              <el-select
                v-model="form.category"
                size="small"
                placeholder="请选择分类"
                class="form-input">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value" />
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="封面图:">
              <el-input
                v-model="form.img_url"
                size="small"
                class="form-input" />
            </el-form-item> -->
            <el-form-item label="简介:" required>
              <el-input
                v-model="form.desc"
                :rows="5"
                size="small"
                resize="none"
                class="form-input"
                type="textarea" />
            </el-form-item>
            <el-form-item label="内容:">
              <mavon-editor
                v-model="content"
                :ishljs="true"
                defaultOpen="edit"
                @save="onSave"
                @change="onChange"/>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">删除</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="onSubmit">提交</el-button>
              <el-button type="warning" @click.native="$router.go(-1)">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import api, { Journal } from '@/api/journal'
import categoryApi, { Category } from '@/api/category'
import { Form } from 'element-ui'
import { IValidationRules, IForm, TableCloumn, Option } from '@/types/common'

@Component({
  name: 'JournalForm',
})
export default class JournalForm extends Vue {
  $refs!: {
    /**
     * 表单
     */
    form: Form;
  }

  form: IForm = {
    id: '',
    title: '',
    category: '',
    img_url: '',
    desc: '',
    content: '',
  }

  content = ''

  checked = false

  options: Option[] = []

  get id () {
    return this.$route.params.id
  }

  mounted () {
    this.fetchCategoryList()
  }


  onSave (value: string, html: string) {
    this.form.content = html
  }

  onChange (value: string, html: string) {
    this.form.content = html
  }

  /**
   * 获取分类列表
   */
  async fetchCategoryList () {
    const { data: { data } } = await categoryApi.getCategoryList()
    this.options = data.map((item: Category) => {
      const { id, name } = item
      return {
        label: name,
        value: id
      }
    })
    console.log(data)
  }

  // 提交数据
  async onSubmit () {
    if (this.id) {
      // 编辑
    } else {
      // ....
      const { title, category, desc, content } = this.form
      let params: Journal = {
        title,
        category,
        desc,
        content
      }
      try {
        await api.addJournal(params)
        this.$message.success('添加成功')
      } catch (e) {
        this.$message.error('添加失败')
      }
    }
  }
  
}
</script>


<style lang="stylus" scoped>

</style>
