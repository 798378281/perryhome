<template>
  <div class="wrapper">
    <div class="wrapper__menue">
      <el-menu>
        <template v-for="item in nav">
          <el-submenu
            :index="item.index"
            :key="item.index"
            v-if="item.childrens && item.childrens.length > 0">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="sub in item.childrens"
              :index="sub.index"
              :key="sub.index"
              @click="openLink(sub.path)">
              {{ sub.name }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :index="item.index"
            :key="item.index"
            @click="openLink(item.path)">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="wrapper__content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as routeName from '@/routes/route-name.ts'

@Component({
  name: 'System'
})
export default class System extends Vue {
  nav = [
    {
      index: '1',
      name: '元数据',
      icon: 'el-icon-location',
      childrens: [
        {
          index: '1-1',
          name: '分类管理',
          icon: 'el-icon-location',
          path: routeName.SYSTEM_METADATA_CATEGORY
        },
        {
          index: '1-2',
          name: '标签管理',
          icon: 'el-icon-location',
          path: routeName.SYSTEM_METADATA_TAG
        }
      ]
    },
    {
      index: '2',
      name: '系统设置',
      icon: 'el-icon-location',
      path: ''
    }
  ]

  openLink (pathName: string) {
    this.$router.push({ name: pathName })
  }
}
</script>


<style lang="stylus" scoped>
.el-menu {
  border-right none !important
}
</style>
