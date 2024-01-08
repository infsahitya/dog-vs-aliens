import { Enemy } from "../classes";
import { enemyCanvas } from "../components/canvas";
import { enemies } from "../constants";

const enemyCount: number = 10;

const enemiesCollection: Enemy[] = Array.from({ length: enemyCount }, () => {
  return new Enemy(enemies.enemy2);
});

function __enemyAnimate() {
  enemyCanvas.CTX.clearRect(0, 0, enemyCanvas.WIDTH, enemyCanvas.HEIGHT);
  enemiesCollection.forEach((enemy) => {
    enemy.updateEnemy();
    enemy.drawEnemy();
  });

  requestAnimationFrame(__enemyAnimate);
}

export default __enemyAnimate;
