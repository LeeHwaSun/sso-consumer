<template>
  <q-btn @click="goJoin">
    <slot></slot>
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue'
import Config from '../../../config'

export default defineComponent({
  name: 'JoinBtn',
  data() {
    return {}
  },
  methods: {
    goJoin() {
      const href = `${Config.SSO_SERVER}/auth/Join?next=${location.origin}${this.$route.fullPath}`;
      window.location = href;
    }
  }
});
</script>

<style lang='scss' scoped>
</style>
