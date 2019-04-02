import { VNode, CreateElement, default as Vue } from 'vue'

export default Vue.extend({
  name: 'Render',

  functional: true,

  props: {
    render: Function,
    params: {
      type: Object,
      default: () => ({}),
    },
  },

  render: (h: CreateElement, ctx: any): VNode => {
    const params = ctx.props.params
    
    return ctx.props.render(h, params)
  },
})
