<template>
  <div id="app">
    <h1>{{ msg }}</h1>
      <my-menu title="Propriedade do Menu" v-on:menu-click="OnMenuClick">
          <ul>
              <li>Slot 1</li>
              <li>Slot 2</li>
              <li>Slot 3</li>
          </ul>
      </my-menu>
  </div>
</template>

<script>
  import MyMenu from './Mymenu.vue'

export default {
  name: 'app',
    components:{
      MyMenu
    },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
      OnMenuClick: function(e) {
          alert("Click no Menu")
      }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


h1, h2 {
  font-weight: normal;
}
</style>
