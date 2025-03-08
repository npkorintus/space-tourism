<template>
  <div
    class="dot-indicators flex"
    role="tablist"
    aria-label="crew member list"
    @keydown="handleKeydown(activeTab, $event)"
  >
    <button
      v-for="(crewMember, index) in crew"
      :key="crewMember.name"
      role="tab"
      :aria-selected="activeTab === index ? 'true' : 'false'"
      class="uppercase ff-sans-cond text-accent letter-spacing-2"
      :tabindex="activeTab === index ? '0' : '-1'"
      @click="setActiveTab(index)"
    >
    <span class="sr-only">The {{ crewMember.role }}</span>
    </button>
  </div>

  <article
    v-for="(crewMember, index) in crew"
    :key="crewMember.name"
    class="crew-details flow"
    :id="`${crewMember.role}-tab`"
    role="tabpanel"
    :aria-selected="activeTab === index ? 'true' : 'false'"
    :tabindex="activeTab === index ? '0' : '-1'"
    v-show="activeTab === index"
    @click="setActiveTab(index)"
  >
    <header class="flow flow--space-small">
      <h2 class="fs-600 ff-serif uppercase">{{ crewMember.role }}</h2>
      <p class="fs-700 uppercase ff-serif">{{ crewMember.name }}</p>
    </header>
    <p>{{ crewMember.bio }}</p>
  </article>

  <picture
    v-for="(crewMember, index) in crew"
    :key="crewMember.name"
    :id="`${crewMember.name}-image`"
    v-show="activeTab === index"
  >
  <source :srcset="crewMember.images.webp" type="image/webp">
  <img :src="crewMember.images.png" :alt="`photo of ${crewMember.name}`">
  </picture>
</template>

<script>
export default {
  props: {
    crew: {
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
          this.setActiveTab((index - 1 + this.crew.length) % this.crew.length);
          break;
        case 'ArrowRight':
          this.setActiveTab((index + 1) % this.crew.length);
          break;
        default:
          break;
      }
    }
  }
}
</script>
