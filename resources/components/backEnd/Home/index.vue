<template>
  <div class="card">
    <div class="card-header">
      <div class="row justify-content-between">
        <h3 class="card-title col">Home page</h3>
        <router-link
          :to="{ name: 'addHome' }"
          class="btn btn-sm shadow-none btn-primary col-1"
          ><i class="fas fa-plus"></i
        ></router-link>
      </div>
    </div>
    <div class="card-body">
      <table
        class="
          table table-sm table-dark table-striped table-borderless
          text-center
        "
      >
        <thead>
          <tr>
            <th class="align-middle">Background</th>
            <th class="align-middle">Name</th>
            <th class="align-middle">Focus Title</th>
            <th class="align-middle">Short Description</th>
            <th class="align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-middle">
              <main :class="`bg-${data.bgColor} position-relative rounded`">
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
                ></section>
              </main>
            </td>
            <td class="align-middle">{{ data.name }}</td>
            <td class="align-middle">{{ data.focusTitle }}</td>
            <td class="align-middle">{{ data.shortDescription }}</td>
            <td class="align-middle">
              <a href="#" class="btn btn-sm btn-primary">
                <i class="fas fa-edit"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("adminHomeData");
  },
  computed: {
    data() {
      return this.$store.getters.adminHomeData;
    },
  },
};
</script>
<style scoped>
main {
  height: 4rem;
  width: 10rem;
}
</style>
