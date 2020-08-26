module.exports = {
  base: '/tg-form-antdv/',
  title: 'tg-form-antdv',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      '/',
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
  }
}
