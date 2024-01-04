import { Enemy } from "../classes";
import { enemyCanvas } from "../components/canvas";
import { enemies } from "../constants";

const enemiesCollection: Enemy[] = Array.from({ length: 10 }, () => {
  const { sprite, spriteWidth, spriteHeight } = enemies.enemy1;
  return new Enemy(sprite, spriteWidth, spriteHeight);
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
