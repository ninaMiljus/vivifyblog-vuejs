<template>
  <div id="app">
    <div id="nav">
      <router-link to="/posts" class="me-1">Posts</router-link>
      <br/>
      <router-link to="/add" class="ms-1">Add</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
   text-decoration: none;
}

#nav a.router-link-active {
  color: var(--bs-primary);
}
</style>
