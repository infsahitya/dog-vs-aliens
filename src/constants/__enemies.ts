import {
  SPRITE_GHOST,
  SPRITE_ALIEN_BAT,
  SPRITE_ZOMBIE_BAT,
  SPRITE_MONSTER_BAT,
  SPRITE_MONSTER_WORM,
  SPRITE_ALIEN_GRINDER,
  SPRITE_CREEPY_SPIDER,
} from "../assets/sprites";

export type ENEMY_NAMES =
  | "ZOMBIE BAT"
  | "MONSTER BAT"
  | "ALIEN BAT"
  | "ALIEN GRINDER"
  | "MONSTER WORM"
  | "GHOST"
  | "CREEPY SPIDER";

export type ENEMY_CONFIG_PROPS = {
  sprite: HTMLImageElement;
  movementType: string;
} & Record<"spriteWidth" | "spriteHeight" | "spriteFramesCount", number>;

const IMAGE_ZOMBIE_BAT = new Image();
IMAGE_ZOMBIE_BAT.src = SPRITE_ZOMBIE_BAT;

const IMAGE_MONSTER_BAT = new Image();
IMAGE_MONSTER_BAT.src = SPRITE_MONSTER_BAT;

const IMAGE_ALIEN_BAT = new Image();
IMAGE_ALIEN_BAT.src = SPRITE_ALIEN_BAT;

const IMAGE_ALIEN_GRINDER = new Image();
IMAGE_ALIEN_GRINDER.src = SPRITE_ALIEN_GRINDER;

const IMAGE_MONSTER_WORM = new Image();
IMAGE_MONSTER_WORM.src = SPRITE_MONSTER_WORM;

const IMAGE_GHOST = new Image();
IMAGE_GHOST.src = SPRITE_GHOST;

const IMAGE_CREEPY_SPIDER = new Image();
IMAGE_CREEPY_SPIDER.src = SPRITE_CREEPY_SPIDER;

const enemies: Map<ENEMY_NAMES, ENEMY_CONFIG_PROPS> = new Map([
  [
    "ZOMBIE BAT",
    {
      sprite: IMAGE_ZOMBIE_BAT,
      spriteWidth: 293,
      spriteHeight: 155,
      spriteFramesCount: 6,
      movementType: "wiggle",
    },
  ],
  [
    "MONSTER BAT",
    {
      sprite: IMAGE_MONSTER_BAT,
      spriteWidth: 266,
      spriteHeight: 188,
      spriteFramesCount: 6,
      movementType: "curve",
    },
  ],
  [
    "ALIEN BAT",
    {
      sprite: IMAGE_ALIEN_BAT,
      spriteWidth: 218,
      spriteHeight: 177,
      spriteFramesCount: 6,
      movementType: "toggling",
    },
  ],
  [
    "ALIEN GRINDER",
    {
      sprite: IMAGE_ALIEN_GRINDER,
      spriteWidth: 213,
      spriteHeight: 213,
      spriteFramesCount: 6,
      movementType: "random-spawns",
    },
  ],
  [
    "MONSTER WORM",
    {
      sprite: IMAGE_ALIEN_GRINDER,
      spriteWidth: 229,
      spriteHeight: 171,
      spriteFramesCount: 6,
      movementType: "crawl",
    },
  ],
  [
    "GHOST",
    {
      sprite: IMAGE_GHOST,
      spriteWidth: 261,
      spriteHeight: 209,
      spriteFramesCount: 6,
      movementType: "fly",
    },
  ],
  [
    "CREEPY SPIDER",
    {
      sprite: IMAGE_GHOST,
      spriteWidth: 310,
      spriteHeight: 175,
      spriteFramesCount: 6,
      movementType: "webbing",
    },
  ],
]);

export default enemies;
