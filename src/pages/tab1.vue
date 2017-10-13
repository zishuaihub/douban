<template>
    <div id="tab1">
      <mTopbar title="豆瓣app" :bg="true" fixed>
        <a slot="left"><img class="m-icon-img" src="../assets/images/ic_bar_back_green.png"/>返回</a>
        <a slot="right"><img class="m-icon-img margin-right-10" src="../assets/images/ic_actionbar_search_icon.png"/></a>
        <a slot="right"><img class="m-icon-img" src="../assets/images/ic_chat_green.png"/></a>
      </mTopbar>
    </div>
</template>

<script>
  import mTopbar from '../components/topbar.vue'

  export default {
        name: 'tab1',
        components: {mTopbar},
        data() {
            return {}
        }
    }
</script>

<style scope>


</style>
