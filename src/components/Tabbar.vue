<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected">
      <mt-tab-item
        v-for="nav in navs"
        :key="nav.path"
        :id="nav.name">
        <img slot="icon" src="../assets/100x100.png">
        {{nav.meta.navTitle}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import routes from '../router/routes'
export default {
  name: 'Tabbar',
  data() {
    return {
      selected: 'home',
      navs: routes.filter(curr => curr.meta.isNav)
    }
  },
  watch: {
    selected(v) {
      this.$router.push({name: v})
    }
  }
}
</script>

<style>

</style>
