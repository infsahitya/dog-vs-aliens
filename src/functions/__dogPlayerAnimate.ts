import { doggo, mainCanvas } from "../data/constants";

let animationFramesCount: number = 0;

function __dogPlayerAnimate(canvasCTX: CanvasRenderingContext2D): void {
  const frame: { X: number; Y: number } = { X: 0, Y: 0 };
  let positionX = Math.floor(animationFramesCount / doggo.staggerFrame) % 6;
  frame.X = positionX * doggo.spriteWidth;

  canvasCTX.clearRect(0, 0, mainCanvas.WIDTH, mainCanvas.HEIGHT);
  canvasCTX.drawImage(
    doggo.playerImage,
    frame.X,
    frame.Y * doggo.spriteHeight,
    doggo.spriteWidth,
    doggo.spriteHeight,
    0,
    0,
    doggo.spriteWidth,
    doggo.spriteHeight,
  );

  animationFramesCount++;
  requestAnimationFrame(() => __dogPlayerAnimate(canvasCTX));
}

export default __dogPlayerAnimate;
