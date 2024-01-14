import { Enemy, ZombieBat } from ".";

interface GAME_PROPS {
  update: (deltaTime: number) => void;
  draw: () => void;
}

class __game implements GAME_PROPS {
  private enemiesCollection: Enemy[] = [];

  constructor() {}

  update(deltaTime: number) {
    this.enemiesCollection.forEach((enemy) => enemy.update(deltaTime));
  }
  draw() {
    this.enemiesCollection.forEach((enemy) => enemy.draw());
  }
  #addNewEnemy() {
    this.enemiesCollection.push(new ZombieBat());
  }
}

export default __game;
