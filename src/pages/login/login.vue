<template>
    <div id="login">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button v-on:click="login">登录</button>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
      </div>

      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTishi">{{tishi}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <button v-on:click="register">注册</button>
        <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
    </div>
</template>

<script>
    import {setCookie,getCookie} from './cookie'
    import qs from 'qs'
    export default {
        name: 'login',
        components: {},
      mounted(){
          //页面挂在cookie，如果存在username的cookie则跳转到主页，不需要登录

      },
      data(){
        return{
          showLogin: true,
          showRegister: false,
          showTishi: false,
          tishi: '',
          username: '',
          password: '',
          newUsername: '',
          newPassword: ''
        }
      },
      methods:{
        login(){
          if (this.username =='' || this.password == ''){
            alert ('请输入用户名和密码')
          }else{
            let userdata = {
              'username': this.username,
              'password': this.password,
              'action':'login'
            };
            this.$http.post(`http://localhost/index.php`,qs.stringify(userdata)).then(
              res =>{console.log(res);
                     if (res.data.login_result == false) {
                      this.tishi = '用户不存在';
                      this.showTishi = true
            }else{
                       this.setCookie('username',this.username,365);
                     }
              })

          }
        },
        register(){
          if (this.newusername =='' || this.newpassword == ''){
            alert ('请输入用户名和密码')
          }else{
            let newuserdata = {
              'username': this.newUsername,
              'password': this.newPassword,
              'action':'register'
            };
            this.$http.post(`http://localhost/index.php`,qs.stringify(newuserdata)).then(
              res =>{console.log(res);
              console.log(res.register_result)
                if (res.data.register_result == true) {
                  this.tishi = '注册成功';
                  this.showTishi = true;
                  this.username = '';
                  this.password = '';
                  setTimeout (()=>{this.showRegister =false;this.showLogin= true;this.showTishi=false},1000)
                }})

          }
        },
        ToLogin(){
          this.showRegister = false;
          this.showLogin = true;
        },
        ToRegister(){
          this.showLogin = false;
          this.showRegister = true;
        }
      }
    }

</script>

<style lang="scss">
  #login{
    .login-wrap,.register-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
  }
</style>
