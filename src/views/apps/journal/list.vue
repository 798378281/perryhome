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
            title="这个是标题"
            content="这个是内容............"
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
            <div class="img"></div>
          </Media>
        </div>

        <div class="panel__footer">
          <el-pagination
            :total="50"
            layout="prev, pager, next" />
        </div>
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
  width 80px
  height 80px
  border 1px solid #ccc
</style>


