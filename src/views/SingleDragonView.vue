<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

//props
const props = defineProps({
    dragons: Array
})

//funktion til at finde den rigtige drage fra props

//find leder efter det korrekt params.route.id
let correctDragon = props.dragons.find(dragonItem => dragonItem.id == route.params.id)


</script>

<template>
    <article>
        <h3 class="dragonName">
            {{ correctDragon.name }}</h3>
        <img class="dragonImg" :src="correctDragon.img_url" :alt="correctDragon.name" />
        </article>
</template>

<style scoped>
    article {
        max-height: fit-content;
    }

    img {
        max-width: 100%;
    }
</style>