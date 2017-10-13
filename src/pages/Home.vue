<template>
    <div id="Home">
      <router-view/>
      <mTabbar v-model="selected">
        <mTabbarItem id='tab1' isRouter>
          <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
          <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
          首页
        </mTabbarItem>
        <mTabbarItem id='tab2' isRouter>
          <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
          <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
          图书
        </mTabbarItem>
        <mTabbarItem id='tab3' isRouter>
          <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
          <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
          电影
        </mTabbarItem>
        <mTabbarItem id='tab4' isRouter>
          <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
          <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
          我的
        </mTabbarItem>
      </mTabbar>
    </div>
</template>

<script>
  import mTabbar from '../components/tabbar.vue'
  import mTabbarItem from '../components/tabbar-item.vue'
    export default {
        name: 'Home',
        components:{
        mTabbar,
        mTabbarItem
         },
        data() {
          return {
            selected: 'tab1',
          }
        },
      methods:{

        },
      mounted() {
        this.selected=(this.$route.path).substring(1)
      }

    }
</script>

<style scope>


</style>
