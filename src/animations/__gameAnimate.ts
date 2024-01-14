import { gameCanvas } from "../components/canvas";

const { CTX, WIDTH: CANVAS_WIDTH, HEIGHT: CANVAS_HEIGHT } = gameCanvas;

let lastGameTime: number = 0;

function __gameAnimate(timestamp: number): void {
  CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const deltaTime: number = timestamp - lastGameTime;
  lastGameTime = timestamp;
  console.log(deltaTime);

  requestAnimationFrame(__gameAnimate);
}

export default __gameAnimate;
