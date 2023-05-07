<script>
import axios from 'axios'
import ProjCard from './ProjCard.vue'

export default {
    data() {
        return {
            projects: [],
            lastpage: 0,
            currentPage: 1
        }
    },
    components: {
        ProjCard,

    },
    methods: {
        fetchProjects(page) {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: page
                }
            })
                .then(res => {
                    const results = res.data.results
                    this.projects = results.data
                    console.log(results.data)
                    this.lastpage = results.last_page
                    this.currentPage = results.current_page
                })
                .catch(err => {
                    console.log(err)
                })
        },
    },
    mounted() {
        this.fetchProjects(this.currentPage)
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
        <div class="container">
            <ul class="link-store">
                <li :class="[n === currentPage ? 'active' : '', 'color-link']" v-for="n in lastpage"
                    @click="fetchProjects(n)" :key="n">{{ n }}</li>
            </ul>
            <span :class="[this.currentPage >= 5 ? 'color-red' : 'color-green', 'color-link']">
                {{ this.currentPage }}
            </span>
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

.link-store {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
}

.color-link {
    background: #ddd;
    border-radius: 50%;
    width: 2rem;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    white-space: nowrap;
}

.color-link.active {
    background-color: khaki;
}

.color-green {
    background-color: seagreen;
}

.color-red {
    background-color: tomato;
}
</style>