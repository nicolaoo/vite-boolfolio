

<template>
    <div class="post-card">
        <!-- <router-link class="text-black" :to="{ name: 'portfolioshow' }"> -->
        <h2 class="text-2xl">
            {{ project.title }}
        </h2>

        <p>
        <h4 class="font-bold py-2">CONTENT:</h4>
        {{ project.content }}
        </p>
        <ul>
            <h4 class="font-bold py-2">TECHNOLOGY:</h4>
            <li class="py-1" v-for="technology in project.technology" :key="technology.id">
                {{ technology.name }}
            </li>
        </ul>
        <ul>
            <h4 class="font-bold py-2">TYPE:</h4>
            <button class="type-btn">
                {{ project.type.name }}
            </button>
        </ul>
        <!-- </router-link> -->
    </div>
</template>
<script>

export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    components: {
    },
    mounted() {
        console.log('questa è la card')
    }
}
</script>
<style>
.post-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    align-content: baseline;
}

.type-btn {
    border: 1px;
    border-radius: 22px;
    padding: 5px;
    background-color: cornflowerblue;
}
</style>