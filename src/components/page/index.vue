<template>
  <div class="wrapper">
    <div class="content">
      <div class="panel panel-default">
        <div class="panel__header" v-if="breadcrumbs.length > 0">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(item, index) in breadcrumbs"
              :key="index"
              :to="{ path: item.path }">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="panel__body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IBreadcrumb } from '@/types/common'

@Component({
  name: 'JournalDetail'
})
export default class JournalDetail extends Vue {
  @Prop({
    type: Array,
    default () {
      return []
    }
  })
  breadcrumbs: IBreadcrumb[] = []

  
}
</script>
