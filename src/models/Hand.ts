import { Card } from "./Card.ts";

export interface Hand {
  cards: Card[];
  size: number;
}
