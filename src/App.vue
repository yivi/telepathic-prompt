<template>
    <DeckComponent :deck="deckOfCards" v-if="deckOfCards.length" />
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import DeckComponent from './components/DeckComponent.vue';
import type {Card} from './models/Card';

// Example deck of cards
const deckOfCards = ref<Card[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('https://cdn.statically.io/gh/yivi/telepathic-cards/main/cards.es.json');
    deckOfCards.value = await response.json();

  } catch (error) {
    console.error(error);
  }
})

</script>
