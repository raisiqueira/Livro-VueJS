<template>
  <div id="app">
    <app-header></app-header>

    <app-content></app-content>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './layouts/AppHeader.vue'
  import AppContent from './layouts/AppContent.vue'
  import AppFooter from './layouts/AppFooter.vue'

export default {
  name: 'app',
    components: {
      AppHeader, AppContent, AppFooter
    },
    created: function () {
        Materialize.toast('Olar', 1000)
    }
}
</script>

<style scoped>

</style>
