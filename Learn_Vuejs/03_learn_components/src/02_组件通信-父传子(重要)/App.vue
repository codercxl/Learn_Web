<template>
  <!-- <show-info name="cxl" age="18" height="1.88"></show-info>
  <show-info name="why" age="19" height="1.98"></show-info> -->
  <!-- 传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为 非Prop的Attribute -->
  <!-- 当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中 -->
  <show-info name="cxl" :age="18" :height="1.88" 
              class="aaa" cxl="bbb"/>
  <show-info name="why" :age="19" :height="1.98" />
  <show-info :age="100" show-message="呵呵呵呵" />

</template>

<script>
  import ShowInfo from './ShowInfo.vue';

  export default {
    components: {
      ShowInfo
    }
  }
</script>

<style scoped>
</style>


