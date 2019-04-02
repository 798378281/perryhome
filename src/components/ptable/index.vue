<template>
  <div class="p-table">
    <el-table
      :data="data"
      :style="style"
      border>
      <template
        v-for="(column, index) in columns">
        <el-table-column
          v-if="column.render"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :render-header="renderHead">
          <template v-if="column.render" slot-scope="scope">
            <Render
              :render="column.render"
              :params="scope"/>
          </template>
        </el-table-column>

        <el-table-column
          v-else
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :render-header="renderHead">
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="pager && pager.total > pager.pageSize"
      background
      small
      :layout="pager.pageType ? pager.pageType : 'prev, pager, next'"
      :total="pager.total"
      :page-size="pager.pageSize"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IRenderFunction, TableCloumn } from '@/types/common'
import Render from '../base/render'

@Component({
  name: 'PTable',
  components: {
    Render
  }
})
export default class PTable extends Vue {
  // 列配置
  @Prop({
    type: Array
  })
  columns!: TableCloumn[]

  // 数据
  @Prop({
    type: Array,
    default () { return [] }
  })
  data!: any

  // 样式
  @Prop({
    type: Object,
    default () { return {} }
  })
  tbstyle?: any

  @Prop({
    type: Object
  })
  pager?: {
    pageSize: number;
    total: number;
    pageType?: string;
  }

  get style () {
    return this.tbstyle
  }

  // 必须得用这个玩意来渲染表头的吗？直接渲染不会出来？
  renderHead (h: any, col: { column: any; $index: number}) {
    const { $index } = col
    return h('span', this.columns[$index].lable)
  }

  onSizeChange(params: any) {
    this.$emit('onSizeChange', params)
  }

  onCurrentChange(params: any) {
    this.$emit('onChange', params)
  }
}
</script>

<style lang="stylus" scoped>
.p-table
  width 100%
  height 100%
</style>

