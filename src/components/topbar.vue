<template>
  <header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}" >
    <div class="m-header-button is-left">
      <slot name="left"></slot>
    </div>

    <h1 class="m-header-title">{{title}}</h1>

    <div class="m-header-button is-right">
      <slot name="right"></slot>
    </div>

  </header>
</template>
<script>
  export default{
    props:{
      title:{
        type:String,
        default:'webapp'
      },
      bg:{
        type:Boolean,
        default:false
      },
      fixed:{
        type:Boolean,
        defaulet:false
      }
    }
  }
</script>
<style>
  .m-header{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: #333333;
    border-bottom:1px solid #eee;
  }
  .m-header.is-fixed{
                position: fixed;
                left: 0;
                right: 0;
                top: 0;
                z-index: 9;
  }
  .m-header .m-header-title{
    flex: 1;
    text-align: center;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .m-header .m-header-button{
    width: 70px;
    align-items:stretch;
  }
.m-header a{
    color: #666;
}
.m-header.is-bg{
       background:#666;
       color: #fff;
}
.m-header.is-bg a{
  color: #fff;
}
.m-header.is-bg .m-header-title{
    color: #fff;
}
.m-header-button.is-left{
    text-align: left;
}
.m-header-button.is-right{
   text-align: right;
}
  .m-header-button .m-icon-img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .m-header-button .margin-right-10{
    margin-right: 10px;
  }
</style>
