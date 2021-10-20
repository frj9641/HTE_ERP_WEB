<template>
  <div class="content">
    <button type="submit" class="btn btn-info btn-fill float-right">
      新增
    </button>
    <div class="container-fluid">
      <div class="row">
        <!-- <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Striped Table with Hover</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <l-table class="table-hover table-striped"> </l-table>
          </card>
        </div> -->

        <!-- <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Table on Plain Background</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover"
                       :columns="table2.columns"
                       :data="table2.data">
              </l-table>
            </div>
          </card>
        </div> -->

        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">产出品列表</h4>
              <!-- <p class="card-category">Here is a subtitle for this table</p> -->
            </template>
            <l-table class="table-hover table-striped table-sm"> </l-table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/ProductTable.vue";
import Card from "src/components/Cards/Card.vue";

export default {
  components: {
    LTable,
    Card,
  },
  data() {
    return {};
  },
};
</script>
<style>
</style>
