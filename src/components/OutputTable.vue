<template>
  <table class="table">
    <thead>
      <tr>
        <th>药剂名称</th>
        <th>出库量(吨)</th>
        <th>日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in history" :key="index">
        <td>
          {{ item.chemicalName }}
        </td>
        <td>
          {{ item.amount }}
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
        .get("http://localhost/input?factoryId=1")
        .then((res) => {
          var result = res.data;
          for (var i = result.length - 1; i >= 0; i--) {
            if (result[i].providerId != null) {
              result.splice(i, 1);
            }
          }
          this.history = result;
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
