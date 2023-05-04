<script>
import Project from './components/Project.vue'
import Default from './layouts/Default.vue'
import chisono from './pages/ChiSono.vue'

export default {
  components: {
    Project,
    Default,
    chisono
  }
}
</script>

<template>
  <header>
    <div class="container">

      <h1 class="font-bold text-3xl py-3 text-center">ROTTE </h1>

      <ul class="flex gap-5">
        <li>
          <router-link :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'portfolio' }">
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'chi-sono' }">
            Chi Sono
          </router-link>
        </li>
      </ul>
    </div>
  </header>
  <main>
    <router-view>
    </router-view>
  </main>
  <footer>
    <h4 class="py-5">
      CIAO A TUTTI QUESTO è IL FOOTER
    </h4>
  </footer>
</template>

<style >
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}

.container {
  margin: 0 auto;
  max-width: 900px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
