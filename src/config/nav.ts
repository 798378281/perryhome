import * as routeName from '@/routes/route-name.ts'
import { INav } from '@/types/common'

const Manue: INav[] = [
  {
    index: '1',
    name: '日志管理',
    icon: 'el-icon-location',
    path: routeName.JOURNAL_LIST
  },
  {
    index: '2',
    name: '元数据管理',
    icon: 'el-icon-location',
    childrens: [
      {
        index: '2-1',
        name: '分类管理',
        icon: 'el-icon-location',
        path: routeName.SYSTEM_METADATA_CATEGORY
      },
      {
        index: '2-2',
        name: '标签管理',
        icon: 'el-icon-location',
        path: routeName.SYSTEM_METADATA_TAG
      }
    ]
  },
  {
    index: '3',
    name: '系统设置',
    icon: 'el-icon-location',
    path: ''
  }
]

export default Manue
