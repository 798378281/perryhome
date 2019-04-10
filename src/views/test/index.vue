<template>
  <div>
    <el-form>
      <el-form-item label="文件上传">
        <el-upload
          ref="upload"
          :action="''"
          :auto-upload="false"
          :limit="1"
          :http-request="upload">
          <el-button
            slot="trigger"
            type="primary"
            size="small">上传文件</el-button>  
        </el-upload>
        <el-button
          type="primary"
          size="small"
          @click="upload">点我上传</el-button>  
      </el-form-item>
    </el-form>
    <img :src="imgUrl" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { API_SERVER } from '@/config'
import api from '@/api/journal'

@Component({
  name: 'Test'
})
export default class Test extends Vue {
  $refs!: {
    /**
     * 表单
     */
    upload: any;
  }

  host: string = API_SERVER

  imgUrl = ''

  get headers () {
    return {
      'Content-Type': 'multipart/form-data' 
    }
  }

  async upload () {
    const formData = new FormData()
    const file = this.$refs.upload.uploadFiles[0]
    const headerConfig = { headers: { 'Content-Type': 'multipart/form-data' }}
    if (!file) { // 若未选择文件
      alert('请选择文件')
      return
    }
    formData.append('file', file.raw)
    const { data: { data } } = await api.upload(formData)
    console.log(data)
    this.imgUrl = data
  }

}
</script>

