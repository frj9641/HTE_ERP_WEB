<template>
  <table class="table">
    <thead>
      <tr>
        <th>数据序号</th>
        <th>厂站名称</th>
        <th>采样口</th>
        <th>质量数据</th>
        <th>日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in history" :key="index">
        <td>
          {{ item.dataId }}
        </td>
        <td>
          {{ item.factoryName }}
        </td>
        <td>
          {{ item.portName }}
        </td>
        <td>
          {{ item.result }}
        </td>
        <td>
          {{ item.date }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "l-table",
  data() {
    return {
      history: [],
    };
  },
  methods: {
    loadChemicals() {
      this.$axios
        .get("http://localhost/target/list?factoryId=1")
        .then((res) => {
          this.history = res.data;
          console.log(this.history);
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    this.loadChemicals();
  },
};
</script>
<style>
</style>
