import { ENEMY_1, ENEMY_2, ENEMY_3, ENEMY_4 } from "../assets/sprites";

type EnemyNames = "enemy1" | "enemy2" | "enemy3" | "enemy4";

const enemy1 = new Image();
enemy1.src = ENEMY_1;
const enemy2 = new Image();
enemy2.src = ENEMY_2;
const enemy3 = new Image();
enemy3.src = ENEMY_3;
const enemy4 = new Image();
enemy4.src = ENEMY_4;

const enemies: Record<
  EnemyNames,
  { sprite: HTMLImageElement } & Record<"spriteWidth" | "spriteHeight", number>
> = {
  enemy1: {
    sprite: enemy1,
    spriteWidth: 293,
    spriteHeight: 155,
  },
  enemy2: {
    sprite: enemy2,
    spriteWidth: 293,
    spriteHeight: 155,
  },
  enemy3: {
    sprite: enemy3,
    spriteWidth: 293,
    spriteHeight: 155,
  },
  enemy4: {
    sprite: enemy4,
    spriteWidth: 293,
    spriteHeight: 155,
  },
};

export default enemies;
