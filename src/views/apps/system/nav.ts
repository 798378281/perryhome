import * as routeName from '@/routes/route-name'

export interface Nav {
  label: string;
  pathName: string;
}

const Navs: Nav[] = [
  {
    label: '菜单1',
    pathName: routeName.SYSTEM
  },
  {
    label: '菜单2',
    pathName: routeName.SYSTEM
  },
  {
    label: '菜单3',
    pathName: routeName.SYSTEM
  },
  {
    label: '菜单4',
    pathName: routeName.SYSTEM
  }
]

export default Navs
