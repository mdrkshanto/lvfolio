<template>
  <div class="wrapper">
    <Navbar />
    <MainMenu />
    <MainContent />
  </div>
</template>
<script scoped>
import Navbar from "./includes/Navbar";
import MainMenu from "./includes/MainMenu";
import MainContent from "./includes/mainContent/index";
export default {
  components: { Navbar, MainMenu, MainContent },
  mounted() {
    import("../../../../public/backEnd/assets/dist/js/adminlte");
    import("../../../../public/backEnd/assets/dist/js/demo");
  },
};
</script>
