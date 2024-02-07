<template>
    <Header/>
    <div class="wrapper">
      <Sidebar/>
      <router-view></router-view>
    </div>


</template>
<style>
.wrapper {
  display: flex;
}
</style>
<script setup>
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';


</script>