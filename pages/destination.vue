<template>
  <div>
    <h1>destination</h1>
    <p v-if="!data">Loading...</p>
    <!-- <pre v-else>{{ data }}</pre> -->
     <p v-else>
      <p v-for="item in data">{{ item.name }}</p>
     </p>
  </div>
</template>

<script>
export default {
  setup() {
    const routeName = useRouteName();

    onMounted(() => {
      document.body.classList.add(routeName);
    })

    onUnmounted(() => {
      document.body.classList.remove(routeName);
    })
  },
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      this.data = data.destinations;
    }
    catch (error) {
      console.log(error);
    }
    console.log(this.destinations)
  }
}
</script>
