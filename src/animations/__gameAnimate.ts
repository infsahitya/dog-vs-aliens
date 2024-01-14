import { Game } from "../classes";
import { gameCanvas } from "../components/canvas";

const {
  CTX: GAME_CTX,
  WIDTH: CANVAS_WIDTH,
  HEIGHT: CANVAS_HEIGHT,
} = gameCanvas;

let deltaTime: number = 0;
let lastTimestamp: number = 0;
const dog_VS_aliens = new Game();

function __gameAnimate(currentTimestamp: number): void {
  GAME_CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  deltaTime = currentTimestamp - lastTimestamp;
  lastTimestamp = currentTimestamp;

  dog_VS_aliens.update(deltaTime);
  dog_VS_aliens.draw();

  requestAnimationFrame(__gameAnimate);
}

export default __gameAnimate;
