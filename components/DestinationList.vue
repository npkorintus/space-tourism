<template>
  <picture
    v-for="(destination, index) in destinations"
    :key="destination.name"
    :id="`${destination.name}-image`"
    v-show="activeTab === index"
  >
    <source :srcset="destination.images.webp" type="image/webp">
    <img :src="destination.images.png" :alt="`${destination.name} image`">
  </picture>

  <div class="tab-list underline-indicators flex" role="tablist" aria-label="destination list" @keydown="handleKeydown(activeTab, $event)">
    <button
      v-for="(destination, index) in destinations"
      :key="destination.name"
      role="tab"
      :aria-selected="activeTab === index ? 'true' : 'false'"
      class="uppercase ff-sans-cond text-accent letter-spacing-2"
      :tabindex="activeTab === index ? '0' : '-1'"
      @click="setActiveTab(index)"
    >
      {{ destination.name }}
    </button>
  </div>

  <article
    v-for="(destination, index) in destinations"
    :key="destination.name"
    v-show="activeTab === index"
    class="destination-info flow"
    :id="`${destination.name}-tab`"
    tabindex="0"
    role="tabpanel"
  >
    <h2 class="fs-800 uppercase ff-serif">{{ destination.name }}</h2>
    <p>{{ destination.description }}</p>
    <div class="destination-meta flex">
      <div>
        <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
        <p class="ff-serif uppercase">{{ destination.distance }}</p>
      </div>
      <div>
        <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
        <p class="ff-serif uppercase">{{ destination.travel }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    destinations: {
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
          this.setActiveTab((index - 1 + this.destinations.length) % this.destinations.length);
          break;
        case 'ArrowRight':
          this.setActiveTab((index + 1) % this.destinations.length);
          break;
        default:
          break;
      }
    }
  }
}
</script>
