<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header">
          <h4 class="title">
            12321321321
          </h4>
          <div class="tag-bar">
            <el-tag size="small" type="success" class="ml5">标签二</el-tag>
            <el-tag size="small" type="success" class="ml5">标签二</el-tag>
            <el-tag size="small" type="success" class="ml5">标签二</el-tag>
            <el-tag size="small" type="success" class="ml5">标签二</el-tag>

            <div class="fr">
              <el-button type="primary" size="small">编辑</el-button>
            </div>
          </div>
        </div>
        <div class="panel__body"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'JournalDetail'
})
export default class JournalDetail extends Vue {
  @Prop({
    default: ''
  })
  id!: string
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 1200px
  margin 0 auto

.title
  text-align: center
  font-size: 24px
  font-weight: 700
  line-height: 1.3
</style>
