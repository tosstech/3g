<template>
  <div id="app">
    <router-view/>
    <router-view name="Header" />
    <router-view name="Content" />
    <router-view name="Foot" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background:#22272b;
}

</style>

