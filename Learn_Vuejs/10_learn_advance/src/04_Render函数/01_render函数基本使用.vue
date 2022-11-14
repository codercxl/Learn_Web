<script>
// import { createVNode } from 'vue';
import { h } from 'vue';

export default {
  render() {
    return h("div", {class: "app"}, [
      h("h2", {class: "title"}, "我是标题"),
      h("p", {class: "content"}, "我是内容"),
    ])
  }
}
</script>

<style scoped>

</style>