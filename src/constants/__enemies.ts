import { ENEMY_1, ENEMY_2, ENEMY_3, ENEMY_4 } from "../assets/sprites";
import { initEnemyAnimationStates } from "../utils";
import { PositionCoordinatesProps } from "./__doggo";

type EnemyNames = "enemy1" | "enemy2" | "enemy3" | "enemy4";
export type EnemyTypeProps = Record<
  EnemyNames,
  {
    sprite: HTMLImageElement;
    animationType: "wiggle" | "flyOff";
    spriteAnimationStates: { location: PositionCoordinatesProps[] };
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
    spriteAnimationStates: {
      location: initEnemyAnimationStates(6, 293),
    },
  },
  enemy2: {
    sprite: enemy2,
    spriteWidth: 266,
    spriteHeight: 188,
    spriteFramesCount: 6,
    animationType: "flyOff",
    spriteAnimationStates: {
      location: initEnemyAnimationStates(6, 266),
    },
  },
  enemy3: {
    sprite: enemy3,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    animationType: "wiggle",
    spriteAnimationStates: {
      location: initEnemyAnimationStates(6, 293),
    },
  },
  enemy4: {
    sprite: enemy4,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    animationType: "wiggle",
    spriteAnimationStates: {
      location: initEnemyAnimationStates(6, 293),
    },
  },
};

export default enemies;
