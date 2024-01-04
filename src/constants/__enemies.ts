import { ENEMY_1, ENEMY_2, ENEMY_3, ENEMY_4 } from "../assets/sprites";
import { PositionCoordinatesProps } from "./__doggo";

type EnemyNames = "enemy1" | "enemy2" | "enemy3" | "enemy4";
export type EnemyTypeProps = Record<
  EnemyNames,
  {
    sprite: HTMLImageElement;
    initAnimationStates: () => void;
    spriteAnimationStates: { location: PositionCoordinatesProps[] };
  } & Record<"spriteWidth" | "spriteHeight" | "spriteFramesCount" | "staggerFrames", number>
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
    staggerFrames: 5,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    spriteAnimationStates: {
      location: [],
    },
    initAnimationStates: function () {
      this.spriteAnimationStates.location = Array.from(
        { length: this.spriteFramesCount },
        (_, index) => {
          return { x: index * this.spriteWidth, y: 0 };
        },
      );
    },
  },
  enemy2: {
    sprite: enemy2,
    staggerFrames: 5,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    spriteAnimationStates: {
      location: [],
    },
    initAnimationStates: function () {
      this.spriteAnimationStates.location = Array.from(
        { length: this.spriteFramesCount },
        (_, index) => {
          return { x: index * this.spriteWidth, y: 0 };
        },
      );
    },
  },
  enemy3: {
    sprite: enemy3,
    staggerFrames: 5,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    spriteAnimationStates: {
      location: [],
    },
    initAnimationStates: function () {
      this.spriteAnimationStates.location = Array.from(
        { length: this.spriteFramesCount },
        (_, index) => {
          return { x: index * this.spriteWidth, y: 0 };
        },
      );
    },
  },
  enemy4: {
    sprite: enemy4,
    staggerFrames: 5,
    spriteWidth: 293,
    spriteHeight: 155,
    spriteFramesCount: 6,
    spriteAnimationStates: {
      location: [],
    },
    initAnimationStates: function () {
      this.spriteAnimationStates.location = Array.from(
        { length: this.spriteFramesCount },
        (_, index) => {
          return { x: index * this.spriteWidth, y: 0 };
        },
      );
    },
  },
};

export default enemies;
