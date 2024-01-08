import { ENEMY_1, ENEMY_2, ENEMY_3, ENEMY_4 } from "../assets/sprites";

type EnemyNames = "enemy1" | "enemy2" | "enemy3" | "enemy4";
export type EnemyTypeProps = Record<
  EnemyNames,
  {
    sprite: HTMLImageElement;
    animationType: "wiggle" | "curve" | "toggling" | "random";
  } & Record<"spriteWidth" | "spriteHeight" | "spriteFramesCount", number>
>;

const enemy1 = new Image();
enemy1.src = ENEMY_1;
const enemy2 = new Image();
enemy2.src = ENEMY_2;
const enemy3 = new Image();
enemy3.src = ENEMY_3;
const enemy4 = new Image();
enemy4.src = ENEMY_4;

const enemies: EnemyTypeProps = {
  enemy1: {
    sprite: enemy1,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    animationType: "wiggle",
  },
  enemy2: {
    sprite: enemy2,
    spriteWidth: 266,
    spriteHeight: 188,
    spriteFramesCount: 6,
    animationType: "curve",
  },
  enemy3: {
    sprite: enemy3,
    spriteWidth: 218,
    spriteHeight: 177,
    spriteFramesCount: 6,
    animationType: "toggling",
  },
  enemy4: {
    sprite: enemy4,
    spriteWidth: 213,
    spriteHeight: 213,
    spriteFramesCount: 6,
    animationType: "random",
  },
};

export default enemies;
