<template>
  <div class="card">
    <div class="card-header">
      <div class="row justify-content-between">
        <h3 class="card-title col">Add home</h3>
        <router-link
          :to="{ name: 'homePage' }"
          class="col-1 btn btn-sm btn-primary"
        >
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </div>
    </div>
    <div class="card-body">
      <div class="container col-8">
        <div class="mb-3">
          <label class="form-label">Background</label>
          <div class="input-group input-group-sm">
            <input
              class="form-control form-control-sm"
              type="file"
              accept="image/webp"
              @change="bgImg"
              ref="bgImg"
            />
            <select
              class="form-select form-select-sm text-center shadow-none"
              v-model="form.bgColor"
            >
              <option selected :value="bgColors.title">
                Select background color
              </option>
              <option :value="bgColors.red">Red</option>
              <option :value="bgColors.blue">Blue</option>
            </select>
            <select
              class="form-select form-select-sm text-center shadow-none"
              v-model="form.bgOpacity"
            >
              <option selected :value="bgOpacities.title">
                Select background transparency
              </option>
              <option>Select background color</option>
              <option>Select background color</option>
            </select>
          </div>
        </div>

        <div class="my-3">
          <label class="form-label">Name</label>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Full Name"
            v-model="form.name"
          />
        </div>

        <div class="my-3">
          <label class="form-label">Focus Title</label>
          <input
            class="form-control form-control-sm"
            type="text"
            placeholder="Focus Title"
            v-model="focusTitle"
          />
        </div>

        <div class="my-3">
          <label class="form-label">Short Description</label>
          <textarea
            class="form-control form-control-sm"
            placeholder="Short Description"
            v-model="shortDescription"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgColors: {
        title: 0,
        red: "red",
        blue: "blue",
      },
      bgOpacities: {
        title: 0,
        red: "red",
        blue: "blue",
      },
      form: new Form({
        bgImg: null,
        bgColor: 0,
        bgOpacity: 0,
        name: null,
        focusTitle: null,
        shortDescription: null,
      }),
    };
  },
  methods: {
    bgImg(event) {
      this.form.bgImg = event.target.files[0];
    },
  },
};
</script>
<style scoped>
textarea {
  resize: none;
  height: 10rem;
}
</style>
