import { enemyCanvas } from "../components/canvas";

interface EnemyProps {
  updateEnemy: () => void;
  drawEnemy: () => void;
}

class __enemy implements EnemyProps {
  private sx: number;
  private sy: number;
  private sw: number;
  private sh: number;
  private speed: number;
  private enemySprite: HTMLImageElement;

  constructor(
    enemySprite: HTMLImageElement,
    spriteWidth: number,
    spriteHeight: number,
  ) {
    this.sx = Math.random() * enemyCanvas.WIDTH;
    this.sy = Math.random() * enemyCanvas.HEIGHT;
    this.sw = spriteWidth;
    this.sh = spriteHeight;
    this.speed = Math.random() * 4 - 2;
    this.enemySprite = enemySprite;
  }

  updateEnemy() {
    this.sx += this.speed;
    this.sy += this.speed;
  }

  drawEnemy() {
    enemyCanvas.CTX.drawImage(
      this.enemySprite,
      0,
      0,
      this.sw,
      this.sh,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
    );
  }
}

export default __enemy;
