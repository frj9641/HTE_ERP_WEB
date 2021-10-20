<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/input">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>入库</p>
      </sidebar-link>
      <sidebar-link to="/admin/output">
        <i class="nc-icon nc-circle-09"></i>
        <p>出库</p>
      </sidebar-link>
      <sidebar-link to="/admin/history">
        <i class="nc-icon nc-notes"></i>
        <p>库存历史</p>
      </sidebar-link>
      <sidebar-link to="/admin/adjust">
        <i class="nc-icon nc-paper-2"></i>
        <p>调整单</p>
      </sidebar-link>
      <sidebar-link to="/admin/product">
        <i class="nc-icon nc-atom"></i>
        <p>产出品</p>
      </sidebar-link>
      <sidebar-link to="/admin/data">
        <i class="nc-icon nc-atom"></i>
        <p>质量数据采集</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->

      <!-- <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
