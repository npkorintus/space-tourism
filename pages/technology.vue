<template>
  <div class="grid-container content flow">
    <h1 class="numbered-title"><span aria-hidden="true">03</span> Space Launch 101</h1>
    <TechnologyList v-if="data" :technology="data" />
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
      title: 'Space Tourism | Technology',
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
      this.data = data.technology;
    }
    catch (error) {
      console.error(error);
    }
  }
}
</script>
