<template>
  <div class="grid-container hero">
    <div>
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
      <span class="d-block fs-900 ff-serif text-white">Space</span></h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div>
      <NuxtLink href="/destination" class="large-button uppercase ff-serif text-dark bg-white">Explore</NuxtLink>
    </div>
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
  }
};
</script>
