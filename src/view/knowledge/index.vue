<template>
  <div id="knowledge">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from '@/components/header'

export default {
  name:'knowledge',
  components:{Header,}
}
</script>


