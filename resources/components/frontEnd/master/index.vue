<template>
  <div class="container-fluid m-0 p-0">
    <Header />
    <MainMenu />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./includes/Header";
import MainMenu from "./includes/MainMenu";
import Footer from "./includes/Footer";
export default {
  components: { Header, MainMenu, Footer },
};
</script>
<style>
.text-justify {
  text-align: justify;
}

::placeholder {
  text-transform: capitalize;
}
</style>
