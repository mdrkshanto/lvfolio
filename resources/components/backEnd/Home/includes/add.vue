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
              <option
                v-for="bgColor in bgColors"
                :value="bgColor.Value"
                :key="bgColor.Value"
              >
                {{ bgColor.text }}
              </option>
            </select>
            <select
              class="form-select form-select-sm text-center shadow-none"
              v-model="form.bgOpacity"
            >
              <option v-for="bgOpacity in bgOpacities" :key="bgOpacity.value" :value="bgOpacity.value">{{ bgOpacity.text }}</option>
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
            v-model="form.focusTitle"
          />
        </div>

        <div class="my-3">
          <label class="form-label">Short Description</label>
          <textarea
            class="form-control form-control-sm"
            placeholder="Short Description"
            v-model="form.shortDescription"
          />
        </div>
      </div>
    </div>
    <div
      class="card-footer"
      v-if="
        form.bgImg &&
        form.bgColor &&
        form.bgOpacity &&
        form.name &&
        form.focusTitle &&
        form.shortDescription !== null &&
        form.bgImg &&
        form.bgColor &&
        form.bgOpacity &&
        form.name &&
        form.focusTitle &&
        form.shortDescription !== ''
      "
    >
      <div class="row justify-content-between">
        <button class="col-1 btn btn-success btn-sm shadow-none">Submit</button>
        <button
          class="col-1 btn btn-secondary btn-sm shadow-none"
          @click.prevent="reset"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        // bgColors: {
        //   title: 0,
        //   blue: "primary",
        //   gray: "secondary",
        //   green: "success",
        //   red: "danger",
        //   yellow: "warning ",
        //   sky: "info",
        //   white: "light",
        //   black: "dark",
        // },
      bgColors: [
        { Value: null, text: "Background Color" },
        { Value: "primary", text: "Blue" },
        { Value: "secondary", text: "Gray" },
        { Value: "success", text: "Green" },
        { Value: "danger", text: "Red" },
        { Value: "warning", text: "Yellow" },
        { Value: "info", text: "Sky" },
        { Value: "light", text: "White" },
        { Value: "dark", text: "Black" },
      ],
      bgOpacities: [
        {value: null, text: "Opacity"},
        {value: "0", text: "0%"},
        {value: "25", text: "25%"},
        {value: "50", text: "50%"},
        {value: "75", text: "75%"},
        {value: "100", text: "100%"},
      ],
      form: new Form({
        bgImg: null,
        bgColor: null,
        bgOpacity: null,
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
    reset() {
      this.form.bgImg = null;
      this.form.bgColor = null;
      this.form.bgOpacity = null;
      this.form.name = null;
      this.form.focusTitle = null;
      this.form.shortDescription = null;
      this.$refs.bgImg.value = null;
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
