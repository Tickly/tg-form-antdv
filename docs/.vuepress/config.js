module.exports = {
  base: '/tg-form-antdv/',
  title: 'tg-form-antdv',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/',
      {
        title: 'Model - 模型',
        children: [
          '/Model'
        ]
      },
      {
        title: 'ModelForm - 模型表单组件',
        children: [
          '/model-form',
          {
            title: '示例',
            children: [
              '/basic',
              '/coordinated-controls',
              '/dynamic-rules',
              '/inline-login-form',
              '/form-layout',
              '/dynamic-form-item',

              '/customized-form-controls'
            ]
          },
          {
            title: '表单验证',
            children: [
              '/validate/array'
            ]
          },
          {
            title: 'API',
            children: [
              '/api/tg-form',
              '/api/tg-form-item',
            ]
          }
        ]
      },
      {
        title: 'ModelTable - 模型表格组件',
        children: []
      },

    ]
  },

}
