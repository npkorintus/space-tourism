<template>
  <div class="grid-container content flow">
    <h1 class="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
    <DestinationList v-if="data" :destinations="data" />
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

    useHead({
      title: 'Space Tourism | Destination',
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
  }
}
</script>
