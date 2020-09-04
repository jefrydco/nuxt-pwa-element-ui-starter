<template>
  <div id="component" style="margin-bottom: 24px">
    <el-date-picker
      v-model="example"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      example: null
    }
  }
}
</script>
