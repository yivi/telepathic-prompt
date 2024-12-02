<template>
  <div>
    <DeckComponent :deck="deckOfCards" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeckComponent from './components/DeckComponent.vue';

// Example deck of cards
const deckOfCards = ref(['Ace of Spades', '2 of Hearts', '3 of Diamonds', '4 of Clubs']);
</script>
