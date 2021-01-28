import { ErpackForm, ErpackFormItem } from '../Form'
import './index.less'
export const ErpackSearch = {
  name: 'ErpackSearch',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    Model: Function,
    columns: {
      type: Number,
      default: 3,
    },
    showItemNum: {
      type: Number,
      default: 3,
    },
    toggle: {
      type: [Boolean, String],
      default: true,
    },
    labelWidth: {
      type: String,
      default: '8em'
    }
  },
  data () {
    return {
      searchParams: {},
      advanced: true,
    }
  },
  computed: {
    className () {
      if (this.showItemNum > this.items.length && this.advanced)
        return 'page-search-wrap'
      if (this.showItemNum <= this.items.length && !this.advanced)
        return 'page-search-nowrap'
      return 'page-search-wrap'
    },
    modelItems () {
      return this.items.map(item => {
        const config =
          typeof item === 'string'
            ? this.Model.getQuery(item)
            : item
        if (!config.label) {
          if (this.Model.getLabel(config.prop)) label = this.Model.getLabel(config.prop)
        }
        return config
      })
    }
  },
  watch: {
    searchParams: {
      deep: true,
      handler () {
        this.$nextTick(() => {
          this.setItemWidth()
        })
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.toggleAdvanced();
    })
  },
  methods: {
    renderItem (h, item) {
      let { component, prop, label, ...props } = item
      const tag = component || 'a-input'
      return <ErpackFormItem ref="itemRefs" key={prop} refInFor prop={prop} label={label}>
        <tag {...props} vModel={this.searchParams[prop]}></tag>
      </ErpackFormItem>
    },
    renderActions () {
      return (
        <div class="search-action" style="float: right" ref="action">
          <a-space>
            <a-button type="primary" onClick={() => this.search()}>
              搜索
            </a-button>
            <a-button onClick={() => this.reset()}>重置</a-button>
            {
              this.items.length > this.showItemNum && (
                <a onClick={() => this.toggleAdvanced()}>
                  {this.advanced ? '收起' : '展开'}
                  <a-icon type={this.advanced ? 'up' : 'down'} />
                </a>
              )
            }
          </a-space>
        </div>
      )
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
      this.$refs.itemRefs.forEach(({ $el }, index) => {
        switch (this.toggle) {
          case 'attr':
            if (!$el.hasAttribute('alwaysshow')) {
              $el.classList.toggle('hide', !this.advanced)
            }
            break
          default:
            if (index > this.showItemNum - 1) {
              $el.classList.toggle('hide', !this.advanced)
            }
            break
        }
      })
      this.$nextTick(() => {
        this.setItemWidth()
      })
    },
    setItemWidth () {
      const items = this.$el.querySelectorAll(
        '.search-from .ant-form-item'
      )
      let btnWidth = 0
      if (this.className === 'page-search-nowrap') {
        btnWidth = this.$refs.action.offsetWidth + 20
      }
      items.forEach((el) => {
        el.style.width = `calc((100% - ${btnWidth}px) / ${this.columns})`
      })
    },
    search () {
      this.emit()
    },
    reset () {
      this.searchParams = {}
      this.emit()
    },
    emit () {
      this.$emit('search', this.searchParams)
    },
  },
  render (h) {
    return h(
      ErpackForm,
      {
        props: {
          columns: this.columns,
          layout: 'inline',
          noValidate: true,
          labelWidth: this.labelWidth,
        },
        class: 'search-from',
      },
      [
        h(
          'div',
          {
            class: this.className,
          },
          [
            ...this.modelItems.map(item => this.renderItem(h, item)),
            this.renderActions(),
          ]
        ),
      ]
    )
  },
}
