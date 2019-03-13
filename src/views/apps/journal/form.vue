<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/apps/journal/list' }">日志列表</el-breadcrumb-item>
            <el-breadcrumb-item>添加日志</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="panel__body">
          <el-form
            ref="form"
            label-width="80px"
            label-position="right">
            <el-form-item label="标题:" required>
              <el-input size="small" class="form-input" />
            </el-form-item>
            <el-form-item label="分类:" required>
              <el-input size="small" class="form-input" />
            </el-form-item>
            <el-form-item label="封面图:">
              <el-input size="small" class="form-input" />
            </el-form-item>
            <el-form-item label="简介:" required>
              <el-input
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
                @save="onSave"/>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">删除</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">提交</el-button>
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

@Component({
  name: 'JournalForm',
})
export default class JournalForm extends Vue {

  content = ''

  checked = false


  onSave (value: any, html: any) {
    console.log('保存的值:', value, html)
  }
}
</script>


<style lang="stylus" scoped>

</style>
