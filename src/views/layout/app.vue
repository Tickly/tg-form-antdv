<template>
  <div class="app">
    <div class="left">
      <Menu :menus="menus" />
    </div>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from './menu'
export default {
  components: {
    Menu,
  },
  data () {
    return {
      menus: [
        {
          name: '用户管理',
          icon: 'user',
          url: '/user/list'
        },
        {
          name: '队伍管理',
          icon: 'team',
          url: '/team/list'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.app {
  display: flex;

  .left {
    width: 200px;
  }
  .page {
    flex-grow: 1;
  }
}
</style>