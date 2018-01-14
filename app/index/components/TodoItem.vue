<template>
  <div @dblclick="onDbClick()" v-show="!item.finished">
    {{item.text}}
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          finished: false,
          text: '你好,世界',
          id: 0
        };
      }
    }
  },
  methods: {
    onDbClick() {
      this.$emit('delItem', this.item.id);
    }
  }
};
</script>
<style>
</style>
