<template>
  <div class="grid-container content flow">
    <h1 class="numbered-title"><span aria-hidden="true">01</span> Meet your crew</h1>
    <CrewList v-if="data" :crew="data" />
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
      title: 'Space Tourism | Crew',
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
      this.data = data.crew;
    }
    catch (error) {
      console.log(error);
    }
  }
}
</script>
