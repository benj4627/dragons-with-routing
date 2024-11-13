<script setup>
import {ref} from "vue";
import { RouterView } from "vue-router";
import dragonData from "@/assets/js/dragons.js";

//componenets
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";

//state
const dragons = ref(dragonData);


// 7. I HomeView skal vi nu have vist dragons. For at kunne generere en article per drage SKAL vi i HomeView have adgang til dragedata...her er to mulige måder:
//  - Importér dem (igen) i HomeView...det er lidt træls at gøre flere gange...
//  - Send props igennem <router-view> og modtag dem med defineProps() ligesom vi lærte sidst. Dette er måske nemmere, men betyder reelt at vi sender disse data til ALLE de eventuelle undersider vi nogensinde kommer til at lave...
//  - Næste gang kommer vi til at se på state management, som er en bedre måde at klare det på, men indtil da vælger vi en af ovenstående to metoder

// 8. Lav nu en ny side/view: ContactView.vue og lav her noget kontakt-agtigt

// 9. Tilføj den i router + i <nav> i App.vue. Virker det?

// 10. Lad os prøve at lave et "SingleDragonView" som på sigt skal vise den første drage. Opret det nye view, registrér den i index.js/routeren og til sidst i App.vue i <nav>. Virker det?

// 11. I SingleDragonView har vi, via props, adgang til alle drager, så lav en "udvidet" visning af den første drage (dragons[0]) med lidt mere info end i HomeView

// 12. Men...det er da lidt dumt at vi skal hardcode hver eneste drage...vi skal have gang i dynamisk routing. Se dagens video eller læs op på de her to steder: https://router.vuejs.org/guide/essentials/dynamic-matching.html & https://router.vuejs.org/guide/advanced/composition-api.html Prøv at se et eksempel på hvordan det kunne se ud: https://youtu.be/ZgDwze7ed1k

// 12.1 Opdatér routeren så den sender alle url'er med /dragon/12 og /dragon/BLAH over til SingleDragonView

// 12.2 I SingleDragonView skal vi nu fange id'et fra urlen og vise den rigtige drage - ikke bare den første som vi gjorde før

// 12.3 Nu mangler vi bare at opdatere navigationen i App.vue - prøv det

// 12.4 Kan vi gøre det bedre? Er det en pæn navigation? Hvad med at de enkelte "dragon cards" i HomeView fungerer som links? Do it og slet de dumme 20 links i nav!
</script>

<template>
  <TheHeader></TheHeader>
  <TheNav></TheNav>
  <main><!-- Her skal vi vise vores "undersider" -->
  <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  max-width: 1000px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 6px;
}

nav {
  display: flex;
  justify-content: center;
}

a {
  color: red;
  text-decoration: none;
  display: block;
  padding: 1rem;
  transition: all 0.3s;
}

a:hover {
  background: #ddd;
}
</style>
