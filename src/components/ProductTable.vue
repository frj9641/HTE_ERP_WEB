<template>
  <table class="table">
    <thead>
      <tr>
        <th>操作序号</th>
        <th>产出品</th>
        <th>产量</th>
        <th>厂站名称</th>
        <th>排放口</th>
        <th>含水率</th>
        <th>铜干基</th>
        <th>镍干基</th>
        <th>铬干基</th>
        <th>备注</th>
        <th>日期</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in history" :key="index">
        <td>
          {{ item.produceId }}
        </td>
        <td>
          {{ item.productName }}
        </td>
        <td>
          {{ item.amount }}
        </td>
        <td>
          {{ item.factoryName }}
        </td>
        <td>
          {{ item.portName }}
        </td>
        <td>
          {{ item.water }}
        </td>
        <td>
          {{ item.cu }}
        </td>
        <td>
          {{ item.ni }}
        </td>
        <td>
          {{ item.cr }}
        </td>
        <td>
          {{ item.comment }}
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
        .get("http://localhost/product/list?factoryId=1")
        .then((res) => {
          var result = res.data;
          for (var i = result.length - 1; i >= 0; i--) {
            if (result[i].water == null) {
              result[i].water = "/";
            }
            if (result[i].cu == null) {
              result[i].cu = "/";
            }
            if (result[i].ni == null) {
              result[i].ni = "/";
            }
            if (result[i].cr == null) {
              result[i].cr = "/";
            }
            if (result[i].comment == "") {
              result[i].comment = "/";
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
