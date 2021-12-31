<template>
  <div class="content-wrapper">
    <Header />
    <Content />
  </div>
</template>
<script>
import Header from "./includes/ContentHeader";
import Content from "./includes/Content";
export default {
  components: { Header, Content },
};
</script>
