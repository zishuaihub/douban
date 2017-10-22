<template>
    <div id="tab4">
    tab4

    </div>
</template>

<script>
//  import {setCookie,getCookie} from './login/cookie'
    export default {
        name: 'tab4',
        components: {},
        data() {
            return {}
        },
      methods:{
        checkLogin() {
          //检查是否存在session
          if (!this.getCookie('username')) {
            this.$router.push('/login')
          }else{
            this.$router.push('/userInfo')
          }
        }
      },
      mounted() {
          this.checkLogin()
      }
    }
</script>

<style scope>


</style>
