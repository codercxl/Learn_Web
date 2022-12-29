<!-- <template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item"
           :class="{active: currentIndex === index}"
           @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ["tabClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("tabClick", index)
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .tab-control-item {
    flex: 1
  }
  .tab-control-item.active {
    color: red;
  }
  .tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
  }
</style>

 -->

<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-item" 
           @click="itemClick(index)"
           :class="{active: currentIndex === index}">
        <span>{{item}}</span>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentIndex: 0
      }
    },

    emits: ["tabClick"],
    methods: {
      itemClick(index) {
        this.$emit("tabClick", index)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .tab-control .tab-item {
    flex: 1
  }

  .tab-control .tab-item.active {
    color: red;
  }

  .tab-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
  }
</style>
