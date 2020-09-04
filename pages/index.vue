<template>
  <el-container>
    <el-main>
      <el-row type="flex" :gutter="30" justify="center">
        <el-col :xs="12" :sm="6">
          <img src="~/static/logo.png" alt="Vue" />
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="30" justify="center">
        <el-col :xs="12" :sm="10">
          <app-component />
        </el-col>
      </el-row>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import AppComponent from '~/components/AppComponent'

export default {
  components: {
    AppComponent
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>

<style>
.el-aside {
  color: #333;
}
</style>
