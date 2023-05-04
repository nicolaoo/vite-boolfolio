<script>
import axios from 'axios'
import ProjCard from './ProjCard.vue'

export default {
    data() {
        return {
            projects: [],
        }
    },
    components: {
        ProjCard,

    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    const results = res.data.results
                    this.projects = results.data
                    console.log(results.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>


<template>
    <main>
        <div class="container">
            <div class="grid">
                <ProjCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </div>
    </main>
</template>

<style>
.container {
    margin: 0 auto;
    box-sizing: border-box;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>