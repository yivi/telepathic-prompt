<template>
  <section class="app-container">

    <div class="ui">
      <div class="buttons-container">
        <button @click="shuffleDeck">Shuffle Deck</button>
        <button @click="revealCard" :disabled="currentDeck.length === 0">
          {{ currentDeck.length === 0 ? 'No more cards' : 'Reveal Card' }}
        </button>
      </div>

      <div class="cards-container">
        <div v-for="(card, index) in revealedCards" :key="index" class="card-container">
          <div class="card-half card-left">{{ card.textLess }}</div>
          <div class="card-half card-right">{{ card.textMore }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {Card} from '../models/Card.ts';

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
      revealedCards.value.unshift(nextCard); // Add to the top of the list
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.ui {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  /* Center buttons vertically */
}

.cards-container {
  overflow-y: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column-reverse; /* Makes new cards appear from top */
  align-items: start;
  position: absolute;
}

button {
  margin: 5px;
}

.card-container {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  margin: 16px 0;
  border: 1px solid #ddd;
}

.card-half {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: darkblue;
}

.card-left {
  background-color: #dff0d8; /* light green background */
}

.card-right {
  background-color: #f2dede; /* light pink background */
}
</style>
