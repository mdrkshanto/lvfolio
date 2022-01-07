<template>
  <main :class="`bg-${data.bgColor} text-light`">
    <img
      :src="data.bgImg"
      :class="`card-img img-fluid opacity-${data.bgOpacity} h-100`"
      alt=""
    />
    <section
      class="
        card-img-overlay
        d-flex
        flex-column
        justify-content-center
        align-items-center
        h-100
      "
    >
      <h3 class="card-title fw-bolder">
        <span class="me-1">I am</span
        ><span class="text-capitalize ms-1">{{ data.name }}</span>
      </h3>
      <span class="display-4 fw-bolder text-capitalize"
        >{{ data.focusTitle }}</span
      >
      <p class="lead w-50 text-center">{{ data.shortDescription }}</p>
    </section>
  </main>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("homeData");
  },
  computed: {
    data() {
      return this.$store.getters.homeData;
    },
  },
};
</script>
<style scoped>
main {
  height: 88.3vh;
}
</style>
