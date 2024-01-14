import { Enemy } from ".";

interface GAME_PROPS {
  update: (deltaTime: number) => void;
  draw: () => void;
}

class __game implements GAME_PROPS {
  private enemiesCollection: Enemy[] = [];

  constructor() {}

  update() {}
  draw() {}
  #addNewEnemy() {}
}

export default __game;
