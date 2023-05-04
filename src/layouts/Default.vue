

<template>
    <!-- <header>
        <div class="container">

            <router-link :to="{ name: 'home' }"> Home</router-link>

            <ul class="">
                <li>
                    <route-link :to="{ name: 'home' }">
                        Home
                    </route-link>
                </li>
                <li>
                    <route-link :to="{ name: 'portfolio' }">
                        Portfolio
                    </route-link>
                </li>
                <li>
                    <route-link :to="{ name: 'chi-sono' }">
                        Chi Sono
                    </route-link>
                </li>
            </ul>
        </div>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        CIAO A TUTTI QUESTO è IL FOOTER
    </footer> -->
</template>

<script>
import Project from '../components/Project.vue'
export default {
    data: {

    },
    components: {
        Project
    },
    mounted() {
        console.log('hook')
    }
}
</script>

<style scoped></style>