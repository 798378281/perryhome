<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header">
          <el-select
            size="small"
            v-model="selected">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              />
          </el-select>
          <el-date-picker
            v-model="dateRange"
            size="small"
            class="ml10 search-input"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期" />

          <el-input
            v-model="search"
            class="ml10 search-input"
            size="small"
            placeholder="请输入搜索内容" />
          <el-button
            type="primary"
            class="ml10"
            size="small">搜索</el-button>
          <el-button
            type="primary"
            class="mr10 fr"
            size="small"
            @click.native="jumpAdd">添加</el-button>
        </div>
        <div class="panel__body">
          <Media
            title="你只管写就是了，剩下的交给时间"
            content="午夜刚过，我也刚关掉电脑钻进被窝。 小时候就喜欢写点东西，慢慢的就养成了写日记的习惯，每天要不写点什么，感觉一天没完整的结束一样"
            :tags="['1123', '1123', '1123', '1123', '1123', '1123']"
            @click.native="jumpDetils(1)">
            <div class="img"></div>
          </Media>

          <Media
            title="这个是标题"
            content="这个是内容............"
            :tags="['1123', '1123', '1123', '1123', '1123', '1123']">
            <div class="img"></div>
          </Media>

          <Media
            title="这个是标题"
            content="这个是内容............"
            :tags="['1123', '1123', '1123', '1123', '1123', '1123']">
          </Media>
        </div>

        <el-pagination
          :total="50"
          layout="prev, pager, next" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Media from '@/components/media/index.vue'
import { Option } from '@/types/common'
import { JOURNAL_DETAIL, JOURNAL_FORM } from '@/routes/route-name'
@Component({
  name: 'JournalList',
  components: {
    Media
  }
})
export default class JournalList extends Vue {
  selected = ''
  options: Option[] = [
    {
      label: '分类1',
      value: 1
    },
    {
      label: '分类2',
      value: 2
    },
    {
      label: '分类3',
      value: 3
    }
  ]
  search = ''

  dateRange = []

  jumpDetils (id: any) {
    this.$router.push({ name: JOURNAL_DETAIL, params: { id }})
  }

  jumpAdd () {
    this.$router.push({ name: JOURNAL_FORM })
  }
}

</script>

<style lang="stylus" scoped>

.img
  width 150px
  height 100px
  border 1px solid #ccc
</style>


