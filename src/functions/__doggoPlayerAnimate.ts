import { doggo, doggoCanvas } from "../data/constants";
import { DoggoSpriteStatesNames } from "../data/constants/__doggo";

let animationFramesCount: number = 0;
const playerState: DoggoSpriteStatesNames = "ko";

function __doggoPlayerAnimate(canvasCTX: CanvasRenderingContext2D): void {
  const frame: { X: number; Y: number } = { X: 0, Y: 0 };
  let position =
    Math.floor(animationFramesCount / doggo.staggerFrame) %
    doggo.animationStates[playerState].location.length;

  frame.X = doggo.animationStates[playerState].location[position].x;
  frame.Y = doggo.animationStates[playerState].location[position].y;

  canvasCTX.clearRect(0, 0, doggoCanvas.WIDTH, doggoCanvas.HEIGHT);
  canvasCTX.drawImage(
    doggo.playerImage,
    frame.X,
    frame.Y,
    doggo.spriteWidth,
    doggo.spriteHeight,
    0,
    0,
    doggo.spriteWidth,
    doggo.spriteHeight,
  );

  animationFramesCount++;
  requestAnimationFrame(() => __doggoPlayerAnimate(canvasCTX));
}

export default __doggoPlayerAnimate;
