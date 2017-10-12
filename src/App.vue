<template>
  <div id="app">
    <router-view></router-view>
    <mTabbar v-model="selected">
      <mTabbarItem id='Index' isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </mTabbarItem>
      <mTabbarItem id='AudioBook' isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
        图书
      </mTabbarItem>
      <mTabbarItem id='Broadcast' isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        电影
      </mTabbarItem>
      <mTabbarItem id='Mine' isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </mTabbarItem>
    </mTabbar>
  </div>
</template>

<script>
  import mTabbar from './components/tabbar.vue'
  import mTabbarItem from './components/tabbar-item.vue'
export default {
  name: 'app',
  components:{
    mTabbar,
    mTabbarItem
  },
  data(){
    return{
      selected: 'Index',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
