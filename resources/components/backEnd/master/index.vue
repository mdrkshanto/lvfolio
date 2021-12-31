<template>
  <div class="wrapper">
    <Navbar />
    <MainMenu />
    <MainContent />
  </div>
</template>
<script>
import Navbar from "./includes/Navbar";
import MainMenu from "./includes/MainMenu";
import MainContent from "./includes/mainContent/index";
export default {
  components: { Navbar, MainMenu, MainContent },
};
</script>
