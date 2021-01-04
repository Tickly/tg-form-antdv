const path = require('path')

module.exports = {
  base: '/erpack/',
  title: 'erpack',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/',
      // 模型
      {
        title: 'ErpackModel - 模型',
        children: [
          '/erpack-model/',
          // {
          //   title: '类装饰器', children: [
          //     '/erpack-model/decorators/class/describable'
          //   ]
          // },
          // {
          //   title: '属性装饰器', children: [
          //     '/erpack-model/decorators/property/label',
          //     '/erpack-model/decorators/property/dict',
          //   ]
          // },
        ]
      },
      // 表单
      {
        title: 'ErpackForm - 表单组件',
        children: [
          '/erpack-form/',

          '/erpack-form/basic-usage',
          '/erpack-form/coordinated-controls',
          '/erpack-form/dynamic-rules',
          '/dynamic-form-item',
          '/erpack-form/search',

          // '/customized-form-controls',
          // {
          //   title: '表单验证',
          //   children: [
          //     '/validate/array'
          //   ]
          // },
          // {
          //   title: 'API',
          //   children: [
          //     '/api/tg-form',
          //     '/api/tg-form-item',
          //   ]
          // }
        ]
      },
      // 表格
      {
        title: 'ErpackTable - 表格组件',
        children: [
          '/erpack-table/',

          '/erpack-table/basic-usage',
          '/erpack-table/selection',
        ]
      },
      // 
      {
        title: 'Mixins',
        children: [
          '/mixins/list'
        ]
      }

    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'erpack': path.resolve(__dirname, '../../src/components/index.js')
      }
    }
  }
}

