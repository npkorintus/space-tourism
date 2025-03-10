<template>
  <!-- image -->
  <picture
    v-for="(tech, index) in technology"
    :key="tech.name"
    :id="`${tech.name}-image`"
    v-show="activeTab === index"
  >
    <source media="(max-width: 768px)" :srcset="tech.images.landscape">
    <source media="(min-width: 769px)" :srcset="tech.images.portrait">
    <img :src="tech.images.portrait" :alt="`photo of ${tech.name}`">
  </picture>

  <!-- tabs -->
  <div
    class="number-indicators flex"
    role="tablist"
    aria-label="technology list"
    @keydown="handleKeydown(activeTab, $event)"
  >
    <button
      v-for="(tech, index) in technology"
      :key="tech.name"
      role="tab"
      :aria-selected="activeTab === index ? 'true' : 'false'"
      class="fs-500 ff-serif text-white"
      :tabindex="activeTab === index ? '0' : '-1'"
      @click="setActiveTab(index)"
    >
      <span>{{ index + 1}}</span>
    </button>
  </div>

  <!-- content -->
  <article
    v-for="(tech, index) in technology"
    :key="tech.name"
    class="tech-details flow"
    :id="`${tech.name}-tab`"
    role="tabpanel"
    :aria-selected="activeTab === index ? 'true' : 'false'"
    :tabindex="activeTab === index ? '0' : '-1'"
    v-show="activeTab === index"
    @click="setActiveTab(index)"
  >
    <header class="flow flow--space-small">
      <h2 class="fs-600 ff-serif uppercase">The terminology...</h2>
      <p class="fs-700 uppercase ff-serif">{{ tech.name }}</p>
    </header>
    <p class="text-accent">{{ tech.description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    technology: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
    handleKeydown(index, event) {
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          this.setActiveTab((index - 1 + this.technology.length) % this.technology.length);
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          this.setActiveTab((index + 1) % this.technology.length);
          break;
        default:
          break;
      }
    }
  }
}
</script>
