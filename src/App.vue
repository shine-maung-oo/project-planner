<template>
  <nav class="navbar">
    <router-link to="/">Projects</router-link> 
    <router-link to="/addproject">Add Project</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 50px auto;
  color: #2c3e50;
}

.navbar{
  text-align: center;
  padding-bottom: 20px;
}

.navbar a{
  font-size: 20px;
  text-decoration: none;
  color: #a4a4a4;
  margin: 0 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.navbar .router-link-active{
  color: aquamarine;
}
</style>
