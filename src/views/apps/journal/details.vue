<template>
  <Page>
    <h1>123</h1>
  </Page>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { IBreadcrumb } from '@/types/common'

@Component({
  name: 'JournalDetail'
})
export default class JournalDetail extends Vue {
  @Prop({
    default: ''
  })
  id!: string

  breadcrumbs: IBreadcrumb[] = []
}
</script>

<style lang="stylus" scoped>

</style>
