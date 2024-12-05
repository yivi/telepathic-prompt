<template>
  <section class="app-container">

    <div class="ui">
      <div class="buttons-container">
        <button @click="shuffleDeck">Barajar</button>
        <button @click="revealHand">
          {{ currentDeck.length < handSize ? 'Barajar y revelar' : 'Revelar mano' }}
        </button>
        <select v-model="handSize">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <span class="deck-info" :class="{tooFew: currentDeck.length < handSize}">Cartas mazo: {{ currentDeck.length }}.</span>
      </div>

      <template v-if="currentHand">
        <div class="hand-container">
          <div v-for="card in currentHand.cards" class="card-container">
            <div class="card-half card-left">{{ card.textLeft }}</div>
            <div class="card-half card-right">{{ card.textRight }}</div>
          </div>
        </div>
      </template>
    </div>

    <div></div>

  </section>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {Card} from '../models/Card.ts';
import {Hand} from "../models/Hand.ts";

// Define props to receive the deck array
const props = defineProps<{
  deck: Card[]
}>();

// Local state to manage the deck and revealed cards
const currentDeck = ref<Card[]>([...props.deck]);
const currentHand = ref<Hand>();
const handSize = ref<number>(1);

onMounted( () => {
  shuffleDeck()
})

// Method to shuffle and reset the deck
const shuffleDeck = () => {
  currentDeck.value = [...props.deck]; // Reset the deck to its original state
  currentDeck.value.sort(() => Math.random() - 0.5);
  currentHand.value = undefined;
};

// Method to reveal the next card
const revealHand = () => {

  // if there are enough cards on the deck
  if (currentDeck.value.length < handSize.value) {
    shuffleDeck();
  }

  let cards : Card[] = [];

  for (let i = 0; i < handSize.value; i++) {
    const nextCard = currentDeck.value.shift();
    if (nextCard) {
      cards.push(nextCard);
    }
  }

  currentHand.value = {
    cards: cards,
    size: handSize.value,
  }

};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.ui {
  width: 100%;
}

.hand-container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 16px;
}

button {
  margin: 5px;
}

.card-container {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  width: 310px;
  margin: 8px 0;
  border: 1px solid #ddd;
  font-size: 0.9em;
  font-weight: bold;
}

.card-half {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  color: darkblue;
}

.card-left {
  background-color: #dff0d8; /* light green background */
}

.card-right {
  background-color: #f2dede; /* light pink background */
}

.deck-info {
  margin-left: 10px;
  font-size: 0.8em;
  font-style: italic;
}

.deck-info.tooFew {
  color: red;
}
</style>
