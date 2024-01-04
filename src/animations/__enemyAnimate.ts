import { Enemy } from "../classes";
import { enemyCanvas } from "../components/canvas";

const enemiesCollection: Enemy[] = Array.from(
  { length: 100 },
  () => new Enemy(),
);

function __enemyAnimate() {
  enemyCanvas.CTX.clearRect(0, 0, enemyCanvas.WIDTH, enemyCanvas.HEIGHT);
  enemiesCollection.forEach((enemy) => {
    enemy.updateEnemy();
    enemy.drawEnemy();
  });

  requestAnimationFrame(__enemyAnimate);
}

export default __enemyAnimate;
