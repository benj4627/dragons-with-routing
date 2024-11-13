<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    dragons: Array
})

</script>

<!-- I teorien skulle article card laves som en komponenet med tilhørende styling deri. Herefter skal det så styles layout mæssigt osv herinde i HomeView -->
<template>
    <h2>Her er forside</h2>
    <section>
        <RouterLink 
        v-for="dragon in dragons" :key="dragon.id"
        :to="`/dragons/${dragon.id}`">
        <article>
            <h3 class="dragonName">
                {{ dragon.name }}</h3>
            <img class="dragonImg" :src="dragon.img_url" :alt="dragon.name" />
        </article>
        </RouterLink>
    </section>
</template>

<style scoped>

    h2, section {
        grid-column: 1 / -1;
    }

    section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        background-color: rgb(252, 246, 246);
        padding: 2rem
    }

    article {
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: white;
    }

    img {
        max-width: 100%;
        max-height: 40vh;
        border-radius: 10px;
    }
</style>