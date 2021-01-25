import { ErpackForm, ErpackFormItem } from '../Form'

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
    actionWidth () {
      console.log(this.$refs)
      if (!this.$refs.action) return 0
    }
  },
  mounted () {
    if (this.toggle && this.showItemNum <= this.items.length) {
      this.toggleAdvanced()
    }
  },
  methods: {
    renderItem (h, item) {
      // const config = {}
      const config =
        typeof item === 'string'
          ? this.Model.getQuery(item)
          : item
      const { component, prop, label, alwaysshow, ...props } = config
      return h(
        ErpackFormItem,
        {
          props: {
            prop,
            label,
          },
          key: prop,
          ref: 'itemRefs',
          refInFor: true,
        },
        [
          h(component || 'a-input', {
            props: {
              ...props,
              value: this.searchParams[prop],
            },
            attrs: {
              alwaysshow,
            },
            on: {
              change: e => {
                if (e instanceof Event) {
                  e = e.target.value
                }
                this.$set(this.searchParams, prop, e)
              },
            },
          }),
        ]
      )
    },
    renderActions () {
      return (
        <div class="search-action" style="float: right" ref="action">
          <a-space>
            <a-button type="primary" onClick={() => this.search()}>
              搜索
            </a-button>
            <a-button onClick={() => this.reset()}>重置</a-button>
            {this.toggle ? (
              <a onClick={() => this.toggleAdvanced()}>
                {this.advanced ? '收起' : '展开'}
                <a-icon type={this.advanced ? 'up' : 'down'} />
              </a>
            ) : (
                ''
              )}
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
        btnWidth = this.$refs.btns.offsetWidth + 20
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
          form: new this.Model(),
          layout: 'inline',
          noValidate: true
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
            ...this.items.map(item => this.renderItem(h, item)),
            this.renderActions(),
          ]
        ),
      ]
    )
  },
}
