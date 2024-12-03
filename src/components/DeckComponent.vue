<template>
  <div>
    <button @click="shuffleDeck">Shuffle Deck</button>
    <button @click="revealCard" :disabled="currentDeck.length === 0">
      {{ currentDeck.length === 0 ? 'No more cards' : 'Reveal Card' }}
    </button>
    <div v-if="revealedCards.length > 0">
      <div v-for="(card, index) in revealedCards" :key="index">
        {{ card.textLess + '  <--->  ' + card.textMore }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Card} from "../models/Card.ts";

// Define props to receive the deck array
const props = defineProps<{
  deck: Card[]
}>();

// Local state to manage the deck and revealed cards
const currentDeck = ref<Card[]>([...props.deck]);
const revealedCards = ref<Card[]>([]);

// Method to shuffle and reset the deck
const shuffleDeck = () => {
  currentDeck.value = [...props.deck]; // Reset the deck to its original state
  currentDeck.value.sort(() => Math.random() - 0.5);
  revealedCards.value = []; // Clear revealed cards
};

// Method to reveal the next card
const revealCard = () => {
  if (currentDeck.value.length > 0) {
    const nextCard = currentDeck.value.shift();
    if (nextCard) {
      revealedCards.value.unshift(nextCard);
    }
  }
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
