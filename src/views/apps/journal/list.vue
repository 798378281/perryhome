<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header">
          <el-button
            type="primary"
            size="small">添加</el-button>
        </div>
        <div class="panel__body">
          <Media
            title="你只管写就是了，剩下的交给时间"
            content="午夜刚过，我也刚关掉电脑钻进被窝。 小时候就喜欢写点东西，慢慢的就养成了写日记的习惯，每天要不写点什么，感觉一天没完整的结束一样"
            :tags="['1123', '1123', '1123', '1123', '1123', '1123']">
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

@Component({
  name: 'JournalList',
  components: {
    Media
  }
})
export default class JournalList extends Vue {

}

</script>

<style lang="stylus" scoped>

.img
  width 150px
  height 100px
  border 1px solid #ccc
</style>


