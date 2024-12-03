<template>
  <div>
    <DeckComponent :deck="deckOfCards" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DeckComponent from './components/DeckComponent.vue';
import type { Card } from './models/Card';

// Example deck of cards
const deckOfCards = ref<Card[]>([
  {
    number: 1,
    textLess: 'Worst of all',
    textMore: 'Best of all',
    source: 'deck-1'
  },
  {
    number: 2,
    textLess: 'Smallest of all',
    textMore: 'Biggest of all',
    source: 'deck-1'
  },
  {
    number: 3,
    textLess: 'Sweetest of all',
    textMore: 'Sourest of all',
    source: 'deck-1'
  },
  {
    number: 4,
    textLess: 'Oldest of all',
    textMore: 'Newest of all',
    source: 'deck-1'
  },
  {
    number: 5,
    textLess: 'Ugliest of all',
    textMore: 'Prettiest of all',
    source: 'deck-1'
  },
  {
    number: 6,
    textLess: 'Softest',
    textMore: 'Hardest',
    source: 'deck-1'
  },
  {
    number: 7,
    textLess: 'Best Actor',
    textMore: 'Hardest',
    source: 'deck-1'
  }
])

</script>
