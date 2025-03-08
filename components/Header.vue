<template>
  <header class="header flex">
    <div>
      <img src="~/assets/images/shared/logo.svg" alt="space tourism logo" class="logo" />
    </div>

    <!-- Mobile Navigation Toggle Button -->
    <button
      class="mobile-nav-toggle"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
      aria-controls="navigation"
    >
      <span class="sr-only">Menu</span>
    </button>

    <!-- Navigation -->
    <nav>
      <ul
        id="navigation"
        :data-visible="isMenuOpen"
        class="navigation underline-indicators flex"
      >
        <!-- <li v-for="link in navLinks" :key="link.title" >
          <NuxtLink activeClass="active" class="ff-sans-cond uppercase text-white letter-spacing-2" :to="link.path">
            <span aria-hidden="true">{{ link.id }}</span>{{ link.title }}
          </NuxtLink>
        </li> -->
        <NuxtLink v-for="link in navLinks" exact-active-class="active" class="ff-sans-cond uppercase text-white letter-spacing-2" :to="link.path">
          <li><span aria-hidden="true">{{ link.id }}</span>{{ link.title }}</li>
        </NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { id: '01', title: 'Home', path: '/' },
        { id: '02', title: 'Destination', path: '/destination' },
        { id: '03', title: 'Crew', path: '/crew' },
        { id: '04', title: 'Technology', path: '/technology' },
      ],
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
