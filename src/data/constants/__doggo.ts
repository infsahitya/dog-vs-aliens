import DOG_PLAYER_SPRITE from "../../assets/sprites/shadow_dog.png";

const playerImage: HTMLImageElement = new Image();
playerImage.src = DOG_PLAYER_SPRITE;

const staggerFrame: number = 5;

const spriteWidth: number = 575;
const spriteHeight: number = 523;

export default {
  playerImage,
  spriteWidth,
  spriteHeight,
  staggerFrame,
};
