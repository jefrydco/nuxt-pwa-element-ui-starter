<template>
  <el-container>
    <app-aside />
    <nuxt />
  </el-container>
</template>

<script>
import AppAside from '~/components/AppAside'

export default {
  components: {
    AppAside
  },
  data() {
    return {}
  }
}
</script>
