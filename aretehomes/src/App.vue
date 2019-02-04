<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-toolbar color="teal lighten-1" id="toolbar">
          <h1>AreteHomes</h1>
          <ul>
              <v-btn>About</v-btn>
              <v-btn>Our Story</v-btn>
              <v-btn>Get Started</v-btn>
              <v-btn>Contact</v-btn>
          </ul>
        </v-toolbar>
      <v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#toolbar {
    display: flex;
    justify-content: flex-end;
}
</style>
